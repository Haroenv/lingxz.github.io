---
title: Git for noobs
excerpt: Yet another one of the multitude of git and Github tutorials out there, for absolute noobs. 
---

This is yet another git tutorial out of the countless git tutorials out there. It has been said that the best test of understanding is being able to explain it simply, and I believe that, to a large extent. 

So here is git for the absolute noobs. Actually, it's more like, the guide I wish I had when learning git. 

* TOC
{:toc}

---

You're here maybe because you just started coding and you've heard of github and want to figure out what exactly it is and how to use it, or you want to contribute to a favourite project and don't know where to start. 

At least that's where I started. One summer, after learning some programming, I decided I should contribute to open source. I discovered they're hosted on Github and they use git as a version control system, and I'm like, okay cool, let's figure out what that is. So that's the context I'll be starting with. 

First, **Github is not git**. They are different things, and the difference will be explained in detail later. That was my first point of confusion, because the words are so often used together. They are not the same thing, but to understand how to use Github, one has to first understand git.  

## Introduction

### What is git? 

Git is a version control system. Remember those times when you had `report-FINAL.docx` and `report-FINAL2.docx` and `report-REALLYFINAL.docx`? A version control system is a solution for that. It keeps tracks of your history in a folder so you don't have to create multiple files or folders just so that you can retain history. It takes a series of snapshots of your folder, so that you can revert to any one of those snapshots anytime. 

