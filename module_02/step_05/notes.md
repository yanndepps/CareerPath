## Notes

### Images

- images are like links, in that they require an **attribute** to work.
- a link uses an _href_ attribute to link to another file.
- images use the _src_ attribute, which is short for **source**.
```
<img src="./image.jpg" />
```
- images are different from other elements in that they are **self-closing**.
- like links, we can point to external images by including the entire URL
  of the image, or we can point to images within our site by listing
  the file name.
  ```
  <img src="./img.jpg" />
  <img src="https://website.com/img.jpg" />
  ```
- it is considered bad practice to link to external site.
- images are **not** valid without an _alt_ attribute.
- the _alt_ attribute is used to describe the image.
```
<img src="./cute-cat.jpg" alt="a very cute cat" />
```
- the _alt_ should describe the **intent** of the image.
- do not include "an image of" in the _alt_ text. it's implicit.
