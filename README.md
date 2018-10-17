# Personal Blog

## Hugo

see <https://gohugo.io/>

### Setup

Initialize at existed directory.

```shell
$ hugo new site --force .
```

### Github Pages

see <https://gohugo.io/hosting-and-deployment/hosting-on-github/>

```shell
hugo server -t <YOURTHEME>
```

see <http://localhost:1313>

`rm -rf public` remove `public` directory.

```shell
git submodule add -b gh-pages git@github.com:stargazer8tw/stargazer8tw.github.io.git public
```

#### `gh-pages` Branch

see <https://gohugo.io/hosting-and-deployment/hosting-on-github/#preparations-for-gh-pages-branch>

```shell
echo "public" >> .gitignore
```

```shell
git checkout theme-minimal
git rebase master
git push --force origin theme-minimal
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages
git checkout theme-minimal
```

###### Build and Deployment

`hugo -t minimal`

```shell
rm -rf public
git worktree add -B gh-pages public origin/gh-pages
git push origin gh-pages
```

###### Script

`publish_to_ghpages.sh`

```shell
#!/bin/sh
git checkout theme-minimal
git rebase master
git submodule update --remote themes/minimal
git push --force origin theme-minimal

DIR=$(dirname "$0")

# not required?
# cd $DIR/..

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

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
hugo -t minimal

echo "Updating gh-pages branch"
cd public && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"
git push origin gh-pages
```

### Write blog

```shell
hugo new <SECTIONNAME>/<FILENAME>.<FORMAT>
```

### Testing

`hugo server -D`

`http://127.0.0.1:1313/`

## Hugo Themes

### Minimal

see <https://themes.gohugo.io/hugo-minimal>

git branch is `theme-minimal`

```shell
git submodule add https://github.com/calintat/minimal.git themes/minimal
git submodule init
git submodule update
```

maintaining

```shell
git submodule update --remote themes/minimal
```

---
