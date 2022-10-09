import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Format from "../layout/Format";

export default function Home() {
  return (
    <>
      <Format>
        <Section1 />
        <Section2 />
      </Format>
    </>
  );
}
