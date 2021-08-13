import { FC, Fragment } from 'react';

import { ApiSourcesMap } from 'api_sources';

import ApiSourceFormField from './ApiSourceFormField';

type Props = {
  apiSourceKey: string;
  checkedFields: { [key: string]: string };
};
const ApiSourceCheckedFields: FC<Props> = ({
  apiSourceKey,
  checkedFields = {},
}) => {
  const apiSource = ApiSourcesMap[apiSourceKey];
  const apiFields = apiSource.apiFields;

  if (!apiSource) {
    console.warn(`apiSource not found for ${apiSourceKey}`);
    return <></>;
  }

  return (
    <>
      {apiFields.map((apiField) => {
        if (!checkedFields[apiField.name])
          return <Fragment key={apiField.name}></Fragment>;

        return (
          <Fragment key={apiField.name}>
            <ApiSourceFormField field={apiField}></ApiSourceFormField>
          </Fragment>
        );
      })}
    </>
  );
};

export default ApiSourceCheckedFields;
