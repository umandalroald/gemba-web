### Linting

The entire project is being linted locally and upon pushing to Circle CI. First, install the Polymer CLI and ESLint for local linting:

```
npm install -g polymer-cli
npm install -g eslint
npm install -g eslint-plugin-html
```


After this, install the code linting plugins:
```
apm install linter
apm install polymer-atom
apm install linter-eslint


```

To lint the project locally:
```
npm run lint
```
Once you push to the repo, Circle CI will automatically lint the project.
