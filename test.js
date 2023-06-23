const kink_names = ["", "", "", ""]
let counter = 2
let card = null
document.addEventListener('DOMContentLoaded', function() {
    card = document.querySelector(".card")
    card.addEventListener('click', newCardContent)
});
function newCardContent() {
    card.innerHTML = `
                <h2>Header ${counter}</h2>
                <div class="sep-wrap">
                    <hr class="separator">
                </div>
                <img src="res/${counter}.jpg">
                <div class="sep-wrap">
                    <hr class="separator">
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ullamcorper magna non est egestas egestas.
                    Duis elementum ut diam nec ornare.
                    In semper consectetur est a malesuada.</p>
    `
    counter++;
    if (counter > 4) {
        counter = 1
    }
}

