console.log("it works");

//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

//Creo un array di oggetti
const bikes=[
    
    {
        name:"AAAA",
        weight: 23
    },
   
    {
        name:"BBBB",
        weight: 24
    },

    {
        name:"EEEE",
        weight: 20
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
for (let i=0; i<bikes.length; i++){
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