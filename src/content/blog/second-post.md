---
title: "How to Build a Simple JavaScript Counter"
description: "Learn how to create a basic counter using JavaScript, step-by-step."
pubDate: "Jan 26 2025"
heroImage: "/blog-placeholder-4.jpg"
---

# How to Build a Simple JavaScript Counter 🧮

In this tutorial, you'll learn how to build a simple counter application using HTML, CSS, and JavaScript. We'll guide you step-by-step, and you'll also see how to include a copy-to-clipboard feature for code snippets.

---

## Step 1: HTML Structure

We start with a basic HTML structure to set up the buttons and display for our counter.

```html
<div id="app">
  <h1>Counter</h1>
  <p id="count">0</p>
  <button id="increment">Increment</button>
  <button id="decrement">Decrement</button>
</div>
```

</copy-code>

---

## Step 3: Adding JavaScript for Functionality 🛠️

Finally, use JavaScript to add increment and decrement functionality.

````javascript
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let count = 0;

incrementButton.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});

decrementButton.addEventListener('click', () => {
  count--;
  countElement.textContent = count;
});

</copy-code>

---

## Final Result 🎉

Once you’ve completed the steps, your counter should look and function like this:

1. **Increment**: Click the "Increment" button to increase the count.
2. **Decrement**: Click the "Decrement" button to decrease the count.

---

### Adding the Copy-to-Clipboard Feature

Astro makes it easy to include a copy-to-clipboard feature using custom components. Here’s an example of how to define a `<copy-code>` component:

```astro
<script>
  export let code = "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };
</script>

<div class="code-block">
  <pre><code>{code}</code></pre>
  <button class="copy-button" onClick={copyToClipboard}>Copy</button>
</div>

<style>
  .code-block {
    position: relative;
    margin: 20px 0;
  }

  .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #007aff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
  }
</style>
````
