export abstract class ApiError extends Error {
  constructor(message: string, public code: string) {
    super(message);
  }
}
