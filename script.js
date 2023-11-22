var istatus= document.getElementById("follow")
var check=0

istatus.addEventListener('click',function(){
    if(check==0){
        istatus.innerHTML="followed"
        istatus.style.backgroundColor="yellow"
        check=1
    

    }
    else{
        istatus.innerHTML="Follow+"
        istatus.style.backgroundColor="red"
        check=0
    
    }
  
})


