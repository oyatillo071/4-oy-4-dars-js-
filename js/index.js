
// birinchi mashq
document.getElementById('first__btn').addEventListener('click', function() {
    let firstValue = document.getElementById('first__value').value;
    
    if (firstValue>0) {
        alert("Bu musbat son.");
    } else if(firstValue==0){
        alert("Bu noll.")
    }
    else{
        alert("Bu manfiy son.");
    }
});

// ikkichi mashq
document.getElementById('second__btn').addEventListener('click', function() {
    let secondValue = document.getElementById('second__value').value;

    if (secondValue%2==0) {
        alert("Bu juft son.");
    } else{
        alert("Bu toq son.");
    }
});

// uchinchi mashq
document.getElementById('third__btn').addEventListener('click', function() {
    let thirdFirstValue = document.getElementById('third__value--num1').value;
    let thirdSecondValue = document.getElementById('third__value--num2').value;

    if (thirdSecondValue==thirdFirstValue) {
        alert("Teng");
    } else if(thirdFirstValue>thirdSecondValue){
        alert("1-son ikkinchisdan katta");
    }else{
        alert("1-son ikkinchisidan kichik");
    }
});



// tortinchi mashq
document.getElementById('four__btn').addEventListener('click', function() {
    let fourFirstValue = document.getElementById('four__value--num1').value;
    let fourSecondValue = document.getElementById('four__value--num2').value;

    if (fourSecondValue==fourFirstValue) {
        alert("Kvadrat");
    }else{
        alert("Kvadrat emas");
    }
});



// beshinchi mashq
document.getElementById('five__btn').addEventListener('click', function() {
    let fiveValue = document.getElementById('five__value').value;

    if (fiveValue>0) {
        alert("Yozgi");
    }else{
        alert("Qishki");
    }
});


// oltinchi mashq
document.getElementById('six__btn').addEventListener('click', function() {
    let sixValue = document.getElementById('six__value').value;

    if (sixValue==5) {
        alert("A'lo");
    }else if(sixValue==4){
        alert("Yaxshi");
    }else if(sixValue==3){
        alert("Qoniqarli");
    }else if(sixValue==2){
        alert("Yomon");
    }else if(sixValue==1){
        alert("Juda Yomon Qoniqarsiz");
    }
    else{
        alert("Xato qiymat");
    }

});


// yettinchi mashq
document.getElementById('seven__btn').addEventListener('click', function() {
    let sevenFirstValue = document.getElementById('seven__value--first').value;
    let sevenSecondValue = document.getElementById('seven__value--second').value;
    let sevenThirdValue = document.getElementById('seven__value--third').value;

    let sevenMaxNum = sevenFirstValue ;
    if (sevenMaxNum<sevenSecondValue) {
        sevenMaxNum = sevenSecondValue;
    } else if(sevenMaxNum < sevenThirdValue){
        sevenMaxNum = sevenThirdValue;
    }
    alert("Eng Katta son = "+sevenMaxNum);

});

// sakkizinchi mashq
document.getElementById('eight__btn').addEventListener('click', function() {
    let eightValue = document.getElementById('eight__value').value;

    if (eightValue>9999 && eightValue<100000) {
        alert("Besh xonali son");
    }else{
        alert("Besh xonali son emas");
    }
});


// toqqizinchi mashq
document.getElementById('nine__btn').addEventListener('click', function() {
    let nineValue = document.getElementById('nine__value').value;

    if (nineValue==1 || nineValue==2 || nineValue==12) {
        alert("Qish");
    } else if(nineValue==3 || nineValue==4 || nineValue==5){
        alert("Bahor");
    }else if(nineValue==6 || nineValue==7 || nineValue==8){
        alert("Yoz");
    }else if(nineValue==9 || nineValue==10 || nineValue==11){
        alert("Kuz");
    }else{
        alert("Xato qiymat 1...12 gacha qiymat kiriting");
    }
});

// onninchi mashq
document.getElementById('ten__btn').addEventListener('click', function() {
    let tenValue = document.getElementById('ten__value').value;

    if (tenValue>=1 && tenValue<=5) {
        alert("Ish kuni");
    }else if(tenValue==6||tenValue==7){
        alert("Dam olish kuni");
    }else{
        alert("Xato qiymat");
    }
});
// on birinchi mashq
document.getElementById('eleven__btn').addEventListener('click', function() {
    let elevenValue = document.getElementById('eleven__value').value;

    if (elevenValue<=2005) {
        alert("Katta odam");
    } else if(elevenValue<=0){
         alert("Xato qiymat");
     }
    else{
        alert("Yosh bola");
    }
});


// on ikkinchi mashq
document.getElementById('twelve__btn').addEventListener('click', function() {
    let twelveValue = document.getElementById('twelve__value').value;

    if (twelveValue>=8 && twelveValue<=18) {
        alert("Ish vaqti");
    }else if(twelveValue>24||twelveValue<=0){
        alert("Xato qiymat");
    }else{
        alert("Tanaffus");
    }
});



// on uchinchi mashq


document.getElementById('thirteen__btn').addEventListener('click', function() {
    let thirteenValue = document.getElementById('thirteen__value').value;
    if (!isNaN(thirteenValue) && thirteenValue.trim() !=='') {
        alert("Bu raqam");

    }else{
        alert("Bu raqam emas");
   
    }
});


// on tortinchi mashq

document.getElementById('fourteen__btn').addEventListener('click', function() {
    let fourteenFirstValue = document.getElementById('fourteen--num1__value').value;
    let fourteenSecondValue = document.getElementById('fourteen--num2__value').value;
    let fourteenThirdValue = document.getElementById('fourteen--num3__value').value;
    let fourteenFourValue = document.getElementById('fourteen--num4__value').value;
    let fourteenFiveValue = document.getElementById('fourteen--num5__value').value;

    let fourteenMax=fourteenFirstValue;

    if (fourteenMax<fourteenSecondValue) {
        fourteenMax=fourteenSecondValue;
    } 
    if(fourteenMax<fourteenThirdValue){
        fourteenMax= fourteenThirdValue;
    }
    if(fourteenMax<fourteenFourValue){
        fourteenMax= fourteenFourValue;
    }
     if(fourteenMax<fourteenFiveValue){
        fourteenMax= fourteenFiveValue;
    }

    if (fourteenMax>100) {
        alert("Katta son");
    } else {
        alert("Kichik son");
    }
    
});


// on beshinchi mashq
document.getElementById('fiveteen__btn').addEventListener('click', function() {
    let fiveteenValue = document.getElementById('fiveteen__value').value;

    if (fiveteenValue<18) {
        alert("Tekin kirish");
    }else{
        alert("Pul tolash kerak");
    }
});
