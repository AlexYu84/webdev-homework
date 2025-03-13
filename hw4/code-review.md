## Code Review Exercise

Write your code review here in markdown format. 

## Issue 1 HTML Semantics: ##

For the first significant issue, I found that the 'Submit' button, as well as the 'Reset' button, doesn't have any functionality. As a result, both buttons currently serve no purpose and could potentially cause inconvenience, frustration, and confusion for users. This is due to the fact that they are not associated with the form within the index.html. This can be fixed by moving the the buttons inside the form so they automatically reset and submit.

```html
    <div
        class="form space-evenly-distributed-row-container form-buttons-container">
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
    </div>
</form>
```

## Issue 2 HTML Semantics, CSS, & Accessibility: ##

The next significant issue I found was within the section after the navbar with the very first image. While it uses CSS to portray the image, it does not have any alternate text for accessible use or if the image just simply does not load. This is important for those very reasons. The quick fix for this would be to add an aria-label for screen readers to be able to interpret this. However, this would not solve the issue if the image does not load properly. To my knowledge, in order to fix this, an `<img>` element is the best way to have best of both worlds but this. This however, would require you to adjust the CSS around the image again in order to get the image to display correctly.

```html
    <div class="landing-image" aria-label="a picture of a scottish..."></div>

    or

    <img src="./images/1920px-Adult_Scottish_Fold.jpg"landing-image" aria-label="a picture of a scottish..." alt="a picture of a scottish...">

```

## Issue 3 More HTML Semantics ##

For my final significant issue, I found that in 355-389 of index.html. It uses a `<div>` with a lot of `<p>` elements within it. While it achieves its purpose within the final result of the webpage, I believe this semantically doesn't make sense. To screen readers, it wouldn't read it as a list but instead each paragraph individually without indicating that they are related items. Another issue could be if someone else works on the code. They would not immediately understand what that section of code is for. 

This fix to this would be to use semantics that makes sense like a `<ul>` element. This of course, would need you to adjust the CSS file again to potray it the same/nicely.

```html

<ul>
  <li>They all have one common ancestor: Susie</li>
  <li>The fold is due to a mutation</li>
  <li>They're born with straight ears</li>
  <li>Scottish folds are never bred together</li>
  <li>There are three degrees of folds</li>
  <li>They sit like humans</li>
  <li>They need a gentle touch</li>
  <li>They're the only folded-ear cats that can show</li>
  <li>They're T-Swift approved</li>
</ul>

```