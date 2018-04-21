# Provinatus-Build
Contains the code that generates the final output for Provinatus so we don't put a bunch of useless files on other people's computers.

## Official Mod Page
[Provinatus ESOUI](http://www.esoui.com/downloads/info1943-Provinatus.html)

## Prerequisites
- [Yarn](https://yarnpkg.com) - I use 1.3.2, you're experience could definitely differ if you are on a different version.
- This project uses [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). <br/>
  - To get the full Provinatus experience run the following command. <br/>
  `git clone https://provinatus.visualstudio.com/_git/Provinatus --recurse-submodules`
### Install dependencies
- [Yarn](https://yarnpkg.com) will install [Grunt](https://gruntjs.com/) and needed tasks.

### Yarn Scripts
Some scripts include a 'clean' option. The main variable used in the scripts is 'releaseFolder' It will delete whatever you put in there (if it can... not that I've ever done that). <br/>
- [package.json](package.json) includes scripts to automate some tasks. Definitely WIP. <br/>
Run them by calling: <br/>
`yarn run <name of script>`

### Grunt tasks
- `grunt clean:build [--releaseFolder=<modDirectory>]` 
  - deletes `./build` folder (or `--releaseFolder` if provided). 
  - Careful! I heard this will delete all your addons, or anything for that matter, if you get complacent.
- `grunt copy [--releaseFolder=<modDirectory>]`
  - Copies `./Provinatus` to `./build` folder (or `--releaseFolder` if provided)
- `grunt replace [--releaseFolder=<modDirectory>, --versionNumber=<versionNumber>]`
  - Replaces text in select folders with the version number. 
  - ESOUI release numbers based off of Provinatus-CI build number
  - See [Gruntfile.js](Gruntfile.js) for more details.
- `grunt release [--releaseFolder=<modDirectory>]`
  - Creates `Provinatus.zip` from `<--releaseFolder>/Provinatus` dumps it in `<--releaseFolder>/Provinatus.zip`
#### Again, these tasks are WIP. Not that anyone is actually looking at these... Are you?
