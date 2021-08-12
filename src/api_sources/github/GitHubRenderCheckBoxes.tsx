import { Checkbox, Col, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import Text from 'antd/lib/typography/Text';

import GITHUB_KEY from './GitHubKey';

const GitHubRenderCheckBoxes = (onChange: (e: CheckboxChangeEvent) => void) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Row>
        <Text>
          <i>GitHub</i>
        </Text>
      </Row>

      <Row gutter={24} style={{ marginTop: 4 }}>
        <Col>
          <Checkbox name={`${GITHUB_KEY}_name`} onChange={onChange}>
            Name
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default GitHubRenderCheckBoxes;
