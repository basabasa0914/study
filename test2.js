let data = [ {
  "id": 1,
  "name": "tsubasa",
  "addr": "amagasaki",
  "age": 22,
  "mail": ".@tsubasa"
},
{
  "id": 2,
  "name": "zyosuke",
  "addr": "morio",
  "age": 16,
  "mail": ".@zyosuke"
}];

let updateMode = false;

function CheckCheckBox()  //👉👉functionに与えられた引数で、変数名を定義する事はできない。(※👉できるのは、変数に格納される値 or callback関数)
{
  let trs = document.getElementById( "users").children[ 0].children;
  let checked = [ ];  //👉👉同じ名前(変数名)の箱(変数)は宣言する事ができない。
  for( i = 0; i < trs.length; i++)
  {
    if( trs[i].children[ 0].children.length > 0 && trs[i].children[ 0].children[ 0].checked == true) 
    {
      checked.push( i - 1);
    }
  } 

  if( checked.length == 0)   //👉if( checked == false)と同義
  {
    alert( "データを一つ以上選択して下さい");
    //event.preventDefault( );
    return checked;
  }
  return checked;
}

function Insert( event)
{
  console.log( event);  

  let name = document.getElementById( "name");  
  let addr = document.getElementById( "addr");
  let age = document.getElementById( "age");
  let mail = document.getElementById( "mail");   
  
  const record =  {
    "id": generateID( ),  
    "name": name.value,
    "addr": addr.value,
    "age": age.value,
    "mail": mail.value
  };
  data.push( record);
  display(); 
  event.preventDefault( );    //👉これは絶対必須
}
document.getElementById( "insert").addEventListener( "click", Insert);

/**
 * IDを生成する
 * @returns IDの最大値+1
 */
function generateID( )   
{
  let ID = 0;
  for( const record of data)
  {
    if( record.id > ID)
    {
      ID = record.id;
    }   
  }
  return ID + 1;
}
 
/*👉👉 //trs[i]の[i]の中には "0"が代入されている。
 (trs[i].children[ 0].textContent) で table border要素内 👉 [ ID 名前	住所	年齢	メール ] の "ID"という文字列を取得
取得した"ID"という文字列に対して、Number( )コンストラクタを用いたが数値に変える事はできず、"NaN"となる。
結果、IDの値は"0"となり return "0" + 1;となる。*/


function Delete( event) 
{
  if( confirm( "選択されたデータを削除してもよいですか") == false)
  {
    event.preventDefault( );
    return;   
  }
  let deleteChecked = CheckCheckBox( );

  for( let i = data.length - 1; i >= 0; i--)  
  //for( let i= 0; i < data.length; i++)  //👉この書き方だと、一番IDの数が大きいチェックボックスしか削除されない。(※または、チェックされた項目が１個だけの時)
  {
    if( deleteChecked[ deleteChecked.length - 1] == i)  
    {
      data.splice( i, 1);
      deleteChecked.splice( deleteChecked.length - 1, 1);
    }
  }
  display( );
  
  event.preventDefault( );
}
document.getElementById( "delete").addEventListener( "click", Delete);


/**
 * データの表示
 */
