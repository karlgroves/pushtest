const config = require('./config.json');
const octokit = require('@octokit/rest')();

// authenticate
octokit.authenticate({
  type: 'token',
  token: config.github.token
});


Summary
Issue key
Issue Type
Project key
Project name
Component/s	Component/s	Component/s	Component/s	Component/s	Component/s	Component/s
Labels	Labels	Labels
Description
Outward issue link (Relates)
Custom field (Content Type)
Custom field (Issue Code)
Custom field (Platform)
Custom field (Platform)
Custom field (Platform)
Custom field (Platform)
Custom field (Platform)
Custom field (Platform)
Custom field (Populations)
Custom field (Populations)
Custom field (Populations)
Custom field (Populations)
Custom field (Recommended Code)
Custom field (Reference(s))
Custom field (Remediation Guidance)
Custom field (Severity)
Custom field (WCAG Success Criteria)
Custom field (WCAG Success Criteria)
Custom field (WCAG Success Criteria)
Custom field (WCAG Success Criteria)
Custom field (WCAG Success Criteria)
Custom field (Youtube Video URL)




// construct the issue
let issue = {

  user: config.github.user,

  repo: config.github.repo,

  owner: config.github.owner,

  title: 'Constructed title goes here',

  body: 'constructed description goes here'
};

// post the issue
octokit.issues.create(issue, function (err, response) {
  console.log(JSON.stringify(response, null, 4));
});

