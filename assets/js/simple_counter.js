(function() {

    const incrementButton = document.querySelector("#incrementButton");

    const decrementButton = document.querySelector("#decrementButton");
    
    const counter = document.querySelector("#counter");

    incrementButton.addEventListener("click", function() {
        if(parseInt(counter.innerHTML) >= 9) {
            counter.innerHTML = parseInt(counter.innerHTML) +1; 
            counter.style.color = "red";
        }
        else {
            counter.innerHTML = parseInt(counter.innerHTML) +1;
        }
    });

    decrementButton.addEventListener("click", function() {
        if(parseInt(counter.innerHTML) <= 0) {
            counter.innerHTML = 1; 
        }
        if(parseInt(counter.innerHTML) <= 10) {
            console.log("LT 11");
            counter.innerHTML = parseInt(counter.innerHTML) -1;
            counter.style.color = "black";  
        }
        if(parseInt(counter.innerHTML) >= 11) {
            console.log("GT 11");
            counter.innerHTML = parseInt(counter.innerHTML) -1;
            counter.style.color = "red";  
        };
    });

})() 