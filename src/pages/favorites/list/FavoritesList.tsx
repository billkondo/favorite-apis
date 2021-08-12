import { FC, useState } from 'react';
import { Divider, Row, Spin } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

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

  const size = favoritesList.length;

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

          {favoritesList.map((item) => {
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
