function filterImages(category){
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const cat = card.getAttribute("data-category");

        if(category === "all" || cat === category){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}