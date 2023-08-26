# Todo List Vue Js

### Deployment
Using GitHub pages to deploy: https://kurnia-dev.github.io/vue-todo-list  
<br><br>
This is a brief step to deploy NPM Vue Project to GitHub Pages:  
<br>
> Before start, make sure you have remoted your GitHub Repository

<br>

1. Install `gh-pages` module using NPM.
   ```
   npm install gh-pages --save-dev
   ```
3. Add `predeploy` and `deploy` script to `package.json` 
   ```json
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
      },
   ```
  
4. Set the correct path.
   
   Because i am deploying to `https://<USERNAME>.github.io/<REPOSITORY>/`, I need to set `publicPath` in `vue.config.js`, otherwise the path for resources on the deployment will be wrong.

   > If you are deploying to the root repository `https://<USERNAME>.github.io`, you can skip this step. 
   <br>
   
   ```javascript
    // vue.config.js
    module.exports = defineConfig({
      transpileDependencies: true, 
      publicPath: "/vue-todo-list/"
    })
   ```
  
   With publicPath: `<link rel="icon" href="/vue-todo-list/favicon.ico">`
   
   Without publicPath: `<link rel="icon" href="/favicon.ico">`
   
   See Reference: https://cli.vuejs.org/guide/deployment.html#github-page
   <br><br>
   

6. Run `npm run deploy`
<br><br>
After finished, the new branch `gh-pages` will be created. <br>GitHub will automaticaly set this branch for deployment. <br><br>Just wait the deployment process done!
