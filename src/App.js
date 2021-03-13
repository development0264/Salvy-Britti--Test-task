import './App.css';
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import '../src/components/ScreenOne.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

// const ThemeContext = React.useContext()

function App() {
  return (
    <div className="App">
      <Router>
        {/* <ThemeContext.Provider value={val}> */}
        <Route exact path="/"><ScreenOne /></Route>
        <Route exact path="/two"><ScreenTwo /></Route>
        <Route exact path="/three"><ScreenThree /></Route>
        {/* <ScreenOne />
      <ScreenTwo />
      <ScreenThree /> */}
        {/* </ThemeContext.Provider> */}
      </Router>
    </div>
  );
}

export default App;
// https://drive.google.com/file/d/1mNG-FcDrioW_zAfkoJHzfD8ILOdfG6x0/view