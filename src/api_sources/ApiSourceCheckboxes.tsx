import { FC } from 'react';
import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';

import { ApiSourcesMap } from 'api_sources';

import ApiSourceFormField from './ApiSourceFormField';

type Props = {
  apiSourceKey: string;
  initialCheckedFields?: { [key: string]: boolean };
};
const ApiSourceCheckboxes: FC<Props> = ({
  apiSourceKey,
  initialCheckedFields = {},
}) => {
  const apiSource = ApiSourcesMap[apiSourceKey];

  if (!apiSource) {
    console.warn(`apiSource not found for ${apiSourceKey}`);
    return <></>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Row>
        <Text>
          <i>{apiSource.apiName}</i>
        </Text>
      </Row>

      <Row gutter={24} style={{ marginTop: 4 }}>
        {apiSource.favoriteFields.map((field) => {
          return (
            <Col key={field.name}>
              <ApiSourceFormField
                field={field}
                initialChecked={initialCheckedFields[field.name]}
              ></ApiSourceFormField>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ApiSourceCheckboxes;
