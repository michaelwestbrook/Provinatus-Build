# Provinatus-Build
Contains the code that generates the final output for Provinatus so we don't put a bunch of useless files on other people's computers.

This project uses [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). To get the full experience run the following command.
- `git clone https://github.com/michaelwestbrook/Provinatus-Build.git --recurse-submodules`

Install dependencies
- `yarn`
- If you don't have/like yarn, `npm install` should also work

Only basic copy/delete/zip commands enabled ATM.
- `grunt clean:build` => removes mod from default user addon folder (not configurable at this time)
- `grunt clean:release` => removes release zip file
- `grunt clean:savedVars` => removes saved variables from default location
- `grunt copy` => deploys code to the default addon folder
- `grunt compress` => generates release zip file from code in addon folder.
