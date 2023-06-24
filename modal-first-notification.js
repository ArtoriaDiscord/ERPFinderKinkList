let modal_status = localStorage.getItem("firstJoin")
let modal_window = null
let modal_btn = null

document.addEventListener("DOMContentLoaded", function() {
    modal_window = document.querySelector(".modal-background")
    modal_btn = document.querySelector(".ok-modal")
    modal_btn.addEventListener("click", close_modal)
    if (modal_status === null) {
        localStorage.setItem("firstJoin", "true")
    }
    else {
        modal_window.style.display = "none";
    }
})


function close_modal()  {
    modal_window.style.display = "none"
}