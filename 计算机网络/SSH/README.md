## SSH 简介

SSH，安全外壳协议，是一种在应用层进行数据加密的安全协议

## SSH 工作流程

1. 用户 ---发送远程登录请求---> 远程主机
2. 远程主机 ---公钥---> 用户
3. 用户 ---使用公钥加密本地密钥---> 远程主机
4. 远程主机 ---私钥解密加密后的密码---> 用户
   密码正确，登录成功

## SSH 跟 https 的异同

1. SSH 和 https 都是基于非对称加密
2. SSH 更容易被中间人截取到远程主机的公钥，并把伪造的公钥匙发送给用户
3. SSH 的公钥是自己签发的，而 https 的公钥是有 CA 签发的，相比之下，SSH 不安全

## 设置 SSH 免密码登录 gitlab

1. 本地生成公钥和私钥

```
SSH-keygen -t rsa -C "xxx@forchange.tech"(公司邮箱)
```

2. 然后系统要求输入密码，直接按回车表示不设密码；重复密码时也是直接回车，之后提示你 shh key 已经生成成功
3. 成功登录 gitlab 之后，手动配置 SSH key，需要把本地 .SSH/id_rsa.pub 上的公钥复制到 gitlab 上的 SSH key
4. 验证是否远程登录成功

```
SSH -T git@git.forchange.cn
```

显示以下信息表示远程登录成功
![Image text](../SSH登录成功.png)

## issues

1. 怎么查看本地的公钥和私钥？
   公钥和私钥存放在～/.SSH 目录下，我这里的～指的是/Users/edz，具体可以使用 pwd 指令查看自己的～目录
   ![Image text](./SSH目录.png)
   id_rsa：保存私钥
   id_rsa.pub：保存公钥
   authorized_keys：保存已授权的客户端公钥
   known_hosts：保存已认证的远程主机 ID
   注意：一台主机可能既是 Client，也是 Server。所以会同时拥有 authorized_keys 和 known_hosts
2. 远程的 gitlab 如何知道远程登录的是哪个账户？
   公钥匹配
