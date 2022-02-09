// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
    ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation-Instructions)
    * [Usage Instructions](#Usage-Instructions)
    * [License](#License)
    * [Contributing Members](#Contributing-Members)
    * [Testing](#Testing)    
    * [Questions/Inquiries](#Questions/Inquiries)
  
    ## Description
    ${data.description}
  
  
    ## Installation Instructions 
    ${data.install}
  
    ## Usage Instructions
    ${data.usage}
  
    ## License
    ${data.license}
  
    ## Contributing Members
    ${data.contribution}
  
    ## Testing 
     ${data.testing}
  
    ## Questions/Inquiries 
  
    ### GitHub Profile
    [GitHub Profile](http://github.com/${data.github})
  
    ### Email
    ${data.email}
  `;
}
module.exports = generateMarkdown; 