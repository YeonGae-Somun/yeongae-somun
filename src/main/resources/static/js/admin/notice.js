const $title = document.querySelector(".ChangeTitle");
const $sideList = document.querySelectorAll(".mainNav>li");
const writeNotice = document.querySelector(".update_btn");
// const delEBtn = document.querySelector(".deleteBtnEnterprise");
// const sideDelete = document.querySelectorAll(".inputCheckBox");


$sideList.forEach(el =>{
    if(el.innerText == $title.innerText){
        el.style.background="#7aab9a";
        el.firstChild.style.color ="white";
    }
})

writeNotice.addEventListener('click', () => {
    let list=[];
    list.push(pagition.content);

    fetch("/admins/notice-update-form", {
        method: "POST",
        headers: {"Content-type": "application/json;charset=utf-8"},
        body: JSON.stringify(list)
    }).then(() => location.href = "/admin/notice");
})

// delEBtn.addEventListener('click', () => {
//     let list = [];
//     sideDelete.forEach((props, index) => {
//         if(props.checked) {
//             list.push(pagination.content[index].id);
//         }
//     });
//     fetch("/admins/enterprise/delete", {
//         method: "POST",
//         headers: {"Content-type": "application/json;charset=utf-8"},
//         body: JSON.stringify(list)
//     }).then(() => location.href = "/admin/enterprise");
//
// });