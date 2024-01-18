# Script2Screen

Assistant for generating videos from text for press releases.

# Instructions for Developers, Collaborators, and Contributers
- <b>Never</b> push or change anything in <b>main</b> or <b>develop</b> branches.

### Inital setup for Git and GitHub :
- In GitHub go to `Khalaq04/Script2Screen`
- Click on Fork and fork all branches by deselecting `the copy only main branch` option
- This should redirect you to `<your-github-username>/Script2Screen` which is your remote copy/fork of Script2Screen
- Clone your copy/fork of Script2Screen from `<your-github-username>/Script2Screen` using -
```bash 
git clone https://github.com/<your-github-username>/Script2Screen.git
```
- Open your terminal/cmd and enter -
```bash
cd Script2Screen
git remote add --track develop upstream https://github.com/Khalaq04/Script2Screen.git
git fetch upstream
```
- Now, in the terminal/cmd, create a new branch for yourself using -
```bash
git checkout -b <your-name> upstream/develop
```
- The above steps should set your local and remote repositories up and link them with the upstream repository.
- You are now ready to make changes and contribute to the Base Script2Screen repository.

### For Regular Usage of Git and GitHub :
#### Make sure to follow the steps below every time BEFORE you make any changes to your local repo to contribute to the base repo
#### Before making any changes -
- Open your terminal/cmd and enter -
```bash
cd Script2Screen
git checkout <your-name>
git pull upstream develop
```
#### Now you can make the changes you want to the repo
#### Make sure to follow the steps below every time AFTER you make any changes to your local repo to contribute to the base repo
#### After making any changes -
- Open your terminal/cmd and enter -
```bash
git pull upstream develop
git add .
git commit -m "<write a meaningful message which clearly explains what changes you have made in this commit>"
git push -u origin <your-name>
```
#### If you have followed all the steps uptill here, you should now have succefully made changes to you local repo and also have these changes reflect in your remote copy/fork of the base repo
#### Now to contribute to the base repo from your forked repo, Follow the steps below -
- In your GitHub go to `<your-github-username>/Script2Screen`
- Change the branch to `<your-name>`
- Now you should be able to see an option to `Open pull request` or `Compare & pull request`
- Click on that option
- If you are unable to see that option, click on `Contribute` and then `Open pull request`
- After the steps above, <b>MAKE SURE TO SET - BASE REPOSITORY to</b> `Khalaq04/Script2Screen`, <b>BASE to</b> `develop`, <b>HEAD REPOSITORY to</b> `<your-github-username>/Script2Screen`, and <b>COMPARE to</b> `<your-name>`
- Now you should be able to see a green tick saying `Able to merge`
- If you are unable to see the green tick, and see something like `Conflict`, go back to your local repo, resolve the conflicts and then start again from `git add .`
- After that you should be able to see a `Comment` section where you have to `Write` a detailed, in-depth description in markup language(just like this readme) of all the changes you have made, instructions to follow if any and other necessary information
- Now you are ready to create a pull request so click on `Create pull request`.

#### Note :- To keep your remote repositories on GitHub updated, Follow the steps below -
- In GitHub go to `<your-github-username>/Script2Screen`
- Click on Sync Fork
- If the branch is up to date it will show the corresponding message
- If the branch is not upto date, it will show a button to update the branch. Click on that to update your branch
- Do this for all the branches in `<your-github-username>/Script2Screen`

# Instructions to run the App
- Open a terminal/cmd and enter -
```bash
cd <path-to-your-cloned-Script2Screen>
npm i
npm run start
```
