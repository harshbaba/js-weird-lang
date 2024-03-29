1. #### Angular Cli
    Some Useful Angular cli commands:
    ```JavaScript
    ng new PROJECT_NAME // create an angular project
    ng g component componentName //For Create a component
    ng g module app-routing
    ng g service pnr-status
    ng g guard auth
    ng g directive auto-complete-trains
    ```
    when two moduls exists in your project then you should run command with module name:
    ```JavaScript
    ng g c new-component --module app
    ```
    
    [For see other command go to](https://www.npmjs.com/package/angular-cli)

2. Guard in Angular

    Five types of route guards are provided by angular :
    * CanActivate
    * CanActivateChild
    * CanLoad
    * CanDeactivate
    * Resolve


    
    https://codeburst.io/understanding-angular-guards-347b452e1892

    https://www.digitalocean.com/community/tutorials/angular-route-guards

4. Component Communication

    https://enlear.academy/sharing-data-between-angular-components-f76fa680bf76
    https://www.digitalocean.com/community/tutorials/angular-component-communication

5. AOT VS JIT

    https://medium.com/@jitubutwal144/basic-overview-of-just-in-time-jit-vs-ahead-of-time-aot-compilation-in-angular-applications-d24f04d8f7ca

6. Observable

    Observables provide support for passing messages between publishers and subscribers 
    in your application. 
    Observables offer significant benefits over other techniques for event handling, 
    asynchronous programming, and handling multiple values.

    Observables are declarative that is, you define a function for publishing values, 
    but it will not executed until a consumer subscribes to it.
    The subscribed consumer then receives notifications until the function completes, 
    or until they unsubscribe.

    An observable can deliver multiple values of any type literals, messages, or events, 
    depending on the context. 
    The API for receiving values is the same whether the values are delivered synchronously 
    or asynchronously. 
    Because setup and teardown logic are both handled by the observable, your application
    code only needs to worry about subscribing to consume values, and when done, unsubscribing.
    Whether the stream was keystrokes, an HTTP response, or an interval timer, the interface 
    for listening to values and stopping listening is the same.

    Because of these advantages, observables are used extensively within Angular, 
    and are recommended for app development as well.


    https://angular.io/guide/observables

    https://angular.io/guide/observables-in-angular

7. Difference between Observables and Promises.

    An Observable is like a Stream (in many languages) and allows to pass zero or more events, 
    While A Promise handles a single event.

    Observable are cancellable while Promises are not.

    An Observable is declarative only starts if you subscribe to it, While a Promise starts immediately. 

    Observable provides operators like map, forEach, reduce, ... similar to an array

    There are also powerful operators like retry(), or replay(), ... that are often quite handy.

    https://stackoverflow.com/questions/37364973/what-is-the-difference-between-promises-and-observables

8. View Encapsulation
    In Angular, component CSS styles are encapsulated into the component's view and don't 
    affect the rest of the application. To control how this encapsulation happens on a per 
    component basis, set the view encapsulation mode in the component metadata.

    To Use Encapsulation in our component import it from angular core and define it inside @component decorator.
    ```JavaScript
    import { Component, OnInit, ViewEncapsulation} from '@angular/core';
    @Component({
    selector: 'app-live-trains',
    templateUrl: './live-trains.component.html',
    styleUrls: ['./live-trains.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [LiveTrainService, GlobalHelper, LinkService]
    })
    ```

    #### ViewEncapsulation.None
    a.There is no shadow DOM.
    b.Style is not scoped to the component.


    #### ViewEncapsulation.emulated
    a.Angular will not create a Shadow DOM for the component.
    b.Style will be scoped to the component.
    c.This is the default value for viewEncapsulation.



    #### ViewEncapsulation.Native
    a.Angular will create a Shadow DOM for the component.
    b.Style will be scoped to the component.
    
    Note:This require Shadow Dom feature so if your browser does not support it then it will not work.
    To solve this problem angular has create "emulated". Because "emulated" work as Natively (mostly same as Shadow Dom) but
    not require Shadow Dom Browsers.

    https://codecraft.tv/courses/angular/components/templates-styles-view-encapsulation/

    https://dzone.com/articles/what-is-viewencapsulation-in-angular

9. Dependency Injection

    Dependencies are services or objects that a class needs to perform its function. 
    Dependency injection, or DI, is a design pattern in which a class requests dependencies 
    from external sources rather than creating them.
    Angular's DI framework provides dependencies to a class upon instantiation. 
    You can use Angular DI to increase flexibility and modularity in your applications.

    https://angular.io/guide/dependency-injection

10. Lazy Loading

    https://www.zerone-consulting.com/how-to-create-lazy-loading-in-angular-4/

11. Routing
    
    https://shermandigital.com/blog/configure-routing-in-an-angular-cli-project/

12. Angular Lifecycle

    https://angular.io/guide/lifecycle-hooks

13. sequence of Angular Lifecycle Hooks

    https://angular.io/guide/lifecycle-hooks

14. Pipes in Angular

    https://angular.io/guide/pipes

    https://scotch.io/tutorials/create-a-globally-available-custom-pipe-in-angular-2

15. Directive

    https://angular.io/guide/built-in-directives

17. What is Angular and Why Angular?
    Angular is a development platform, built on TypeScript. As a platform, Angular includes:

    A component-based framework for building scalable web applications
    A collection of well-integrated libraries that cover a wide variety of features, 
    including routing, forms management, client-server communication, and more.
    A suite of developer tools to help you develop, build, test, and update your code
    
    With Angular, you're taking advantage of a platform that can scale from single-developer 
    projects to enterprise-level applications. Angular is designed to make updating as easy as possible, 
    so you can take advantage of the latest developments with a minimum of effort. Best of all, 
    the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, 
    and content creators.
    
    https://angular.io/guide/what-is-angular

24. Current Version of Angular and new features

    Angular 12

25. What is environment in angular and how we can setup

    https://balramchavan.medium.com/configure-and-build-angular-application-for-different-environments-7e94a3c0af23

    https://medium.com/@onlyyprasanth/how-to-manage-multiple-environments-with-angular-cli-angular-2-to-5-aa68d557fa77
    
26. Event Emitters

    Angular provides an EventEmitter class that is used when publishing values 
    from a component through the @Output() decorator. EventEmitter extends RxJS Subject, 
    adding an emit() method so it can send arbitrary values. When you call emit(), 
    it passes the emitted value to the next() method of any subscribed observer.

27. Subject vs BehaviorSubject vs ReplaySubject:

    A subject is a special type of Observable which shares a single execution path among the 
    observers which results in a multicast (one to many).

    There are four types of Subjects available based on how they behave:

    Subject - No initial value or replay available

    AsyncSubject - Emits latest values to subscribers on completion of the async task
    
    BehaviouralSubject - requires an initial value and emits current values to new subscribers
    
    ReplaySubject - replays a specified number of last values to new subscribers

    https://stackoverflow.com/questions/43118769/subject-vs-behaviorsubject-vs-replaysubject-in-angular

    https://devsuhas.com/2019/12/09/difference-between-subject-and-behaviour-subject-in-rxjs/

28. Difference between Template-Driven and Reactive Forms in Angular

    https://www.pluralsight.com/guides/difference-between-template-driven-and-reactive-forms-angular

29. whats-new-in-angular-8-features

    https://www.credencys.com/blog/whats-new-in-angular-8-features/

30. In which versions of angular you have worked, relaese date and explain features & differences.

    I have worked on Angular 5 & 8.

    Angular 5 Release Date: October 2017
    Angular 8 Realease Date: May 2019

    Features of Angular 5: 
        * Simpler Progressive Web Applications:
            Angular Team has put emphasis to simplify the PWA making process. Not only that, with Angular 5.0 
            it is possible to get the features of native mobile applications with the mobile web apps such as 
            push notifications and offline experience.

        * Material Design Components:
            Material Design Components are now made compatible with server-side rendering.

        * Built Optimizer:
            Angular 5.0 comes with build optimizer tool. It makes the application lighter and faster 
            by removing unnecessary runtime code as well as unnecessary additional parts. 
            Ultimately the size of the JavaScript decreases, and application becomes much faster.

        * Angular Universal State Transfer API and DOM:
            Angular 5.0 comes with Angular Universal State Transfer API and DOM support for sharing code 
            between server and client-side versions of an application. Angular Universal renders the 
            application on the server side. This increases the perceived performance of the application.

        * Improved compiler and Typescript:
            Typescript was introduced in Angular 2.0 and along with the upgrades in Angular newer versions of 
            typescript were also introduced. The Angular compiler for Angular 5.0 comes with typescript 2.3 
            that makes the rebuilt super-fast.

        * Number, date and currency pipes update:
            Earlier Angular was dependant on the browsers to get the number, date and currency format. This resulted in 
            inconsistency for users. But now in Angular 5.0, international number, date and currency have been standardized.

    Refer URL for Angular 5:

        https://jessicawlm.medium.com/angular-5-features-and-benefits-all-you-need-to-know-about-angular-5-0-1da0b9f47cfc

    Features of Angular 8:

    Refer URL for Angular 8:

        https://www.credencys.com/blog/whats-new-in-angular-8-features/   

31. Handle multiple API requests in Angular using mergeMap and forkJoin
    to avoid nested subscriptions
    
    https://nehalist.io/multiple-http-requests-in-angular/

    https://levelup.gitconnected.com/handle-multiple-api-requests-in-angular-using-mergemap-and-forkjoin-to-avoid-nested-subscriptions-a20fb5040d0c
    
    https://stackoverflow.com/questions/62937218/handle-multiple-api-requests-parallel-from-angular-8
    
    https://www.geekstrick.com/tech-talks/how-to-call-multiple-rest-api-and-subscribe-in-angular/

32. Setvalue vs Patchvalue Angular reactive Form Group

    https://sami-chkhachkhi.medium.com/setvalue-vs-patchvalue-angular-a64a55e912b8

33. How an Angular App Work Behind The Scenes — The Angular Flow

    https://medium.com/siam-vit/how-an-angular-app-work-behind-the-scenes-angular-flow-dcc4d1df27bd

1. Angular Interview Questions for Senior/Staff/ 
    Architect developer position [Part 1–2023]

    https://balramchavan.medium.com/angular-interview-questions-for-senior-staff-architect-developer-position-part-1-2023-f7f725537049

1. Angular Interview Questions for Senior/Staff/ 
    Architect developer position [Part 2–2023]

    https://balramchavan.medium.com/angular-interview-questions-for-senior-staff-architect-developer-position-part-2-2023-3ccd4368a64

         






    


