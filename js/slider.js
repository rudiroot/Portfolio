// Slider
const sliderEl = document.getElementById('slides');
const sliderItem = document.getElementById('slide-1');
const slideCount = 3;
let activeSlide = 0;
const sliderManager = new Hammer.Manager(sliderEl);
let delta = 0;
const sensitivity = 0.09; 
const sliderTreshold = 2;

sliderManager.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
sliderManager.on('pan', function (e) {
    //delta = sliderEl.getBoundingClientRect().left;
    let sliderPosition = sliderEl.getBoundingClientRect().left;    
    //let newPosition = sliderEl.getBoundingClientRect().left + parseInt(e.deltaX); 
    sliderEl.classList.remove('is-animating');

    //let test = (delta + e.deltaX) / 1.009;
    let positionAfterSlide = (delta + e.deltaX);
    console.log('delta: '+delta,'e.delta: '+e.deltaX,'new Position: '+positionAfterSlide );

    sliderEl.style.transform = 'translateX(' + positionAfterSlide + 'px)';
    
    if(e.isFinal) { 
        delta = positionAfterSlide;
        sliderEl.className += ' is-animating';
        goToSlide(delta);
    }
});

let goToSlide = function (number) {
    const sliderItemWidth = sliderItem.getBoundingClientRect().width;
    const itemOffset = (12 / 100) * sliderItemWidth + 40  ;

    if (number >= (sliderItemWidth / sliderTreshold) * -1){ 
     sliderEl.style.transform = `translateX(${itemOffset}px)`; 
    }
    
    if (number <= ((sliderItemWidth / sliderTreshold) * -1) && number >= (((sliderItemWidth*2) / sliderTreshold) * -1)){
     const sliderPosi2 = (sliderItemWidth - itemOffset)*-1 ;
     sliderEl.style.transform = `translateX(${sliderPosi2}px)`; 
    }

    if (number <= (((sliderItemWidth*2) / sliderTreshold) * -1)){
        const sliderPosi3 = ((sliderItemWidth * 2) - (itemOffset ) )*-1;
        sliderEl.style.transform = `translateX(${sliderPosi3}px)`; 
    }
 };