# Yet another Screeps Typescript Starter

## Install

```
git clone https://github.com/Shirk/screeps-typescript-slim.git
```

## Usage

All of your typescript sources live below the _src/_ directory.
However the starter is configured to resolve additional modules from _node_modules_ if required.

The following node scripts are provided out-of-the-box:

`compile` - compile all typescript code to javascript and place the result in _dist/_

`lint` - run eslint over the whole project

`push-main` - clean, compile and push the resulting code to the main branch on screeps.com

`push-sim` - clean, compile and push the resulting code to the main branch on screeps.com

The push targets will internally run `rollup -c --environment DEST=...`, to push to an arbitrary environment
either add a new modified push script to _package.json_ or directly call rollup with `DEST=your-branch-name`.

## Configuration

You can modify _screeps.js_ to fit your server needs.
The default configuration is preloaded to push to the 'main' and 'sim' branches on screeps.com.
To be able to version your server settings without committing sensible data _screeps.js_ uses a separate secrets file:

Create a file called _secrets.json_ with the following content:

```json
{
  "token": "<your screeps.com API token>"
}
```

For a private server you can also use this file to store your email and password and reffer to them as `secrets.email` and `secrets.password` from _screeps.js_.

```json
{
  "email": "<your pserver email>",
  "password": "<your pserver password>"
}
```

_secrets.json_ is part listed in the _.gitignore_ file to ensure it won't accidentally be committed to your repository.


