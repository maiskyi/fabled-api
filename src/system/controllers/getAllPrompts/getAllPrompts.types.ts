export interface GetPromptParams {
  readTime: number;
  prompt: {
    textPrompt: string;
  };
  character: {
    title: string;
    description: string;
  };
  moralLesson: {
    title: string;
    description: string;
  };
  placeOfEvent: {
    title: string;
  };
}
