type BaseApiSourceField = {
  name: string;
  apiSourceKey: string;
  placeholder?: string;
  label: string;
};

export const INPUT_API_SOURCE_FIELD = 'input_api_source_field';
export const SELECT_API_SOURCE_FIELD = 'select_api_source_field';

export type InputApiSourceField = {
  type: typeof INPUT_API_SOURCE_FIELD;
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

      group: false;
      options: Array<OptionApiSourceField>;
    }
  | {
      type: typeof SELECT_API_SOURCE_FIELD;

      group: true;
      options: Array<OptionGroupApiSourceField>;
    }
) &
  BaseApiSourceField;

type ApiSourceField = InputApiSourceField | SelectApiSourceField;

export default ApiSourceField;
