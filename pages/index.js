import Adidas from "@/Components/Adidas";
import Description from "@/Components/Description";
import Header from "@/Components/Header";
import ProductSlider from "@/Components/ProductSlider";
import TopProducts from "@/Components/TopProducts";
import TopSlider from "@/Components/TopSlider";

export default function Home() {
  return (
    <>
      <Header />
      <TopSlider />
      <Description />
      <ProductSlider/>
      <Adidas/>
      <TopProducts/>
    </>
  );
}
