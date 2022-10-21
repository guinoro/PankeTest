import Pancake from './components/img/panqueca.png'

function Main(){
    return(
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Pankê <img src={Pancake}/></h3>
              
            </div>
            <div className="item-menu">
              <a href="#">SAIBA MAIS</a>
            </div>
          </div>

          <div className='form'>
            <h2>Faça seu pedido!</h2>
            <form>
              <div className='items-form'>
                <input placeholder='Seu nome completo ou da sua empresa' type="text" />
                <input placeholder='Seu pedido (Pedido mínimo: 20 unidades)' type="text" />
                <input placeholder='Seu telefone: (DDD) + número' type="text" />
                <input placeholder='Seu endereço de email' type="text" />
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>  
      </div>
    )
}

export default Main;