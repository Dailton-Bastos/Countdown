import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Category } from './Category';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './global.css';

export const ListCategories = () => {
  return (
    <div className="blackFriday__categories">
      <div className="categories__content">
        <div className="categories__content--title">
          <h1>AS MELHORES CATEGORIAS</h1>
        </div>

        <div className="categories__content--subTitle">
          <h2>Produtos Médicos e Hospitalares para você</h2>
        </div>

        <div className="categories__content--grid">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.5}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <Category
                link="#"
                image="https://via.placeholder.com/252x325/"
                name="Lorem inpum"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores nesciunt reprehenderit, expedita facilis ab quam necessitatibus, culpa hic architecto modi similique molestiae iure? Suscipit unde modi dolores totam officiis!"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Category
                link="#"
                image="https://via.placeholder.com/252x325/"
                name="Lorem inpum"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores nesciunt reprehenderit, expedita facilis ab quam necessitatibus, culpa hic architecto modi similique molestiae iure? Suscipit unde modi dolores totam officiis!"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Category
                link="#"
                image="https://via.placeholder.com/252x325/"
                name="Lorem inpum"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores nesciunt reprehenderit, expedita facilis ab quam necessitatibus, culpa hic architecto modi similique molestiae iure? Suscipit unde modi dolores totam officiis!"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Category
                link="#"
                image="https://via.placeholder.com/252x325/"
                name="Lorem inpum"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores nesciunt reprehenderit, expedita facilis ab quam necessitatibus, culpa hic architecto modi similique molestiae iure? Suscipit unde modi dolores totam officiis!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Category
                link="#"
                image="https://via.placeholder.com/252x325/"
                name="Lorem inpum"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores nesciunt reprehenderit, expedita facilis ab quam necessitatibus, culpa hic architecto modi similique molestiae iure? Suscipit unde modi dolores totam officiis!"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Category
                link="#"
                image="https://via.placeholder.com/252x325/"
                name="Lorem inpum"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores nesciunt reprehenderit, expedita facilis ab quam necessitatibus, culpa hic architecto modi similique molestiae iure? Suscipit unde modi dolores totam officiis!"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
