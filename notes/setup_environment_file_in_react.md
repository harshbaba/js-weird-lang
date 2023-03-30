1.Setup environment file
    =>Create environment file in root like .env.local
    =>another .env.dev

    =>Create a same key in both file like:
    REACT_APP_API_DEV_URL = http://localhost:2525 (.env.local)
    REACT_APP_API_DEV_URL = http://devurl (.env.dev)

    =>install env-cmd via npm 
    npm i env-cmd 
    https://www.npmjs.com/package/env-cmd

    =>Go to package.json file
    and add env-cmd then -f(file locacation) then env file name

    Ex:
    "start": "env-cmd -f .env.dev react-scripts start",
    "start:local": "env-cmd -f .env.local react-scripts start",
    "build": "env-cmd -f .env.local react-scripts build",
    "build:dev": "env-cmd -f .env.dev react-scripts build",

    =>In last go to tsx file where you want to use this url:
    Ex=>Endpoint.ts 
    export const USER_LOGIN = `${process.env.REACT_APP_API_DEV_URL}/login`;

    Note: in environment file there will be no "";

    Happy=your environment file has setup
