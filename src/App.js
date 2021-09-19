import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <PostItem/>
    </div>
  );
}

export default App;
