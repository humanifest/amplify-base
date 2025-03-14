import { _UserProfile } from "@/data-schema";
import { AuthContext } from "@/src/contexts/providers";
import client from "@/src/utils/amplifyClient";
import {
  Table,
  TableBody,
  // TableCell,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import { useCallback, useContext, useEffect, useState } from "react";
import DashboardFeed from "./DashboardFeed";

function Accounts() {
  // const [balance] = useState(0);
  // const [accountNumber] = useState(0);
  // const [accountType] = useState("Checking");
  const { state: auth } = useContext(AuthContext);
  const [profile, setProfile] = useState<_UserProfile>();

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

  return (
    <>
      <>Accounts</>
      <Table>
        <TableHead>
          <TableRow>
            {/* <TableRow as="th">Number</TableRow>
            <TableCell as="th">Type</TableCell> */}
            <TableRow as="th">Balance</TableRow>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {/* <TableRow>{profile?.uuid}</TableRow>
            <TableCell>{profile?.profileOwner}</TableCell> */}
            <TableRow>{profile?.balance ?? 0}</TableRow>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <Accounts></Accounts>
      <DashboardFeed></DashboardFeed>
    </div>
  );
};

export default Dashboard;
