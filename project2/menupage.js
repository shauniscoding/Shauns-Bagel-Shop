//the following code gets the following html elements and creates JavaScript objects to use
const bigTitle = document.querySelector('.bigTitle')
const bagelOption = document.querySelector('.bagelOption');
const donutOption = document.querySelector('.donutOption');
const pancakesOption = document.querySelector('.pancakesOption');
const totalCost = document.querySelector('.totalCost');
const totalCalories = document.querySelector('.totalCalories');
const resetButtonValue = document.querySelector('.resetButtonValue');
const discountButtonValue = document.querySelector('.discountButtonValue');

//These variables are used to calculate the calories and price information on the sidebar 
let timesApplied = 0;
let calorieNumber = 0;
//These variables reflect the values for the bagels as the website starts off on the bagels page
let cal1val = 270;
let cal2val = 300;
let cal3val = 350;
let cal4val = 200;
let cal5val = 340;
let cal6val = 450;

let costNumber = 0;
let costVal1 = 1.50;
let costVal2 = 2.99;
let costVal3 = 3.50;
let costVal4 = 1.99;
let costVal5 = 2.99;
let costVal6 = 2.99;

//The following code accesses the html elements of all of the six menu item cards
//menu item 1
const image1 = document.getElementById('image1');
const titleText1 = document.querySelector('.titleText1');
const descriptionText1 = document.querySelector('.descriptionText1');
const priceText1 = document.querySelector('.priceText1');
const caloriesText1 = document.querySelector('.caloriesText1');
const plus1 = document.querySelector('.plus1');
const minus1 = document.querySelector('.minus1');

//menu item 2
const image2 = document.getElementById('image2');
const titleText2 = document.querySelector('.titleText2');
const descriptionText2 = document.querySelector('.descriptionText2');
const priceText2 = document.querySelector('.priceText2');
const caloriesText2 = document.querySelector('.caloriesText2');
const plus2 = document.querySelector('.plus2');
const minus2 = document.querySelector('.minus2');

//menu item 3
const image3 = document.getElementById('image3');
const titleText3 = document.querySelector('.titleText3');
const descriptionText3 = document.querySelector('.descriptionText3');
const priceText3 = document.querySelector('.priceText3')
const caloriesText3 = document.querySelector('.caloriesText3');
const plus3 = document.querySelector('.plus3');
const minus3 = document.querySelector('.minus3');

//menu item 4
const image4 = document.getElementById('image4');
const titleText4 = document.querySelector('.titleText4');
const descriptionText4 = document.querySelector('.descriptionText4');
const priceText4 = document.querySelector('.priceText4');
const caloriesText4 = document.querySelector('.caloriesText4');
const plus4 = document.querySelector('.plus4');
const minus4 = document.querySelector('.minus4');

//menu item 5
const image5 = document.getElementById('image5');
const titleText5 = document.querySelector('.titleText5');
const descriptionText5 = document.querySelector('.descriptionText5');
const priceText5 = document.querySelector('.priceText5');
const caloriesText5 = document.querySelector('.caloriesText5');
const plus5 = document.querySelector('.plus5');
const minus5 = document.querySelector('.minus5');

//menu item 6
const image6 = document.getElementById('image6');
const titleText6 = document.querySelector('.titleText6');
const descriptionText6 = document.querySelector('.descriptionText6');
const priceText6 = document.querySelector('.priceText6');
const caloriesText6 = document.querySelector('.caloriesText6');
const plus6 = document.querySelector('.plus6');
const minus6 = document.querySelector('.minus6');


