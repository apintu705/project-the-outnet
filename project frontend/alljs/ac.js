function add(){
    let a=document.createElement("h2");
    a.textContent="Add Shipping Address"
    let b=document.createElement("p");
    b.textContent="ENTER FULL ADDRESS";
    let x=document.createElement("br")
    let c=document.createElement("input");
    c.setAttribute("id", "addvalue")
    c.setAttribute("class", "addinp")
    c.type="text";
    c.placeholder="Enter Full Address"

    let m=document.createElement("p");
    m.textContent="CITY";
    let mm=document.createElement("input");
    mm.setAttribute("id", "cityvalue")
    mm.setAttribute("class", "addinp")
    mm.type="text";
    mm.placeholder="Enter CITY NAME"


    let n=document.createElement("p");
    n.textContent="PINCODE";
    let nn=document.createElement("input");
    nn.setAttribute("id", "pinvalue")
    nn.setAttribute("class", "addinp")
    nn.type="text";
    nn.placeholder="Enter pincode"

    let o=document.createElement("p");
 o.textContent="MOBILE NO";
    let oo=document.createElement("input");
     oo.setAttribute("id", "mobilevalue")
     oo.setAttribute("class", "addinp")
     oo.type="text";
     oo.placeholder="Enter mobile no"

    let addbtn=document.createElement("button");
    
     addbtn.setAttribute("class","acbtn")
     addbtn.onclick=async function(){

        try{
            let paymentdata={
            address:document.getElementById("addvalue").value,
            city:document.getElementById("cityvalue").value,
            pincode:document.getElementById("pinvalue").value,
            mobile:document.getElementById("mobilevalue").value
            }
            localStorage.setItem("addresscity",document.getElementById("cityvalue").value)
            paymentdata=JSON.stringify(paymentdata);
            
            let re=`http://localhost:2445/address`

            let ret=await fetch(re,{
                method:"post",
                 body:paymentdata,
                 headers:{
                     "content-type":"application/json"
                 },
                
            })
            
            
            document.getElementById("sheeping").innerHTML=""
        }
        catch(e){
            alert ("please enter the credentials properly")
            console.log(e)
            document.getElementById("sheeping").innerHTML=""
        }
     }
     
     addbtn.textContent="CONTINUE"

    document.getElementById("sheeping").append(a,b,c,m,mm,n,nn,o,oo,x,addbtn)
}
function acc(){
    let a=document.createElement("h2");
a.textContent="Add payment details"
let b=document.createElement("p");
b.textContent="Enter name as on the card";

let c=document.createElement("input");
c.setAttribute("id", "pnamevalue")
c.setAttribute("class", "addinp")
c.type="text";
c.placeholder="enter name"

let m=document.createElement("p");
m.textContent="card no";
let mm=document.createElement("input");
mm.setAttribute("id", "pcardvalue")
mm.setAttribute("class", "addinp")
mm.type="Number";
mm.placeholder="Enter card no"


let n=document.createElement("p");
n.textContent="ccv";
let nn=document.createElement("input");
nn.setAttribute("id", "ccvvalue")
nn.setAttribute("class", "addinp")
nn.type="text";
nn.placeholder="Enter ccv"

let o=document.createElement("p");
o.textContent="password";
let oo=document.createElement("input");
 oo.setAttribute("id", "ppasswordevalue")
 oo.setAttribute("class", "addinp")
 oo.type="text";
 oo.placeholder="Enter password correctly"
    let x=document.createElement("br")
 let addbtn=document.createElement("button");
 addbtn.setAttribute("class","acbtn")
 addbtn.onclick=async function(){

    try{
        let useremail=localStorage.getItem("useremail")
        let paymentdata={
        name:document.getElementById("pnamevalue").value,
        cardno:document.getElementById("pcardvalue").value,
        ccv:document.getElementById("ccvvalue").value,
        password:document.getElementById("ppasswordevalue").value,
        email:useremail
        }
        paymentdata=JSON.stringify(paymentdata);
        localStorage.setItem("cardholdername",document.getElementById("pcardvalue").value)
        
        let re=`http://localhost:2445/payment`

        await fetch(re,{
            method:"post",
             body:paymentdata,
             headers:{
                 "content-type":"application/json"
             },
            
        })
       
        document.getElementById("payment").innerHTML=""
    }
    catch(e){
        alert ("please enter the credentials properly")
        console.log(e)
    }
 }
 addbtn.textContent="CONTINUE"

document.getElementById("payment").append(a,b,c,m,mm,n,nn,o,oo,x,addbtn)
}
export {add,acc}