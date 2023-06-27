import React from 'react';


class Habilidades extends React.Component {

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
  render(){
    return(    <div>
      {this.props.nome}
  </div>)

    
  }
 
}

export default Habilidades;
