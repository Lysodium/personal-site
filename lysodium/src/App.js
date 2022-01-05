import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import Header from './components/Header';
import DropboxEmbed from './components/DropboxEmbed';
import Hero from './components/Hero';
function App() {
  return (
    <>
    <div className='navbar'>
      <NavBar></NavBar>
    </div>
    <div className='Head'>
      <Header></Header>
    </div>
    <div className='Hero'>
      <Hero></Hero>
    </div>
    <div className="Dropbox">
      <DropboxEmbed/>
    </div>
  </>

  );
}

export default App;
