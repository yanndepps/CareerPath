# selecting elements -> getElementById

-   before we can manipulate any elements from our HtML page with JavaScript, we first have to grab that element by selecting it. this is similar to how CSS works with selectors - in order for the stylesheet to know what it is styling, you first need to provide a selector, and then provide styles to apply to elements that match that selector.
-   in JavaScript, we have essentially the same process: select an element first, then apply some JavaScript code to it.
-   in this lesson we learn about the most common selector, getElementById()

-   a key capability of the DOM API is to select specific elements. using \`document\` gets us access to the <span class="underline">entire</span> HTML document, but we usually only care to make changes to a small part of the DOM like a paragraph, a list item, or a button, e.g.

-   there are lots of ways to do selection, but they can be generally divided into 2 categories:
    1.  selecting a single element (returns an object)
    2.  selecting multiple elements (returns an array of objects)

-   in this lesson we&rsquo;ll focus on one of the most-used selectors, \`getElementById\`.
    -   the \`id\` attribute added to any HTML element is a very common way to single out elements so they&rsquo;re easy to select using JavaScript. \`id\` attributes should be unique - no two elements should have the same \`id\` as each other. This way, you can pick out the exact element you want access to.
    
    -   to select an element, you first need to use the \`.getElementById\` method that exists on the \`document\` object and provide it one argument - the string id name of the element you&rsquo;re looking for.
    
    -   once you have access to that element, you can treat it like any other JavaScript object - save it to a variable, call methods and use the properties of it, etc.

-   [code](app.js)
