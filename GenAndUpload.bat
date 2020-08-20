rmdir /s/q .\docs
md .\docs
copy /y .\dev\*.min.* .\docs\
copy /y .\dev\css\*.min.css .\docs\css\


git add .
git commit -am "Generating and pushing into server."
git push

pause