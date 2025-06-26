const video = document.getElementById("vslVideo");
const countdown = document.getElementById("countdown");
const mainNav = document.getElementById("mainNav");
let timeLeft = 20 * 60;
let offerShown = false;

video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 1214 && !offerShown) {
        document.body.classList.add("offer-visible");
        mainNav.classList.remove("d-none");
        document.getElementById("after-2014-content").style.display = "block";
        startCountdown();
        offerShown = true;
    }
});

function startCountdownById(elementId) {
    let timeLeft = 20 * 60;
    const el = document.getElementById(elementId);
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            el.textContent = "00:00";
        } else {
            timeLeft--;
            const min = Math.floor(timeLeft / 60).toString().padStart(2, '0');
            const sec = (timeLeft % 60).toString().padStart(2, '0');
            el.textContent = `${min}:${sec}`;
        }
    }, 1000);
}


window.addEventListener("DOMContentLoaded", () => {
    startCountdownById("countdown2");
    startCountdownById("countdown3");
    startCountdownById("countdown4");
});





function startCountdown() {
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            countdown.textContent = "00:00";
        } else {
            timeLeft--;
            const min = Math.floor(timeLeft / 60).toString().padStart(2, '0');
            const sec = (timeLeft % 60).toString().padStart(2, '0');
            countdown.textContent = `${min}:${sec}`;
        }
    }, 1000);
}


// botões de compra
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const potes = e.target.getAttribute('data-potes');
        const preco = e.target.getAttribute('data-preco');
        localStorage.setItem('potes', potes);
        localStorage.setItem('preco', preco);
        new bootstrap.Modal(document.getElementById('buyModal')).show();
    });
});

//localstorage dados

document.getElementById('finalizarCompra').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    window.location.href = "obrigado.html";
});


//backtop


window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});


document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});