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
