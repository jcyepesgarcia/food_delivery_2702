import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeadlineCards/>
        <Food/>
        <Category/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
