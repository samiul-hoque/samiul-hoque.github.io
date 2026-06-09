---
title: "Project Management"
week: 2
assignment: "Work through a Git tutorial; build a personal site in the class archive."
heroImage: "/images/fabacademy/week-02/editorialmod.png"
gallery:
  - "/images/fabacademy/week-02/gitlabConfirmationEmail.jpg"
  - "/images/fabacademy/week-02/gitlabAccessGranted.jpg"
  - "/images/fabacademy/week-02/SSHkeygenerationwindows.jpg"
  - "/images/fabacademy/week-02/SSHkeyaddgitlab.jpg"
  - "/images/fabacademy/week-02/vistualstudiocodegit1.jpg"
  - "/images/fabacademy/week-02/vistualstudiocodegit.jpg"
  - "/images/fabacademy/week-02/liveserver.jpg"
  - "/images/fabacademy/week-02/editorialdefault.png"
  - "/images/fabacademy/week-02/vars.png"
  - "/images/fabacademy/week-02/editorialmod.png"
  - "/images/fabacademy/week-02/rootdir.PNG"
  - "/images/fabacademy/week-02/navpanel.png"
  - "/images/fabacademy/week-02/htmlheaders.png"
  - "/images/fabacademy/week-02/divpul.PNG"
  - "/images/fabacademy/week-02/mkdocsyml.jpg"
---

## Assignment

Work through a Git tutorial; build a personal site in the class archive.

## GitLab setup

Getting access to the Fab Academy GitLab involved five steps: confirming the invitation link, waiting for master access to be granted, resetting the password, accessing the personal repository, and accessing the class repo via issues.

## Git workflow

Core commands used throughout the programme:

```bash
git add .
git commit -m "message"
git push
git pull
git merge
```

SSH key generation on Windows: `ssh-keygen -t rsa`, then adding the public key to GitLab under account settings.

## Site template

Used the HTML5UP "Editorial" theme. Customised `/assets/sass/libs/_vars.scss` — changed the background to a yellowish tone and the accent to amber. Migrated from MkDocs (which I had been using) to this HTML template.

## Development environment

Visual Studio Code with the Live Server plugin for instant local preview. Initially tried Prepos for SCSS compilation but settled on VS Code.

## Learning outcomes

GitLab usage, HTML template editing. Future goals: SASS customisation, JavaScript.
