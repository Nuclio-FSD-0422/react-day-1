import React from 'react';

import './App.css';

const names = ['Daniel', 'Julian', 'Roberto', 'Juan']

const MyParagraph = (props) => <p>Hola <span>{props.persona}</span>, Edit and save to reload.</p>;

const Counter = (props) => {

  const [count, setCount] = React.useState(props.initialCount);

  const onIncrement = () => {
    console.log('me han llamado para que incremente un contador');
    setCount(count + 1)
  }
  const onDecrement = () => {
    setCount(prev => {
      console.log('valor previo a restar', prev)
      return prev - 1
    })
  }

  return <div>
      <p>{count}</p>
      <button onClick={onIncrement}>Incrementar</button>
      <button onClick={onDecrement}>Restar</button>

    </div>;
}   

const List = (props) => {

  const [currentList, setList] = React.useState(props.initialList);

  const [input, setInput] = React.useState('')

  const element = React.useRef()

  const deleteLast = () => {
    setList(currentList.slice(0, currentList.length - 1))
  }

  const addToList = name => {
    setList(currentList.concat(name))
    setInput('')
    element.current?.focus()
  }

  return <div>
    <button onClick={deleteLast}>Borrar al último</button>
    <button onClick={() => addToList(input)}>Añadir a la lista</button>
    <input ref={element} value={input} onChange={e => setInput(e.target.value)}></input>
    {currentList.map(name => <MyParagraph key={name} persona={name}>Children position</MyParagraph>)}
    </div>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List initialList={names}></List>
      </header>
    </div>
  );
}

export default App;
