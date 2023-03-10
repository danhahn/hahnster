---
title: Getting Started with Flexbox
date: '2021-12-14'
---

Are you tired of struggling with CSS layouts that just don't behave the way you want them to? Have you heard about flexbox, but aren't sure how to get started? You're in luck! Flexbox is a powerful layout tool that can make your CSS life much easier. In this beginner's guide, we'll cover the basics of flexbox and how you can start using it today.

## What is Flexbox?

Flexbox is a layout mode in CSS that allows you to arrange elements in a flexible way. It gives you more control over the alignment, direction, order, and size of your elements. Flexbox works by creating a flex container and adding flex items inside it. The container has various properties that you can use to control the layout of the items inside.

## Getting Started with Flexbox

To start using flexbox, you need to first create a flex container. You can do this by setting the display property of the container to "flex". Here's an example:

```css
.container {
	display: flex;
}
```

Once you've created a flex container, you can start adding flex items inside it. To do this, simply add the elements you want to be flex items inside the container. By default, flex items will be arranged in a row. Here's an example:

```html
<div class="container">
	<div class="item">Item 1</div>
	<div class="item">Item 2</div>
	<div class="item">Item 3</div>
</div>
```

In this example, we've created a container with three flex items inside it.

### Flexbox Properties

Now that we've created a flex container and added some flex items inside it, we can start using flexbox properties to control the layout of the items. Here are some of the most commonly used flexbox properties:

- `flex-direction`: Controls the direction of the main axis of the flex container (row or column).
- `justify-content`: Controls the alignment of flex items along the main axis.
- `align-items`: Controls the alignment of flex items along the cross axis.
- `flex-wrap`: Controls whether flex items should wrap onto multiple lines.
- `order`: Controls the order in which flex items appear.

Here's an example of how you can use these properties to create a simple flexbox layout:

```css
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}

.item {
	order: 1;
}
```

In this example, we've created a flex container with a column layout. We've centered the items both horizontally and vertically, and we've set the items to wrap onto multiple lines if necessary. We've also set the order of all the items to 1, which means they'll all appear in the same order.

## Conclusion

Flexbox is a powerful tool for
