import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';

import './App.scss';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
