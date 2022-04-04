import React from "react";


class History extends React.Component{

    render(){
        return(
            <div className="recordatorio">
            <h3>Seleccion anterior {this.props.seleccionPrevia} </h3>
            <br />
            <h4>Historial de opciones elegidas </h4>
                <ul>
                  {
                    this.props.historial.length>0 
                    ?                            
                      this.props.historial.map((element,index)=><li key={"selectionPrev"+index}>{element}</li>)
                     : ""
                  }
                </ul>
          </div>
        )

    }

}

export default History