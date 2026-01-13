// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import ComicsList from "./components/ComicsList.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return <>
    <header>
      <Navbar />
    </header>
    <main>
      <Jumbotron />
      <ComicsList />
      <Services />
    </main>
    <Footer />
  </>

}

export default App
