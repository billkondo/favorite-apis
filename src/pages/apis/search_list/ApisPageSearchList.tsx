import { FC, Fragment } from 'react';
import { Button, Col, Divider, Form, Pagination, Row, Spin } from 'antd';
import Text from 'antd/lib/typography/Text';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';

import ApiSourceFormField from 'api_sources/ApiSourceFormField';

import FavoriteButton from 'components/favorite_button/FavoriteButton';

import useApisPageSearchList from './useApisPageSearchList';

type Props = {
  selectedKey: string;
  unselectKey: () => void;
};
const ApisPageSearchList: FC<Props> = ({ selectedKey, unselectKey }) => {
  const {
    initialQuery,

    fields,

    totalCount = 0,
    items,

    apiName,

    renderItem,

    filter,

    loading,
    done,
    failed,
    retry,

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

      <div style={{ padding: 48 }}>
        <Row>
          <Form layout="inline" onFinish={filter}>
            {fields.map((field) => (
              <Fragment key={field.name}>
                <ApiSourceFormField
                  field={field}
                  initialValue={initialQuery[field.name]}
                ></ApiSourceFormField>
              </Fragment>
            ))}

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
          <Row style={{ marginTop: 48 }}>
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

        <div style={{ marginTop: 40 }}>
          {loading && (
            <Row>
              <Col>
                <Spin size="large"></Spin>
              </Col>
            </Row>
          )}

          {failed && (
            <>
              <Row>
                <Text type="danger">API search failed</Text>
              </Row>
              <Row>
                <Button type="primary" danger onClick={retry}>
                  Try Again
                </Button>
              </Row>
            </>
          )}

          {done && (
            <>
              <Row>
                <Text>
                  <b>Results</b>: {totalCount.toLocaleString()}
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ApisPageSearchList;
