function table()
{
    if(document.getElementById('num').value.trim()== "")
{
alert('Textbox should not be blank');
}
    let a=document.getElementById('num').value;
    for(let i=1;i<=10;i++)
    {
         let res=a*i;
        // document.getElementById('multi').innerHTML=a+" *"+i+" ="+res+"<br>";
        
    document.write(`${a} * ${i} = ${res}`+'<br>');
    // console.log(`${a} * ${i} = ${res}`);
    }

}


function  transform(){
    if(document.getElementById('word').value.trim()== "")
    {
    alert('Textbox should not be blank');
    }
    let b=document.getElementById('word').value;
    
    let oneToTwenty = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
    'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let tenth = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if(b.toString().length > 7) return myDiv.innerHTML = 'overlimit' ;
    console.log(b);
    //let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  let num = ('0000000'+ b).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if(!num) return;

    let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}` )+' million ' : ''; 
  
    outputText +=num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}` )+'hundred ' : ''; 
    outputText +=num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`)+' thousand ' : ''; 
    outputText +=num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) +'hundred ': ''; 
    outputText +=num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : ''; 

    document.getElementById('words').innerHTML=outputText;
}

function validate(){
    if(document.getElementById('id').value.trim()== "")
    {
    alert('Textbox should not be blank');
    }
    if(document.getElementById('pass').value.trim()== "")
{
alert('Textbox should not be blank');
}
    let a=document.getElementById('id').value;
    let b=document.getElementById('pass').value;

    if(a=='19071A1207' && b=='sky')
    {
        document.write("Logged In Successfully");
    }
    else{
        document.writeln("Failed to Login");
    }
}