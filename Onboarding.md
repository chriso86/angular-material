- [Setup](#setup)
    - [Option 1: Clone an existing Angular project](#option-1--clone-an-existing-angular-project)
    - [Option 2: Setup your own Angular project](#option-2--setup-your-own-angular-project)
        - [Step 1. Set up the initial project](#step-1-set-up-the-initial-project)
        - [Step 2. Install Material Design Components](#step-2-install-material-design-components)
    - [Finally: Clone the API repository forgivingly (Front-end dev did this)](#finally--clone-the-api-repository-forgivingly-front-end-dev-did-this)
- [Create your first component](#create-your-first-component)
- [Suggested Structure](#suggested-structure)
    - [        - app (THE BUSINESS - COMPONENTS LIVE HERE)](#app-the-business---components-live-here)

# Some horrible assumptions just to kick us off

https://mdbootstrap.com/getting-started/5min-quickstart/

- I'm assuming that you should use SCSS **BECAUSE** variable and mixins (You can use normal CSS so don't worry - but seriously... **SCSS** guys and girls)
- I'm assuming that you're going to use Angular 5+ and Material
- We're using L.I.F.T and T-D.R.Y principles
    - L - Locate code easily
    - I - Identify code easily
    - F - Flat structure as far as possible (Please)
    - T - T-D.R.Y
        - Try to be:
        - D - Don't
        - R - Repeat
        - Y - Yourself
    - D - Don't
    - R - Repeat
    - Y - Yourself (I hope you can appreciate the irony)
- We are **going** to keep code clean, and simple for the next guy
- Files at **400 lines**
- Functions/Methods at **75 lines**
- I'm serious guys and girls...

<hr>

# Setup

## Option 1: Clone an existing Angular project

Angular-Material Repository:
https://github.com/chriso86/angular-material

## Option 2: Setup your own Angular project

### Step 1. Set up the initial project

1. Install Node if you don't already have it: https://nodejs.org/en/download/
2. Open Command Prompt
3. Run "npm install @angular/cli@latest -g
4. Run "npm install @angular-devkit/schematics@0.0.34 -save", just because Google is currently inneficient at handling npm sub-dependencies :(
4. Test that your Angular CLI is working by typing "ng" into Command Prompt
5. Create your Project directory
6. Navigate to your project directory in Command Prompt
7. Run "ng new Angular-Material --style=scss", please note that you can replace "Angular-Material" with whatever you want your project name to be
8. Wait for it to create your project structure and install required Node Package Manager (npm) modules

### Step 2. Install Material Design Components

1. Open Command Prompt
2. Navigate to your project directory in Command Prompt
3. Run "npm install --save @angular/material @angular/cdk", please note that "-save" will save the package to the dependencies list so that the next guy can just run "npm install". **#justgoodness**
4. Please also run "npm install --save @angular/animations".
5. Run "npm build" in the same project directory to make sure that everything works hunky dory.

## Finally: Clone the API repository forgivingly (Front-end dev did this)
NodeJS API Repo:
https://github.com/chriso86/leave-system-api.git

<hr>

# Create your first component

## Step 1.  Creating the component

Okay cool, so **because** you get all of the goodness of AngularCLI, you can run a simple command in Command Prompt to create a new component.

Come on guys and girls... It's never been easier. :)

So, the steps:

1. Open Command Prompt
2. Navigate to your Project directory
3. Run "ng generate component leaveApplicationRequest
4. Edit leave-application-request.component.html/scss/ts to do what you like

## Step 2. Setting the component up for lazy-loading

If you have decided to be bold and go the lazy-loaded route then this is how to set your component up for lazy loading.

**Be warned... This requires manual work!**

1. Firstly you need to complete Step 1. Create the component
2. Then you need to **manually** create a file named your-component-name.module.ts in the same folder as your component/feature (Because when we're lazy-loading stuff, it's more of a feature than a component - let's be honest with ourselves... and probably the client)
3. 

<hr>

# Suggested Structure

So because I have the XP saved up, I can suggest a structure, but please guys and girls... Use creativity to figure out a better way (My mind and knowledge is not infallible).

- project root
    - root app config files and stuff (ADVANCED - If you want to treat you app deployment files differently from root app)
    - theme (ADVANCED - If you want to do theming - Keep in mind)
        - theme-name.theme.scss
        - theme-name.layout.scss
        - variables.scss
    style.scss (ADVANCED - Overwrite any styles here if you like)
    - src
        - app (THE BUSINESS - COMPONENTS LIVE HERE)
            - app.component.scss (Your application-wide styles)
            - app.component.html (MASTER PAGE - entry point into your app)
            - app.component.ts (MODEL-BASED SERVICE CALLS - Set up your global vars and persistent vars here - **NB! Don't dirty this code**)
            - app.routes.ts (This contains the constant exported with your root routing)
            - feature-1 (This is your feature folder)
                - feature-1.module.ts (If you're considering lazy-loading - otherwise omit this)
                - feature-1.component.ts (Feature logic - **Remember you Single Responsibility Principles here**)
                - feature-1.component.scss (Feature-wide styles can be created here)
                - feature-1.component.html (The template for your feature)
                - feature-1-sub-component (This is your sub-feature folder - **ONLY** if this component is specific to this particular feature)
                    - feature-1-sub-component-name.module-ts (**Lazy-loading - This is pushing is guys and girls**)
                    - feature-1-sub-component-name.component.ts (Sub-component logic for a sub-component **ONLY** relevant to this feature-set)
                    - feature-1-sub-component-name.component.scss (Sub-feature-wide styles can be created here)
                    - feature-1-sub-component-name.component.html (This is your feature's sub-component template)
    - assets
        - img (Please try stick to this)
            - images and stuff :)
        - css
            - Third-party libs (Please try rely on packages.json)
            - bootstrap (maybe... think about this)
        - js
            - I hope you don't need to do this (rely on packages.json as much as possible)
        - fonts
            - custom fonts :)  (don't forget to register them properly)
    - environment
        - environment.ts (Designate environment for developer/production mode)
    - root config files and stuff (CORE - angular-cli.json, package.json, tslint.json, tsconfig.json, etc.)

<hr>

# Some Considerations

## Should I do lazy-loading or not?

Consider whether the feature-set that you're loading is too large to eager-load (We want the user to have a good experience)

If you think the module is too large to eager-load, then rather load the scripts when they're requested.

Webpack does a really good job of laz-loading scripts, and depending on your configuration, Webpack will actually implement code-splitting, which will actually only load the portions of the scripts which are actually used in the module (leaving out the nasty waste-code that are just dead references)

Consider where you need to write styles, the nice thing about Angular is it scopes your styles according to the folder scope that you're working in.   
    
Example:

    /src/app/feature-1/feature-1.component.scss will only apply styles to feature-1.component.html

If you need to overwrite styles site-wide, then please use something like /src/styles

Webpack will handle tree-shaking for you, so only loading what is imported by your app.