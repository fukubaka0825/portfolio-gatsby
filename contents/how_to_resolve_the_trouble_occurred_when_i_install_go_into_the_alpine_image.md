---
title: 'How to resolve the trouble that occurred when I install Go into the alpine image'

date: '2021-05-03'

tags: ['Go']
---

<iframe src="https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20210503/20210503172819.jpg" title="by Renée French CC BY 3.0" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="margin: 10px 0px; padding: 0px; border: 0px; outline: 0px; font-size: 15px; vertical-align: baseline; background: rgb(255, 255, 255); max-width: 500px; color: rgb(77, 77, 77); font-family: TitilliumText22LRegular, &quot;ヒラギノ角ゴ Pro W3&quot;, &quot;Hiragino Kaku Gothic Pro&quot;, メイリオ, Meiryo, &quot;ＭＳ Ｐゴシック&quot;, &quot;MS PGothic&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial; display: block; width: 500px; height: 155px;"></iframe>

## Introduction

Hi, everyone.

My name is [Takashi Narikawa](https://twitter.com/fukubaka0825).
I work as a software engineer at eureka, inc.

This post is my first post on my blog.
This time, I would like to leave a memorandum about the trouble that occurred when I install Go into the alpine image.


## TL;DR

If you want to install Go on an alpine-based image, use apk instead of wget or curl command

## What I wanted to do

I want to auto-deploy lambda with apex command on codebuild (CI) with hashicorp / terraform image.
Because I wrote lambda script in Go language, it is necessary to install Go and the hashicorp / terraform image.

## What Trouble

hashicorp / terraform image is based on Alpine. I tried to install Go with buildspec.yml of AWS Codebuild as follows.


```shell script
export GO_VERSION=1.12.4
wget https://storage.googleapis.com/golang/go{GO_VERSION}.linux-amd64.tar.gz
tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go version
```


Then, when go version command was executed, the following error appeared.

```shell script
sh: go: not found
```


## How to resolve the trouble

docker-How to install Go in alpine Linux-Stack Overflow had a similar case, So it was helpful.

>With Alpine, you have libmusl instead of Glibc. Alpine’s libmusl is not a 1 for 1 replacement. Code linked against Glibc will show a not found error which is actually from the dynamic linker. You can see what libraries are linked to the binary with ldd:

Apparently, the behavior of libmusl (Linux standard C library) included instead of Glibc seems to be different.


```shell script
# ldd /usr/local/go/bin/go
        /lib64/ld-linux-x86-64.so.2 (0x7f63ceed1000)
        libpthread.so.0 => /lib64/ld-linux-x86-64.so.2 (0x7f63ceed1000)
        libc.so.6 => /lib64/ld-linux-x86-64.so.2 (0x7f63ceed1000)
```


I see, / usr / local / go / bin / go has a dynamic link to / lib64 / ld-linux-x86–64.so.2 and returned not found error.

This guy’s suggestion is to run Go binaries (do not download go itself) or Glibc (if you use CentOS or Debian), but I didn’t use either solution.

I solved it by downloading go with apk as follows.


```shell script
apk add --update --no-cache vim git make musl-dev go curl
# Configure Go
export GOPATH=/root/go
export PATH=${GOPATH}/bin:/usr/local/go/bin:$PATH
export GOBIN=$GOROOT/bin
mkdir -p ${GOPATH}/src ${GOPATH}/bin
export GO111MODULE=on
go version
```


## References
[docker — How to install Go in alpine Linux — Stack Overflow](https://stackoverflow.com/questions/52056387/how-to-install-go-in-alpine-linux)
