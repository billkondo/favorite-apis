import { FC } from 'react';
import { Button, Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';

import FreeToGameItemType from './FreeToGameItemType';

const FreeToGameRenderItem = (item: FreeToGameItemType) => {
  const {
    title,
    url,
    shortDescription,
    genre,
    releaseDate,
    platform,
    developer,
    publisher,
    thumbnail,
  } = item;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Row style={{ marginBottom: 16 }}>
        <img src={thumbnail} alt={`${title} thumbnail`}></img>
      </Row>

      <Row style={{ marginBottom: 8 }} align="middle">
        <ItemNameWrapper url={url}>
          <Button type="link" style={{ padding: 0 }}>
            {title}
          </Button>
        </ItemNameWrapper>

        <Text style={{ marginLeft: 16 }}>
          <b>{genre}</b>
        </Text>
      </Row>

      {shortDescription && (
        <Row style={{ marginBottom: 8 }}>
          <Text>{shortDescription}</Text>
        </Row>
      )}

      <Row gutter={24} style={{ marginTop: 16 }}>
        <Col>
          <Text>
            <i>{platform}</i>
          </Text>
        </Col>

        <Col>
          <Text style={{ fontWeight: 500 }}>Release date:</Text>
          <Text style={{ marginLeft: 8 }}>{releaseDate}</Text>
        </Col>

        <Col>
          <Text style={{ fontWeight: 500 }}>Deloper:</Text>
          <Text style={{ marginLeft: 8 }}>{developer}</Text>
        </Col>

        <Col>
          <Text style={{ fontWeight: 500 }}>Publisher:</Text>
          <Text style={{ marginLeft: 8 }}>{publisher}</Text>
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

export default FreeToGameRenderItem;
