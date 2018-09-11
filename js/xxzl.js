/*
* @Author: Dell
* @Date:   2018-09-08 14:55:57
* @Last Modified by:   Dell
* @Last Modified time: 2018-09-11 13:57:33
*/

window.onload=function(){
    // 学习资料
     let lis1=document.querySelectorAll(".Pj-lei");
    let son1=document.querySelectorAll(".Pj_nr");
    let sj=document.querySelectorAll(".Pj-lei i");
    let spark=document.querySelectorAll(".Pj_spark .lb1");
    // let active2=document.querySelectorAll(".box-pj .lis1 a");
    console.log(lis1,son1,sj,spark);
    sj[0].style.color="#4381e6";
    son1[0].style.display="block";
    lis1[0].style.color="#4381e6";
    for (let i = 0; i < lis1.length; i++) {
        lis1[i].onclick=function(){
            for (let j= 0; j < son1.length; j++) {
                son1[j].style.display="none";
                lis1[j].classList.remove("Pj_nav_active2");
                lis1[j].style.color="#7f7f7f";
                sj[j].style.color="#fff";

            }
            son1[i].style.display="block";
            lis1[i].classList.add("Pj_nav_active2");
            lis1[i].style.color="#4381e6";
            sj[i].style.color="#4381e6";

        }

}


}