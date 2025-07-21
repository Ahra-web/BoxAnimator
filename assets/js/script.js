const form = document.getElementById("commandForm");
const input = document.getElementById("commandInput");
const box = document.getElementById("box");
const toggleHelp = document.getElementById("toggleHelp");
const helpBox = document.getElementById("helpBox");
const commandList = document.getElementById("commandList");

function runCommand(command) {
  command = command.toLowerCase().trim();

  if (command.includes("reset")) {
    box.className = "";
    box.style = "";
    return;
  }

  if (command.includes("rotate")) {
    box.classList.remove("rotate");
    void box.offsetWidth;
    box.classList.add("rotate");
  }

  if (command.includes("move")) {
    box.classList.toggle("move-left");
  }

  if (command.includes("red") || command.includes("green")) {
    if (box.classList.contains("red")) {
      box.classList.remove("red");
      box.classList.add("green");
    } else if (box.classList.contains("green")) {
      box.classList.remove("green");
      box.classList.add("red");
    } else {
      box.classList.add("red");
    }
  }

  if (command.includes("rounded")) {
    box.classList.toggle("rounded");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  runCommand(input.value);
  input.value = "";
});

toggleHelp.addEventListener("click", () => {
  helpBox.classList.toggle("hidden");
});

commandList.addEventListener("click", (e) => {
  if (e.target.classList.contains("command-item")) {
    runCommand(e.target.textContent);
  }
});