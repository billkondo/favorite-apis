import ApiSourceType from './ApiSourceType';

import GitHubApiSource from './github/GitHubApiSouce';
import FreeToGameSource from './freetogame/FreeToGameSource';

const ApiSources: Array<ApiSourceType<any, any>> = [
  GitHubApiSource,
  FreeToGameSource,
];

export const ApiSourcesMap: { [key: string]: ApiSourceType<any, any> } = {
  [GitHubApiSource.key]: GitHubApiSource,
  [FreeToGameSource.key]: FreeToGameSource,
};

export default ApiSources;
