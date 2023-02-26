// This JS file is for the intro on landing page
// This is to mimic typing/coding on vs code. :)

window.addEventListener('DOMContentLoaded', ()=> {

  const target = document.getElementById("intro")
  const speed = 100
  const children = target.childNodes
  const text = []

  let delay = 0;
  children.forEach(c => {
    text.push(c.innerText)
    c.innerText = ""
  })

  for (let i = 0; i < children.length - 1; i++){
    console.log(delay)
    //for each child of the intro (multiple spans due to syntax highliting)
    //delay calculated so each span only starts after the previous
    setTimeout(() => {typewriter(children[i], text[i])}, delay)
    delay += text[i].length * speed + speed;
  }

  function typewriter(element, text){
    let i = 0;
    let timer = setInterval(()=>{
      if(i < text.length){
        element.append(text.charAt(i))
        i++
      }
      else {
        clearInterval(timer)
      }
    }, speed)
  }
})
