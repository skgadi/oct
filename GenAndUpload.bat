rmdir /s/q .\docs
md .\docs
copy /y .\docs-dev\*.min.* .\docs
copy /y .\docs-dev\css\*.min.css .\docs\css


git add .
git commit -am "Generating and pushing into server."
git push

pause