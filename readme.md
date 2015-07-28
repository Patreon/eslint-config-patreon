# eslint-config-patreon

[Shareable linting configurations](http://eslint.org/docs/developer-guide/shareable-configs)
for JS projects at Patreon.

```
npm install eslint-config-patreon
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
