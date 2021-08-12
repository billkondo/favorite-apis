import { Form, Input, Select } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Option, OptGroup } = Select;

const GitHubRenderSearchBar = (names = ['name', 'sortBy']) => {
  return (
    <>
      {names[0] && (
        <Form.Item label="Name" name={names[0]}>
          <Input placeholder="React"></Input>
        </Form.Item>
      )}

      {names[1] && (
        <Form.Item name={names[1]} label="Sort By">
          <Select allowClear style={{ minWidth: 120 }}>
            <OptGroup label="Ascending">
              <Option value="stars:asc">
                Stars <ArrowUpOutlined />
              </Option>
              <Option value="forks:asc">
                Forks <ArrowUpOutlined />
              </Option>
            </OptGroup>

            <OptGroup label="Descending">
              <Option value="stars:desc">
                Stars <ArrowDownOutlined />
              </Option>
              <Option value="forks:desc">
                Forks <ArrowDownOutlined />
              </Option>
            </OptGroup>
          </Select>
        </Form.Item>
      )}
    </>
  );
};

export default GitHubRenderSearchBar;
