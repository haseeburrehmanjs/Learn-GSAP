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


// gsap.to("#box1", {
//     x : 1000,
//     y: 370,
//     duration : 2, 
//     delay : 1, 
//     rotate : 360, 
//     borderRadius : '50%',
//     backgroundColor : 'yellow',
//     repeat : -1,
//     yoyo: true,
// })

// gsap.to('#UserName', {
//     x : 900, 
//     duration : 2, 
//     delay : 1, 
//     color : 'yellow', 
//     repeat : -1,
//     yoyo : true
// })


gsap.to('#box1', {
    x: 1160, 
    borderRadius : '50%', 
    rotate : 360,
    duration : 2, 
    delay : 1, 
    repeat : -1,
    yoyo : true
})

gsap.to('#box2', {
    x : 1160, 
    borderRadius : '50%', 
    rotate : 360, 
    duration : 2, 
    delay : 3,
    repeat : -1,
    yoyo : true
})

gsap.to('#box3', {
    x : 1160,
    duration : 2, 
    rotate : 360, 
    borderRadius : '50%',
    delay : 5,
    repeat : -1,
    yoyo : true
})

gsap.to('#box4', {
    x : 1160,
    duration : 2, 
    rotate : 360, 
    borderRadius : '50%',
    delay : 7,
    repeat : -1,
    yoyo : true
})