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
    </div>
  );
};
