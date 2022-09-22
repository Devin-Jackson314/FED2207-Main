ANGULAR DOC SCAVENGER HUNT
Due FRIDAY: 8/26 by End of the day
Instructions:
Listed below are a set of questions that relate to Angular. Using the Angular documentation, you are to find the subject, and put into your own words, an explanation on that particular question. Do not simply copy and paste, use this for your own reference and understanding of the technology.
Make a README.md file, copy the questions into it, and then after each question put your answer. To submit, just send me the README file via teams.
https://angular.io/docs
https://rxjs.dev/guide/observable

What Is Angular?

Angular is a frame work built on top of typescript. This framework is component based for the use of scalability of web apps. Some features of angular is routing, forms management, and client server communication.
The angular framework has development tools that assist you in building, testing, and debugging is easier to understand. With angular you can make the move from single developer projects to enterprise level applications.

What are Services and How Do We Use Them?

A service is any value, function, or feature that is used by an application. services do something specifc and they do it really well. In angular services and components are diffrentiated for the purpose of modules and the ability to re use code. Use cases for services include fetching data from servers, comfirming user input, or simply logging information needed to the console. In angular components use services for code that does not have view or application logic.

What Is Dependency Injection?

When you define code processes in an injectable service class those services make that code available to the component. When you make those services available to the component in angular that is refferred to as Dependency Injection. Dependency injection provides components with access to services and other resources. The key word or decorator you will be using to inject these services is @Injectable(). When you see this in angular code or typescript it means that component or class is dependent on a service of some type. Angular already has a built in injector that is app wide therefore you can access it or add additional injectors as needed you do not have to code them from scratch it is a tool. The provider instructs the injector on how to access or establish a dependency.

What Are Directives?

Directives are classes they add additional managment to elements in a angular application. You can use these built in directives to administer forms, lists, styles, and the rendered information to the user. There are three types of directives that is components, attribute directives, and structural directives. Component is the most used directive and it is used in conjuction with a template. An attribute directive manipulates the appearance of an element,component or all directives. Structural directives changes the dom layout by adding and removing. Attribute directives listen to and modify the behavior of other HTML elements, attributes, properties and components. Examples of ng module directives are things like NgClass, NgStyle, and NgModel. Some example of structural directives are NgIf, NgFor, and NgSwitch.

What Are Pipes?
You can use pipes to link operators together. Pipes let you combine multiple functions into a single function. The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, when executed, runs the composed functions in sequence.
Pipes are functions they are used in template expression to pass an input. Then the said pipe returns a transformed value. In an application pipes only have to be declared once then it can be used anywhere in the app. An example of a pipe is to display a date without its raw string format or without the quotations. Angular also provides built in pipes like CurrencyPipe, UppercasePipe, and LowerCasePipe. When using the pipe operator you need parenthesis when using a ternary operator (?).

What is @Input and @Output Decorators?

The input and output decorators are used to manipulate the dom in angular. These decorators are used in a class field as an input, then it applies metadata configuration. These decorators are used often when you are establishing component relationships with one or more components. These decorators simply allow for components to communicate with each other.

What is ViewChild?

ViewChild is a also a property decorators for a purpose of configuring in angular what we call a view query. When you are viewing the dom in angular there is a hook running that detects change or a dom selector. When the dom changes and the selector is detected a new child is updated in view child.

What Are The Angular Lifecycle Hooks, and What Are They Used For?

Lifecycle hooks are built in the angular framework and they automatically work in the background when you download angular.When your component is built ,initiaited, and you start to use it, thats called a life cycle. The lifecycle is furthered when you make a change, in return it updates the dom and the component needs. Your lifecycle only ends when a component is destroyed or deleted. In you angular app you can use lifecycle hook methods to listen to key events in order to accomplish things like, respond to updates, clean up before deletion and to make a change.

What Is Angular Routing?

Routing has alot to do with the reason we would use angular in the first place. We use angular because it allows us to create single page applications. The nature of this involves hiding and showings components when events are initiated by the user. To manage this type of activity in angular you use what we call a Router. This router enables managment by deciphering the browser URL as a command to manipulate the view.

How Can We Nest Routes?

When your application has scaled to a larger size you can create routes that depend on a component with a different root application. To do this you would create a nested route or what angular calls child routes.

How Can We Guard Routes From Unauthorized Access?

We use route guard to simply define what a user can access or not access, it can also affect what a user can load. Guard routes provide your app with security so users cannot do something in your app that you wouldnt want them to do by blocking the navigation for that user or users. Examples of route guards are CanActivate, CanActivateChild, CanDeactivate, Resolve, and CanLoad.

What Is Lazy Loading, And How Can We Implement This?

Lazy loading is when you design your routes to only load modules when you need them. When you lazy load it will not load all your app modules when the applications is launched. You can use ngModules to implement this beacuase they load similar to an iffy in vanilla javascript as soon as the application is launched. You can still use a module later in the code that was not loaded when the app is launched. This helps your app performance because it decreases load times because less it loaded when the app is initiated.

What Are The Two Types Of Forms In Angular, and How Are They Different?

One type of form in angular is reactive forms . With reactive forms you access synchronous data with observable operators that are tracked with observable streams. Template driven form differ because it gives you direct access to change data in your template. The tracking in template driven forms is done asynchronously and they depend on directives in the template.

What Is The HTTP Client Module?

The http client module is simply how we handle http request in the angular environment. This CLient module configures a dependency injector for httpclient which is automatically imported by the module.


What are the 4 types of data binding in angular?

Data binding keeps your page up to date based on the state of your application. You use data binding to specify things such as the source of an image, the state of a button, or data for a particular user.

Property binding, Event binding, two- way binding, and attribute binding.

https://rxjs.dev/guide/observable

What is RXJS?

RxJS is a library.

Reactive programming is a an asynchronous programming paradigm concerned with data streams and the propagation of change. RxJs is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code. RxJS provides an implementation of the Observable type, which is needed until the type becomes part of the language and until the type becomes part of the language and until browsers support it. The library also providess utility functions for creating and working with observables. 
These utility functions are used for:
Converting existing code for async operations into observables
Iterating through the values in a stream
Mapping values to different types 
Filtering streams
Composing multiple streams


What are Observables?

RxJS offers a number of functions that can be used to create new observables. These functions can simplify the process of creating observables from things such as events, timers, and promises. 

What are operators?

Operators are functions that build on the observables foundation to enable sophisticated manipulation of collections. Example operators are map(), filter(), concat(), and flatMap().
Operators take configuration options, and they return function, the operator observes the source observable's emitted values, transforms them, and returns a new observable of those transformed values. 

What are subjects and behavioral subjects?




