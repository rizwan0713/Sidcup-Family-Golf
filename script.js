
// For Small Cursor 
var crsr = document.querySelector(".Cursor")
// For Large Cursor
var blur = document.querySelector(".blurCursor")


// For Small Cursor Movement
document.addEventListener("mousemove",function(dets){
console.log(dets)
crsr.style.left = dets.x -10 +"px" // Movement in X direction
crsr.style.top = dets.y -10 +"px"  // Movement in Y direction

 
})
// For Large Cursor Movement
document.addEventListener("mousemove",function(dets){
console.log(dets)
blur.style.left = dets.x -250 +"px" // Movement in X direction and -200 half of the width for Centering the cursor
blur.style.top = dets.y -250 +"px"  // Movement in Y direction and -200 half of the width for Centering the cursor

})

gsap.to(".navBar",{
    backgroundColor :"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:".navBar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
      end:"top -11%",
        scrub:1
    }
})

gsap.to(".mainSection",{
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:".mainSection",
        scroller:"body",
        // markers:true,
        start:"top -25%",
       end:"top -75%",
        scrub:1
    }
    
    
})

gsap.from(".aboutUsImage,.aboutContent",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4, Ek Saath Images ko Display Karne ke Liye
    scrollTrigger:{
        trigger:".aboutUs",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,

    }
})


gsap.from(".Cards",{
  scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1, //Ek Saath Images ko Display Karne ke Liye
    scrollTrigger:{
        trigger:".Cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,

    }
})
gsap.from(".doubleQuotes1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".doubleQuotes1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from(".doubleQuotes2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".doubleQuotes1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})


