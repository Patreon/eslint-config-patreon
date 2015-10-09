# eslint-config-patreon

[Shareable linting configurations](http://eslint.org/docs/developer-guide/shareable-configs)
for JS projects at Patreon.

```
npm install eslint-config-patreon
```

You'll need some additional dependencies for your linting story to be complete:

```
npm install eslint babel-eslint eslint-plugin-react
```

## Usage

*.eslintrc*
```json
{
    "extends": "patreon"
}
```

## Sublime Text Setup

Make sure you install these sublime packages:

- [Sublime Linter](http://sublimelinter.readthedocs.org/en/latest/installation.html)
- [Sublime Linter eslint](https://github.com/roadhump/SublimeLinter-eslint#plugin-installation)

## Atom Setup

Make sure you install these atom packages:

[linter](https://atom.io/packages/linter)
[linter-eslint](https://atom.io/packages/linter-eslint)

`linter-eslint` piggy backs on `linter` so you need both.
