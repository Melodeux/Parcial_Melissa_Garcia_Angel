import React from "react";


class ButttonPanel extends React.Component{

    render(){
        return(
            <div className="opciones">
                       <div className="opcion">
                             <button onClick={()=> this.props.handleClick("a")} className="botones" >A</button>
                             <h2>{this.props.data.opciones.a}</h2>
                        </div>
                       <div className="opcion">
                             <button onClick={()=> this.props.handleClick("b")} className="botones">B</button>
                             <h2>{this.props.data.opciones.b}</h2>
                        </div>
                  </div>
        )

    }

}

export default ButttonPanel