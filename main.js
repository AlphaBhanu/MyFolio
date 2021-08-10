const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help: 'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">resume</span>',
  about:
    "Hello Human from the other side of the window, I am Bhanu Pratap (naam toh suna hi hoga ,common jo itna h), pursuing Master of Computer Applications from MOTILAL NEHRU NATIONAL INSTITUTE OF TECHNOLOGY, ALLAHABAD. I love to solve puzzles and explore new stuff. The thing that excites me the most is travelling and exploring new places. I Hope this would be enough for you to understand me :)",
  skills:
    '<span class="code">Languages:</span> C++, Python, JavaScript<br><span class="code">Technologies:</span> Git, Github (Basic)<br><span class="code">Frameworks | Libraries:</span> React.js, Bootstrap',
  education:
    "<b>12th: Sarswati Gyan Mandir Inter College, Fatehabad, Uttar Pradesh </b><br> <br><b>BSc: Dr. Bhimrao Ambedkar University, Agra</b><br> <br><b>MCA: Motilal Nehru National Institute of Technology, Allahabad</b>",

  resume:
    "<a href='https://drive.google.com/drive/folders/19i9VTyaKDbuYPFnSCOGvtWJmp0jYTVNp?usp=sharing/' class='success link'>Resume.pdf</a>",
  experience:
    "Fresher but got bit of experience from some personal projects and portfolio",
  contact:
    "You can contact me using any of the following methods:<br><a href='https://www.facebook.com/BhanuPS11' class='success link'>Facebook</a> , <a href='https://www.linkedin.com/in/bhanups10/' class='success link'>LinkedIn</a>",
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
