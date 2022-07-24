const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

/////////////////////////////////// QUESTIONS --------- PERGUNTAS!!! ////////////////////////////////

let questions = [
  {
    question: 'Quem deu o chapéu de palha pro Luffy?',
    answers: [
      { text: 'Shanks', correct: true },
      { text: 'Usopp', correct: false },
      { text: 'Barba Branca', correct: false },
      { text: 'Marco', correct: false },
    ]
  },
  {
    question: 'Qual o golpe mais famoso do Goku?',
    answers: [
      { text: 'Bola de fogo', correct: false },
      { text: 'Hadouken', correct: false },
      { text: 'Kamehameha', correct: true },
      { text: 'Voadora Sub-Zero', correct: false },
    ]
  },
  {
    question: 'Quantas caudas tem a raposa do Naruto?',
    answers: [
      { text: '4', correct: false },
      { text: '8', correct: false },
      { text: '17', correct: false },
      { text: '9', correct: true },
    ]
  },
  {
    question: 'Qual android casa com Kuririn?',
    answers: [
      { text: '16', correct: false },
      { text: '18', correct: true },
      { text: '69', correct: false },
      { text: '48', correct: false },
    ]
  },
  {
    question: ' Qual a principal frase do Sheldon, do The Big Bang Theory?',
    answers: [
      { text: 'Hora de morfar!', correct: false },
      { text: 'Bazinga.', correct: true },
      { text: 'Rou Doido!', correct: false },
      { text: 'Alohomora', correct: false },
    ]
  },
  {
    question: ' Armadilha! Vire uma dose!',
    answers: [
      { text: 'BORA!!!', correct: true },
    ]
  },
  {  
    question: ' Em guia do Mochileiro das Galáxias, qual a resposta para a vida e o universo e tudo mais?',
    answers: [
      { text: '785,44', correct: false },
      { text: 'Amor.', correct: false },
      { text: 'Amizade!', correct: false },
      { text: '42', correct: true },
    ]
  },
  {  
    question: ' Quais as cores de sabre de luz existentes até o momento em Star-Wars?(2022)',
    answers: [
      { text: 'Vermelho, Azul, Roxo e Verde', correct: true },
      { text: 'Laranja, azul, preto, vermelho e roxo', correct: false },
      { text: 'Preto, Branco e Ômega(Roxo+vermelho+laranja)', correct: false },
      { text: 'Rosa e Arco-íris', correct: false },
    ]
  },
  {  
    question: 'DESAFIO! Fale com quem vocÊ NÃO ficaria entre vocẽs.',
    answers: [
      { text: 'Próxima!', correct: true },
      { text: 'Não quero responder', correct: true },
    ]
  },
  {  
    question: 'Quem é o mais provável de dar PT hoje?',
    answers: [
      { text: 'Aperte aqui quando escolher, o escolhido BEBE!', correct: true },
    ]
  },
  {  
    question: 'Quem tem mais chance de ser preso BEBE!',
    answers: [
      { text: 'PRONTO BEBI!', correct: true },
    ]
  },
  {  
    question: 'Qual a cor da Meta-anfetamina de Heisenberg em Breaking Bad?',
    answers: [
      { text: 'Verde', correct: false },
      { text: 'Azul', correct: true },
      { text: 'Da cor do amor', correct: false },
      { text: 'Branca', correct: false },
    ]
  },
  {  
    question: 'Qual o nome do Dragão de O Hobbit?',
    answers: [
      { text: 'Madruga O Senhor', correct: false },
      { text: 'Smaug', correct: true },
      { text: 'Phíton', correct: false },
      { text: 'Dromngar', correct: false },
    ]
  },
  {  
    question: 'Qual desses não é orfão?',
    answers: [
      { text: 'Super Homem', correct: false },
      { text: 'Batman', correct: false },
      { text: 'Homem Aranha', correct: false },
      { text: 'Super Choque', correct: true },
    ]
  },
  {  
    question: 'DESAFIO! Deixa que outra pessoa vire uma dose na sua boca!',
    answers: [
      { text: 'PRONTO!', correct: true },
    ]
  },
  {  
    question: 'Responda ou BEBA!!! Qual é a mania mais nojenta que você tem?',
    answers: [
      { text: 'PRONTO!', correct: true },
    ]
  },
  {  
    question: 'Escolham o mais gostoso/gostosa entre vocês, eles bebem!',
    answers: [
      { text: 'Feito!', correct: true },
    ]
  },
  {  
    question: 'Responda ou BEBA! Se tivesse que beijar um dos jogadores, quem seria?',
    answers: [
      { text: 'Eu gosto é da BAGUNÇA!!!', correct: true },
    ]
  },
  {  
    question: 'Responda ou BEBA! Se pudesse mudar de vida com alguém famoso por um dia, com quem seria?',
    answers: [
      { text: 'EU SOU RYCAH!', correct: true },
    ]
  },
  {  
    question: 'Responda ou BEBA! O que você faria se fosse do sexo oposto durante 1 dia?',
    answers: [
      { text: 'BORA PROXIMO!', correct: true },
    ]
  },
  {  
    question: 'Responda ou BEBA! De todos jogando, com quem você quer mais ficar?',
    answers: [
      { text: 'BORA PROXIMO!', correct: true },
    ]
  },
  {  
    question: 'Se enviou nudes hoje, BEBA!',
    answers: [
      { text: 'EU SOU DA IGREJA!', correct: true },
    ]
  },
  {  
    question: 'Responda ou Beba! Qual é a sua técnica de conquista que mais funciona?',
    answers: [
      { text: 'Feita', correct: true },
    ]
  },
  {  
    question: 'DESAFIO! Coloque um cubo de gelo nas calças.',
    answers: [
      { text: 'GELADO! Vai pra próxima.', correct: true },
    ]
  },
  {  
    question: 'BEBAM ÁGUA MEU POVO! EU ESPERO...',
    answers: [
      { text: 'JÁ BEBERAM? BORA VOLTAR!', correct: true },
    ]
  },
  {  
    question: 'Responda ou Beba! Diga um defeito de cada um dos participantes do jogo.',
    answers: [
      { text: 'ESTOU SENTINDO UMA TETA...TRETA!', correct: true },
    ]
  },
  {  
    question: 'Desafio! Responda ou Beba! Troque uma peça de roupa sua com uma pessoa da roda.',
    answers: [
      { text: 'Moda né? PROXIMO!', correct: true },
    ]
  },
  {  
    question: 'Desafio! Responda ou Beba! Troque uma peça de roupa sua com uma pessoa da roda.',
    answers: [
      { text: 'Moda né? PROXIMO!', correct: true },
    ]
  },
  {  
    question: 'Qual destas séries não é sobre um serial killer?',
    answers: [
      { text: 'Brooklyn 99', correct: false },
      { text: 'F.R.I.E.N.D.S.', correct: false },
      { text: 'Good Doctor', correct: false },
      { text: 'Hannibal', correct: true },
    ]
  },
  {  
    question: 'Quem fica com Ted, no último episódio de How I Met your Mother?',
    answers: [
      { text: 'Robin', correct: false },
      { text: 'Victoria.', correct: false },
      { text: 'Lily', correct: false },
      { text: 'Tracy', correct: true },
    ]
  },
  {  
    question: 'Em Lost, o que significa a tatuagem de Charlie?',
    answers: [
      { text: 'Nada', correct: false },
      { text: 'Mapa do tesouro.', correct: false },
      { text: 'Uma música', correct: false },
      { text: 'Família', correct: true },
    ]
  },
  {  
    question: 'Em Lost, o que significa a tatuagem de Charlie?',
    answers: [
      { text: 'Nada', correct: false },
      { text: 'Mapa do tesouro.', correct: false },
      { text: 'Uma música', correct: false },
      { text: 'Familia', correct: true },
    ]
  },
]
let questionsInRandomOrder = questions.shuffled()