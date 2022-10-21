import Image from "next/image";
import Link from "next/link";
import fetcher from "../../lib/fetcher";
import Author from "./Author";
import Error from "./Error";
import Spinner from "./Spinner";

export default function Related() {
  const { data, isLoading, isError } = fetcher("api/posts");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
        {data.map((value, index) => (
          <Post key={index} data={value}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              className="rounded"
              src={img || ""}
              width={300}
              height={200}
            />
          </a>
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
        <div className="catg">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "No Category"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              - {published || "No Date"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600 ">
              {title || "No Title"}
            </a>
          </Link>
        </div>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
