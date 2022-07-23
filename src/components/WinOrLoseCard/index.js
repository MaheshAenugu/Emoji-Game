import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const winStatus = isWon ? 'You Won' : 'You Lose'
  const scoreStatus = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <div className="win-status">
        <h1 className="heading">{winStatus}</h1>
        <p className="best-score">{scoreStatus}</p>
        <p className="score">{score}/12</p>
        <button className="button" type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="img-container">
        <img src={imgUrl} alt="win or lose" className="image" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
