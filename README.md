# wcolor
>**wcolor** is react component. It is Markdown Input tag to selector color

### Install 
```
  npm install w-color-selector
```

### Usage
Import component
```
  import ColorSelector from 'w-color-selector';
```

### Examples
```
  <ColorSelector onChange={(value) => fn(value)}/>
```

### Props
##### width - optional
Set width for input show color
* Type of: __Number__
* Unit: __px__

##### height - optional
Set height for input show color
* Type of: __Number__
* Unit: __px__

##### defaultValue - optional
Default value of input. Default is #54478c
* Type of: __string__

##### onChange(value: string) - required
A callback when happens for every change value

### Note
When click add color, to add you click mouse out and click. 
You want to hidden popup you can click into input or double click into out popup