import Description from "@/Components/Description";
import Header from "@/Components/Header";
import TopSlider from "@/Components/TopSlider";

export default function Home() {
  return (
     <div className="wrapper">
          <Header />
          <TopSlider/>
          <Description/>
     </div>
  )
}
