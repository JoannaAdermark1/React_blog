import {useState} from "react";

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

  const handleClick = () => {
      setName('luigi');
      setAge(32)
      setJob('fullstack developer')
  }

    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{ name } is { age } years old and { job }</p>
        <button onClick={handleClick}>click me </button>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2> { blog.title }</h2>
            <p> Written by { blog.aothor }</p>
          </div>
        ))}
      </div>
    );
  }

   
  export default Home;