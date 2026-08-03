const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browserAll-CpelCX2M.js","assets/Geometry-tiW5sWw_.js","assets/Filter-Cm3r42zk.js","assets/getPo2TextureFromSource-DcB8MDNd.js","assets/canvasUtils-Cq_Rak3O.js","assets/Cache-DgZO4UNw.js","assets/init-tzbgo1hz.js","assets/CanvasPool-EFgdggRo.js","assets/webworkerAll-tymBrvU2.js","assets/WebGPURenderer-B0oYkdBj.js","assets/WebGPURenderer-DHSbvcLC.js","assets/RenderTargetSystem-CRqIoeDn.js","assets/GCManagedHash-CFT8eomD.js","assets/getTextureBatchBindGroup-6IRcvcuh.js","assets/BufferResource-9NFGIzfH.js","assets/WebGLRenderer-Dz4ipaBb.js","assets/WebGLRenderer-CFB3BG2t.js","assets/CanvasRenderer-CPtSKtGu.js","assets/CanvasRenderer-PI4H-tXA.js","assets/GraphicsContext-DCFDugJf.js","assets/BitmapFont-Doaq31vE.js","assets/BitmapFont-BGPmlX9h.js"])))=>i.map(i=>d[i]);
import{B as e,D as t,M as n,O as r,T as i,c as a,k as o,p as s,u as c,v as l,w as u,x as d,y as f,z as p}from"./Geometry-tiW5sWw_.js";import{b as m,c as h,i as g,o as _,r as v,s as ee,t as y,u as te,y as b}from"./Filter-Cm3r42zk.js";import{a as x,c as ne,i as S,n as re,o as C,r as w,s as T,t as ie}from"./getPo2TextureFromSource-DcB8MDNd.js";import{r as ae}from"./canvasUtils-Cq_Rak3O.js";import{n as E,t as D}from"./Cache-DgZO4UNw.js";import{f as oe,p as se,u as ce}from"./RenderTargetSystem-CRqIoeDn.js";import{t as le}from"./GraphicsContext-DCFDugJf.js";import{t as ue}from"./GCManagedHash-CFT8eomD.js";import{t as de}from"./CanvasPool-EFgdggRo.js";import{a as O,i as fe,n as pe,r as k}from"./BitmapFont-BGPmlX9h.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var me=`modulepreload`,he=function(e){return`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/`+e},ge={},A=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=he(t,n),t=s(t),t in ge)return;ge[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:me,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},_e={extension:{type:p.Environment,name:`browser`,priority:-1},test:()=>!0,load:async()=>{await A(()=>import(`./browserAll-CpelCX2M.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]))}},ve={extension:{type:p.Environment,name:`webworker`,priority:0},test:()=>typeof self<`u`&&self.WorkerGlobalScope!==void 0,load:async()=>{await A(()=>import(`./webworkerAll-tymBrvU2.js`),__vite__mapDeps([8,3,1,2,4,5,6,7]))}},ye;function be(e){return ye===void 0&&(ye=(()=>{let t={stencil:!0,failIfMajorPerformanceCaveat:e??se.defaultOptions.failIfMajorPerformanceCaveat};try{if(!s.get().getWebGLRenderingContext())return!1;let e=s.get().createCanvas().getContext(`webgl`,t),n=!!e?.getContextAttributes()?.stencil;if(e){let t=e.getExtension(`WEBGL_lose_context`);t&&t.loseContext()}return e=null,n}catch{return!1}})()),ye}var xe;async function Se(e={}){return xe===void 0&&(xe=await(async()=>{let t=s.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),xe}var Ce=[`webgl`,`webgpu`,`canvas`];async function we(e){let t=[];e.preference?Array.isArray(e.preference)?t=e.preference.slice():(t.push(e.preference),Ce.forEach(n=>{n!==e.preference&&t.push(n)})):t=Ce.slice();let n,r={};for(let i=0;i<t.length;i++){let a=t[i];if(a===`webgpu`&&await Se()){let{WebGPURenderer:t}=await A(async()=>{let{WebGPURenderer:e}=await import(`./WebGPURenderer-B0oYkdBj.js`);return{WebGPURenderer:e}},__vite__mapDeps([9,10,1,2,11,12,13,7,14]));n=t,r={...e,...e.webgpu};break}if(a===`webgl`&&be(e.failIfMajorPerformanceCaveat??se.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:t}=await A(async()=>{let{WebGLRenderer:e}=await import(`./WebGLRenderer-Dz4ipaBb.js`);return{WebGLRenderer:e}},__vite__mapDeps([15,16,1,2,11,12,14]));n=t,r={...e,...e.webgl};break}if(a===`canvas`){let{CanvasRenderer:t}=await A(async()=>{let{CanvasRenderer:e}=await import(`./CanvasRenderer-CPtSKtGu.js`);return{CanvasRenderer:e}},__vite__mapDeps([17,18,1,2,4,11,12,19,13]));n=t,r={...e,...e.canvasOptions};break}}if(delete r.webgpu,delete r.webgl,delete r.canvasOptions,!n)throw Error(`No available renderer for the current environment`);let i=new n;return await i.init(r),i}var Te=class{static init(e){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener(`resize`,this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener(`resize`,this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&=(cancelAnimationFrame(this._resizeId),null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,t;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,t=globalThis.innerHeight;else{let{clientWidth:n,clientHeight:r}=this._resizeTo;e=n,t=r}this.renderer.resize(e,t),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener(`resize`,this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};Te.extension=p.Application;var Ee=class{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,g.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?v.shared:new v,e.autoStart&&this.start()}static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null,e.destroy()}}};Ee.extension=p.Application,e.add(Te),e.add(Ee);var De=class e{constructor(...e){this.stage=new h,e[0]!==void 0&&r(o,`Application constructor options are deprecated, please use Application.init() instead.`)}async init(t){t={...t},this.stage||=new h,this.renderer=await we(t),e._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return r(o,`Application.view is deprecated, please use Application.canvas instead.`),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(t=!1,n=!1){let r=e._plugins.slice(0);r.reverse(),r.forEach(e=>{e.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};De._plugins=[];var Oe=De;e.handleByList(p.Application,Oe._plugins),e.add(oe);var ke={test(e){return typeof e==`string`&&e.startsWith(`info face=`)},parse(e){let t=e.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let e in t){let r=t[e].match(/^[a-z]+/gm)[0],i=t[e].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),a={};for(let e in i){let t=i[e].split(`=`),n=t[0],r=t[1].replace(/"/gm,``),o=parseFloat(r);a[n]=isNaN(o)?r:o}n[r].push(a)}let r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:``,distanceField:null,baseLineOffset:0},[i]=n.info,[a]=n.common,[o]=n.distanceField??[];o&&(r.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),r.fontSize=parseInt(i.size,10),r.fontFamily=i.face,r.lineHeight=parseInt(a.lineHeight,10);let s=n.page;for(let e=0;e<s.length;e++)r.pages.push({id:parseInt(s[e].id,10)||0,file:s[e].file});let c={};r.baseLineOffset=r.lineHeight-parseInt(a.base,10);let l=n.char;for(let e=0;e<l.length;e++){let t=l[e],n=parseInt(t.id,10),i=t.letter??t.char??String.fromCharCode(n);i===`space`&&(i=` `),c[n]=i,r.chars[i]={id:n,page:parseInt(t.page,10)||0,x:parseInt(t.x,10),y:parseInt(t.y,10),width:parseInt(t.width,10),height:parseInt(t.height,10),xOffset:parseInt(t.xoffset,10),yOffset:parseInt(t.yoffset,10),xAdvance:parseInt(t.xadvance,10),kerning:{}}}let u=n.kerning||[];for(let e=0;e<u.length;e++){let t=parseInt(u[e].first,10),n=parseInt(u[e].second,10),i=parseInt(u[e].amount,10);r.chars[c[n]]&&(r.chars[c[n]].kerning[c[t]]=i)}return r}},Ae={test(e){let t=e;return typeof t!=`string`&&`getElementsByTagName`in t&&t.getElementsByTagName(`page`).length&&t.getElementsByTagName(`info`)[0].getAttribute(`face`)!==null},parse(e){let t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:``,distanceField:null,baseLineOffset:0},n=e.getElementsByTagName(`info`)[0],r=e.getElementsByTagName(`common`)[0],i=e.getElementsByTagName(`distanceField`)[0];i&&(t.distanceField={type:i.getAttribute(`fieldType`),range:parseInt(i.getAttribute(`distanceRange`),10)});let a=e.getElementsByTagName(`page`),o=e.getElementsByTagName(`char`),s=e.getElementsByTagName(`kerning`);t.fontSize=parseInt(n.getAttribute(`size`),10),t.fontFamily=n.getAttribute(`face`),t.lineHeight=parseInt(r.getAttribute(`lineHeight`),10);for(let e=0;e<a.length;e++)t.pages.push({id:parseInt(a[e].getAttribute(`id`),10)||0,file:a[e].getAttribute(`file`)});let c={};t.baseLineOffset=t.lineHeight-parseInt(r.getAttribute(`base`),10);for(let e=0;e<o.length;e++){let n=o[e],r=parseInt(n.getAttribute(`id`),10),i=n.getAttribute(`letter`)??n.getAttribute(`char`)??String.fromCharCode(r);i===`space`&&(i=` `),c[r]=i,t.chars[i]={id:r,page:parseInt(n.getAttribute(`page`),10)||0,x:parseInt(n.getAttribute(`x`),10),y:parseInt(n.getAttribute(`y`),10),width:parseInt(n.getAttribute(`width`),10),height:parseInt(n.getAttribute(`height`),10),xOffset:parseInt(n.getAttribute(`xoffset`),10),yOffset:parseInt(n.getAttribute(`yoffset`),10),xAdvance:parseInt(n.getAttribute(`xadvance`),10),kerning:{}}}for(let e=0;e<s.length;e++){let n=parseInt(s[e].getAttribute(`first`),10),r=parseInt(s[e].getAttribute(`second`),10),i=parseInt(s[e].getAttribute(`amount`),10);t.chars[c[r]]&&(t.chars[c[r]].kerning[c[n]]=i)}return t}},je={test(e){return typeof e==`string`&&e.match(/<font(\s|>)/)?Ae.test(s.get().parseXML(e)):!1},parse(e){return Ae.parse(s.get().parseXML(e))}},Me=[`.xml`,`.fnt`],Ne={extension:{type:p.CacheParser,name:`cacheBitmapFont`},test:e=>!!e?.pages&&!!e?.chars&&typeof e?.fontFamily==`string`&&e.fontFamily!==``,getCacheableAssets(e,t){let n={};return e.forEach(e=>{n[e]=t,n[`${e}-bitmap`]=t}),n[`${t.fontFamily}-bitmap`]=t,n}},Pe={extension:{type:p.LoadParser,priority:C.Normal},name:`loadBitmapFont`,id:`bitmap-font`,test(e){return Me.includes(x.extname(e).toLowerCase())},async testParse(e){return ke.test(e)||je.test(e)},async parse(e,t,n){let r=ke.test(e)?ke.parse(e):je.parse(e),{src:i}=t,{pages:a}=r,o=[],s=r.distanceField?{scaleMode:`linear`,alphaMode:`premultiply-alpha-on-upload`,autoGenerateMipmaps:!1,resolution:1}:{};for(let e=0;e<a.length;++e){let t=a[e].file,n=x.join(x.dirname(i),t);n=re(n,i),o.push({src:n,data:s})}let[c,{BitmapFont:l}]=await Promise.all([n.load(o),A(()=>import(`./BitmapFont-Doaq31vE.js`),__vite__mapDeps([20,21,1,4,5,19,13,12,7]))]);return new l({data:r,textures:o.map(e=>c[e.src])},i)},async load(e,t){return await(await s.get().fetch(e)).text()},async unload(e,t,n){await Promise.all(e.pages.map(e=>n.unload(e.texture.source._sourceOrigin))),e.destroy()}},Fe=class{constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e){e.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log(`[BackgroundLoader] assets: `,this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<t;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}},Ie={extension:{type:p.CacheParser,name:`cacheTextureArray`},test:e=>Array.isArray(e)&&e.every(e=>e instanceof d),getCacheableAssets:(e,t)=>{let n={};return e.forEach(e=>{t.forEach((t,r)=>{n[e+(r===0?``:r+1)]=t})}),n}};async function Le(e){if(`Image`in globalThis)return new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e});if(`createImageBitmap`in globalThis&&`fetch`in globalThis){try{let t=await(await fetch(e)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}var Re={extension:{type:p.DetectionParser,priority:1},test:async()=>Le(`data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=`),add:async e=>[...e,`avif`],remove:async e=>e.filter(e=>e!==`avif`)},ze=[`png`,`jpg`,`jpeg`],Be={extension:{type:p.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async e=>[...e,...ze],remove:async e=>e.filter(e=>!ze.includes(e))},Ve=`WorkerGlobalScope`in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function j(e){return!Ve&&document.createElement(`video`).canPlayType(e)!==``}var He={extension:{type:p.DetectionParser,priority:0},test:async()=>j(`video/mp4`),add:async e=>[...e,`mp4`,`m4v`],remove:async e=>e.filter(e=>e!==`mp4`&&e!==`m4v`)},Ue={extension:{type:p.DetectionParser,priority:0},test:async()=>j(`video/ogg`),add:async e=>[...e,`ogv`],remove:async e=>e.filter(e=>e!==`ogv`)},We={extension:{type:p.DetectionParser,priority:0},test:async()=>j(`video/webm`),add:async e=>[...e,`webm`],remove:async e=>e.filter(e=>e!==`webm`)},Ge={extension:{type:p.DetectionParser,priority:0},test:async()=>Le(`data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=`),add:async e=>[...e,`webp`],remove:async e=>e.filter(e=>e!==`webp`)},Ke=class e{constructor(){this.loadOptions={...e.defaultOptions},this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,n)=>(this._parsersValidated=!1,e[t]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,t){let n={promise:null,parser:null};return n.promise=(async()=>{let r=null,i=null;if((t.parser||t.loadParser)&&(i=this._parserHash[t.parser||t.loadParser],t.loadParser&&l(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),i||l(`[Assets] specified load parser "${t.parser||t.loadParser}" not found while loading ${e}`)),!i){for(let n=0;n<this.parsers.length;n++){let r=this.parsers[n];if(r.load&&r.test?.(e,t,this)){i=r;break}}if(!i)return l(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,t,this),n.parser=i;for(let e=0;e<this.parsers.length;e++){let i=this.parsers[e];i.parse&&i.parse&&await i.testParse?.(r,t,this)&&(r=await i.parse(r,t,this)||r,n.parser=i)}return r})(),n}async load(t,n){this._parsersValidated||this._validateParsers();let{onProgress:r,onError:i,strategy:a,retryCount:o,retryDelay:s}=typeof n==`function`?{...e.defaultOptions,...this.loadOptions,onProgress:n}:{...e.defaultOptions,...this.loadOptions,...n||{}},c=0,l={},u=S(t),d=E(t,e=>({alias:[e],src:e,data:{}})),f=d.reduce((e,t)=>e+(t.progressSize||1),0),p=d.map(async e=>{let t=x.toAbsolute(e.src);l[e.src]||(await this._loadAssetWithRetry(t,e,{onProgress:r,onError:i,strategy:a,retryCount:o,retryDelay:s},l),c+=e.progressSize||1,r&&r(c/f))});return await Promise.all(p),u?l[d[0].src]:l}async unload(e){let t=E(e,e=>({alias:[e],src:e})).map(async e=>{let t=x.toAbsolute(e.src),n=this.promiseCache[t];if(n){let r=await n.promise;delete this.promiseCache[t],await n.parser?.unload?.(r,e,this)}});await Promise.all(t)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,t)=>(!t.name&&!t.id?l(`[Assets] parser should have an id`):(e[t.name]||e[t.id])&&l(`[Assets] parser id conflict "${t.id}"`),e[t.name]=t,t.id&&(e[t.id]=t),e),{})}async _loadAssetWithRetry(e,t,n,r){let i=0,{onError:a,strategy:o,retryCount:s,retryDelay:c}=n,l=e=>new Promise(t=>setTimeout(t,e));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,t)),r[t.src]=await this.promiseCache[e].promise;return}catch(n){if(delete this.promiseCache[e],delete r[t.src],i++,o===`retry`&&!(o!==`retry`||i>s)){a&&a(n,t),await l(c);continue}if(o===`skip`){a&&a(n,t);return}a&&a(n,t);let u=Error(`[Loader.load] Failed to load ${e}.
${n}`);throw n instanceof Error&&n.stack&&(u.stack=n.stack),u}}};Ke.defaultOptions={onProgress:void 0,onError:void 0,strategy:`throw`,retryCount:3,retryDelay:250};var qe=Ke;function M(e,t){if(Array.isArray(t)){for(let n of t)if(e.startsWith(`data:${n}`))return!0;return!1}return e.startsWith(`data:${t}`)}function N(e,t){let n=e.split(`?`)[0],r=x.extname(n).toLowerCase();return Array.isArray(t)?t.includes(r):r===t}var Je=`.json`,Ye=`application/json`,Xe={extension:{type:p.LoadParser,priority:C.Low},name:`loadJson`,id:`json`,test(e){return M(e,Ye)||N(e,Je)},async load(e){return await(await s.get().fetch(e)).json()}},Ze=`.txt`,Qe=`text/plain`,$e={name:`loadTxt`,id:`text`,extension:{type:p.LoadParser,priority:C.Low,name:`loadTxt`},test(e){return M(e,Qe)||N(e,Ze)},async load(e){return await(await s.get().fetch(e)).text()}},et=[`normal`,`bold`,`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`],tt=[`.ttf`,`.otf`,`.woff`,`.woff2`],nt=[`font/ttf`,`font/otf`,`font/woff`,`font/woff2`],rt=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function it(e){let t=x.extname(e),n=x.basename(e,t).replace(/(-|_)/g,` `).toLowerCase().split(` `).map(e=>e.charAt(0).toUpperCase()+e.slice(1)),r=n.length>0;for(let e of n)if(!e.match(rt)){r=!1;break}let i=n.join(` `);return r||(i=`"${i.replace(/[\\"]/g,`\\$&`)}"`),i}var at=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ot(e){return at.test(e)?e:encodeURI(e)}var st={extension:{type:p.LoadParser,priority:C.Low},name:`loadWebFont`,id:`web-font`,test(e){return M(e,nt)||N(e,tt)},async load(e,t){let n=s.get().getFontFaceSet();if(n){let r=[],i=t.data?.family??it(e),a=t.data?.weights?.filter(e=>et.includes(e))??[`normal`],o=t.data??{};for(let t=0;t<a.length;t++){let s=a[t],c=new FontFace(i,`url('${ot(e)}')`,{...o,weight:s});await c.load(),n.add(c),r.push(c)}return D.has(`${i}-and-url`)?D.get(`${i}-and-url`).entries.push({url:e,faces:r}):D.set(`${i}-and-url`,{entries:[{url:e,faces:r}]}),r.length===1?r[0]:r}return l(`[loadWebFont] FontFace API is not supported. Skipping loading font`),null},unload(e){let t=Array.isArray(e)?e:[e],n=t[0].family,r=D.get(`${n}-and-url`),i=r.entries.find(e=>e.faces.some(e=>t.indexOf(e)!==-1));i.faces=i.faces.filter(e=>t.indexOf(e)===-1),i.faces.length===0&&(r.entries=r.entries.filter(e=>e!==i)),t.forEach(e=>{s.get().getFontFaceSet().delete(e)}),r.entries.length===0&&D.remove(`${n}-and-url`)}};function ct(e,t=1){let n=w.RETINA_PREFIX?.exec(e);return n?parseFloat(n[1]):t}function lt(e,t,n){e.label=n,e._sourceOrigin=n;let r=new d({source:e,label:n}),i=()=>{delete t.promiseCache[n],D.has(n)&&D.remove(n)};return r.source.once(`destroy`,()=>{t.promiseCache[n]&&(l(`[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource.`),i())}),r.once(`destroy`,()=>{e.destroyed||(l(`[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture.`),i())}),r}var ut=`.svg`,dt=`image/svg+xml`,ft={extension:{type:p.LoadParser,priority:C.Low,name:`loadSVG`},name:`loadSVG`,id:`svg`,config:{crossOrigin:`anonymous`,parseAsGraphicsContext:!1},test(e){return M(e,dt)||N(e,ut)},async load(e,t,n){return t.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?mt(e):pt(e,t,n,this.config.crossOrigin)},unload(e){e.destroy(!0)}};async function pt(e,t,n,r){let i=await s.get().fetch(e),a=s.get().createImage();a.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await i.text())}`,a.crossOrigin=r,await a.decode();let o=t.data?.width??a.width,c=t.data?.height??a.height,l=t.data?.resolution||ct(e),u=Math.ceil(o*l),d=Math.ceil(c*l),f=s.get().createCanvas(u,d),p=f.getContext(`2d`);p.imageSmoothingEnabled=!0,p.imageSmoothingQuality=`high`,p.drawImage(a,0,0,o*l,c*l);let{parseAsGraphicsContext:m,...h}=t.data??{};return lt(new ae({resource:f,alphaMode:`premultiply-alpha-on-upload`,resolution:l,...h}),n,e)}async function mt(e){let t=await(await s.get().fetch(e)).text(),n=new le;return n.svg(t),n}var ht=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function") return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`,P=null,gt=class{constructor(){P||=URL.createObjectURL(new Blob([ht],{type:`application/javascript`})),this.worker=new Worker(P)}};gt.revokeObjectURL=function(){P&&=(URL.revokeObjectURL(P),null)};var _t=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`,F=null,vt=class{constructor(){F||=URL.createObjectURL(new Blob([_t],{type:`application/javascript`})),this.worker=new Worker(F)}};vt.revokeObjectURL=function(){F&&=(URL.revokeObjectURL(F),null)};var yt=0,bt,xt=new class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported===void 0&&(this._isImageBitmapSupported=new Promise(e=>{let{worker:t}=new gt;t.addEventListener(`message`,n=>{t.terminate(),gt.revokeObjectURL(),e(n.data)})})),this._isImageBitmapSupported}loadImageBitmap(e,t){return this._run(`loadImageBitmap`,[e,t?.data?.alphaMode])}async _initWorkers(){this._initialized||=!0}_getWorker(){bt===void 0&&(bt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<bt&&(this._createdWorkers++,e=new vt().worker,e.addEventListener(`message`,e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){this._resolveHash[e.uuid]&&(e.error===void 0?this._resolveHash[e.uuid].resolve(e.data):this._resolveHash[e.uuid].reject(e.error),delete this._resolveHash[e.uuid])}async _run(e,t){await this._initWorkers();let n=new Promise((n,r)=>{this._queue.push({id:e,arguments:t,resolve:n,reject:r})});return this._next(),n}_next(){if(!this._queue.length)return;let e=this._getWorker();if(!e)return;let t=this._queue.pop(),n=t.id;this._resolveHash[yt]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:yt++,id:n})}reset(){this._workerPool.forEach(e=>e.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:e})=>{e?.(Error(`WorkerManager has been reset before completion`))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},St=[`.jpeg`,`.jpg`,`.png`,`.webp`,`.avif`],Ct=[`image/jpeg`,`image/png`,`image/webp`,`image/avif`];async function wt(e,t){let n=await s.get().fetch(e);if(!n.ok)throw Error(`[loadImageBitmap] Failed to fetch ${e}: ${n.status} ${n.statusText}`);let r=await n.blob();return t?.data?.alphaMode===`premultiplied-alpha`?createImageBitmap(r,{premultiplyAlpha:`none`}):createImageBitmap(r)}var Tt={name:`loadTextures`,id:`texture`,extension:{type:p.LoadParser,priority:C.High,name:`loadTextures`},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:`anonymous`},test(e){return M(e,Ct)||N(e,St)},async load(e,t,n){let r=null;return r=globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await xt.isImageBitmapSupported()?await xt.loadImageBitmap(e,t):await wt(e,t):await new Promise((t,n)=>{r=s.get().createImage(),r.crossOrigin=this.config.crossOrigin,r.src=e,r.complete?t(r):(r.onload=()=>{t(r)},r.onerror=n)}),lt(new ae({resource:r,alphaMode:`premultiply-alpha-on-upload`,resolution:t.data?.resolution||ct(e),...t.data}),n,e)},unload(e){e.destroy(!0)}},Et=[`.mp4`,`.m4v`,`.webm`,`.ogg`,`.ogv`,`.h264`,`.avi`,`.mov`],Dt,Ot;function kt(e,t,n){n===void 0&&!t.startsWith(`data:`)?e.crossOrigin=jt(t):n!==!1&&(e.crossOrigin=typeof n==`string`?n:`anonymous`)}function At(e){return new Promise((t,n)=>{e.addEventListener(`canplaythrough`,r),e.addEventListener(`error`,i),e.load();function r(){a(),t()}function i(e){a(),n(e)}function a(){e.removeEventListener(`canplaythrough`,r),e.removeEventListener(`error`,i)}})}function jt(e,t=globalThis.location){if(e.startsWith(`data:`))return``;t||=globalThis.location;let n=new URL(e,document.baseURI);return n.hostname!==t.hostname||n.port!==t.port||n.protocol!==t.protocol?`anonymous`:``}function Mt(){let e=[],t=[];for(let n of Et){let r=T.MIME_TYPES[n.substring(1)]||`video/${n.substring(1)}`;j(r)&&(e.push(n),t.includes(r)||t.push(r))}return{validVideoExtensions:e,validVideoMime:t}}var Nt={name:`loadVideo`,id:`video`,extension:{type:p.LoadParser,name:`loadVideo`},test(e){if(!Dt||!Ot){let{validVideoExtensions:e,validVideoMime:t}=Mt();Dt=e,Ot=t}let t=M(e,Ot),n=N(e,Dt);return t||n},async load(e,t,n){let r={...T.defaultOptions,resolution:t.data?.resolution||ct(e),alphaMode:t.data?.alphaMode||await ne(),...t.data},i=document.createElement(`video`),a={preload:r.autoLoad===!1?void 0:`auto`,"webkit-playsinline":r.playsinline===!1?void 0:``,playsinline:r.playsinline===!1?void 0:``,muted:r.muted===!0?``:void 0,loop:r.loop===!0?``:void 0,autoplay:r.autoPlay===!1?void 0:``};Object.keys(a).forEach(e=>{let t=a[e];t!==void 0&&i.setAttribute(e,t)}),r.muted===!0&&(i.muted=!0),kt(i,e,r.crossorigin);let o=document.createElement(`source`),s;if(r.mime)s=r.mime;else if(e.startsWith(`data:`))s=e.slice(5,e.indexOf(`;`));else if(!e.startsWith(`blob:`)){let t=e.split(`?`)[0].slice(e.lastIndexOf(`.`)+1).toLowerCase();s=T.MIME_TYPES[t]||`video/${t}`}return o.src=e,s&&(o.type=s),new Promise((a,s)=>{r.preload&&!r.autoPlay&&i.load(),i.addEventListener(`canplay`,c),i.addEventListener(`error`,l),o.addEventListener(`error`,l),i.appendChild(o);async function c(){let o=new T({...r,resource:i});u(),t.data.preload&&await At(i),a(lt(o,n,e))}function l(e){u(),s(e)}function u(){i.removeEventListener(`canplay`,c),i.removeEventListener(`error`,l),o.removeEventListener(`error`,l)}})},unload(e){e.destroy(!0)}},Pt={extension:{type:p.ResolveParser,name:`resolveTexture`},test:Tt.test,parse:e=>({resolution:parseFloat(w.RETINA_PREFIX.exec(e)?.[1]??`1`),format:e.split(`.`).pop(),src:e})},Ft={extension:{type:p.ResolveParser,priority:-2,name:`resolveJson`},test:e=>w.RETINA_PREFIX.test(e)&&e.endsWith(`.json`),parse:Pt.parse},I=new class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new w,this.loader=new qe,this.cache=D,this._backgroundLoader=new Fe(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){if(this._initialized){l(`[Assets]AssetManager already initialized, did you load before calling this Assets.init()?`);return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let t=e.manifest;typeof t==`string`&&(t=await this.load(t)),this.resolver.addManifest(t)}let t=e.texturePreference?.resolution??1,n=typeof t==`number`?[t]:t,r=await this._detectFormats({preferredFormats:e.texturePreference?.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:n}}),e.preferences&&this.setPreferences(e.preferences),e.loadOptions&&(this.loader.loadOptions={...this.loader.loadOptions,...e.loadOptions})}add(e){this.resolver.add(e)}async load(e,t){this._initialized||await this.init();let n=S(e),r=E(e).map(e=>{if(typeof e!=`string`){let t=this.resolver.getAlias(e);return t.some(e=>!this.resolver.hasKey(e))&&this.add(e),Array.isArray(t)?t[0]:t}return this.resolver.hasKey(e)||this.add({alias:e,src:e}),e}),i=this.resolver.resolve(r),a=await this._mapLoadToResolve(i,t);return n?a[r[0]]:a}addBundle(e,t){this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let n=!1;typeof e==`string`&&(n=!0,e=[e]);let r=this.resolver.resolveBundle(e),i={},a=Object.keys(r),o=0,s=[],c=()=>{t?.(s.reduce((e,t)=>e+t,0)/o)},l=a.map((e,t)=>{let n=r[e],a=Object.values(n),l=[...new Set(a.flat())].reduce((e,t)=>e+(t.progressSize||1),0);return s.push(0),o+=l,this._mapLoadToResolve(n,e=>{s[t]=e*l,c()}).then(t=>{i[e]=t})});return await Promise.all(l),n?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e==`string`&&(e=[e]);let t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e==`string`&&(e=[e]);let t=this.resolver.resolveBundle(e);Object.values(t).forEach(e=>{this._backgroundLoader.add(Object.values(e))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e==`string`)return D.get(e);let t={};for(let n=0;n<e.length;n++)t[n]=D.get(e[n]);return t}async _mapLoadToResolve(e,t){let n=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;let r=await this.loader.load(n,t);this._backgroundLoader.active=!0;let i={};return n.forEach(e=>{let t=r[e.src],n=[e.src];e.alias&&n.push(...e.alias),n.forEach(e=>{i[e]=t}),D.set(n,t)}),i}async unload(e){this._initialized||await this.init();let t=E(e).map(e=>typeof e==`string`?e:e.src),n=this.resolver.resolve(t);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=E(e);let t=this.resolver.resolveBundle(e),n=Object.keys(t).map(e=>this._unloadFromResolved(t[e]));await Promise.all(n)}async _unloadFromResolved(e){let t=Object.values(e);t.forEach(e=>{D.remove(e.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(let n of e.detections)e.skipDetections||await n.test()?t=await n.add(t):e.skipDetections||(t=await n.remove(t));return t=t.filter((e,n)=>t.indexOf(e)===n),t}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(t=>t in e).forEach(n=>{t.config[n]=e[n]})})}};e.handleByList(p.LoadParser,I.loader.parsers).handleByList(p.ResolveParser,I.resolver.parsers).handleByList(p.CacheParser,I.cache.parsers).handleByList(p.DetectionParser,I.detections),e.add(Ie,Be,Re,Ge,He,Ue,We,Xe,$e,st,ft,Tt,Nt,Pe,Ne,Pt,Ft);var It={loader:p.LoadParser,resolver:p.ResolveParser,cache:p.CacheParser,detection:p.DetectionParser};e.handle(p.Asset,t=>{let n=t.ref;Object.entries(It).filter(([e])=>!!n[e]).forEach(([t,r])=>e.add(Object.assign(n[t],{extension:n[t].extension??r})))},t=>{let n=t.ref;Object.keys(It).filter(e=>!!n[e]).forEach(t=>e.remove(n[t]))});var Lt=class extends ee{constructor(e,t){let{text:n,resolution:r,style:i,anchor:a,width:o,height:s,roundPixels:c,...l}=e;super({...l}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=t,this.text=n??``,this.style=i,this.resolution=r??null,this.allowChildren=!1,this._anchor=new m({_onUpdate:()=>{this.onViewUpdate()}}),a&&(this.anchor=a),this.roundPixels=c??!1,o!==void 0&&(this.width=o),s!==void 0&&(this.height=s)}get anchor(){return this._anchor}set anchor(e){typeof e==`number`?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){e||={},this._style?.off(`update`,this.onViewUpdate,this),this._style=e instanceof this._styleClass?e:new this._styleClass(e),this._style.on(`update`,this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||={},e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,t){typeof e==`object`?(t=e.height??e.width,e=e.width):t??=e,e!==void 0&&this._setWidth(e,this.bounds.width),t!==void 0&&this._setHeight(t,this.bounds.height)}containsPoint(e){let t=this.bounds.width,n=this.bounds.height,r=-t*this.anchor.x,i=0;return e.x>=r&&e.x<=r+t&&(i=-n*this.anchor.y,e.y>=i&&e.y<=i+n)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e==`boolean`?e:e?.style)&&this._style.destroy(e),this._style=null,this._text=null}get styleKey(){return`${this._text}:${this._style.styleKey}:${this._resolution}`}};function Rt(e,t){let n=e[0]??{};return(typeof n==`string`||e[1])&&(r(o,`use new ${t}({ text: "hi!", style }) instead`),n={text:n,style:e[1]}),n}var L=null,R=null;function zt(e,n){L||(L=s.get().createCanvas(256,128),R=L.getContext(`2d`,{willReadFrequently:!0}),R.globalCompositeOperation=`copy`,R.globalAlpha=1),(L.width<e||L.height<n)&&(L.width=t(e),L.height=t(n))}function Bt(e,t,n){for(let r=0,i=4*n*t;r<t;++r,i+=4)if(e[i+3]!==0)return!1;return!0}function Vt(e,t,n,r,i){let a=4*t;for(let t=r,o=r*a+4*n;t<=i;++t,o+=a)if(e[o+3]!==0)return!1;return!0}function Ht(...e){let t=e[0];t.canvas||(t={canvas:e[0],resolution:e[1]});let{canvas:r}=t,i=Math.min(t.resolution??1,1),a=t.width??r.width,o=t.height??r.height,s=t.output;if(zt(a,o),!R)throw TypeError(`Failed to get canvas 2D context`);R.drawImage(r,0,0,a,o,0,0,a*i,o*i);let c=R.getImageData(0,0,a,o).data,l=0,u=0,d=a-1,f=o-1;for(;u<o&&Bt(c,a,u);)++u;if(u===o)return n.EMPTY;for(;Bt(c,a,f);)--f;for(;Vt(c,a,l,u,f);)++l;for(;Vt(c,a,d,u,f);)--d;return++d,++f,R.globalCompositeOperation=`source-over`,R.strokeRect(l,u,d-l,f-u),R.globalCompositeOperation=`copy`,s??=new n,s.set(l/i,u/i,(d-l)/i,(f-u)/i),s}var Ut=new n;function z(e){let t=0;for(let n=0;n<e.length;n++)e.charCodeAt(n)===32&&t++;return t}var B=new class{getCanvasAndContext(e){let{text:t,style:n,resolution:r=1}=e,i=n._getFinalPadding(),a=O.measureText(t||` `,n),o=Math.ceil(Math.ceil(Math.max(1,a.width)+i*2)*r),s=Math.ceil(Math.ceil(Math.max(1,a.height)+i*2)*r),c=de.getOptimalCanvasAndContext(o,s);return this._renderTextToCanvas(n,i,r,c,a),{canvasAndContext:c,frame:n.trim?Ht({canvas:c.canvas,width:o,height:s,resolution:1,output:Ut}):Ut.set(0,0,o,s)}}returnCanvasAndContext(e){de.returnCanvasAndContext(e)}_renderTextToCanvas(e,t,n,r,i){if(i.runsByLine&&i.runsByLine.length>0){this._renderTaggedTextToCanvas(i,e,t,n,r);return}let{canvas:a,context:o}=r,s=fe(e),c=i.lines,l=i.lineHeight,u=i.lineWidths,d=i.maxLineWidth,f=i.fontProperties,p=a.height;if(o.resetTransform(),o.scale(n,n),o.textBaseline=e.textBaseline,e._stroke?.width){let t=e._stroke;o.lineWidth=t.width,o.miterLimit=t.miterLimit,o.lineJoin=t.join,o.lineCap=t.cap}o.font=s;let m,h,g=e.dropShadow?2:1,_=(e._stroke?.width??0)/2,v=(l-f.fontSize)/2;l-f.fontSize<0&&(v=0);for(let a=0;a<g;++a){let s=e.dropShadow&&a===0,g=s?Math.ceil(Math.max(1,p)+t*2):0,ee=g*n;if(s)this._setupDropShadow(o,e,n,ee);else{let n=e._gradientBounds,r=e._gradientOffset;if(n){let a={width:n.width,height:n.height,lineHeight:n.height,lines:i.lines};this._setFillAndStrokeStyles(o,e,a,t,_,r?.x??0,r?.y??0)}else r?this._setFillAndStrokeStyles(o,e,i,t,_,r.x,r.y):this._setFillAndStrokeStyles(o,e,i,t,_);o.shadowColor=`rgba(0,0,0,0)`}for(let n=0;n<c.length;n++){m=_,h=_+n*l+f.ascent+v,m+=this._getAlignmentOffset(u[n],d,e.align);let i=0;if(e.align===`justify`&&e.wordWrap&&n<c.length-1){let e=z(c[n]);e>0&&(i=(d-u[n])/e)}e._stroke?.width&&this._drawLetterSpacing(c[n],e,r,m+t,h+t-g,!0,i),e._fill!==void 0&&this._drawLetterSpacing(c[n],e,r,m+t,h+t-g,!1,i)}}}_renderTaggedTextToCanvas(e,t,n,r,i){let{canvas:a,context:o}=i,{runsByLine:s,lineWidths:c,maxLineWidth:l,lineAscents:u,lineHeights:d,hasDropShadow:f}=e,p=a.height;o.resetTransform(),o.scale(r,r),o.textBaseline=t.textBaseline;let m=f?2:1,h=t._stroke?.width??0;for(let e of s)for(let t of e){let e=t.style._stroke?.width??0;e>h&&(h=e)}let g=h/2,_=[];for(let e=0;e<s.length;e++){let t=s[e],n=[];for(let e of t){let t=fe(e.style);o.font=t,n.push({width:O._measureText(e.text,e.style.letterSpacing,o),font:t})}_.push(n)}for(let e=0;e<m;++e){let a=f&&e===0,m=a?Math.ceil(Math.max(1,p)+n*2):0,h=m*r;a||(o.shadowColor=`rgba(0,0,0,0)`);let v=g;for(let e=0;e<s.length;e++){let f=s[e],p=c[e],ee=u[e],y=d[e],te=_[e],b=g;b+=this._getAlignmentOffset(p,l,t.align);let x=0;if(t.align===`justify`&&t.wordWrap&&e<s.length-1){let e=0;for(let t of f)e+=z(t.text);e>0&&(x=(l-p)/e)}let ne=v+ee,S=b+n;for(let e=0;e<f.length;e++){let t=f[e],{width:s,font:c}=te[e];if(o.font=c,o.textBaseline=t.style.textBaseline,t.style._stroke?.width){let e=t.style._stroke;if(o.lineWidth=e.width,o.miterLimit=e.miterLimit,o.lineJoin=e.join,o.lineCap=e.cap,a)if(t.style.dropShadow)this._setupDropShadow(o,t.style,r,h);else{let e=z(t.text);S+=s+e*x;continue}else{let r=O.measureFont(c),i=t.style.lineHeight||r.fontSize,a={width:s,height:i,lineHeight:i,lines:[t.text]};o.strokeStyle=k(e,o,a,n*2,S-n,v)}this._drawLetterSpacing(t.text,t.style,i,S,ne+n-m,!0,x)}let l=z(t.text);S+=s+l*x}S=b+n;for(let e=0;e<f.length;e++){let t=f[e],{width:s,font:c}=te[e];if(o.font=c,o.textBaseline=t.style.textBaseline,t.style._fill!==void 0){if(a)if(t.style.dropShadow)this._setupDropShadow(o,t.style,r,h);else{let e=z(t.text);S+=s+e*x;continue}else{let e=O.measureFont(c),r=t.style.lineHeight||e.fontSize,i={width:s,height:r,lineHeight:r,lines:[t.text]};o.fillStyle=k(t.style._fill,o,i,n*2,S-n,v)}this._drawLetterSpacing(t.text,t.style,i,S,ne+n-m,!1,x)}let l=z(t.text);S+=s+l*x}v+=y}}}_setFillAndStrokeStyles(e,t,n,r,i,a=0,o=0){if(e.fillStyle=t._fill?k(t._fill,e,n,r*2,a,o):null,t._stroke?.width){let s=i+r*2;e.strokeStyle=k(t._stroke,e,n,s,a,o)}}_setupDropShadow(e,t,n,r){e.fillStyle=`black`,e.strokeStyle=`black`;let i=t.dropShadow,a=i.color,o=i.alpha;e.shadowColor=f.shared.setValue(a).setAlpha(o).toRgbaString();let s=i.blur*n,c=i.distance*n;e.shadowBlur=s,e.shadowOffsetX=Math.cos(i.angle)*c,e.shadowOffsetY=Math.sin(i.angle)*c+r}_getAlignmentOffset(e,t,n){return n===`right`?t-e:n===`center`?(t-e)/2:0}_drawLetterSpacing(e,t,n,r,i,a=!1,o=0){let{context:s}=n,c=t.letterSpacing,l=!1;if(O.experimentalLetterSpacingSupported&&(O.experimentalLetterSpacing?(s.letterSpacing=`${c}px`,s.textLetterSpacing=`${c}px`,l=!0):(s.letterSpacing=`0px`,s.textLetterSpacing=`0px`)),(c===0||l)&&o===0){a?s.strokeText(e,r,i):s.fillText(e,r,i);return}if(o!==0&&(c===0||l)){let t=e.split(` `),n=r,c=s.measureText(` `).width;for(let e=0;e<t.length;e++)a?s.strokeText(t[e],n,i):s.fillText(t[e],n,i),n+=s.measureText(t[e]).width+c+o;return}let u=r,d=O.graphemeSegmenter(e),f=s.measureText(e).width,p=0;for(let e=0;e<d.length;++e){let t=d[e];a?s.strokeText(t,u,i):s.fillText(t,u,i);let n=``;for(let t=e+1;t<d.length;++t)n+=d[t];p=s.measureText(n).width,u+=f-p+c,t===` `&&(u+=o),f=p}}};function Wt(e,t){let{texture:n,bounds:r}=e,i=t._style._getFinalPadding();b(r,t._anchor,n);let a=t._anchor._x*i*2,o=t._anchor._y*i*2;r.minX-=i-a,r.minY-=i-o,r.maxX-=i-a,r.maxY-=i-o}var Gt=class extends ce{},Kt=class{constructor(e){this._renderer=e,e.runners.resolutionChange.add(this),this._managedTexts=new ue({renderer:e,type:`renderable`,onUnload:this.onTextUnload.bind(this),name:`canvasText`})}resolutionChange(){for(let e in this._managedTexts.items){let t=this._managedTexts.items[e];t?._autoResolution&&t.onViewUpdate()}}validateRenderable(e){let t=this._getGpuText(e),n=e.styleKey;return t.currentKey!==n||e._didTextUpdate}addRenderable(e,t){let n=this._getGpuText(e);if(e._didTextUpdate){let t=e._autoResolution?this._renderer.resolution:e.resolution;(n.currentKey!==e.styleKey||e._resolution!==t)&&this._updateGpuText(e),e._didTextUpdate=!1,Wt(n,e)}this._renderer.renderPipes.batch.addToBatch(n,t)}updateRenderable(e){let t=this._getGpuText(e);t._batcher.updateElement(t)}_updateGpuText(e){let t=this._getGpuText(e);t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey),e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,t.texture=this._renderer.canvasText.getManagedTexture(e),t.currentKey=e.styleKey}_getGpuText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){let t=new Gt;return t.currentKey=`--`,t.renderable=e,t.transform=e.groupTransform,t.bounds={minX:0,maxX:1,minY:0,maxY:0},t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._gpuData[this._renderer.uid]=t,this._managedTexts.add(e),t}onTextUnload(e){let t=e._gpuData[this._renderer.uid];if(!t)return;let{canvasText:n}=this._renderer;n.getReferenceCount(t.currentKey)>0?n.decreaseReferenceCount(t.currentKey):t.texture&&n.returnTexture(t.texture)}destroy(){this._managedTexts.destroy(),this._renderer=null}};Kt.extension={type:[p.WebGLPipes,p.WebGPUPipes,p.CanvasPipes],name:`text`};var qt=class{constructor(e,t){this._activeTextures={},this._renderer=e,this._retainCanvasContext=t}getTexture(e,t,n,a){typeof e==`string`&&(r(`8.0.0`,`CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments`),e={text:e,style:n,resolution:t}),e.style instanceof pe||(e.style=new pe(e.style)),e.textureStyle instanceof i||(e.textureStyle=new i(e.textureStyle)),typeof e.text!=`string`&&(e.text=e.text.toString());let{text:o,style:s,textureStyle:c,autoGenerateMipmaps:l}=e,u=e.resolution??this._renderer.resolution,{frame:d,canvasAndContext:f}=B.getCanvasAndContext({text:o,style:s,resolution:u}),p=ie(f.canvas,d.width,d.height,u,l);if(c&&(p.source.style=c),s.trim&&(d.pad(s.padding),p.frame.copyFrom(d),p.frame.scale(1/u),p.updateUvs()),s.filters){let e=this._applyFilters(p,s.filters);return this.returnTexture(p),B.returnCanvasAndContext(f),e}return this._renderer.texture.initSource(p._source),this._retainCanvasContext||B.returnCanvasAndContext(f),p}returnTexture(e){let t=e.source,n=t.resource;if(this._retainCanvasContext&&n?.getContext){let e=n.getContext(`2d`);e&&B.returnCanvasAndContext({canvas:n,context:e})}t.resource=null,t.uploadMethodId=`unknown`,t.alphaMode=`no-premultiply-alpha`,te.returnTexture(e,!0)}renderTextToCanvas(){r(`8.10.0`,`CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead`)}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;let t=e.styleKey;if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].texture;let n=this.getTexture({text:e.text,style:e.style,resolution:e._resolution,textureStyle:e.textureStyle,autoGenerateMipmaps:e.autoGenerateMipmaps});return this._activeTextures[t]={texture:n,usageCount:1},n}decreaseReferenceCount(e){let t=this._activeTextures[e];t&&(t.usageCount--,t.usageCount===0&&(this.returnTexture(t.texture),this._activeTextures[e]=null))}getReferenceCount(e){return this._activeTextures[e]?.usageCount??0}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}_applyFilters(e,t){let n=this._renderer.renderTarget.renderTarget,r=this._renderer.filter.generateFilteredTexture({texture:e,filters:t});return this._renderer.renderTarget.bind(n,!1),r}destroy(){this._renderer=null;for(let e in this._activeTextures)this._activeTextures[e]&&this.returnTexture(this._activeTextures[e].texture);this._activeTextures=null}},Jt=class extends qt{constructor(e){super(e,!0)}};Jt.extension={type:[p.CanvasSystem],name:`canvasText`};var Yt=class extends qt{constructor(e){super(e,!1)}};Yt.extension={type:[p.WebGLSystem,p.WebGPUSystem],name:`canvasText`},e.add(Jt),e.add(Yt),e.add(Kt);var Xt=class extends Lt{constructor(...e){let t=Rt(e,`Text`);super(t,pe),this.renderPipeId=`text`,t.textureStyle&&(this.textureStyle=t.textureStyle instanceof i?t.textureStyle:new i(t.textureStyle)),this.autoGenerateMipmaps=t.autoGenerateMipmaps??u.defaultOptions.autoGenerateMipmaps}updateBounds(){let e=this._bounds,t=this._anchor,n=0,r=0;if(this._style.trim){let{frame:e,canvasAndContext:t}=B.getCanvasAndContext({text:this.text,style:this._style,resolution:1});B.returnCanvasAndContext(t),n=e.width,r=e.height}else{let e=O.measureText(this._text,this._style);n=e.width,r=e.height}e.minX=-t._x*n,e.maxX=e.minX+n,e.minY=-t._y*r,e.maxY=e.minY+r}};e.add(_e,ve);var V={bunny:[null,`#f2ecff`,`#c9b8f0`,`#2b1d4f`,`#ff9db0`],gate_a:[null,`#7dfcc6`,`#2ee6a8`,`#0d3b2e`,`#eafff5`],gate_b:[null,`#ffb27d`,`#ff7a4d`,`#4d1c0d`,`#fff2ea`],friend:[null,`#ffd75e`,`#ffaa2b`,`#7a4a00`],enemy:[null,`#5a2d7a`,`#3a1552`,`#ff3b3b`],shelf:[null,`#5e6b7a`,`#7d8fa3`,`#3fbf9f`,`#2b3440`]},H={bunny:[`0001100110000000`,`0011211210000000`,`0012211220000000`,`0012211220000000`,`0011111110000000`,`0111111111000000`,`1111311311100000`,`1111111111110000`,`1114111111111000`,`0111111111111100`,`0011111111111110`,`0001111111111110`,`0000111111111100`,`0000011221122000`,`0000001100110000`,`0000000000000000`],gate_a:[`0000111111110000`,`0011222222221100`,`0122333333332210`,`1223344444433221`,`1233444444443321`,`1234444334444321`,`1234443003444321`,`1234430000344321`,`1234430000344321`,`1234443003444321`,`1234444334444321`,`1233444444443321`,`1223344444433221`,`0122333333332210`,`0011222222221100`,`0000111111110000`],friend:[`0000110000`,`0001221000`,`0012332100`,`0123333210`,`1233333321`,`1233333321`,`0123333210`,`0012332100`,`0001221000`,`0000110000`],enemy:[`0010000100`,`0121001210`,`0112111210`,`1122222211`,`1231221321`,`1231221321`,`1122222211`,`0112111210`,`0121001210`,`0010000100`],shelf:[`333333333333333333333333`,`111111111111111111111111`,`122222222222222222222221`,`124444444444444444444421`,`112222222222222222222211`,`011111111111111111111110`]};H.gate_b=H.gate_a,H.bunny_hop1=H.bunny,H.bunny_hop2=H.bunny,V.bunny_hop1=V.bunny,V.bunny_hop2=V.bunny;function Zt(e){let t=H[e],n=V[e];if(!t||!n)return Qt();let r=t.length,i=t[0].length,a=document.createElement(`canvas`);a.width=i,a.height=r;let o=a.getContext(`2d`);for(let e=0;e<r;e++)for(let r=0;r<i;r++){let i=n[Number(t[e][r])];i&&(o.fillStyle=i,o.fillRect(r,e,1,1))}let s=d.from(a);return s.source.scaleMode=`nearest`,s}function Qt(){let e=document.createElement(`canvas`);e.width=480,e.height=270;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,0,270);n.addColorStop(0,`#0b0716`),n.addColorStop(.7,`#1a1033`),n.addColorStop(1,`#241c47`),t.fillStyle=n,t.fillRect(0,0,480,270);let r=42,i=()=>(r=r*16807%2147483647)/2147483647;for(let e=0;e<120;e++){let e=2+Math.floor(i()*476),n=Math.floor(i()*240);t.fillStyle=i()>.8?`#9fe8dd`:`#e8e2ff`,t.globalAlpha=.3+i()*.7,t.fillRect(e,n,1,1)}t.globalAlpha=1;let a=d.from(e);return a.source.scaleMode=`nearest`,a}var $t={background:`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/assets/background-Bi6LUF8d.png`,bunny:`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/assets/bunny-CabGbXg4.png`,bunny_hop1:`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/assets/bunny_hop1-Ivh5wDTG.png`,bunny_hop2:`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/assets/bunny_hop2-nnTSTsYP.png`,enemy:`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/assets/enemy-Cgn78uFK.png`,friend:`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/assets/friend-x-zociG-.png`,gate_a:`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/assets/gate_a-BNI8En2c.png`,gate_b:`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/assets/gate_b-E9T8k4aT.png`,shelf:`https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/assets/shelf-DuBcT5qG.png`};async function en(){let e={};return await Promise.all(Object.entries($t).map(async([t,n])=>{try{let r=await I.load(n);r.source.scaleMode=`nearest`,e[t]=r}catch{console.warn(`${t} failed to load from ${n} — using procedural fallback`),e[t]=Zt(t)}})),e}var tn=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,nn=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,rn=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,an=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,on=Object.defineProperty,sn=(e,t,n)=>t in e?on(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U=(e,t,n)=>(sn(e,typeof t==`symbol`?t:t+``,n),n),cn=class e extends y{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=a.from({vertex:{source:nn,entryPoint:`mainVertex`},fragment:{source:an,entryPoint:`mainFragment`}}),r=c.from({vertex:tn,fragment:rn,name:`crt-filter`});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:`vec4<f32>`},uNoise:{value:new Float32Array(2),type:`vec2<f32>`},uVignette:{value:new Float32Array(3),type:`vec3<f32>`},uSeed:{value:t.seed,type:`f32`},uTime:{value:t.time,type:`f32`},uDimensions:{value:new Float32Array(2),type:`vec2<f32>`}}}}),U(this,`uniforms`),U(this,`seed`),U(this,`time`),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(e,t,n,r){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,t,n,r)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=+!!e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}};U(cn,`DEFAULT_OPTIONS`,{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var ln=cn,un=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,dn=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,fn=Object.defineProperty,pn=(e,t,n)=>t in e?fn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mn=(e,t,n)=>(pn(e,typeof t==`symbol`?t:t+``,n),n),hn=class e extends y{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=t.distance??10,r=t.quality??.1,i=a.from({vertex:{source:nn,entryPoint:`mainVertex`},fragment:{source:dn,entryPoint:`mainFragment`}}),o=c.from({vertex:tn,fragment:un.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:`glow-filter`});super({gpuProgram:i,glProgram:o,resources:{glowUniforms:{uDistance:{value:n,type:`f32`},uStrength:{value:[t.innerStrength,t.outerStrength],type:`vec2<f32>`},uColor:{value:new Float32Array(3),type:`vec3<f32>`},uAlpha:{value:t.alpha,type:`f32`},uQuality:{value:r,type:`f32`},uKnockout:{value:t?.knockout??!1?1:0,type:`f32`}}},padding:n}),mn(this,`uniforms`),mn(this,`_color`),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new f,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,n,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=+!!e}};mn(hn,`DEFAULT_OPTIONS`,{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var gn=hn,_n=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,vn=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,yn=Object.defineProperty,bn=(e,t,n)=>t in e?yn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xn=(e,t,n)=>(bn(e,typeof t==`symbol`?t:t+``,n),n),Sn=class e extends y{constructor(...t){let n=t[0]??{};(Array.isArray(n)||`x`in n&&`y`in n)&&(r(`6.0.0`,`RGBSplitFilter constructor params are now options object. See params: { red, green, blue }`),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...e.DEFAULT_OPTIONS,...n};let i=a.from({vertex:{source:nn,entryPoint:`mainVertex`},fragment:{source:vn,entryPoint:`mainFragment`}}),o=c.from({vertex:tn,fragment:_n,name:`rgb-split-filter`});super({gpuProgram:i,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:{x:0,y:0},type:`vec2<f32>`},uGreen:{value:{x:0,y:0},type:`vec2<f32>`},uBlue:{value:{x:0,y:0},type:`vec2<f32>`}}}}),xn(this,`uniforms`),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}};xn(Sn,`DEFAULT_OPTIONS`,{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Cn=Sn;function wn(){let e=new ln({lineWidth:.6,lineContrast:.12,noise:.04,vignetting:.22,vignettingAlpha:.6}),t=new Cn({red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0}});return{crt:e,rgbSplit:t,list:[e,t]}}function Tn(){return new gn({distance:8,outerStrength:1.6,color:8256710,quality:.3})}var En=class{constructor(e){this.filters=e,this.time=0,this.warpFlash=0}triggerWarp(){this.warpFlash=1}update(e){this.time+=e,this.filters.crt.time=this.time*4,this.filters.crt.seed=Math.random(),this.warpFlash=Math.max(0,this.warpFlash-e*3);let t=this.warpFlash**2*6;this.filters.rgbSplit.red={x:-t,y:0},this.filters.rgbSplit.blue={x:t,y:0}}},Dn=30,On=class{constructor(e,t,n){this.container=new h,this.width=t,this.tiles=[];for(let r=0;r<2;r++){let i=new _(e);i.width=t,i.height=n,i.tint=7237263,i.anchor.x=r%2,i.scale.x*=r%2?-1:1,i.x=r*t,this.container.addChild(i),this.tiles.push(i)}}update(e){for(let t of this.tiles)t.x-=Dn*e,t.x<=-this.width&&(t.x+=this.width*2)}};function kn(e,t){e.vy+=900*t,e.x+=e.vx*t,e.y+=e.vy*t}function An(e,t,n){e.y+e.r>n&&(e.y=n-e.r,e.vy=-Math.abs(e.vy)),e.y-e.r<0&&(e.y=e.r,e.vy=Math.abs(e.vy)),e.x-e.r<0&&(e.x=e.r,e.vx=Math.abs(e.vx)),e.x+e.r>t&&(e.x=t-e.r,e.vx=-Math.abs(e.vx))}function jn(e,t){let n=t.w/2,r=t.h/2,i=Math.max(t.x-n,Math.min(e.x,t.x+n)),a=Math.max(t.y-r,Math.min(e.y,t.y+r)),o=e.x-i,s=e.y-a,c=o*o+s*s;if(c>=e.r*e.r)return!1;let l=Math.sqrt(c)||1e-4,u=e.r-l,d=o/l,f=s/l;e.x+=d*u,e.y+=f*u;let p=e.vx*d+e.vy*f;return p<0&&(e.vx-=2*p*d,e.vy-=2*p*f),!0}function Mn(e,t){let n=e.x-t.x,r=e.y-t.y,i=e.r+t.r;return n*n+r*r<i*i}var Nn=12,Pn=class{constructor(e){this.textures=e,this.body={x:0,y:0,vx:0,vy:0,r:Nn},this.sprite=new _(e.bunny),this.sprite.anchor.set(.5)}reset(e,t){this.body.x=e,this.body.y=t,this.body.vx=0,this.body.vy=0}teleport(e,t){this.body.x=e,this.body.y=t,this.body.vx=0,this.body.vy=0}update(e,t,n,r){kn(this.body,e),An(this.body,t,n);for(let e of r)jn(this.body,e);this.body.vy<-60?this.sprite.texture=this.textures.bunny_hop2:this.body.vy>220?this.sprite.texture=this.textures.bunny_hop1:this.sprite.texture=this.textures.bunny,this.sprite.position.set(this.body.x,this.body.y)}},Fn=70,In=1.1,Ln=class{constructor(e,t,n){this.textures=e,this.worldWidth=t,this.worldHeight=n,this.container=new h,this.items=[],this.timer=0}reset(){for(let e of this.items)e.sprite.destroy();this.items=[],this.container.removeChildren(),this.timer=0}spawn(){let e=Math.floor(Math.random()*3),t=e===0?`friend`:e===1?`enemy`:`shelf`,n=new _(this.textures[t]);n.anchor.set(.5);let r=Math.max(n.height,24);n.x=this.worldWidth+n.width/2,n.y=r+Math.random()*(this.worldHeight-r*2),this.container.addChild(n),this.items.push({kind:t,sprite:n})}update(e){this.timer+=e,this.timer>=In&&(this.timer-=In,this.spawn());for(let t of this.items)t.sprite.x-=Fn*e;this.items=this.items.filter(e=>e.sprite.x<-e.sprite.width?(e.sprite.destroy(),!1):!0)}shelfRects(){return this.items.filter(e=>e.kind===`shelf`).map(e=>({x:e.sprite.x,y:e.sprite.y,w:e.sprite.width,h:e.sprite.height}))}checkContacts(e){let t=0,n=!1;return this.items=this.items.filter(r=>r.kind===`shelf`||!Mn(e,{x:r.sprite.x,y:r.sprite.y,r:r.sprite.width/2})?!0:r.kind===`friend`?(t++,r.sprite.destroy(),!1):(n=!0,!0)),{collected:t,hitEnemy:n}}},Rn=18,zn=class{constructor(e){this.textures=e,this.container=new h,this.gateA=null,this.gateB=null,this.pulse=0}reset(){this.container.removeChildren(),this.gateA=null,this.gateB=null}tap(e,t){this.gateA?this.gateB?this.reset():this.gateB=this.makeGate(`gate_b`,e,t):this.gateA=this.makeGate(`gate_a`,e,t)}makeGate(e,t,n){let r=new _(this.textures[e]);return r.anchor.set(.5),r.position.set(t,n),this.container.addChild(r),r}checkWarp(e){if(!this.gateA||!this.gateB||!Mn(e,{x:this.gateA.x,y:this.gateA.y,r:Rn}))return null;let t={x:this.gateB.x,y:this.gateB.y};return this.reset(),t}update(e){this.pulse+=e*4;let t=this.gateB?1+Math.sin(this.pulse)*.08:1;this.gateA&&this.gateA.scale.set(t),this.gateB&&this.gateB.scale.set(t)}},Bn=class{constructor(){this.container=new h,this.scoreText=new Xt({text:`SCORE 0`,style:{fontFamily:`monospace`,fontSize:12,fill:15920383}}),this.scoreText.position.set(6,4),this.container.addChild(this.scoreText)}setScore(e){this.scoreText.text=`SCORE ${e}`}},Vn=`portball`,Hn=`scores`,Un=`/login?next=%2Fp%2Fportball`,Wn=/^[a-z0-9]{3,16}$/,Gn=`portball.best`,Kn=`portball.handle`,qn=Un;function W(){return typeof window<`u`&&!!window.AeroDB}function Jn(){return window.AeroDB.page(Vn).table(Hn)}function Yn(e){return Wn.test(e)?null:`handle must be 3-16 characters, lowercase letters and numbers only`}function Xn(){return Number(localStorage.getItem(Gn)??0)}function Zn(e){return e>Xn()&&localStorage.setItem(Gn,String(e)),Xn()}function Qn(){return localStorage.getItem(Kn)??``}async function $n(){if(!W())return null;try{return await window.AeroDB.page(Vn).whoami()}catch{return null}}async function er(){if(!W())return[];try{return(await Jn().list({orderBy:`-score`,limit:10})).map(e=>({handle:e.id,score:Number(e.data?.score??0)}))}catch(e){console.warn(`ordered leaderboard query failed, sorting client-side`,e);try{return(await Jn().list({limit:200})).map(e=>({handle:e.id,score:Number(e.data?.score??0)})).sort((e,t)=>t.score-e.score).slice(0,10)}catch{return[]}}}async function tr(e,t){if(!W())return{ok:!1,reason:`leaderboard unavailable here`};let n=Yn(e);if(n)return{ok:!1,reason:n};let r=await $n();if(!r||r.kind!==`user`)return{ok:!1,reason:`sign in to save your score`,needsLogin:!0};let i=Jn(),a=null;try{a=await i.get(e)}catch{}if(a){let n=a.data?._owner;if(n&&n!==r.id)return{ok:!1,reason:`that handle is taken, pick another`};if(Number(a.data?.score??0)>=t)return localStorage.setItem(Kn,e),{ok:!0,unchanged:!0}}try{return await i.set(e,{score:t}),localStorage.setItem(Kn,e),{ok:!0}}catch(e){return e.status===401?{ok:!1,reason:`sign in to save your score`,needsLogin:!0}:e.status===403?{ok:!1,reason:`that handle is taken, pick another`}:{ok:!1,reason:e.message||`could not save score`}}}var nr=class{constructor(e){this.root=document.getElementById(`gameover`),this.scoreEl=document.getElementById(`go-score`),this.bestEl=document.getElementById(`go-best`),this.boardEl=document.getElementById(`go-board`),this.actionEl=document.getElementById(`go-action`),this.onRestart=e,this.score=0}async show(e){if(this.score=e,this.scoreEl.textContent=String(e),this.bestEl.textContent=String(Zn(e)),this.root.dataset.open=`1`,!W()){this.boardEl.innerHTML=`<p class="empty">leaderboard offline — play at aero.oops.wtf/p/portball</p>`,this.renderAction([this.restartButton()]);return}this.boardEl.innerHTML=`<p class="empty">loading…</p>`,this.renderAction([this.restartButton()]);let[t,n]=await Promise.all([er(),$n()]);this.renderBoard(t),this.renderSaveFlow(n)}hide(){this.root.dataset.open=`0`}renderBoard(e){if(e.length===0){this.boardEl.innerHTML=`<p class="empty">no scores yet — be the first</p>`;return}let t=Qn(),n=document.createElement(`ol`);e.forEach((e,r)=>{let i=document.createElement(`li`);e.handle===t&&(i.className=`me`);let a=document.createElement(`span`);a.className=`rank`,a.textContent=`${r+1}.`;let o=document.createElement(`span`);o.className=`name`,o.textContent=e.handle;let s=document.createElement(`span`);s.textContent=String(e.score),i.append(a,o,s),n.appendChild(i)}),this.boardEl.replaceChildren(n)}renderSaveFlow(e,t){if(this.score<=0){this.renderAction([this.note(`score 0 — nothing to save`),this.restartButton()]);return}if(!e||e.kind!==`user`){let e=document.createElement(`a`);e.className=`btn`,e.href=qn,e.textContent=`SIGN IN TO SAVE`,this.renderAction([e,this.restartButton()]);return}let n=document.createElement(`input`);n.type=`text`,n.placeholder=`handle (a-z, 0-9)`,n.maxLength=16,n.value=Qn(),n.autocapitalize=`off`,n.autocomplete=`off`,n.spellcheck=!1;let r=document.createElement(`button`);r.textContent=`SAVE SCORE`;let i=async()=>{let t=n.value.trim().toLowerCase(),i=Yn(t);if(i){this.renderSaveFlow(e,i),n.value=t;return}r.disabled=!0,r.textContent=`SAVING…`;let a=await tr(t,this.score);if(a.ok){this.renderBoard(await er()),this.renderAction([this.note(a.unchanged?`your best still stands`:`saved`),this.restartButton()]);return}r.disabled=!1,r.textContent=`SAVE SCORE`,this.renderSaveFlow(a.needsLogin?null:e,a.reason)};r.addEventListener(`click`,i),n.addEventListener(`keydown`,e=>{e.key===`Enter`&&i()});let a=[n,r];t&&a.push(this.note(t,!0)),a.push(this.restartButton()),this.renderAction(a)}renderAction(e){this.actionEl.replaceChildren(...e)}note(e,t){let n=document.createElement(`p`);return n.className=t?`note error`:`note`,n.textContent=e,n}restartButton(){let e=document.createElement(`button`);return e.className=`restart`,e.textContent=`PLAY AGAIN`,e.addEventListener(`click`,()=>{this.hide(),this.onRestart()}),e}},G=document.documentElement;function rr(){return!!(G.requestFullscreen||G.webkitRequestFullscreen)}function ir(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}async function ar(){await(G.requestFullscreen??G.webkitRequestFullscreen).call(G,{navigationUI:`hide`});try{await screen.orientation?.lock?.(`landscape`)}catch{}}async function or(){try{screen.orientation?.unlock?.()}catch{}await(document.exitFullscreen??document.webkitExitFullscreen).call(document)}function sr(e){let t=document.getElementById(`fullscreen`);if(!t||!rr())return;t.dataset.show=`1`;let n=()=>{let e=ir();t.textContent=e?`✕`:`⛶`,t.setAttribute(`aria-pressed`,String(e)),t.setAttribute(`aria-label`,e?`Exit fullscreen`:`Enter fullscreen`)};t.addEventListener(`click`,async e=>{e.stopPropagation();try{await(ir()?or():ar())}catch{}n()});for(let t of[`fullscreenchange`,`webkitfullscreenchange`])document.addEventListener(t,()=>{n(),requestAnimationFrame(e)});n()}var K=480,q=270,J=new Oe;await J.init({preference:`webgpu`,width:K,height:q,background:`#0b0716`,antialias:!1,autoDensity:!1,resolution:1}),document.body.appendChild(J.canvas),console.log(`renderer: ${J.renderer.name}`);function Y(){let e=Math.min(innerWidth/K,innerHeight/q);J.canvas.style.width=`${K*e}px`,J.canvas.style.height=`${q*e}px`}Y(),addEventListener(`resize`,Y),addEventListener(`orientationchange`,Y),sr(Y);var X=await en(),cr=new h;J.stage.addChild(cr);var lr=new On(X.background,K,q),Z=new Ln(X,K,q),Q=new zn(X),$=new Pn(X);cr.addChild(lr.container,Z.container,Q.container,$.sprite);var ur=wn();cr.filters=ur.list,Q.container.filters=[Tn()];var dr=new En(ur),fr=0,pr=!0,mr=new Bn;J.stage.addChild(mr.container);var hr=new nr(gr);function gr(){fr=0,pr=!0,mr.setScore(0),Z.reset(),Q.reset(),$.reset(60,120)}$.reset(60,120),J.stage.eventMode=`static`,J.stage.hitArea=J.screen,J.stage.on(`pointerdown`,e=>{if(!pr)return;let t=e.getLocalPosition(J.stage);Q.tap(t.x,t.y)}),J.ticker.add(e=>{let t=Math.min(e.deltaMS/1e3,1/20);if(dr.update(t),Q.update(t),!pr)return;lr.update(t),Z.update(t),$.update(t,K,q,Z.shelfRects());let n=Q.checkWarp($.body);n&&($.teleport(n.x,n.y),dr.triggerWarp());let{collected:r,hitEnemy:i}=Z.checkContacts($.body);r>0&&(fr+=r,mr.setScore(fr)),i&&(pr=!1,hr.show(fr))});