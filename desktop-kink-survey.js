let card = null
let deck_counter = 1

document.addEventListener('DOMContentLoaded', function() {
    card = document.querySelector(".card")
    const dislike_btn = document.querySelector(".btn-back")
    const like_btn = document.querySelector(".btn-forward")
    dislike_btn.addEventListener("click", dislike_kink)
    like_btn.addEventListener("click", like_kink)
    card.addEventListener('touchstart', handleTouchStart);
    card.addEventListener('touchmove', handleTouchMove);
    card.addEventListener('touchend', handleTouchEnd);
});

function like_kink() {
    card.style.transform = `translateX(100vw)`;
    card.style.transition = `transform 1s ease`;

    setTimeout(function() {
        generate_new_card()
    }, 1000);
}

function dislike_kink() {
    card.style.transform = `translateX(-100vw)`;
    card.style.transition = `transform 1s ease`;

    setTimeout(function() {
        generate_new_card()
    }, 1000);
}

function generate_new_card() {
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
}

function handleTouchStart(event) {
    initialX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (initialX === null) {
        return;
    }

    currentX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (currentX !== null) {
        const diffX = currentX - initialX;
        const threshold = 100;

        if (Math.abs(diffX) > threshold) {
            if (diffX < 0) {
                console.log('Swipe left');
                dislike_kink()
            } else {
                console.log('Swipe right');
                like_kink()
            }
        } else {
            card.style.transform = 'translateX(0)';
        }
    }

    initialX = null;
    currentX = null;
}
