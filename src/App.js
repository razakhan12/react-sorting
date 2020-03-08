import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.resetArray = this.resetArray.bind(this);
    this.state = {
      array:[],
    };
  }

  componentDidMount()
  {
    this.resetArray();
  }

  resetArray()
  {
    const array = [];
    for(let i = 0; i < 250; i++)
    {
      array.push(this.randomInterval(500,5));
    }
    this.setState({array});
  }

  randomInterval(max,min)
  {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }


  inSort = () =>
  {
    let arr = document.getElementsByClassName("array-bar");
    let mapArr = this.state.array;
     mapArr = mapArr.sort((a,b) => a - b);
     for(let i = 0; i < arr.length; i++)
      {
        for(let j = i+1; j < arr.length; j++)
        {
         setTimeout(() => {    if(arr[j].offsetHeight < arr[i].offsetHeight)
          {
            let tmp = arr[i].offsetHeight;
            arr[i].style.height = "" + arr[j].offsetHeight + "px";
           arr[j].style.height = "" + tmp + "px";
            arr[i].style.backgroundColor = "green";
          }}, 500) 
       }
       }
    }

  bubSort = () =>
  {
      let arr = document.getElementsByClassName("array-bar");
      let len = arr.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len  - 1 ; j++) {
          setTimeout(() => {    if (arr[j].offsetHeight > arr[j + 1].offsetHeight) {
                let org = arr[j].style.backgroundColor;
                arr[j].style.backgroundColor = "red";
                arr[j+1].style.backgroundColor = "green";
                let tmp = arr[j].offsetHeight;
                arr[j].style.height =  "" + arr[j + 1].offsetHeight +"px";
                arr[j + 1].style.height = "" + tmp +"px";
                 }}, 1000);
            }
        }
    }
  

render()
{
  const {array} = this.state;
  return (
    <>
    <div className="array-container">
    {array.map((value,idx)=>{return <div className="array-bar" style={{height:`${value}px`}} key={idx}></div>})} 
    <div>
      <button onClick={this.resetArray} className="button">Random Generate</button>
      <button onClick={this.inSort} className="button">Insertion Sort</button>
      <button onClick={this.bubSort} className="button">Bub Sort</button>
    </div>
    </div>
    </>
  );
}

}

export default App;
