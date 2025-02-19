 const colors = ['Red','Blue', 'Yellow', 'Purple', 'Green', 'black', 'white'] // cosntante criando as cores
 const btn = document.getElementById('btn') //fazendo com que o change color se torne um botao funcional 
 const color = document.querySelector ('.color') // fazendo com que o nome das cores aparecça em your color 

 btn.addEventListener('click', function() { // função para o botao funcionar da forma correta
     const RandomColor = getRandomColor() // random feita para as cores da minha array ser selecionada
     document.body.style.background = colors [RandomColor] 
    console.log(RandomColor) // apenas um print das posiçoes da minha array
    color.textContent = colors[RandomColor] //aparecendo o nome do texto das colors
 })

 function getRandomColor () { // funçã para apenas escolher os numeros que estiverem dentro da minha array 
    return Math.floor (Math.random() * colors.length)
 }

 