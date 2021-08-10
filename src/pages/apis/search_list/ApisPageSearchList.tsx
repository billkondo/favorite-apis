import { FC } from 'react';
import { Button, Col, Row, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import Text from 'antd/lib/typography/Text';

import displayNumber from 'utils/displayNumber';

import useApisPageSearchList from './useApisPageSearchList';

type Props = {
  selectedKey: string;
  unselectKey: () => void;
};
const ApisPageSearchList: FC<Props> = ({ selectedKey, unselectKey }) => {
  const { totalCount, loading, done } = useApisPageSearchList(selectedKey);

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

      {loading && (
        <Row style={{ padding: 48 }}>
          <Col>
            <Spin size="large"></Spin>
          </Col>
        </Row>
      )}

      {done && (
        <Row style={{ padding: 48 }}>
          <Text>
            <b>Results</b>: {displayNumber(totalCount!)}
          </Text>
        </Row>
      )}
    </>
  );
};

export default ApisPageSearchList;
