# Notes

- [Notes](#notes)
  - [inline](#inline)
  - [selector](#selector)
  - [property](#property)
  - [value](#value)
  - [declaration](#declaration)
  - [rule](#rule)
  - [selecting elements](#selecting-elements)


## inline
- in general inline CSS is never used.
  use a stylesheet to make global changes.
- we can use an internal stylesheet that is placed
  in the head of our pages :
  ```
  <head>
    <style>
        CSS goes here
    </style>
  </head>
  ```
  
## selector
- what are we selecting
  ```
  body {
      color: #323232;
  }
  ```

## property
- the property of our element(s) that we wish to change
  ```
  color: #323232;
  ```
  
## value
- the value we are assigning to that property
  ```
  #323232;
  ```
  
## declaration
- the property: value pair
  ```
  color: #323232;
  ```
  
## rule
- made up of a **selector** and **property: value** declarations

## selecting elements
- write the element, but without the **< >**
- do **NOT** include attributes
```
    a { ... }
    p { ... }
    h2 { ... }
```
