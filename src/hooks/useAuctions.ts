import { useState } from 'react';

import {
  getAuctions as getAuctionsService,
  getAuctionById as getAuctionByIdService,
  getAuctionsByAccount as getAccountAuctionsService,
  IRequestAuctions,
  IAuction,
} from '../services/getAuctions';

export function useAuctions() {
  const [loading, setLoading] = useState(false);
  const [auctions, setAuctions] = useState<IAuction[]>([]);
  const [auction, setAuction] = useState<IAuction>({} as IAuction);

  const getAuctions = (params: IRequestAuctions) => {
    setLoading(true);

    getAuctionsService(params).then((data) => {
      setAuctions(data);
      setLoading(false);
    });
  };

  const getAccountAuctions = (params: IRequestAuctions) => {
    setLoading(true);

    getAccountAuctionsService(params).then((data) => {
      setAuctions(data);
      setLoading(false);
    });
  };

  const getAuctionById = (id: string) => {
    setLoading(true);

    getAuctionByIdService(id).then((data) => {
      setAuction(data);
      setLoading(false);
    });
  };

  return {
    loading,
    auctions,
    auction,
    setAuction,
    setAuctions,
    getAuctions,
    getAccountAuctions,
    getAuctionById,
  };
}
