# vue-resume-template

Easily generate a personal resume web page using a JSON file and some Vue.js magic!

Here's a [working sample page](http://powerchu.com).

## Dependencies

* yarn (or npm if that's your jam)
* vue.js

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report
```

## Files to Update

Data in this repo contains my own resume data. Simply replace the following two files from the samples included to generate your own.

``` bash
cd ./src
cp resume_data.example.js resume_data.js
cp env.example.js env.js
```

Update the files with your own data. And off you go!

Then simply run `yarn run build` and copy files generated in the `/dist` directory to your server.

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
