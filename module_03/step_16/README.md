# functions

-   programs are built from different &rsquo;blocks&rsquo; of code and accomplish a specific task. we can put these blocks of code into a function which allows us to execute that block of code whenever needed.
-   **DRY** -> do not repeat yourself !
-   function **declaration** :
    
    ```js
    function sum(a, b) {
        console.log(a+b);
    }
    ```
    

-   function **expression** : stored in a variable
-   first-class citizen -> use them like almost any other data types
    
    ```js
    const sum = function(a,b) {
        console.log(a+b);
    }
    ```
    

-   parameters -> placeholders, represent data using arguments
-   the `return` keyword will stop the function and returns the expected value
    
    ```js
    function sum(a,b) {
        return a + b;
    }
    const result = sum(40, 7);
    console.log(result);
    ```
    
        47

-   [code](app.js)
