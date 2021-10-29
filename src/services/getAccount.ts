import request from '../adapters/xhr';
import { getJWT } from '../utils/storage';

export interface ILogin {
  email: string;
  password: string;
}

export interface IProfile {
  about: string;
  email: string;
  phone: string;
  address: string;
  needs: string;
}

export interface IAccount {
  _id?: string;
  firstName: string;
  lastName: string;
  profile: IProfile;
}

export function getAccount(): Promise<IAccount> {
  return request({
    url: '/accounts/me',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getJWT()}`,
    },
  }).then(({ data }) => data);
}

export function getAccountById(id: string): Promise<IAccount> {
  return request({
    url: `/accounts/${id}`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getJWT()}`,
    },
  }).then(({ data }) => data);
}
