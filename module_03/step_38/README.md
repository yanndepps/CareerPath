# add navigation buttons for each user entry

-   use the `document.createElement()` method to create navigation buttons for every entry
-   use the `Element.innerText` property to modify the button&rsquo;s text content and the `Element.appendChild()` method to append it to the `DOM`
-   in the `addEntryToDom()` function, create a new variable named **displayEntryButton**
-   use the `document.createElement` method to create an HTML button and make that the value of the new variable
-   use the `innerText` property to set the button&rsquo;s inner text to **1**
-   append the button to the **entriesNav** div created on line 4
-   [code](app.js)
