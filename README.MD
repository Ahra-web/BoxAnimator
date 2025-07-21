# Command-based Animation Demo

## Overview

This is a simple web project that allows users to control the animation and style of a colored box by typing commands or clicking example keywords.

---

## Features

- **Run commands via form input** (e.g. "rotate", "move", "red", "rounded", "reset")  
- **Toggle commands list help** using a Font Awesome question mark icon  
- **Click example commands to run them immediately**  
- **Color toggle:** when the color command ("red" or "green") is used, it switches the box's color between red and green  

---

## Technologies Used

- **HTML** — Structure of the page  
- **CSS** — Styling and animations  
- **JavaScript** — Logic for parsing commands, handling events, and animating the box  
- **Font Awesome** — Icon library used for the help button icon via CDN  

---

## How It Works

1. User types a command in the input box and presses "Run" or clicks a command keyword below.  
2. JavaScript parses the command and updates the box's style accordingly:
   - `rotate`: rotates the box 360 degrees  
   - `move`: moves the box left or back  
   - `red`/`green`: toggles the box color between red and green  
   - `rounded`: toggles rounded corners  
   - `reset`: resets box to default style  

3. The help icon toggles visibility of the list of available commands.

---

## How to Use

1. Open `index.html` in a modern web browser.  
2. Type any of the supported commands and click "Run".  
3. Or click the help icon, then click any example keyword to apply it instantly.

---

## https://ahra-web.github.io/BoxAnimator/
