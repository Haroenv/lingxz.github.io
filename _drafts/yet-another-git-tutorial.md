---
title: Yet another git and Github tutorial
excerpt: Yet another one of the many git tutorials out there, for absolute noobs. 
---

This is yet another git tutorial out of the countless git tutorials out there. It has been said that the best test of understanding is being able to explain it simply. 

So here is git for the absolute noobs. Actually, it's more like, the guide I wish I had when learning git. 

{:toc}

---

You're here maybe because you just started coding and you've heard of github and want to figure out what exactly it is and how to use it, or you want to contribute to a favourite project and don't know where to start. 

At least that's where I started. One summer, after learning some programming, I decided I should contribute to open source. I discovered they're hosted on Github and they use git as a version control system, and I'm like, okay cool, let's figure out what that is. So that's the context I'll be starting with. 

First, **Github is not git**. They are different things, and the difference will be explained in detail later. That was my first point of confusion, because the words are so often used together. They are not the same thing, but to understand how to use Github, one has to first understand git.  

## Introduction

### What is git? 

Git is a version control system. Remember those times when you had "report-FINAL" and "report-FINAL2" and "report-REALLYFINAL"? A version control system is a solution for that. It keeps tracks of your history in a folder so you don't have to create multiple files or folders just so that you can retain history. It takes a series of snapshots of your folder, so that you can revert to any one of those snapshots anytime. 

There are many version control systems out there, such as [cvs](http://www.nongnu.org/cvs/) and [svn](https://subversion.apache.org/), and git is one of them. 

In fact, apart from retaining the history of a document, you've probably also had troubles when multiple people edit the same file, and oops, your colleague's changes overrode yours and your edits are all gone. That's also a problem solved by git. 

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

### What is Github?

To collaborate with others, we have to find a way to share whatever folder we are working on. You might have done this by email, by Dropbox, by Google Drive, or something else. The idea is that there must be a central place that holds the folder, so that everyone is looking at the same thing. 

That is what Github is: a web-based hosting service for git repositories. Git is the tool, and Github is the service for projects that use git. There are, of course, other git repository hosting services other than Github, such as [Gitlab](https://about.gitlab.com/) and [BitBucket](https://bitbucket.org/). 

The following section talk about how to work with remote repositories hosted on a server. This server is Github most of the time, but it doesn't have to be. These are features of git, which means that they are not specific to Github. 

### More git commands: push and pull

Now that there is a remote repository, you have to 


