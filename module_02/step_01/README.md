# Notes

- [Notes](#notes)
- [html & css](#html--css)
- [tags](#tags)
- [!DOCTYPE](#doctype)
- [html](#html)
- [head](#head)
- [title](#title)
- [body](#body)
- [headings & paragraphs](#headings--paragraphs)
- [strong & emphasis](#strong--emphasis)
- [anchor & attributes](#anchor--attributes)

# html & css
- tells the browser what the content we are writing actually is :

  - heading or a regular paragraph ?
  - a link, bold or italic text
  - a navigation, footer or main content of the page

# tags
- we wrap everything in tags to tell the browser what is what.
- tags are inside < >
- closing tags include a forward slash </ >
- everything from the opening to closing tag is called an element.
- element defines our content to the browser.

# !DOCTYPE
- the very first thing at the top of document.
- tells the browser that this is an HTML5 document.

# html
- tell the browser we'll write some html.
- because we can also actually write css or javascipt inside an html document.
- acts as the 'root' of our document.

# head
- nothing here is visible to the visitor.
- contains essential informations.
- more like a brain than a head.

# title
- in the head of the document.
- not visible in the page, but shows up in the tab of the browser and in search results.

# body
- contains the content that will be visible to the user when they visit a page.

# headings & paragraphs
- headings denote hierarchy and page structure.
- six levels of headings :
  ```
  <h1> ... <h6>
  ```
- paragraphs are your regular text

# strong & emphasis
- text inside _strong_ indicates that it is of strong importance.
- browsers make this text bold.
- text inside _em_ tag has stress emphasis.
- browsers make this text italic.
- they are both inline elements :
  - use them within a paragraph.
  - they must be closed before the end of a parargraph.

# anchor & attributes
- HTML elements can have attributes, which give the browser extra
  information about that attribute.
- attributes are **always** written within the opening tag, with a space
  after the element.
- one element which requires an attribute is the _a_ which we use to create
  links. without the _href_ attribute, the link cannot work and is not valid.

- _a_ is short for anchor. used to **link** either to a different location within
  the current page or to another page.
