import React, {useRef, useState} from "react";
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
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
      e.preventDefault()  // предотвращение поведения по умолчанию
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

  return (
    <div className="App">
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Name of project"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Desc of project"
            />
            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
