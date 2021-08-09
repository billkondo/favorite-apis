import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';

const NotFoundPage = () => {
  return (
    <>
      <Row justify="center">
        <Col>
          <Title>404</Title>
        </Col>
      </Row>

      <Row justify="center">
        <Col>
          <Title level={4}>This page does not exist</Title>
        </Col>
      </Row>
    </>
  );
};

export default NotFoundPage;
