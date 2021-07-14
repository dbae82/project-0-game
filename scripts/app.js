console.log("This is the life of a developer");
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.sleep = 100;
        this.study = 100;
        this.work = 100;
        this.play = 100;
        this.coffee = 100;
        this.rest = 100;
        this.happiness = 100;
    };
    addHealth() {
        return this.health ++;
    };
    addSleep() {
        return this.sleep ++;
    };
    addStudy() {
        return this.study ++;
    };
    reduceStatusBar() {
        // console.log("type of health", typeof this.health);
        this.health -= 20;
        // this.sleep --;
        // this.study --;
        console.log("health", this.health);
    };
    startTimer() {
        setInterval(this.reduceStatusBar, 1000);
    };
};

let player;

$("#start-btn").on("click", function(event) {
    player = new Character(`${$("input").val()}`);
    console.log(player);
    console.log(player.health);
    console.log(typeof player.health);
    $("#character-name").text(`${player.name}`);
    $("#start-screen").css("display", "none");
    $("#character-screen").css("display", "flex");
    player.startTimer();
    $("#red").attr("value", `${player.health}`);
    $("#green").attr("value", `${player.sleep}`);
    $("#blue").attr("value", `${player.study}`);
});

$("#red-btn").on("click", function(event) {
    // console.log("clicked red!");
    // console.log(player);
    player.addHealth();
    $("#red").attr("value", `${player.health}`);
});

$("#green-btn").on("click", function(event) {
    // console.log("clicked green!");
    player.addSleep();
    $("#green").attr("value", `${player.sleep}`);
});

$("#blue-btn").on("click", function(event) {
    // console.log("clicked blue!");
    player.addStudy();
    $("#blue").attr("value", `${player.study}`);
});

// got wonderful assistance from our great TAs Jackson and Whitney