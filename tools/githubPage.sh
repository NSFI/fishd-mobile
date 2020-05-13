#!/bin/bash

# 将本地文档内容push到github-page上

# get current version
VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g');

cd dist

rm -rf gitDesktop
rm -rf gitMobile

# 文档地址
git clone git@github.com:请填写项目地址/fishd-desktop.git gitDesktop
# demo地址
git clone git@github.com:请填写项目地址/fishd-page.git gitMobile

cd gitDesktop
rm -rf *
cp -r ../desktop/* ./
git add .
git commit -m "$VERSION publish!"
git push -u origin master

cd ..

cd gitMobile
rm -rf *
cp -r ../mobile/* ./
git add .
git commit -m "$VERSION publish!"
git push -u origin master
