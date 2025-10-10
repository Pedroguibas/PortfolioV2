import Layout from "./components/shared/Layout";
import Hero from "./components/Hero";
import SoftskillsScroller from "./components/SoftskillsScroller";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <SoftskillsScroller />
        <Technologies />
      </Layout>
    </>
  );
}

export default App;
