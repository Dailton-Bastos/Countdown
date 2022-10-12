import { Countdown } from '../Countdown';

import type { Props } from './types';

import './global.css';

export const BannerTv = ({ banner, alt }: Props) => {
  return (
    <div className="blackFriday__banner">
      <div className="banner__default hide--sm">
        <img src={banner?.desktop} alt={alt} />
      </div>

      <div className="banner__default hide--lg">
        <img src={banner?.mobile} alt={alt} />
      </div>

      <div className="banner__countdown--area">
        <div className="banner__countdown">
          <Countdown futureDate="24 November 2022 23:59:59 GMT-0300" />
        </div>
      </div>
    </div>
  );
};
