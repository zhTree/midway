"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2492],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(t),c=i,f=u["".concat(o,".").concat(c)]||u[c]||s[c]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var m=2;m<r;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5849:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],p={},o="\u6587\u4ef6\u4e0a\u4f20",m={unversionedId:"extensions/upload",id:"extensions/upload",title:"\u6587\u4ef6\u4e0a\u4f20",description:"\u9002\u7528\u4e8e @midwayjs/faas \u3001@midwayjs/web \u3001@midwayjs/koa \u548c @midwayjs/express \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u4e0a\u4f20\u7ec4\u4ef6\uff0c\u652f\u6301 file (\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6)\u3001stream \uff08\u6d41\uff09\u591a\u79cd\u6a21\u5f0f\u3002",source:"@site/docs/extensions/upload.md",sourceDirName:"extensions",slug:"/extensions/upload",permalink:"/en/docs/extensions/upload",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/upload.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u6a21\u677f\u6e32\u67d3",permalink:"/en/docs/extensions/render"},next:{title:"\u8eab\u4efd\u9a8c\u8bc1",permalink:"/en/docs/extensions/passport"}},d=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"mode \u914d\u7f6e\u4e0a\u4f20\u6a21\u5f0f",id:"mode-\u914d\u7f6e\u4e0a\u4f20\u6a21\u5f0f",children:[{value:"1. file \u6a21\u5f0f\u3010\u9ed8\u8ba4\u503c\u3011",id:"1-file-\u6a21\u5f0f\u9ed8\u8ba4\u503c",children:[],level:4},{value:"2. stream \u6a21\u5f0f",id:"2-stream-\u6a21\u5f0f",children:[],level:4}],level:3},{value:"whitelist \u767d\u540d\u5355\u914d\u7f6e",id:"whitelist-\u767d\u540d\u5355\u914d\u7f6e",children:[],level:3},{value:"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406",id:"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406",children:[],level:3}],level:2},{value:"\u524d\u7aef\u5982\u4f55\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230\u670d\u52a1\u5668\uff1f",id:"\u524d\u7aef\u5982\u4f55\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230\u670d\u52a1\u5668",children:[{value:"1. html form \u7684\u5f62\u5f0f",id:"1-html-form-\u7684\u5f62\u5f0f",children:[],level:3},{value:"2. fetch FormData \u65b9\u5f0f",id:"2-fetch-formdata-\u65b9\u5f0f",children:[],level:3}],level:2}],s={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,r.kt)("p",null,"\u9002\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u4e0a\u4f20\u7ec4\u4ef6\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," (\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6)\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," \uff08\u6d41\uff09\u591a\u79cd\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"1\u3001\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/upload@3 --save\n")),(0,r.kt)("p",null,"\u6216\u8005\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/upload": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,r.kt)("p",null,"2\u3001\u5728 configuration \u6587\u4ef6\u4e2d\u5f15\u5165\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as upload from '@midwayjs/upload';\n\n@Configuration({\n  imports: [\n    // ...other components\n    upload\n  ],\n  // ...\n})\nexport class AutoConfiguration {}\n")),(0,r.kt)("p",null,"3\u3001\u5728\u4ee3\u7801\u4e2d\u83b7\u53d6\u4e0a\u4f20\u7684\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Inject, Post, Files, Fields } from '@midwayjs/decorator';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx;\n\n  @Post('/upload')\n  async upload(@Files() files, @Fields() fields) {\n    /*\n    files = [\n      {\n        filename: 'test.pdf',        // \u6587\u4ef6\u539f\u540d\n        data: '/var/tmp/xxx.pdf',    // mode \u4e3a file \u65f6\u4e3a\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6\u5730\u5740\n        fieldname: 'test1',          // \u8868\u5355 field \u540d\n        mimeType: 'application/pdf', // mime\n      },\n      {\n        filename: 'test.pdf',        // \u6587\u4ef6\u539f\u540d\n        data: ReadStream,    // mode \u4e3a stream \u65f6\u4e3a\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6\u5730\u5740\n        fieldname: 'test2',          // \u8868\u5355 field \u540d\n        mimeType: 'application/pdf', // mime\n      },\n      // ...file \u4e0b\u652f\u6301\u540c\u65f6\u4e0a\u4f20\u591a\u4e2a\u6587\u4ef6\n    ]\n\n    */\n    return {\n      files,\n      fields\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nimport { uploadWhiteList } from '@midwayjs/upload';\n\nexport default {\n  // ...\n  upload: {\n    // mode: UploadMode, \u9ed8\u8ba4\u4e3afile\uff0c\u5373\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e34\u65f6\u76ee\u5f55\uff0c\u53ef\u4ee5\u914d\u7f6e\u4e3a stream\n    mode: 'file',\n    // fileSize: string, \u6700\u5927\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a 10mb\n    fileSize: '10mb',\n    // whitelist: string[]\uff0c\u6587\u4ef6\u6269\u5c55\u540d\u767d\u540d\u5355\n    whitelist: uploadWhiteList.filter(ext => ext !== '.pdf'),\n    // tmpdir: string\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u4e34\u65f6\u5b58\u50a8\u8def\u5f84\n    tmpdir: join(tmpdir(), 'midway-upload-files'),\n    // cleanTimeout: number\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u5728\u4e34\u65f6\u76ee\u5f55\u4e2d\u591a\u4e45\u4e4b\u540e\u81ea\u52a8\u5220\u9664\uff0c\u9ed8\u8ba4\u4e3a 5 \u5206\u949f\n    cleanTimeout: 5 * 60 * 1000,\n  },\n}\n\n")),(0,r.kt)("h3",{id:"mode-\u914d\u7f6e\u4e0a\u4f20\u6a21\u5f0f"},"mode \u914d\u7f6e\u4e0a\u4f20\u6a21\u5f0f"),(0,r.kt)("h4",{id:"1-file-\u6a21\u5f0f\u9ed8\u8ba4\u503c"},"1. file \u6a21\u5f0f\u3010\u9ed8\u8ba4\u503c\u3011"),(0,r.kt)("p",null,"\u914d\u7f6e upload \u7684 mode \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," \u5b57\u7b26\u4e32\uff0c\u6216\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u5305\u5bfc\u51fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"UploadMode.File")," \u6765\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 file \u6a21\u5f0f\u65f6\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u4e2d\u83b7\u53d6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u4e3a\u4e0a\u4f20\u7684\u6587\u4ef6\u5728\u670d\u52a1\u5668\u7684\u4e34\u65f6\u6587\u4ef6\u5730\u5740\uff0c\u540e\u7eed\u53ef\u4ee5\u518d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"fs.createReadStream")," \u7b49\u65b9\u5f0f\u6765\u83b7\u53d6\u5230\u6b64\u6587\u4ef6\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 file \u6a21\u5f0f\u65f6\uff0c\u652f\u6301\u540c\u65f6\u4e0a\u4f20\u591a\u4e2a\u6587\u4ef6\uff0c\u591a\u4e2a\u6587\u4ef6\u4f1a\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u5b58\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u4e2d\u3002"),(0,r.kt)("h4",{id:"2-stream-\u6a21\u5f0f"},"2. stream \u6a21\u5f0f"),(0,r.kt)("p",null,"\u914d\u7f6e upload \u7684 mode \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," \u5b57\u7b26\u4e32\uff0c\u6216\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u5305\u5bfc\u51fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"UploadMode.Stream")," \u6765\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 stream \u6a21\u5f0f\u65f6\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u4e2d\u83b7\u53d6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadStream"),"\uff0c\u540e\u7eed\u53ef\u4ee5\u518d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe")," \u7b49\u65b9\u5f0f\u7ee7\u7eed\u5c06\u6570\u636e\u6d41\u8f6c\u81f3\u5176\u4ed6 ",(0,r.kt)("inlineCode",{parentName:"p"},"WriteStream")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"TransformStream"),"\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 stream \u6a21\u5f0f\u65f6\uff0c\u4ec5\u540c\u65f6\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\uff0c\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u6570\u7ec4\u4e2d\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u6570\u636e\u5bf9\u8c61\u3002"),(0,r.kt)("h3",{id:"whitelist-\u767d\u540d\u5355\u914d\u7f6e"},"whitelist \u767d\u540d\u5355\u914d\u7f6e"),(0,r.kt)("p",null,"\u914d\u7f6e\u5141\u8bb8\u4e0a\u4f20\u7684\u6587\u4ef6\u540e\u7f00\u540d\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u5219\u4e0d\u6821\u9a8c\u540e\u7f00\u540d\uff0c\u5982\u679c\u4e0a\u4f20\u7684\u6587\u4ef6\u540e\u7f00\u4e0d\u5339\u914d\uff0c\u4f1a\u54cd\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"400")," error\uff0c\u9ed8\u8ba4\u503c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"'.jpg',\n'.jpeg',\n'.png',\n'.gif',\n'.bmp',\n'.wbmp',\n'.webp',\n'.tif',\n'.psd',\n'.svg',\n'.js',\n'.jsx',\n'.json',\n'.css',\n'.less',\n'.html',\n'.htm',\n'.xml',\n'.pdf',\n'.zip',\n'.gz',\n'.tgz',\n'.gzip',\n'.mp3',\n'.mp4',\n'.avi',\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u5305\u4e2d\u5bfc\u51fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadWhiteList")," \u83b7\u53d6\u5230\u9ed8\u8ba4\u7684\u540e\u7f00\u540d\u767d\u540d\u5355\u3002"),(0,r.kt)("h3",{id:"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406"},"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," \u6a21\u5f0f\u6765\u83b7\u53d6\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u90a3\u4e48\u4e0a\u4f20\u7684\u6587\u4ef6\u4f1a\u5b58\u653e\u5728\u60a8\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"upload")," \u7ec4\u4ef6\u914d\u7f6e\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tmpdir")," \u9009\u9879\u6307\u5411\u7684\u6587\u4ef6\u5939\u5185\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanTimeout")," \u6765\u63a7\u5236\u81ea\u52a8\u7684\u4e34\u65f6\u6587\u4ef6\u6e05\u7406\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"5 * 60 * 1000"),"\uff0c\u5373\u4e0a\u4f20\u7684\u6587\u4ef6\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"5 \u5206\u949f")," \u540e\u81ea\u52a8\u6e05\u7406\uff0c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u5219\u89c6\u4e3a\u4e0d\u5f00\u542f\u81ea\u52a8\u6e05\u7406\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"await ctx.cleanupRequestFiles()")," \u6765\u4e3b\u52a8\u6e05\u7406\u5f53\u524d\u8bf7\u6c42\u4e0a\u4f20\u7684\u4e34\u65f6\u6587\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u524d\u7aef\u5982\u4f55\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230\u670d\u52a1\u5668"},"\u524d\u7aef\u5982\u4f55\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230\u670d\u52a1\u5668\uff1f"),(0,r.kt)("h3",{id:"1-html-form-\u7684\u5f62\u5f0f"},"1. html form \u7684\u5f62\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/api/upload" method="post" enctype="multipart/form-data">\n  Name: <input type="text" name="name" /><br />\n  File: <input type="file" name="testFile" /><br />\n  <input type="submit" value="Submit" />\n</form>\n')),(0,r.kt)("h3",{id:"2-fetch-formdata-\u65b9\u5f0f"},"2. fetch FormData \u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fileInput = document.querySelector('#your-file-input') ;\nconst formData = new FormData();\nformData.append('file', fileInput.files[0]);\n\nfetch('/api/upload', {\n  method: 'POST',\n  body: formData,\n});\n")))}u.isMDXComponent=!0}}]);