import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/Navbar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
