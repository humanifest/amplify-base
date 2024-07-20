/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUserProfile } from "./graphql/queries";
import { updateUserProfile } from "./graphql/mutations";
const client = generateClient();
export default function UserProfileUpdateForm(props) {
  const {
    id: idProp,
    userProfile: userProfileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    uuid: "",
    email: "",
    profileOwner: "",
    balance: "",
    avatar: "",
    defaultPrivacyLevel: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [email, setEmail] = React.useState(initialValues.email);
  const [profileOwner, setProfileOwner] = React.useState(
    initialValues.profileOwner
  );
  const [balance, setBalance] = React.useState(initialValues.balance);
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [defaultPrivacyLevel, setDefaultPrivacyLevel] = React.useState(
    initialValues.defaultPrivacyLevel
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userProfileRecord
      ? { ...initialValues, ...userProfileRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setEmail(cleanValues.email);
    setProfileOwner(cleanValues.profileOwner);
    setBalance(cleanValues.balance);
    setAvatar(cleanValues.avatar);
    setDefaultPrivacyLevel(cleanValues.defaultPrivacyLevel);
    setErrors({});
  };
  const [userProfileRecord, setUserProfileRecord] =
    React.useState(userProfileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserProfile
        : userProfileModelProp;
      setUserProfileRecord(record);
    };
    queryData();
  }, [idProp, userProfileModelProp]);
  React.useEffect(resetStateValues, [userProfileRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    email: [],
    profileOwner: [],
    balance: [],
    avatar: [],
    defaultPrivacyLevel: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          uuid,
          email: email ?? null,
          profileOwner: profileOwner ?? null,
          balance: balance ?? null,
          avatar: avatar ?? null,
          defaultPrivacyLevel: defaultPrivacyLevel ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUserProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userProfileRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Uuid"
        isRequired={true}
        isReadOnly={false}
        value={uuid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid: value,
              email,
              profileOwner,
              balance,
              avatar,
              defaultPrivacyLevel,
            };
            const result = onChange(modelFields);
            value = result?.uuid ?? value;
          }
          if (errors.uuid?.hasError) {
            runValidationTasks("uuid", value);
          }
          setUuid(value);
        }}
        onBlur={() => runValidationTasks("uuid", uuid)}
        errorMessage={errors.uuid?.errorMessage}
        hasError={errors.uuid?.hasError}
        {...getOverrideProps(overrides, "uuid")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              email: value,
              profileOwner,
              balance,
              avatar,
              defaultPrivacyLevel,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Profile owner"
        isRequired={false}
        isReadOnly={false}
        value={profileOwner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              email,
              profileOwner: value,
              balance,
              avatar,
              defaultPrivacyLevel,
            };
            const result = onChange(modelFields);
            value = result?.profileOwner ?? value;
          }
          if (errors.profileOwner?.hasError) {
            runValidationTasks("profileOwner", value);
          }
          setProfileOwner(value);
        }}
        onBlur={() => runValidationTasks("profileOwner", profileOwner)}
        errorMessage={errors.profileOwner?.errorMessage}
        hasError={errors.profileOwner?.hasError}
        {...getOverrideProps(overrides, "profileOwner")}
      ></TextField>
      <TextField
        label="Balance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={balance}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              uuid,
              email,
              profileOwner,
              balance: value,
              avatar,
              defaultPrivacyLevel,
            };
            const result = onChange(modelFields);
            value = result?.balance ?? value;
          }
          if (errors.balance?.hasError) {
            runValidationTasks("balance", value);
          }
          setBalance(value);
        }}
        onBlur={() => runValidationTasks("balance", balance)}
        errorMessage={errors.balance?.errorMessage}
        hasError={errors.balance?.hasError}
        {...getOverrideProps(overrides, "balance")}
      ></TextField>
      <TextField
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        value={avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              email,
              profileOwner,
              balance,
              avatar: value,
              defaultPrivacyLevel,
            };
            const result = onChange(modelFields);
            value = result?.avatar ?? value;
          }
          if (errors.avatar?.hasError) {
            runValidationTasks("avatar", value);
          }
          setAvatar(value);
        }}
        onBlur={() => runValidationTasks("avatar", avatar)}
        errorMessage={errors.avatar?.errorMessage}
        hasError={errors.avatar?.hasError}
        {...getOverrideProps(overrides, "avatar")}
      ></TextField>
      <SelectField
        label="Default privacy level"
        placeholder="Please select an option"
        isDisabled={false}
        value={defaultPrivacyLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              email,
              profileOwner,
              balance,
              avatar,
              defaultPrivacyLevel: value,
            };
            const result = onChange(modelFields);
            value = result?.defaultPrivacyLevel ?? value;
          }
          if (errors.defaultPrivacyLevel?.hasError) {
            runValidationTasks("defaultPrivacyLevel", value);
          }
          setDefaultPrivacyLevel(value);
        }}
        onBlur={() =>
          runValidationTasks("defaultPrivacyLevel", defaultPrivacyLevel)
        }
        errorMessage={errors.defaultPrivacyLevel?.errorMessage}
        hasError={errors.defaultPrivacyLevel?.hasError}
        {...getOverrideProps(overrides, "defaultPrivacyLevel")}
      >
        <option
          children="Public"
          value="public"
          {...getOverrideProps(overrides, "defaultPrivacyLeveloption0")}
        ></option>
        <option
          children="Private"
          value="private"
          {...getOverrideProps(overrides, "defaultPrivacyLeveloption1")}
        ></option>
        <option
          children="Contacts"
          value="contacts"
          {...getOverrideProps(overrides, "defaultPrivacyLeveloption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userProfileModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
