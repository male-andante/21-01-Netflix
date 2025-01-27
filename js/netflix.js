window.addEventListener('scroll', function () {

    const watchAgain = document.querySelector('#watchAgain')
    const newRelease = document.querySelector('#newRelease')
    const scrollPosition = document.documentElement.scrollTop

    if (scrollPosition > 50) {
        [watchAgain, newRelease].forEach(movie => {
            movie.style.visibility = "hidden";
            movie.style.opacity = '0';
            movie.style.pointerEvents = "none"; // Impedisce interazioni
        }
        )
    }
    else {
        watchAgain.style.visibility = "visible"
        watchAgain.style.opacity = "1"
        watchAgain.style.pointerEvents = "auto"
        watchAgain.style.transition = "opacity 0.5s ease-in-out, visibility 0.5s"

        setTimeout(() => {
        newRelease.style.visibility = "visible"
        newRelease.style.opacity = "1"
        newRelease.style.pointerEvents = "auto"
        newRelease.style.transition = "opacity 0.5s ease-in-out, visibility 0.5s"
      }, 500) // Ritardo di 0.5 secondi
    }

    }
)