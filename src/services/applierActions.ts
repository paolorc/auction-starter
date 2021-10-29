import request from '../adapters/xhr';
import { IAuction } from './getAuctions';

export function setWinner(
  auctionId: string,
  winnerId: string,
): Promise<IAuction> {
  return request({
    url: `/auctions/${auctionId}/winner`,
    method: 'POST',
    data: { winnerId },
  }).then(({ data }) => data);
}

export function applyAuction(auctionId: string): Promise<IAuction> {
  return request({
    url: `/auctions/${auctionId}/apply`,
    method: 'POST',
  }).then(({ data }) => data);
}

export function discardAuction(auctionId: string): Promise<IAuction> {
  return request({
    url: `/auctions/${auctionId}/discard`,
    method: 'POST',
  }).then(({ data }) => data);
}
