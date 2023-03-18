# BOOT

## BAREBONES PROJECT BOOTSTRAPPER

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Running Boot

Get the binary here: [bin](./bin)

I wrote this bootstrapper in node to automate my project start up process. Although it's still bare-bones, it's able to replicate my process when i run:

```cmd
>>> boot my_project_name
```

It creates a new folder, then launches vscode in that folder.
It uses a `config.dat` file in the same directory to know where to store and launch the project from.
