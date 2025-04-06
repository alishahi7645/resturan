import './App.css';
import AppStore from './components/appStore/AppStore';
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
      <AppStore/>
    </div>
  );
}

export default App;
