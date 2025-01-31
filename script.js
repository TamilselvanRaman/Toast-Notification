
let toastBox = document.getElementById("toastBox");

let SuccessMsg = ' <i class="fa-solid fa-circle-check"></i> Successfully submitted';
let ErrorMsg = ' <i class="fa-solid fa-xmark"></i>  Please fix  the error';
let InvalidMsg = ' <i class="fa-solid fa-exclamation"></i> Invalid input, check again ';
let input = /Please/;
let aInput = /Invalid/;
function showToast(msg){

let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = msg;
   toastBox.appendChild(toast);

   console.log(msg)
   if(msg.includes('fix')){
    console.log("Error")
    toast.classList.add('Error');
}
else if(msg.includes('input')){
       console.log("Error");
       toast.classList.add('invalid');;
   }
   setTimeout(()=>{
    toast.remove();
   },4000)
}