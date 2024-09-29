import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <ProductSection/> */}
      <ImageSlider/>
    </main>
  );
}
