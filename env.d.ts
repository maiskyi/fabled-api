declare namespace NodeJS {
  export interface ProcessEnv {
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_CLOUD_NAME: string;
    CORS_ORIGINS: string;
    DATABASE_URL: string;
    ENVIRONMENT: 'local' | 'development' | 'production';
    PORT: string;
    REVENUECAT_API_HOST: string;
    REVENUECAT_API_KEY: string;
  }
}
