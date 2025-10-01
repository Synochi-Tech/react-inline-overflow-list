# React inline overflow list

## inspriation
Now days is very important that we should show much content in very lesss space so sometime chips like component eg. (tags / users) item so better to and show more and hide logic there. to solve that problem created this. 

### Preview
![Demo Preview](https://synochi.in/images/InlineOverflowList-demo2.gif) 

### Options
|Props| Optional | Description| Default|
|:-----|---|-----------|------|
| items |No|Array of items to render This can be string of array or objects | - | 
|itemRenderer|No| Function that renders each item, here you have to add your single item component / JSX| - |
|showMoreRenderer|No| Renderer for the "Show more" button Provides toggle handler, current state, and remaining count| - |
|gap|Yes|Gap (px) between items, this is used to calculate space between 2 chips| 8 |
|buffer|Yes|Extra buffer width before wrapping items|0|
|maxItems|Yes|Optional maximum number of items to display|null
|children|Yes| Optional children rendered at the end | - |

### Examples
[Please visit Storybook example ](https://synochi.in/snapkit/storybook/?path=/docs/components-inlineoverflowlist--docs)


