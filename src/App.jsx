{/*
  Solo debe ser una etiqueta main, es el contenido principal del sitio 

*/}
import NavBar from "./components/NavBar";
import Menu from "./components/Menu"
import Content from "./components/Content";

function App() {
  return(
    <main id="main-layout"> 
      <NavBar/>
      <Menu/>
      <Content/>
      

    </main>

  )
  
}
export default App;