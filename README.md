# Getting started
0. Import the git repository to a directory on your computer.
1. Install npm on your computer
2. Install the gulp command line utility:
`npm install --global gulp-cli`
3. Install the packages that are contained in the repository (first make sure you are at the root of this directory)
`npm install`

# Compiling and hosting the page
If the above steps have been completed, this part should also work granted that you are still in the root directory where `gulpfile.js` is placed.
1. Start hosting the page locally while watching the files
`npx gulp watch`
You will be able to edit the files and see automatically reloaded updates in your browser at http://localhost:3000



# Adding/editing files

### Images
Add images to the `src/copy/` folder and they will be automatically copied to the `docs/` folder, where the index.html file will be hosted from. In other words, you will be able to access the images with `"./img_name.png"` as its path (`src` attribute in html) this way.

### JavaScript
Either add code to an existing file if it's relevant to its functionality. If it's for a new component or such, add a new .js-file in `src/js`, then add a new <script> tag in `src/copy/index.html`, right below the line where main.js is imported.

### SASS/CSS
This project uses SASS, a syntactically enhanced version of CSS. The file extension is .scss, and the source files are located in `src/sass/`. If you want to add additional styling, either edit an existing file if it's relevant to the styling you're implementing, otherwise create a new .scss file. If a new file is added, it must be imported in `main.scss` by adding a line at the start of the file that says `@import "newfile.scss";`. Global styling variables with arbitrary values can be defined in `src/sass/variables.scss`. They can then be accessed in any SASS file by adding `@import "variables.scss"` at the start of the file. Gulp will take care of compiling the SASS files into regular CSS in the `docs/` folder.

### HTML
Edit `src/copy/index.html` and the changes will automatically be copied to the compiled version of the page.