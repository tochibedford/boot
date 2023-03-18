const minimist = require("minimist");
const fs = require("fs");
const readline = require("readline");
const path = require("path");
const { exec } = require("child_process");

const argv = minimist(process.argv.slice(2));

//check for config.dat in same folder; create if it doesn't exist

let cwd = ".";
if (process.pkg) {
  cwd = path.dirname(process.argv[0]);
} else {
  cwd = path.dirname(process.argv[1]);
}

const pathToConfig = path.join(path.resolve(cwd), "config.dat");
if (!fs.existsSync(pathToConfig)) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("No config.dat file found, will automatically create one.");

  let inputPath;
  const myDataHandler = (line) => {
    inputPath = line.trim();
    if (!path.isAbsolute(inputPath)) {
      rl.close();
      throw "Path must be absolute";
    }
    rl.close();

    try {
      fs.writeFileSync(pathToConfig, path.resolve(inputPath));
    } catch {
      throw "Something went Wrong while writing to config.dat";
    }
    console.log(
      `config.dat created & written to successfully! Will boot projects to: ${path.resolve(
        inputPath
      )}`
    );

    //run main program
    programsRootAbs = path.resolve(inputPath);
    for (paths of argv._) boot(paths, programsRootAbs);
  };

  rl.question(
    "Please type the directory you would like to boot into...: ",
    myDataHandler
  );
} else {
  const programsRootAbs = path.resolve(fs.readFileSync(pathToConfig, "utf-8"));

  for (paths of argv._) boot(paths, programsRootAbs);
}

function boot(projectName, programsRootAbs) {
  const fullDirectory = path.join(...[programsRootAbs, String(projectName)]);
  fs.mkdir(fullDirectory, (err) => {
    if (err) throw err;

    exec(`code ${fullDirectory}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      if (stdout) {
        console.log(`stdout: ${stdout}`);
      }
    });
  });
}
