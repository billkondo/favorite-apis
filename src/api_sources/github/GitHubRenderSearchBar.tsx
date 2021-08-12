import { Form, Input, Select } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import GitHubForm from './GitHubForm';

const { Option, OptGroup } = Select;

const GitHubRenderSearchBar = (params?: {
  initialForm?: GitHubForm;
  names?: Array<string>;
}) => {
  const { initialForm = {}, names = ['name', 'sortBy'] } = params || {};

  const { name = '', sortBy = '' } = initialForm as GitHubForm;

  return (
    <>
      {names[0] && (
        <Form.Item label="Name" name={names[0]} initialValue={name}>
          <Input placeholder="React"></Input>
        </Form.Item>
      )}

      {names[1] && (
        <Form.Item name={names[1]} label="Sort By" initialValue={sortBy}>
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
