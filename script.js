const username=document.getElementById('username')
const mail=document.getElementById('email')
const password=document.getElementById('password')
const repassword=document.getElementById('repassword')
const form=document.querySelector('#form')

form.addEventListener('submit',e=>{
    e.preventDefault(); 
    contentvalidation();
})

const errormsg=(element,msg)=>{
    let mainelement=element.parentElement;
    let actualelement=mainelement.querySelector('.error-msg')    
    actualelement.innerText=msg;
    element.classList.add('error')
    element.classList.remove('success')  
}
const successmsg=(element)=>{
const baseelement=element.parentElement;
const insideelement=baseelement.querySelector('.error-msg')
insideelement.innerText=""
element.classList.add("success")
element.classList.remove("error")

    


}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


const contentvalidation=()=> {

    const usernamevalue=username.value.trim()
    const mailvalue=mail.value.trim();
    const passwordvalue=password.value.trim();
    const repasswordvalue=repassword.value.trim();

    
    
if(usernamevalue=="")
{
    errormsg(username,"user name required")
}
else{
    successmsg(username)
    
}
if(mailvalue==="")
{
    errormsg(mail,"Email requierd")
}
else if(!validateEmail(mailvalue))
{
errormsg(mail,"enter Valid email")
}
else{

    successmsg(mail)
}


if(passwordvalue==="")
{
    errormsg(password,"Enter a password")
}
else if(passwordvalue.length < 8)
{
    errormsg(password,"password must be 8 charachters")
}

else{
    successmsg(password)
}
if(repasswordvalue==="")
{
    errormsg(repassword,"Enter confirm password")
}
else if(repasswordvalue===passwordvalue ){
    successmsg(repassword)
    
}
else{
    errormsg(repassword,"confirm password not same")
}
}