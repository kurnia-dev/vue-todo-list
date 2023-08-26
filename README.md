# Todo List Vue Js

### Deployment
Using GitHub pages to deploy: https://kurnia-dev.github.io/vue-todo-list

This is a brief step to deploy NPM Project to GitHub Pages: 

1. Run `npm install gh-pages --save-dev`
2. Add `predeploy` and `deploy` script to `package.json` :

```json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
```
3. Add `homepage` property to `package.json`. 
   ```json
   "homepage": "https://<USERNAME>.github.io/<REPO>",
   ```
3. Set the correct path. 
Because i am deploying to `https://<USERNAME>.github.io/<REPOSITORY>/`, I need to set `publicPath` in `vue.config.js`, otherwise the path for resources on the deployment will be wrong.

Reference: https://cli.vuejs.org/guide/deployment.html#github-pages

```javascript
// vue.config.js
module.exports = defineConfig({
  transpileDependencies: true, 
  publicPath: "/vue-todo-list/"
})
```

4. Run `npm run deploy`

After finished, the new branch `gh-pages` will be created. GitHub will automaticaly set this branch for deployment. Just wait the deployment process done!
