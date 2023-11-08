# CodeCraft Challenge Lottery System

This is a Node.js command-line application for simulating a simple lottery game. Participants can purchase lottery tickets and then participate in a drawing to win prizes. The application allows users to interact with the following commandes: `buy tickets`, `trigger lottery draw`, and `check the results of the draw`.

## Features

- Purchase lottery tickets containing 3 random numbers with your first name.
- Trigger a lottery draw to select 3 winners.
- Display winning numbers and prize distribution in euros.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository or unzip the package and then 
   ```sh
   git clone https://github.com/yourusername/lottery-cli-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd lottery-cli-app
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

To run the application, use the following commands:

- Buy a lottery ticket:
   ```sh
   node src/index.js purchase
   ```

- Trigger a lottery draw:
   ```sh
   node src/index.js draw
   ```

- Display the winning tickets and prize distribution in euros:
   ```sh
   node src/index.js winners
   ```

## Commands

- `purchase`: Allows participants to purchase a lottery ticket by providing their first name. A ticket number will be assigned.

- `draw`: Triggers the lottery draw. Three winners will be randomly selected, and prize amounts will be calculated.

- `winners`: Displays the winning numbers and prize distribution in euros.
