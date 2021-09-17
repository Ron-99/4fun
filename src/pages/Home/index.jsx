import {HomePageWrapper} from "./style";
import BannerSection from "./sections/BannerSection";
import SubscriptionSection from "./sections/SubscriptionSection";

function Home() {
  return(
    <HomePageWrapper>
      <BannerSection />
      <SubscriptionSection />
    </HomePageWrapper>
  )
}

export default Home;
