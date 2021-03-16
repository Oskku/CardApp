import React,{useState} from "react";
import styles from "./Filter.module.css"

const Filter = ({filterProp}) => {
 
 const [state, setState] = useState("")
 
 
 
 const filterHandler = (e)=>{
     const names = e.target.value
    setState(names)
    filterProp(names)
 }
 
 
 
 
 
 
 
    return (
      <div className = {styles.input}>
      <input type="text" placeholder="Search..."  value={state} onChange={filterHandler}/>
      </div>
    
  );
};

export default Filter;
