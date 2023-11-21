import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <main className="flex min-h-screen flex-col gradient">
      <Header />
      <div className="container lg:mt-24 mx-auto px-12 py-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}

export default App;
