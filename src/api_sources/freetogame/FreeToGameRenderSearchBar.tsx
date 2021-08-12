import { Form, Input, Select } from 'antd';

const { Option } = Select;

const categories = [
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-Person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'card',
  'battle-royale',
  'mmo',
  'mmofps',
  'mmotps',
  '3d',
  '2d',
  'anime',
  'fantasy',
  'sci-fi',
  'fighting',
  'action-rpg',
  'action',
  'military',
  'martial-arts',
  'flight',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts',
];

const FreeToGameRenderSearchBar = () => {
  return (
    <>
      <Form.Item label="Platform" name="platform">
        <Select allowClear style={{ minWidth: 160 }} placeholder="PC">
          <Option value="pc">PC</Option>
          <Option value="browser">Browser</Option>
          <Option value="all">All</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Category" name="category">
        <Select allowClear style={{ minWidth: 160 }} placeholder="shooter">
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="sortBy" label="Sort By">
        <Select allowClear style={{ minWidth: 160 }}>
          <Option value="release-date">Release Date</Option>
          <Option value="alphabetical">Alphabetical</Option>
          <Option value="relevance">Relevance</Option>
        </Select>
      </Form.Item>
    </>
  );
};

export default FreeToGameRenderSearchBar;
