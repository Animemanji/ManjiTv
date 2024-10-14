import SideBar from "@/components/Sidebar";
import Slider from "@/components/Slider";
import AnimePost from "@/components/AnimePost";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
  <SideBar/>

  <main>
    <Slider/>
  </main>

  <div>
    <AnimePost/>
  </div>

  <Footer/>
  </>
  );
}
