#  Readme-Generator
## Description
This product is meant to create a very basic readme template for users to build off of. It is not meant to fully complete readme files but get it started quickly with all of the basics you will need.

## Table of Contents
-[Instalation](#instalation)

-[Usage](#usage)

-[Liscense](#liscense)

-[Contributions](#contributions)

-[Tests](#tests)

-[Questions](#questions)

## Instalation 
### Minimum Requirements
NodeJS

NPM

### Installation Process
Go to your command line and input the following code
```sh
$ npm install -g base-readme-generator
```

This product is meant to be installed globally on your machine.

Once this is complete feel free to type in the command
```sh
$ generatereadmetest
```

This should be output to the console.

![image](https://user-images.githubusercontent.com/67241239/91787096-ed409380-ebbd-11ea-8769-c65aeaf33641.png)

Once you have successfully installed the package you will have access to two additional commands. "generatereadme" and
"generatecustom".

#### Generate Readme
```sh
$ generatereadme
```
This is the default command that will auto fill in sections of a basic readme file with information from the package.json folder that is currently in the directory you are in. If no package.json folder is present the command will return an error. Make sure to run
```sh
$ npm init
```
before trying to run this command

#### Generate Custom
```sh
$ generatecustom
```
This is a seperate command used if you want to get a head start on the readme and manually input a description, installation section etc. 

This is a list of the prompts that will appear.

![image](https://user-images.githubusercontent.com/67241239/91787759-74423b80-ebbf-11ea-82d3-50abdc4483cd.png)

>*Note that if you do want to input a manual table of contents that they will not come with a link embedded.


## Usage 
Here is how to use the product

## License 
  ISC

## Contributions
 No contributors

## Tests
 Coming Soon!

## Questions
 Coming Soon!
