Tests:

1. Return full resume

http://peaceful-sands-8861.herokuapp.com/

2. Return 'Education'

http://peaceful-sands-8861.herokuapp.com/Education

http://peaceful-sands-8861.herokuapp.com/edu

3. Return 'Professional Experience'

http://peaceful-sands-8861.herokuapp.com/Profession

http://peaceful-sands-8861.herokuapp.com/Jobs

http://peaceful-sands-8861.herokuapp.com/job

4. Return the first section

http://peaceful-sands-8861.herokuapp.com/summary

5. Return the last section

http://peaceful-sands-8861.herokuapp.com/skills

http://peaceful-sands-8861.herokuapp.com/tech

6. Return name only

http://peaceful-sands-8861.herokuapp.com/non-existent


Notes:

1. Surprises:

A. Works on heroku without declaring dependency on jquery in package.json.

2. Pending work:

A. Evaluate perf overhead using regular expression, i.e. '*', with express router, i.e. get('*', ...).