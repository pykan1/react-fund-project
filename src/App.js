import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import Postitem from "./components/postitem";
import Postlist from "./components/Postlist";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'JavaSript 1', body: "Description"},
        {id:2, title: 'JavaSript 2', body: "Description"},
        {id:3, title: 'JavaSript 3', body: "Description"},
    ])




  return (
    <div className="App">
        <Postlist posts={posts} title="список постов 1"/>
    </div>
  );
}

export default App;
