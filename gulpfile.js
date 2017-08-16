var gulp = require('gulp');  //mówimy mu żeby korzystał z paczki gulp
var sass = require('gulp-sass');  //używaj pczki gulp-sass
var sourcemaps = require('gulp-sourcemaps'); //paczka do gulp sourcemaps


gulp.task('sass', function(){  //uruchamiamy zadanie o nazwie sass
    return gulp.src('styles/main.scss')  //weź pliki scss
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'   //kod w css zminimalizuje się, zostanie skompresowany a w scss będzie normalnie wyglądał
            //możemy też dać expanded - wtedy wręcz przeciwnie, css się zrobi przyjemny dla oka
        }))   //krok dalej - przetwórz je na sass
        //.pipe autoprefixer - dodaje prefixy przeglądarkowe
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css')); //wrzuć to do folderu css
});

//i następnie w consoli odpalamy  gulp sass - czyli nasze zadanie


//następnie tworzymy nowe zadanie 'watch' do śledzenia zmian w plikach scss

gulp.task('watch', function(){
    gulp.watch('styles/**/*.scss', ['sass'])  //jeśli w plikach scss zajdą jakieś zmiany, uruchomione zostanie zadanie sass
});
//w cosoli odpalamy raz gulp watch i bedzie działał w tle i nadpisywał wszystkie zmiany w pliku main.css
// aż do zabicia "cmd c"


gulp.task('default', ['sass', 'watch']);  //za pomocą tego tasku określamy, które zadania muszą wykonywać się krok po kroku
//czyli w consoli wpisujemy tylko gulp i zadania wykonują się
