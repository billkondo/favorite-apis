import { FC } from 'react';
import { ForkOutlined, StarOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';

import GitHubItemType from './GitHubItemType';

const GitHubRenderItem = (item: GitHubItemType) => {
  const { name, description, language, forks, stars, url } = item;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Row style={{ marginBottom: 8 }}>
        <ItemNameWrapper url={url}>
          <Button type="link" style={{ padding: 0 }}>
            {name}
          </Button>
        </ItemNameWrapper>
      </Row>

      {description && (
        <Row style={{ marginBottom: 8 }}>
          <Text>{description}</Text>
        </Row>
      )}

      <Row gutter={24}>
        {language && (
          <Col>
            <Text>
              <b>{language}</b>
            </Text>
          </Col>
        )}

        <Col>
          <StarOutlined></StarOutlined>

          <Text style={{ marginLeft: 4 }}>{stars.toLocaleString()}</Text>
        </Col>

        <Col>
          <ForkOutlined></ForkOutlined>

          <Text style={{ marginLeft: 4 }}>{forks.toLocaleString()}</Text>
        </Col>
      </Row>
    </div>
  );
};

type ItemNameWrapperProps = {
  url: string;
};
const ItemNameWrapper: FC<ItemNameWrapperProps> = ({ url = '', children }) => {
  if (!url.trim()) return <>children</>;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default GitHubRenderItem;
