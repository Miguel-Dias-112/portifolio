import React from 'react';
import '../divisões/certificações.css'

class Certificação extends React.Component {

    constructor() {
        super();
        this.state = {
            projetos:[]
        };
      }
    
    projetos_factory(nome,descrição,link){
        let projeto = {
            nome: nome,
            descrição:descrição,
            link:link}
        return projeto
        
    }
      
    handleClick(link) {
        console.log('sss')
        window.open(link, '_blank').focus();

    }
  render(){
    return(    
    <div className='certificação'  onClick={()=>this.handleClick(this.props.link)}>
      {this.props.nome+" ➚"}
      
    </div>
  )

    
  }
 
}

export default Certificação;