function changeDounts(){
    //Changes title and side menu to donuts 
    bigTitle.textContent = 'Donuts';
    donutOption.style.color = '#6c757d';
    donutOption.style.textDecoration = 'underline'

    //These values are used for the calorie and price counter so it uses the dounts value 
    cal1val = 300;
    cal2val = 350;
    cal3val = 400;
    cal4val = 400;
    cal5val = 370;
    cal6val = 420;

    costVal1 = 1.00;
    costVal2 = 1.50;
    costVal3 = 1.50;
    costVal4 = 1.50;
    costVal5 = 1.50;
    costVal6 = 2.00;

    //This makes it so that the bagels and pancakes sidemenu text is not highlighted 
    bagelOption.style.color = '#ffc107';
    bagelOption.style.textDecoration = 'none';
    pancakesOption.style.color = '#ffc107';
    pancakesOption.style.textDecoration = 'none';
    
    //Change card 1 to donut
    image1.src = 'images/image_1024.jpg';
    image1.width = 200;
    image1.height = 200;
    titleText1.textContent = 'Glazed';
    descriptionText1.textContent = 'Satisfy your sweet tooth with our irresistible glazed donuts! Made fresh daily, these fluffy treats are coated in a delicious glaze that will leave you craving more. Perfect as a sweet snack any time of day.';
    priceText1.style.color = 'gray';
    priceText1.textContent = "$1.00";
    caloriesText1.style.color = 'gray';
    caloriesText1.textContent = '300 Calories'
    
    //Change card 2 to donut
    image2.src = 'images/Chocolate-Glazed.webp';
    image2.width = 200;
    image2.height = 200;
    titleText2.textContent = 'Chocolate';
    descriptionText2.textContent = 'Satisfy your chocolate cravings with our fresh, fluffy chocolate donuts! Indulge in a rich, velvety treat that is perfect for any time of day. Our classic glazed donnt with chocolate frosting will surely brighten your day.';
    priceText2.style.color = 'gray';
    priceText2.textContent = "$1.50";
    caloriesText2.style.color = 'gray';
    caloriesText2.textContent = '350 Calories'

    //Change card 3 to donut
    image3.src = 'images/62d88878e755e8848e69cbb8_5edc3fece5cf1e090554e22e_sprinkled_2520yeast_2520donut_4bb0f82a-271e-4f8d-959a-86d795cc4581.webp';
    image3.width = 200;
    image3.height = 200;
    titleText3.textContent = 'Sprinkled';
    descriptionText3.textContent = 'Elevate your day with our delightful sprinkled donuts! Freshly baked and topped with colorful sprinkles, these treats are a feast for your eyes and your taste buds. Perfect as a fun treat for any occasion.';
    priceText3.style.color = 'gray';
    priceText3.textContent = '$1.50';
    caloriesText3.style.color = 'gray';
    caloriesText3.textContent = '400 Calories'

    //Change card 4 to donut
    image4.src = 'images/Jelly-Donut_CMYK copy.jpg';
    image4.width = 200;
    image4.height = 200;
    titleText4.textContent = 'Jelly';
    descriptionText4.textContent = 'Delight in the fruity goodness of our jelly-filled donuts! Freshly baked and generously filled with luscious fruit jelly, each bite is a burst of sweet flavor. Treat yourself to a taste of joy with our jelly donuts.';
    priceText4.style.color = 'gray';
    priceText4.textContent = '$1.50';
    caloriesText4.style.color = 'gray';
    caloriesText4.textContent = '400 Calories'

    //Change card 5 to donut
    image5.src = 'images/62d8887936233159aac2c26e_61de00ee88417148671305b0_PhotoRoom_20220111_170727.webp';
    image5.width = 200;
    image5.height = 200;
    titleText5.textContent = 'Maple';
    descriptionText5.textContent = 'Each bite of these delectable treats is a delightful combination of fluffy dough and sweet, creamy maple frosting. Our maple donuts are sure to satisfy your cravings for something warm and comforting.';
    priceText5.style.color = 'gray';
    priceText5.textContent = '$1.50';
    caloriesText5.style.color = 'gray';
    caloriesText5.textContent = '370 Calories'

    //Change card 6 to donut
    image6.src = 'images/boston-cream.png';
    image6.width = 200;
    image6.height = 200;
    titleText6.textContent = 'Boston Cream';
    descriptionText6.textContent = 'These delectable treats feature a fluffy donut filled with creamy vanilla custard and topped with a rich chocolate glaze. Our Boston Cream donuts are a perfect balance of sweet and creamy flavors. Where every bite is better than before.';
    priceText6.style.color = 'gray';
    priceText6.textContent = '$2.00';
    caloriesText6.style.color = 'gray';
    caloriesText6.textContent = '420 Calories'

}

