var playerName = window.prompt("What would you like to name your robot?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function statements
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd liked to fight or skip this game
    var promptFight = window.prompt(
      'Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        // console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(" Your enemy " + enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// GAME STATES
// WIN -> Player robot defeats all enemy robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot

// LOSE -> Player robot's health reaches zero or less
// function to start a new game
// var startGame = function () {
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    // pick new enemy to fight based on index of enemyNames array
    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;
    for (var i = 0; i < enemyNames.length; i++) {
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    }
  }
  // if player isn't alive, end the game
  else {
    window.alert("Your robot has died in battle! Game Over!");
    break;
  }
}

// var promptFight = window.prompt(
//   "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
// );

// // if player choses to fight, then fight
// if (promptFight === "fight" || promptFight === "FIGHT") {
//   // remove enemy's health by subtracting the amount set in the playerAttack variable
//   enemyHealth = enemyHealth - playerAttack;
//   console.log(
//     playerName +
//       " attacked " +
//       enemyName[0] +
//       ". " +
//       enemyName[0] +
//       " now has " +
//       enemyHealth +
//       " health remaining."
//   );

//   // check enemy's health
//   if (enemyHealth <= 0) {
//     window.alert(enemyNames + " has died!");

//        // award player money for winning
//        playerMoney = playerMoney + 20;

//     break;
//   } else {
//     window.alert(enemyName + " still has " + enemyHealth + " health left.");
//   }

//   // remove player's health by subtracting the amount set in the enemyAttack variable
//   playerHealth = playerHealth - enemyAttack;
//   console.log(
//     enemyName[0] +
//       " attacked " +
//       playerName +
//       ". " +
//       playerName +
//       " now has " +
//       playerHealth +
//       " health remaining."
//   );

//     // check player's health
//     if (playerHealth <= 0) {
//         window.alert(playerName + ' has died!');
//         // leave while() loop if player is dead
//         break;
//       } else {
//         window.alert(playerName + ' still has ' + playerHealth + ' health left.');
//       }
//     }
//   };

// // fight each enemy-robot by looping over them and fighting them one at a time
// for (var i = 0; i < enemyNames.length; i++) {
//     // if player is still alive, keep fighting
//     if (playerHealth > 0) {
//       // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
//       window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

//       // pick new enemy to fight based on the index of the enemyNames array
//       var pickedEnemyName = enemyNames[i];

//       // reset enemyHealth before starting new fight
//       // enemyHealth = 50;

//       // use debugger to pause script from running and check what's going on at that moment in the code
//       debugger;

//       // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
//       fight(pickedEnemyName);
//     }
//     // if player isn't alive, stop the game
//     else {
//       window.alert('You have lost your robot in battle! Game Over!');
//     }
//   }
