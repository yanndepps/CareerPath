# modifying styles : className & classList

-   `className` and `classList` are both properties available on elements for modifying the element&rsquo;s classes. `classList` is more robust and easier to use, but we&rsquo;ll talk about both of them for the sake of completeness.
-   sometimes you want the style to still live in CSS and just programmatically apply a CSS class to the element using JS. this is where \`className\` and \`classList\` come in!


## className

-   this is a slightly outdated way to deal with adding a CSS class to an element in JavaScript. an element&rsquo;s \`className\` property is simply a string of the class added to the element. seems simple enough, but when the time comes to add a <span class="underline">second</span> class or remove one of many classes, it&rsquo;s tricky. (since the value is a simple string with spaces delimiting each class name, you&rsquo;d need to parse that string and remove the part that has the class you want - not TOO hard but pretty ugly)


## classList

-   this is a much better way to handle the adding and removing of CSS classes in JS. \`classList\` is an object with some methods that are easy to use when adding or removing classes from an element.

-   [code](app.js)
