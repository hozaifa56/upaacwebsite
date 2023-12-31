import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutOrg from './components/AboutOrg';
import AboutMAV from './components/AboutMAV';
import Contact from './components/Contact';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import GalleryItem from './components/GalleryItem';
import Download from './components/Download';
import Blog from './components/Blog';
import Registration from './components/Registration';
import Member from './components/Member';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/AboutOrg' element={<AboutOrg/>}/>
          <Route path='/AboutMAV' element={<AboutMAV/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/GalleryItem' element={<GalleryItem/>}/>
          <Route path='/Download' element={<Download/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Member' element={<Member/>}/>
          <Route path='/Registration' element={<Registration/>}/>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
