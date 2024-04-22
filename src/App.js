import { NavbarV2, Navbar } from './Navbar';
import { Footer, HomePage } from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarV2>
        <p>Linkedin</p>
      </NavbarV2>
      <img src="" alt="my friends on the beach" />
      <div className="content">
        <HomePage />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
