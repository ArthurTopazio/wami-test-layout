import { FC } from 'react';

import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
