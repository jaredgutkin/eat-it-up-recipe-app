import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter, Link} from 'react-router-dom'
import Search from "./components/Search";
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="nav">
        <GiKnifeFork/>
        <Link to={'/'}>
        <div className="logo"  >
          Eat It Up
        </div>
        </Link>
      </div>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
