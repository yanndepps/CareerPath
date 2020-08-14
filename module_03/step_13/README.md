# Conditionals


## [code](app.js)


## about

-   often in programming you have to pose a question to your program, such as asking if a certain variable is true or false, and then executing a specific piece of code depending on the outcome. conditionals in Javascript (and other programming languages) allows us to have our program evaluate a question and respond accordingly.

```js
if (true) {
 console.log('true');
} else {
 console.log('false');
}
```

    true
    undefined


## comparison operators

-   what does a statement evaluate to ?
-   `<, >, <=, >=, ==, ===, !=, !==`


## falsey

-   `"", 0, null, undefined, false, NaN`
-   everything else is **truthy**

```js
if ('') {
    console.log('truthy');
} else {
    console.log('falsey');
}
```

    falsey
    undefined


## logic operators

-   && -> and
-   || -> or
-   ! -> not

```js
if (2 === 2 || 2 === 4) {
    console.log('working!');
} else {
    console.log('not working!');
}
```

    working!
    undefined


## switch statement

```js
let color;
switch(color) {
    case "red":
     console.log('the color is red!');
     break;
    case "blue":
     console.log('the color is blue!');
     break;
    default:
     console.log('no color specified!');
}
```

    no color specified!
    undefined
