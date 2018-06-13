//variables in the game
var yourName;
var friendName;
var decOne;
var weaponRowBoat;
var randomFifty;
var randomSevenFive;
var playerHp = 16;
var zombieHp = 14;

//Endings


//start the game button
function startGame() {
  playerHp = 16;
  zombieHp = 14;
  yourName = prompt("You are in the middle of a zombie apocalypse. Your name is:");
  friendName = prompt("You also have one friend with you named:");
  decisionOne();
}

// made a function so I can recall it if wrong input
function decisionOne() {
  decOne = prompt("You and " + friendName + " are both running away from a horde of zombies right now. To your left is a one bicycle, but " + friendName + " will be left behind if you take it. To your right is a row boat that can fit both you and " + friendName + ", and heads out to a large lake. Do you choose the bicycle or row boat?").toLowerCase();
  dec1();
}

//first decision you have to make with the bike and a row boat
function dec1() {
  if (decOne === "bicycle") {
    alert("You take the bicycle and stare into " + friendName + "'s eyes as you pedal away. " + friendName + " get's eaten alive as you slowly smirk, whispering that you always hated " + friendName + ".");
    alert("You escape the zombie horde and survive, but end up lonely for the rest of your life.");
    alert("Thank you for playing! Please try the other option as well!");

    document.getElementById("text-area").innerHTML = "You are in the middle of a zombie apocalypse. Your name is: " + yourName + ". You also have one friend with you named: " + friendName + ". You and " + friendName + " are both running away from a horde of zombies right now. To your left is a one bicycle, but " + friendName + " will be left behind if you take it. To your right is a row boat that can fit both you and " + friendName + ", and heads out to a large lake. Do you choose the bicycle or row boat? " + "You take the bicycle and stare into " + friendName + "'s eyes as you pedal away. " + friendName + " get's eaten alive as you slowly smirk, whispering that you always hated " + friendName + ". You escape the zombie horde and survive, but end up lonely for the rest of your life. Thank you for playing! Please try the other option as well!";

  } else if (decOne === "row boat") {
    alert("You and " + friendName + " row out towards the middle of the lake. After calming down from running, you decide to look around the row boat for supplies.");
    decRowBoat();

//wrong input
  } else {
    alert("You couldn't type a correct answer, so both you and " + friendName + " are eaten by the horde.");
    alert("Please try again and type in 'bicycle' or 'row boat'.");
    decisionOne();
  }
}

// taking the row boat
function decRowBoat() {
  alert("As you search the boat for supplies, you find a rubber chicken, an axe, and a pool noodle. " + friendName + " does not have the strength to carry anthing else.");
  alert("As you decide what supplies to gather, you notice movement under a tarp within the row boat. Underneath was a zombie and it lunges towards you and " + friendName + "! You need to choose a weapon and attack the zombie.");
  weaponRowBoat = prompt("You reach for a weapon to attack with. What do you choose? " + "The rubber chicken does 2 damage, but has a higher chance of hitting. The axe does 5 damage, but has a low chance of hitting. The pool noodle does 1 damage, but has a guaranteed chance of hitting. The zombie has " + zombieHp + "hp, while you and your friend have a combined " + playerHp + "hp.").toLowerCase();
  randomFifty = Math.round(Math.random());
  randomSevenFive = Math.random()*10;
  boatAttack();
}

