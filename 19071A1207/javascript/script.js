function add(){
let a =document.getElementById("a").value;
let b=document.getElementById("b").value;

let c=parseInt(a)+parseInt(b);
document.getElementById("added").innerHTML=c;
}

function check()
{
    let a=document.getElementById("prime").value;
    let b=parseInt(a);
    if(b==2)
    {
        document.getElementById("primeCheck").innerHTML="False";
    }
    else if(b&1)
    {
        document.getElementById("primeCheck").innerHTML="True";
    }
    else{
        document.getElementById("primeCheck").innerHTML="Fasle";
    }
}

function factorial()
{
    let a=parseInt(document.getElementById("fact").value);
     if(a<0)
     {
         document.write("Enter Valid Input");
     }
     if(a==0)
     {
         document.getElementById("factorialNumber").innerHTML=1;
     }
     
     let i=1;
     let c=1;
     for(i=1;i<=a;i++)
     {
            c=a*i;
     }
         document.getElementById("factorialNumber").innerHTML=c;
     
}

function bigger(){
    let x=parseInt(document.getElementById("X").value);
    let y=parseInt(document.getElementById("Y").value);
    let z=parseInt(document.getElementById("Z").value);
    
    if(x>y & x>z)
    {
        document.getElementById("big").innerHTML=x;
    }
    else if(y>x & y>z)
    {
        document.getElementById("big").innerHTML=y;
    }
    else{
        document.getElementById("big").innerHTML=z;
    }
}