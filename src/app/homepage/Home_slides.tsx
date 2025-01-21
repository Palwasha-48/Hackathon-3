"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"

const RoomCarousel = () => {
  return (
    <section className="bg-[#FCF9F5] py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">50+ Beautiful rooms inspiration</h2>
            <p className="text-gray-600">Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
            <button className="bg-[#C6964A] text-white px-6 py-3 hover:bg-[#ab7f3a] transition">Explore More</button>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={true}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={false}
              className="mySwiper">

              <SwiperSlide>
                <div className="relative">
                  <Image
                    src="/slidepic1.png"
                    alt="slide1"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover-lg"/>
                  <div className="absolute bottom-10 left-5 bg-white p-4 h-[120px] w-[200px] items-center justify-center flex flex-col">
                    <span className="text-gray-500 text-sm">01 ------ Bed Room</span>
                    <h3 className="text-lg font-bold">Inner Peace</h3>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative">
                  <Image
                    src="/slidepic2.png"
                    alt="slide2"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover"/>
                  <div className="absolute bottom-10 left-5 bg-white p-4 h-[120px] w-[200px] items-center justify-center flex flex-col ">
                    <span className="text-gray-500 text-sm">02 ------ Living Room</span>
                    <h3 className="text-lg font-bold">Serene Ambiance</h3>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative">
                  <Image
                    src="/slidepic3.png"
                    alt="slide3"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover"/>
                  <div className="absolute bottom-10 left-5 bg-white p-4 h-[120px] w-[200px] items-center justify-center flex flex-col">
                    <span className="text-gray-500 text-sm">03 ------ Kitchen</span>
                    <h3 className="text-lg font-bold">Modern Comfort</h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomCarousel;

