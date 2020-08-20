rmdir /s/q .\docs
md .\docs
copy /y .\dev\*.min.* .\docs\
md .\docs\css
copy /y .\dev\css\*.min.css .\docs\css\

ren .\docs\index.min.html index.html

git add .
git commit -am "Generating and pushing into server."
git push

pause