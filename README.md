# Gatsby Template: Zero100 TeamBlog

sw maestro 활동 중에 팀블로그를 만들기 위해 gatsby template를 [gatsby-starter-business](https://www.gatsbyjs.org/starters/v4iv/gatsby-starter-business/) 에서 변형하여 제작하였습니다. 이후 team 활동 blog 작성하시는 분들을 위해 template 형태로 공유하고자 합니다.


## how to run

1. repository clone
``` shell
$ gatsby new <folder_name> https://github.com/distrue/zero100blog
```

2. create `.env` file on root dir of repository

``` shell
AWS_ACCESS_KEY_ID=<aws IAM access key>
AWS_SECRET_ACCESS_KEY=<aws IAM access key>
S3_BUCKET_NAME=<aws S3 bucket name>
DEPLOY_URL=<aws deploy URL or custom URL>
```

3. npm scripts

``` shell
# local 서버 띄우기
$ npm run develop

# 배포 하기 전 build
$ yarn build

# s3 서버에 배포
$ yarn deploy
```

## Features

* JAM stack gatsby template
* Amazon S3 배포 setup, npm script

## Contributors

* SW Maestro 11기 정연길 ([visit my repo](https://github.com/distrue))
* SW Maestro 11기 김성윤 ([visit my repo](https://github.com/SeongYunKim))
* SW Maestro 11기 정의정 ([visit my repo](https://github.com/Uijeong97))

----

## Original - gatsby-starter-business

A [Gatsby v2](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered generic business website.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.