function changeBagels(){    
    //Changes title and side menu to bagels
    bigTitle.textContent = 'Bagels';
    bagelOption.style.color = '#6c757d';
    bagelOption.style.textDecoration = 'underline'

    //These values are used for the calorie and price counter so it uses the bagels value 
    cal1val = 270;
    cal2val = 300;
    cal3val = 350;
    cal4val = 200;
    cal5val = 340;
    cal6val = 450;

    costVal1 = 1.50;
    costVal2 = 2.99;
    costVal3 = 3.50;
    costVal4 = 1.99;
    costVal5 = 2.99;
    costVal6 = 2.99;

    //This makes it so that the donuts and pancakes sidemenu text is not highlighted 
    donutOption.style.color = '#ffc107';
    donutOption.style.textDecoration = 'none';
    pancakesOption.style.color = '#ffc107';
    pancakesOption.style.textDecoration = 'none';

    //Change card 1 to donut
    image1.src = 'images/food_eat_diet_bagel_plain_bread-1387011.jpg!d';
    image1.width = 200;
    image1.height = 200;
    titleText1.textContent = 'Original Bagel';
    descriptionText1.textContent = 'Experience the timeless appeal of our original bagels: chewy, crisp, and bursting with flavor. Our original bagel promises a satisfying experience that evokes tradition and culinary craftsmanship';
    priceText1.style.color = 'gray';
    priceText1.textContent = "$1.50";
    caloriesText1.style.color = 'gray';
    caloriesText1.textContent = '270 Calories'

    //Change card 2 to donut
    image2.src = 'images/81x0W9XF4uL.jpg';
    image2.width = 200;
    image2.height = 200;
    titleText2.textContent = 'Everything Bagel';
    descriptionText2.textContent = 'Our classic bagel topped with a mixture of sesame seeds, poppy seeds, dried garlic, dried onion, and salt, providing a savory and flavorful taste to brigthen up your mornings';
    priceText2.style.color = 'gray';
    priceText2.textContent = "$2.99";
    caloriesText2.style.color = 'gray';
    caloriesText2.textContent = '300 Calories'

    //Change card 3 to donut
    image3.src = 'images/resize.webp';
    image3.width = 200;
    image3.height = 200;
    titleText3.textContent = 'Asiago Bagel';
    descriptionText3.textContent = 'Rich Asiago cheese blended with savory seasonings, offering a perfect balance of chewiness and crispiness. Ideal for any meal or snack, it is a gourmet twist on a classic favorite';
    priceText3.style.color = 'gray';
    priceText3.textContent = '$3.50';
    caloriesText3.style.color = 'gray';
    caloriesText3.textContent = '350 Calories'

    //Change card 4 to donut
    image4.src = 'images/blueberry_1024x1024_73ae3bce-4891-4fa8-888c-f7905dd8f318_800x600.webp';
    image4.width = 200;
    image4.height = 200;
    titleText4.textContent = 'Blueberry Bagel';
    descriptionText4.textContent = 'Our blueberry bagels are bursting with plump juicy blueberries. Indulge in the perfect blend of sweetness and tartness, creating a heavenly treat for any time of day';
    priceText4.style.color = 'gray';
    priceText4.textContent = '$1.99';
    caloriesText4.style.color = 'gray';
    caloriesText4.textContent = '200 Calories'

    //Change card 5 to donut
    image5.src = 'images/raisinbagel.jpg';
    image5.width = 200;
    image5.height = 200;
    titleText5.textContent = 'Cinnamon Raisin Bagel';
    descriptionText5.textContent = 'Savor the delightful combination of sweet raisins and aromatic cinnamon in our cinnamon raisin bagels. Balanced and comforting, these bagels are here for a limited time';
    priceText5.style.color = 'gray';
    priceText5.textContent = '$2.99';
    caloriesText5.style.color = 'gray';
    caloriesText5.textContent = '340 Calories'

    //Change card 6 to donut
    image6.src = 'images/s344259539468720702_p31_i2_w1920.webp';
    image6.width = 200;
    image6.height = 200;
    titleText6.textContent = 'French Toast Bagel';
    descriptionText6.textContent = 'Indulge in the classic flavors of French toast infused into the chewy goodness of a bagel. Each bite is a delightful fusion of cinnamon, maple sweetness, and buttery richness';
    priceText6.style.color = 'gray';
    priceText6.textContent = '$2.99';
    caloriesText6.style.color = 'gray';
    caloriesText6.textContent = '450 Calories'

}

