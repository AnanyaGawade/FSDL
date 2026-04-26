const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // CLOSE OTHERS (optional but cleaner)
        items.forEach(i => {
            if(i !== item){
                i.classList.remove("active");
            }
        });

        // TOGGLE CURRENT
        item.classList.toggle("active");
    });
});