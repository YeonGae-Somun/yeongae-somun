const $title = document.querySelector(".ChangeTitle");
const $sideList = document.querySelectorAll(".mainNav>li");
const sideDelete = document.querySelectorAll(".inputCheckBox");
const delBtn = document.querySelector(".deleteBtn");

$sideList.forEach(el =>{
    if(el.innerText == $title.innerText){
        el.style.background="#7aab9a";
        el.firstChild.style.color ="white";
    }
})

delBtn.addEventListener('click', () => {
    let list = [];
    sideDelete.forEach((props, index) => {
        console.log("test1===" + props.checked )
        if(props.checked) {
            list.push(pagination.content[index].id);
        }
    });
    fetch("/admins/member/delete", {
        method: "POST",
        headers: {"Content-type": "application/json;charset=utf-8"},
        body: JSON.stringify(list)
    }).then(() => location.href = "/admin/member");

});


