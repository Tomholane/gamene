var rungame = () =>
{
    var Words = ["Rock","Paper","Scissors"]
    return (Words[Math.floor(Math.random() * 3)])
}
var resultgame = document.getElementById('result')

var mychoice = document.querySelectorAll('.rpsButton')

var reset =document.getElementById('endGameButton')
var score = document.getElementById('player-score')
var select = document.getElementById('Selected')

var winscore = 0
reset.onclick = () =>
{
    score.innerText = ''
    resultgame.innerText= ''
    select.innerText =''
    winscore = 0
}
mychoice.forEach(choice =>
{
   choice.onclick =() =>
   {
    var computerchoice = rungame()
      select.innerText = `👱"${choice.value}"ㅤvsㅤ🤖 "${computerchoice}"`
      if(choice.value == computerchoice)
      {
         resultgame.innerText ='Draw 😶'
      }
      else
      {
           if(choice.value == "Rock" && computerchoice == "Scissors")
           {
            resultgame.innerText = 'You Won 🤩'
            if(winscore < 0)
            {
               winscore = 0
            }
            winscore++
            score.innerText = `Winning Streak : ${winscore}`
           }
           else if(choice.value == "Paper" && computerchoice == "Rock")
           {
             resultgame.innerText = 'You Won 🤩'
             if(winscore < 0)
             {
                winscore = 0
             }
             winscore++
             score.innerText = `Winning Streak : ${winscore}`
           }
           else if(choice.value == "Scissors" && computerchoice == "Paper")
           {
             resultgame.innerText = 'You Won 🤩'
             if(winscore < 0)
             {
                winscore = 0
             }
             winscore++
             score.innerText = `Winning Streak: ${winscore}`
           }
           else
           {
              resultgame.innerText ='You Lose 😢'
              winscore--
              score.innerText = `Winning Streak : ${winscore}`
              if(winscore < 0)
              {
                score.innerText = `Losing Streak : ${winscore}`
              }
           }
      }
   }

})