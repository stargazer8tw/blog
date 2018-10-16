# Personal Blog

## Hugo

see <https://gohugo.io/>

### Setup

Initialize at existed directory.

```shell
$ hugo new site --force .
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
