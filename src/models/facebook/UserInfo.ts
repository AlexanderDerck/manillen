import { Picture } from "./";

export interface UserInfo {
  id: string,
  first_name?: string,
  last_name?: string,
  email?: string,
  picture?: Picture
};
