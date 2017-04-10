[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Deployed URL

https://buffalo0707.github.io/tic-tac-toe-client/#

## Tic-Tac-Toe Project

A game for two players, set in the Star Wars universe.

Player 1 can sign-up and login. After logging in, Player 1 can pick a faction: Rebels of Empire. A new game is created on the server using HTTP POST request after selectinvg a faction. Player 1 can then begin a game of tic-tac-toe against another player using the same computer/device.

After each move, the game is updated on the server via HTTP PATCH request

Player 1's stats (wins and completed games) are tracked and updated after each game is completed. The stats are calculated using an index of games return from the server after an HTTP GET request.

While logged in, Player 1 can update his/her password and also log out of the game.

This is a Single Page Application. All view changes are handled by hiding/showing sections of the index.html page. 


## User Stories

* As a user, I want to be able to login to a TicTacToe Game website so that I can access a game
* As a user, I want to be able to create a new account so that I can login
* As a user, I want to be able to change my password so that I can feel more secure about my account
* As a user, I want to be able to logout to ensure that my account isn’t still logged in when I am not playing
* As a user, I want to be able to start a new game that I can play tic-tac-toe against someone sitting next to me
* As a user, I want to be able to place my marker within a space on the board so that I can claim that space
* As a user, I want to see a marker in spaces my opponent has claimed so that I know what to move I should play next
* As a user, I want to win a game if I have claimed all spaces in a row,  column, or diagonal direction
* As a user, I want to see who won a completed game of tic-tac-toe in which there is a winner so I know the game is over
* As a user, I want to see if a game has ended in a stalemate so I know the game is over
* As a user, I want to see the total number of games I have ever won while logged inso that I know how good of a player I am
* As a user, I want to see the total number of games I have ever played so that I know how many games I have played
* As a user, I want to know whose turn it is so I know who should make a move
* As a user, I want to be able to start a new game after completing a game so that I can keep playing
* As a user, I want to see an error message if I am unable to join a game so I know why
* As a non-registered user, I want to see an access denied message when I try to login to the site so that I know why I cannot login

Nice to have
* As a user, I want to be able to change my marker so that I can customize the game
* As a user, I want to be able to access the site on a mobile device so that I can play on-the-go

## Wireframe

The initial wireframe can be found here: http://imgur.com/Y9a96c3

The end result of the site included screens not shown in the wireframes.

## Development Approach

* Utilized knowledge of HTML/CSS/SASS, Bootstrap, JS, AJAX, and jQuery
* Created wireframe and user stories before beginning development
* Began working on the smalleast, easiest to solve issues using the user story backlog as a guide
* Created branches for each new feature (when I remembered to do so)
* Utilized online resources as well as classmates for assistance and inspiration

## Challenges

* Managing workflow with Git/GitHub:
  * Remembering to create branches instead of working off the Master branch
  * Remembering to merge changes back to master branch
  * Understanding where my work is after I've made change-password-alert

* Keeping the big picture in mind while making coding/design decisions
  * I ended up with more global level variables than I would have liked
  * Could have avoided this by using objects, but there was no time to go back and refactor everything
  * I also feel like my code can be DRY-er by using additional array/object iteration

* UI and Design Considerations
  * Thank goodness for Bootstrap. Without it, I would have struggled to create anything even moderately attractive.

* Modular Design
  * Lost track of code across the various files I created. I feel that I have good separation of concerns, but not every function/variable ended up in the most logical home.

* Final Thoughts
  * This was a lot of fun to build.
  * I feel like I have a strong grasp on the fundamentals of the technologies used
  * I enjoyed helping my classmates and learning from them as well
  * In the next project, I will focus more on the development workflow and maintaining a neat, elegant code-base.


## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
