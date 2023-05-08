"use client";
import Meta from "../components/Meta";
import Intro from "../components/Intro";
import Barrier from "../components/Barrier";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Meta />
      <Intro />
      <Barrier />
      <HomeSection2 />
      <Barrier />
      <HomeSection3 />
      <Barrier />
      <HomeSection4 />
      <Barrier />
      <HomeSection5 />
      <Barrier />
      <FAQ />
      <Barrier />
      <Footer />
    </div>
  );
}
