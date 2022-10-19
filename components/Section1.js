import Image from "next/image";
import Link from "next/link";
import fetcher from "../lib/fetcher";
import Author from "./_child/Author";
import Error from "./_child/Error";
import Spinner from "./_child/Spinner";

// Import Swiper React components
import SwiperCore, { Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Section1() {
  const { data, isLoading, isError } = fetcher("api/trending");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  SwiperCore.use([Autoplay]);

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section loop={true} className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper autoplay={{ delay: 2000 }} slidesPerView={1}>
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <Slide data={value}></Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { title, description, category, img, published, author } = data;

  return (
    <div className="grid md:grid-cols-2 ">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image src={img || "/"} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="catg">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "Unknown"}
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">
              - {published || "Unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600 ">
              {title || "title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3 ">{description || "Unknown"}</p>
        {author ? <Author /> : null}
      </div>
    </div>
  );
}
