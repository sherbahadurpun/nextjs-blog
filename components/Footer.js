import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Newsletter from "./_child/Newsletter";

export default function Footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImYoutube color="#888888" />
              </a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyright ©2022 All rights reserved | This template is made by Dev
            Mitra
          </p>
          <p className="text-center text-gray-400">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
