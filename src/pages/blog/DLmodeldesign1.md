---
templateKey: article-page
title: DL Model Design_#1
slug: DL Model Design_#1
date: 2020-05-28T19:04:42.071Z
cover: /img/golf.jpg
meta_title: DL Model Design_#1
meta_description: >-
  DL Model Design_#1
tags:
  - 기획
---

<br>

## 3D Pose Estimation 논문 서치 - Single-person 3D Pose

3D Pose Research에는 **두 가지 메인 어프로치**가 있다. 
* first to estimate a 2D pose then reconstruct a 3D pose
* to regress a 3D pose directly.

### A simple yet effective baseline for 3d human pose estimation

2D pose를 estimate한 후 3D pose로 reconstruct하는 방법.

* 2017년 ICCV 개제
* fully-connected network with residual connections
* Human3.6: Mean per Joint Position Error (MPJPE) is 64 mm
* light model

![model](./images/3d_pose_baseline.png)

**프로젝트 인사이트**

* 본 논문에서는 2d joint location 정보만 가지고 3d로 매핑해준다.
    - CNN 없고 Linear한 학습
    - 원본 이미지를 추가하면 더 좋은 성능을 내지 않을까?
* lightweight network이기 때문에, 2d pose estimation 모델만 realtime이라면 full model이 realtime이지 않을까?
    - 단 full model의 performance를 높이려면, 2d 모델의 performance는 좋아야함.
    - 2d 모델을 pre-trained를 사용한다면, 데이터셋이 같고 클래스도 같아야함.
        - 안그러면 새로 트레인시켜야함..
        - 매핑해주는 다른 방법 찾는 중
