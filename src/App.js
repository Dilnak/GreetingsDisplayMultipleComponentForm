import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: ''
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
     var today=new Date()
     var curHr=today.getHours()
     if(curHr<12){
       this.setState({data:"GoodMorning" })
     }
     else if(curHr<18){
       this.setState({data:"GoodAfterNoon "})
     }
     else{
       this.setState({data:"GoodEvening "})
     }
      
   }
   render() {
      return (
         <div>
           
            <Content myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content>
               
         </div>
      );
   }
}
class Content extends React.Component {
  constructor(){
    super()
    this.state={
      name:""
    }
    this.getName=this.getName.bind(this)
  }
  getName(e){
    this.setState({
      name:e.target.value
    })
  }
   render() {
      return (
         <div>
           <form>
             <label>Name
             </label>
             <input type="text"  value={this.state.name}onChange={this.getName}></input>
           </form>
            <button onClick = {this.props.updateStateProp}>CLICK</button>
            <h3>{this.props.myDataProp}{this.state.name}</h3>
            
         </div>
      );
   }
}
export default App;