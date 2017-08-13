# Using Handlebars and MVC development for Creating a Burger App

I've followed the homework instructions, including adding a timestamp when a burger row is created in the burgers table.  I tried to make the page look more useful by appearing that it could be a page from an actual restaurant.  I also decided to add a burger description (and the user has the option to fill out the description).  Apart from the MVC layout, I also used static CSS and javascript to allow the user to hover over the burger name to reveal the description.

Live website can be found here:

[https://davesrose-food.herokuapp.com/](https://davesrose-food.herokuapp.com/)


## File structure used:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── logo.gif
│   │       └── food.gif
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

- - -