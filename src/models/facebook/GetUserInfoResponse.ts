import { UserInfo, Error } from './';

/**
 * The response returned by the Facebook Graph API when you query a userId
 * @example When it errors: 
 * { 
 *  error: { 
 *    ... 
 *  }
 * }
 * @example When it succeeds: 
 * { 
 *  id: '...', 
 *  first_name: '...', 
 *  ... 
 * }
 */
export interface GetUserInfoResponse extends UserInfo {
  error?: Error
};
