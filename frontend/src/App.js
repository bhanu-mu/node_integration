import {useState, useEffect} from "react";


function App() {
  const[data,setData]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/employees")
    .then((res)=>res.json())
    .then((d)=>setData(d)) 
  },[])

 function Render(){

  const tableRows= data.map(
    (element,index)=>{
        return( 
            
          <tr key={index}>
            <td key={element.index}>{index+1}</td>
            <td key={element.name}>{element.name}</td>
            <td key={element.age}>{element.age}</td>
            <td key={element.location}>{element.location}</td>
          </tr>
            
        )
    }
)
return(
    <div>
        
      <table style={{textAlign:"center"}}>
          <thead>
            <tr>    
              <th>Index</th>
              <th> Name</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody style={{background:"lightgrey"}}>
            {tableRows}
          </tbody>
        </table>      
          
    </div>
)
}
 

return(
  <div>
    <h1 style={{color:"Blue"}}> List of Employees</h1>
    <Render/>
  </div>
)
}

export default App;