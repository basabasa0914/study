
function Insert( event)
{
  console.log( event);  　//⭐️
  //let check = document.getElementById( "check");

  let name = document.getElementById( "name");  
  let addr = document.getElementById( "addr");
  let age = document.getElementById( "age");
  let mail = document.getElementById( "mail");   
  
  let tr = document.createElement( "tr");　　    
  
  let tdCheck = document.createElement( "td");
  let tdID = document.createElement( "td");
  let tdName = document.createElement( "td");
  let tdAddr = document.createElement( "td");
  let tdAge = document.createElement( "td");
  let tdMail = document.createElement( "td");　　
  
  console.log(  document.getElementById( "users").children[ 0].children.length);　　　//⭐️
  
  let inputCheck = document.createElement( "input");  
  inputCheck.setAttribute( "type", "checkbox");
  let txtID = document.createTextNode( generateID( document.getElementById( "users").children[ 0].children));　　
  let txtName = document.createTextNode( name.value);
  let txtAddr = document.createTextNode( addr.value);
  let txtAge = document.createTextNode( age.value + "歳");
  let txtMail = document.createTextNode( mail.value);                              
  
  let aMail = document.createElement( "a");   
  aMail.setAttribute( "href", "mailto:");
  
  aMail.appendChild( txtMail); 

  tdCheck.appendChild( inputCheck); 
  tdID.appendChild( txtID);      
  tdName.appendChild( txtName);  
  tdAddr.appendChild( txtAddr);
  tdAge.appendChild( txtAge);
  tdMail.appendChild( aMail);    
  
  //aMail.setAttribute( "href", "mailto:" + event.target.mail.value);
  tr.appendChild( tdCheck);
  tr.appendChild( tdID);　　　
  tr.appendChild( tdName);
  tr.appendChild( tdAddr);
  tr.appendChild( tdAge);
  tr.appendChild( tdMail);   
  document.getElementById( "users").children[ 0].appendChild( tr);
  event.preventDefault( );    //👉これは絶対必須
}
document.getElementById( "insert").addEventListener( "click", Insert);


function generateID( children)　　 
{
  let ID = 0;
  for( i = 0; i < children.length; i++)
  {
    if( Number( children[i].children[ 1].textContent) != NaN)
    {
      if( Number(  children[i].children[ 1].textContent) > ID)
      {
        ID = Number(  children[i].children[ 1].textContent);
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

function Delete( event) 
{
  if( confirm( "選択されたデータを削除してもよいですか"))
  {
    let trs = document.getElementById( "users").children[ 0].children;
    let checked = false;
    for( i = 0; i < trs.length; i++)
    {
      if( trs[i].children[ 0].children.length > 0 && trs[i].children[ 0].children[ 0].checked == true)  //　[後者の条件の方] なぜ二個目もchiliren[ 0]になるの？
      {
        checked = true;
        trs[ i].remove( );
      }
      
    }
    if( checked == false) 　  //👉なぜ else　と書くと成り立たないのか？
    {
      alert( "削除するデータを一つ以上選択して下さい");
      //event.preventDefault( ); // 96行目を挿入しなかった場合、[ insertボタン]で入力された内容(<tr></tr>で作成された行の内容)まで消えてしまうのはなぜ？
      //return false;
    }
    // for( i = 0; i < trs.length; i++)
    // {
    //   if( trs[i].children[ 0].children.length > 0 && trs[i].children[ 0].children[ 0].checked == true)
    //   {
    //     trs[ i].remove( );
    //   }
    // }
  }
  event.preventDefault( );
}
document.getElementById( "delete").addEventListener( "click", Delete);