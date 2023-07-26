let card = null
let deck_counter = 1

if (localStorage.getItem('deck_counter') != null) {
    deck_counter = localStorage.getItem('deck_counter')
}

let tags_list = []

document.addEventListener('DOMContentLoaded', function() {
    card = document.querySelector(".card")
    const dislike_btn = document.querySelector(".btn-back")
    const like_btn = document.querySelector(".btn-forward")
    dislike_btn.addEventListener("click", dislike_kink)
    like_btn.addEventListener("click", like_kink)
    card.addEventListener('touchstart', handleTouchStart);
    card.addEventListener('touchmove', handleTouchMove);
    card.addEventListener('touchend', handleTouchEnd);
    generate_card();
});

function like_kink() {
    card.style.transform = `translateX(100vw)`;
    card.style.transition = `transform 1s ease`;

    setTimeout(function() {
        generate_card()
    }, 1000);
    tags_list.push(true)
    next_card()
}

function dislike_kink() {
    card.style.transform = `translateX(-100vw)`;
    card.style.transition = `transform 1s ease`;

    setTimeout(function() {
        generate_card();
    }, 1000);
    tags_list.push(false)
    next_card()
}

function generate_card() {
    card.style.transform = ""
    card.innerHTML = `
                <h2  class="unselectable">Header ${deck_counter}</h2>
                <div class="sep-wrap">
                    <hr class="separator">
                </div>
                <img src="res/${deck_counter}" draggable="false" alt="card-img">
                <div class="sep-wrap">
                    <hr class="separator">
                </div>
                <p  class="unselectable">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ullamcorper magna non est egestas egestas.
                    Duis elementum ut diam nec ornare.
                    In semper consectetur est a malesuada.</p>
    `
    console.log(tags_list)
}

function next_card() {
    deck_counter++;
    if (deck_counter > 4) {
        deck_counter = 1;
    }
    localStorage.setItem('deck_counter', deck_counter)
}

function handleTouchStart(event) {
    initialX = event.touches[0].clientX;
    card.style.transition = `transform 0.12s ease`;
}

function handleTouchMove(event) {
    if (initialX === null) {
        return;
    }
    currentX = event.touches[0].clientX;
    const diffX = currentX - initialX;

    card.style.transform = `translateX(${diffX}px)`;
}

function handleTouchEnd() {
    if (currentX !== null) {
        const diffX = currentX - initialX;
        const threshold = 100;

        if (Math.abs(diffX) > threshold) {
            if (diffX < 0) {
                dislike_kink()
            } else {
                like_kink()
            }
        } else {
            card.style.transform = 'translateX(0)';
        }
    }
}
