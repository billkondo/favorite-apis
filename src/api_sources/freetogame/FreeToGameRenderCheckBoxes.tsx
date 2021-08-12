import { Col, Row } from 'antd';
import Checkbox, { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import Text from 'antd/lib/typography/Text';

import FREETOGAME_KEY from './FreeToGameKey';

const FreeToGameRenderCheckBoxes = (
  onChange: (e: CheckboxChangeEvent) => void
) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Row>
        <Text>
          <i>FREETOGAME</i>
        </Text>
      </Row>

      <Row gutter={24} style={{ marginTop: 4 }}>
        <Col>
          <Checkbox name={`${FREETOGAME_KEY}_platform`} onChange={onChange}>
            Platform
          </Checkbox>
        </Col>

        <Col>
          <Checkbox name={`${FREETOGAME_KEY}_category`} onChange={onChange}>
            Category
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default FreeToGameRenderCheckBoxes;
