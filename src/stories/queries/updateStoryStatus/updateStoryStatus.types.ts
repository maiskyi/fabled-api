export enum StoryStatusLog {
  Initialized = 'initialized',
  ContentInProgress = 'contentInProgress',
  ImageInProgress = 'imageInProgress',
  Success = 'success',
  CreateStoryRequestFailed = 'createStoryRequestFailed',
  StoryContentGenerationFailed = 'storyContentGenerationFailed',
  StoryContentGenerationFailedWithNoResult = 'storyContentGenerationFailedWithNoResult',
  StoryGenerationFailed = 'storyGenerationFailed',
  StoryImageGenerationFailed = 'storyImageGenerationFailed',
  StoryImageUploadFailed = 'storyImageUploadFailed',
  StoryImageGenerationFailedWithNoResult = 'storyImageGenerationFailedWithNoResult',
  StoryImageUploadingToCloudinaryFailed = 'storyImageUploadingToCloudinaryFailed',
}
