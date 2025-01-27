
let watchAgainVisible = false;
let newReleaseVisible = false;

window.addEventListener('scroll', function () {

    const watchAgain = document.querySelector('#watchAgain')
    const newRelease = document.querySelector('#newRelease')
    const scrollPosition = document.documentElement.scrollTop

    /*   PRIMA versione senza controllo dello scrolling inverso e animazione con delay del secondo carosello

    if (scrollPosition > 50 && !watchAgainVisible) {
        [watchAgain, newRelease].forEach(movie => {
            movie.style.opacity = '0';
            movie.style.pointerEvents = "none"; // Impedisce interazioni
        }
        )
    }
    else {
        watchAgain.style.opacity = "1"
        watchAgain.style.pointerEvents = "auto"
        watchAgain.style.transition = "opacity 0.8s ease-in-out"

        setTimeout(() => {
        newRelease.style.opacity = "1"
        newRelease.style.pointerEvents = "auto"
        newRelease.style.transition = "opacity 0.8s ease-in-out"
      }, 800) // Ritardo di 0.8 secondi
    }
      
    */

      if (scrollPosition > 80 && !watchAgainVisible) {
        watchAgain.style.opacity = "1";
        watchAgain.style.pointerEvents = "auto";
        watchAgain.style.transition = "opacity 0.8s ease-in-out";
        watchAgainShown = true; // Imposta il flag su true
      }
    
      // Mostra "New Release" se superi una posizione successiva
      if (scrollPosition > 150 && !newReleaseVisible) {
        newRelease.style.opacity = "1";
        newRelease.style.pointerEvents = "auto";
        newRelease.style.transition = "opacity 0.8s ease-in-out";
        newReleaseShown = true; // Imposta il flag su true
      }

    }
)