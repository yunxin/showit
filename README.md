Overview

The resume is stored with Google Docs. The web server retrieves it in html format using Google's HTTP API. It is then loaded into jsdom. The URL path of a request to the web server is used to select the section within the resume to return. If the path is empty, the full resume will be returned.

A path matches a section name based on containment ignoring case.

node.js + jsdom + jquery are selected for simplicity.

A benefit of using Google Docs is that the resume can be edited easily without any need to change the web server unless the basic structure of html or section names change.

Tests

Return full resume

http://peaceful-sands-8861.herokuapp.com/

Return 'Education'

http://peaceful-sands-8861.herokuapp.com/Education

http://peaceful-sands-8861.herokuapp.com/edu

Return 'Professional Experience'

http://peaceful-sands-8861.herokuapp.com/Profession

http://peaceful-sands-8861.herokuapp.com/Jobs

http://peaceful-sands-8861.herokuapp.com/job

Return the first section

http://peaceful-sands-8861.herokuapp.com/summary

Return the last section

http://peaceful-sands-8861.herokuapp.com/skills

http://peaceful-sands-8861.herokuapp.com/tech

Return name only

http://peaceful-sands-8861.herokuapp.com/non-existent

Notes

Works on heroku without declaring dependency on jquery etc in package.json.

Perf evaluation and tuning not done
