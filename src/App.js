import './App.css';
import Banner from './components/Banner/Banner';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
    </div>
  );
}

export default App;
