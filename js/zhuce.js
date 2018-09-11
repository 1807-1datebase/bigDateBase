
window.onload=function () {


  let close=document.querySelectorAll("h6")[0];
  let concent=document.querySelectorAll(".zcy_kuang")[0];
  let btn=document.querySelectorAll(".login")[0];
  btn.onclick=function () {
    concent.style.display="block";
  }
   close.onclick=function () {
     concent.style.display="none";
 }
}