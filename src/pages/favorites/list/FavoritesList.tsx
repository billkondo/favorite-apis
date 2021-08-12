import { FC, Fragment, useEffect, useState } from 'react';
import { Button, Divider, Form, Row, Spin } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { SearchOutlined } from '@ant-design/icons';

import { ApiSourcesMap } from 'api_sources';

import FavoriteButton from 'components/favorite_button/FavoriteButton';
type Props = {
  favoritesList: Array<any>;
  favoriteApiSources: Array<any>;

  done: boolean;
  loading: boolean;
};
const FavoritesList: FC<Props> = ({
  favoritesList = [],
  favoriteApiSources = [],
  done,
  loading,
}) => {
  const [checkedKeys, setCheckedKeys] = useState<Array<string>>([]);
  const hasAnyCheckedKey = checkedKeys.length > 0;

  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [filteredItems, setFilteredItems] = useState<Array<any>>(favoritesList);

  const size = favoritesList.length;

  useEffect(() => {
    setFilteredItems(
      favoritesList.filter((item) => {
        const apiSource = ApiSourcesMap[item.key];

        if (!apiSource) {
          console.warn('apiSource is undefined');
          return item;
        }

        return apiSource.filter(filters)(item);
      })
    );
  }, [favoritesList, filters]);

  useEffect(() => {
    setFilters((filters) => {
      const newFilters = {
        ...filters,
      };
      const filterKeys = Object.keys(filters);

      // Add new checked inputs
      for (const checkedKey of checkedKeys)
        if (!newFilters[checkedKey]) newFilters[checkedKey] = '';

      // Remove unchecked inputs
      for (const filterKey of filterKeys)
        if (!checkedKeys.includes(filterKey)) delete newFilters[filterKey];

      return newFilters;
    });
  }, [checkedKeys]);

  const onCheckBoxChanged = (e: CheckboxChangeEvent) => {
    const name = e.target.name;
    const checked = e.target.checked;

    if (!name) {
      console.warn('name is undefined or empty');
      return;
    }

    if (checked) setCheckedKeys((keys) => keys.concat(name));
    else setCheckedKeys((keys) => keys.filter((key) => key !== name));
  };

  const onFilter = (form: any) => setFilters(form);

  return (
    <>
      <Row style={{ marginBottom: 24 }}>
        <Title level={2}>Your favorite items</Title>
      </Row>

      {loading && (
        <Row style={{ padding: 4 }}>
          <Spin size="large"></Spin>
        </Row>
      )}

      {done && (
        <>
          <Row style={{ padding: 4 }}>
            <Text>
              You have <b>{size}</b> favorited items
            </Text>
          </Row>

          {favoriteApiSources.map((apiSourceKey) => {
            const apiSource = ApiSourcesMap[apiSourceKey];

            if (!apiSource) {
              console.warn(
                `apiSourceKey ${apiSourceKey} does not exist in ApiSourceMap`
              );
              return <></>;
            }

            return (
              <Row style={{ padding: 4, marginTop: 16 }} key={apiSourceKey}>
                {apiSource.renderCheckBoxes(onCheckBoxChanged)}
              </Row>
            );
          })}

          <Form
            layout="inline"
            style={{ padding: 4, marginTop: 24 }}
            hidden={!hasAnyCheckedKey}
            onFinish={onFilter}
          >
            {favoriteApiSources.map((apiSourceKey) => {
              const apiSource = ApiSourcesMap[apiSourceKey];

              if (!apiSource) return <></>;

              return (
                <Fragment key={apiSourceKey}>
                  {apiSource.renderCheckedInputs(checkedKeys)}
                </Fragment>
              );
            })}

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

          <Row style={{ padding: 4, marginTop: 40 }}>
            <Text>
              <b>Filtered Results:</b> {filteredItems.length}
            </Text>
          </Row>

          {filteredItems.map((item) => {
            const apiSource = ApiSourcesMap[item.key];

            if (!apiSource) {
              console.warn('favorited item without api key');
              return <></>;
            }

            return (
              <div
                key={item.id}
                style={{ padding: 4, marginTop: 40, position: 'relative' }}
              >
                <FavoriteButton id={item.id} item={item}></FavoriteButton>

                <Row>{apiSource.renderItem(item)}</Row>

                <Row>
                  <Divider></Divider>
                </Row>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default FavoritesList;
