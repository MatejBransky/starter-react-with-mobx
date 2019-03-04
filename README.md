# starter-react-with-mobx (TypeScript)

## Features

- TypeScript
- ESlint
- Prettier
- React
- MobX
- aliasing in imports `import Foo from "../../Foo"` -> `import Foo from "@/Foo" // maps to "<rootDir>/src/Foo"`
- .env
- bundle report (`dist/report.html`)
- static folder (just copies files into the dist)
- precommit hook: checks types, formats code, lints errors
- browserslist support
- VS Code settings

## Options

- indentation, tab vs spaces and single/double quotes: in `.prettierrc`:

```json
{
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2
}
```

- browser compatibility: in `.browserslistrc` ([more info](https://github.com/browserslist/browserslist))

- port of localhost: (`default: 1234`) but you can change it pkg.script start with option `--port 1111` (you must update `baseUrl` in `cypress.json`)

## VS Code extensions

- ESlint
- Prettier
- stylelint
- EditorConfig

_TODO_

```
code --extensions-dir
    Set the root path for extensions.
code --list-extensions
    List the installed extensions.
code --show-versions
    Show versions of installed extensions, when using --list-extension.
code --install-extension ( | )
    Installs an extension.
code --uninstall-extension ( | )
    Uninstalls an extension.
code --enable-proposed-api ()
    Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually.
```
