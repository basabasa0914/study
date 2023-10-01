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

function CheckCheckBox(/*a*/)  //👉👉functionに与えられた引数で、変数名を定義する事はできない。(※👉できるのは、変数に格納される値 or callback関数)
{
  let trs = document.getElementById( "users").children[ 0].children;
 let /*a*/ checked = [ ];  //👉👉同じ名前(変数名)の箱(変数)は宣言する事ができない。
  for( i = 0; i < trs.length; i++)
  {
    if( trs[i].children[ 0].children.length > 0 && trs[i].children[ 0].children[ 0]./*a*/ checked == true)  //　[後者の条件の方] なぜ二個目もchiliren[ 0]になるの？
    {
     /* a*/ checked.push( i - 1);
      //data.splice( i - 1, 1);
    }
  }

  if(  /*a*/checked.length == 0)   //👉if( checked == false)と同義
  {
    alert( "削除するデータを一つ以上選択して下さい");
    //event.preventDefault( ); // 96行目を挿入しなかった場合、[ insertボタン]で入力された内容(<tr></tr>で作成された行の内容)まで消えてしまうのはなぜ？
    event.preventDefault( );
    return false;　　//👉この行があることで、追加(insertボタン押入)したすべてのデータが消える。
  }
  return /*a*/ checked;
}

function Insert( event)
{
  console.log( event);  　//⭐️
 

  let name = document.getElementById( "name");  
  let addr = document.getElementById( "addr");
  let age = document.getElementById( "age");
  let mail = document.getElementById( "mail");   
  
  //let txtID = document.createTextNode( generateID( document.getElementById( "users").children[ 0].children));　　

  const record =  {
    "id": generateID( ),  //👉瞬間移動の仕方　コマンドキーを押しながら、ファンクション名をクリック。⌘
    "name": name.value,
    "addr": addr.value,
    "age": age.value,
    "mail": mail.value
  };
  data.push( record);
  display();  　//なぜここにdisplay();の記述が必要なのか？　なぜ164行目だけではダメなのか?
  event.preventDefault( );    //👉これは絶対必須
}
document.getElementById( "insert").addEventListener( "click", Insert);

/**
 * IDを生成する
 * @returns IDの最大値+1
 */
function generateID( )　　 //👉コントロールキーとマイナスキーを押す（前の位置に戻る）
{
  let ID = 0;
  for( const record of data)　　
  {
    if( record.id > ID)
    {
      ID = record.id;
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
  if( confirm( "選択されたデータを削除してもよいですか") == false)
  {
    event.preventDefault( );
    return;  //👉二択の選択肢で"キャンセル"と答えると、追加(insertボタン押入)したすべてのデータが消える。 
  }
  let Check = CheckCheckBox( /*checked*/);

  // let trs = document.getElementById( "users").children[ 0].children;
  // let checked = [ ];
  // for( i = 0; i < trs.length; i++)
  // {
  //   if( trs[i].children[ 0].children.length > 0 && trs[i].children[ 0].children[ 0].checked == true)  //　[後者の条件の方] なぜ二個目もchiliren[ 0]になるの？
  //   {
  //     checked.push( i - 1);
  //     //data.splice( i - 1, 1);
  //   }
  // }

  // if( checked.length == 0)   //👉if( checked == false)と同義
  // {
  //   alert( "削除するデータを一つ以上選択して下さい");
  //   //event.preventDefault( ); // 96行目を挿入しなかった場合、[ insertボタン]で入力された内容(<tr></tr>で作成された行の内容)まで消えてしまうのはなぜ？
  //   event.preventDefault( );
  //   return false;　　//👉この行があることで、追加(insertボタン押入)したすべてのデータが消える。
  // }

  // for( i = 0; i < trs.length; i++)
  // {
  //   if( trs[i].children[ 0].children.length > 0 && trs[i].children[ 0].children[ 0].checked == true)
  //   {
  //     trs[ i].remove( );
  //   }
  // }

  for( let i = data.length - 1; i >= 0; i--)  //👉i = 2 〜 0の中で回る
  //for( let i= 0; i < data.length; i++)  //👉この書き方だと、一番IDの数が大きいチェックボックスしか削除されない。(※または、チェックされた項目が１個だけの時)
  {
    if( Check[ Check.length - 1] == i)  //👉checked.length ⏩ 3 の場合は( 0,1,2)が入る可能性あり,checked[ 0]はchecked[ ]の配列の1番目に入っている値。
    {
      data.splice( i, 1);
      Check.splice( Check.length - 1, 1);
    }
  }
  display( );
  
  event.preventDefault( );
}
document.getElementById( "delete").addEventListener( "click", Delete);


/**
 * データの表示
 */
function display( )
{
  const users = document.getElementById("users");   
  const head = users.children[0].children[0];   //👉"firstElementChild"と"children[0]"は同義
  users.children[0].innerHTML = "";   //👉テーブルの子要素を全削除する
  users.children[0].appendChild( head);
  for( const record of data)　　
  {
    // console.log( record);
    // console.log( record.name);
    let tr = document.createElement( "tr");　　    
  
    let tdCheck = document.createElement( "td");
    let tdID = document.createElement( "td");
    let tdName = document.createElement( "td");
    let tdAddr = document.createElement( "td");
    let tdAge = document.createElement( "td");
    let tdMail = document.createElement( "td");　　
    
    console.log(  document.getElementById( "users").children[ 0].children.length);　//　⭐️この部分は、前回"'click'event"発動分までの,<tr>列の総合計数を表記している。
    
    let inputCheck = document.createElement( "input");  
    inputCheck.setAttribute( "type", "checkbox");
    let txtID = document.createTextNode( record.id);　　　//👉👉この箇所が"insert"の時と違う。
    let txtName = document.createTextNode( record.name);
    let txtAddr = document.createTextNode( record.addr);
    let txtAge = document.createTextNode( record.age + "歳");
    let txtMail = document.createTextNode( record.mail);                              
    
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
  const insertBtn = document.getElementById( "insert");

  const deleteBtn = document.getElementById( "delete");

  const searchBtn = document.getElementById( "search");
  

  if( insertBtn.disabled === false) 
  {
    insertBtn.disabled = true;
    deleteBtn.disabled = true;
    searchBtn.disabled = true;

  }
  else 
  {
    insertBtn.disabled = false;
    deleteBtn.disabled = false;
    searchBtn.disabled = false;

  }
/**
 * チェックボックス確認処理
 */
  //CheckCheckBox( event)
  display();  　
  event.preventDefault( );    //👉これは絶対必須
}
document.getElementById( "update").addEventListener( "click", Update);
