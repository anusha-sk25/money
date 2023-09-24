import React from 'react';
import useLocalStorage from 'use-local-storage'
//import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './index.css';
import './App.css';


function App() {
  const[theme,setTheme]=useLocalStorage('theme'?'dark':'light')
  const switchTheme=()=>{
    const newTheme=theme==='light'?'dark':'light';
  setTheme(newTheme)
  
  }
  return (
    <div className="app" data-theme={theme}>
    <div className='title'>
      <h1>Money Monitor</h1>
      
      <GlobalProvider>
     
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
        
        
      </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
