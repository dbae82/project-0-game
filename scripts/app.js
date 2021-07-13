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
};

$("#start-btn").on("click", function(event) {
    // console.log(`Hello ${$("input").val()}`);
    const player = new Character(`${$("input").val()}`);
    console.log(player);
});