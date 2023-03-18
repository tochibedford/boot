# BOOT

## BAREBONES PROJECT BOOTSTRAPPER

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Running Boot

> Get the binary here: [bin](./bin)
> Add the folder you store boot.exe in to path. (i.e. if boot.exe is stored in "C:\Program Files\boot\boot.exe" then add "C:\Program Files\boot" to path)
> Then in any windows terminal session you can now run (you'll probably need to use a fresh terminal session to do this):

```cmd
>>> boot my_project_name
```

### About

I wrote this bootstrapper in node to automate my project start up process. Although it's still bare-bones, it's able to replicate my process when i run:

It creates a new folder, then launches vscode in that folder.
It uses a `config.dat` file in the same directory to know where to store and launch the project from.

### Final words

This was written in node and built to target a windowsx64 machine, if you'd like to try it on another type of machine it can easily be rebuilt for that machine using 'pkg' from vercel. I have not tested this on other machine types though... : )
