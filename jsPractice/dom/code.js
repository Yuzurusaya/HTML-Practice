//要素の取得
let text=document.getElementById("text-1");
//中身の確認
console.log(text);
//要素の内容を取得する
console.log(text.innerHTML);
//要素の内容を変更する
text.innerHTML="你好";

let lunch1=document.getElementById("lunch");
console.log(lunch1);
console.log(lunch1.innerHTML);
lunch1.innerHTML="今日のランチはハンバーグ";

let ex=document.getElementsByClassName("ex1");
console.log(ex);
console.log(ex[0].innerHTML);

//タブの名前を指定して値を取得する
let ex2=document.getElementsByTagName("div");
console.log(ex2);
console.log(ex2[1].innerHTML);

//要素の取得
let link=document.getElementById("link-1");

//要素の内容を取得
console.log(link.innerHTML);
//urlの内容を取得する
console.log(link.href);
//urlの変更
link.href="https://eng-entrance.com/what-is-dom";
//target_brank
link.target="_blank";
