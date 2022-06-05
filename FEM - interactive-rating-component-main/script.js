/* eslint-disable indent */
let rating = '';

const ratingCircle = document.querySelectorAll('.circle-bg');
ratingCircle.forEach(el => el.addEventListener('click', select));

const submitBtn = document.getElementById('btn');
submitBtn.addEventListener('click', switchState);

function select(event) {
    ratingCircle.forEach(el => {
        el.classList.remove('selected');
    });

    const btnClicked = event.target.innerHTML;

    ratingCircle[btnClicked].classList.add('selected');

    return (rating = ratingCircle[btnClicked].innerHTML);
}

function switchState() {
    const container = document.getElementById('container');

    container.innerHTML = `

    <div class="container" id="container">
      <div class="icon-thank">
      <img src="./images/illustration-thank-you.svg" class="state2">
    </div>
      <div class="result state2">
      You selected ${rating} out of 5
      </div>

      <h2 class="state2">Thank you!</h2>
      <div class="container__instruction">
      <p class="container__instruction--paragraph state2">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
      </div>
    `;
}
