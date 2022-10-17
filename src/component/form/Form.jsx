import React,{useContext,useState} from 'react';
import {todoActions} from "../context/todo.reducer";
import { TodoContext } from '../context/TodoProvider';
import "../../App.css";
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/reducer/todo.slice';
import './form.style.css'
const Form = ({mode,setMode,formData,setFormData}) => {

    //const { todos, todoDispatch } = useContext(TodoContext);
    const dispatch=useDispatch()
    const colors=[
        {
            name:'Vrey Important',
            colorname:'#937DC2'
        },
        {
            name:' Important',
            colorname:'#C689C6'
        },
        {
            name:'Not vrey Important',
            colorname:'#FFABE1'
        }
    ]
    const additem=(e)=>{
        e.preventDefault()
        //const formdata = new FormData(e.target);
        //const data =Object.fromEntries(formdata.entries());
       // setstate([...state,{...data,id:Math.random()*100}]);
       if(mode==="create"){
          // setstate([...state,{...formData,id: Math.floor(Math.random()*100)}]);
          //todoDispatch({type:todoActions.add,payload:formData})
          dispatch(addTodo({...formData,id: Math.floor(Math.random()*100),compeleted:false}))
          //console.log(todos)
       }
       else{
          //console.log('jjjj')
          //console.log(formData)
          //setstate(state.map(item=>(item.id===formData.id ?formData : item)))
          //todoDispatch({type:todoActions.update,payload:formData})
          dispatch(updateTodo(formData))
          
       }
       setFormData({
        id:Math.floor(Math.random()*1000),
        title:'',
        description:'',
       })
       setMode("create")
      }

      const handleInputs=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
       // console.log(formData)
      }
      const handleColor=(colorName)=>{
        setFormData({...formData,color:colorName})
      }
    return ( 
        <form onSubmit={additem} className="form">
            <div className='inputSection'>
            <lable className={'lable'}><h3>title:</h3></lable><br/>
            <input type="text" name='title' value={formData.title} onChange={handleInputs} className="inputs mr"></input>
            <lable className={'lable'}><h3>description:</h3></lable>
            <input type="text" name='description' value={formData.description}
                onChange={handleInputs} className="inputs mr"></input>
            </div>

            <h2>Choose your color:</h2>
            <div className='color'>
                {colors.map(color=>(
                    <div>
                        <h5>{color.name}</h5>
                        <div style={{width:"30px",height:'30px',borderRadius:'50%',background:color.colorname,border:formData.color===color.colorname?'1px solid #000':'unset'}} onClick={()=>handleColor(color.colorname)} />
                    </div>
                ))}
            </div>


            <button type={'submit'} className="btnSubmit">
                {mode==="create"?'Add Todo':'Update Todo'}</button>
        </form>
     );
}
 
export default Form;