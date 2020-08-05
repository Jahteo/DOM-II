// Your code goes here
// * `mouseover` on img to opacity
const imgs = Array.from(document.getElementsByTagName("img"));
imgs.forEach(element => element.addEventListener("mouseover", (event) => event.target.style.opacity = "0.5"))
//single img variant
// imgs[0].addEventListener("mouseover", (event) => event.target.style.opacity = "0.5")

// * `keydown` all navLinks ->green
const navLinks = Array.from(document.getElementsByClassName("nav-link"));
console.log(navLinks) //returns expected
console.log(navLinks[0]) //returns an html version, why?? Taja thinks this is part of the problem

//const navLinks1 = //pretty sure this is the solution, break everything into simpler pieces.

// // //This attempt to do it from a different angle sucks. way too many problems. I eventually want to know why, but right now, I just want my sanity.
// document.addEventListener("keydown", (event) => {
//     debugger //for some reason, this is also not running properly. It keeps stopping on the final line of JS, instead of this line & each subsequent line. Save, close and restart everything??
//     if (event.key === "Escape") { //magical issue number 1: only 'Escape" works. Nothing else. because yeah.
//         return navLinks.forEach(event =>
//             // console.log(event));
//             //  //shows that links inside forEach are beign changed to html style, regardless of whether originally pulled with getElementsby or querySelector. Test line 4 to see if that is normal behavior or the problem.
//             event.setAttribute('color', 'green'))
//         //  navLinks.style.color = "green") //magical issue number2: this requires a return to escape the if statement. number3: somehow, event.target.style.color doesn't actually grab anything, even though it works exactly the same on line 4. we tried event, event.target, navLinks, & a few other variations.
//     }
// })
// console.log(navLinks)

//   and this one just doesn't trigger for some reason... except for when it randomly does...
// navLinks.forEach(element => element.addEventListener("keydown", (event) => {
//     debugger
//     if (event.key === "Escape") {
//         return event.target.style.color = "green"
//     }
// }))

//  //  copied straight from lecture code for reference.
// 'keydown', event => {
//     // if the key pressed was ESC, dismiss the modal, otherwise nothing
//     if (event.key === 'Escape') {
//       modal.classList.add('off')
//     } else {
//       console.log('wrong key, buddy')
//     }
//   })
// }


//      ohmalawd, why this don't work either... **Facepalm**
//      walk away from the navLinks. calmly, but without looking back, walk away & don't stop.
// const navLink1 = navLinks[0];
// navLink1.addEventListener("mouseover", (event) => {event.target.setAttribute.color = "green"})

const h1Text = document.querySelector("h1")
console.log(h1Text)
h1Text.addEventListener("mouseover", function () {
    h1Text.textContent = "Isn't it nice when something just works finally??"
})

const firstImg = document.querySelector("img")
firstImg.addEventListener("dblclick", () => {firstImg.style.opacity = 1})


//I'm seriously tired of things that don't work at this point. I don't know why & I no longer have time to ask till friday. But there'll be plenty of notes for me to ask for help with. I just need some things to work at this point tbh.
//this is a failed attempt to use `focus` and a declared/callback function.
// const textContentp1 = document.querySelector(".text-content p")
// function boldText (element) {
//     element.target.style.fontWeight = "bold"
// }
// textContentp1.addEventListener("focus", boldText)

//trying single line
document.querySelector(".text-content p").addEventListener("mouseout", (event) => {event.target.style.color = "red"} )

//single line window event listener
window.addEventListener("resize", () => {document.querySelector(".text-content p").style.color = "green"
})

//scroll is also only useable on window, document or html??
//how would I tweak this to cover all headers, using forEach? I've burnt myself out on wrong syntax & want to see it done right. Instinct says wrap a Array.from() around the headers assignment, then use for loop on headers inside scroll function. But then I'm fuzzy on what to do inside the forEach. anonymous function using `event.target`? using `.this`?
const headers = document.getElementsByTagName("header")
console.log(headers)
window.addEventListener("scroll", () => {
    headers[1].style.backgroundColor = "grey"
})


// //evertime I try to combine a forEach & a new thing it fails...
// imgs.forEach(element => element.addEventListener("dragstart", (event) => {event.target.src = "../img/mouse-oops-i-think-i-broke-ur-computer.jpeg"}))

// //fix1: eventListener stillworks, but image doesn't populate right. not accepting new src?
// imgs[0].addEventListener("dragstart", () => {event.target.src = "../img/mouse-oops-i-think-i-broke-ur-computer.jpeg"})

//fix2: also not the solution... I think I'm not doing src right. here's a failed attempt at using setAttribute().
//I suspect I don't get how to refer back to the parent folder correctly, even after googling & trying multiple ways. This way would work as if it's being read from the same folder as the index.html, prev ones were as read from index.js...
imgs[0].addEventListener("dragstart", () => {imgs[0].setAttribute("src", "img/mouse-oops-i-think-i-broke-ur-computer.jpeg")})


// Failed attempt to play with `select`. I expect it to change the whole `p`s background, not just where I select...
// document.querySelector("p").addEventListener("select", (event) => {
//     //yeah, it's better procedure to declare the variable first in this case, but I wanted to know if it'd work.
//     // document.querySelector("p").style.backgroundColor = "pink"
//     // debugger
//     event.target.style.backgroundColor = "pink" //proves something else is amiss...
// })
// console.log(document.querySelector("p")) //just to check that I was selecting text in the right area. Check.

//fix1, still broken.
const firstP = document.querySelector("p")
firstP.addEventListener("select", () => {
    console.log(`this line is getting run, right?`) //proves the selector is broken. Yay. Such happiness.
    firstP.style.background="pink"
})

//easy mouse events to at least get mvp...

firstP.addEventListener("click", () => {
    firstP.style.fontSize = "2rem"
})

imgs[1].addEventListener("contextmenu", () => {
    firstP.textContent = "What were you expecting, clicking over there?"
})
//original ambitions, Later realized that they were a bit advanced for the tools we have & my current skills.
// * `wheel`qeue animation
// * `load`
// * `focus` on h1, bold
// * `resize` reset display:none
// * `scroll` all p -> yellow
// * `select`background - teal
// * `dblclick` any element, display:none
// * `drag / drop`,
