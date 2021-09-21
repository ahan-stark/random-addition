let firstnumber=parseInt(Math.random()*10);
let secondnumber=parseInt(Math.random()*10);
let sum=firstnumber+secondnumber;
let displayfirstnumber=document.getElementById('primary');
let displaysecondnumber=document.getElementById("secondary");
displayfirstnumber.innerHTML=`<p>${firstnumber}</p>`;
displaysecondnumber.innerHTML=`<p>${secondnumber}</p>`;
let button=document.getElementById('press');
button.addEventListener('click',function(){
    let user_answer=document.getElementById('user-answer').value;
    user_answer=Number(user_answer);
    if(user_answer===sum){
        alert('correct');
        window.location.reload()
    }
    else{
        alert('Sorry. Incorrect. The correct answer was ' + sum + '.')
    window.location.reload()
    }
});
