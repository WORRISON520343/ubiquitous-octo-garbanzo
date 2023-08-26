---
lang: zh-CN
title: 介绍
description: 页面的描述
---

# 介绍

# DDF

DDFDF

DFDF


```
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt    # 跨站攻击防护，接口白名单处理
from rest_framework.parsers import JSONParser       # 序列化
from sqtp.models import Request     # 模型
from sqtp.serializers import RequestSerializer      # 自定义的序列化类

def request_list(request):
    if request.method == 'GET':
        # 构建序列化器返回完整结果集--针对当前数据模型的所有数据
        serializer = RequestSerializer(Request.objects.all(),many=True)
        # 返回json格式响应
        return JsonResponse(data=serializer.data,safe=False)    #safe=False是为了支持字典类型以外的python对象转json，例如列表[]
```
		
# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF

# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF# DDF

DDFDF

DFDF