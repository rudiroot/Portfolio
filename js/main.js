class Slider { 
  constructor(slideAmount, sliderContainer, nextButton, prevButton){ 
    this.slideAmount = slideAmount; 
    this.slides = sliderContainer;
    this.nextButton = nextButton;
    this.prevButton = prevButton;
    this.slideAmount = 3;
    this.currentSlide = 1;
    this.slideStartPoint = 1;  
    this.slideWidth = this.slides.getBoundingClientRect().width;
    // we need to bind the the functions which we call in the event listeners. When those functions are called they have a different scope. With the binding we do we tell them in which scope they should run, in this case `this`
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.startEventListeners();
  }
  
  nextSlide() { 
    if (this.currentSlide < this.slideAmount) {
      this.currentSlide++;
      this.moveToCurrentSlide();
    }
  }
  
  prevSlide() { 
    if (this.currentSlide > this.slideStartPoint) {
      this.currentSlide--;
      this.moveToCurrentSlide();
    }
  }
  
  moveToCurrentSlide() { 
    const xPositionCurrentSlide = ((this.currentSlide * this.slideWidth) - this.slideWidth) * -1;
    this.slides.style.transform = `translateX(${xPositionCurrentSlide}px)`;  
  }
  
  startEventListeners(){ 
    this.nextButton.addEventListener('click', this.nextSlide);
    this.prevButton.addEventListener('click', this.prevSlide);

    // here i'm using a different approach to handle the scope for the function. it's a new way to declare functions, when we do it in this way the function is still in the scope of this
    window.addEventListener('resize', event => {
      this.slideWidth = this.slides.getBoundingClientRect().width;
      this.moveToCurrentSlide();
    });
  }  
  
}

const mySlider = new Slider(3, document.getElementById('slides-element'), document.getElementById('next'), document.getElementById('prev'));