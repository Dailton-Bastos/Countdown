import React from 'react';
import { BannerTv } from '../BannerTv';

export const BlackFriday = () => {
  const banner = React.useMemo(() => {
    return {
      desktop: 'https://via.placeholder.com/1920x460/3e3e3e',
      mobile: 'https://via.placeholder.com/1024x1328/3e3e3e',
    };
  }, []);
  return (
    <main className="blackFriday__main">
      <section className="blackFriday__area--banner">
        <BannerTv banner={banner} alt="Black Friday" />
      </section>
    </main>
  );
};
