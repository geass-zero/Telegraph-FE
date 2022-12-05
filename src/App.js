import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Overview from './pages/Overview';
import Ecosystem from './pages/Ecosystem';
import TeamNPartners from './pages/TeamNPartners';
import UseCases from './pages/UseCases';
import { AppRoute } from './utils/constants/ConstantUtil';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path={AppRoute.ROOT} element={<Home />} />
          <Route exact path={AppRoute.OVERVIEW} element={<Overview />} />
          <Route exact path={AppRoute.ECOSYSTEM} element={<Ecosystem />} />
          <Route exact path={AppRoute.TEAM} element={<TeamNPartners />} />
          <Route exact path={AppRoute.USECASE} element={<UseCases />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
