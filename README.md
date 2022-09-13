# Online Forum website

This project is focused on creating a fully featured Online Forum for users that includes authentication, responsiveness and intuivative design.

The project is designed to be robust and follow best use insdustry standards in the development process.

This repository is the Front End of the website, it leverages React, Redux-toolkit, TypeScript & Tailwindcss.

For the backend, this api is being called: <https://launchup-prisma.herokuapp.com/>

Note: The api is hosted on the free teir of Heroku, thus if idle it might have a delay on the first call done to it.

More information about the api endpoints can be found at in the [docs folder](docs/endpoints.md)

## Getting started

Ensure `NodeJs` is installed.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Semantic Commit Messages

All commit messages and PR titles need to follow Conventional Commits semantics.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

### Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