function changePancakes(){
    //Changes title and side menu to pancakes 
    bigTitle.textContent = 'Pancakes';
    pancakesOption.style.color = '#6c757d';
    pancakesOption.style.textDecoration = 'underline';

    //These values are used for the calorie and price counter so it uses the pancakes value 
    cal1val = 450;
    cal2val = 470;
    cal3val = 500;
    cal4val = 500;
    cal5val = 550;
    cal6val = 550;

    costVal1 = 1.00;
    costVal2 = 2.00;
    costVal3 = 2.00;
    costVal4 = 2.50;
    costVal5 = 4.00;
    costVal6 = 2.00;

    //This makes it so that the bagels and donuts sidemenu text is not highlighted
    bagelOption.style.color = '#ffc107';
    bagelOption.style.textDecoration = 'none';
    donutOption.style.color = '#ffc107';
    donutOption.style.textDecoration = 'none';
    
    //Change card 1 to donut
    image1.src = 'images/istockphoto-172249723-612x612.jpg';
    image1.width = 200;
    image1.height = 200;
    titleText1.textContent = 'Original Pancakes';
    descriptionText1.textContent = 'Savor the delight of fluffy pancakes, golden and light, topped with rich maple syrup. Start your day with this perfect breakfast, customizable with a variety of toppings. Joy in every bite awaits you to start your day the right way.';
    priceText1.style.color = 'gray';
    priceText1.textContent = "$1.00";
    caloriesText1.style.color = 'gray';
    caloriesText1.textContent = '450 Calories'

    //Change card 2 to donut
    image2.src = 'images/istockphoto-1403026299-612x612.jpg';
    image2.width = 200;
    image2.height = 200;
    titleText2.textContent = 'Blueberry Pancakes';
    descriptionText2.textContent = 'Experience the burst of flavor in every bite of our fluffy blueberry pancakes! These pancakes are a delightful twist on a classic favorite. Drizzle with maple syrup for the perfect breakfast treat with a delightful blueberry twist.';
    priceText2.style.color = 'gray';
    priceText2.textContent = "$2.00";
    caloriesText2.style.color = 'gray';
    caloriesText2.textContent = '470 Calories'

    //Change card 3 to donut
    image3.src = 'images/flourlesspbchocolatepancakes-1-768x1024.jpg';
    image3.width = 200;
    image3.height = 200;
    titleText3.textContent = 'Chocolate Chip Pancakes';
    descriptionText3.textContent = 'Indulge in the sweet pleasure of chocolate chip pancakes, where every fluffy bite is dotted with rich, melty chocolate chips. Perfect for a decadent breakfast or a delightful treat, these pancakes are perfect.';
    priceText3.style.color = 'gray';
    priceText3.textContent = '$2.00';
    caloriesText3.style.color = 'gray';
    caloriesText3.textContent = '500 Calories'

    //Change card 4 to donut
    image4.src = 'images/pngtree-strawberry-pancakes-png-png-image_11598620.png';
    image4.width = 200;
    image4.height = 200;
    titleText4.textContent = 'Strawberry Pancakes';
    descriptionText4.textContent = 'Savor the sweet harmony of strawberry pancakes, each fluffy bite bursting with fresh, ripe strawberries and delicious strawberry syrup. These pancakes offer a perfect blend of sweetness and satisfaction with their fresh strawberries, making any breakfast special.';
    priceText4.style.color = 'gray';
    priceText4.textContent = '$2.50';
    caloriesText4.style.color = 'gray';
    caloriesText4.textContent = '500 Calories'

    //Change card 5 to donut
    image5.src = 'images/red-velvet-pancake-isolated-white-background_741212-2543.jpg';
    image5.width = 200;
    image5.height = 200;
    titleText5.textContent = 'Red Velvet Pancakes';
    descriptionText5.textContent = 'Red velvet pancakes, a decadent twist on a classic favorite. These fluffy pancakes are infused with cocoa and buttermilk, giving them their signature red color and a hint of chocolatey goodness. Complemented with a cream cheese drizzle.';
    priceText5.style.color = 'gray';
    priceText5.textContent = '$4.00';
    caloriesText5.style.color = 'gray';
    caloriesText5.textContent = '550 Calories'

    //Change card 6 to donut
    image6.src = 'images/pouring-chocolate-syrup-stack-small-pancakes-white-wit-fresh-currants-68393097.webp';
    image6.width = 200;
    image6.height = 200;
    titleText6.textContent = 'Chocolate Pancakes';
    descriptionText6.textContent = "Delight in the rich flavor of chocolate pancakes, a chocolate lover's dream come true. These fluffy pancakes are infused with cocoa, giving them a decadent and irresistible flavor. Enjoy them for breakfast or as a sweet treat any time of day.";
    priceText6.style.color = 'gray';
    priceText6.textContent = '$2.00';
    caloriesText6.style.color = 'gray';
    caloriesText6.textContent = '550 Calories'

}

