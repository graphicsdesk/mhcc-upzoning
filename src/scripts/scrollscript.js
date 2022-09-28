import scrollama from "scrollama";  
  // using d3 for convenience
        var main = document.querySelector("main");
        var scrolly = main.querySelector("#scrolly");
        var sticky = scrolly.querySelector(".sticky-thing");
        var article = scrolly.querySelector("article");
        var steps = article.querySelectorAll(".step");

        // initialize the scrollama
        var scroller = scrollama();

        function pullInitial(){
            document.querySelectorAll('#one')[0].style.opacity=1;
            document.querySelectorAll('#two')[0].style.opacity=0;
            document.querySelectorAll('#three')[0].style.opacity=0;
            document.querySelectorAll('#four')[0].style.opacity=0;
            document.querySelectorAll('#one')[1].style.opacity=1;
            document.querySelectorAll('#two')[1].style.opacity=0;
            document.querySelectorAll('#three')[1].style.opacity=0;
            document.querySelectorAll('#four')[1].style.opacity=0;
        }

        // scrollama event handlers
        function handleStepEnter(response) {
            console.log(response.index);
            // response = { element, direction, index }
            var el = response.element;
            if(response.index==1){
                document.querySelectorAll('#one')[0].style.opacity=1;
                document.querySelectorAll('#two')[0].style.opacity=0;
                document.querySelectorAll('#three')[0].style.opacity=0;
                document.querySelectorAll('#four')[0].style.opacity=0;
                console.log(response.index);
            }
            if(response.index==2){
                document.querySelectorAll('#one')[0].style.opacity=0;
                document.querySelectorAll('#two')[0].style.opacity=1;
                document.querySelectorAll('#three')[0].style.opacity=0;
                document.querySelectorAll('#four')[0].style.opacity=0;
            }
            if(response.index==3){
                document.querySelectorAll('#one')[0].style.opacity=0;
                document.querySelectorAll('#two')[0].style.opacity=0;
                document.querySelectorAll('#three')[0].style.opacity=1;
                document.querySelectorAll('#four')[0].style.opacity=0;
            }
            if(response.index==4){
                document.querySelectorAll('#one')[0].style.opacity=0;
                document.querySelectorAll('#two')[0].style.opacity=0;
                document.querySelectorAll('#three')[0].style.opacity=0;
                document.querySelectorAll('#four')[0].style.opacity=1;
            }
            if(response.index==6){
                document.querySelectorAll('#one')[1].style.opacity=1;
                document.querySelectorAll('#two')[1].style.opacity=0;
                document.querySelectorAll('#three')[1].style.opacity=0;
                document.querySelectorAll('#four')[1].style.opacity=0;
            }
            if(response.index==7){
                document.querySelectorAll('#one')[1].style.opacity=0;
                document.querySelectorAll('#two')[1].style.opacity=1;
                document.querySelectorAll('#three')[1].style.opacity=0;
                document.querySelectorAll('#four')[1].style.opacity=0;
            }
            if(response.index==8){
                document.querySelectorAll('#one')[1].style.opacity=0;
                document.querySelectorAll('#two')[1].style.opacity=0;
                document.querySelectorAll('#three')[1].style.opacity=1;
                document.querySelectorAll('#four')[1].style.opacity=0;
            }
            if(response.index==9){
                document.querySelectorAll('#one')[1].style.opacity=0;
                document.querySelectorAll('#two')[1].style.opacity=0;
                document.querySelectorAll('#three')[1].style.opacity=0;
                document.querySelectorAll('#four')[1].style.opacity=1;
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
        }

        // kick things off
        init();