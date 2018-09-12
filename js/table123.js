let table = document.querySelector(".tb");
let inputs = document.querySelectorAll(".loadname input");
console.log(inputs);
// let main = [
//     {id:1,name: "张三", sex: "男", age: "18", classes: "WUIF18", number: "001",},
//     {id:2,name: "张三", sex: "男", age: "18", classes: "WUIF18", number: "001",},
//     {id:3,name: "张三", sex: "男", age: "18", classes: "WUIF18", number: "001",},
//     {id:4,name: "张三", sex: "男", age: "18", classes: "WUIF18", number: "001",},
//     {id:5,name: "张三", sex: "男", age: "18", classes: "WUIF18", number: "001",},
// ];
// //存入本地库
// localStorage.studentinfo=JSON.stringify(main);
let data = JSON.parse(localStorage.studentinfo);
//默认行
data.forEach(element => createtr(element));
//添加行
save.onclick = function () {


    let obj = {id:"",load:inputs[0].value,name:inputs[1].value,number:inputs[2].value,
        sex:inputs[3].value,
        zhuanye:inputs[4].value,
        yuan:inputs[5].value,
        classes:inputs[6].value,};
    obj.id = data.length + 1;
    console.log(data.push(obj));
    createtr(obj);
    localStorage.studentinfo = JSON.stringify(data);
    inputs.onblur = function () {
        let newv = inputs.value;
        element.removeChild(inputs);
        element.innerHTML = newv;
    }
    form.style.display = "none";
    tk1.style.display = "none";
    tk.style.display = "none";
}
//删除、修改
table.ondblclick = function (e) {
    let element = e.target;
    let ids = data.length;
    let type = element.getAttribute("type");
    if (element.nodeName == "TD" && element.className != "delete") {
        let oldv = element.innerHTML;
        element.innerHTML = "";
        let inputs = document.createElement("input");
        inputs.value = oldv;
        element.appendChild(inputs);
        inputs.onblur = function () {
            let newv = inputs.value;
            element.removeChild(inputs);
            element.innerHTML = newv;

            let result = data.filter(v => v.id == ids);
            result[0][type] = newv;
            console.log(result[0][type]);
            localStorage.studentinfo = JSON.stringify(data);
        }
    } else if (element.nodeName = "BUTTON") {
        let strs = element.parentNode.parentNode;
        table.removeChild(strs);
        data = data.filter(v => v.id != ids);
        localStorage.studentinfo = JSON.stringify(data);
    }
}

function createtr(obj) {
    let str = `<div class="form" id="${obj.id}">
                        <div class="b1 a "><input type="checkbox" name="ifAll" id="ifAll" onClick="checkAll()"></div>
                        <div class="b2 a load">${obj.load}</div>
                        <div class="b3 a name">${obj.name}</div>
                        <div class="b4 a number">${obj.number}</div>
                        <div class="b5 a sex">${obj.sex}</div>
                        <div class="b6 a zhuanye">${obj.zhuanye}</div>
                        <div class="b7 a yuan">${obj.yuan}</div>
                        <div class="b8 a classes">${obj.classes}</div>
                        <div class="b9 a">
                            <button class="d">删除</button>
                           </div>
                    </div>`;
    table.innerHTML += str;
}
