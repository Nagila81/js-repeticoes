const dia = document.getElementById ('dia');
const mes = document.getElementById ('mes');
const ano = document.getElementById ('ano');

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho", "Julho", 
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for(let i = 1; i <= 31; i++) {
    dia.innerHTML += `<option>${i}</option>`;
}

for(let i = 0; i < meses.length; i++) {
    mes.innerHTML += `<option value = "${i}">${meses[i]}</option>`;
}

for(let i = new Date().getFullYear(); i >= 1975; i--) {
    ano.innerHTML += `<option>${i}</option>`;
}

function getDiasNoMes(mesIndex, ano) {
    if ([0, 2, 4, 6, 7, 9, 11].includes(mesIndex)) return 31;
    if (mesIndex === 1) return (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0))
        ? 29 : 28;
    return 30;
}

atualizarDias();

function atualizarDias() {
    const mesIndex = Number(mes.value);
    const anoValue = parseInt(ano.value);
    const diasNoMes = getDiasNoMes(mesIndex, anoValue);
    dia.innerHTML = '';
    
    for (let i = 1; i <= diasNoMes; i++) {
        dia.innerHTML += `<option>${i}</option>`;
    }
}

mes.onchange = atualizarDias;

function verificar() {
    const anoValue = parseInt(ano.value);
    const mesValue = mes.selectedIndex + 1;

    if (anoValue % 4 === 0 && (anoValue % 100 !== 0 || anoValue % 400 === 0)) {
        alert(`Quem nasceu em ${dia.value}/${meses[mesValue-1]}/${anoValue}, nasceu em ano bissexto.`)
    }  
}