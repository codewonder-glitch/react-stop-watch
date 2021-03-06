import React from 'react';
import './Stopwatch.css';

class Stopwatch extends React.Component{
constructor(props){
    super(props);
    this.state={timer:0,start:false};
    this.start = this.start.bind(this);
    this.reset=this.reset.bind(this);
    this.pause=this.pause.bind(this);
}

start(){
    if(!this.state.start)
    {
    this.setState({ start: true});
    this.toreset=setInterval(()=>{
    this.setState({ timer: this.state.timer + 1 })},1000);
    }
   
}

reset(){
    this.setState({ start:false,timer: 0});
    clearInterval(this.toreset);
}       
        
pause(){
    //this.setState({ timer: 0});
    if(this.state.start===true)
    {
    clearInterval(this.toreset); 
    this.setState({ start: false});
    } else{
        if(this.state.timer!==0)
        {
            this.start();
        }
    }
}


render() {
    
    return (
    <div>
        <h1 >{this.state.timer}</h1>  
        <button onClick={this.start} >
        Start
        </button>
        <button onClick={this.pause}  >
        Pause
        </button>
        <button onClick={this.reset} >
        Reset
        </button >
    </div>
      
    );
  }


}
export default Stopwatch;
