
// 当页面加载完成时执行js代码
window.onload=function(){
    // 获取页面中的input元素
    let user=document.getElementsByClassName("user")[0];
    let pass=document.getElementsByClassName("password")[0];
    let tishizi1=document.querySelectorAll(".zhanghao p1")[0];
    let tishifuhao1=document.querySelectorAll(".zhanghao p2")[0];
    let tishizi2=document.querySelectorAll(".mima p1")[0];
    let tishifuhao2=document.querySelectorAll(".mima p2")[0];
    let duigou1=document.querySelector(".duigou1");
    let duigou2=document.querySelector(".duigou2");
    console.log(duigou1);
    // 获取提交按钮
    let btn=document.querySelectorAll(".login")[0];
    // 获取关闭按钮
    // let close=document.querySelectorAll("p2")[0];
    console.log(user.value,pass.value);
    btn .onclick=function(){
        if(user.value=="zcy"  &&  pass.value=="123456"){
            window.open("index.html");
        }else if(user.value!="zcy"  &&  pass.value=="123456"){
            tishizi1.style.display="block";
            tishifuhao1.style.display="block";
            duigou1.style.display="none";
            duigou2.style.display="block";
            tishifuhao1.onclick=function () {
               user.value=null;
                tishizi1.style.display="none";
                tishifuhao1.style.display="none";
            }
        }else if(user.value=="zcy"  &&  pass!="123456"){
            tishizi2.style.display="block";
            tishifuhao2.style.display="block";
            tishizi1.style.display="none";
            tishifuhao1.style.display="none";
            duigou1.style.display="block";
            tishifuhao2.onclick=function () {
                pass.value=null;
                tishizi2.style.display="none";
                tishifuhao2.style.display="none";
            }

        }else{

        }
    }
}