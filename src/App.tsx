import './App.css'

export default ()=> {

  const imageUrl = 'https://www.google.com.br/logos/google.jpg';
  
  return(
    <div className='app'>
      <div className='fundo'>

        <img src={imageUrl} alt="" className='img1' />
        <div className="google-pesquisa">
          <p>Pesquisar</p>
        </div>
      </div>
    </div>
  )
}