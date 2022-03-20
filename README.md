# webRTC-demo

```bash
# 安装依赖，主要是socket.io,用来传递消息
npm i

# 启动服务器，包括页面路由和消息转发
node index.js

# local.html是流采集和推送端
# remote.html是流接受和播放端
# 如果remote.html不能自动播放，则需要手动执行remoteVideo.srcObject = stream;

```
