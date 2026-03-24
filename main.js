console.log("it works");

//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

//Creo un array di oggetti
const bikes=[
    {
        name:"EEEE",
        weight: 20
    },

    {
        name:"AAAA",
        weight: 23
    },
   
    {
        name:"BBBB",
        weight: 24
    },
   
    {
        name:"CCCC",
        weight: 21
    },
    
    {
        name:"DDDD",
        weight: 26
    }
];


/*
for (let i=0; i<bikes.length; i++){ 
    console.log(`oggetto in posizione ${i} :`);
    
    for (let key in bikes[i]){
        console.log(key);
        console.log(bikes[i][key]);
    };
}
*/

//Elaboration data to find the object of the array with the minor weight.
//creo una variabile in cui salvare l'indice dell'oggetto con peso minore
let x=0;
//creo una variabile in cui salvare il peso minore
let minWeight= bikes[x]["weight"];

//ciclo FOR per scorrere gli oggetti dell'array
for (let i=1; i<bikes.length; i++){
   //confronto il peso dell'oggetto con il valore di minWeight
   if(bikes[i]["weight"] < minWeight){
    //aggiorno minWeight
    minWeight=bikes[i]["weight"];
    //aggiorno l'inidice x
    x=i;
   } 
};
//Stampare a schermo la bici con peso minore.
console.log(x);
console.log(bikes[x]);





//Snack 2
//TASK 1:
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//TASK 2:
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//TASK 3:
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//TASK 1:
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

//defining array of objects
const soccerTeams=[
    {
        name: "JJJJ",
        points:0,
        falliSubiti:0
    },
    {
        name: "KKKK",
        points:0,
        falliSubiti:0
    },
    {
        name: "LLLL",
        points:0,
        falliSubiti:0
    },
    {
        name: "MMMM",
        points:0,
        falliSubiti:0
    }    
];
/* console.log(soccerTeams); */

//TASK 2:
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

//ciclo for per scorrere tutti gli oggetti dell'array e aggiornare le proprietà
for(let i=0; i<soccerTeams.length; i++){
    //assegno un numero random fra 1 e 50
    soccerTeams[i]["points"]= Math.floor(Math.random() * 50) + 1;
    //assegno un numero random fra 1 e 10
    soccerTeams[i]["falliSubiti"]= Math.floor(Math.random() * 10) + 1;
};
console.log(soccerTeams);

//TASK 3:
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const newArr=[];
for (let i=0; i<soccerTeams.length; i++){
    const team={
        name: soccerTeams[i]["name"],
        falliSubiti: soccerTeams[i]["falliSubiti"]
    };
    //aggiorno il nuovo array
    newArr.push(team);
};

console.log(newArr);






//define object
/* const person= {
 
 //proprietà
 firstName:"Mario",
 "last-name":"Bros",
 lastName:"Bros",

 age: 50,
 pets:["cat","dog"],

 //method
 talk(){
    console.log("I am talking");
    //ATTENZIONE...
    console.log(this);

    console.log(`${this.firstName} is talking`);
    
    
 }
};
 */