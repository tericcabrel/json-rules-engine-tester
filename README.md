## JSON Rule Engine Tester
A business rules engine is a software system that executes one or more business rules in a runtime production environment. Before execute an action in the system, we have to check if some conditions are satisfied (check if an account has enough money, if an user has exceeded a specific quota, etc...). To make them possible, we have to write these rules and test them! This utility allow you to do that. 

I use this [package](https://github.com/cachecontrol/json-rules-engine) to validate the facts according to the rule provided



## Installation
```bash
$ git clone https://github.com/tericcabrel/json-rules-engine-tester.git <project_name>
$ cd <project_name>
$ yarn
$ yarn start
```
## Usage
1- Write your rule. check here [here](https://github.com/cachecontrol/json-rules-engine) how do it <br/>
2- Define one or more facts <br/>
3- Validate and check the result <br/>