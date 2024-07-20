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
import { getTransaction } from "./graphql/queries";
import { updateTransaction } from "./graphql/mutations";
const client = generateClient();
export default function TransactionUpdateForm(props) {
  const {
    id: idProp,
    transaction: transactionModelProp,
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
    source: "",
    amount: "",
    description: "",
    privacyLevel: "",
    balanceAtCompletion: "",
    status: "",
    requestResolvedAt: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [source, setSource] = React.useState(initialValues.source);
  const [amount, setAmount] = React.useState(initialValues.amount);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [privacyLevel, setPrivacyLevel] = React.useState(
    initialValues.privacyLevel
  );
  const [balanceAtCompletion, setBalanceAtCompletion] = React.useState(
    initialValues.balanceAtCompletion
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [requestResolvedAt, setRequestResolvedAt] = React.useState(
    initialValues.requestResolvedAt
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = transactionRecord
      ? { ...initialValues, ...transactionRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setSource(cleanValues.source);
    setAmount(cleanValues.amount);
    setDescription(cleanValues.description);
    setPrivacyLevel(cleanValues.privacyLevel);
    setBalanceAtCompletion(cleanValues.balanceAtCompletion);
    setStatus(cleanValues.status);
    setRequestResolvedAt(cleanValues.requestResolvedAt);
    setErrors({});
  };
  const [transactionRecord, setTransactionRecord] =
    React.useState(transactionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTransaction.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTransaction
        : transactionModelProp;
      setTransactionRecord(record);
    };
    queryData();
  }, [idProp, transactionModelProp]);
  React.useEffect(resetStateValues, [transactionRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    source: [],
    amount: [{ type: "Required" }],
    description: [{ type: "Required" }],
    privacyLevel: [],
    balanceAtCompletion: [{ type: "Required" }],
    status: [],
    requestResolvedAt: [],
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
          source: source ?? null,
          amount,
          description,
          privacyLevel: privacyLevel ?? null,
          balanceAtCompletion,
          status: status ?? null,
          requestResolvedAt: requestResolvedAt ?? null,
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
            query: updateTransaction.replaceAll("__typename", ""),
            variables: {
              input: {
                id: transactionRecord.id,
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
      {...getOverrideProps(overrides, "TransactionUpdateForm")}
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
              source,
              amount,
              description,
              privacyLevel,
              balanceAtCompletion,
              status,
              requestResolvedAt,
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
        label="Source"
        isRequired={false}
        isReadOnly={false}
        value={source}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              source: value,
              amount,
              description,
              privacyLevel,
              balanceAtCompletion,
              status,
              requestResolvedAt,
            };
            const result = onChange(modelFields);
            value = result?.source ?? value;
          }
          if (errors.source?.hasError) {
            runValidationTasks("source", value);
          }
          setSource(value);
        }}
        onBlur={() => runValidationTasks("source", source)}
        errorMessage={errors.source?.errorMessage}
        hasError={errors.source?.hasError}
        {...getOverrideProps(overrides, "source")}
      ></TextField>
      <TextField
        label="Amount"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              uuid,
              source,
              amount: value,
              description,
              privacyLevel,
              balanceAtCompletion,
              status,
              requestResolvedAt,
            };
            const result = onChange(modelFields);
            value = result?.amount ?? value;
          }
          if (errors.amount?.hasError) {
            runValidationTasks("amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("amount", amount)}
        errorMessage={errors.amount?.errorMessage}
        hasError={errors.amount?.hasError}
        {...getOverrideProps(overrides, "amount")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              source,
              amount,
              description: value,
              privacyLevel,
              balanceAtCompletion,
              status,
              requestResolvedAt,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SelectField
        label="Privacy level"
        placeholder="Please select an option"
        isDisabled={false}
        value={privacyLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              source,
              amount,
              description,
              privacyLevel: value,
              balanceAtCompletion,
              status,
              requestResolvedAt,
            };
            const result = onChange(modelFields);
            value = result?.privacyLevel ?? value;
          }
          if (errors.privacyLevel?.hasError) {
            runValidationTasks("privacyLevel", value);
          }
          setPrivacyLevel(value);
        }}
        onBlur={() => runValidationTasks("privacyLevel", privacyLevel)}
        errorMessage={errors.privacyLevel?.errorMessage}
        hasError={errors.privacyLevel?.hasError}
        {...getOverrideProps(overrides, "privacyLevel")}
      >
        <option
          children="Public"
          value="public"
          {...getOverrideProps(overrides, "privacyLeveloption0")}
        ></option>
        <option
          children="Private"
          value="private"
          {...getOverrideProps(overrides, "privacyLeveloption1")}
        ></option>
        <option
          children="Contacts"
          value="contacts"
          {...getOverrideProps(overrides, "privacyLeveloption2")}
        ></option>
      </SelectField>
      <TextField
        label="Balance at completion"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={balanceAtCompletion}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              uuid,
              source,
              amount,
              description,
              privacyLevel,
              balanceAtCompletion: value,
              status,
              requestResolvedAt,
            };
            const result = onChange(modelFields);
            value = result?.balanceAtCompletion ?? value;
          }
          if (errors.balanceAtCompletion?.hasError) {
            runValidationTasks("balanceAtCompletion", value);
          }
          setBalanceAtCompletion(value);
        }}
        onBlur={() =>
          runValidationTasks("balanceAtCompletion", balanceAtCompletion)
        }
        errorMessage={errors.balanceAtCompletion?.errorMessage}
        hasError={errors.balanceAtCompletion?.hasError}
        {...getOverrideProps(overrides, "balanceAtCompletion")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              source,
              amount,
              description,
              privacyLevel,
              balanceAtCompletion,
              status: value,
              requestResolvedAt,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Pending"
          value="pending"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Accepted"
          value="accepted"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Rejected"
          value="rejected"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Request resolved at"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={requestResolvedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              source,
              amount,
              description,
              privacyLevel,
              balanceAtCompletion,
              status,
              requestResolvedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.requestResolvedAt ?? value;
          }
          if (errors.requestResolvedAt?.hasError) {
            runValidationTasks("requestResolvedAt", value);
          }
          setRequestResolvedAt(value);
        }}
        onBlur={() =>
          runValidationTasks("requestResolvedAt", requestResolvedAt)
        }
        errorMessage={errors.requestResolvedAt?.errorMessage}
        hasError={errors.requestResolvedAt?.hasError}
        {...getOverrideProps(overrides, "requestResolvedAt")}
      ></TextField>
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
          isDisabled={!(idProp || transactionModelProp)}
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
              !(idProp || transactionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
