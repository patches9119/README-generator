#!/usr/bin/env node

var fs = require('fs');

let table = [];
console.log("Locating package.json file...");
// Use fs.readFile() method to read the file 
fs.readFile('package.json', 'UTF-8', (err, data) => {
    if (err) {
        //console.log("we fucked up");
    }
    console.log("Package.json located, Building readme...");
    //console.log("running");
    //console.log(data);
    splitData(data);
});
function splitData(data) {
    var charlength = 0;
    var flag = 0;
    for (let i = 0; i < data.length; i++) {
        charlength++;
        if (data.charAt(i) === ",") {
            table.push(data.slice(flag, i));
            flag = i;
        }
    }
    table.push(data.slice(flag,data.length));
    //console.log(charlength);
    for (let x = 0; x < table.length; x++) {
        //console.log(table[x]);
    }
    getImportantInfo(table);
};

function getImportantInfo(data) {
    let titledata, descriptiondata, licensedata;
    for (let q = 0; q < table.length; q++) {
        if (table[q].includes("name")) {
            titledata = table[q];
        } else if (table[q].includes("description")) {
            descriptiondata = table[q];
        } else if (table[q].includes("license")) {
            licensedata = table[q];
        }
    }
    //console.log("title data ", titledata);
    //console.log("desc data ", descriptiondata);
    //console.log("license data ", licensedata);

    pushImportantInfo(titledata, descriptiondata, licensedata);

}

function pushImportantInfo(title, description, license) {


    let builtTitle = title.toString();
    builtTitle = builtTitle.replace("{", "");
    builtTitle = builtTitle.replace("name", "");
    builtTitle = builtTitle.replace(":", "");
    builtTitle = builtTitle.replace(/"/g, "");
    builtTitle = builtTitle.replace("\n", "");
    builtTitle = builtTitle.replace(" ", "");
    //console.log("New Title ", builtTitle);

    let builtDesc = description;
    builtDesc = builtDesc.replace("{", "");
    builtDesc = builtDesc.replace("description", "");
    builtDesc = builtDesc.replace(":", "");
    builtDesc = builtDesc.replace(",", "");
    builtDesc = builtDesc.replace(/"/g, "");
    builtDesc = builtDesc.replace("\n", "");
    builtDesc = builtDesc.replace(" ", "");
    //console.log("New Description ", builtDesc);

    let builtLicense = license;
    builtLicense = builtLicense.replace("{", "");
    builtLicense = builtLicense.replace("license", "");
    builtLicense = builtLicense.replace(":", "");
    builtLicense = builtLicense.replace(",", "");
    builtLicense = builtLicense.replace(/"/g, "");
    builtLicense = builtLicense.replace("\n", "");
    builtLicense = builtLicense.replace(" ", "");
    //console.log("New License ", builtLicense);
    console.log("Readme built, creating file...");

    buildREADME(builtTitle, builtDesc, builtLicense);

};

function buildREADME(title, description, license) {
    const readme = "# " + title.replace(" ", "") + "\n## Description\n" + description + "\n## Table of Contents\n-[Instalation](#instalation)\n\n-[Usage](#usage)\n\n-[Liscense](#liscense)\n\n-[Contributions](#contributions)\n\n-[Tests](#tests)\n\n-[Questions](#questions)\n\n## Instalation \nHere is how to install the product\n\n## Usage \nHere is how to use the product\n\n## License \n" + license + "\n\n## Contributions\n No contributors\n\n## Tests\n Coming Soon!\n\n## Questions\n Coming Soon!";
    fs.writeFile("README.md", readme, function (err) {
        if (err) {
            //console.log(err);
          }
          console.log("Complete!")
    })
}