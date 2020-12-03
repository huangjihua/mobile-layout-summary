# mobile-layout-summary

## 移动端布局方案

本项目为移动端 REM布局 与 Viewport (VW) 布局的实例运用

提供三个布局方案

**1. REM 布局** 

[http://localhost:4321/rem/index.html](http://localhost:5000/rem/index.html)

使用js动态设置html的font-size，css使用rem单位，文本大小可选择使用px

js设置viewport的scale以支持高清设备的1px

可设置页面最大最小宽度

**2. VW 布局**

[http://localhost:4321/vw/index.html](http://localhost:5000/vw)

css使用vw单位，文本大小可选择使用px

使用transform以支持高清设备的边框1px（包括圆角），使用 @mixin `./vw/scss/_border.scss`

可设置容器固定纵横比，不可设置页面最大最小宽度

**3. REM + VW 布局**

[http://localhost:4321/vw-rem/index.html](http://localhost:5000/vw-rem)

html的font-size使用vw单位，css使用rem单位，文本大小可选择使用px

使用transform以支持高清设备的边框1px（包括圆角），使用 @mixin `./vw-rem/scss/_border.scss`

可设置容器固定纵横比，可设置页面最大最小宽度



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
