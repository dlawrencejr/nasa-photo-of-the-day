import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PhotoCard from "./components/PhotoCard/PhotoCard";
import PhotoContent from "./components/PhotoContent/PhotoContent";

function App() {
  return (
    <div className="App">
    <Header />
    <PhotoCard />
    <PhotoContent />
    </div>
  );
}

export default App;
