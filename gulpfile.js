const { src, dest, parallel, series, watch } = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  bs = require("browser-sync"),
  reload = bs.reload,
  sass = require("gulp-dart-sass"),
  fileinclude = require("gulp-file-include");

function html() {
  return src("src/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dest"))
    .pipe(reload({ stream: true }));
}

function deps() {
  src(["node_modules/slick-carousel/slick/ajax-loader.gif"]).pipe(
    dest("dest/css")
  );
  src(["node_modules/slick-carousel/slick/fonts/*"]).pipe(
    dest("dest/css/fonts")
  );
  src([
    "node_modules/slick-carousel/slick/slick.css",
    "node_modules/slick-carousel/slick/slick-theme.css",
  ]).pipe(dest("dest/css"));
  return src("node_modules/slick-carousel/slick/slick.min.js").pipe(
    dest("dest/js")
  );
}

function css() {
  return src("src/scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("dest/css"))
    .pipe(reload({ stream: true }));
}

function js() {
  return src(["src/js/*.js"])
    .pipe(dest("dest/js"))
    .pipe(reload({ stream: true }));
}

function serve() {
  bs.init({
    server: {
      baseDir: "dest",
      ghostMode: false,
    },
  });
  watch("src/scss/*.{css,scss}", css);
  watch("src/**/*.html", html);
  watch("src/js/*.js", js);
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.deps = deps;
exports.default = series(deps, parallel(html, css, js), serve);
