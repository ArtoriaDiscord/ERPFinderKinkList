let counter = 1

document.addEventListener('DOMContentLoaded', function() {
    const deck = document.querySelector('.deck');
    let card = document.querySelector('.card');

    let initialX = null;
    let currentX = null;

    function handleMouseDown(event) {
        initialX = event.clientX;
    }

    function handleMouseMove(event) {
        if (initialX === null) {
            return;
        }

        currentX = event.clientX;
        const diffX = currentX - initialX;

        card.style.transform = `translateX(${diffX}px)`;
    }

    function handleMouseUp() {
        if (currentX !== null) {
            const diffX = currentX - initialX;
            const threshold = 100;

            if (Math.abs(diffX) > threshold) {
                showNextCard(diffX < 0);
            } else {
                card.style.transform = 'translateX(0)';
            }
        }
        initialX = null;
        currentX = null;
    }

    function showNextCard(isNext) {
        const currentCard = card.cloneNode(true);
        card.parentNode.removeChild(card);

        // Здесь вы можете реализовать логику для загрузки следующей карты и ее вставки в deck
        // Например, вы можете использовать AJAX-запрос или получить данные из массива карточек

        // Пример:
        const nextCard = document.createElement('div');
        nextCard.classList.add('card');
        nextCard.innerHTML = `
            <h2>New Card Header</h2>
            <div class="sep-wrap">
                <hr class="separator">
            </div>
            <img src=res/${counter}.jpg>
            <div class="sep-wrap">
                <hr class="separator">
            </div>
            <p>New card content...</p>
        `;
        counter++;
        if (counter > 4) {
            counter = 1
        }

        deck.appendChild(nextCard);
        card = nextCard;

        card.addEventListener('mousedown', handleMouseDown);
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseup', handleMouseUp);
    }

    // Слушатели событий мыши
    card.addEventListener('mousedown', handleMouseDown);
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseup', handleMouseUp);
});
