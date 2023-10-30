//メソッドの作成　戻り値なし　パラメーターなし
function printHello(){
    console.log("hello");
}

//メソッドの呼び出し
printHello();

//戻り値あり　パラメーターあり
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

//デフォル　メソッド
function print(str1,str2="世界",str3="!!!!"){
    console.log(str1+""+str2+""+str3);
}
print("ya-ho-");
print("ya-ho-","お昼寝したい");
print("ya-ho-","お昼寝したい","おやつを食べたい");

//ラムダ式
let add=(x,y)=>x+y;
console.log(add(2,3));