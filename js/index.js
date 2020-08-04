// Your code goes here
// * `mouseover` on img to opacity
const imgs = Array.from(document.getElementsByTagName("img"));
imgs.forEach(element => element.addEventListener("mouseover", (event) => event.target.style.opacity = "0.5"))
//single img variant
// imgs[0].addEventListener("mouseover", (event) => event.target.style.opacity = "0.5")

// * `keydown` all navLinks ->green
const navLinks = Array.from(document.getElementsByClassName("nav-link"));

// // //This attempt to do it from a different angle sucks. way too many problems. I eventually want to know why, but right now, I just want my sanity.
// document.addEventListener("keydown", (event) => {
//     debugger
//     if (event.key === "Escape") { //magical issue number 1: only 'Escape" works. Nothing else. because yeah.
//         return navLinks.forEach(event => event.target.style.color = "green") //magical issue number2: this requires a return to escape the if statement. number3: somehow, event.target.style.color doesn't actually grab anything, even though it works exactly the same on line 4.
//     }
// })

// //   and this one just doesn't trigger for some reason... except for when it randomly does...
// navLinks.forEach(element => element.addEventListener("keydown", (event) => {
//     debugger
//     if (event.key === "Escape") {
//         event.target.style.color = "green"
//     }
// }))


// 'keydown', event => {
//     // if the key pressed was ESC, dismiss the modal, otherwise nothing
//     if (event.key === 'Escape') {
//       modal.classList.add('off')
//     } else {
//       console.log('wrong key, buddy')
//     }
//   })


// }
// * `wheel`qeue animation
// * `load`
// * `focus` on h1, bold
// * `resize` reset display:none
// * `scroll` p -> yellow
// * `select`background - teal
// * `dblclick` any element, display:none
// * `drag / drop`,
