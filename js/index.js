var elText =document.querySelector(`.text`)

function generateAndSum(x) 
{ 

  if (x === 1)
 {
    return 1;
 }else{
   return x + generateAndSum(x-1);
 }
  
         
}
elText.textContent=generateAndSum(10)

