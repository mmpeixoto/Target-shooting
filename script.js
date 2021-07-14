const targetGenerator = {
  generate() {
    let x = targetPosition.randomPosition();
    let y = targetPosition.randomPosition();

    let target = document.createElement("div");

    target.innerHTML = targetGenerator.innerHTMLTarget(x, y);
    document.getElementById("container").appendChild(target);
  },

  innerHTMLTarget(x, y) {
    const html = `<button draggable="false" class="target-button a${x} a${y}" onclick="targetKiller.kill(${x}, ${y}); pointsController.pointsCounter()" style="top: ${x}%; left: ${y}%">
    <img draggable="false" src="images/target-svgrepo-com.svg" class="target-Icon" alt="" />
  </button>`;

    return html;
  },
};

const targetKiller = {
  kill(x, y) {
    let button = document.querySelector(`.a${x}.a${y}`);
    button.parentElement.removeChild(button);
  },
};

const targetPosition = {
  randomPosition() {
    return Math.floor(Math.random() * 90) + 1;
  },
};

const pointsController = {
  pointsCounter() {
    points++;
  },
};

const timer = {
  timer() {
    let i = 61;
    let control = setInterval(function () {
      i--;
      document.querySelector("#timer").innerText = `${i}`;
      if (i == 0) {
        clearInterval(control);
        gameController.gameEnd(points);
      }
    }, 1000);
  },
};

const modal = {
  modalInit() {
    document.querySelector("#modal-background").classList.toggle("active");
  },
};

const gameController = {
  gameInit() {
    timer.timer();
    this.midGame();
  },
  midGame() {
    let i = 0;
    let control = setInterval(function () {
      targetGenerator.generate();
      i++;

      if (i == 120) {
        clearInterval(control);
      }
    }, 500);
  },
  gameEnd() {
    document.querySelector("#game-over-modal").classList.toggle("active");
    document.querySelector(
      "#game-over"
    ).innerText = `Você fez ${points} pontos!`;
  },
};

var points = 0;
