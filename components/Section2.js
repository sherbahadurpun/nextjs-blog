import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

export default function Section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* Grid Columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {post()}
        {post()}
        {post()}
        {post()}
        {post()}
        {post()}
      </div>
    </section>
  );
}

function post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              className="rounded"
              src={"/images/img1.jpg"}
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
        <p className="text-gray-500 py-3 ">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <Author />
      </div>
    </div>
  );
}
