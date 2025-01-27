window.addEventListener('scroll', function () {

    const movies = document.querySelectorAll('.movieSection')
    const scrollPosition = document.documentElement.scrollTop

    if (scrollPosition < 30) {
        movies.forEach(movie => {
            movie.style.visibility = "hidden";
            movie.style.opacity = '0';
            movie.style.pointerEvents = "none"; // Impedisce interazioni
        }
        )
    }
    else {
        movies.forEach(movie => {
            movie.style.visibility = "visible";
            movie.style.opacity = '1';
            movie.style.pointerEvents = "auto"; // Ripristina le interazioni
        }
        )
    }

})