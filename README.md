# Sandbox de projeto React usando Typescript

Este projeto é um conjunto mínimo de estrutura e documentação, preferencialmente escrito **em português**, para auxílio aos desenvolvedores em projetos usando React + Typescript.

Você pode usar esse [projeto sandbox](https://opensource.gpupo.com/sandbox-react-app-typescript/) para testes simples de conceito.

    git clone git@github.com:gpupo/sandbox-react-app-typescript.git;
    cd sandbox-react-app-typescript;
    git checkout -b topic/minha-experiencia-de-conceito-01;

## Guides

### Javascript 

A estrutura do **código** deve observer o [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
e com apoio adicional, sua versão [traduzida para português](https://github.com/armoucar/javascript-style-guide).

É importante adequar a escrita aos [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) TypeScript.

### Nomes

Na falta de um guia interno para a convenção de nomes, seguimos a [convenção de nomes do guia Angular](https://angular.io/guide/styleguide#naming)/[source](https://github.com/angular/angular/blob/master/aio/content/guide/styleguide.md) para guia quanto aos nomes dos arquivos, de objetos e a organização deles.

**Do** use consistent names for all symbols.
**Do** follow a pattern that describes the symbol's feature then its type. The recommended pattern is `feature.type.ts`.
**Why?** Naming conventions help provide a consistent way to find content at a glance. Consistency within the project is vital. Consistency with a team is important. Consistency across a company provides tremendous efficiency.
**Why?** The naming conventions should simply help find desired code faster and make it easier to understand.
**Why?** Names of folders and files should clearly convey their intent. For example, `app/heroes/hero-list.component.ts` may contain a component that manages a list of heroes.

#### Separate file names with dots and dashes

**Do** use dashes to separate words in the descriptive name.
**Do** use dots to separate the descriptive name from the type.
**Do** use consistent type names for all components following a pattern that describes the component's feature then its type. A recommended pattern is `feature.type.ts`.
**Do** use conventional type names including `.service`, `.component`, `.pipe`, `.module`, and `.directive`.
Invent additional type names if you must but take care not to create too many.
**Why?** Type names provide a consistent way to quickly identify what is in the file.
**Why?** Type names make it easy to find a specific file type using an editor or IDE's fuzzy search techniques.
**Why?** Unabbreviated type names such as `.service` are descriptive and unambiguous.
Abbreviations such as `.srv`, `.svc`, and `.serv` can be confusing.
**Why?** Type names provide pattern matching for any automated tasks.

#### Symbols and file names

**Do** use consistent names for all assets named after what they represent.
**Do** use upper camel case for class names.
**Do** match the name of the symbol to the name of the file.
**Do** append the symbol name with the conventional suffix (such as `Component`,
`Directive`, `Module`, `Pipe`, or `Service`) for a thing of that type.
**Do** give the filename the conventional suffix (such as `.component.ts`, `.directive.ts`,
`.module.ts`, `.pipe.ts`, or `.service.ts`) for a file of that type.


**Why?** Consistent conventions make it easy to quickly identify
and reference assets of different types.


 **Symbol Name**                                                                         | **File Name**               
-----------------------------------------------------------------------------------------|-----------------------------
 @Component\(\{ \.\.\. \}\)export class AppComponent \{ \}                               | app\.component\.ts          
 @Component\(\{ \.\.\. \}\)export class HeroesComponent \{ \}                            | heroes\.component\.ts       
 @Component\(\{ \.\.\. \}\)export class HeroListComponent \{ \}                          | hero\-list\.component\.ts   
 @Component\(\{ \.\.\. \}\)export class HeroDetailComponent \{ \}                        | hero\-detail\.component\.ts 
 @Directive\(\{ \.\.\. \}\)export class ValidationDirective \{ \}                        | validation\.directive\.ts   
 @NgModule\(\{ \.\.\. \}\)export class AppModule                                         | app\.module\.ts             
 @Pipe\(\{ name: 'initCaps' \}\)export class InitCapsPipe implements PipeTransform \{ \} | init\-caps\.pipe\.ts        
 @Injectable\(\)export class UserProfileService \{ \}                                    | user\-profile\.service\.ts  


#### Service names

**Do** use consistent names for all services named after their feature.
**Do** suffix a service class name with `Service`.
For example, something that gets data or heroes
should be called a `DataService` or a `HeroService`.

A few terms are unambiguously services. They typically
indicate agency by ending in "-er". You may prefer to name
a service that logs messages `Logger` rather than `LoggerService`.
Decide if this exception is agreeable in your project.
As always, strive for consistency.

**Why?** Provides a consistent way to quickly identify and reference services.
**Why?** Clear service names such as `Logger` do not require a suffix.

**Why?** Service names such as `Credit` are nouns and require a suffix and should be named with a suffix when it is not obvious if it is a service or something else.

**Symbol Name**                                                                         | **File Name**               
-----------------------------------------------------------------------------------------|-----------------------------
@Injectable\(\) export class HeroDataService \{ \}                                       |hero\-data\.service\.ts
@Injectable\(\) export class CreditService \{ \}                                         |credit\.service\.ts
@Injectable\(\) export class Logger \{ \}                                                |logger\.service\.ts

### Testes

A cada push nesse repositório é executado a [action](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions) que instalará os pacotes de dependência e [rodará os tests](https://facebook.github.io/create-react-app/docs/running-tests).

## Documentação

* [Linguagem Typescript](https://www.typescriptlang.org/docs/home.html)
* [Popular Javascript Coding Convention on Github](http://sideeffect.kr/popularconvention/#javascript)


### Testes

* []

---

## Scripts

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
