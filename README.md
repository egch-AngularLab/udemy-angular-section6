## New Docs
Dynamic binding
```html
<img [src]="image().src" [alt]="image().alt" />
```
String interpolation 
```html
<h2>{{ title() }}</h2>
```

### To clarify
- ngProjectAs
- :host

### CSS
![alt text](docs/css-encapsulation.png)

host selector
```css
:host {
    display: inline-block;
    padding: 0.65rem 1.35rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    background-color: #691ebe;
    color: white;
    border: none;
  }
```

### Methods
- ngOnInit
- OnInit

### Template Variables
```html
<form (ngSubmit)="onSubmit(titleInput)">
  <app-control   label="Title">
    <input name="title" id="title" #titleInput />
  </app-control>
  ```

  ```Typescript
  export class NewTicketComponent {
  onSubmit(titleInput: HTMLInputElement) {
    console.dir(titleInput);
  }
}
  ```

### first
Prints true only for the first element.
```html
      @for (ticket of tickets; track ticket.id) {
          <li>
              <app-ticket/> - {{ $first }}  
          </li>
      }
```

### References
[Component Lifecycle](https://angular.dev/guide/components/lifecycle)

## Classic Docs

# CmpDeepDive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0-next.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
