# display only one entry at a time

-   work with JavaScript *for loops* to access and modify styling for the user entries in the entries section
-   inside the `displayEntryButton addEventListener` function, create a new variable named &rsquo;allEntries&rsquo;.
-   use the `document.queryselectorAll` method to select all elements with the class of **single-entry** and make that the value of the new `allEntries` variable.
-   use a *for loop* to iterate through all the elements in the `allEntries` variable.
-   set each element&rsquo;s `style.display` property to **none**.
-   [code](app.js)
