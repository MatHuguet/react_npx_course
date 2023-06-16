// On importe le composant Header.js (renommé Header)
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import './App.css'
/* 
Dans la fonction App, on appelle le composant Header avec une balise
auto-fermante. Si nous avions à imbriquer d'autres composants dans notre
Header, nous aurions utilisé des parenthèses après return, et la balise Header
ne serait pas auto-fermante.
*/
function App() {
  return(
    <>
      <Header/> 
      <Footer/>
    </>
  ) 
}

export default App;
