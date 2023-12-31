
 
// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }
  let test = license.replace(/ /g, "_");
  let badge = `![${license}](https://img.shields.io/badge/license-${test}-brightgreen)`
  return badge;

}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }


  return license;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }
  return license;
}

// Function to generate markdown for README
function generateMarkdown(data, license) {
  
  let badge = renderLicenseBadge(license.name);
  let link = renderLicenseLink(license.url);
  let section = renderLicenseSection(license.desc);

  return `# ${data.title}

${badge}

## Description

${data.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.install}
    
## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}

## License

This application is covered by ${license.name} (${link}) \n
${section}


## Questions

My GitHub Profile: ${data.github} \n
My Email Address: ${data.email}

`;
}


module.exports = { 
generateMarkdown
};
