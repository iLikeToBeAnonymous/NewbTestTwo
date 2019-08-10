# NewbTestTwo
Newbish dumpster-fire test project for basic Express, MongoDB, and GitHub (if you see this, you probably don't want to look at it unless you're a pro and are up for a good laugh).

##How to install and use (the easy route)

```
  1) Either open the Ubuntu terminal or get the latest Ubuntu terminal for Windows 10
     The version I'm using at the time of this writing is version 18.04
  2) From the terminal:
    a) $ sudo apt update
    b) You'll see a notification of the number of packages that can be upgraded.
       I tend to ignore this (which isn't really a good idea, but I do it anyway).
    c) $ sudo apt install nodejs
       Verify that it installed successfully by typing either:
       nodejs --version
          OR
        nodejs -v
     d) $ sudo apt install npm
     e) Verify install by checking version (just use "npm -v")

```
##Some super-newb commands for bash:
To download a branch to work on it:
--* `git clone -b <branch name> <repository url>`

To upload changes to the branch:  
--* `git add <folder>/<filename>`
--* `git commit -m "<your message about the changes here>"`
--* `git push`
--* _You'll then be prompted to enter your username and password
for GitHub_
