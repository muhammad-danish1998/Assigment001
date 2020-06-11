import React from 'react';
import './App.css';
function App(props) {
 
  return (<div>
 <h1 style = { { color :'red'}}>Task # 1</h1>
 <h2>my name is {props.name} and i am {props.age} years old :)</h2>

 <h1 style = { { color :'yellow'}} >Task # 2</h1>
 <p>my name is  <strong>{props.name}</strong> and i am {props.age} years old :)</p>
 
 <h1 style = { { color :'green'}}>Task # 3</h1>
 
 <h2>Animals : )</h2>
 <ul>
   <li>{props.animal1}</li>
   <li>{props.animal2}</li>
 </ul>
 <h2>Books : )</h2>
 <ol>
   <li>{props.book1}</li>
   <li>{props.book2}</li>
 </ol>
 
 <h1 style = { { color :'yellow'}} >Task # 4 </h1> 
<h2>Mathematics</h2>
<h3>when 3 * 4 = {3*4}</h3>


  </div>);
}

export default App;
