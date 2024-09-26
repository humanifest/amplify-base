import { AuthContext } from "@/src/contexts/providers/ProviderAuth";
import { type _UserProfile } from "@/data-schema";
import { useContext, useEffect, useState, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/src/contexts/routes";
import { UserProfileUpdateForm } from "@/src/components";
import client from "@/src/utils/amplifyClient";
import { AccountSettings, Card, Heading } from "@aws-amplify/ui-react";

export default function UserProfile() {
  const { state: auth } = useContext(AuthContext);
  const [profile, setProfile] = useState<_UserProfile>();

  const nav = useNavigate();
  const getProfile = useCallback(async () => {
    const { data: profiles } = await client.models.UserProfile.list({
      filter: {
        email: {
          eq: auth?.attributes?.email,
        },
      },
    });
    profiles.length && setProfile(profiles[0]);
  }, [auth]);

  useEffect(() => {
    getProfile();
  }, [auth, getProfile]);

  const handleDelete = async () => {
    console.log("Doing some clean up...");
    console.log("Done!");
    // await Auth.deleteUser();
  };

  return (
    <>
      <UserProfileUpdateForm
        userProfile={profile}
        overrides={{
          uuid: {
            display: "none",
            disabled: true,
          },
          email: {
            display: "none",
            disabled: true,
          },
          profileOwner: {
            display: "none",
            disabled: true,
          },
          avatar: {
            display: "none",
            disabled: true,
          },
        }}
        onSubmit={(fields) => {
          nav(ROUTES.access.dashboard._);
          return fields;
        }}
      />

      <Card>
        <Heading>Change Password</Heading>
        <AccountSettings.ChangePassword />
      </Card>
      <Card>
        <Heading>Delete Account</Heading>
        <AccountSettings.DeleteUser handleDelete={handleDelete} />
      </Card>
    </>
  );
}
