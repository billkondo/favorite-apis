import { FC } from 'react';
import { Button, Col, Divider, Form, Pagination, Row, Spin } from 'antd';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';

import Text from 'antd/lib/typography/Text';

import FavoriteButton from 'components/favorite_button/FavoriteButton';

import displayNumber from 'utils/displayNumber';

import useApisPageSearchList from './useApisPageSearchList';

type Props = {
  selectedKey: string;
  unselectKey: () => void;
};
const ApisPageSearchList: FC<Props> = ({ selectedKey, unselectKey }) => {
  const {
    totalCount,
    items,

    apiName,

    renderItem,
    renderSearchBar,

    filter,

    loading,
    done,

    page,
    pageSize,
    pagesSize,
    hidePagination,
    repaginate,
  } = useApisPageSearchList(selectedKey);

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
            <b>{apiName}</b> API
          </Text>
        </Col>
      </Row>

      <Row style={{ padding: 48, paddingBottom: 0 }}>
        <Form layout="inline" onFinish={filter}>
          {renderSearchBar()}

          <Form.Item>
            <Button
              loading={loading}
              htmlType="submit"
              type="primary"
              shape="circle"
              icon={<SearchOutlined />}
            ></Button>
          </Form.Item>
        </Form>
      </Row>

      {!hidePagination && (
        <Row style={{ padding: 48, paddingBottom: 0 }}>
          <Pagination
            current={page}
            total={totalCount}
            defaultPageSize={pageSize}
            disabled={loading}
            pageSizeOptions={pagesSize}
            onChange={(page, pageSize) => repaginate(pageSize)(page)}
          ></Pagination>
        </Row>
      )}

      {loading && (
        <Row style={{ padding: 48 }}>
          <Col>
            <Spin size="large"></Spin>
          </Col>
        </Row>
      )}

      {done && (
        <div style={{ padding: 48 }}>
          <Row>
            <Text>
              <b>Results</b>: {displayNumber(totalCount!)}
            </Text>
          </Row>

          {items.map((item) => {
            return (
              <div
                key={item.id}
                style={{ marginTop: 40, position: 'relative' }}
              >
                <FavoriteButton id={item.id} item={item}></FavoriteButton>

                <Row>{renderItem(item)}</Row>

                <Row>
                  <Divider></Divider>
                </Row>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ApisPageSearchList;
