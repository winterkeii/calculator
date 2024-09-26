
import './App.css';

function Button({label, clickHandler}){
  return(
    <button onClick={clickHandler}>
      {label}
    </button>
    
  );
}

function Display(){
  return(
    <div className="Display">
      0
    </div>
  );
}


function App() {
  const genenricclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
  }
  return (
    <div className="Calculator">
      <div className="Calcontainer">
        <div className="Displaycon">
        <Display></Display>
        </div>
        <div className="Buttons">
          <Button label={7} clickHandler={genenricclickHandler}/> 
          <Button label={8} clickHandler={genenricclickHandler}/>
          <Button label={9} clickHandler={genenricclickHandler}/>
          <Button label={'/'} clickHandler={genenricclickHandler}/>
          <Button label={4} clickHandler={genenricclickHandler}/>
          <Button label={5} clickHandler={genenricclickHandler}/>
          <Button label={6} clickHandler={genenricclickHandler}/>
          <Button label={'*'} clickHandler={genenricclickHandler}/>
          <Button label={1} clickHandler={genenricclickHandler}/>
          <Button label={2} clickHandler={genenricclickHandler}/>
          <Button label={3} clickHandler={genenricclickHandler}/>
          <Button label={'-'} clickHandler={genenricclickHandler}/>
          <Button label={'.'} clickHandler={genenricclickHandler}/>
          <Button label={0} clickHandler={genenricclickHandler}/>
          <Button label={'='} clickHandler={genenricclickHandler}/>
          <Button label={'+'} clickHandler={genenricclickHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
