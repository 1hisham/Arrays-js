 function validEmail(email){
  for(let i = 0; i < email.length; i ++)
  if(email[i] == "@" && email[email.length -4] == "."  && email[email.length -3] == "c"   && email[email.length -2] == "o" &&email[email.length -1] == "m" ){
    return true 
  }
return false
 }
 
 console.log(validEmail("user@domain.com"));
 