There are many version control systems out there, such as [cvs](http://www.nongnu.org/cvs/) and [svn](https://subversion.apache.org/), and git is one of them. 

In fact, apart from retaining the history of a document, you've probably also had troubles when multiple people edit the same file, and oops, your colleague's changes overrode yours and your edits are all gone. Collaboration--that's also a problem solved by git. 

So now you can see why it might be useful. Git is mostly used for code, because code is just plaintext files, as compared to Microsoft Word whose data is stored in binary, though apparently, a quick google tells me that you can make it work with certain binary files after [jumping through some hoops](http://blog.martinfenner.org/2014/08/25/using-microsoft-word-with-git/).

In short, git is a version control system that solves these problems: 

- keeping track of your history
- multiple people working on the same set of files

### Basic git commands: stage and commit

With a version control system, the very basic thing you would want to do is to make changes and tell git to track those changes. 

To start off, you need to tell git to start tracking changes in your folder. If you haven't downloaded git yet, now is the time. There are plenty of guides for installing git and plenty of options for git clients, some of which include a user interface, which is useful for visualizing what's going on in git. Just choose any one. I use [GitKraken](https://www.gitkraken.com/).

Let's say we want to version control a folder called `flowers`. Navigate into `flowers` on the command line, and do 

```
git init
```

This tells git to start tracking changes in the current folder. 

Then make some changes. Create a text file or something. Now you want to tell git that you've made some changes and ask them to record your changes, in essence, make a checkpoint. 

This is called committing your changes. But before you commit, you have to stage your changes. 

Let's say you added a new file called `tulips.md`. You can stage it by doing

```
git add tulips.md
```

or

```
git add .
```

The single dot `.` simply tells git to stage all changes in the folder. At this point, your file `tulips.md` is staged, ready to be committed. Then you can commit your staged files by doing

```
git commit -m "here is a commit message!"
```

At this point, it might seem strange why there are two steps: staging then committing. Staging seems like a duplicate step, because in this case we're doing essentially the same thing in these two steps. 

However, the usefulness of staging comes in when you have made changes to many files and only want to commit a few. Perhaps you fixed a bug while implementing a feature, and you don't want them to be in the same commit. Staging allows you to do that. 

Currently, everything is saved locally--all your commits and version history. There are certainly other things that can be done, such as reverting changes, soft / hard reset, and there are plenty of tutorials out there that go in depth about git commands. 

But to see where git truly shines, we would have to look at collaboration. 

## Collaboration with git

### What is Github and what has it got to do with git

To collaborate with others, we have to find a way to share whatever folder we are working on. You might have done this by email, by Dropbox, by Google Drive, or something else. The idea is that there must be a central place that holds the folder, so that everyone is looking at the same thing. 

That is what Github is: a web-based hosting service for git repositories. Git is the tool, and Github is the service for projects that use git. There are, of course, other git repository hosting services other than Github, such as [Gitlab](https://about.gitlab.com/) and [BitBucket](https://bitbucket.org/). 

The following section talk about how to work with remote repositories hosted on a server. This server is Github most of the time, but it doesn't have to be. These are features of git, which means that they are not specific to Github. 

### More git commands: push and pull

Now that there is a remote repository, there are many more things you can do, most notably: push and pull. 

Before you can do that, you have to set up authentication with the remote server. First, you would need a Github account. Then, you can follow the instructions at [Set up Git at Github](https://help.github.com/articles/set-up-git/#next-steps-authenticating-with-github-from-git) to set up authentication. After setting up authentication properly, you wouldn't have to type your github password every time you need to access Github locally. 

After committing your changes locally, you have to inform your remote repository (e.g your Github repository) of the changes. This is known as pushing your changes. 

Before you can push, you have to tell your local folder about the remote: 

```
git remote add <remote name> <remote url>
```

On Github, the remote url can be found at the clone and download button, and should look something like `https://github.com/user/repo.git` (https) or `git@github.com:user/repo.git` (ssh). 

The remote name can be anything you like. In many tutorials, you'll see it named as `origin`. But it can absolutely be anything you like to call it. 

After setting up the remote, the command to push is: 

```
git push <remote name> <branch name>
```

At this point, we only have one branch: the `master` branch. Branches will be explained in the next section. 

It is only at this point that, if you're collaborating, your teammates are informed of your changes. Anything before you push is local. 

The equivalent reverse action is pulling other people's changes. If the remote is already set, you can do this simply by 

```
git pull
```

### Branching

Branching is a powerful feature. So far, we've been working on the default master branch. While this is not a feature only used in collaboration, it is something whose usefulness manifests itself hugely in collaborative projects. Without branching, powerful workflows would not be possible. 

Think of it, literally, as a branch in a tree. The master is the trunk, which you can branch off, so that you can make changes to the project without affecting master. Main operations would be to: 

- create branches
- switch between branches
- merge branches

Why branching? You might want to make a feature that will necessitate multiple commits, and you don't want to pollute the master branch. Often times, you have different members on your team working on different copies. For example, you might be fixing a bug, while your team member might be working on a feature, and another teammate is trying out with another version of the website. Branches isolate all these things in their own contexts. Many projects have some version of the production or development branch, and other feature and bugfix branches. 

By convention, the default branch is the master branch. 

To create a branch named hotfix from the current branch and switch to it: 

```
git checkout -b hotfix
```

To switch branches, simply do

```
git checkout <branch name>
```

To merge `hotfix` back into `master`, do

```
git checkout master
git merge hotfix
```

This can all be done on the command line, but a graphical user interface (GUI) can can make this part of the process much easier, especially when you have multiple branches to keep track of. Especially so when you have merge conflicts to deal with. This is optional, and here is an [extensive list of git GUIs](https://git-scm.com/downloads/guis).

### Contributing to open source: fork and pull requests

If you're looking to contribute to an open source project on Github, there are a few more steps to follow. When you are not a collaborator of the project, that is, you don't have push access, you have to first fork the project. That is easily done by pressing the fork button on Github. 

After forking, the repo now lives remotely on your own Github account. To get a local copy of the remote repo, you would have to clone it. For example, if you want to contribute to [astropy](http://www.astropy.org/), you would first fork the repo from the astropy Github page, then do: 

```
git clone git@github.com:<your-username>/astropy.git 
```

Now, create a new branch, checkout that branch, and make some edits, commit them, push to Github, and now the edits live on your fork of the project. However, as you don't have push access to the project, you would have to create a pull request (PR) from your branch to the original project. Note that 

Why is it called a pull request? 

Each repository would have its own contributing guidelines. Be sure to read them before contributing. 

For example, read the [Astropy developer documentation](http://docs.astropy.org/en/latest/development/workflow/development_workflow.html). In my opinion it is incredibly well written and most things are not specific to Astropy, but overall applicable to anyone who wants to contributes to open source. 

## A list of handy git commands


## Resources
- [https://www.git-tower.com/blog/understanding-branches-in-git/](https://www.git-tower.com/blog/understanding-branches-in-git/)
- [https://try.github.io/](https://try.github.io/)