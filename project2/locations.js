//The following three groups of code are used to gain acces to the html elements of the image, title, text bodies, and currency text line


const titleName1 = document.querySelector('.titleName1');
const cardImage1 = document.getElementById('cardImage1');
const card1BodyText = document.querySelector('.card1BodyText');
const card1SmallText = document.querySelector('.card1SmallText');

const titleName2 = document.querySelector('.titleName2');
const cardImage2 = document.getElementById('cardImage2');
const card2BodyText = document.querySelector('.card2BodyText');
const card2SmallText = document.querySelector('.card2SmallText');

const titleName3 = document.querySelector('.titleName3');
const cardImage3 = document.getElementById('cardImage3');
const card3BodyText = document.querySelector('.card3BodyText');
const card3SmallText = document.querySelector('.card3SmallText');

//The following three functions are used to grab the data from the Rest Countries database 
const fetchCountry1 = async() => {
    //The information needed from the databases is grabbed here
    const apiUrl = 'https://restcountries.com/v3.1/name/France';
    try{
        //api response is grabbed here
        const response = await fetch(apiUrl);

        //If there is an error it will be thrown here
        if(!response.ok){
            throw new Error('error');
        }

        //Data is turned into a json object here
        const data = await response.json();

        //The needed data is extracted here from the data variable
        const {name, subregion, currencies, capital, languages, flags, coatOfArms} = data[0];
        const {common, nativeName} = name;
        const {EUR} = currencies
        const {fra} = nativeName;
        const {official} = fra;
        const {png} = flags;
        const {svg} = coatOfArms;

        //The textcontent and src of the html elements are updated here with the data taken from the Rest Countries database
        titleName1.textContent = common;
        cardImage1.src = png
        card1BodyText.textContent = `Check out our location in ${capital}, in the beautiful country of ${common}. ${common} is officially refered to as the ${official}  by the ${languages.fra} people.`;
        card1SmallText.textContent = `Currently only accepting ${EUR.name}s (${EUR.symbol}) at this location.`
    }
    //If there is an error fetching the data it will be caught here
    catch(error){
        console.error('Error', error);
    }

}

const fetchCountry2 = async() => {
    //The information needed from the databases is grabbed here
    const apiUrl = 'https://restcountries.com/v3.1/name/australia';
    try{
        //api response is grabbed here
        const response = await fetch(apiUrl);

        //If there is an error it will be thrown here
        if(!response.ok){
            throw new Error('error');
        }

        //Data is turned into a json object here
        const data = await response.json();

        //The needed data is extracted here from the data variable
        const {name, subregion, currencies, capital, languages, demonyms, flags, coatOfArms} = data[0];
        const {common, nativeName} = name;
        const {AUD} = currencies
        const {eng} = nativeName;
        const {official} = eng;
        const {png} = flags;
        const {svg} = coatOfArms;

        //The textcontent and src of the html elements are updated here with the data taken from the Rest Countries database
        titleName2.textContent = common;
        cardImage2.src = png
        card2BodyText.textContent = `Check out our location in ${capital}, in the beautiful country of ${common}. ${common} is officially refered to as the ${official}  by the ${demonyms.eng.f} people.`;
        card2SmallText.textContent = `Currently only accepting ${AUD.name}s (${AUD.symbol}) at this location.`
    }
    //If there is an error fetching the data it will be caught here
    catch(error){
        console.error('Error', error);
    }

}

const fetchCountry3 = async() => {
    //The information needed from the databases is grabbed here
    const apiUrl = 'https://restcountries.com/v3.1/name/brazil';
    try{
        //api response is grabbed here
        const response = await fetch(apiUrl);

        //If there is an error it will be thrown here
        if(!response.ok){
            throw new Error('error');
        }

        //Data is turned into a json object here
        const data = await response.json();

        //The needed data is extracted here from the data variable
        const {name, currencies, capital, demonyms, flags, coatOfArms} = data[0];
        const {common, nativeName} = name;
        const {BRL} = currencies
        const {por} = nativeName;
        const {official} = por;
        const {png} = flags;
        const {svg} = coatOfArms;

        //The textcontent and src of the html elements are updated here with the data taken from the Rest Countries database
        titleName3.textContent = common;
        cardImage3.src = png
        card3BodyText.textContent = `Check out our location in ${capital}, in the beautiful country of ${common}. ${common} is officially refered to as the ${official}  by the ${demonyms.eng.f} people.`;
        card3SmallText.textContent = `Currently only accepting ${BRL.name}s (${BRL.symbol}) at this location.`
    }
    //If there is an error fetching the data it will be caught here
    catch(error){
        console.error('Error', error);
    }

}


//The followging lines call the functions that get and display the information obtained 
fetchCountry1();
fetchCountry2();
fetchCountry3();


//Pulls variable from local storage for header
newNamePrompt3 = document.querySelector('.newNamePrompt3');
newNamePrompt3.textContent = localStorage.getItem('namePrompt');