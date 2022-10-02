import {useSelector, useDispatch} from 'react-redux';
import React,{useState} from "react";
import { decrement,increment, reset, incrementByAmount  } from './counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue =  Number(incrementAmount) || 0 ;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }    

    return(
        <section >
            <p>{count}</p>
            <div style={{fontSize:"2rem"}}><button onClick={()=>dispatch(increment())}>+</button></div>
            <div style={{fontSize:"2rem"}}><button onClick={()=>dispatch(decrement())}>-</button></div>
            <input
                style={{fontSize:"2rem"}}
                value={incrementAmount}
                onChange={(e)=> setIncrementAmount(e.target.value)}
            />

            <div>
                <button style={{fontSize:"2rem"}} onClick={()=>dispatch(incrementByAmount(addValue))}>Add amount</button>
                <button style={{fontSize:"2rem"}} onClick={()=> resetAll()}>Reset</button>
                
            </div>
        </section>
    )
}

export default Counter