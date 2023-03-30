Setup Jest with React Testing Library:

    First create a react app with typescript
        => npx create-react-app jest-setup-with-react-testing-lib --template typescript

        https://create-react-app.dev/docs/adding-typescript/

    Currently you are already Getting below modules:
        
        currently npx create-react-app is giving jest with react test library.

        "@types/jest"
        "@testing-library/jest-dom"
        "@testing-library/react"

        you can create your component's test cases and run via
            npm test ComponentName.test.tsx

    Install dependencies for run Type script Component:
        
        But If you will run npx jest then error will come for 
        like jest failed to parse a file, so solving this you need 
        to do below activity:

        npm install --save-dev ts-jest  
        npm install --save-dev jest-environment-jsdom

        ts-jest: ts-jest is a TypeScript preprocessor with source map 
            support for Jest that lets you use Jest to test projects written in TypeScript.

        jest-environment-jsdom:
            jsdom and the jest-environment-jsdom package simulate a 
            DOM environment as if you were in the browser. This means that every DOM API that we call can be observed in the same way it would be observed in a browser!
        
    Configuration for jest.config.json :
        
        Transform ts file with ts-jest:

            Then add the Jest config file in root jest.config.json :

                {
                    "transform": {
                        "^.+\\.tsx?$": "ts-jest"
                    }
                }
        
        Transfor file like css or svg with moduleNameMapper:

            Now you can run npx jest:
            you will see, if a component has not imported any file like svg
            or any css/less file then that test will pass
            but if a component has import these things then jest will fail to parse these things.

            So for fixing this you need to update jest.config.json file:

                "moduleNameMapper":{
                        "\\.(css|less|sass|scss)$": "<rootDir>/src/mock/styleMock.js",
                        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/mock/fileTransformer.js"
                }
            
            you have to create 2 mock files, one for css less type of files and
            other for svg gif kind fo file like(fileTransformer.js)

            in styleMock  & fileTransformer.js
                you have to paste:
                    module.exports = "";

        Jest Matcher (extend-except) available in all file:

            Next thing, once you will write test cases then you will definitely use
            jest Matcher like "toBeinDocument" 
                for using this you have to import extend-except in every test case file:
                import "@testing-library/jest-dom/extend-expect";
            So for avoiding this you can use in jest.config.json
                "setupFilesAfterEnv": [
                    "@testing-library/jest-dom/extend-expect"
                ],

    For getting coverage folder after npx jest:

        Add these properties in jest.config.js:
        
        "collectCoverage": true,
    
    Ignore Folders:
        After running this you will see in coverage folder jest will add mock folder too:

        for ignoring mock folder you can use in jest.config.json:
            "coveragePathIgnorePatterns": ["/node_modules/","/src/mock/"]
            Note: by default it igonores node_modules

    Show all test description in terminal during npx jest:
        update jest.config.json:

        "verbose": true,

    Final jest.config.json will look like:
                
        {   
            "testEnvironment": "jsdom",
            "transform": {
                "^.+\\.tsx?$": "ts-jest"
            },
            "setupFilesAfterEnv": [
                "@testing-library/jest-dom/extend-expect"
            ],
            "moduleNameMapper":{
                "\\.(css|less|sass|scss)$": "<rootDir>/styleMock.js",
                "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
            }
        },
        "collectCoverage": true,
        "verbose": true,
        "coveragePathIgnorePatterns": ["/node_modules/","/src/mock/"]

    For Running npm test:
        you have to update package.json

        "test": "jest",

    Reference Link:
        https://medium.com/tinyso/react-hero-typescript-jest-react-testing-library-setup-c2ecce18ec96
        https://medium.com/swlh/jest-for-a-typescript-based-react-app-69fb3cb9aca0
        https://jestjs.io/docs/code-transformation#examples
        syntaxerror-with-jest-and-react-and-importing-css-files:
        https://stackoverflow.com/questions/39418555/syntaxerror-with-jest-and-react-and-importing-css-files
        configuring jest:
        https://deltice.github.io/jest/docs/en/configuration.html#coveragepathignorepatterns-array-string

