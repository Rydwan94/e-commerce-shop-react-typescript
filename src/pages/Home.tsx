import Bestsellers from "../components/HomePage/Bestsellers"
import MainBannerSlider from "../components/HomePage/MainBannerSlider"
import ProductCategory from "../components/HomePage/ProductCategory"
import SecondBanner from "../components/HomePage/SecondBanner"

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <MainBannerSlider />
      <ProductCategory/>
      <Bestsellers />
      <SecondBanner />
    </div>
  )
}

export default Home