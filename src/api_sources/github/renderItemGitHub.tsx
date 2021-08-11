import { ForkOutlined, StarOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';

import GitHubItemType from './GitHubItemType';

const renderItemGitHub = (item: GitHubItemType) => {
  const { name, description, language, forks, stars, url } = item;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Row style={{ marginBottom: 8 }}>
        <a href={url} target="_blank" rel="noreferrer">
          <Button type="link" style={{ padding: 0 }}>
            {name}
          </Button>
        </a>
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

          <Text style={{ marginLeft: 4 }}>{stars}</Text>
        </Col>

        <Col>
          <ForkOutlined></ForkOutlined>

          <Text style={{ marginLeft: 4 }}>{forks}</Text>
        </Col>
      </Row>
    </div>
  );
};

export default renderItemGitHub;
