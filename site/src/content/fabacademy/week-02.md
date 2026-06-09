---
title: "Project Management"
week: 2
assignment: "Work through a Git tutorial; build a personal site in the class archive."
heroImage: "/images/fabacademy/week-02/gitlabConfirmationEmail.jpg"
gallery: []
---
## Assignment

* * *

-   Work Through a GIT Tutorial
-   Build a personal site in the class archive describing you and your final project.

## GitLab Access

For Fab Academy we'll be using GitLab for project management. This post is about all the necessary steps to publish my HTML website on the [Fab Academy Archive.](http://archive.fabacademy.org/2019/labs/cept/students/samiul-hoque/)

#### Step 1

The first step is to set up your GitLab Account. I got my confirmation link from Academmany IT.

<figure>
  <img src="/images/fabacademy/week-02/gitlabConfirmationEmail.jpg" alt="Confirmation Email from Academmany" loading="lazy" />
  <figcaption>Confirmation Email from Academmany</figcaption>
</figure>

#### Step 2

Once you're done with that you'll get another email granting you master access to your Fab Academy repository for the course.

<figure>
  <img src="/images/fabacademy/week-02/gitlabAccessGranted.jpg" alt="Master Access Granted, confirmation Email" loading="lazy" />
  <figcaption>Master Access Granted, confirmation Email</figcaption>
</figure>

#### Step 3

I had some trouble getting the password for our GitLab login, so I just asked for a password reset and it worked from there.

<figure>
  <img src="/images/fabacademy/week-02/gitlabresetPass.jpg" alt="Reset Password Email" loading="lazy" />
  <figcaption>Reset Password Email</figcaption>
</figure>

#### Step 4

Voila, you should have access to your GitLab repository now.

#### Step 5

To go to your repo, click on projects > your projects and then you'll find your project repo there.

We were also added to the class repository, after the first lecture. We'll be using 'issues' there to communicate globally with all the other labs and students.

<figure>
  <img src="/images/fabacademy/week-02/gitlabrepository-directory.jpg" alt="Git Lab Repository, projects" loading="lazy" />
  <figcaption>Git Lab Repository, projects</figcaption>
</figure>

## Setting up GIT

#### Installing Git

To access and manage our GitLab repo, we'll be using GIT. To install git, on your terminal, just type

`sudo apt-get git`

If you're a Windows user, just download the Gitbash installer from here.

#### Setting up your credentials

Now that I have git, I set up my credentials. To add your username, `git config --global "your-username"`

To add an email, `git config --global "your@example.email"`

To check if your usename and email are okay, write `git config --list`

Now we have to generate an SSH key to authenticate with GitLab. To do that, type  
`ssh-keygen -t rsa -C "your@example.email"`

To view your SSH key, `cat ~/.ssh/id_rsa.pub`

Copy this ssh key, it should begin with ssh-rsa and end with your registered email.

<figure>
  <img src="/images/fabacademy/week-02/SSHkeygenerationwindows.jpg" alt="SSH key generation and cat" loading="lazy" />
</figure>

#### Adding your SSH key to GitLab

To add the ssh key, login to GitLab, go to Settings > SSH; and then paste your SSH key on the given field. Click add, and now your machine can authenticate with GitLab

<figure>
  <img src="/images/fabacademy/week-02/SSHkeyaddgitlab.jpg" alt="SSH key menu at gitlab >settings >ssh" loading="lazy" />
  <figcaption>SSH key menu at gitlab >settings >ssh</figcaption>
</figure>

To test this out, try the following command, `ssh -T git@gitlab.com`

#### Creating a local copy of your repository

Now that you can authenticate your connection with GitLab, you're set to make a local copy of your repository that you can work offline with. To do that, we'll be using the git clone command, `git clone "your.repo.address"`

Your repo address can be found on GitLab in your Fab Academy repository

Now cd into your repository folder and to check if your repo and your local site are in sync, do a `git status`.

Here are some basic git commands to get you started,

```

    git add .                          //adds all new files for commit
    git commit -m "commit message"     //commits your changes to git
    git push                           //pushes your commit to the master branch on your repository	
    git pull                           //pulls your online repo to your local 
                                          (use this if your online version is ahead of the local) 
    git merge                          //merges your local and online versions
    
```

