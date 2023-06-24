let modal_status = localStorage.getItem("firstJoin")
let modal_window = null

document.addEventListener("DOMContentLoaded", function() {
    modal_window = document.querySelector(".modal-background")
    if (modal_status === null) {
        localStorage.setItem("firstJoin", "true")
    }
    else {
        modal_window.style.display = "none";
    }
})
