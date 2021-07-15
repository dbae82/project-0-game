console.log("This is the life of a developer");
class Character {
    constructor(name) {
        this.name = name;
        this.age = 26;
        this.health = 100;
        this.sleep = 100;
        this.study = 100;
        this.work = 100;
        this.play = 100;
        this.coffee = 100;
        this.rest = 100;
        this.happiness = 100;
        this.clock = 1000;
        this.timer = null;
        this.round = 1;
        this.aging = null;
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
    addWork() {
        return this.work ++;
    };
    addPlay() {
        return this.play ++;
    };
    addCoffee() {
        return this.coffee ++;
    };
    addRest() {
        return this.rest ++;
    };
    addHappiness() {
        return this.happiness ++;
    };
    
    playerDied (num) {
        if (num <= 0) {
            clearInterval(this.timer);
            clearInterval(this.aging);
            $("#game-over-screen").css("display", "flex");
            $(".animate__heartBeat").css("animation-iteration-count", "0");
        };
    };
    // playerRetired () {
    //     if (this.clock <= 0) {
    //         clearInterval(this.timer);
    //         $("#game-over-screen").css("display", "flex");
    //         $("#message p").text("Congrats on retirement!!");    
    //         $(".animate__heartBeat").css("animation-iteration-count", "0");
    //     };
    // };
    zeroStat (num) {
        if (num <= 0) {
            clearInterval(this.timer);
            clearInterval(this.aging);
            $("#game-over-screen").css("display", "flex");
            $(".animate__heartBeat").css("animation-iteration-count", "0");
        }else if (this.clock <= 0) {
            clearInterval(this.timer);
            $("#game-over-screen").css("display", "flex");
            $("#message p").text("Congrats on retirement!!");    
            $(".animate__heartBeat").css("animation-iteration-count", "0");
        };
    };
    reduceStatusOne = () => {
        // console.log("type of health", typeof this.health);
        this.health -= 2;
        this.sleep -= 3;
        this.study -= 4;
        this.clock -= 50;
        // console.log("health", this.health);
        // console.log("sleep", this.sleep);
        // console.log("study", this.study);
        $("#red").attr("value", `${player.health}`);
        $("#green").attr("value", `${player.sleep}`);
        $("#blue").attr("value", `${player.study}`);
        // if (this.health <= 0) {
        //     // console.log("no more health");
        //     clearInterval(this.timer);
        //     $("#game-over-screen").css("display", "flex");
        // }else if (this.clock <= 0) {
        //     clearInterval(this.timer);
        //     $("#game-over-screen").css("display", "flex");
        //     $("#message p").text("Congrats on retirement!!");    
        // };
        // if (this.sleep <= 0) {
        //     // console.log("no more health");
        //     clearInterval(this.timer);
        //     $("#game-over-screen").css("display", "flex");
        // }else if (this.clock <= 0) {
        //     clearInterval(this.timer);
        //     $("#game-over-screen").css("display", "flex");
        //     $("#message p").text("Congrats on retirement!!");    
        // };
        // if (this.study <= 0) {
        //     // console.log("no more health");
        //     clearInterval(this.timer);
        //     $("#game-over-screen").css("display", "flex");
        // }else if (this.clock <= 0) {
        //     clearInterval(this.timer);
        //     $("#game-over-screen").css("display", "flex");
        //     $("#message p").text("Congrats on retirement!!");    
        // };
        // this.zeroStat(this.health);
        // this.zeroStat(this.sleep);
        // this.zeroStat(this.study);
        this.playerDied(this.health);
        this.playerDied(this.sleep);
        this.playerDied(this.study);
        if (this.clock <= 0) {
            this.firstEvolve();
            this.round ++;
        };
        
    };
    reduceStatusTwo = () => {
        this.work -= 3;
        this.play -= 4;
        this.coffee -= 5;
        this.clock -= 50;
        $("#red").attr("value", `${player.work}`);
        $("#green").attr("value", `${player.play}`);
        $("#blue").attr("value", `${player.coffee}`);
        this.playerDied(this.work);
        this.playerDied(this.play);
        this.playerDied(this.coffee);
        if (this.clock <= 0) {
            this.secondEvolve();
            this.round ++;
        };
    };
    reduceStatusThree = () => {
        this.work -= 2;
        this.rest -= 7;
        this.happiness -= 6;
        this.clock -= 50;
        $("#red").attr("value", `${player.work}`);
        $("#green").attr("value", `${player.rest}`);
        $("#blue").attr("value", `${player.happiness}`);
        this.zeroStat(this.work);
        this.zeroStat(this.rest);
        this.zeroStat(this.happiness);
    };
    startTimerOne() {
        this.timer = setInterval(this.reduceStatusOne, 1000);
    };
    startTimerTwo() {
        this.timer = setInterval(this.reduceStatusTwo, 1000);
    };
    startTimerThree() {
        this.timer = setInterval(this.reduceStatusThree, 1000);
    };
    firstEvolve() {
        clearInterval(this.timer);
        this.clock = 1000;
        $("#player-img").attr("src", "assets/worker.png");
        $("#red-btn").text("Work");
        $("#green-btn").text("Play");
        $("#blue-btn").text("Coffee");
        this.age = 30;
        $("#character-name").text(`${player.name}, ${player.age} years old`);
        this.startTimerTwo();
        this.reduceStatusTwo();
        this.startAging();
    };
    secondEvolve() {
        clearInterval(this.timer);
        this.clock = 1000;
        $("#player-img").attr("src", "assets/oldguy.png");
        $("#red-btn").text("Work");
        $("#green-btn").text("Rest");
        $("#blue-btn").text("Happiness");
        this.age = 63;
        $("#character-name").text(`${player.name}, ${player.age} years old`);
        this.startTimerThree();
        this.reduceStatusThree();
    };
    playerAging = () => {
        this.age ++;
        $("#character-name").text(`${player.name}, ${player.age} years old`);
    };
    startAging() {
        this.aging = setInterval(this.playerAging, 5000);
    };
};

let player;

$("#start-btn").on("click", function(event) {
    player = new Character(`${$("input").val()}`);
    // console.log(player);
    // console.log(player.health);
    // console.log(typeof player.health);
    $("#character-name").text(`${player.name}, ${player.age} years old`);
    $("#start-screen").css("display", "none");
    $("#character-screen").css("display", "flex");
    player.startTimerOne();
    $("#red").attr("value", `${player.health}`);
    $("#green").attr("value", `${player.sleep}`);
    $("#blue").attr("value", `${player.study}`);
});

$("#red-btn").on("click", function(event) {
    // console.log("clicked red!");
    if (player.round === 1) {
        player.addHealth();
        $("#red").attr("value", `${player.health}`);
    };
    if (player.round === 2) {
        player.addWork();
        $("#red").attr("value", `${player.work}`);
    };
    if (player.round === 3) {
        player.addWork();
        $("#red").attr("value", `${player.work}`);
    };
});

$("#green-btn").on("click", function(event) {
    // console.log("clicked green!");
    if (player.round === 1) {
        player.addSleep();
        $("#green").attr("value", `${player.sleep}`);
    };
    if (player.round === 2) {
        player.addPlay();
        $("#green").attr("value", `${player.play}`);
    };
    if (player.round === 3) {
        player.addRest();
        $("#green").attr("value", `${player.rest}`);
    };
});

$("#blue-btn").on("click", function(event) {
    // console.log("clicked blue!");
    if (player.round === 1) {
        player.addStudy();
        $("#blue").attr("value", `${player.study}`);
    };
    if (player.round === 2) {
        player.addCoffee();
        $("#blue").attr("value", `${player.coffee}`);
    };
    if (player.round === 3) {
        player.addHappiness();
        $("#blue").attr("value", `${player.happiness}`);
    };
});

$("#reset-btn").on("click", function(event) {
    // console.log("start over clicked!");
    $("#game-over-screen").css("display", "none");
    $("#character-screen").css("display", "none");
    $("#start-screen").css("display", "block");
    $(".animate__heartBeat").css("animation-iteration-count", "infinite");
    $("#red-btn").text("Health");
    $("#green-btn").text("Sleep");
    $("#blue-btn").text("Study");
    $("#player-img").attr("src", "assets/student.png");
});

// got wonderful assistance from our great TAs Jackson and Whitney
// help with callback functions turning it into an arrow function by Adonis
// help with buttons from April