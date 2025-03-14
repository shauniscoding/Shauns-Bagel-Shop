//grab elements from the two input areas
const newNamePrompt = document.querySelector('.newNamePrompt');
const name1 = document.getElementById('name1')

//Add an event listener to the form when it is submitted    
document.getElementById('form1').addEventListener('submit', 
    
    function(event) {
        //prevents default form submission
        event.preventDefault(); 

        //variable formData holds the data from the form
        const formData = new FormData(this);

        //thee variables are taken from formData
        const name1 = formData.get('name1');
        let title = formData.get('title');

        //Create a variable combining text and previous variables
        const namePrompt = 'Hello ' + title + ' ' + name1;

        //send nameprompt to localstorage and apply it to the header
        localStorage.setItem('namePrompt', namePrompt);
        newNamePrompt.textContent = namePrompt;

    }   
);

//Pulls variable from local storage for header
newNamePrompt.textContent = localStorage.getItem('namePrompt');