declare namespace NodeJS {
  export interface ProcessEnv {
    AWS_S3_ACCESS_KEY_SECRET: string;
    AWS_S3_ACCESS_KEY: string;
    AWS_S3_BUCKET_NAME: string;
    AWS_S3_BUCKET_REGION: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_FOLDER_ROOT: string;
    CORS_ORIGINS: string;
    DATABASE_URL: string;
    ENVIRONMENT: 'local' | 'development' | 'production';
    GMAIL_EMAIL: string;
    GMAIL_PASSWORD: string;
    KEYSTONE_API_HOST: string;
    KEYSTONE_API_KEY: string;
    MAILER_FROM: string;
    MAILER_TO: string;
    OPENAI_API_KEY: string;
    PORT: string;
    REVENUECAT_API_HOST: string;
    REVENUECAT_API_KEY: string;
    REVENUECAT_PROJECT_ID: string;
    STABILITY_AI_API_HOST: string;
    STABILITY_AI_API_KEY: string;
    SWAGGER_LOGIN: string;
    SWAGGER_PASSWORD: string;
  }
}
