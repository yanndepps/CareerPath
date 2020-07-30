## Notes

### The box model : borders 
- **borders** add a border to around our element
- it takes **three** properties to set a border :
- border-width
- border-style
- border-color

- we can also use the border shorthand (the order doesn't matter) :
  ```
  .example {
    border: 2px solid pink;
  }
  ```

- we can also control the border of the different sides independently
  ```
  .example {
    border-left: 2px solid pink;
    border-right: 5px dotted red;
    border-bottom: 10px double green;
    border-top: 1px dashed purple;
  }
  ```
  
### Wrap up
- the total width and height of an element is calculated by adding all the 
  different parts of the element together
- the four parts of an element :
  1. the content itself (what we set the width & height on)
  2. the padding
  3. the border 
  4. the margin
