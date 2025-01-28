---
title: "Pictures and Videos in Astro"
description: "Post with Astro try to use Images and Videos inside Astro framework"
pubDate: "Jan 28 2025"
heroImage: "/blog-placeholder-1.jpg"
---

# Introduction 🙌

Probably you are the one you used to struggling with: how to use import the pictures or even videos in your blog right ? Today we gonna check out how we can develop a web blog with **Astro** using fully picture and videos. Let's get started!

## Setup

Ok well, at first we must to complete some simple task first:

- Have a **picture** or **video** inside your Astro project.
- Config it in the right way with the really **secret** setup!

## Implementation

OK base on **ChatGPT** code that's we have some simple way to use it like:

```markdown
![Alt Text](image-url.jpg "Optional Title")
```

OK lemme show you how it's actually work:
![Here we are](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg)

TADA 🎉 Well done, here it's worked now.

OK now we gonna do it's with the **Video**. For **Video** that we have some way to use it like down below:

```html
<video controls>
  <source src="your-video-url" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

And here we go!!!

<video controls>
  <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

This you see that ?!!! That's so impressive right ?
We finally made it both videos and pictures implement to your post.

# Summary

OK as you see that's we already learn how to make the post with videos and pictures. Next blog we gonna talk about how to use table and external link inside your blog. See ya!!