//changing weapons and endings.
function weaponChoice() {
  if (playerHp > 0 && zombieHp > 0) {
    randomFifty = Math.round(Math.random());
    randomSevenFive = Math.random()* 10;
    weaponRowBoat = prompt("What do you use to attack with next? Remember the rubber chicken does 2 damage at a higher chance of hitting, the axe does 5 damage at a low chance of hitting, and pool noodle at 1 damage at a guaranteed chance of hitting. You have " + playerHp + "hp left. While the zombie has " + zombieHp + "hp." ).toLowerCase();
    boatAttack();

//Player dies, zombie lives
  } else if (playerHp <= 0 && zombieHp > 0) {
    alert("Sadly, you were no match for the zombie. At least You and your friend, " + friendName + " did not die alone.");
    alert("Thank you for playing my game! Please try again and defeat the zombie!");

    document.getElementById("text-area").innerHTML = "You are in the middle of a zombie apocalypse. Your name is: " + yourName + ". You also have one friend with you named: " + friendName + ". You and " + friendName + " are both running away from a horde of zombies right now. To your left is a one bicycle, but " + friendName + " will be left behind if you take it. To your right is a row boat that can fit both you and " + friendName + ", and heads out to a large lake. Do you choose the bicycle or row boat? You and " + friendName + " row out towards the middle of the lake. After calming down from running, you decide to look around the row boat for supplies. As you search the boat for supplies, you find a rubber chicken, an axe, and a pool noodle. " + friendName + " does not have the strength to carry anthing else. As you decide what supplies to gather, you notice movement under a tarp within the row boat. Underneath was a zombie and it lunges towards you and " + friendName + "! You need to choose a weapon and attack the zombie. You reach for a weapon to attack with. What do you choose? " + "The rubber chicken does 2 damage, but has a higher chance of hitting. The axe does 5 damage, but has a low chance of hitting. The pool noodle does 1 damage, but has a guaranteed chance of hitting. In the end the zombie had " + zombieHp + "hp left, while you and your friend died. Sadly, you were no match for the zombie. At least you and your friend, " + friendName + " did not die alone. Thank you for playing my game! Please try again and defeat the zombie!";

//player lives, zombie dies
  } else if (playerHp > 0 && zombieHp <= 0) {
    alert("You defeated the zombie! As you rejoice defeating your biggest foe you have ever came across, " + friendName + " says, \"" + yourName + " let's get out of this box.\" Both you and " + friendName + " decide you were tired and stepped out of your imagination cardboard box.");
    alert("Thank you for playing my game and making it to the end!");

    document.getElementById("text-area").innerHTML = "You are in the middle of a zombie apocalypse. Your name is: " + yourName + ". You also have one friend with you named: " + friendName + ". You and " + friendName + " are both running away from a horde of zombies right now. To your left is a one bicycle, but " + friendName + " will be left behind if you take it. To your right is a row boat that can fit both you and " + friendName + ", and heads out to a large lake. Do you choose the bicycle or row boat? You and " + friendName + " row out towards the middle of the lake. After calming down from running, you decide to look around the row boat for supplies. As you search the boat for supplies, you find a rubber chicken, an axe, and a pool noodle. " + friendName + " does not have the strength to carry anthing else. As you decide what supplies to gather, you notice movement under a tarp within the row boat. Underneath was a zombie and it lunges towards you and " + friendName + "! You need to choose a weapon and attack the zombie. You reach for a weapon to attack with. What do you choose? " + "The rubber chicken does 2 damage, but has a higher chance of hitting. The axe does 5 damage, but has a low chance of hitting. The pool noodle does 1 damage, but has a guaranteed chance of hitting. In the end the zombie was defeated, while you and your friend were left with " + playerHp + "hp. You defeated the zombie! As you rejoice defeating your biggest foe you have ever came across, " + friendName + " says, \"" + yourName + " let's get out of this box.\" Both you and " + friendName + " decide you were tired and stepped out of your imagination cardboard box. Thank you for playing my game and making it to the end!";

//Both zombie and player lose
  } else if (playerHp === 0 && zombieHp === 0) {
    alert("You defeat the zombie! However your luck was low so you ended up bitten by the zombie. You and " + friendName + " slowly turn into zombies and devote a life to eating brains.");
    alert("Both the player and the zombie lost all health. Thank you for playing my game. Please try again to defeat the zombie before losing your health points.");

    document.getElementById("text-area").innerHTML = "You are in the middle of a zombie apocalypse. Your name is: " + yourName + ". You also have one friend with you named: " + friendName + ". You and " + friendName + " are both running away from a horde of zombies right now. To your left is a one bicycle, but " + friendName + " will be left behind if you take it. To your right is a row boat that can fit both you and " + friendName + ", and heads out to a large lake. Do you choose the bicycle or row boat? You and " + friendName + " row out towards the middle of the lake. After calming down from running, you decide to look around the row boat for supplies. As you search the boat for supplies, you find a rubber chicken, an axe, and a pool noodle. " + friendName + " does not have the strength to carry anthing else. As you decide what supplies to gather, you notice movement under a tarp within the row boat. Underneath was a zombie and it lunges towards you and " + friendName + "! You need to choose a weapon and attack the zombie. You reach for a weapon to attack with. What do you choose? " + "The rubber chicken does 2 damage, but has a higher chance of hitting. The axe does 5 damage, but has a low chance of hitting. The pool noodle does 1 damage, but has a guaranteed chance of hitting. You defeat the zombie! However your luck was low so you ended up bitten by the zombie. You and " + friendName + " slowly turn into zombies and devote a life to eating brains. Both the player and the zombie lost all health. Thank you for playing my game. Please try again to defeat the zombie before losing your health points.";
  }
}

// this is the boat attack section. for axe, rubber chicken, and pool noodle action
function boatAttack() {
//Rubber chicken
    if (weaponRowBoat === "rubber chicken" && randomSevenFive <= 7.5) {
    alert("You grab the " + weaponRowBoat + ", and tried to smacked the zombie with it. It was not very effective and damaged the zombie by 2hp. The zombie hits you back for 2hp.");
    zombieHp -= 2;
    playerHp -= 2;
    console.log("zombie" + zombieHp);
    console.log("player" + playerHp);
    weaponChoice();

  } else if (weaponRowBoat === "rubber chicken" && randomSevenFive > 7.5) {
    alert("You grab the " + weaponRowBoat + ", and tried to smacked the zombie with it. You completely miss , and he zombie hits you for 2hp.")
    playerHp -=2;
    console.log("zombie" + zombieHp);
    console.log("player" + playerHp);
    weaponChoice();

//Axe
  } else if (weaponRowBoat === "axe" && randomFifty === 1) {
    alert("You grab the " + weaponRowBoat + ", and swing it with all your might to the zombie. You hit the zombie, and stagger him. This takes off 5hp while you are dealt 1hp in damage.");
    zombieHp -= 5;
    playerHp -= 1;
    console.log("zombie" + zombieHp);
    console.log("player" + playerHp);
    weaponChoice();

  } else if (weaponRowBoat === "axe" && randomFifty === 0) {
    alert("You grab the " + weaponRowBoat + ", and swing it with all your might, but you miss. This allows the zombie to take a bite into you and deal 3hp of damage.");
    playerHp -= 3;
    console.log("zombie" + zombieHp);
    console.log("player" + playerHp);
    weaponChoice();

//pool noodle
  } else if (weaponRowBoat === "pool noodle") {
    alert("You grab the " + weaponRowBoat + " and swing it towards the zombie. You deal 1 whole damage to the zombie. The zombie is angered by the attack and damages you by 3hp.");
    playerHp -= 3;
    zombieHp -= 1;
    console.log("zombie" + zombieHp);
    console.log("player" + playerHp);
    weaponChoice();

//wrong input
  } else {
    alert("You couldn't decide in time so both you and " + friendName + " receive one damage.");
    playerHp -= 1;
    if (playerHp > 0) {
      alert("Please try again and type in 'rubber chicken' , 'axe' ,or 'pool noodle'.");
      weaponChoice();
    } else {
      weaponChoice();
    }
  }
}

//hello :)
console.log('Hello World!');
