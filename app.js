document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'frog',
      img: 'images/Frog.png'
    },
    {
      name: 'goat',
      img: 'images/Goat.png'
    },
    {
      name: 'jellyfish',
      img: 'images/Jellyfish.png'
    },
    {
      name: 'cat',
      img: 'images/Cat.png'
    },
    {
      name: 'squirrel',
      img: 'images/Squirrel.png'
    },
    {
      name: 'lion',
      img: 'images/Lion.png'
    },
    {
      name: 'fox',
      img: 'images/Fox.png'
    },
    {
      name: 'parrot',
      img: 'images/Parrot.png'
    },
    {
      name: 'frog',
      img: 'images/Frog.png'
    },
    {
      name: 'goat',
      img: 'images/Goat.png'
    },
    {
      name: 'jellyfish',
      img: 'images/Jellyfish.png'
    },
    {
      name: 'cat',
      img: 'images/Cat.png'
    },
    {
      name: 'squirrel',
      img: 'images/Squirrel.png'
    },
    {
      name: 'lion',
      img: 'images/Lion.png'
    },
    {
      name: 'fox',
      img: 'images/Fox.png'
    },
    {
      name: 'parrot',
      img: 'images/Parrot.png'
    }
  ]
  //cards will be placed in random order
  cardArray.sort(() => 0.5 - Math.random())

  //Intializing the variables
  let audio = new Audio();
  //audio.src = "music/lost.mp3"
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const message = document.querySelector("#message");
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('width', '120px');
      card.setAttribute('src', 'images/questionmark.png')
      card.setAttribute('data-id', i)
      card.style.border = '5px solid white'
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] == cardsChosen[1]) {
      audio.src = 'music/foundMatch.mp3'
      audio.play()
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } 
    else {
      cards[optionOneId].setAttribute('src', 'images/questionmark.png')
      cards[optionTwoId].setAttribute('src', 'images/questionmark.png')
      audio.src = 'music/lost.mp3'
      audio.play()
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if  (cardsWon.length === cardArray.length/2) {
      audio.src = 'music/winning.mp3'
      audio.play()
      message.textContent = 'Congratulations! You found them all!'
    }
  }
 
  createBoard()
})
