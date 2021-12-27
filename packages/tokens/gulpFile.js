const gulp = require('gulp');
const gulpTheo = require('gulp-theo');

gulp.task("tokens:commonjs", () => 
    gulp
        .src ([
            "tokens/*.yml",
        ])
        .pipe(
            gulpTheo({
                transform: {
                    type: "web",
                },
                format: {
                    type: "common.js",
                }
            })
        )
        .pipe(gulp.dest("lib"))
)

gulp.task("tokens:scss", () => 
    gulp
        .src ([
            "tokens/*.yml",
        ])
        .pipe(
            gulpTheo({
                transform: {
                    type: "web",
                },
                format: {
                    type: "scss",
                }
            })
        )
        .pipe(gulp.dest("lib"))
)