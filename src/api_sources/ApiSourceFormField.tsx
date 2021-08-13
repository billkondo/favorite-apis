import { FC } from 'react';
import { Checkbox, Form, Input, Select } from 'antd';

import ApiSourceField, {
  CheckboxApiSourceField,
  CHECKBOX_API_SOURCE_FIELD,
  InputApiSourceField,
  INPUT_API_SOURCE_FIELD,
  OptionApiSourceField,
  OptionGroupApiSourceField,
  SelectApiSourceField,
} from './ApiSourceField';

const { Option, OptGroup } = Select;

type Props = {
  field: ApiSourceField;
  initialValue?: string;
};
const ApiSourceFormField: FC<Props> = ({ field, initialValue = '' }) => {
  const { type } = field;
  const isInput = type === INPUT_API_SOURCE_FIELD;
  const isCheckbox = type === CHECKBOX_API_SOURCE_FIELD;

  if (isInput)
    return (
      <InputApiSourceFormField
        field={field as InputApiSourceField}
        initialValue={initialValue}
      ></InputApiSourceFormField>
    );

  if (isCheckbox)
    return (
      <CheckboxApiSourceFormField
        field={field as CheckboxApiSourceField}
      ></CheckboxApiSourceFormField>
    );

  return (
    <SelectApiSourceFormField
      field={field as SelectApiSourceField}
      initialValue={initialValue}
    ></SelectApiSourceFormField>
  );
};

type InputProps = {
  field: InputApiSourceField;
  initialValue: string;
};
const InputApiSourceFormField: FC<InputProps> = ({ field, initialValue }) => {
  const { apiSourceKey, placeholder, name, label } = field;

  return (
    <Form.Item
      label={label}
      name={[apiSourceKey, name]}
      initialValue={initialValue}
    >
      <Input placeholder={placeholder}></Input>
    </Form.Item>
  );
};

type SelectProps = {
  field: SelectApiSourceField;
  initialValue: string;
};
const SelectApiSourceFormField: FC<SelectProps> = ({ field, initialValue }) => {
  const { group, options, label, name, apiSourceKey } = field;

  return (
    <Form.Item
      label={label}
      name={[apiSourceKey, name]}
      initialValue={initialValue}
    >
      <Select allowClear style={{ minWidth: 160 }}>
        {group && (
          <>
            {options.map((option) => {
              const optionGroup = option as OptionGroupApiSourceField;
              const { label, options } = optionGroup;

              return (
                <OptGroup label={label} key={label}>
                  {options.map((opt) => (
                    <Option key={opt.value} value={opt.value}>
                      {opt.label}
                    </Option>
                  ))}
                </OptGroup>
              );
            })}
          </>
        )}

        {!group && (
          <>
            {options.map((option) => {
              const opt = option as OptionApiSourceField;

              return (
                <Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Option>
              );
            })}
          </>
        )}
      </Select>
    </Form.Item>
  );
};

type CheckboxProps = {
  field: CheckboxApiSourceField;
};
const CheckboxApiSourceFormField: FC<CheckboxProps> = ({ field }) => {
  const { label, name, apiSourceKey } = field;

  return (
    <Form.Item
      label={label}
      name={[apiSourceKey, name]}
      valuePropName="checked"
    >
      <Checkbox></Checkbox>
    </Form.Item>
  );
};

export default ApiSourceFormField;
