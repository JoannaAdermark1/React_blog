import {useEffect, useState} from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  // let name = 'mario';

  const [name, setName ] = useState('mario');
  const [age, setAge ] = useState (38);
  const [job, setJob] = useState ('salesman');

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'mario', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  console.log("I'm getting executed")

useEffect(()=>{
  console.log("I'm getting executed every time a new blog gets added", blogs)
})
  const handleClick = () => {
      setName('luigi');
      setAge(32)
      setJob('fullstack developer')
  }

  const addBlog=()=>{
    const entry={ title: 'My blog entry', body: 'lorem ipsum...', author: 'mario', id: blogs.length+1 }
    setBlogs(blogs.concat(entry));
  }

    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{ name } is { age } years old and { job }</p>
        <button onClick={handleClick}>click me </button>
        <Bloglist blogs={blogs} title="All Blogs"/>
        <button onClick={_=>addBlog()}>Add blog entry</button>
      </div>
    );
  }

   
  export default Home;