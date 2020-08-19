# modifying styles

-   JavaScript provides an ability to change any elements CSS styles using the element&rsquo;s style property. this property is an object, and has properties of its own that correspond with all the CSS properties you&rsquo;re already familiar with. (one major difference is that these properties are camelCased)
-   we just saw how you can edit the textContent of an element after selecting it in JavaScript
    -   remember, you’re simply modifying the properties of an object
-   one of the properties each selected element has is the \`style\` property
-   the value of the \`style\` property isn’t a string like it was with the textContent property
    -   instead, it’s an object. so, an object nested inside of another object!
    -   this means selectedElement.style has properties of its own
    -   these properties will be pretty familiar to you, since you’ve worked in CSS already - they’ve got almost the same names as the CSS properties you practiced with earlier in this course!
        -   fontSize
        -   color
        -   backgroundColor
        -   display
        -   textAlign
        -   Etc.
    -   notice the main difference between these and the CSS properties you’re used to? these are camelCased
        -   take a second to think why that is… why can’t we use \`text-align\` in JavaScript?
        -   because the dash is interpreted as a minus sign!
        -   &ldquo;camelCasing&rdquo; in JavaScript is a very strong convention, and you’ll see it used all the time.

-   [code](app.js)
