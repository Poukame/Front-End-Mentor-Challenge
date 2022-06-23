const dice = document.getElementById('roll');
dice.addEventListener('click', generateAdvice);

async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    const idNb = data.slip.id;
    const adviceText = data.slip.advice;
    return [idNb, adviceText];
}

function renderAdvice(id, text) {
    const quoteHTML = document.getElementById('advice-body');
    const idHTML = document.getElementById('id');
    idHTML.innerHTML = id;
    quoteHTML.innerHTML = `"${text}"`;
}

async function generateAdvice() {
    renderAdvice(...(await getAdvice()));
}
