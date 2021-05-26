let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells four  Color Comics #178',
    nota: 'O ultimo macPatinhas',
    recorrente:'sim'
};
  //console.log("Bem vinda" + info.personagem + "!");
  info.recorrente = 'sim'
 // console.log(info.recorrente);
/*for(let key in info){
    if(info[key]== info2[key]){
        info.key="ambos recorrentes"}

        console.log(info[key],' e ',info2[key])

 }*/
 for (let key in info) {
    if (
      info[key] === info.recorrente &&
      info[key] === 'sim' &&
      info2[key] === 'sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[key] + ' e ' + info2[key]);
    }

 } 