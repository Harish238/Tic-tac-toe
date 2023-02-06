<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav>
      <ul>
        <li>MyTicTacToe.com</li>
      </ul>
    </nav>

    <div class="gameContainer">
        <div class="container">
          <div class="line"></div>
        <div class="box bt-0 bl-0"><span class="boxtext"></span></div>
        <div class="box bt-0"><span class="boxtext"></span></div>
        <div class="box bt-0 br-0"><span class="boxtext"></span></div>
        <div class="box bl-0"><span class="boxtext"></span></div>
        <div class="box"><span class="boxtext"></span></div>
        <div class="box br-0"><span class="boxtext"></span></div>
        <div class="box bl-0 bb-0"><span class="boxtext"></span></div>
        <div class="box bb-0"><span class="boxtext"></span></div>
        <div class="box bb-0 br-0"><span class="boxtext"></span></div>
      </div>
      <div class="gameInfo">
        <h1>Welcome to Tic Tac MyTicTacToe</h1>
        <div>
          <span class="info">Turn for X</span>
          <button id="reset">Reset</button>
        </div>
        <div class="imgbox">
          <img src="excited.gif" alt="" />
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
