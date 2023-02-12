import BestSellers from './BestSellers';
import Header from './Header';
import Newsletter from './Newsletter';
import ExploreMore from './ExploreMore';
import NewReleases from './NewReleases';
import AboutUs from './AboutUs';
import AboveBlog from './AboveBlog';

function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-col gap-16 py-16">
        <BestSellers />
        <ExploreMore />
        <NewReleases />
        <AboutUs />
        <AboveBlog />
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
