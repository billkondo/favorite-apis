import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

import ApiSourceField, {
  CheckboxApiSourceField,
  CHECKBOX_API_SOURCE_FIELD,
  INPUT_API_SOURCE_FIELD,
  SELECT_API_SOURCE_FIELD,
} from 'api_sources/ApiSourceField';

import GITHUB_KEY from './GitHubKey';

export const GitHubApiFields: Array<ApiSourceField> = [
  {
    type: INPUT_API_SOURCE_FIELD,
    apiSourceKey: GITHUB_KEY,
    label: 'Name',
    name: 'name',
    placeholder: 'React',
  },
  {
    type: SELECT_API_SOURCE_FIELD,
    apiSourceKey: GITHUB_KEY,
    label: 'Sort By',
    name: 'sortBy',
    group: true,
    options: [
      {
        label: 'Ascending',
        options: [
          {
            value: 'stars:asc',
            label: (
              <>
                Stars <ArrowUpOutlined />
              </>
            ),
          },
          {
            value: 'forks:asc',
            label: (
              <>
                Forks <ArrowUpOutlined />
              </>
            ),
          },
        ],
      },
      {
        label: 'Descending',
        options: [
          {
            value: 'stars:desc',
            label: (
              <>
                Stars <ArrowDownOutlined />
              </>
            ),
          },
          {
            value: 'forks:desc',
            label: (
              <>
                Forks <ArrowDownOutlined />
              </>
            ),
          },
        ],
      },
    ],
  },
];

export const GitHubFavoriteFields: Array<CheckboxApiSourceField> = [
  {
    name: 'name',
    apiSourceKey: GITHUB_KEY,
    label: 'Name',
    type: CHECKBOX_API_SOURCE_FIELD,
  },
];
