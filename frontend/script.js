console.log('This is a script file')
/*object*/
console.log('load') /*tűzvédelmi eljárás*/ /*metódus*/

/*console.dir(document)*/

async function loadEvent() {
    let countriesData = await fetch("https://restcountries.com/v3.1/all")
    let countriesJson = await countriesData.json()
    console.log(countriesData[111])

    let countriesSection = document.getElementById("countries") 
    //console.dir(countriesSection);
   
    //countriesSection.innerHTML+="Hali"
   // document.getElementById("countries").innerHTML+="Hali";
   
   countriesSection.insertAdjacentHTML("beforeend",`<h1>Countries</h1>`)
   /*ezt betette a html-be is*/
   // countriesSection.insertAdjacentHTML("beforeend","Ciao");
   // document.getElementById("countries").insertAdjacentHTML("beforeend","Ciao");

  /* let countryComponent = `
   <div class="country">
   <h2>ide kerül az ország neve</h2>
   </div>
   ` */

function countryComponent(countryName){
    return `
    <div class="country">
    <h2>${countryName}</h2>
    </div>
    `
}


   for (let index = 0; index < countriesJson.length; index++) {
       console.log(index)
       //countriesSection.insertAdjacentHTML("beforeend", countriesJson[index].name.common)
       countriesSection.insertAdjacentHTML("beforeend", countryComponent(countriesJson[index].name.common))
    }

}

        /*object.függvény(ha van function)*/
window.addEventListener('load',loadEvent) /*tűz üt ki, ez az argument(befele parameter), ez a protokoll*/

function logger(logThis) {
    console.log(logThis/*parameter*/)
}

logger('Hello')
logger('Hello2')
logger(4)
logger(true)

