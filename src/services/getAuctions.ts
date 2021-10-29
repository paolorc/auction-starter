import request from '../adapters/xhr';
import { getJWT } from '../utils/storage';
import { IAccount } from './getAccount';

export interface IRequestAuctions {
  page?: number;
  limit?: number;
  applied?: boolean;
  showcased?: boolean;
  status?: string;
}

export interface IAuction {
  _id?: string;
  title: string;
  description: string;
  category: string;
  owner: string | IAccount;
  winner?: string | IAccount;
  appliers?: [string | IAccount];
  status: string;
  finishedAt?: Date;
  createdAt: Date;
  updatedAt?: Date;
}

export function getAuctions(params: IRequestAuctions): Promise<IAuction[]> {
  return request({
    url: '/auctions',
    method: 'GET',
    params,
    headers: {
      Authorization: `Bearer ${getJWT()}`,
    },
  }).then(({ data }) => data);
}

export function getAuctionsByAccount(
  params: IRequestAuctions,
): Promise<IAuction[]> {
  return request({
    url: '/auctions/me',
    method: 'GET',
    params,
    headers: {
      Authorization: `Bearer ${getJWT()}`,
    },
  }).then(({ data }) => data);
}

export function getAuctionById(id: string): Promise<IAuction> {
  return request({ url: `/auctions/${id}`, method: 'GET' }).then(
    ({ data }) => data,
  );
}
