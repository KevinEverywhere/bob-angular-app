###version 0.0.0

*This is in development and is not recommended to develop with as a base until version 0.0.1. You can still look under the hood to see how things work by following the installation process.*

This is the sample application that can be viewed here: [bob-angular](http://bob-angular.herokuapp.com/). 
The full repository, including the node application, can be found at the [bob-angular](https://github.com/KevinEverywhere/bob-angular-app) repository.

The application is meant to demonstrate the mapping of 2D Web content, including video, Leaflet map tiles, SVG and HTML layout, on to 3D surfaces. It uses [angular.js](http://angularjs.org/) as the principal framework, and [three.js](http://threejs.org/), particularly, the [CSS3DRenderer](http://threejs.org/examples/js/renderers/CSS3DRenderer.js), for mapping to 3D. More information can be found in the web page, which describes the application and content itself; and the bob-angular repo.

### Instructions

Enter the following in the terminal window:
```
git clone https://github.com/KevinEverywhere/bob-angular-app.git
```
You now have the client-side app installed, and you can go to the bob-angular-app directory to see the files. They are structured: 


```
app/                                   --> application source files
  assets/                              --> media, CSS JS, JSON assets
    css, js, media
  components/                          --> view or feature based components
    footer, main, context, navigation  --> view components
    youtube, leaflet, svg              --> feature (vendor) based components
  shared/                              --> feature based shared services
    three_module, country_module        
  libs/                                --> repository for bower-created 
    3l, angular, bootstrap, three.js,      source files from 'npm start' or  
    jquery, less, ui-router, others        'bower install' 
  app.js                               --> main application module
  index.html                           --> the entrace point to the app.

```


## Contact

For more information on bob-angular please contact kevin@planetkevin.com


