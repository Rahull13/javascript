## 📅 Day 1: Introduction to AngularJS & Setup

**🎥 YouTube**: [Academind’s AngularJS Crash Course (2020)](https://www.youtube.com/watch?v=1tRLveSyNz8)

**📖 Summary**:
- AngularJS is a structural framework for dynamic web apps.
- Uses HTML for templates and extends it with `ng-*` directives.
- Follows MVC (Model-View-Controller) architecture.

**⚡ Exercise**:
Create a basic `index.html` with:
```html
<div ng-app="">
  <p>Name: <input ng-model="name"></p>
  <p>Hello {{name}}!</p>
</div>
```

**❓ Quiz**:
- What is `ng-app` used for?
- How does `ng-model` work?

---

## 📅 Day 2: Modules, Controllers & Two-Way Binding

**🎥 YouTube**: [Programming with Mosh - AngularJS Tutorial](https://www.youtube.com/watch?v=6xgMkzFIF8w)

**📖 Summary**:
- Modules group app components.
- Controllers add logic and bind to the view via `$scope`.

**⚡ Exercise**:
```js
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.message = "Hello Angular!";
});
```

**❓ Quiz**:
- Difference between module and controller?
- What is `$scope`?

---

## 📅 Day 3: Directives

**🎥 YouTube**: [Traversy Media – AngularJS Directives](https://www.youtube.com/watch?v=k9n_rrY0NyY)

**📖 Summary**:
- Directives are special markers on DOM elements.
- Examples: `ng-model`, `ng-repeat`, `ng-if`, `ng-show`.

**⚡ Exercise**:
```html
<ul>
  <li ng-repeat="item in items">{{item}}</li>
</ul>
```

**❓ Quiz**:
- When do you use `ng-if` vs `ng-show`?
- What is `ng-repeat` used for?

---

## 📅 Day 4: Expressions & Filters

**🎥 YouTube**: [LearnCode.academy – Angular Filters](https://www.youtube.com/watch?v=nfUlJ9cX2x4)

**📖 Summary**:
- Expressions: `{{ 5 + 5 }}`
- Filters: format data (e.g. `date`, `uppercase`, `currency`)

**⚡ Exercise**:
```html
<p>{{ birthday | date:'longDate' }}</p>
<p>{{ salary | currency }}</p>
```

**❓ Quiz**:
- What are AngularJS filters?
- Name 3 built-in filters.

---

## 📅 Day 5: Services & Dependency Injection

**🎥 YouTube**: [Codevolution – AngularJS Services](https://www.youtube.com/watch?v=C7NFuH5SfqQ)

**📖 Summary**:
- Services are singleton objects used for logic/data sharing.
- AngularJS uses DI (Dependency Injection) to manage them.

**⚡ Exercise**:
```js
app.service('dataService', function() {
  this.getData = () => ["Item 1", "Item 2"];
});

app.controller('myCtrl', function($scope, dataService) {
  $scope.items = dataService.getData();
});
```

**❓ Quiz**:
- What is the purpose of DI?
- What's the difference between factory and service?

---

## 📅 Day 6: Routing with ngRoute

**🎥 YouTube**: [Techsith – AngularJS Routing Tutorial](https://www.youtube.com/watch?v=pFcXdxPvjDE)

**📖 Summary**:
- Use `ngRoute` to build single-page apps.
- Define routes in `app.config`.

**⚡ Exercise**:
```js
app.config(function($routeProvider) {
  $routeProvider
    .when("/home", { templateUrl: "home.html" })
    .when("/about", { templateUrl: "about.html" })
    .otherwise({ redirectTo: "/home" });
});
```

**❓ Quiz**:
- What is the purpose of `ng-view`?
- How do you configure a fallback route?

---

## 📅 Day 7: Build a Mini Project: ToDo App

**🎥 YouTube**: [Build ToDo App in AngularJS](https://www.youtube.com/watch?v=KrKrN0Pm85s)

**📖 Summary**:
- Tie together all knowledge from the week.
- Understand component flow and app structure.

**⚡ Exercise**:
- Add edit/delete functionality
- Use a service to store tasks
- Bonus: Store tasks in `localStorage`

**❓ Quiz**:
- What parts of AngularJS did you use in this project?
- How would you improve it further?

---

