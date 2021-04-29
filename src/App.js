import { BrowserRouter } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <AppRoute />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
