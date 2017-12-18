(function() {

    const incrementButton = $("#incrementButton");
    const decrementButton = $("#decrementButton");
    const counter = $("#counter");

    console.log(incrementButton);
    console.log(decrementButton);
    console.log(counter);

    incrementButton.click(function() {

        counter.html(parseInt(counter.html()) + 1); 

        if(counter.html() >= 10) {
            counter.css("color", "red"); 
        }
    })

    decrementButton.click(function() {

        if(counter.html() > 0){
            counter.html(parseInt(counter.html()) - 1); 
        }
        if(counter.html() < 10){
            counter.css("color", "black"); 
        }

    });

})() 