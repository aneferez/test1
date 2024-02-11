window.onload = function () { 
    let slides =  
        document.getElementsByClassName('carousel-item'); 
  
    function addActive(slide) { 
        slide.classList.add('active'); 
    } 
  
    function removeActive(slide) { 
        slide.classList.remove('active'); 
    } 
  
    addActive(slides[0]); 
    setInterval(function () { 
        for (let i = 0; i < slides.length; i++) { 
            if (i + 1 == slides.length) { 
                addActive(slides[0]); 
                setTimeout(removeActive, 350, slides[i]); 
                break; 
            } 
            if (slides[i].classList.contains('active')) { 
                setTimeout(removeActive, 350, slides[i]); 
                addActive(slides[i + 1]); 
                break; 
            } 
        } 
    }, 1500); 
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
        const x = pointerX.toFixed(1)
        const y = pointerY.toFixed(1)
        const xp = (pointerX / window.innerWidth).toFixed(2)
        const yp = (pointerY / window.innerHeight).toFixed(2)
        document.documentElement.style.setProperty('--x', x)
        document.documentElement.style.setProperty('--xp', xp)
        document.documentElement.style.setProperty('--y', y)
        document.documentElement.style.setProperty('--yp', yp)
      }
      document.body.addEventListener('pointermove', syncPointer)}
;