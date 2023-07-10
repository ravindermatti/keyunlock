import React, { useReducer } from 'react'

const UnlockKey = () => {

  const initialState ={
    input :'' ,
    stars : 0 
    
  }
  const reducer=(state,action)=>{

    switch(action.type){
      case 'PRESS_BUTTON':

       const {input,stars} = state;
      const newInput = input +action.payload;
      const newStars =  newInput === '6611' ? stars+1 : 0;
      if(newInput == '6611'){
        alert('lock unlocked')
      }
      
      return {input : newInput , stars : newStars}
      

      case 'reset' :
        return initialState;
      default : return state;
    }

  }

  const[state,dispatch] = useReducer(reducer,initialState)

  const handleButton =(value) =>{
    dispatch({type: 'PRESS_BUTTON' ,payload:value})
  }
  return (
    <div>
      <p>stars:{state.stars}</p>
      <p>input:{state.input}</p>
      <button onClick={()=>handleButton('1')}>1</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>handleButton('2')}>2</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>handleButton('3')}>3</button><br/><br/>
      <button onClick={()=>handleButton('4')}>4</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>handleButton('5')}>5</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>handleButton('6')}>6</button><br/><br/>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default UnlockKey