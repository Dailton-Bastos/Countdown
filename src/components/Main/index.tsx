import React from 'react';
import { BannerTv } from '../BannerTv';
import { Subscribe } from '../Subscribe';
import { ListProducts } from '../Products';
import { ListCategories } from '../Categories';

import bannerMainDesk from '../../assets/main_banner_desk.png';
import bannerMainMobile from '../../assets/main_banner_mobile.png';

import './global.css';

export const BlackFriday = () => {
  const banner = React.useMemo(() => {
    return {
      desktop: bannerMainDesk,
      mobile: bannerMainMobile,
      alt: 'Desconto de até 50%',
    };
  }, []);
  return (
    <main className="blackFriday__main">
      <section className="blackFriday__area blackFriday__area--banner">
        <BannerTv banner={banner} alt={banner.alt} />
      </section>

      <section className="blackFriday__area blackFriday__area--subscribe">
        <Subscribe />
      </section>

      <section className="blackFriday__area blackFriday__area--products">
        <ListProducts />
      </section>

      <section className="blackFriday__area blackFriday__area--categories">
        <ListCategories />
      </section>
    </main>
  );
};