//The following functions are used when the plus or minus button of a card is pressed to add or subtract the specific cost or  calories from the side menu
function addCalories1(){
    calorieNumber += cal1val;
    totalCalories.textContent = calorieNumber;
}

function addCalories2(){
    calorieNumber += cal2val;
    totalCalories.textContent = calorieNumber;
}

function addCalories3(){
    calorieNumber += cal3val;
    totalCalories.textContent = calorieNumber;
}

function addCalories4(){
    calorieNumber += cal4val;
    totalCalories.textContent = calorieNumber;
}

function addCalories5(){
    calorieNumber += cal5val;
    totalCalories.textContent = calorieNumber;
}

function addCalories6(){
    calorieNumber += cal6val;
    totalCalories.textContent = calorieNumber;
}

function minusCalories1(){
    if(calorieNumber - cal1val >= 0){
        calorieNumber -= cal1val;
        totalCalories.textContent = calorieNumber;
    }
}

function minusCalories2(){
    if(calorieNumber - cal2val >= 0){
        calorieNumber -= cal2val;
        totalCalories.textContent = calorieNumber;
    }
}

function minusCalories3(){
    if(calorieNumber - cal3val >= 0){
        calorieNumber -= cal3val;
        totalCalories.textContent = calorieNumber;
    }
}

function minusCalories4(){
    if(calorieNumber - cal4val >= 0){
        calorieNumber -= cal4val;
        totalCalories.textContent = calorieNumber;
    }
}

function minusCalories5(){
    if(calorieNumber - cal5val >= 0){
        calorieNumber -= cal5val;
        totalCalories.textContent = calorieNumber;
    }
}

function minusCalories6(){
    if(calorieNumber - cal6val >= 0){
        calorieNumber -= cal6val;
        totalCalories.textContent = calorieNumber;
    }
}

function addCost1(){
    costNumber += costVal1;
    totalCost.textContent = costNumber.toFixed(2);;
}

