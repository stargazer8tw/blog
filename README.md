---
title: Personal Blog
date: 2025-01-08
type: blog
tags: vitepress
---

# Personal Blog

Use [vitepress](https://vitepress.dev/)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```shell
pnpm install
pnpm add -w -D @types/node vitepress @lunariajs/core
cd packages/your-doc-project-name
pnpm lunaria init
```

## Initialize Vitepress

```shell
cd packages
pnpm vitepress init
```

### Compile and Hot-Reload for Development

```shell
pnpm docs:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```shell
pnpm docs:build
pnpm docs:preview
```

lunaria

```shell
pnpm lunaria:build
pnpm lunaria:preview
```

### Docker Build

```shell
application_name=blog
os_distribution=alpine
build_version=1.0.0
build_image_name=node:18.20.5-alpine
base_image_name=nginxinc/nginx-unprivileged:1.27.3-alpine
docker build --force-rm \
  --no-cache \
  --compress \
  --build-arg BUILD_IMAGE=$build_image_name \
  --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') \
  --build-arg BUILD_VERSION=$build_version \
  --build-arg BUILD_REVISION=${build_revision:-$(date -u +'%Y%m%d%H%M%S')} \
  --build-arg BASE_IMAGE=$base_image_name \
  --build-arg APP_NAME=$application_name \
  --file $(pwd)/docker/Dockerfile \
  --tag "$application_name:$build_version-$os_distribution" .
docker rmi $(docker images -f "dangling=true" -q)
docker run --rm -ti \
  --name $application_name \
  -p 80:8080 \
  "$application_name:$build_version-$os_distribution"
```

### Slidev

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

`-D` for build draft posts.

`hugo server -D -t minimal`

```shell
rm -rf public
git worktree add -B gh-pages public origin/gh-pages
git push origin gh-pages
```

###### Script

after clone

```shell
git checkout -b theme-minimal origin/theme-minimal
git submodule init
git submodule update
```
 execute `./publish_to_ghpages.sh minimal`

```shell
#!/bin/sh
# usage ./publish_to_ghpages.sh <theme name>

THEME="$1"

git checkout theme-$THEME
git rebase master

DIR=$(dirname "$0")

# not required?
# cd $DIR/..

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

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

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Lin, Michael</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
