let modal_result_status = localStorage.getItem("IsFinished")
let modal_result_window = null
let modal_result_btn = null
let modal_result_text = null

document.addEventListener("DOMContentLoaded", function() {
    modal_result_window = document.querySelector(".modal-result-background")
    modal_result_btn = document.querySelector(".ok-result-modal")
    modal_result_text = document.getElementsByClassName('modal-result-msg')[0]
    modal_result_btn.addEventListener("click", copy_modal)
    if (modal_result_status === 'true') {
        finish_survey()
    }
    else {
        modal_result_window.style.display = "none";
    }
})

function finish_survey() {
    localStorage.setItem("IsFinished", "true")
    modal_result_window.style.display = "";
    let ifFirst = false;
    result_str = '';
    for (let i = 0; i < tags_list.length; i++) {
        if(tags_list[i] === 'true') {
            if(ifFirst === false) {
                result_str += NAME_TAGS[i]
                ifFirst = true;
            }
            else {
                result_str += ', ' + NAME_TAGS[i]
            }
        }
    }

    if (ifFirst === false){
        modal_result_text.textContent = 'Ну штош, свой путь вам предстоит найти самостоятельно)'
    }
    else {
        modal_result_text.textContent = result_str
    }
}

function copy_modal()  {
    localStorage.setItem("IsFinished", "false")
    modal_result_window.style.display = "none"
    tags_list = []
    localStorage.setItem('tags_list', '')
    copyStringToClipboard();
}

function copyStringToClipboard() {
    const textarea = document.createElement("textarea");
    textarea.value = result_str;
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand("copy");
    } catch (err) {
        console.error("Ошибка при копировании: ", err);
    }
    document.body.removeChild(textarea);
}
