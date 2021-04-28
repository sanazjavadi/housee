# Housess Project

## Getting Started

These scripts refer to the different stages of developing an application:

- `dev` - Runs `next` which starts Next.js in development mode
- `build` - Runs `next` build which builds the application for production usage
- `start` - Runs `next` start which starts a Next.js production server

## System Requirements

- [Node.js](https://nodejs.org/en/) 10 or later
- MacOS, Windows (including WSL), and Linux are supported

## Setup

1. Clone this repo
2. Move to the appropriate directory: `cd <DIR>`.
3. Run `yarn` or `npm install` to install dependencies .
4. Run `yarn dev` or `npm run dev` to see the example app at `http://localhost:3000`.

## Command Line Commands

## Development

```Shell
yarn dev
```

Starts the development server running on `http://localhost:3000`

> Starts the development server and makes your application accessible at `localhost:3000`. Changes in the application code will be hot-reloaded.

### Production

```Shell
yarn build && yarn start
```

## Building

```Shell
yarn build
```

## Building with Docker

> TODO: this feature is not complete yet !

```shell

yarn docker:build

```

Preps app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `src/.next` folder.

## Unit testing

```Shell
yarn test
```

Tests application with the unit tests specified in the `**/tests/*.js` files
throughout the application.

### Watching

```Shell
yarn test:watch
```

Watches changes to  application and re-runs tests whenever a file changes.

## Linting

```Shell
yarn lint
```

## Prettier

```Shell
yarn prettier
```

## Generator

> We Use Generator in This Project for easily scale that and save correct pattern in Project Flow

For Create Component

```Shell
yarn generate component
```

For create container

```Shell
yarn generate container
```

### you can get more information about `Generator` [here](./docs/Generator.md)

## Structure overview

> TODO:

```text
├── README.md
├── next.config.js
├── package.json
├── server
│   ├── internals
│   │   └── generators
│   └── app.ts
├── src
│  
└── yarn.lock

```

## For More Information about `ENV_VARIABLE` check [docs](./docs/dotenv-usage.md)
