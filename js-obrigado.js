const nome = localStorage.getItem('nome');
const email = localStorage.getItem('email');
const telefone = localStorage.getItem('telefone');
const potes = localStorage.getItem('potes');
const preco = localStorage.getItem('preco');

document.getElementById('tituloObrigado').textContent = `Thank You ${nome} & Congratulations!`;
document.getElementById('infoProduto').textContent = `${potes} potes por ${preco}`;
document.getElementById('nome').textContent = nome;
document.getElementById('email').textContent = email;
document.getElementById('telefone').textContent = telefone;

const imgProduto = document.getElementById('imgProduto');
const bonusImg = document.getElementById('bonusImg');
const bonusTexto = document.getElementById('bonusTexto');
const bonusQuantidade = document.getElementById('bonusQuantidade');
const bonusPdf = document.getElementById('bonusPdf');

bonusQuantidade.textContent = potes;

switch (potes) {
    case '6':
        imgProduto.src = 'assets/6-bottle.jpg';
        imgProduto.alt = '6 Potes KetoBurn Max';
        bonusImg.src = 'assets/bonus1.png';
        bonusPdf.href = 'assets/bonus-6potes.pdf'; // PDF exclusivo para 6 potes
        bonusTexto.innerHTML = 'Parabéns! Você comprou <strong>6 potes</strong> e ganhou o <strong>Ebook Premium Keto</strong> como bônus exclusivo!';
        break;
    case '3':
        imgProduto.src = 'assets/3-botlledesk.jpg';
        imgProduto.alt = '3 Potes KetoBurn Max';
        bonusImg.src = 'assets/bonus2.png';
        bonusPdf.href = 'assets/bonus-3potes.pdf'; // PDF exclusivo para 3 potes
        bonusTexto.innerHTML = 'Parabéns! Você comprou <strong>3 potes</strong> e ganhou o <strong>Guia Intermediário de Keto</strong> como bônus!';
        break;
    case '2':
        imgProduto.src = 'assets/2-bottle.jpg';
        imgProduto.alt = '2 Potes KetoBurn Max';
        bonusImg.src = 'assets/bonus3.png';
        bonusPdf.href = 'assets/bonus-2potes.pdf'; // PDF exclusivo para 2 potes
        bonusTexto.innerHTML = 'Parabéns! Você comprou <strong>2 potes</strong> e recebeu o <strong>Checklist Keto Essencial</strong>!';
        break;
    default:
        imgProduto.src = 'assets/placeholder.jpg';
        imgProduto.alt = 'Produto KetoBurn Max';
        bonusImg.src = 'assets/placeholder.jpg';
        bonusPdf.href = '#';
        bonusTexto.textContent = 'Nenhum bônus encontrado.';
}
