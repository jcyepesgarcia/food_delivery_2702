import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeadlineCards/>
      </main>
    </>
  );
}

export default App;
