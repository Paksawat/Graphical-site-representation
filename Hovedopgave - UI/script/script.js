var profile = document.querySelector(".profileIcon");
var profileInfo = document.querySelector(".profileOptions");

profile.addEventListener("click", function(){
	profileInfo.classList.toggle("profileToggle");
});



function updateValue(val){
	var mainSwitchBtn = document.querySelectorAll(".mainSwitchBtn");
	for (var i = 0; i < mainSwitchBtn.length; i++) {
		mainSwitchBtn[i].classList.remove("mainSwitchActive");
	}
	var value = "1";
	value = val;
	
	if(value == 1){
		document.querySelector(".switchOne").classList.add("mainSwitchActive");

	}else if(value == 2){
		document.querySelector(".switchTwo").classList.add("mainSwitchActive");
		
	}else{
		document.querySelector(".switchThree").classList.add("mainSwitchActive");
		
	}
}

function updateValue2(val2){
	var mainSwitchBtn = document.querySelectorAll(".caseSwitchBtn");
	for (var i = 0; i < mainSwitchBtn.length; i++) {
		mainSwitchBtn[i].classList.remove("caseSwitchActive");
	}
	var value = "1";
	value = val2;
	
	if(value == 1){
		document.querySelector(".caseSwitchOne").classList.add("caseSwitchActive");

	}else if(value == 2){
		document.querySelector(".caseSwitchTwo").classList.add("caseSwitchActive");
		
	}else{
		document.querySelector(".caseSwitchThree").classList.add("caseSwitchActive");
		
	}
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var defrost = document.querySelector(".defrostBtn");

defrost.addEventListener("click", function(){
	defrost.classList.add("defrostActive");
	defrost.innerHTML = "Starting defrost...";
	setTimeout(function(){
		defrost.innerHTML = "Defrost running...";
	}, 2000);
	setTimeout(function(){
		defrost.classList.remove("defrostActive");
		defrost.innerHTML = "Start Defrost";
	}, 5000);
	
});


function ccSelector(){
	var selected = document.querySelectorAll(".clickUnit");
	for (var i = 0; i < selected.length; i++) {
		var units = selected[i];
		units.addEventListener("click", function(){
			var currentActive = document.querySelector(".selectedUnit");
			currentActive.classList.remove("selectedUnit");
			this.classList.add("selectedUnit");
		});
	}
}

ccSelector();