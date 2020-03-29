// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

let takeoff = null;
let flightStatus = null;
let shuttleBackground = null;
let shuttleHeight = null;
let land = null;
let abortMission = null;
let up = null;
let down = null;
let left = null;
let right = null;

    takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function () {
        let takeoffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
    
        if (takeoffConfirmation) {

            flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight";

            shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.background = "blue";

            shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = '10000';
        };
    });

    land = document.getElementById("landing");
    land.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        shuttleHeight.innerHTML = '0';
    })
            
    abortMission = document.getElementById("missionAbort");
    abortMission.addEventListener("click", function () {
    let abortConfirmation = window.confirm("Confirm that you want to abort the mission.")
        
    if (abortConfirmation) {
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.background = "green";
        shuttleHeight.innerHTML = '0';
    };
    
    })

    let rocket = document.getElementById("rocket");
    rocket.style.position ='absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';

    right = document.getElementById("right");
    right.addEventListener("click", function () {
        let movement = parseInt(rocket.style.left) + 10 + 'px';
        rocket.style.left = movement;
    });

    left = document.getElementById("left");
    left.addEventListener("click", function () {
        let movement = parseInt(rocket.style.left) - 10 + 'px';
        rocket.style.left = movement;
    });

    up = document.getElementById("up");
    up.addEventListener("click", function () {
        let movement = parseInt(rocket.style.bottom) + 10 + 'px';
        rocket.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    })

    down = document.getElementById("down");
    down.addEventListener("click", function () {
        let movement = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    });


})
