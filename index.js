// alert('index.js is linked successfully')

let a = document.querySelectorAll('.drum')
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click',()=>{
        var buttonHTML = a[i].innerHTML
        makeSound(buttonHTML)
        buttonAnimation(buttonHTML)
    })
}

document.addEventListener('keydown',(e)=>{
    makeSound(e.key)
    buttonAnimation(e.key)
})

const makeSound = (key)=>{
    switch (key) {
        case "w":
            let audi1 = new Audio('./sounds/crash.mp3')
            audi1.play()
            break;
        case "a":
            let audi2 = new Audio('./sounds/kick-bass.mp3')
            audi2.play()
            break
        case "s":
            let audi3 = new Audio('./sounds/snare.mp3')
            audi3.play()
            break
        case "d":
            let audi4 = new Audio('./sounds/tom-1.mp3')
            audi4.play()
            break
        case "j":
            let audi5 = new Audio('./sounds/tom-2.mp3')
            audi5.play()
            break
        case "k":
            let audi6 = new Audio('./sounds/tom-3.mp3')
            audi6.play()
            break
        case "l":
            let audi7 = new Audio('./sounds/tom-4.mp3')
            audi7.play()
            break
        default:
            console.log(buttonHTML)
    }
}

const buttonAnimation = (key)=>{
let currebtButton = document.querySelector("."+key)
currebtButton.classList.add('pressed')
setTimeout(() => {
    currebtButton.classList.remove('pressed')
}, 100);
}