## Using the default MKdocs Template with markdown

Our GitLab repo was already hosting [MkDocs](https://www.mkdocs.org/) which is a static site generator running on python. All you have to do is edit the markdown files in the /Docs folder and your site will be generated from there.  
To get started, you need to edit your Mkdocs.yml file to add your personal information to the site.

Then I went ahead and wrote my project proposal for week 1 in the markdown template already provided. Markdown syntax is very straightforward. I took reference from this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to write the week 1 assignment.

<figure>
  <img src="/images/fabacademy/week-02/mkdocsyml.jpg" alt="my mkdocs.yml file" loading="lazy" />
  <figcaption>my mkdocs.yml file</figcaption>
</figure>

After working on it for a week, I found makrdown very limiting when it comes to handling images and freedom to design your website. I was already facing this issue on my [Personal blog](https://samiul-hoque.github.io/) based on jekyll. So I took the opportunity to learn some html code. Thanks to [babken](http://fabacademy.org/2019/labs/dilijan/students/babken-chugaszyan/#) from Dilijan Fablab at Armenia, I found some free templates to work on at [HTML5up.](https://html5up.net/)

### Wiping Mkdocs from GitLab

#### Deleting MkDocs from the repository

To set up your own html website, we first need to delete everything in our repository. To do that,

`git rm --cached * -r`  
`git commit -m "deleting everything"`  
`git push`  
  

With this our repository should be wiped. But!! if you still go to your website, the old MKdocs template should still be there. This is because, GitLabs is not just a hosting, it is like a virtual computer and it sets up your environment before serving it on the hosted address. To reconfigure out GitLab repo for hosting HTML files, we need to delete the gitlab-ci.yml file. Which can be done from the web interface.

#### Creating a new gitlab-ci.yml for our HTML website

In the web interface, click on the '+' icon to create a new file. Select git.yml as the type and select HTML.

Now we should be ready to use our gitlab repository to push our own html website.

## How I built my HTML site

### To theme or not to theme

At first I wanted to build my own site from scratch using html and css, but it was beyond the scope for me. As I had no experience working with HTML before, I just chose to use a theme from HTML5 up. This tutorial was very helpful for me to understand the basics of the file structures in a website.

### Selecting and Downloading a Theme

I decided to go with the [HTML 5up, Editorial](https://html5up.net/editorial) theme. It is nice and clean and uses SASS to generate the css styling files.

### Setting up the HTML development Environment

#### Editor

To set up my HTML development environment, I chose to use Visual Studio Code as my editor. It has GIT built in and works like a charm in windows.

<figure>
  <img src="/images/fabacademy/week-02/vistualstudiocodegit1.jpg" alt="Visual Studio Code" loading="lazy" />
</figure>

##### \*\*updated after local review on 26/3/19\*\*

#### Source Control Within Visual Studio Code

The Git Integration in Visual Studio Code lets me track changes in files much easier. Even as I was editing these updates, I could click on "source control icon", to see realtime which lines of my codes were changed, which was modified and where new files were added.

<figure>
  <img src="/images/fabacademy/week-02/vistualstudiocodegit.jpg" alt="Visual Studio Code" loading="lazy" />
</figure>

#### Local Server

I am using [Prepos](https://prepros.io/) to serve my files locally. Unlike http-server or apache, it has automatic browser refresh enabled. So whenever I update my files the browser automatically refreshes. It's not much, but makes life much easier. Prepos also supports drag and drop folder addition. Just drag any folder with a website inside it, it will serve the contents automatically and also compile sass.

##### \*\*updated after local review on 26/3/19\*\*

#### Visual Studio Plugins

I am now using a plugin within visual studio code called 'live server' which does everything prepos used to do within Visual Studio Code.

<figure>
  <img src="/images/fabacademy/week-02/liveserver.jpg" alt="Visual Studio Code" loading="lazy" />
</figure>

#### Customizing the theme

The Editorial theme looks like this by default.

<figure>
  <img src="/images/fabacademy/week-02/editorialdefault.png" alt="Customizing the theme" loading="lazy" />
</figure>

Now let's change the colors a bit. I dont like a white background as it is kinda hard on the eyes. And I'd like to get rid of the pink colors To do that, Navigate to `/assets/sass/libs/_vars.scss`

You can basically change all the major properties of your site from this file. The CSS will be automatically generated from here. Here's how my \_vars.scss file looks like

<figure>
  <img src="/images/fabacademy/week-02/vars.png" alt="Vars file" loading="lazy" />
</figure>

As you can see, I changed the bg color and gave it a yellowish tint.(bg stands for background) And I replaced the pink accent with an amber accent. While I was at it, I added a `border-radius: 50%` to the banner image. And this is how my site looks like now.

<figure>
  <img src="/images/fabacademy/week-02/editorialmod.png" alt="Pimped out editorial" loading="lazy" />
</figure>

##### \*\*updated after local review on 26/3/19\*\*

> Got rid of the border radius, It looks really bad on smaller displays. And it doesn't really work well with safari browser.

#### Customizing the Nav Panel

The nav panel on this theme is on the sidebar. I just created 4 new folders to organize my html pages. This is how my root directory looks like now.

<figure>
  <img src="/images/fabacademy/week-02/rootdir.PNG" alt="root directory" loading="lazy" />
</figure>

Then I created html files for each page I want on my website in their respective directories. And linked them on the navbar with an anchor tag.

<figure>
  <img src="/images/fabacademy/week-02/navpanel.png" alt="Nav Panel" loading="lazy" />
</figure>

#### How Links work: Anchor Tags

This is an anchor tag.  
`<a href=" *link goes here"* > *"text to appear"* />`  
To open something in a new tab, just add a target=\_"blank" to the anchor tag, like this;  
`<a href=" *link goes here"* target="_blank" > *"text to appear"* />`

### Some Basic HTML lingo

#### Texts

For texts, there are header tags and p Tags.

  
  
`<h1>h1 title goes here <h1>   <h2>h1 sub head <h2>   <h3>h1 h3 text here <h3>   <h4>h4 here <h4>   <h5>h5 here <h5>   <h6>h6 here<h6>   `

<figure>
  <img src="/images/fabacademy/week-02/htmlheaders.png" alt="HTML Header tags" loading="lazy" />
</figure>

#### Boxes, paragraphs and lists

For texts, there are header tags and p Tags.

`<div class="box">   <h3>h3 text inside a div box here</h3>   <p>p text</p>   <h3>h3 text again</h3>   <ul>   <li>this is an unordered list </li>   <li>this is an unordered list 1</li>   <li>this is an unordered list 2</li>   </ul>   </div>   `

<figure>
  <img src="/images/fabacademy/week-02/divpul.PNG" alt="HTML stuff" loading="lazy" />
</figure>

  
  

#### Images

For Images, use the img tag. I use a span tag to fit the image inside it on my website.

  
  
`<span class="image main">   <img src="/images/fablogo.jpg" alt="Fab Lab Logo">   </span>`

And thisis how it looks like.

<figure>
  <img src="/images/fabacademy/week-02/fablogo.jpg" alt="Fab Lab Logo" loading="lazy" />
</figure>

#### Relative and Absolute Paths

File Paths in the local Directory are Relative Paths.  
`../image/fablogo.png`  
Files Paths on the web are Absolute Paths.  
`http://archive.fabacademy.org/2019/labs/cept/students/samiul-hoque/images/fablogo.jpg`  
To Avoid errors with paths in the GitLab repository, I am using the HTML base tag. (Thanks <3 Fiore!)  
<base = " *../home repo link here"* />

#### Sources

I referred to [W3Schools](https://www.w3schools.com/) for basic HTML tutorials.

These tutorials helped me alot  
[HTML & CSS Tutorials for Beginners](https://www.youtube.com/playlist?list=PL0eyrZgxdwhwNC5ppZo_dYGVjerQY3xYU)  
[How to build a responsive site from scratch](https://www.youtube.com/playlist?list=PLqGj3iMvMa4KQZUkRjfwMmTq_f1fbxerI)

## Learning Outcomes

-   I learnt how to use gitlab. I used to use git and github before. I still find gitlab much harder to use than github.
-   I learnt how to edit and use an html template

#### What I need to look into more:

-   I need to customize my site more and add personal elemets to it rather than using all the template designs.
-   This site uses sass to generate css, I need to learn more about that.
-   I need to learn how to use javascript to add fun features to my site.

  

* * *
