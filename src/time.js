import React from 'react'
import ReactDOM from 'react-dom'


export default function time () {
  ReactDOM.render(
    <h1 id="time">🖐Hola🤙</h1>,
    document.getElementById('app')
    );
   setTimeout(
    function(){ 
    ReactDOM.render(
      <h1>🖐Hi🤙</h1>, document.getElementById('app')
    )
    },3000);
  setTimeout(function(){
    ReactDOM.render(
    <><nav id='nav'></nav><main></main><footer></footer></>,
    document.getElementById('app')
    )},6000);
  }
  
