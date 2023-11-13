import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
function App() {
  return (
    <main className="flex min-h-screen flex-col gradient">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
      </div>
    </main>
  );
}
// bg-[#121212]
export default App;
