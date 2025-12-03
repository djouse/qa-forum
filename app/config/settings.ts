export const APP_SETTINGS = {
  VERSION: '1.1.0',
  DEVELOPMENT_MODE: true,
  QUESTIONS_PER_PAGE: 20,
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_FILE_SIZE_MB: 10,
  ALLOW_MULTIPLE_FILES: true,
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain'],
} as const