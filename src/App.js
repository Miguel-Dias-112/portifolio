import './App.css';
import React from 'react';
import Projeto from './Componentes/Projeto';
import Certificação from './Componentes/Certificações';
import Habilidades from './Componentes/Habilidades';


import './divisões/projetos.css';
import './divisões/certifacados.css';
import './divisões/certificações.css';

class App extends React.Component {
  
    constructor() {
        super();
        this.state = {
            projetos:[],
            certificações:[],
            habilidades:[]

        };
      }
    goto(link){
        var a = document.createElement('a')
        a.href=link
        a.target="_blank"
        a.click()
    }
    desce_tela(){
        window.addEventListener('scroll', function() {
            var header = document.getElementById('header');
            var headings = document.querySelectorAll('h1#a, h1#b, h1#c');
            
            var currentHeading = null;
  
            for (var i = 0; i < headings.length; i++) {
              var rect = headings[i].getBoundingClientRect();
              
              if (rect.top <= 0) {
                currentHeading = headings[i];
              }
            }
            
            if (currentHeading) {
              header.textContent = currentHeading.textContent;
            } else {
              header.textContent = 'Miguel Dias de Abreu';
            }
          });
    }
    projetos_factory(nome,descrição,link,tecnologias){
        let projeto = {
            nome: nome,
            descrição:descrição,
            link:link,
            tecnologias:tecnologias}
        return projeto
        
    }
    certificações_factory(nome,descrição,link){
        let certificação = {
            nome: nome,
            descrição:descrição,
            link:link}
        return certificação
    }
    habilidade_factory(nome,descrição,link){
        let habilidade = {
            nome: nome,
            descrição:descrição,
            link:link}
        return habilidade
        
    }
    Scrollto(id) {
        const element = document.getElementById(id);
        let offset = 0;
        
        if (id === "a") {
          offset = 10;
        }
        
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offsetTop: offset });
    }
    componentDidMount(){
        this.desce_tela()
        let t={
            Js:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            React:'https://gitlab.com/uploads/-/system/project/avatar/31182514/logo-react-icon.png',
            Firebase:'https://www.gstatic.com/devrel-devsite/prod/vca930ea4481fa25f3cdb030ae8a063116e499d7117ac90e4ee9a28c6c1a44870/firebase/images/touchicon-180.png',
            Electron:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUlH8MWdOtI4pwmwqfb9YIc95y0btX68iwl5p_vK7HA&s',
            Kotlin:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png',
            Mysql:'https://w7.pngwing.com/pngs/840/355/png-transparent-mysql-workbench-database-management-system-mariadb-database-miscellaneous-blue-marine-mammal.png',
            Chatgptapi:'https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/chatgpt-icon.png',
            Retrofit:'https://api.nuget.org/v3-flatcontainer/square.retrofit2/2.7.2/icon',
        }

        let _projetos=[
            this.projetos_factory("mindmap web","website(spa), feito em react para criação e manipulação de mapas mentais","https://github.com/Miguel-Dias-112/mindmap",[t['React'],t['Js']]),
            this.projetos_factory("notas desktop","App desktop windows, feito em react para notas adesivas na lateral da tela do usuario","https://github.com/Miguel-Dias-112/Notes-Desktop",[t['Js'],t['Firebase'],t['React'],t['Electron']]),
            this.projetos_factory("notas mobile","App mobile kotlin, para criação e manipulação de notas offline via mysql com room","https://github.com/Miguel-Dias-112/Notas-Mobile",[t['Kotlin'],t['Mysql']]),
            this.projetos_factory("penknife","App mobile kotlin, voltado pra produtividade, conta com lembretes agendados, pomodoro, integração com chatgpt entre outra features","https://github.com/Miguel-Dias-112/Penknife",[t['Kotlin'],t['Mysql'],t['Firebase'],t['Chatgptapi'],t['Retrofit']]),
            this.projetos_factory("swot analisys","website, para criação e plotagem de analises swots, consumindo api de dodoautenticação e store do firebase","https://github.com/Miguel-Dias-112/Swot",[t['Js'],t['React'],t['Firebase']]),
            this.projetos_factory("Portifolio","codigo fonte deste portifolio, feito com react","https://github.com/Miguel-Dias-112/Portifolio",[t['Js'],t['React']]),


        ]
        let _certificações=[
            this.projetos_factory("html e css","teste","https://cursos.alura.com.br/degree/certificate/b0654229-2bdd-4c28-b8c5-04f8707d3411?lang=pt_BR"),
            this.projetos_factory("java script com foco em backend","teste","https://cursos.alura.com.br/degree/certificate/fd4e7536-d682-48b9-8fe2-e4dc407e1e65?lang=pt_BR"),
            this.projetos_factory("linguagem kotlin","teste","https://cursos.alura.com.br/degree/certificate/d727e6d9-e656-451f-8505-0537225326b4?lang=pt_BR"),
            this.projetos_factory("desenvolvimento android, kotlin","teste","https://cursos.alura.com.br/degree/certificate/f2c55e6f-7d11-4879-8ba8-cf4e7b273e33?lang=pt_BR"),
            this.projetos_factory("Lista completa de cursos Alura","teste","https://cursos.alura.com.br/user/migueldias465/fullCertificate/fcb8c018c32e2e0c22588baea847a370")

        ]
        let _habilidaes=[
            this.projetos_factory("kotlin","teste"),
            this.projetos_factory("Mockito","teste","teste"),
            this.projetos_factory("Espresso","teste","teste"),
            this.projetos_factory("Retrofit","teste","teste"),
            this.projetos_factory("Room","teste","teste"),
            this.projetos_factory("Corountines","teste","teste"),
            this.projetos_factory("Firebase","teste","teste"),
            this.projetos_factory("Gradle","teste","teste"),
            this.projetos_factory("JavaScript","teste","teste"),
            this.projetos_factory("JavaScript backend","teste","teste"),
            this.projetos_factory("Css Responsivo","teste","teste"),
            this.projetos_factory("React","teste","teste"),
            this.projetos_factory("Consumo de apis","teste","teste"),
            this.projetos_factory("Lista completa de cursos Alura","teste","teste"),

        ]
        this.setState({projetos:_projetos})
        this.setState({certificações:_certificações})
        //this.setState({habilidades:_habilidaes})


    }
  render(){
    return (
      <div className="App">
        <header id='header'  onClick={()=>{console.log("teste")}}>
           Miguel Dias de Abreu
        </header>
        <div className='SobreMim'>
        <div className='Perfil'>
                <div  className='nome'>
                Desenvolvedor Front-end e Mobile
                </div>
            </div>
            <div className='Categorias'>
                    <h1 onClick={()=>{this.Scrollto("a") }}> Projetos</h1>
                    <h1 onClick={()=>{this.Scrollto("b")}}> Certificados</h1>
                    <h1 onClick={()=>{this.Scrollto("c")}}> Contatos</h1>
            </div>
            
        </div>
        <div className='projetos' >
            <h1 id='a'>
                projetos
            </h1>
            <div className='projetos_container'>
                { this.state.projetos.map( (projeto) => <Projeto link={projeto.link} descrição={projeto.descrição}nome={projeto.nome} tecnologias={projeto.tecnologias}></Projeto>) }
            </div>
            <h1 id='b'>
                certificações
            </h1>
            <div className='certificações_container'>
                { this.state.certificações.map( (certificação) => <Certificação link={certificação.link} nome={certificação.nome}></Certificação>) }
            </div>
            
            <div className='projetos_container'>
                 { this.state.habilidades.map( (habilidade) => <Habilidades nome={habilidade.nome}></Habilidades>) }
   
            </div>
        </div>
        <div id="c" className='contatos'>
            <div>
                <div onClick={()=>{this.goto("https://github.com/Miguel-Dias-112/")}}>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                </div>
                
                <div onClick={()=>{this.goto("https://www.linkedin.com/in/miguel-dias-de-abreu-4a0655262/")}}>
                <img src='https://static.vecteezy.com/system/resources/previews/018/930/584/original/linkedin-logo-linkedin-icon-transparent-free-png.png'></img>
                </div>
                <div onClick={()=>{this.goto("mailto:migueldias465@gmail.com")}}>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACpCAMAAACrt4DfAAABC1BMVEX////rRDVVfb8yqVPGJSf7vBLi8uZHdLsZpETn7PVNeL2oudub0KclpkrWMy38vxDqPTb0jCX7uADqMx+tvt7DAADqPSz++fn+9d724OH62tjvbmRPgMT1q6bpKhDEEhXXdnfFHyHsT0Hwe3LsSjv1qaRgdrJJq03uamDznpj5z8z98fDqLxruxsblrK3gmpv++vD+6r/936X93JXTZmfx0dL+78/8yln80G7LPj/7wCfMQ0X7wzfci4v814T/+ev706fUHBLzggDw5OhTbK69LTbruhg3pT6jSGXAtSx/Y5KEr0C4M0GeTGzguR+1tzCriqilqXWr2LZjh8REr2GVq9WExpTI0+jK5tEuwdVrAAAD7klEQVR4nO3caVfaQACF4YzBglZaG0xQBCMqVQH33a7a1i52t63+/1/SLCxJZgIDGQnO3OdrOXOm7+G2VWI1DQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgvDS2tne2txoij9zd2z/Y39sVeeQYODo0Tdu2TfPwSNSRxyeG7+RY1JHjYNmsZnxVc7ko5MhTw5j0GcapkBPHQfHMznTZZwvJj5w/b4fyYr2UZYUvqpmgqrmd9MT9YCivlYh7pu+VnYlIOsLTSCmn1WtBl01Vw4yWckdYGv7A8Pjard6Iu3Fqdqg3VbIRvmWEclIdiLxzSs6qjFSZzMXqUCMsrl4+ZaWaPBd979ErMvbnemKtDDHC0or1jJ3KePh/CS7EpSKkUBn0sEqBzMalmr+P249Uj1SkMNgIi6sFomoqMtAInfERdVMNMkJnfETpVLwj9ManeCpirXGMsLRmEaQipNl3hJVm58Vqp+o3ws74kMoZIekxwhKxCFIFRliLO6DWDL1Q4lTvTPbXgJFUpLDIHGFxsUBUSTX1/gPrWwtUKvYIw+OLT2VcfXw0+t+bYFPZ8qcLnlSELFEjrC1RL2KmMj7rORlSTZS/2PQIGamiI6TGF5fKuNYlSTVRfk6PkJWKWFZghCUrOj52KuNqXZcmlROLGiEzVXCEjPExUznj02VKRY8wJlV7hMzxMVNd65Klckb41eZJ5Y+QPT46lT8+yVI5sb5d8KRyRlipsMdHpWqNT7pUzgirVZ5UJPYtFU11rUuaKjTCXql66aYyvq/r0qZyR2iLSmX80HWZU3VHmDCVERyfnKk6I0yWKjw+SVO1R5goVWR80qbyR5ggFTU+eVN5I0yQihqfxKm8f44Om+qSHp/UqSbKP6lv2nGxZn/lFUs1PdfYiPmCuJfCRmNGuVSPNW2z2b9NWHNT05RMpdUHG6FF6pqqqbRG3HelmONb9H6WQtFUg4zQHZ9L2VS8I/TH51I3Fd8IW+NzKZyKZ4Tt8bmUTtVvhN3xudRO1XuEgfG5FE9FPe8SHF/k43nlUzEe5GiNL/rQB1KxPyRlPEqEVBrro3f62Rik8kU+Uw497NGBVJ7QCGOe40Oqlu4IWeNzIVVba4Ts8bmQqsMbYcz4XEgVUFuKG58LqYLq9R6/iFTckIobUnFDKm5IxQ2puCEVN6TihlTckIobUnFDKm7yptJGlUrknVNyM5pUf0TeOSVzzLeV6FS53yLvnJab6ftPlZfhTeX8wT7BaCU2VV5/+P99nO9vNjsdkR0+VS4fkcv9E3nbdBVv56Juhz3rbibqTuRVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS+w8m1YUxD6UrKgAAAABJRU5ErkJggg=='></img>
                </div>
            </div>
            
        </div>
        
      </div>
    );
  }
 
}

export default App;
