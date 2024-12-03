declare namespace NodeJS {
  export interface ProcessEnv {
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_CLOUD_NAME: string;
    CORS_ORIGINS: string;
    DATABASE_URL: string;
    ENVIRONMENT: 'local' | 'development' | 'production';
    GMAIL_EMAIL: string;
    GMAIL_PASSWORD: string;
    KEYSTONE_API_HOST: string;
    KEYSTONE_API_KEY: string;
    MAILER_FROM: string;
    MAILER_TO: string;
    PORT: string;
    REVENUECAT_API_HOST: string;
    REVENUECAT_API_KEY: string;
    REVENUECAT_PROJECT_ID: string;
    FIREBASE_SERVICE_ACCOUNT: string;
  }
}
