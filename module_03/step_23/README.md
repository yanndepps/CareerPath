# modifying an element&rsquo;s text

-   changing an element&rsquo;s text is one of the first steps towards understanding the ways in which we can modify elements using JavaScript. it&rsquo;s best to use the textContent property (as opposed to the innerHTML or innerText properties) when simply making changes to the text of an element.

-   selecting an element doesn’t give us a whole lot of power as developers until we can make changes to the selected elements!

-   one of the most basic things to change about an element could be its text. (keep in mind, this is only useful for elements that normally contain text, like paragraphs, headers, list items, etc.)

-   after selecting the element, you have a few options:
    -   innerHTML -> can be a security risk, so it&rsquo;s usually best to avoid this
    -   innerText -> can be &ldquo;expensive&rdquo; (AKA slow)
    -   textContent -> best option for changing the text of an element

-   textContent is a DOM object property, which means we can set it equal to something else using the single equal sign (assignment operator).

-   e.g. if you had a regular JavaScript object:
    
    ```js
    var person = {name: "Joe"}
    ```
-   you could change the name property by doing:
    
    ```js
    person.name = "Jim"
    ```

-   you can do the same thing with DOM objects:
    
    ```js
    var person = document.getElementById("person")
    person.textContent = "Jim"
    ```

-   [code](app.js)
