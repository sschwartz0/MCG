# Angular

## Summary

In this unit you will be building a full MVC-style frontend web application to display the content of your API. You will be using [AngularJS](https://angularjs.org/), a frontend framework maintained by Google, and still the [most popular](https://www.airpair.com/js/javascript-framework-comparison) framework for building web applications today.

## Learning Goals

1. Understand how views, controllers and models interact in Angular.
2. Use factories to maintain data consistency across your application.
3. Create a rich, dynamic messaging platform.
4. Use your own API to reinforce the value of API design.
5. Successfully make HTTP requests in Angular.

### What is a framework?

Developing modern front-end web applications requires us to manage complex patterns of data on the front-end. The data (for example, the number of favorites on a tweet, whether a button has been selected or not) constantly change as new information becomes available from the server or as users interact with the data. Frameworks give us the structure to more easily design applications that handle this complexity.

### What is Angular?

Angular is currently the most popular front-end JavaScript framework using the Model-View-Controller pattern. [Coding Horror - Understanding MVC](http://blog.codinghorror.com/understanding-model-view-controller/)

Angular uses [two-way data binding](https://docs.angularjs.org/tutorial/step_04) to ensure that any data-related changes affecting the underlying data model immediately update the relevant view or views (the UI that the user interacts with). Any changes to the view (for example by a user) immediately updates the relevant data model.

![](https://www.dropbox.com/s/lj2013fj1e8c213/Screenshot%202015-10-26%2008.09.55.png?dl=1)

'Controllers' [AngularJS Controller Tutorial](http://viralpatel.net/blogs/angularjs-controller-tutorial/) join the dots between the 'data' in the view (that the user interacts with) and data in the underlying 'model'

We must write the models, views and controllers ([Angular docs - Controllers](https://docs.angularjs.org/guide/controller)) ourselves as developers - Angular gives us plenty of tools to do so as well as a structure it expects us to follow.

## Things to look out for

* Angular documentation can be obscure, so ensure you balance interpreting the documentation with reading posts & tutorials by other developers - [Use AngularJS to Power Your Web Application](http://www.yearofmoo.com/2012/08/use-angularjs-to-power-your-web-application.html)
* Forget about React's clear and helpful error messages - Angular's errors are a different beast. If you feel like your error message is unreadable, notice that each error message has a URL link at the top. Clicking the link takes you to a more detailed error page which is usually much more helpful than the message shown in console.

## Getting started

### Setup

- [ ] Run `npm install` to install dependencies
- [ ] Run `npm start` to start your server. Open your browser to the following address:
```
http://localhost:3000
```

### Testing
- [ ] You can run the tests either by opening `test/test.html` in the browser or running this command in the terminal.
```
npm test
```
- [ ] Additionally, be sure to run the app in your browser and verify its functionality directly.
```
npm start
open http://localhost:3000/
```

### Controllers
- [ ] Modify the `HomeController` scope to have a `name` property. Set the `name` property to your name.
- [ ] Modify the `home.html` partial to display the value set to the `name` property.

### Adding Views
- [ ] Create another route at `/about` that displays the `about.html` partial.
- [ ] Create another module named `Codesmith.AboutController` (place inside `./client/controllers/aboutController.js` and be sure to include this new file on the page via a `<script>` tag).
- [ ] Create a controller named `AboutController` inside the `Codesmith.AboutController` module.
- [ ] Add this module to you app's dependencies in `myApp`.
- [ ] Modify the `about.html` partial to display the name property.
- [ ] Inside the `about.html` partial, add the directive `ng-model` to the <input> tag. Set the value of the `ng-model` directive to `name`.
- [ ] Type into the input field. If done correctly, the input should be rendered alongside the input field.
- [ ] Add links to navigate between these views using `ng-href`. This is a directive in the `ngRoute` module.

### Factories
- [ ] Create a separate module named `Codesmith.UserFactory` (place inside `./client/factories/userFactory.js`).
- [ ] Create a factory named `UserFactory` inside the `Codesmith.UserFactory` module. This will return an object with a `name` and `age` property, which should be equal to your name and age.
- [ ] Make sure this new Factory is included by a `<script>` tag and added to the dependencies. Which module should be dependent on this factory? Is it `myApp`?
- [ ] Inject `UserFactory` inside `AboutController`.
- [ ] Add a `ng-submit` directive to the <form> on the `about.html` partial.
- [ ] Add a function called `save` in `AboutController` that, when submitted, saves the `name` inside the `UserFactory` object.
- [ ] Add an `age` field to the form. Which also gets saved.
- [ ] Inject `UserFactory` inside `HomeController`.
- [ ] Have the `HomeController` name property equal to the `UserFactory` name such that `name` saved in the `/about` page is displayed. (You should be able to navigate between these without losing the changes to your UserFactory).

### Message Factory and AJAX
- [ ] Create another factory called `MessageFactory` which we'll use to connect to the messaging API.
```
http://slack-server.elasticbeanstalk.com/messages
```
- [ ] Inside the `MessageFactory`, create a method called `fetch` that makes a GET request to the API. The returned object should be the promise object returned from the `$http` request.
- [ ] Inject this factory into the `HomeController`.
- [ ] When the user visits the home page, the `HomeController` should get the messages and use the promise to store the array of messages inside the `messages` property of the `HomeController` scope.
- [ ] Use the `ng-repeat` directive to display all the messages in the `home` partial
- [ ] Add a `post` method to your factory which will make a post request to messages. This should also return the promise.
- [ ] Add a text input to this page which will be used to post a new message to the API. When submitted, have the `HomeController` get the new message from this input and call the `post` method passing the new message as an argument. (Don't forget to send the name too).
- [ ] Be sure to add your new message to the `messages` property and update the page with your message.

### Making a "smart" Angular application
- [ ] Add a dropdown menu that enables the user to sort the data by different fields. This can be done with plain old JavaScript, but there is a cleaner way! Look up [Angular filters](https://docs.angularjs.org/guide/filter).
- [ ] Add a search bar that can show only the messages that match the search phrase.

### Connect to your custom API.
Write a JS file with a new Angular module that contains an **element directive** (similar to a React component). Demonstrate its use by showing it in `myApp`. Create a new view for your API that shows the styled data on this view. To be clear, all that should be required to get your API's data into `myApp` is these three steps:
  1. Include your JS file with a `<script>` tag in `index.html`.
  2. Add the new module to `myApp` dependencies.
  3. Place the element directive (custom tag) into the view.


### Extension Challenges
- [ ] Replace ngRoute with [ui-router](https://github.com/angular-ui/ui-router).
- [ ] Support [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) in your messaging platform. Have messages containing markdown render to HTML on your page. You'll need to compile it to HTML and then render it. Check out [MarkdownJs](https://github.com/evilstreak/markdown-js) and Angular's [$sce service](https://docs.angularjs.org/api/ng/service/$sce).
- [ ] Have the messages list update with new messages every 3 seconds.
- [ ] Use `ngAnimate` to have a "fade" effect when you transition between pages.

## Additional Links and Resources
- [https://github.com/johnpapa/angular-styleguide](https://github.com/johnpapa/angular-styleguide)
- [https://docs.angularjs.org/guide/concepts](https://docs.angularjs.org/guide/concepts)
- [https://docs.angularjs.org/guide/controller](https://docs.angularjs.org/guide/controller)
- [https://docs.angularjs.org/guide/providers](https://docs.angularjs.org/guide/providers)
