export interface CreateFeedbackParams {
  rating: number;
  comment: string;
  firebaseUserId: string;
  email: string;
}

export interface SendEmailParams {
  rating: number;
  email: string;
  comment: string;
}
