import React, {useEffect, useState} from 'react'
import styles from '../Home/Home.module.css'

const state= ["UP","Telangana", "Karnatak"];
const city = [{"UP":"Noid"},{"UP":"gurugram"},{"Telangana":"Hyderabad"},{"Karnatak":"Bengluru"}]
const Reactpage = () => {
    const [count, setCount] = useState(0);
    const [cstat, setState] = useState("UP");
    // const count=0;
    // const jsrep = ()=> {
    //     let arr = [1,2,3,4,5,6,7];
    //     console.log(arr.join(","));
    //     // arr.
    //     return arr.slice(1,3).join(",");
    // };
    // useEffect(()=>{jsrep()},[]);
    useEffect(()=>{getState()},[]);
    // onChange={getCity()}
    // useEffect(()=>{getCount(count)},[]);
    const getCount=(countS)=>{  countS= countS+1; setCount(countS);}
    const getCountDecriment=(countS)=>{  countS= countS-1; setCount(countS);}
    //  console.info(jsrep());
    const getState= ()=>{return state.map(function(stval){
        return `<option=${stval}>${stval}</option>`;
    });}

    getCity= ()=>{
        select_stat = this.target.value;
        state.map(value => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    console.info(getState());
    return (<div>
       <p>Counter: {count}</p>
        <button onClick={()=>getCount(count)} value="click me" >Click me!{count}</button>
        <button onClick={()=>getCountDecriment(count)} value="click me decriment" >Click me for decriment!{count}</button>
        {/* <div>{jsrep()}</div> */}
<p>
    <select name="state">
{/* { getState().map(function(opt){return opt})} */}
{state.map(value => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
    </select>
    <select name="city">
{/* { getState().map(function(opt){return opt})} */}
{}
    </select>
</p>
    </div>

    )
}

export default Reactpage
