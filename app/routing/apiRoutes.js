var friends = require("../data/friends.js");
module.exports = function (app){

// Displays our friends object //////
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        const newFriend = req.body;
        console.log("=============" , newFriend , "========");
        let userTotal = 0;
        let lowestDifference = 100;

        for(let i =  0; i < newFriend.scores.length; i++){
            userTotal += parseInt(newFriend.scores[i]);
        }
        console.log("NewTotal!!!", userTotal ,"--------");
// Creating an object with  empty keys that we will define later
        const bestMatch = {
            name: "",
            photo: ""
        };

        for (let i = 0; i < friends.length; i ++){

            let totalDiff = 0;
            for(let j =  0; j < friends[i].scores.length; j++){
                const difference = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
                totalDiff += difference;
            }
            if(totalDiff < lowestDifference){
                lowestDifference = totalDiff;
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
            }
        }
        friends.push(newFriend);
        console.log(bestMatch);
        // We pass your new best friend to this
        res.json(bestMatch);
    });
};