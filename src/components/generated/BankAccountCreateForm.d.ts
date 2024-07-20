import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BankAccountCreateFormInputValues = {
    uuid?: string;
    bankName?: string;
    accountNumber?: number;
    routingNumber?: number;
    isDeleted?: boolean;
};
export declare type BankAccountCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    bankName?: ValidationFunction<string>;
    accountNumber?: ValidationFunction<number>;
    routingNumber?: ValidationFunction<number>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BankAccountCreateFormOverridesProps = {
    BankAccountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    bankName?: PrimitiveOverrideProps<TextFieldProps>;
    accountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    routingNumber?: PrimitiveOverrideProps<TextFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BankAccountCreateFormProps = React.PropsWithChildren<{
    overrides?: BankAccountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BankAccountCreateFormInputValues) => BankAccountCreateFormInputValues;
    onSuccess?: (fields: BankAccountCreateFormInputValues) => void;
    onError?: (fields: BankAccountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BankAccountCreateFormInputValues) => BankAccountCreateFormInputValues;
    onValidate?: BankAccountCreateFormValidationValues;
} & React.CSSProperties>;
export default function BankAccountCreateForm(props: BankAccountCreateFormProps): React.ReactElement;