function display( checked = [ ], hits = [ ])
{
  const users = document.getElementById("users");   
  const head = users.children[0].children[0];   
  users.children[0].innerHTML = "";   //👉テーブルの子要素を全削除する
  users.children[0].appendChild( head);
  
  for( const record of data)
  {
    let tr = document.createElement( "tr");    
  
    let tdCheck = document.createElement( "td");
    let tdID = document.createElement( "td");
    let tdName = document.createElement( "td");
    let tdAddr = document.createElement( "td");
    let tdAge = document.createElement( "td");
    let tdMail = document.createElement( "td");
    
    console.log( checked);     

    let inputCheck = document.createElement( "input");
    inputCheck.setAttribute( "type", "checkbox");
    /*if( checked.length > 0)
    {
      inputCheck.disabled = true;
    }*/
    
    /*
      更新モード開始の場合は、inputCheckを無効。 更新モード開始ではない場合は、inputCheckを有効化する。
    */
    inputCheck.disabled = checked.length > 0;  // = よりも > の方が演算の優先度が高い　⭐️

    let txtID = document.createTextNode( record.id);   

    tdCheck.appendChild( inputCheck); 
    tdID.appendChild( txtID);

    tr.appendChild( tdCheck);
    tr.appendChild( tdID);

     /*includesメソッドの使用(理由)👉 "if(checked[checked.length -1] == record.id)"という書き方(＝前回の書き方)をすると、
       配列における、インデックス番号の最大値に対応する"value値"を常に取り出してくる事になる為*/
    
    if(checked.includes(record.id -1,0) == true) //⭐️ 
    {
      inputCheck.checked = true;
     
      let inputName = document.createElement( "input");
      inputName.setAttribute( "id", "name" + ( record.id - 1)); 
      inputName.setAttribute( "type", "text");
      inputName.value = record.name;  //👀

      let inputAddr = document.createElement( "input");
      inputAddr.setAttribute( "id", "addr" + ( record.id - 1));
      inputAddr.setAttribute( "type", "text");
      inputAddr.value = record.addr;  //👀

      let inputAge = document.createElement( "input");
      inputAge.setAttribute( "id", "age" + ( record.id - 1));
      inputAge.setAttribute( "type", "number");
      inputAge.max = 150;
      inputAge.min = 0;
      inputAge.value = record.age;  //👀

      let inputMail = document.createElement( "input");
      inputMail.setAttribute( "id", "mail" + ( record.id - 1));
      inputMail.setAttribute( "type", "email");
      inputMail.value = record.mail;  //👀

      tdName.appendChild( inputName);  
      tdAddr.appendChild( inputAddr);
      tdAge.appendChild( inputAge);
      tdAge.appendChild( document.createTextNode( "歳"));   //👀
      tdMail.appendChild( inputMail);  //👉前回から変更された箇所  
    }     //⭐️
     

    else if(checked.includes(record.id -1,0) == false || hits == [ ] || hits.includes( record.id))
    {
      let txtName = document.createTextNode( record.name);
      let txtAddr = document.createTextNode( record.addr);
      let txtAge = document.createTextNode( record.age + "歳");
      let txtMail = document.createTextNode( record.mail);                              
      
      let aMail = document.createElement( "a");   
      aMail.setAttribute( "href", "mailto:");
      
      aMail.appendChild( txtMail); 
    
      tdName.appendChild( txtName);  
      tdAddr.appendChild( txtAddr);
      tdAge.appendChild( txtAge);
      tdMail.appendChild( aMail);    
    }
    
    tr.appendChild( tdName);
    tr.appendChild( tdAddr);
    tr.appendChild( tdAge);
    tr.appendChild( tdMail);   
    document.getElementById( "users").children[ 0].appendChild( tr);  
  }
}
  display(); 


/**
 * 更新ボタン
 * @param {} event 
 */
function Update( event)
{
  console.log( event);  

  const name = document.getElementById( "name");     //👉定義部分 始
  const addr = document.getElementById( "addr");
  const age = document.getElementById( "age");
  const mail = document.getElementById( "mail"); 

  const insertBtn = document.getElementById( "insert");
  const deleteBtn = document.getElementById( "delete");
  const searchBtn = document.getElementById( "search");

  let updateCheckeds = CheckCheckBox( );     //👉定義部分 終   　❌再復習が必要

  if( updateCheckeds.length === 0)    //❌再復習が必要
  {
    event.preventDefault( );
    return;
  }                                   //❌再復習が必要

  if( updateMode === false) 
  {
    updateMode = true;

    name.value = null;
    addr.value = null;
    age.value = null;
    mail.value = null;

    name.disabled = true;
    addr.disabled = true;
    age.disabled = true;
    mail.disabled = true;

    insertBtn.disabled = true;
    deleteBtn.disabled = true;
    searchBtn.disabled = true;

    display( updateCheckeds);
  }

  else           //❌再復習が必要
  {
    if( confirm( "選択されたデータを更新してもよいですか") == false)
    {
      event.preventDefault( );
      return;   
    }

    for( let updateChecked of updateCheckeds)  
    {
     data[ updateChecked].name = document.getElementById( "name" + updateChecked).value;

     data[ updateChecked].addr = document.getElementById( "addr" + updateChecked).value;

     data[ updateChecked].age = document.getElementById( "age" + updateChecked).value;

     data[ updateChecked].mail = document.getElementById( "mail" + updateChecked).value;
    }

    updateMode = false;

    name.disabled = false;
    addr.disabled = false;
    age.disabled = false;
    mail.disabled = false;

    insertBtn.disabled = false;
    deleteBtn.disabled = false;
    searchBtn.disabled = false;

    display( );
  }              //❌再復習が必要

  event.preventDefault( );    //👉これは絶対必須
}
document.getElementById( "update").addEventListener( "click", Update);


/**
 * 検索ボタン
 * @param {} event 
 */
function Search( event)
{
  const name = document.getElementById( "name").value;     //👉定義部分　始
  const addr = document.getElementById( "addr").value;
  const age = document.getElementById( "age").value;
  const mail = document.getElementById( "mail").value; 
                                                           
  hits = [ ];                                              //👉定義部分　終                                     

  for( const record of data)
  {
    if( name != "" && record.name.includes( name))
    {
      hits.push( record.id);
      continue;
    }

    if( addr != "" && record.addr.includes( addr))
    {
      hits.push( record.id);
      continue;
    }
    if( age != "" && record.age == age)
    {
      hits.push( record.id);
      continue;
    }
    if( mail != "" && record.mail.includes( mail))
    {
      hits.push( record.id);
      continue;
    }
  }
  display( [ ], hits);
  event.preventDefault( );    //👉これは絶対必須
}
document.getElementById( "search").addEventListener( "click", Search);