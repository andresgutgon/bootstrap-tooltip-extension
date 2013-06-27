## Twitter Bootstrap tooltip extension

With this plugin extension I try to get **4 extra positions** for twitter bootstrap tooltip: `top-left`, `top-right`, `bottom-left` and `bottom-right`.

### Example
![top left](https://raw.github.com/andresgutgon/bootstrap-tooltip-extension/master/example/images/example.png)


### Usage
If you want to use you have to add this file just after bootstrap tooltip. And **before** bootstrap popovers

```html
  <script src="bootstrap-tooltip.js"></script>
  <script src="bootstrap-tooltip-extension.js"></script>
```

In your html:
``` html
  <h4 id="top-left" data-toggle="tooltip" data-placement="top-left" data-original-title="Tooltip on top left">Top Left</h4>
  <script type="text/javascript">
    $('#top-left').tooltip('show');
  </script>
```

## css to be added
This is the **css** with this 4 extra positions

``` css
.tooltip.top-left .tooltip-arrow {
  bottom: -5px;
  left: 5px;
  border-width: 5px 5px 0;
  border-top-color: black;
}
.tooltip.top-right .tooltip-arrow {
  bottom: -5px;
  right: 5px;
  border-width: 5px 5px 0;
  border-top-color: black;
}
.tooltip.bottom-left .tooltip-arrow {
  top: -5px;
  left: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: black;
}
.tooltip.bottom-right .tooltip-arrow {
  top: -5px;
  right: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: black;
}
```

### License
The MIT License (MIT)

Copyright (c) 2013 Andres andresgutgon@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
