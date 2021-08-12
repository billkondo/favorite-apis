import { Checkbox, Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';

const GitHubRenderCheckBoxes = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Row>
        <Text>
          <i>GitHub</i>
        </Text>
      </Row>

      <Row gutter={24} style={{ marginTop: 4 }}>
        <Col>
          <Checkbox>Name</Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default GitHubRenderCheckBoxes;
