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
        this.round = 1;
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
    playerDied (num) {
        if (num <= 0) {
            clearInterval(this.timer);
            $("#game-over-screen").css("display", "flex");
            $(".animate__heartBeat").css("animation-iteration-count", "0");
        };
    };
    playerRetired () {
        if (this.clock <= 0) {
            clearInterval(this.timer);
            $("#game-over-screen").css("display", "flex");
            $("#message p").text("Congrats on retirement!!");    
            $(".animate__heartBeat").css("animation-iteration-count", "0");
        };
    };
    zeroStat (num) {
        if (num <= 0) {
            clearInterval(this.timer);
            $("#game-over-screen").css("display", "flex");
            $(".animate__heartBeat").css("animation-iteration-count", "0");
        }else if (this.clock <= 0) {
            clearInterval(this.timer);
            $("#game-over-screen").css("display", "flex");
            $("#message p").text("Congrats on retirement!!");    
            $(".animate__heartBeat").css("animation-iteration-count", "0");
        };
    }
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
        this.work -= 2;
        this.play -= 3;
        this.coffee -= 4;
        this.clock -= 50;
        $("#red").attr("value", `${player.work}`);
        $("#green").attr("value", `${player.play}`);
        $("#blue").attr("value", `${player.coffee}`);
        this.zeroStat(this.work);
        this.zeroStat(this.play);
        this.zeroStat(this.coffee);
    }
    startTimerOne() {
        this.timer = setInterval(this.reduceStatusOne, 1000);
    };
    startTimerTwo() {
        this.timer = setInterval(this.reduceStatusTwo, 1000);
    }
    firstEvolve() {
        clearInterval(this.timer);
        this.clock = 1000;
        $("#player-img").attr("src", "assets/worker.png");
        $("#red-btn").text("Work");
        $("#green-btn").text("Play");
        $("#blue-btn").text("Coffee");
        this.startTimerTwo();
        this.reduceStatusTwo();
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
    player.startTimerOne();
    $("#red").attr("value", `${player.health}`);
    $("#green").attr("value", `${player.sleep}`);
    $("#blue").attr("value", `${player.study}`);
});

$("#red-btn").on("click", function(event) {
    // console.log("clicked red!");
    player.addHealth();
    $("#red").attr("value", `${player.health}`);
    // $("#red").attr("value", `${player.work}`);
    // $(".fa-plus-square").addclass("animate__bounceIn");
});

$("#green-btn").on("click", function(event) {
    // console.log("clicked green!");
    player.addSleep();
    $("#green").attr("value", `${player.sleep}`);
    // $("#green").attr("value", `${player.play}`);
});

$("#blue-btn").on("click", function(event) {
    // console.log("clicked blue!");
    player.addStudy();
    $("#blue").attr("value", `${player.study}`);
    // $("#blue").attr("value", `${player.coffee}`);
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
    player.startTimerOne();
});

// got wonderful assistance from our great TAs Jackson and Whitney