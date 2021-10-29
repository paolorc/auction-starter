import { useState } from 'react';
import { IAuction } from '../services/getAuctions';

import {
  IUnpublish,
  publishAuction as publishAuctionService,
  unpublishAuction as unpublishAuctionService,
  updateAuction as updateAuctionService,
} from '../services/publish';
import {
  applyAuction as applyAuctionService,
  discardAuction as discardAuctionService,
  setWinner as setWinnerService,
} from '../services/applierActions';

export function useAuctionCreator() {
  const [creating, setCreating] = useState(false);
  const [auctionCreated, setAuctionCreated] = useState<IAuction>(
    {} as IAuction,
  );

  const publishAuction = (data: Partial<IAuction>) => {
    setCreating(true);

    publishAuctionService(data).then((data) => {
      setAuctionCreated(data);
      setCreating(false);
    });
  };

  const unpublishAuction = (data: IUnpublish) => {
    setCreating(true);

    unpublishAuctionService(data).then((data) => {
      setCreating(false);
    });
  };

  const updateAuction = (id: string, data: Partial<IAuction>) => {
    setCreating(true);

    updateAuctionService(id, data).then((data) => {
      setAuctionCreated(data);
      setCreating(false);
    });
  };

  const setWinner = (auctionId: string, winnerId: string) => {
    setCreating(true);

    setWinnerService(auctionId, winnerId).then((data) => {
      setAuctionCreated(data);
      setCreating(false);
    });
  };

  const applyAuction = (auctionId: string) => {
    setCreating(true);

    applyAuctionService(auctionId).then((data) => {
      setAuctionCreated(data);
      setCreating(false);
    });
  };

  const discardAuction = (auctionId: string) => {
    setCreating(true);

    discardAuctionService(auctionId).then((data) => {
      setAuctionCreated(data);
      setCreating(false);
    });
  };

  return {
    creating,
    setCreating,
    auctionCreated,
    setAuctionCreated,
    publishAuction,
    unpublishAuction,
    updateAuction,
    setWinner,
    applyAuction,
    discardAuction,
  };
}
