Translation service
===========

1. Install following dependencies to your project
--

```bash
$ bower install angular-translate --save
```

  Make sure to embed the it in your HTML document.
```
<script src="path/to/angular-translate.js"></script>
```

  Inject angular-translate module as a dependency into your app:
```
var app = angular.module('myApp', ['pascalprecht.translate']);
```
--

2. Include translationLoader.js to your project
--
--
3. Modify your app.js of config of your module to use translation service where 'ar' is the language code 
--
  ```bash
  app.config(function($translateProvider) {
    $translateProvider.preferredLanguage('ar');
    $translateProvider.useLoader('translationLoader');
    moment().locale('ar');
  }
  ```
--
4. Modify your html to use translate service 
--
  Method 1 using filter
  ```
  <h1>{{'HEADLINE' | translate}}</h1>
  <p>{{'PARAGRAPH' | translate}}</p>
  ```
  Method 2 using directive
  ```
  <p>{{ 'HEADLINE' | translate }}</p>
  <p>{{ 'PARAGRAPH' | translate }}</p>
   
  <p translate>PASSED_AS_TEXT</p>
  <p translate="PASSED_AS_ATTRIBUTE"></p>
  <p translate>{{ 'PASSED_AS_INTERPOLATION' }}</p>
  <p translate="{{ 'PASSED_AS_INTERPOLATION' }}"></p>
  
  ```
--
Check http://angular-translate.github.io/docs/#/guide/06_variable-replacement
for more options and detailed info
