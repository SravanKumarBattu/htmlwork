

function calculate()
{
    var date=new Date(document.getElementById('dob').value);
    var cur=new Date();
    var diffDays = parseInt((cur - date) / (1000 * 60 * 60 * 24), 10); 
    var years=Math.floor(diffDays/(30*12));
    document.getElementById('Age').innerHTML="Your Age is: "+years;
}


function changebg()
{
    document.getElementById('bgc').style.backgroundColor='green';
    document.getElementById('bgc').style.width='300px'
}

function o(){
    window.open();
}

function g(){
    document.getElementById('bro').innerHTML='Application Name is '+navigator.appName;
}

function add(){
    var fruit=document.getElementById('add').value;
    var arr=new Array();
    arr.push(fruit);
    document.getElementById('fru').innerHTML=arr;
}