import './App.css';
import React ,{ useEffect, useState }from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBar';
import Scroll from './Components/Scroll';

function App() {
  const [robots,setRobots] =useState([]);
  const [searchfield,setSearchField] = useState('');
  const [count,setCount]=useState(0);
//use API to fetch
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        return response.json();
      })
      .then(users=>{
        setRobots(users)
      })
  },[count]) //only run if count changes

  const onSearchChange =(event)=>{
    setSearchField(event.target.value); 
  }
  
    const filteredRobots = robots.filter(robots=>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase())
     })
     console.log(robots);
  if(!robots.length){
    return(
      <h1 className='f1 bg-black tc'>Loading</h1>
    )
  }else{
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <button onClick={()=>setCount(count+1)}>Click Me {count}</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
     </div>
    );
  }
}


export default App;