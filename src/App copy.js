import './App.css';
import React from 'react';
import Tasks from './components/Tasks.js';
import Header from './components/Header1.js';
import {useState} from 'react'


function App() {

  const[tasks,setTasks]=useState([{id:1,text:'text1',day:'day1'},{id:2,text:'text2',day:'day2'},{id:3,text:'text3',day:'day3'},])
  return (
    <div className="container">
     <Header title={'dfghf'}/>
     <Tasks tasks={tasks}/>
     <h1>hello from smashing the bussinessXXX</h1>
     
      
    </div>
     
);
}
class App3 extends React.Component{

  render(){
    return <h1>heeelllo</h1>
  }
}


export default App;
