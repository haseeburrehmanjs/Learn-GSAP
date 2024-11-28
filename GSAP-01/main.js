// gsap.to() === initial to final position 
// gsap.from() === final to initial position 
// stagger === ak ak krka line run krna ka kam krta ha 

// gsap.to('#box1' , {
//     x : 1165, 
//     duration : 2, 
//     delay : 1,
//     rotate : 360,
//     backgroundColor : 'yellow',
//     borderRadius : '50%'
// })

// gsap.from('#box2', {
//     x : 1165, 
//     duration : 2, 
//     delay : 1, 
//     rotate : 360,
//     backgroundColor : 'blue'
// })

// gsap.from('h1', {
//     y : 30,
//     color : 'yellow',
//     duration : 2,
//     delay : 1, 
//     opacity : 0,
//     stagger : 0.5,
// })


gsap.to("#box1", {
    x : 1160,
    y: 400,
    duration : 2, 
    delay : 1, 
    rotate : 360, 
    borderRadius : '50%',
    backgroundColor : 'yellow',
    repeat : -1,
    yoyo: true
})

console.log('haseeb heree');
