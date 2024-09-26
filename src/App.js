import { useState } from 'react';
import './App.css';

function Button({label, clickHandler}){
  return(
    <button onClick={clickHandler}>
      {label}
    </button>
    
  );
}

function Display({display}){
  return(
    <div className="Display">
      {display}
    </div>
  );
}


function App() {
  const[disp, setdisp] = useState(0);
  const[num1, setnum1] = useState(null);
  const[num2, setnum2] = useState(null);
  const[op, setop] = useState(null);

  const genenricclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
  }

  const numclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    if(op === null){
    if (num1 === null){
    setnum1(value);
    setdisp(value);}
    else{
      setnum1(num1+value);
      setdisp(num1+value);
    }
  }else{
    if (num2 === null){
      setnum2(value);
      setdisp(value);}
      else{
        setnum2(num2+value);
        setdisp(num2+value);
      }
  }
    setdisp(value);
    console.log(num1);
  }

  const opclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    setop(value);
    setdisp(value);
    console.log(op);
  }

  const eqclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(num1 + '|' + op + '|' +num2);

    let result = null;
    if(op === '+'){
      result = parseInt(num1) + parseInt(num2);
    }
    else if(op === '-'){
      result = parseInt(num1) - parseInt(num2);
    }
    else if(op === '*'){
      result = parseInt(num1) * parseInt(num2);
    }
    else if(op === '/'){
      result = parseInt(num1) / parseInt(num2);
    }
    else{
      result ="Error";
    }
    setdisp(result);
  }

  return (
    <div className="Calculator">
      <div className="Calcontainer">
        <div className="Displaycon">
        <Display display ={disp}/>
        </div>
        <div className="Buttons">
          <Button label={7} clickHandler={numclickHandler}/> 
          <Button label={8} clickHandler={numclickHandler}/>
          <Button label={9} clickHandler={numclickHandler}/>
          <Button label={'/'} clickHandler={opclickHandler}/>
          <Button label={4} clickHandler={numclickHandler}/>
          <Button label={5} clickHandler={numclickHandler}/>
          <Button label={6} clickHandler={numclickHandler}/>
          <Button label={'*'} clickHandler={opclickHandler}/>
          <Button label={1} clickHandler={numclickHandler}/>
          <Button label={2} clickHandler={numclickHandler}/>
          <Button label={3} clickHandler={numclickHandler}/>
          <Button label={'-'} clickHandler={opclickHandler}/>
          <Button label={'.'} clickHandler={opclickHandler}/>
          <Button label={0} clickHandler={numclickHandler}/>
          <Button label={'='} clickHandler={eqclickHandler}/>
          <Button label={'+'} clickHandler={opclickHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
