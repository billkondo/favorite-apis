import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';

import ApiSources from 'api_sources';

const ApisPage = () => {
  return (
    <>
      <Row>
        <Title level={2}>Select a API source</Title>
      </Row>

      <Row gutter={24} style={{ marginTop: 24 }}>
        {ApiSources.map((apiSource) => {
          return (
            <Col key={apiSource.key}>{apiSource.renderButton(() => {})}</Col>
          );
        })}
      </Row>
    </>
  );
};

export default ApisPage;
