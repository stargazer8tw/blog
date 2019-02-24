#!/bin/sh
# usage ./publish_to_ghpages.sh <theme name>

THEME="$1"

git checkout theme-$THEME
git rebase master

DIR=$(dirname "$0")

# not required?
# cd $DIR/..

# 2019-02-24 script execution error in if statement
# it was working in ubuntu 14.0, but not in ubuntu 18.04
#if [[ $(git status -s) ]]
#then
#    echo "The working directory is dirty. Please commit any pending changes."
#    exit 1;
#fi

# fix working directory before push changes into origin
git submodule update --remote themes/$THEME
git push --force origin theme-$THEME

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public origin/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
hugo -t $THEME

echo "Updating gh-pages branch"
cd public && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"
git push origin gh-pages
