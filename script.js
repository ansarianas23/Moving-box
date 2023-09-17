// Task 1:
// make a rectangle when we move mouse on that rectangle on the left side we want to gradually change the color of that rectangle to red and when we move mouse to the right side we want to change the color to blue

// let rect = document.querySelector("#center")

// rect.addEventListener('mousemove', function(e){
//     let rectangleLocation = rect.getBoundingClientRect();   // rectangle location from the edge of viewport width / screen
//     let insideRectVal = e.clientX - rectangleLocation.left;
//     // console.log(e.clientX - rectangleLocation.left)
//     if(insideRectVal < rectangleLocation.width /2){
//         let redColor = gsap.utils.mapRange(0, rectangleLocation.width /2, 255, 0, insideRectVal)
//         gsap.to(rect, {
//             backgroundColor :`rgb(${redColor},0,0)`
//         })
//     }else{
//         let blueColor = gsap.utils.mapRange(rectangleLocation.width /2,rectangleLocation.width, 0, 255, insideRectVal)
//         gsap.to(rect, {
//             backgroundColor :`rgb(0,0,${blueColor})`
//         })
//     }
// })


// rect.addEventListener('mouseleave', function(e){
//     gsap.to(rect, {
//         backgroundColor :"white"
//     })
// })

// -------------------------------------------------------------------------------------------

// Task 2:
// when we move mouse to left side make the rectanglemovable but it slowdown the more & more mouse reaches to left and do the same when mouse goes to the right side


window.addEventListener("mousemove", function(e){
    let rect = document.querySelector("#center")
    let xval = gsap.utils.mapRange(0,
        window.innerWidth, 
        200 + rect.getBoundingClientRect().width/2, 
        window.innerWidth - (200 + rect.getBoundingClientRect().width/2),
        e.clientX);

    gsap.to("#center",{
        left: xval,
        ease: Power3
    });
});