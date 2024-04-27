import {useState} from "react";

const Home = () => {
  // let name = 'mario';

  const [name, setName ] = useState('mario');
  const [age, setAge ] = useState (38);
  const [job, setJob] = useState ('salesman');

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
      </div>
    );
  }
   
  export default Home;