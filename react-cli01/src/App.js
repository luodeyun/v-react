import React from 'react'
import Hello from './Hello.js'
import './App.css';
class App extends React.Component {
  render() {
    return (
    <div>
      <h1 className = 'demo'>
           我是App
      </h1>
      <Hello/>
      </div>)
  }
}
export default App;