let label=document.getElementById("label");
let button1=document.getElementById("change-text1");
let button2=document.getElementById("change-text2");
let button3=document.getElementById("change-text3");

//りんごに変更のボタンをクリックしたらりんごに内容を変更する
button1.addEventListener("click",()=>{
label.innerHTML="りんご";
});
//バナナに変更のボタンをクリックしたらバナナに内容を変更する
button2.addEventListener("click",()=>{
label.innerHTML="バナナ";
});
//みかんに変更のボタンをクリックしたらみかんに内容を変更する
button3.addEventListener("click",()=>{
label.innerHTML="みかん";
});