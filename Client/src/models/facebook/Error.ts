export interface Error {
  code: number,
  error_subcode: number,
  error_user_title?: string,
  error_user_msg?: string,
  fbtrace_id?: string,
  message: string,
  type: string
};
