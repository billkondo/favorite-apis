import { FC } from 'react';
import { Button, Col, Row } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import Text from 'antd/lib/typography/Text';

type Props = {
  selectedKey: string;
  unselectKey: () => void;
};
const ApisPageSearchList: FC<Props> = ({ selectedKey, unselectKey }) => {
  return (
    <>
      <Row align="middle" gutter={24}>
        <Col>
          <Button
            type="primary"
            shape="circle"
            size="small"
            icon={<ArrowLeftOutlined></ArrowLeftOutlined>}
            onClick={unselectKey}
            title="APIs Page Back Button"
          ></Button>
        </Col>

        <Col>
          <Text title={`${selectedKey} API`}>
            <b>{selectedKey}</b> API
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default ApisPageSearchList;
