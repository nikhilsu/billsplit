
## Description

Project to Spilt Bills

## Dependencies
1. NodeJs
2. [Mocha](https://mochajs.org/) ([github](https://github.com/mochajs/mocha)) Testing framework for javaScript.
3. [Sinon](http://sinonjs.org/) ([github](https://github.com/sinonjs/sinon)) Used for stubbing in Mocha.
4. JsDom ([github](https://github.com/rstacruz/jsdom-global)) Used for acessing the dom tree in Tests.
5. Node-Cover ([github](https://github.com/itay/node-cover)) Used to include javscript files in test/spec files.

## Downloading and installing dependencies
- #### For Mac OS X

    - ##### if homebrew is not installed
        - Open terminal
        - Install homebrew by running the command
            - ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        - Then install mocha using the commands
            - brew install mocha
            - npm install mocha

    - ##### if homebrew is installed
        - Open terminal
        - Install mocha by running the commands
            - brew update
            - brew install node
            - npm install -g mocha sinon cover
            - npm install --save-dev --save-exact jsdom jsdom-global node-import 

## Steps to Build:

1. Set present working directory to Project directory.
2. Run the following command
    - mocha test/jsTest
    - cd src/html/
    - python -m SimpleHTTPServer 8000
3. Open browser and go to http://localhost:8000