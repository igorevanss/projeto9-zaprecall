import play from '../assets/img/seta_play.png'

const questions = [
  { N: '1', Q: 'O que é JSX?', R: 'Uma extensão de linguagem do JavaScript' },
  {
    N: '2',
    Q: 'O React é __',
    R: 'uma biblioteca JavaScript para construção de interfaces'
  },
  { N: '3', Q: 'Componentes devem iniciar com __', R: 'letra maiúscula' },
  { N: '4', Q: 'Podemos colocar __ dentro do JSX', R: 'expressões' },
  {
    N: '5',
    Q: 'O ReactDOM nos ajuda __',
    R: 'interagindo com a DOM para colocar componentes React na mesma'
  },
  {
    N: '6',
    Q: 'Usamos o npm para __',
    R: 'gerenciar os pacotes necessários e suas dependências'
  },
  {
    N: '7',
    Q: 'Usamos props para __',
    R: 'passar diferentes informações para componentes'
  },
  {
    N: '8',
    Q: 'Usamos estado (state) para __',
    R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
  }
]

export default function FlashCards(params) {
  return (
    <>
      {questions.map((q, index) => (
        <div className="pergunta-fechada" key={index}>
          <p>Pergunta {q.N}</p>
          <img onClick={""} src={play} alt="Play" />
        </div>
      ))}
    </>
  )
}
