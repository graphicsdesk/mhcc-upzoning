// using d3 for convenience
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();

function handleResize(){
    if (window.innerWidth<800){
        document.style.opacity=0;
    }
    else{
      document.style.opacity=1;
    }
}

function pullInitial(){
    document.querySelector('#one').style.opacity=1;
    document.querySelector('#two').style.opacity=0;
    document.querySelector('#three').style.opacity=0;
    document.querySelector('#four').style.opacity=0;
}

// scrollama event handlers
function handleStepEnter(response) {
    // response = { element, direction, index }
    var el = response.element;
    if(response.index==1){
        document.querySelector('#one').style.opacity=1;
        document.querySelector('#two').style.opacity=0;
        document.querySelector('#three').style.opacity=0;
        document.querySelector('#four').style.opacity=0;
        console.log(response.index);
    }
    if(response.index==2){
        document.querySelector('#one').style.opacity=0;
        document.querySelector('#two').style.opacity=1;
        document.querySelector('#three').style.opacity=0;
        document.querySelector('#four').style.opacity=0;
        console.log(response.index);
    }
    if(response.index==3){
        document.querySelector('#one').style.opacity=0;
        document.querySelector('#two').style.opacity=0;
        document.querySelector('#three').style.opacity=1;
        document.querySelector('#four').style.opacity=0;
        console.log(response.index);
    }
    if(response.index==4){
        document.querySelector('#one').style.opacity=0;
        document.querySelector('#two').style.opacity=0;
        document.querySelector('#three').style.opacity=0;
        document.querySelector('#four').style.opacity=1;
        console.log(response.index);
    }
    steps.forEach(step => step.classList.remove('is-active'));
    el.classList.add('is-active');
}

function init() {
    pullInitial();
    scroller
    .setup({
        step: "#scrolly article .step",
        offset: 0.5,
        debug: false
    })
    .onStepEnter(handleStepEnter);

    // setup resize event
    window.addEventListener("resize", scroller.resize);
    window.addEventListener("resize", handleResize());
}

// kick things off
init();