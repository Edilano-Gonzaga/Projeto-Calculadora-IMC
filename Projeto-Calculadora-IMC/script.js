const button = document.getElementById('button');
const limpar = document.getElementById('limpar');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

const getText = (imc) =>{
if (imc > 40) return 'Obesidade grau III';
if (imc > 35) return 'Obesidade grau II', 'Você está acima do seu peso ideal, procure um médico ele te auxiliara na melhora de sua saúde';
if (imc > 30) return 'Obesidade grau I';
if (imc > 25) return 'Levimente acima do peso';
if (imc > 18.5) return 'Você está no peso ideal';
return 'Abaixo do peso';

}

const imcCalc = () => {
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = getText(valorImc);
};


button.addEventListener('click', imcCalc);
