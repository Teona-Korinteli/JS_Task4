const API_URL= 'https://api.adviceslip.com/advice';

const adviceNumber=document.querySelector('.advice-number');
const adviceOfTheDay=document.querySelector('.advice');
const adviceBtn =document.querySelector('.dice-btn');

const getNumber =async () => {
  const response =await fetch(API_URL);
  const data =await response.json();
  adviceNumber.textContent= `ADVICE # ${data.slip.id}`;
  adviceOfTheDay.textContent=`" ${data.slip.advice}"`;
  console.log(data);
}
getNumber();

adviceBtn.addEventListener('click', ()=> getNumber());