import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const {transactions}=useContext(GlobalContext);
    //each transaction is an obj with an id, text n amount
    const amounts = transactions.map(transaction => transaction.amount); //mapping n getting all the amounts

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //use reduce to add them all together
    return (
    <div>
    <h4>Your Balance</h4>
    <h1 >₹{total}</h1>
     </div>
  )
}
