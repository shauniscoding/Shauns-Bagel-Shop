//These line grab the div and its contents
const applyNowButton = document.querySelector('.applyNowButton');
const ApplyNowText = document.querySelector('.ApplyNowText');
const applicationForm = document.querySelector('.applicationForm');

//This function opens the hiring div and changes/adds content and dimensions
function openApplicationProcess(){
    //changes div dimensions and removes text
    applyNowButton.style.height = '600px';
    applyNowButton.style.width = '800px';
    ApplyNowText.textContent = '';

    //creating new elements
    const applyToday = document.createElement('h3');
    const textBox = document.createElement('input');
    const aboutBox = document.createElement('input');
    const whyBox = document.createElement('input');
    const radioDiv = document.createElement('div');
    const maleRadio = document.createElement('input');
    const femaleRadio = document.createElement('input');
    const submitButton = document.createElement('button')

    //opening text
    applyToday.classList.add('text-warning');
    applyToday.textContent = 'Apply Today';

    //radio buttons
    maleRadio.setAttribute('type', 'radio');
    maleRadio.setAttribute('name', 'gender');
    maleRadio.style.marginRight = '15px';
    const maleLabel = document.createElement('label');
    maleLabel.textContent = 'Male';
    maleLabel.classList.add('text-warning');
    maleLabel.style.fontSize = '30px';


    femaleRadio.setAttribute('type', 'radio');
    femaleRadio.setAttribute('name', 'gender');
    const femaleLabel = document.createElement('label');
    femaleLabel.textContent = 'Female';
    femaleLabel.classList.add('text-warning');
    femaleLabel.style.fontSize = '30px';
    femaleLabel.style.marginLeft = '15px';

    //submit button
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Application';
    submitButton.classList.add('text-warning');
    submitButton.classList.add('bg-secondary');
    submitButton.classList.add('curved-edges');

    //appending raido buttons to one div
    radioDiv.appendChild(maleLabel);
    radioDiv.appendChild(maleRadio);   
    radioDiv.appendChild(femaleLabel);
    radioDiv.appendChild(femaleRadio);


    //Textbox inputs
    textBox.setAttribute('type','text');
    textBox.setAttribute('placeholder', 'What is your name?');
    textBox.style.margin = '20px'
    textBox.style.width = '700px'
    textBox.style.height = '80px'

    aboutBox.setAttribute('type','text');
    aboutBox.setAttribute('placeholder', 'What is your prior experience?');
    aboutBox.style.margin = '20px'
    aboutBox.style.width = '700px'
    aboutBox.style.height = '80px'

    whyBox.setAttribute('type','text');
    whyBox.setAttribute('placeholder', 'Why do you want to work here?');
    whyBox.style.margin = '20px'
    whyBox.style.width = '700px'
    whyBox.style.height = '80px'

    //Appending to html
    applyNowButton.appendChild(applyToday)
    applyNowButton.appendChild(textBox);
    applyNowButton.appendChild(aboutBox);   
    applyNowButton.appendChild(whyBox);   
    applyNowButton.appendChild(radioDiv); 
    applyNowButton.appendChild(submitButton);


    //remvoe event listener so multiple forms are not created
    applyNowButton.removeEventListener('click', openApplicationProcess);


    //Appending to application form
    applicationForm.appendChild(textBox);
    applicationForm.appendChild(aboutBox);
    applicationForm.appendChild(whyBox);
    applicationForm.appendChild(maleRadio);
    applicationForm.appendChild(femaleRadio);
    applicationForm.appendChild(submitButton);


    //remove event listener to avoid appending too many elements 
    applyNowButton.removeEventListener('click', openApplicationProcess);   
}

applyNowButton.addEventListener('click', openApplicationProcess);

//Pulls variable from local storage for header
newNamePrompt4 = document.querySelector('.newNamePrompt4');
newNamePrompt4.textContent = localStorage.getItem('namePrompt');