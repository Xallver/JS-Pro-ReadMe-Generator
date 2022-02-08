// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}
  
    ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation-Instructions)
    * [Usage Instructions](#Usage-Instructions)
    * [License](#License)
    * [Contributing Members](#Contributing-Members)
    * [Testing](#Testing)    
    * [Questions/Inquiries](#Questions/Inquiries)
  
    ## Description
    ${data.Description}
  
  
    ## Installation Instructions 
    ${data.Installation}
  
    ## Usage Instructions
    ${data.Usage}
  
    ## License
    ${data.License}
  
    ## Contributing Members
    ${data.Contributors}
  
    ## Testing 
     ${data.Test}
  
    ## Questions/Inquiries 
  
    ### GitHub Profile
    [GitHub Profile](http://github.com/${data.Github})
  
    ### Email
    ${data.Email}
  `;
}
module.exports = generateMarkdown; 