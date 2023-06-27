import React from 'react';


class Projeto extends React.Component {

    constructor() {
        super();
        
      }
    
  
    
    handleClick(link) {
        console.log('sss')
        window.open(link, '_blank').focus();

    }
  
  render(){
    
    return(    
    <div>
      <div  onClick={()=>this.handleClick(this.props.link)}>
      {this.props.nome}

      </div>
    </div>)

    
  }
 
}

export default Projeto;
