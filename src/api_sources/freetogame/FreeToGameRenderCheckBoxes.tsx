import { Col, Row } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Text from 'antd/lib/typography/Text';

const FreeToGameRenderCheckBoxes = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Row>
        <Text>
          <i>FREETOGAME</i>
        </Text>
      </Row>

      <Row gutter={24} style={{ marginTop: 4 }}>
        <Col>
          <Checkbox>Platform</Checkbox>
        </Col>

        <Col>
          <Checkbox>Category</Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default FreeToGameRenderCheckBoxes;
