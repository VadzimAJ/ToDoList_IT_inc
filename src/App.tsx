import React from 'react';
import './App.css';
import { Button } from './Button';

function App() {
  const Button1Foo = (subScr: string, age?: number, title?: string) => {
    console.log('Hello Im ' + subScr, 'Age: ' + age, 'it`s ' + title + ' Button.');
  }

  const Button2Foo = (subScr: string, age?: number, title?: string) => {
    console.log('Hello Im ' + subScr, 'Age: ' + age, 'it`s ' + title + ' Button.');
  }
  
  const Button3Foo = ( title?: string) => {
    console.log( title + ' Button.');

  return (
    <div className="App">
      <Button title={'First'} callBack={(title) => Button1Foo('Rolly', 21, title)} />
      <Button title={'Second'} callBack={(title) => Button2Foo('Jager', 23, title)} />
      <Button title={'Stuped'} callBack={(title) => Button3Foo(title)} />
    </div>
  );
}

export default App;