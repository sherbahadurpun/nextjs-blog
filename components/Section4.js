import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

export default function Section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {/* Post */}
            {post()}
            {post()}
            {post()}
            {post()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {/* Post */}
            {post()}
            {post()}
            {post()}
            {post()}
          </div>
        </div>
      </div>
    </section>
  );
}

function post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              className="rounded"
              src={"/images/img1.jpg"}
              width={300}
              height={250}
            />
          </a>
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
        <div className="catg">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600 ">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
