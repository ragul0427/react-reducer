import React from 'react'
import { useReducer } from 'react';

const transactionReducer = (state, action) => {

   
	switch (action.type) {
		case 'WITHDRAW':
			console.log(action)
			return state - action.payload
		case 'DEPOSIT':
			console.log(action)
			return state + action.payload

            default:
                return state
	}

   
}


export default function Reducer() {
    const withdraw=(amount)=>{
        dispatch({type:'WITHDRAW',payload:amount})
        }
        const deposit=(amount)=>{
        dispatch({type:'DEPOSIT',payload:amount})
        }
        
        
    const [state,dispatch] = useReducer(transactionReducer,1000)
	return (
		<div>
			<h1>
				balance:{state}</h1>
                <button onClick={()=>withdraw(500)}>withdraw</button>
                <button onClick={()=>deposit(500)}>deposit</button>
		</div>
	)
}

