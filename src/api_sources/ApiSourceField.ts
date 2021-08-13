type BaseApiSourceField = {
  apiSourceKey: string;

  name: string;
  label: string;
};

export const INPUT_API_SOURCE_FIELD = 'input_api_source_field';
export const SELECT_API_SOURCE_FIELD = 'select_api_source_field';
export const CHECKBOX_API_SOURCE_FIELD = 'checkbox_api_source_field';

export type InputApiSourceField = {
  type: typeof INPUT_API_SOURCE_FIELD;
  placeholder?: string;
} & BaseApiSourceField;

export type OptionApiSourceField = {
  label: JSX.Element | string;
  value: string;
};

export type OptionGroupApiSourceField = {
  label: string;
  options: Array<OptionApiSourceField>;
};

export type SelectApiSourceField = (
  | {
      type: typeof SELECT_API_SOURCE_FIELD;
      placeholder?: string;

      group: false;
      options: Array<OptionApiSourceField>;
    }
  | {
      type: typeof SELECT_API_SOURCE_FIELD;
      placeholder?: string;

      group: true;
      options: Array<OptionGroupApiSourceField>;
    }
) &
  BaseApiSourceField;

export type CheckboxApiSourceField = {
  type: typeof CHECKBOX_API_SOURCE_FIELD;
} & BaseApiSourceField;

type ApiSourceField =
  | InputApiSourceField
  | SelectApiSourceField
  | CheckboxApiSourceField;

export default ApiSourceField;
