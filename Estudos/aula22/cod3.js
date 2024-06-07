let cont = 0

function acionar(){
    cont++
    const parag = document.querySelector('p')
    parag.textContent = cont
}