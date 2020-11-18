
let counter = 0
let likes = 0
let interval = setInterval(increment, 1000)

function increment() {
    likes = 0
    counter++
    document.querySelector('#counter').textContent = counter
}

increment()

const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")

minus.addEventListener("click", function(){
    counter--
})

plus.addEventListener("click", function(){
    counter++
})


document.getElementById("heart").addEventListener("click", function(){
    likes++;
    const li = document.createElement("li");
    let node = document.createTextNode(counter + " has been liked " + likes + " time(s).")
    const ul = document.querySelector('.likes')
    const lastLike = document.querySelector('.likes').lastChild
    li.appendChild(node);
    if(likes>1){
     lastLike.replaceWith(li)
    } else {
      ul.appendChild(li);
    }
  });

 const pause = document.querySelector("#pause")
 pause.addEventListener("click", function(){
    if (pause.innerText == "pause"){
        clearInterval(interval)
        pause.innerText = "resume"
        minus.disabled = true
        plus.disabled = true
        document.querySelector("#heart").disabled = true
        document.querySelector("#submit").disabled = true
    } else {
        interval = setInterval(increment, 1000)
        pause.innerText = "pause"
        minus.disabled = false
        plus.disabled = false
        document.querySelector("#heart").disabled = false
        document.querySelector("#submit").disabled = false
    }
  })

  const form = document.querySelector("#comment-form")
  form.addEventListener("submit", function(event){
      event.preventDefault()
      const list = document.querySelector("#list")
      list.textContent = event.target.comment.value
      event.target.reset()
  })