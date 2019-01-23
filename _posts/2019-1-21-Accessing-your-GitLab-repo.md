# Fab Academy repository: Starter's guide


## Step 1
To access your GitLab repository for the Fab Academy course, you first have to confirm your email for GitLab. Acedemany IT should already have sent you an email to do that.

<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/gitLabAcess/1ConfirmationEmail.PNG" alt="Email Confirmation Link" width="800" length="800">
<br>

## Step 2
Once that is done, you'll be granted master access to your GitLab repo and a confirmation email would be sent you.

<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/gitLabAcess/2AccessGranted.PNG" alt="Master Access gitlab repo" width="800" length="800" >
<br>

## Step 3
Now, I am not sure about this step.... kinda..
But I managed a work around :| (sorry, it wasn't intended)
I guess a password was to be sent to you or something for accessing your GitLab Accound.. BUT! if you send a password reset request through git pages, you should be able to rest your password and get in. So that's what I did.

<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/gitLabAcess/3resetPass.PNG" alt="Password Reset instruction through GitLab" width="800" length="800">

<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/gitLabAcess/4passChanged.PNG" alt="Password Reset instruction through GitLab" width="800" length="800">
<br>

## Step 4
Voila! Now you have access to your GitLab repo!

<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/gitLabAcess/4-5gitlabrepo.PNG" alt="GitLab repo" width="800" length="800">
<br>

## Step 5
Click on your repo folder to open your repository.

<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/gitLabAcess/4-6gitlabFolder.PNG" alt="GitLab folder" width="800" length="800">
<br>

<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/gitLabAcess/5gitlabFolder.PNG" alt="GitLab folder" width="800" length="800">
<br>

Now you have access to your GitLab repository, the folder or filespace given by Fab Academy, where all your website files will go. But, to access them from your local drive, you'll need to securely connect to it. To do that, we need to generate an ssh key pair for your local machine and GitLab account so they can recognize eachother.(That's how it probably works... that's what I figured)

So let's get to that. 

# Setting up GIT on your local Machine

For this part, have a look at [Adhitya's week 2 documentation from last year](http://fabacademy.org/2018/labs/fablabcept/students/adhitya-ss/week-2.html).

## Step 1:
Download [GIT](https://git-scm.com/downloads). For Windows users, I strongly recomend trying out [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10). It basically runs linux in terminal within windows. (Thanks Ohad :D) Have a look at windows' documentation on installing that first. And then you can install git with just a simple "apt-get install git "
For linux users, just install git from your package manager, in my case it was;

```bash
sudo apt-get install git
```

## Step 2:
To generate a ssh key pair for your local machine and your registered GitLab account, we'll run the following command:

```bash
ssh-keygen -t rsa -C "your_email@example.com"
```

It should ask for a pass key, leave that blank.

It will then ask for the location where the ssh key will be saved at; leave that blank as well.

Okay, with that we're done with creating the SSH key.

## Step 3: 
Now we have to copy the ssh key over to your GitLab account. To do that, first open the ssh key with the following command:

```bash
cat ~/.ssh/id_rsa.pub
```
You should see a pretty large string starting with rsa and ending with your email. Copy the whole thing from here.

## Step 4:
After this log into your GitLab Account, go over to settings and then to SSH. And just copy your key there.

You'll get a notification email from GitLab about it as well.
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/gitLabAcess/sshKeyAdded.PNG" alt="GitLab folder" width="800" length="800">
<br>

To verify if your local machine can access the gitlab with your ssh key pair, just run the following command. (Make sure to connect from a secure network, After hours of hair pulling I found out that you can't connect to GitLab from our Fab Lab's WiFi. I had to make a hotspot from my cellphone and then connect).

## Step 5:
Now cd your way to a directory where you want to set up your local repository, and type in;

```bash
git pull "your_repo_link"
```

To get your repo link, just copy it from the GitLab folder.


With that, your're done setting up GIT on your local machine that has access to your GitLab repo. All the git commands should be working. Have a look at this neat [git cheatsheet]() to help you through that. 
The basic commands are:

```bash
git add .                        //stages all file edits
```
```bash
git commit -m "message here"     //commits your changes, the message helps you to keep track on what you are working on
```
```bash
git push -u origin master        //pushes your commits to origin, master branch
```


# Configuring Your Fab Academy Website

Your GitLab repo is already hosting MkDocs, which apparently is a downright 'gorgeous' website generator. It means, you'll just have to right all your documentation on markdown in the docs folder, and MkDocs will generate a website for you.(It's actually quite neat!!). Only downside though, is that you have to put all your images in the exact dimension as you want it on your posts. You can't resize them as you did with your html height and weight properties. I am trying to figure out a workaround on that, apparently posting direct html img tags breaks the page a bit.

So here's how you get started with MkDocs and the [Material Theme]().(That's the theme on the default template running for all the fab academy students for now)

## Editing your Mkdocs.yml
This file has all your website properties. It's quite self explanatory once you open it. More details on confiuring it can be found [here]().

## Editing Posts
So all the posts are written in Markdown. Feel free to check out this [Markdown Cheatsheat]() for reference. They already gave sample usage of almost everything on each of the posts.