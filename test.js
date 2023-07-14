let name;
name = "yamada taro";
console.log( name);
name = "山田　太郎";
console.log( name);
name = name +"さん";
console.log( name);

let money = 0;
console.log( money);
money = money + 10000;
console.log( money);
//money = money / 0;
console.log( money);
money = 10 % 3;
console.log( money);

let point = [ 10, 20, 30, 40, 50 ,60 ,70 ,80, 90, 100];
console.log ( point[ 0 ]);
console.log ( point[ 6 ]);
point [ 10 ] = 3650;
console.log ( point[ 10 ]);
let maxValue = 0, total = 0;
for ( let i = 0; i < 11; i++)
{
   //console.log( "point[" + i +"] = "+ point[i ]);
   //if( point[ i] > 30 && point[i ] < 90)
   //if( 30 < point[ i] && point[i ] < 90)
    //if( point[ i] <= 30 || 90 <= point[ i])
     //{
         //continue;
     //}
     //if( point[ i]==70)
    //{
      //continue;
  // }
    if( point[ i ] > maxValue)
    {
        maxValue = point[ i ];
    }
  
    total += ( point[ i] == 3650? 0: point[ i] );
   //if(point[ i] ==3650) {
    //total = total + 0;
    //} else {total = total + point[ i]
    //}
    average = total / i
    console.log( "現在の値は" + point[ i] +"です");
  
  }
    
/*for ( let i= 0; i < 3650; i++)
{
    console.log( i );
}
*/

console.log( "最大値は" + maxValue +"です");
console.log( " 合計値は" + total +"です");
console.log( " 平均値は" + average +"です");

const text = "Javascriptはめっちゃ難しいです";
console.log( text);
console.log( text.indexOf( "めっちゃ"));
console.log( text.indexOf( "滅茶"));
console.log( text.length);
console.log( text.substring( 4, 10));
console.log( text.slice( -2));
console.log( text.replace( "Javascript", "python"));
const sample = "Davsaov3n49la";
console.log( sample);
console.log( sample.replace( /[a-z]+/g, ""));
console.log( sample.replace( /[a-z]+/ig, ""));
console.log( sample.replace( /[0-9]+/g, ""));
console.log( sample.replace( /[0-9]+/, ""));
console.log( sample.replace( /[A-Z]+/i, ""));
console.log( sample.replace( /[A-Z]+/ig, ""));
const text_space = "  a bc   ";
console.log( text_space);
console.log( text_space.trim());
let personalDate = {
  name: { first: "東片", second: "仗助"},
  addr: "杜王町",
  age: 16,
};
console.log( personalDate.name);
console.log( personalDate.name.first + " " + personalDate.name.second);
 /*let people = [
  {
  name: { first: "東片", second:"仗助"},
  addr: "杜王町",
  age: 16
  },
  {
  name: { first: "higashikata", second:"zyosuke"},
  addr: "morio-town",
  age: 20
  }
  ,
  {
  name: { first: "0283", second:"zyosuke"},
  addr: "morio-town",
  age: 19
  }
];
console.log( people[ 0].name.first);
people[ 1].stand = "crazy-dimond";
console.log( people[1].stand);
console.log( people[0].stand);
//console.log( people[2].stand);
//console.log( JSON.stringify( people));
let ges = JSON.stringify( people);
console.log (ges);
ges = JSON.parse( ges);
console.log( ges);
localStorage.setItem( "tsubasa",JSON.stringify( people));*/
//console.log( JSON.stringify(people)); 
let lpeople = localStorage.getItem( "tsubasa");
console.log( lpeople);
console.log( localStorage.getItem( "tsubasa"));
console.log( "people");
lpeople = JSON.parse( lpeople);
console.log( lpeople);
for ( let i = 0;  i < lpeople.length; i++)
console.log( lpeople[i].name);
console.log( lpeople.length);
const characterName = "zyotaro";
if( characterName == "zyoriin")
{
  console.log( "スタンドはストーンフリーです。");
}
else if ( characterName == "weather")
{
  console.log( "スタンドはウェザーリポートです。");
}
else 
{
  console.log( "スタンドは無しです。");
}
switch( characterName)
{
  case "zyoriin":
    console.log( "スタンドはストーンフリーです。"); 
    break;
  case "weather":
    console.log( "スタンドはウェザーリポートです。");
    break;
  default:
    console.log( "スタンドは無しです。");   
}

let users = [ ]
function addUser(  pName, pCountry)
//function addUser( 名前を入力, 国籍を入力)
{
  let user = {
    name: pName,
    country: pCountry,
    //name: 名前を入力,
    //country: 国籍を入力,
  };
  users.push( user);
}
function getUser( index)
{
  return users[ index];
}
//addUser( "pName", "pCountry");
console.log( users);
addUser( "tsubasa", "japan");
console.log( users);
addUser( "dio", "いんでぃあ");
console.log( users);
console.log( getUser( 0));
console.log( getUser( 1));



class UserManeger 
{
   users ;
   constructor( )    //👉変数として代入された値を順番に配列として保存(保存)👉 = [ ];
   {
     this.users = [ ];
   }  //👉 let users は181文と同義          
    
   addUser( pName, pCountry)
   {
    let user = {
      name: pName,
      country: pCountry,
    };
    this.users.push( user);
   }

   getUser( index)
   {
    return this.users[ index];
   }
}
let um = new UserManeger( );  //👉new = function
//UserManeger.addUser( "zyodio", "america");
um.addUser( "zyodio", "america");
um.addUser( "太郎" , "日本");
console.log( um);
console.log( um.getUser( 0));
