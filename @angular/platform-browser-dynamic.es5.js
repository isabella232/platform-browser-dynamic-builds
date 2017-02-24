var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * @license Angular v4.0.0-beta.8-932a02f
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */import{ResourceLoader,platformCoreDynamic}from'@angular/compiler';import{createPlatformFactory,PLATFORM_ID,COMPILER_OPTIONS,Injectable,Version}from'@angular/core';import{ɵPLATFORM_BROWSER_ID}from'@angular/common';import{ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS}from'@angular/platform-browser';var ResourceLoaderImpl=function(_ResourceLoader){_inherits(ResourceLoaderImpl,_ResourceLoader);function ResourceLoaderImpl(){_classCallCheck(this,ResourceLoaderImpl);return _possibleConstructorReturn(this,(ResourceLoaderImpl.__proto__||Object.getPrototypeOf(ResourceLoaderImpl)).apply(this,arguments));}_createClass(ResourceLoaderImpl,[{key:'get',value:function get(url){var resolve=void 0;var reject=void 0;var promise=new Promise(function(res,rej){resolve=res;reject=rej;});var xhr=new XMLHttpRequest();xhr.open('GET',url,true);xhr.responseType='text';xhr.onload=function(){// responseText is the old-school way of retrieving response (supported by IE8 & 9)
// response/responseType properties were introduced in ResourceLoader Level2 spec (supported
// by IE10)
var response=xhr.response||xhr.responseText;// normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
var status=xhr.status===1223?204:xhr.status;// fix status code when it is 0 (0 status is undocumented).
// Occurs when accessing file resources or on Android 4.1 stock browser
// while retrieving files from application cache.
if(status===0){status=response?200:0;}if(200<=status&&status<=300){resolve(response);}else{reject('Failed to load '+url);}};xhr.onerror=function(){reject('Failed to load '+url);};xhr.send();return promise;}}]);return ResourceLoaderImpl;}(ResourceLoader);ResourceLoaderImpl.decorators=[{type:Injectable}];/** @nocollapse */ResourceLoaderImpl.ctorParameters=function(){return[];};var INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS=[ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS,{provide:COMPILER_OPTIONS,useValue:{providers:[{provide:ResourceLoader,useClass:ResourceLoaderImpl}]},multi:true},{provide:PLATFORM_ID,useValue:ɵPLATFORM_BROWSER_ID}];/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var globalScope=void 0;if(typeof window==='undefined'){if(typeof WorkerGlobalScope!=='undefined'&&self instanceof WorkerGlobalScope){// TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
globalScope=self;}else{globalScope=global;}}else{globalScope=window;}// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var _global=globalScope;// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert=function assert(condition){// TODO: to be fixed properly via #2830, noop for now
};/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 */var CachedResourceLoader=function(_ResourceLoader2){_inherits(CachedResourceLoader,_ResourceLoader2);function CachedResourceLoader(){_classCallCheck(this,CachedResourceLoader);var _this2=_possibleConstructorReturn(this,(CachedResourceLoader.__proto__||Object.getPrototypeOf(CachedResourceLoader)).call(this));_this2._cache=_global.$templateCache;if(_this2._cache==null){throw new Error('CachedResourceLoader: Template cache was not found in $templateCache.');}return _this2;}_createClass(CachedResourceLoader,[{key:'get',value:function get(url){if(this._cache.hasOwnProperty(url)){return Promise.resolve(this._cache[url]);}else{return Promise.reject('CachedResourceLoader: Did not find cached template for '+url);}}}]);return CachedResourceLoader;}(ResourceLoader);/**
 * @stable
 */var VERSION=new Version('4.0.0-beta.8-932a02f');/**
 * @experimental
 */var RESOURCE_CACHE_PROVIDER=[{provide:ResourceLoader,useClass:CachedResourceLoader}];/**
 * @stable
 */var platformBrowserDynamic=createPlatformFactory(platformCoreDynamic,'browserDynamic',INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);export{RESOURCE_CACHE_PROVIDER,platformBrowserDynamic,VERSION,INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,ResourceLoaderImpl as ɵResourceLoaderImpl};
