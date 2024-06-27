var subscribe_button = document.querySelector(".subscribe_button");

subscribe_button.addEventListener('click', function(){
	var subscribing = document.querySelector(".subscribing");
	var thanks = document.querySelector(".thanks");
	var login = document.querySelector(".login");

	subscribing.classList.add("subscribing_active");
	subscribe_button.classList.add("subscribe_button_active");
	setTimeout(function(){
		login.classList.add("login_active");
	}, 1200);
	setTimeout(function(){
		thanks.classList.add("thanks_active");
	}, 1400);

	setTimeout(function(){
		thanks.classList.remove("thanks_active");
		login.classList.remove("login_active");
		subscribing.classList.remove("subscribing_active");
		subscribe_button.classList.remove("subscribe_button_active");
	}, 4000);
});
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml13',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });
