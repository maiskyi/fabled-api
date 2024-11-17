export interface RevenueCatConfig {
  readonly apiKey: string;
  readonly baseURL: string;
  readonly projectId: string;
  readonly environment: 'local' | 'development' | 'production';
}
