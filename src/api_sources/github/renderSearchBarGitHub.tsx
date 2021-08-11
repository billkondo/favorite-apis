import { Form, Input, Select } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Option, OptGroup } = Select;

const renderSearchBarGitHub = () => {
  return (
    <>
      <Form.Item label="Name" name="name">
        <Input placeholder="React"></Input>
      </Form.Item>

      <Form.Item name="sortBy" label="Sort By">
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
    </>
  );
};

export default renderSearchBarGitHub;
