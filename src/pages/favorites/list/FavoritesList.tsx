import { FC, Fragment, useEffect, useMemo, useState } from 'react';
import { Button, Divider, Form, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import { SearchOutlined } from '@ant-design/icons';

import { ApiSourcesMap } from 'api_sources';
import ApiSourceCheckboxes from 'api_sources/ApiSourceCheckboxes';
import ApiSourceCheckedFields from 'api_sources/ApiSourceCheckedFields';

import FavoriteButton from 'components/favorite_button/FavoriteButton';

import usePersist from 'utils/usePersist';

type CheckboxFields = {
  [apiSourceKey: string]: { [field: string]: boolean };
};
type FilterFields = {
  [apiSourceKey: string]: { [field: string]: string };
};

type Props = {
  favoritesList: Array<any>;
  favoriteApiSourceKeys: Array<string>;
};
const FavoritesList: FC<Props> = ({
  favoritesList = [],
  favoriteApiSourceKeys = [],
}) => {
  const [checkedFields, setCheckedFields, initialCheckedFields] =
    usePersist<CheckboxFields>({}, 'favorites-checkbox');
  const isAnyFieldChecked = useMemo(() => {
    for (const apiSourceKey of Object.keys(checkedFields))
      for (const key of Object.keys(checkedFields[apiSourceKey]))
        if (checkedFields[apiSourceKey][key]) return true;

    return false;
  }, [checkedFields]);

  const [filters, setFilters] = usePersist<FilterFields>(
    {},
    'favorites-search'
  );
  const [filteredItems, setFilteredItems] = useState<Array<any>>(favoritesList);

  const size = favoritesList.length;

  // Filter favorited items whenever filters change
  useEffect(() => {
    setFilteredItems(
      favoritesList.filter((item) => {
        const apiSourceKey = item.key as string;
        const apiSource = ApiSourcesMap[apiSourceKey];

        if (!apiSource) {
          console.warn('apiSource is undefined');
          return item;
        }

        if (!isAnyFieldChecked) return true;

        const isApiSourceChecked = !!apiSource.favoriteFields.find(
          (field) => checkedFields[apiSourceKey][field.name]
        );
        if (!isApiSourceChecked) return false;

        return apiSource.filter(filters[apiSourceKey])(item);
      })
    );
  }, [favoritesList, filters, isAnyFieldChecked, checkedFields]);

  const onFilter = (form: FilterFields) => setFilters(form);

  return (
    <>
      <Row>
        <Text>
          You have <b>{size}</b> favorited items
        </Text>
      </Row>

      <Form
        style={{ marginTop: 24 }}
        onValuesChange={(_, values) => setCheckedFields(values)}
      >
        {favoriteApiSourceKeys.map((apiSourceKey) => {
          return (
            <Fragment key={apiSourceKey}>
              <ApiSourceCheckboxes
                apiSourceKey={apiSourceKey}
                initialCheckedFields={initialCheckedFields[apiSourceKey]}
              ></ApiSourceCheckboxes>
            </Fragment>
          );
        })}
      </Form>

      <Form
        layout="inline"
        style={{ marginTop: 24 }}
        hidden={!isAnyFieldChecked}
        onFinish={onFilter}
      >
        {favoriteApiSourceKeys.map((apiSourceKey) => {
          return (
            <Fragment key={apiSourceKey}>
              <ApiSourceCheckedFields
                apiSourceKey={apiSourceKey}
                checkedFields={checkedFields[apiSourceKey]}
                initialSearchFields={filters[apiSourceKey]}
              ></ApiSourceCheckedFields>
            </Fragment>
          );
        })}

        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
          ></Button>
        </Form.Item>
      </Form>

      <Row style={{ marginTop: 40 }}>
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
          <div key={item.id} style={{ marginTop: 40, position: 'relative' }}>
            <FavoriteButton id={item.id} item={item}></FavoriteButton>

            <Row>{apiSource.renderItem(item)}</Row>

            <Row>
              <Divider></Divider>
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default FavoritesList;
