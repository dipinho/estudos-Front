//Scroll para as seções

let navBtn = $('.nav-item');

let bannerSection = $('#mainSlider');
let aboutSection = $('#about-area');
let armySection = $('#army-area');
let artSection = $('#art-area');
let educationSection = $('#education-area');
let ritualSection = $('#ritual-area');
let codeSection = $('#code-area');
let contactSection = $('#contact-area');

let scrollTo = '';

$(navBtn).click(function() {

  let btnId = $(this).attr('id');

  if(btnId == 'about-menu') {
    scrollTo = aboutSection;
  } else if(btnId == 'army-menu') {
    scrollTo = armySection;
  } else if(btnId == 'art-menu') {
    scrollTo = artSection;
  } else if(btnId == 'education-menu') {
    scrollTo = educationSection;
  }else if(btnId == 'ritual-menu') {
    scrollTo = ritualSection;
  }else if(btnId == 'code-menu') {
    scrollTo = codeSection;
  } else if(btnId == 'contact-menu') {
    scrollTo = contactSection;
  } else {
    scrollTo = bannerSection;
  }

  $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 20
  }, 1800);
});
