**Deploying nodejs to heroku**

1. Install Heroku toolbelt
This gives access to Heroku Command Line Interface (CLI) .
'heroku local' is the command that helps your applications run locally.
Thus download heroku and install it for the appropriate OS.

2. Authentication
Once heroku toolbelt is installed, give the command 'heroku' in the command shell.
When asked for credentials, type in your login username and password that was used when creating heroku account. Authenticationl is required for the working of both heroku and git commands.

3. Prerequisites
Latest version of node, npm, git are preferred.

4. Deployment
Give the command 'heroku create' to create an app on heroku for recieving the source code.
This creates a git remote called 'heroku' and is associated with local git repository.
The final command is 'git push heroku master'.

5. The application is now deployed. To make sure that atleast one instanc of the app is running,
give the command, 'heroku ps:scale web=1'.
The application now runs on a single dyno. As you scale your app, you can change the number of dynos.

6. 'heroku open' opens the website.

7. ProcFile
Create a ProcFile in the root folder to tell explicitly what command should be executed to start your app.

Note : https://devcenter.heroku.com/articles/git#tracking-your-app-in-git