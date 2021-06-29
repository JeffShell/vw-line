rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git branch -M main &&
git remote add origin git@github.com:JeffShell/vw-line-dist.git
git push -f -u origin main &&
cd - 