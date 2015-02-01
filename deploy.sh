#!/usr/bin/env bash
#
## BASADO EN EL SCRIPT DE: https://github.com/nathanhammond/ember-flows-generator
#

git checkout master
git pull
rm -rf dist
ember build --environment production

git checkout gh-pages
git pull origin gh-pages
ls -1 | grep -v -E '^dist$' | xargs rm -rf
mv dist/* ./
mv dist/.* ./
rmdir dist

git commit -am "Update."
git push
git checkout master
git pull
