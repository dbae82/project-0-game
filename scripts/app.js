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
        this.clock = 1000;
        this.timer = null;
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
    zeroStat (num) {
        if (num <= 0) {
            clearInterval(this.timer);
            $("#game-over-screen").css("display", "flex");
        }else if (this.clock <= 0) {
            clearInterval(this.timer);
            $("#game-over-screen").css("display", "flex");
            $("#message p").text("Congrats on retirement!!");    
        };
    }
    reduceStatusBar = () => {
        // console.log("type of health", typeof this.health);
        this.health -= 2;
        this.sleep -= 3;
        this.study -= 4;
        this.clock -= 100;
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
        this.zeroStat(this.health);
        this.zeroStat(this.sleep);
        this.zeroStat(this.study);
    };
    startTimer() {
        this.timer = setInterval(this.reduceStatusBar, 1000);
    };
    resetGame() {
        clearInterval(this.timer);

    };
};

let player;

$("#start-btn").on("click", function(event) {
    player = new Character(`${$("input").val()}`);
    // console.log(player);
    // console.log(player.health);
    // console.log(typeof player.health);
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
    // $(".fa-plus-square").addclass("animate__bounceIn");
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

$("#reset-btn").on("click", function(event) {
    // console.log("start over clicked!");
    $("#game-over-screen").css("display", "none");
    $("#character-screen").css("display", "none");
    $("#start-screen").css("display", "block");
});

// got wonderful assistance from our great TAs Jackson and Whitney