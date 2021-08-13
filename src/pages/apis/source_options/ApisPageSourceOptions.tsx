import { FC } from 'react';
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';

import ApiSources from 'api_sources';
import ApiSourceButton from 'api_sources/ApiSourceButton';

type Props = {
  selectApiSourceKey: (apiSourceKey: string) => void;
};
const ApisPageSourceOptions: FC<Props> = ({ selectApiSourceKey }) => {
  return (
    <>
      <Row>
        <Title level={2}>Select a API source</Title>
      </Row>

      <Row gutter={24} style={{ marginTop: 24 }}>
        {ApiSources.map((apiSource) => {
          return (
            <Col key={apiSource.key}>
              <ApiSourceButton
                name={apiSource.apiName}
                onClick={() => selectApiSourceKey(apiSource.key)}
              ></ApiSourceButton>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ApisPageSourceOptions;
