/**
 * Created by Administrator on 2018/9/10.
 */
window.onload=function () {
    let tabel=document.querySelector("tbody");
    let add=document.querySelector(".add");
    let student=[
        {id:0}
    ];
    localStorage.setItem("studentInfo",JSON.stringify(student));
    let data=JSON.parse(localStorage.getItem("studentInfo"));

    data.forEach((element)=>{
        createTr(element);
    })


    //事件委派
    tabel.onclick=function (e) {
        let element=e.target; //获取当前元素
        // if(element.nodeName=="TD"&&element.className!="del"){
        //     let oldv=element.innerHTML;//保存当前值
        //     element.innerHTML="";//清空
        //     let inputs=document.createElement("input");//创建input
        //     inputs.value=oldv;//value
        //     element.appendChild(inputs);//插入input
        //     inputs.onblur=function () {  //失去焦点
        //         let newv=this.value;
        //         element.removeChild(inputs);//移除input
        //         element.innerHTML=newv;//保存新的值
        //     }
        // }
        // else
        if(element.nodeName="TD"){
            let trs=element.parentNode.parentNode;//寻找父元素tr
            let ids=trs.id;
            tabel.removeChild(trs);//从tbody中删除一条tr内容
            data=data.filter((v=>v.id!=ids));
            localStorage.setItem("studentInfo",JSON.stringify(data));
        }
    }

//    渲染数据
    function createTr(obj) {
        let str=`
               <!--<td class="del">-->
                  <!---->
               <!--</td>-->
               </tr>`;
        tabel.innerHTML+=str;
    }
}