# README

This example app was built using [webpack-rails-react](https://github.com/cottonwoodcoding/webpack-rails-react) without any options passed.  This is a simple Todo List App to demonstrate extracting your client to a [React](https://facebook.github.io/react/) application.

### Running Sample App
1.  git clone
2.  npm install && bundle install
3.  bundle exec rake db:create db:migrate
4.  foreman start
### Steps taken
1.  Create a new rails app
```
rails new todo_app --skip-turbolinks
```
2. add webpack-rails-react to your Gemfile
```
gem 'webpack-rails-react'
```
3.  create and migrate the database
```
bundle exec rails g webpack_rails_react:install
```
4.  generate the app
```
rails g webpack_rails_react:install
```
5. enter y to npm install
6. enter y to bundle install
7. generate a controller
```
rails g controller home index --no-helper --no-assets
```
8. change your routes file to root to your new controller
```
root 'home#index'
```
9. app/views/home/index.html.erb add ```<div id="app"></div>```
10. You will find the react app in webpack/
