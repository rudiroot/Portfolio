
var sliderEl = document.querySelector('.slider');
var slideCount = 3;
var activeSlide = 0; // NEW: the current slide # (0 = first)

var sliderManager = new Hammer.Manager(sliderEl);
sliderManager.add( new Hammer.Pan({ threshold: 0, pointers: 0 }) );
sliderManager.on('pan', function(e) {
  var percentage = 100 / (window.innerWidth/2) * e.deltaX   ;
  
  var transformPercentage = percentage - 100 / slideCount * activeSlide; // NEW
  console.log(transformPercentage);
  sliderEl.style.transform = 'translateX( ' + transformPercentage + '% )';
  if(e.isFinal) { // NEW: this only runs on event end
    if(percentage < -80)
      goToSlide(activeSlide + 1);
    else if(percentage > 0)
      goToSlide(activeSlide - 1);
    else
      goToSlide(activeSlide);
  }
});

// NEW: function that changes the slide
var goToSlide = function(number) {
  if(number < 0)
    activeSlide = 0;
  else if(number > slideCount - 1)
    activeSlide = slideCount - 1
  else
    activeSlide = number;

 var percentage = -(100 / slideCount) * activeSlide;
 sliderEl.style.transform = 'translateX(' + percentage + '%)';
};


/*

var sliderEl = document.querySelector('.slider');
var slideCount = 3;
var activeSlide = 0; // NEW: the current slide # (0 = first)

var sliderManager = new Hammer.Manager(sliderEl);
sliderManager.add( new Hammer.Pan({ threshold: 0, pointers: 0 }) );
sliderManager.on('pan', function(e) {
  var percentage = 100 / slideCount * e.deltaX / window.innerWidth;
  var transformPercentage = percentage - 100 / slideCount * activeSlide; // NEW
  sliderEl.style.transform = 'translateX( ' + transformPercentage + '% )';
  if(e.isFinal) { // NEW: this only runs on event end
    if(percentage < 0)
      goToSlide(activeSlide + 1);
    else if(percentage > 0)
      goToSlide(activeSlide - 1);
    else
      goToSlide(activeSlide);
  }
});

// NEW: function that changes the slide
var goToSlide = function(number) {
  if(number < 0)
    activeSlide = 0;
  else if(number > slideCount - 1)
    activeSlide = slideCount - 1
  else
    activeSlide = number;

 var percentage = -(100 / slideCount) * activeSlide;
 sliderEl.style.transform = 'translateX(' + percentage + '%)';
};
*/