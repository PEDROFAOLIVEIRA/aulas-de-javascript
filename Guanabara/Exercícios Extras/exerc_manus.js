
let conta = 80;
let vip = false;
let diaSemana = 'Terça';

let desconto = (conta > 100 && (vip === true || diaSemana === 'Terça')) ? 'tem desconto' : 'não tem desconto';

console.log(desconto);

