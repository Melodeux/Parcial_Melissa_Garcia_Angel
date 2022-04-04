import React , {Component} from 'react';
import data from "./data.json";
import ButtonPanel from "./ButtonPanel";
import History from './History';

class Container extends Component {
  constructor(props){
    super(props)
    this.state={
      data:data[0],
      contador:1,
      historial:[],
      seleccionPrevia:"",
      dataLength:data.length+1,
    }
    this.handleClick=this.handleClick.bind(this)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador && this.state.contador<this.state.dataLength/2) {
      this.state.historial.push(this.state.seleccionPrevia);
    }
  }
  
  handleClick(takeLetter){
        let arrayHistorial= this.state.historial;
        if(this.state.contador==this.state.dataLength/2 ){
          alert("Fin")
        }
       if(takeLetter==="a" && this.state.contador<this.state.dataLength/2 ){
              this.setState({
                    data:data[this.state.contador*2-1],
                    contador: this.state.contador+1,
                    historial: arrayHistorial,
                    seleccionPrevia:"A"
               })
        }
        if(takeLetter==="b" && this.state.contador<this.state.dataLength/2 ){
              this.setState({
                    data:data[this.state.contador*2],
                    contador: this.state.contador+1,
                    historial: arrayHistorial,
                    seleccionPrevia: "B"
              })
        }
        
    }

  render(){
     return (
      
        <div className='layout'>
                  <h1 className="historia">{this.state.data.historia}</h1>
                  <ButtonPanel data={this.state.data} handleClick={this.handleClick}/>
                  <History seleccionPrevia={this.state.seleccionPrevia} historial={this.state.historial}/>
    
        </div>
     
       )}
 
}

export default Container;