function addCost2(){
    costNumber += costVal2;
    totalCost.textContent = costNumber.toFixed(2);;
}
function addCost3(){
    costNumber += costVal3;
    totalCost.textContent = costNumber.toFixed(2);;
}
function addCost4(){
    costNumber += costVal4;
    totalCost.textContent = costNumber.toFixed(2);;
}
function addCost5(){
    costNumber += costVal5;
    totalCost.textContent = costNumber.toFixed(2);;
}
function addCost6(){
    costNumber += costVal6;
    totalCost.textContent = costNumber.toFixed(2);;
}

function minusCost1(){
    if(costNumber - costVal1 >= 0){
        costNumber -= costVal1;
        totalCost.textContent = costNumber.toFixed(2);;
    }
}

function minusCost2(){
    if(costNumber - costVal2 >= 0){
        costNumber -= costVal2;
        totalCost.textContent = costNumber.toFixed(2);;
    }
}
function minusCost3(){
    if(costNumber - costVal3 >= 0){
        costNumber -= costVal3;
        totalCost.textContent = costNumber.toFixed(2);;
    }
}
function minusCost4(){
    if(costNumber - costVal4 >= 0){
        costNumber -= costVal4;
        totalCost.textContent = costNumber.toFixed(2);;
    }
}
function minusCost5(){
    if(costNumber - costVal5 >= 0){
        costNumber -= costVal5;
        totalCost.textContent = costNumber.toFixed(2);;
    }
}
function minusCost6(){
    if(costNumber - costVal6 >= 0){
        costNumber -= costVal6;
        totalCost.textContent = costNumber.toFixed(2);;
    }
}

//These functions are used to reset the values and apply the 25% discount
function resetCalAndCost(){
    totalCost.textContent = '0.00';
    totalCalories.textContent = '0';
    timesApplied = 0;
    costNumber = 0;
    calorieNumber = 0;
}

function applyDiscount(){
    if(timesApplied < 1){
        let discountValue = costNumber * 0.75;
        totalCost.textContent = discountValue.toFixed(2);;
        timesApplied = 1;
    }
}

//These lines of code are used to add event listeners to add or subtract the calories and price
plus1.addEventListener('click', addCalories1);
plus2.addEventListener('click', addCalories2);
plus3.addEventListener('click', addCalories3);
plus4.addEventListener('click', addCalories4);
plus5.addEventListener('click', addCalories5);
plus6.addEventListener('click', addCalories6);

minus1.addEventListener('click', minusCalories1);
minus2.addEventListener('click', minusCalories2);
minus3.addEventListener('click', minusCalories3);
minus4.addEventListener('click', minusCalories4);
minus5.addEventListener('click', minusCalories5);
minus6.addEventListener('click', minusCalories6);

plus1.addEventListener('click', addCost1);
plus2.addEventListener('click', addCost2);
plus3.addEventListener('click', addCost3);
plus4.addEventListener('click', addCost4);
plus5.addEventListener('click', addCost5);
plus6.addEventListener('click', addCost6);

minus1.addEventListener('click', minusCost1);
minus2.addEventListener('click', minusCost2);
minus3.addEventListener('click', minusCost3);
minus4.addEventListener('click', minusCost4);
minus5.addEventListener('click', minusCost5);
minus6.addEventListener('click', minusCost6);

//These event listeners are added for the functions that change the content in the cards
donutOption.addEventListener('click', changeDounts);
bagelOption.addEventListener('click', changeBagels);
pancakesOption.addEventListener('click', changePancakes);

//These event listeners are for the reset and  discount buttons
resetButtonValue.addEventListener('click', resetCalAndCost);
discountButtonValue.addEventListener('click', applyDiscount);


//Pulls variable from local storage for header
newNamePrompt2 = document.querySelector('.newNamePrompt2');
newNamePrompt2.textContent = localStorage.getItem('namePrompt');