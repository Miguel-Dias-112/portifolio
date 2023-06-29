import React from 'react';
import "../divisões/projeto.css"
class Projeto extends React.Component {

    constructor() {
        super();
        
      }
    
  
    
    handleClick(link) {
        console.log('sss')
        window.open(link, '_blank').focus();

    }
  
  render(){
    console.log(this.props  )
    return(    
    <div className='projeto'>
      <div className='projeto_top'>
        {this.props.nome}
      </div>
      <div  className='projeto_body' onClick={()=>this.handleClick(this.props.link)}>
        {this.props.descrição}

      </div>
      <div className='projeto_bottom'>
      { this.props.tecnologias.map( (tecno) => <img src={tecno} ></img>) }

      </div>

    </div>)

    
  }
 
}

export default Projeto;
