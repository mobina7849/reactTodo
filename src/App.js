//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ToDo from './component/ToDo/ToDo';
//database
const todos =[{
  id:1,
  title:"title",
  description:"Say",
  state:false
},
{
  id:2,
  title:"new",
  description:"Say",
  state:false},
{
  id:3,
  title:"buy",
  description:"Say",
  state:true}
];


function App() {
  const [state ,setstate]=useState(todos);
  const [formData,setFormData]=useState({
    id:'0',
    title:'',
    description:''
  
  });
  const[mode,setMode]=useState("create");
  const handleSelectForUpdate=(todo)=>{
    setFormData(todo);
    setMode("update")
  }
  const additem=(e)=>{
    e.preventDefault()
    //const formdata = new FormData(e.target);
    //const data =Object.fromEntries(formdata.entries());
   // setstate([...state,{...data,id:Math.random()*100}]);
   if(mode==="create"){
       setstate([...state,{...formData,id: Math.floor(Math.random()*100)}]);
   }
   else{
      //console.log('jjjj')
      //console.log(formData)
      setstate(state.map(item=>(item.id===formData.id ?formData : item))
      )
   }
  }
  const deleteitem=(id)=>{
    setstate(state.filter((item)=>item.id !==id))
  }
  const handleInputs=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (

    <div className='container'>
     <form onSubmit={additem} className="form">
      <lable>title:</lable>
      <input type="text" name='title' value={formData.title} onChange={handleInputs} className="inputs mr"></input>
      <lable>description:</lable>
      <input type="text" name='description' value={formData.description}
      onChange={handleInputs} className="inputs mr"></input>
      <button type={'submit'} className="btnSubmit">Add</button>
     </form>
     <div className='cards'>
      {state.map((todo)=>(
      <ToDo id={todo.id.toString()}
      title={todo.title}
      description={todo.description}
      onClick={()=>deleteitem(todo.id)}
      onClickUpdate={()=>handleSelectForUpdate(todo)}
      />
      ))}
     </div>
    </div>
  );
}

export default App;
