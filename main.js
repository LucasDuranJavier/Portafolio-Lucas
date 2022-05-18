/*
var iconPresentation = document.querySelector('.icondown-1');
var iconSkills = document.querySelector('.icondown-2');
const iconProyectos = document.querySelector('.icondown-3');
const proyectos = document.querySelector('.container-proyectos')
const sobreMi = document.querySelector('.container-sobre-mi');
function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration)
        window.scrollTo(0,run)
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }


function ease (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};
requestAnimationFrame(animation);

}



iconPresentation.addEventListener('click', function(){
smoothScroll('.container-sobre-mi', 1000);
})





function smoothScroll2(target,duration){
    const alturaSobreMi = sobreMi.getBoundingClientRect().height;

    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().bottom;
    var startPosition = alturaSobreMi;
   
    
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration)
        window.scrollTo(0,run)
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }


function ease (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};
requestAnimationFrame(animation);

}

iconSkills.addEventListener('click', function(){
    smoothScroll2('.container-proyectos', 1000);
    })

///--------------------------////
*/

