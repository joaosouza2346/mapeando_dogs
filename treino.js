const breendingAge ={
    "labrador":{
        idadeMaxima : 10,
        idadeMinima: 15

    },

"vira-lata":{
    idadeMaxima: 12,
    idadeMinima: 8
}
}
const breedInput = "labrador";
const dogInputAge = 6;
 if (!breendingAge[breedInput]){
   console.log ("raça ainda não mapeada");

 }
 if (dogInputAge >=breendingAge[breedInput].idadeMinima && dogInputAge<=breendingAge [breedInput].idadeMaxima){

 
  console.log ("idade ideal");
 }else {
  console.log ("não está na idade ideal");
  }
 