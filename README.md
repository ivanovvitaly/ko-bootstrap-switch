# ko-bootstrap-switch
Very simple knockout binding handler for Bootstrap Switch

Be sure you have script references to
* [bootstrap-switch] Bootstrap Switch
* [knockoutjs] KnockoutJS
* [jquery] jQuery

### How to use
```javascript
// Include dependencies
<link href="bootstrap.css" rel="stylesheet">
<link href="bootstrap-switch.css" rel="stylesheet">
<script src="jquery.js"></script>
<script src="bootstrap-switch.js"></script>
<script src="knockout.js"></script>
<script src="ko.bootstrap.switch.js"></script>

// Setup bindings
<input type="checkbox" data-bind="bsSwitch: isActive" />

// Create view model
function MyViewModel(){
    ...
    this.isActive = ko.observable(false);
};

// Go
ko.applyBindings(new MyViewModel());
```


[jquery]:https://jquery.com/
[bootstrap-switch]:http://www.bootstrap-switch.org/
[knockoutjs]:http://knockoutjs.com/