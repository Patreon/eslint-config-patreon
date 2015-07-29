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

## What config should I use?

There are two configs we support: `strict` and `loose` that are handy
in different scenarios.

`strict`

We are strict by default.
This is great for pre-commit and deployment hooks since it will catch
things like left over `console.log` calls.

*.eslintrc*
```json
{
    "extends": "patreon"
}
```

or

```json
{
    "extends": "patreon/strict"
}
```

`loose`

It would be annoying if your editor's linter plugin was yelling at you all
the time during development because you have `console.log` all over the place.

*.eslintrc*
```json
{
    "extends": "patreon/loose"
}
```

## Sublime Text Setup

Make sure you install these sublime packages:

- [Sublime Linter](http://sublimelinter.readthedocs.org/en/latest/installation.html)
- [Sublime Linter eslint](https://github.com/roadhump/SublimeLinter-eslint#plugin-installation)

By default the linter w/ pick up on the open projects `.eslintrc` config file,
which is set to `strict`. Too noisy? No problem. Update your User Settings
by opening the command palette and typing in `prefs`. Select
`Preferences: SublimeLinter Settings - User`. Make sure the `args` property
looks like this:

```json
args: ["--config", "node_modules/eslint-config-patreon/loose.json"]
```
