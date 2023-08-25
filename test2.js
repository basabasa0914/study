
function SubmitEventFunc( event)
{
  console.log( event);  　//⭐️
  //let check = document.getElementById( "check");
  let name = document.getElementById( "name");
  let addr = document.getElementById( "addr");
  let age = document.getElementById( "age");
  let mail = document.getElementById( "mail");
  let tr = document.createElement( "tr");　　    //👉ステップ１開始
  let tdCheck = document.createElement( "td");
  let tdID = document.createElement( "td");
  let tdName = document.createElement( "td");
  let tdAddr = document.createElement( "td");
  let tdAge = document.createElement( "td");
  let tdMail = document.createElement( "td");　　//👉ステップ１終了
  console.log(  document.getElementById( "users").children.length);　　　//⭐️
  let inputCheck = document.createElement( "input");
  inputCheck.setAttribute( "type", "checkbox");
  let txtID = document.createTextNode( generateID( document.getElementById( "users").children));　　//👉ステップ２開始　　👇👇
  let txtName = document.createTextNode( name.value);
  let txtAddr = document.createTextNode( addr.value);
  let txtAge = document.createTextNode( age.value + "歳");
  let txtMail = document.createTextNode( mail.value);                              　　//👉ステップ２終了
  let aMail = document.createElement( "a");   //👉ステップ３開始
  aMail.setAttribute( "href", "mailto:");
  aMail.appendChild( txtMail);  //👉ステップ３終了
  tdCheck.appendChild( inputCheck); 
  tdID.appendChild( txtID);      //👉ステップ４開始
  tdName.appendChild( txtName);  
  tdAddr.appendChild( txtAddr);
  tdAge.appendChild( txtAge);
  tdMail.appendChild( aMail);    //👉ステップ４終了
  //aMail.setAttribute( "href", "mailto:" + event.target.mail.value);
  tr.appendChild( tdCheck);
  tr.appendChild( tdID);　　　//👉ステップ５開始
  tr.appendChild( tdName);
  tr.appendChild( tdAddr);
  tr.appendChild( tdAge);
  tr.appendChild( tdMail);   //👉ステップ５終了
  document.getElementById( "users").appendChild( tr);
  event.preventDefault( );    //👉これは絶対必須
}
document.getElementById( "insert").addEventListener( "click", SubmitEventFunc);


function generateID( children)　　 //👆👆
{
  let ID = 0;
  for( i = 0; i < children.length; i++)
  {
    if( Number( children[i].children[ 1].textContent) != NaN)
    {
      if( Number( children[i].children[ 1].textContent) > ID)
      {
        ID = Number( children[i].children[ 1].textContent);
      }
    }
    //console.log( "ID "+ children[i].children[ 0].textContent + i);
  }
  return ID + 1;
}
  










/*53行目の (children[i].children[ 0].textContent) で table border要素内 👉 [ ID 名前	住所	年齢	メール ] の "ID"という文字列を取得

  取得した"ID"という文字列に対して、Number( )コンストラクタを用いたが数値に変える事はできず、"NaN"となる。

  ※children[i]の[i]の中には "0"が代入されている。
  
  結果、IDの値は"0"となり return "0" + 1;となる。
  
  5行目から42行目までの工程が全部なされなければ、 「.children」は「document.getElementById( "users")」の子要素としては見なされて無い。*/







 

//25・33行目 👉　<td><a></a></td>の要素が作成

//👉 26と34行目は同義