#  Readme-Generator
## Description
This product is meant to create a very basic readme template for users to build off of. It is not meant to fully complete readme files but get it started quickly with all of the basics you will need.

## Table of Contents
-[Instalation](#instalation)

-[Usage](#usage)

-[Contributions](#contributions)

-[Tests](#tests)

-[Questions](#questions)

-[License](#license)

## Minimum Requirements
-[NodeJS](https://nodejs.org/en/)

-NPM

>*Note: NPM is installed with NodeJS as of 8/31/20

## Installation
Go to your command line and input the following code:
```sh
$ npm install -g base-readme-generator
```

This product is meant to be installed globally on your machine.

Once this is complete feel free to type in the command:
```sh
$ generatereadmetest
```

This should be output to the console.

![image](https://user-images.githubusercontent.com/67241239/91787096-ed409380-ebbd-11ea-8769-c65aeaf33641.png)

If you see this then congratulations you have finished installing!

## Usage

Once you have successfully installed the package you will have access to two additional commands. "generatereadme" and
"generatecustom".

### Generate Readme
```sh
$ generatereadme
```
This is the default command that will auto fill in sections of a basic readme file with information from the package.json folder that is currently in the directory you are in. If no package.json folder is present the command will return an error. Make sure to run:
```sh
$ npm init
```
before trying to run this command.

### Generate Custom
```sh
$ generatecustom
```
This is a seperate command used if you want to get a head start on the readme and manually input a description, installation section etc. 

This is a list of the prompts that will appear.

![image](https://user-images.githubusercontent.com/67241239/91787759-74423b80-ebbf-11ea-82d3-50abdc4483cd.png)

>*Note that if you do want to input a manual table of contents that they will not come with a link embedded.

## Additional Support
I went ahead and provided a video showing the installation and usage process of this application. [View it here](https://www.youtube.com/watch?v=H6zFD8isqsU)

## Contributions
 Me

## Tests
 As an example, take this very basic package.json file.
 
 ```sh
{
  "name": "default-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.19.2",
    "inquirer": "^7.3.3"
  }
}
```

If you were to input the command:
```sh
$ generatereadme
```

The output would be:
```sh
# default-project
## Description

  
## Table of Contents
-[Instalation](#instalation)

-[Usage](#usage)

-[Liscense](#liscense)

-[Contributions](#contributions)

-[Tests](#tests)

-[Questions](#questions)

## Instalation 
Here is how to install the product

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
```

This then can be used as an easy starting point to finish the readme file for you project.

>*Note: There is currently a known issue where sometimes the title will be a line below the first "#"


## Questions
 Feel free to submit an issue here or email me at <pbsanders1@gmail.com>
 
 ## License

Copyright © 2020 [Patrick Sanders](https://github.com/patches9119)

This project is licensed by [MIT License](https://api.github.com/licenses/mit).
