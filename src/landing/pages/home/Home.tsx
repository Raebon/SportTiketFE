import { HeroComponent } from '../../components/HeroComponent';
import { NewsComponent } from '../../components/NewsComponent';

const Home = () => {
  return (
    <main className="grid gap-5">
      <HeroComponent />
      <NewsComponent />
    </main>
  );
};

export default Home;
