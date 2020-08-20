# modifying styles : value

-   changing the text inside an `<input/>` element is a little different from using the `textContent` property we saw earlier. where `textContent` is useful for text-based elements (headers, paragraphs, etc.), `<input>` elements don&rsquo;t really have text of their own. (textContent refers to the text between the opening and closing tags of an element, but `<input>s` are self-closing!)

-   when you want to grab values from an input box, you can access its **value** property to do so. you can also change the value to something new by setting an `<input>` element&rsquo;s value property to something new using the assignment operator (=)

-   [code](app.js)
