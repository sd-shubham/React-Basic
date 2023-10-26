import { useReducer, useState } from "react"
import Button from "./Button";

const INCREMENT_COUNTER = 'increment';
const DECREMENT_COUNTER = 'decrement';
const SET_VALUE = 'setValue';
const ADD_VALUE = 'addValue';

const reducer = (state,action) => {
    switch(action.type){
      case  INCREMENT_COUNTER:
        return {
            ...state,
            count: +state.count + 1
        }
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: +state.count - 1
            }
        case SET_VALUE:
            return {
                ...state,
            addValue: action.payload
            }
        case ADD_VALUE:
            return {
                ...state,
            count : state.count + action.payload,
            addValue: 0
            }
         default:
            return state;
    }
}
export function Counter() {
const title = "dummy";
const [state,dispatch] = useReducer(reducer,{
    count:0,
    addValue: 0
});
//   const [count, setCount] =  useState(0);
//   const [addValue, setAddValue] = useState(0);
  const handleChange = (event) => {
    const val = +event.target.value || 0 ;
    dispatch({type:SET_VALUE,payload:val})
  }
  const handleSave = () => {
   // setCount(addValue);
   dispatch({type: ADD_VALUE, payload: state.addValue});
   //dispatch({type:SET_VALUE,payload:0});
  }
  const handleIncrement = () => {
   // setCount(+count + 1);
   dispatch({type: INCREMENT_COUNTER})
  }
  const handleDecrement = () => {
   // setCount(+count -1);
   dispatch({type: DECREMENT_COUNTER})
  }

    return(
        <div>
            <label>counter value - {state.count}</label>
        <div>
            <label>ADD-Value</label>
            <input type="number" onChange={handleChange} value={state.addValue || ''}/>
        </div>
        <div>
            <Button primary onClick={handleSave}>ADD Value</Button>
        </div>
        <div>
            <Button danger onClick={handleIncrement}>Increment</Button>
        </div>
        <div>
            <Button secondary onClick={handleDecrement}>Decrement</Button>
        </div>
        {title}
        </div>
    )
}