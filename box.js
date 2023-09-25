const chalk = require("chalk");
const boxen = require("boxen");
const boxData = {
  name: `${
    chalk.bold("👋 Hey, I am ") +
    chalk.cyan("Harsh\n") +
    chalk.grey("I know little bit of coding.")
  }`,
  work: "yet to speak about it.😅",
  github: chalk.gray("https://github.com/") + chalk.green("hrshkshri"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.green("hrsh-kshri"),
  portfolio: chalk.green("https://harsh-keshari.vercel.app/"),
  npx: chalk.green("npx") + " " + chalk.white("hrshkshri"),
  printWork: chalk.white.bold("Work:"),
  printLinkedIn: chalk.white.bold("LinkedIn:"),
  printGithub: chalk.white.bold("GitHub:"),
  printPortfolio: chalk.white.bold("Portfolio:"),
  printCommd: chalk.white.bold("Commd:"),
};

exports.Box = boxen(
  [
    `${boxData.name}`,
    ``,
    `${boxData.printWork}  ${boxData.work}`,
    ``,
    `${boxData.printGithub}  ${boxData.github}`,
    `${boxData.printLinkedIn}  ${boxData.linkedin}`,
    `${boxData.printPortfolio}  ${boxData.portfolio}`,
    ``,
    `${boxData.npx}`,
    ``,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "cyan",
  }
);
