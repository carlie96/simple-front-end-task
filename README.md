# Front End Task (Completed)

Refer to the [Front End Task](https://github.com/kenhua-l/simple-front-end-task).

## Note

- I remove the original `bootstrap.min.css` from `dest` but imported from `node_modules` into `main.css` as I am using its mixins.
- I add some responsive dimension for some md, lg display as it simply look too weird without them.

## Setup

If you are developing the site in the most basic method, you can just download the dest folder where you can find bootstrap and jQuery already attached for you perusal. Remember to also include the slick (js and css) required for one of the tasks when submitting your code.

To setup this source code (requires nodejs, npm installed globally on your machine)

1. on the terminal or command prompt at the repository folder, do a `npm install`
2. the last part is to `npm run gulp`
3. write you code in the src folder for html, css and js. gulp will render the final version on the dest folder
