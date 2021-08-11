import ApiSourceType from './ApiSourceType';

import GitHubApiSource from './github/GitHubApiSouce';
import SpotifyApiSource from './spotify/SpotifyApiSource';

const ApiSources: Array<ApiSourceType<any, any>> = [
  GitHubApiSource,
  SpotifyApiSource,
];

export const ApiSourcesMap: { [key: string]: ApiSourceType<any, any> } = {
  [GitHubApiSource.key]: GitHubApiSource,
  [SpotifyApiSource.key]: SpotifyApiSource,
};

export default ApiSources;
