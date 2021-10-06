let minis = document.querySelectorAll('.imgS')
let imgGrand = document.querySelector('.imgX')

for (let i = 0; i < minis.length; i++) {
    minis[i].addEventListener('click', (e) => {
        imgGrand.src = e.target.src
    })
}