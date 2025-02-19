 const colors = ['Red','Blue', 'Yellow', 'Purple', 'Green', 'black', 'white']
 const btn = document.getElementById('btn')
 const color = document.querySelector ('.color')

 btn.addEventListener('click', function() {
     const RandomColor = getRandomColor()
     document.body.style.background = colors [RandomColor]
    console.log(RandomColor)
    color.textContent = colors[RandomColor]
 })

 function getRandomColor () {
    return Math.floor (Math.random() * colors.length)
 }

 