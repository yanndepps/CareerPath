# selecting multiple elements

-   although `getElementById` is the most common selection method, allowing us to get a single element from the page, sometimes we need to select multiple elements all at once. two common methods for doing this is by using JavaScript&rsquo;s `getElementsByClassName` or `getElementsByTagName`.
-   when using these methods, instead of receiving a single object back, you&rsquo;ll instead receive an array-like HTML structure called an **HTMLCollection**. you can essentially treat this collection just like an array, i.e. you can access the elements in that array using index numbers.

-   sometimes you may want to select a number of elements, like all the list items in a list or all elements with a specific class name. getElementById works great for selecting a single instance (since ids should be unique), but there are other selectors you can use to get lists of elements.
-   since there could potentially be multiple elements in the document with the same class name or the same tag name (like \`p\` or \`div\`), these element selectors will always return an array of elements. (strictly speaking it isn&rsquo;t really an array, but is an &ldquo;array-like object&rdquo; of all the elements that matched the selector)
-   **important:** even if you only have one element on the page with a given class name, the \`getElementsByClassName()\` method will still return this array of elements - it will just be an array with a single item in it.


# quiz

1.  what are some of the differences between getElementById and getElementsByClassName?
    -   id - returns a single element/object from the document. class name (tag name) returns an array-like object.
    -   id - needs an id to find, class name - needs a class to find document.getElementsByTagName(&ldquo;div&rdquo;)

2.  what will \`.getElementsByClassName\` return if there are no elements with the matching class in the document?
    -   returns an empty array

1.  what will \`.getElementById\` return if there is no element with the matching id in the document?
    -   \`null\`

-   [code](app.js)
