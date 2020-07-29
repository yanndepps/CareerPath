## Notes

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
  
### Selector
- what are we selecting
  ```
  body {
      color: #323232;
  }
  ```

### Property
- the property of our element(s) that we wish to change
  ```
  color: #323232;
  ```
  
### Value
- the value we are assigning to that property
  ```
  #323232;
  ```
  
### Declaration
- the property: value pair
  ```
  color: #323232;
  ```
  
### Rule
- made up of a **selector** and **property: value** declarations

### Selecting elements
- write the element, but without the **< >**
- do **NOT** include attributes
```
    a { ... }
    p { ... }
    h2 { ... }
```
