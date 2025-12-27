export interface ErrorType {
  status: number;
  name: string;
  statusText: string;
  response?: ErrorResponseType;
}

export interface ErrorResponseType {
  data: {
    message: string;
    success: boolean;
  };
}
