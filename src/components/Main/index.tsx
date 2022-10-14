import React from 'react';
import { BannerTv } from '../BannerTv';
import { Subscribe } from '../Subscribe';
import { ListProducts } from '../Products';

import './global.css';

export const BlackFriday = () => {
  const banner = React.useMemo(() => {
    return {
      desktop: 'https://via.placeholder.com/1920x460/3e3e3e/fff',
      mobile: 'https://via.placeholder.com/1024x1328/3e3e3e/fff',
    };
  }, []);
  return (
    <main className="blackFriday__main">
      <section className="blackFriday__area blackFriday__area--banner">
        <BannerTv banner={banner} alt="Black Friday" />
      </section>

      <section className="blackFriday__area blackFriday__area--subscribe">
        <Subscribe />
      </section>

      <section className="blackFriday__area blackFriday__area--products">
        <ListProducts />
      </section>
    </main>
  );
};
