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
