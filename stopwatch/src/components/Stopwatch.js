import React from 'react';


class Stopwatch extends React.Component{
constructor(props){

    super(props);
    this.state={timer:0};
    this.incrementcount = this.incrementcount.bind(this);
    this.reset=this.reset.bind(this);
    this.pause=this.pause.bind(this);
}

incrementcount(){

    this.toreset=setInterval(()=>{

    this.setState({ timer: this.state.timer + 1 })
},1000);
    

   
}

reset(){
    this.setState({ timer: 0});
    clearInterval(this.toreset);
 
}
        
        


pause(){
    //this.setState({ timer: 0});
    clearInterval(this.toreset);     
}


render() {
    
    return (
       <div>
         <h1 >{this.state.timer}</h1>  
      <button onClick={this.incrementcount} >
     Start
      </button>
      <button onClick={this.pause}  >
     pause
      </button>
      <button onClick={this.reset} >
     Reset
      </button >
      </div>
      
    );
  }


}
export default Stopwatch;
