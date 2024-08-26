import './App.css'
import Menu from '../../assets/Menu.png'

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <p className='HeaderTitle'>GT</p>
        <img src={Menu} alt="MenuHamburguer" className="HeaderMenu"></img>
      </header>  

      <main className="main">
        <div className="Home">
          <div className="HomeName">
            <h1>&lt;Gustavo <br/> Albuquerque /&gt;</h1>
          </div>
          <div className="HomeLine">
            <div className="HomeImage"></div>
          </div>
          <div className="HomeFooter">
            <div>
              <p className="HomeTextIntroduction">Introdução</p>
              <p className="HomeTextTitle">FRONT END DEVELOPES MOBILE/WEB</p>
              <p className="HomeTextIntro">Olá, me chamo Gustavo, tenho 20 anos,sou desenvolvedor FrontEnd, me aprofundo na área dia após dia, 
              desejando melhorar cada vez mais...</p>
            </div>
            <div>  
              <button className="HomeButtonLeerMore">Leia mais</button>
            </div>
          </div>
        </div>  

        <div className="Who">
          <div className="WhoData">
            <img className="WhoImage"></img>
            <p className="WhoName">GUSTAVO DE <br/> ALBUQUERQUE LEMOS <br/> 22 ANOS</p>
          </div>
          <div className="WhoText">
              <h2 className="WhoTheme">QUEM SOU EU?</h2>
              <p className="WhoDescr">Olá, sou Gustavo de Albuquerque, desenvolvedor júnior entusiasta em UX.
                Estou atualmente me especializando no desenvolvimento mobile/web, tenho
                facilidade em adquirir conhecimento, aceitando qualquer desafio que venha pela 
                frente, sempre desenvolvendo uma forma de ultrapassá-lo.</p>
          </div>
          <div className="WhoLine">
            <div className="WhoLineHorizontalContainer">
              <div className="WhoLineHorizontal"></div>
            </div>
            <div className="WhoLineVerticalContainer">  
              <div className="WhoLineVertical"></div>
              <div className="WhoLineIvisible"></div>
            </div>
          </div>
          <div className="WhoButton">
            <button className="WhoProfButton">Profissional</button>
            <button className="WhoPessButton">Pessoal</button>
          </div>

        </div>

        <div className="WhatDo">
          <h3 className="WhatDoTitle">OQUE EU FAÇO?</h3>
          <div className="WhatDoImage"></div>
          <div className="WhatDoCarrossel"></div>
          <div className="WhatDoConhecimentosTitle"></div>
          <div className="WhatDoConhecimentosImages"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
