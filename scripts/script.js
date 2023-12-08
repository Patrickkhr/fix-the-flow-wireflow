const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

// Button element selecteren
const likeButtons = document.querySelectorAll('.likeButton')

// Door elke button mappen om te zien welke er geklikt is
likeButtons.forEach(likeButton => {
    likeButton.addEventListener("click", function() {
        // Bij de geklikte button de class "liked" toevoegen
        likeButton.classList.toggle('liked')
    })
})


