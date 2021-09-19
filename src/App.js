import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])
  return (
    <div className="App">
        <form>
            <MyInput type="text" placeholder="Name of project"/>
            <MyInput type="text" placeholder="Desc of project"/>
            <MyButton>Create Post</MyButton>
        </form>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
