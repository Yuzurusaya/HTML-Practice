let label=document.getElementById("text-result");
let button1=document.getElementById("change-text1");
let button2=document.getElementById("change-text2");
let button3=document.getElementById("change-text3");
let k=0;

button1.addEventListener("click",()=>{
    k=0;
    label.innerHTML="値："+k;
})

button2.addEventListener("click",()=>{
    k+=1;
    label.innerHTML="値："+k;
})

button3.addEventListener("click",()=>{
    k-=1;
    label.innerHTML="値："+k;
})