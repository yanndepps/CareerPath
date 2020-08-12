# Notes
- [Notes](#notes)
  - [three primary ways to select something](#three-primary-ways-to-select-something)
  - [classes](#classes)
  - [IDs](#ids)
  - [ID vs class](#id-vs-class)

## three primary ways to select something
1. **Element** selector
2. **Class** selector
3. **ID** selector

## classes
- are a type of attribute we can add to an HTML element
  ```
  <p class="intro"> ... </p>
  ```
  
- in CSS the class attribute is referenced by using a **full stop**
  ```
  .intro {
    font-size: 18px;
    color: #2b5dad;
  }
  ```
  
## IDs
- are a type of attribute we can add to an HTML element
  ```
  <p id="intro"> ... </p>
  ```
  
- an ID is represented by a **hashtag**
  ```
  #intro {
    font-size: 18px;
  }
  ```

## ID vs class
- an ID is an individual
- a class is a group
- an ID can only be used one time per page
- a class can be used over and over again
- an ID will overwrite a class if they are both selecting the same thing
