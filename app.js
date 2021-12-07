let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let createElementDiv = (tab) => {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = tab;
    document.body.append(newDiv);
}

let newTab1 = tableauUn.map(valeur => valeur ** valeur);
createElementDiv(newTab1);

let newTab2 = tableauUn.map(valeur => valeur * 10);
createElementDiv(newTab2);

let newTab3 = tableauUn.map(valeur => valeur + 2 / 18);
createElementDiv(newTab3);

let tableauUnFiltre1 = tableauUn.filter(item => item > 2);
createElementDiv(tableauUnFiltre1);

let tableauUnFiltre2 = tableauUn.filter(item => item % 2 === 0);
createElementDiv(tableauUnFiltre2);

let tableauUnFiltre3 = tableauUn.filter(item => item * 3 > 10);
createElementDiv(tableauUnFiltre3);

let newTab4 = tableauDeux.map(valeur => valeur.length);
createElementDiv(newTab4);

let newTab5 = tableauDeux.map(valeur => [valeur, valeur.length]);
createElementDiv(newTab5);

let newTab6 = tableauDeux.map(valeur => valeur + valeur);
createElementDiv(newTab6);

let newTab7 = tableauDeux.filter(valeur => valeur.length > 2 + 2);
createElementDiv(newTab7);

let newTab8 = tableauDeux.filter(item => item % 2 === 0);
createElementDiv(newTab8);

let newTab9 = tableauDeux.filter(item => item.length - 3 > 10);
createElementDiv(newTab9);