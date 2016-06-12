## NOT MAINTAINED
This lib is no longer maintained. I'm using https://popper.js.org for position tooltip/popover on a screen. It doesn't manage clicks just positioning but it does very well


## Twitter Bootstrap tooltip extension

With this **plugin** extension I try to get **4 extra positions** for twitter bootstrap tooltip: `top-left`, `top-right`, `bottom-left` and `bottom-right`.

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
