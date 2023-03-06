import './App.css';

import SearchBar from "./components/SearchBar";
import {DisplayComp, DisplayDays} from "./components/DisplayComp";

function App() {
  return (
    <div className="App">
      <SearchBar />

        <DisplayComp />
        <DisplayDays />

    </div>
  );
  
}

export default App;
