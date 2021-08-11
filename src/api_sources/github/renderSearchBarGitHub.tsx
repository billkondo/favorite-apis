import { Button, Form, Input, Select } from 'antd';
import {
  SearchOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';

import GitHubForm from './GitHubForm';

const { Option, OptGroup } = Select;

const renderSearchBarGitHub = (
  filter: (form: GitHubForm) => void,
  loading: boolean
) => {
  const onSubmit = (form: GitHubForm) => filter(form);

  return (
    <Form layout="inline" onFinish={onSubmit}>
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

      <Form.Item>
        <Button
          loading={loading}
          htmlType="submit"
          type="primary"
          shape="circle"
          icon={<SearchOutlined></SearchOutlined>}
        ></Button>
      </Form.Item>
    </Form>
  );
};

export default renderSearchBarGitHub;
