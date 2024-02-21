import Nav from './Components/Nav.js'
import './App.css';
import Main from './Components/Main.js';
import Menu from './Components/Menu.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
