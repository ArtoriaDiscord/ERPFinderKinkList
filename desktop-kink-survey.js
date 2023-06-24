let card = null
let deck_counter = 1

document.addEventListener('DOMContentLoaded', function() {
    card = document.querySelector(".card")
    const dislike_btn = document.querySelector(".btn-back")
    const like_btn = document.querySelector(".btn-forward")
    dislike_btn.addEventListener("click", dislike_kink)
    like_btn.addEventListener("click", like_kink)
});

function like_kink() {
    card.style.transform = `translateX(100vw)`;
    card.style.transition = `transform 1s ease`;

    setTimeout(function() {
        card.style.transform = ""
        card.innerHTML = `
                <h2 class="unselectable">Header ${deck_counter}</h2>
                <div class="sep-wrap">
                    <hr class="separator">
                </div>
                <img draggable="false" src="res/${deck_counter}.jpg">
                <div class="sep-wrap">
                    <hr class="separator">
                </div>
                <p class="unselectable">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ullamcorper magna non est egestas egestas.
                    Duis elementum ut diam nec ornare.
                    In semper consectetur est a malesuada.</p>
    `
        deck_counter++;
        if (deck_counter > 4) {
            deck_counter = 1;
        }
    }, 1000);
    console.log("Work!");
}

function dislike_kink() {
    card.style.transform = `translateX(-100vw)`;
    card.style.transition = `transform 1s ease`;

    setTimeout(function() {
        card.style.transform = ""
        card.innerHTML = `
                <h2  class="unselectable">Header ${deck_counter}</h2>
                <div class="sep-wrap">
                    <hr class="separator">
                </div>
                <img src="res/${deck_counter}.jpg" draggable="false">
                <div class="sep-wrap">
                    <hr class="separator">
                </div>
                <p  class="unselectable">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ullamcorper magna non est egestas egestas.
                    Duis elementum ut diam nec ornare.
                    In semper consectetur est a malesuada.</p>
    `
        deck_counter++;
        if (deck_counter > 4) {
            deck_counter = 1;
        }
    }, 1000);
    console.log("Work!");
}