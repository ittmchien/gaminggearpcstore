import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/font-awesome.min.css";
import "../src/assets/css/nouislider.min.css";
import "../src/assets/css/slick-theme.css";
import "../src/assets/css/slick.css";
import "../src/assets/css/style.css";
import "../src/assets/fonts/GoogleFonts.css"

import Home from "./components/Home/Home";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <Router>
      <Header/>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
