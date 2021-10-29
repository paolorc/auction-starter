import request from '../adapters/xhr';
import { getJWT } from '../utils/storage';
import { IAuction } from './getAuctions';

export function publishAuction(data: Partial<IAuction>): Promise<IAuction> {
  return request({
    url: '/auctions/publish',
    method: 'POST',
    data,
    headers: {
      Authorization: `Bearer ${getJWT()}`,
    },
  }).then(({ data }) => data);
}

export function updateAuction(
  auctionId: string,
  data: Partial<IAuction>,
): Promise<IAuction> {
  return request({
    url: `/auctions/${auctionId}`,
    method: 'POST',
    data,
    headers: {
      Authorization: `Bearer ${getJWT()}`,
    },
  }).then(({ data }) => data);
}

export interface IUnpublish {
  auctionId: string;
}

export function unpublishAuction(data: IUnpublish): Promise<void> {
  return request({
    url: '/auctions/unpublish',
    method: 'POST',
    data,
    headers: {
      Authorization: `Bearer ${getJWT()}`,
    },
  }).then(({ data }) => data);
}
