const form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#Weight").value);
const result = document.querySelector("#results");
// checking whether input height is valid or not
if(height===" " || height <= 0 || isNaN(height)){
    result.innerHTML=`Please give a valid Height ${height}`;
}
 else if(weight===" " || weight<=0||isNaN(weight)){
    result.innerHTML=`Please give a valid weight ${weight}`;
}
 else{
    const bmi=(weight / ((height*height)/10000)).toFixed(2);
    // show the result
 result.innerHTML=`<span>${bmi}</span>`;

 if(bmi<18.6){
    result.innerHTML=`${bmi} is Underweight`;
 }
 else if(bmi>=18.6 || bmi<=24.9){
    result.innerHTML=`${bmi} is normal weight`;
 }
 else{
    result.innerHTML=`${bmi} is Overweight`;
 }
 }
})
