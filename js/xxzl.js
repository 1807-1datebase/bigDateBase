/*
* @Author: Dell
* @Date:   2018-09-08 14:55:57
* @Last Modified by:   Dell
* @Last Modified time: 2018-09-10 15:12:33
*/

window.onload=function(){
	// 学习资料
	 let lis1=document.querySelectorAll(".Pj-lei");
    let son1=document.querySelectorAll(".Pj_nr");
    let sj=document.querySelectorAll(".Pj-lei i");
    // let active2=document.querySelectorAll(".box-pj .lis1 a");
    // console.log(lis1,son1,sj);
    son1[0].style.display="block";
    // sj[0].style.display="block";
    for (let i = 0; i < lis1.length; i++) {
        lis1[i].onmouseenter=function(){
            for (let j= 0; j < son1.length; j++) {
                son1[j].style.display="none";
                lis1[j].classList.remove("Pj_nav_active2");


                
            }
            son1[i].style.display="block";
            lis1[i].classList.add("Pj_nav_active2");
        }
}


}