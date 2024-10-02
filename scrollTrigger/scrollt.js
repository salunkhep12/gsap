// gsap.from("#page1 #box",{
//     scale: 0,
//     duration: 2,
//     rotate: 360
// })

// gsap.from("#page2 #box",{
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         scrub: 2
//     }
// })

// gsap.from("#page2 h1",{
//     opacity: 0,
//     duration: 2,
//     y: 70,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%"
//     }
// })

gsap.to("#page2 h1", {
    transform: "translateX(-122%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end:"top -150%",
        scrub: 2,
        pin:true
    }
})