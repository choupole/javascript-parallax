// Initialisation de la timeline GSAP avec les paramètres de ScrollTrigger
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",         // L'élément déclencheur de l'animation
        start: "0% 95%",         // Le début de l'animation (0% de la hauteur de la fenêtre)
        end: "70% 50%",          // La fin de l'animation (70% de la hauteur de la fenêtre)
        scrub: true,             // Active le "scrub" (défilement dans les deux sens)
        // markers: true,        // Active les marqueurs de débogage (optionnel)
    }
})

// Animation de l'élément "#fanta"
tl.to("#fanta", {
    top: "115%",
    left: "0%"
}, 'orange')

// Animation de l'élément "#orange-cut"
tl.to("#orange-cut", {
    top:"150%",
    left: "23%"
}, 'orange')

// Animation de l'élément "#orange"
tl.to("#orange", {
    width: "15%",
    top:"170%",
    right: "10%"
}, 'orange')

// Animation de l'élément "#leaf"
tl.to("#leaf", {
    top:"100%",
    rotate: "130deg",
    left: "70%"
}, 'orange')

// Animation de l'élément "#leaf2"
tl.to("#leaf2", {
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",         // L'élément déclencheur de l'animation
        start: "0% 95%",         // Le début de l'animation (0% de la hauteur de la fenêtre)
        end: "70% 50%",          // La fin de l'animation (70% de la hauteur de la fenêtre)
        scrub: true,             // Active le "scrub" (défilement dans les deux sens)
        markers: true,        // Active les marqueurs de débogage (optionnel)
    }
})

// tl2.from(".lemon1", {
//     rotate: "-90deg",
//     left : "-25%",
//     top:"110%"
// }, 'ca')

// tl2.from("#coca", {
//     rotate: "-95deg",
//     // left : "-30%",
//     top:"50%"
// }, 'ca')