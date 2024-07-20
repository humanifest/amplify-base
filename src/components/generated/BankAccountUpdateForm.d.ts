import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BankAccount } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BankAccountUpdateFormInputValues = {
    uuid?: string;
    bankName?: string;
    accountNumber?: number;
    routingNumber?: number;
    isDeleted?: boolean;
};
export declare type BankAccountUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    bankName?: ValidationFunction<string>;
    accountNumber?: ValidationFunction<number>;
    routingNumber?: ValidationFunction<number>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BankAccountUpdateFormOverridesProps = {
    BankAccountUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    bankName?: PrimitiveOverrideProps<TextFieldProps>;
    accountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    routingNumber?: PrimitiveOverrideProps<TextFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BankAccountUpdateFormProps = React.PropsWithChildren<{
    overrides?: BankAccountUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bankAccount?: BankAccount;
    onSubmit?: (fields: BankAccountUpdateFormInputValues) => BankAccountUpdateFormInputValues;
    onSuccess?: (fields: BankAccountUpdateFormInputValues) => void;
    onError?: (fields: BankAccountUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BankAccountUpdateFormInputValues) => BankAccountUpdateFormInputValues;
    onValidate?: BankAccountUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BankAccountUpdateForm(props: BankAccountUpdateFormProps): React.ReactElement;
