
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
var likeButtons = document.querySelectorAll('.like')

for (const btn of likeButtons) {
  btn.addEventListener("click", like);
}

function like(event){
  // hide the error modal
  document.querySelector('#modal').classList.add('hidden');

  mimicServerCall()
    .then(() => {
      // Get the clicked btn
      var btn = event.target;

      if(btn.innerText == EMPTY_HEART){
        btn.innerText = FULL_HEART;
      }else{
        btn.innerText = EMPTY_HEART;
      }
    })
    .catch((error) => {
      // Set the error message
      document.querySelector('#modal-message').innerText = error;

      // Show the error modal
      document.querySelector('#modal').classList.remove('hidden');
    })
}