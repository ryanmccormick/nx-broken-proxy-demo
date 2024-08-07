# NX Broken Proxy Demo App

I put this app together to demonstrate the broken `project.json` targets>serve>options>proxyConfig.

## Problem
When trying to run any frontend applications with a configured reverse proxy, I get an error:
```bash
> nx-broken-proxy-demo@0.0.0 start
> nx run demo-frontend:serve


> nx run demo-frontend:serve

> webpack-cli serve --proxyConfig=packages/demo-frontend/proxy.conf.json --node-env=development

[webpack-cli] Error: Unknown option '--proxyConfig=packages/demo-frontend/proxy.conf.json'
[webpack-cli] Run 'webpack --help' to see available commands and options
Warning: command "webpack-cli serve --proxyConfig=packages/demo-frontend/proxy.conf.json --node-env=development" exited with non-zero status code
```

## Notes
When installing react and nest, I used the commands `nx add @nx/react` and `nx add @nx/nest`

When generating the projects, I used the following commands:
+ demo-frontend: `nx g @nx/react:app demo-frontend`
+ demo-backend: `nx g @nx/nest:app demo-backend --frontendProject demo-frontend`

The demo-backend generation did not create a proxy.conf.json file as described in
the [Set Up Application Proxies](https://nx.dev/recipes/node/application-proxies#set-up-application-proxies) documentation.

I added the `packages/demo-frontend/proxy.conf.json` file myself based on experience from using nx over
the past few years.

I also added the entry in the `project.json` file based on what I have set up in the past:
```json
{
  "name": "demo-frontend",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "packages/demo-frontend/src",
  "projectType": "application",
  "tags": [],
  "// targets": "to see all targets run: nx show project demo-frontend --web",
  "targets": {
    "serve": {
      "options": {
        "proxyConfig": "packages/demo-frontend/proxy.conf.json"
      }
    }
  }
}
```

