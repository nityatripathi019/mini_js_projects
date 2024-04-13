// const slides=document.querySelectorAll(".slides");
// var counter = 0;

// slides.forEach(
//     (e,index)=>{
//     // e.style.left = `${index*100}%`;
//     e.style.bottom = `${index*100}%`;
//     }
// )

// const goPrev = ()=>{
//     counter--;
//     slideImage();
// }
 
// const goNext =()=>{
//     counter++;
//     slideImage();
// }
// const slideImage = ()=>{
//     slides.forEach(
//         (slide)=>{
//             // slide.style.transform = `translateX(-${counter*100}%)`;
//             slide.style.transform = `translateY(${counter*100}%)`;
//         }

        
//     )
// }

const slides=document.querySelectorAll(".slides");
var counter = 0 ;

slides.forEach(
    (e,index)=>{
      e.style.top = `${index*100}%`;
    }
)
goPrev = ()=>{
    counter--;
    slideImage();
}
goNext = ()=>{
    counter++;
    slideImage();
}

const slideImage = () =>{
    slides.forEach(
        (slide)=>{
         slide.style.transform=`translateY(-${counter*100}%)`
        }
    )
}