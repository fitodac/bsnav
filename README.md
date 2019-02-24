# bsnav
**Bsnav** adds features to the Bootstrap 4 navbar element.

#### [See the demo](https://fitodac.github.io/bsnav/)
&nbsp;


### How to use it

To start using it, include the css and js files.

Just add a link to the css file in your `<head>`:
````html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/fitodac/bsnav@master/dist/bsnav.min.css">
````

Then, before your closing `<body>` tag add:
````html
<script src="https://cdn.jsdelivr.net/gh/fitodac/bsnav@master/dist/bsnav.min.js"></script>
````


&nbsp;
Where you want to show the menu, you must include the following code:
````html
<div class="navbar navbar-expand-lg bsnav bsnav-light">

  <a class="navbar-brand" href="#">bsnav</a>

  <button class="navbar-toggler toggler-spring"><span class="navbar-toggler-icon"></span></button>

  <div class="collapse navbar-collapse justify-content-md-end">
    <ul class="navbar-nav navbar-mobile mr-0">
      <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Gallery</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
    </ul>
  </div>
</div>
````
In the [demo](https://fitodac.github.io/bsnav/) you can find other styles for navabars.
&nbsp;


#### Mobile navbar
**Bsnav** includes a mobile sidebar menu. To work, you must include the following html code before closing the ````<body>```` tag, then, the **bsnav javascript** will be responsible for cloning the menu to use it for mobile versions.

````html
<div class="bsnav-mobile">
  <div class="bsnav-mobile-overlay"></div>
  <div class="navbar"></div>
</div>
````



&nbsp;
#### Contributing
PLEASE review CONTRIBUTING.md prior to requesting a feature, filing a pull request or filing an issue.

&nbsp;
#### Traducciones
Honestly, I do not speak English very well. If you are interested in helping me improve this documentation you are welcome. And if you want to translate the documentation into other languages even better. ** Bsnav ** is open source and we do it together. ;)

