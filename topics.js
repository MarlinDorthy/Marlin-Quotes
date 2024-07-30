module.exports=__NEXT_REGISTER_PAGE("/topics",function(){var e=webpackJsonp([12],{37:function(e,t,r){"use strict";var a=r(1);var n=r.n(a);var o=r(0);var i=r.n(o);var l=["img{vertical-align:middle;background-color:var(--alt-background-dark);width:100%;object-fit:cover;}"];l.__hash="3140916369";l.__scoped=["img.jsx-2814064656{vertical-align:middle;background-color:var(--alt-background-dark);width:100%;object-fit:cover;}"];l.__scopedHash="2814064656";var s=l;var c=r(2);var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){h(t,e);function t(){p(this,t);return f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,[{key:"render",value:function e(){var r=this.props,a=r.alt,o=r.imgUrl,l=r.imgSrcset,c=r.height;return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{crossOrigin:"anonymous",src:o,srcSet:l,alt:a,sizes:t.gridImageSizes,style:{height:c},className:"jsx-"+s.__scopedHash}),i.a.createElement(n.a,{styleId:s.__scopedHash,css:s.__scoped}))}}]);return t}(i.a.Component);d.gridImageSizes="(min-width: 738px) calc((100vw - "+c["C"]+"vw) / 2 - "+c["C"]+"vw), (min-width: 1088px) calc((100vw - "+c["C"]+"vw) / 3 - "+c["C"]+"vw), (min-width: 1493px) calc((100vw - "+c["C"]+"vw) / 4 - "+c["C"]+"vw), calc((100vw - "+c["C"]+"vw) / 1 - "+c["C"]+"vw)";var v=t["a"]=d},488:function(e,t,r){e.exports=r(489)},489:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(24);var n=r.n(a);var o=r(0);var i=r.n(o);var l=r(16);var s=r(96);var c=r(29);var u=r(6);var p=r(28);var f=r(10);var h=r(4);var d=r(99);var v=r(161);var m=function e(t){return{data:Object(s["g"])(t),hasMoreData:Object(v["b"])(t),prefix:"topics"}};var b=Object(h["connect"])(m,{loadMoreData:s["f"]})(d["a"]);var g=r(17);var y=r(11);var w=r(35);var x=r(32);var k=r(5);var _=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();function j(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function a(n,o){try{var i=t[n](o);var l=i.value}catch(e){r(e);return}if(!i.done)return Promise.resolve(l).then(function(e){a("next",e)},function(e){a("throw",e)});e(l)}return a("next")})}}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var P=function(e){O(t,e);function t(){var e;var r,a,n;E(this,t);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return n=(r=(a=C(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a),a.title="Quotes by Topic",a.desc="Find your favorite quotations from our collection of popular topics, holidays, and occasions.",r),C(a,n)}_(t,[{key:"render",value:function e(){var r="topics";var a="https://static.quotery.com/backgrounds/480/catalog-480.jpg";return i.a.createElement(p["a"],null,i.a.createElement(g["a"],{title:this.title,desc:this.desc,canonical:r,imgUrl:a}),i.a.createElement(x["a"],null),i.a.createElement(c["a"],{size:"partial",page:"topics"},i.a.createElement(u["a"],{Element:"h1",kind:"xxlTitle",color:"primaryLight",center:true},"Topics"),i.a.createElement(y["a"],{primary:true,buttons:["info","share"],title:this.title,desc:this.desc,link:r,imageUrl:a,info:t.info()})),i.a.createElement(w["a"],{options:[{type:"sort",modal:"sort"}]}),i.a.createElement(f["a"],{Element:"main",type:"main"},i.a.createElement(b,null)))}}],[{key:"getInitialProps",value:function(){var e=j(n.a.mark(function e(t){var r=t.isServer,a=t.store,o=t.isVirtualCall;return n.a.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:o||a.dispatch(Object(k["f"])("Popular"));if(!r){t.next=6;break}t.next=4;return a.dispatch(Object(s["f"])(true));case 4:t.next=7;break;case 6:a.dispatch(Object(s["f"])(true));case 7:case"end":return t.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"info",value:function e(){return i.a.createElement("div",null,i.a.createElement("p",null,"Looking for a quote about a specific topic or tag? Great, we've got you covered."),i.a.createElement("p",null,"This is where you'll find quotations from common categories such as love, inspiration, and humor."),i.a.createElement("p",null,"Maybe you're in search of an adage that relates to an upcoming holiday. How about a special occasion? It's all here!"))}}]);return t}(i.a.Component);var T=t["default"]=Object(l["a"])(P)},99:function(e,t,r){"use strict";var a=r(53);var n=r.n(a);var o=r(0);var i=r.n(o);var l=r(4);var s=r(54);var c=r(41);var u=r(5);var p=r(1);var f=r.n(p);var h=r(9);var d=r.n(h);var v=["a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;height:300px;}","a:hover .content{-webkit-transform:scale(0.5,0.5);-ms-transform:scale(0.5,0.5);transform:scale(0.5,0.5);}","a:hover .overlay{opacity:0;}",".overlay{color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transition:var(--hover-duration-fast);transition:var(--hover-duration-fast);background:linear-gradient(to top,rgba(0,0,0,0.7),rgba(0,0,0,0.3));opacity:1;padding:36px;}",".content{-webkit-transition:var(--hover-duration-fast);transition:var(--hover-duration-fast);}",".divide{width:84px;background-color:var(--primary-brand);margin:20px auto;height:1px;}","h4{font-family:'Playfair Display',Georgia,serif;-webkit-letter-spacing:var(--letter-spacing-xs);-moz-letter-spacing:var(--letter-spacing-xs);-ms-letter-spacing:var(--letter-spacing-xs);letter-spacing:var(--letter-spacing-xs);margin:20px;font-weight:700;font-size:22px;}","p{margin:20px;text-transform:uppercase;font-size:14px;font-weight:500;-webkit-letter-spacing:var(--letter-spacing-md);-moz-letter-spacing:var(--letter-spacing-md);-ms-letter-spacing:var(--letter-spacing-md);letter-spacing:var(--letter-spacing-md);}"];v.__hash="1798607388";v.__scoped=["a.jsx-567973405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;height:300px;}","a.jsx-567973405:hover .content.jsx-567973405{-webkit-transform:scale(0.5,0.5);-ms-transform:scale(0.5,0.5);transform:scale(0.5,0.5);}","a.jsx-567973405:hover .overlay.jsx-567973405{opacity:0;}",".overlay.jsx-567973405{color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transition:var(--hover-duration-fast);transition:var(--hover-duration-fast);background:linear-gradient(to top,rgba(0,0,0,0.7),rgba(0,0,0,0.3));opacity:1;padding:36px;}",".content.jsx-567973405{-webkit-transition:var(--hover-duration-fast);transition:var(--hover-duration-fast);}",".divide.jsx-567973405{width:84px;background-color:var(--primary-brand);margin:20px auto;height:1px;}","h4.jsx-567973405{font-family:'Playfair Display',Georgia,serif;-webkit-letter-spacing:var(--letter-spacing-xs);-moz-letter-spacing:var(--letter-spacing-xs);-ms-letter-spacing:var(--letter-spacing-xs);letter-spacing:var(--letter-spacing-xs);margin:20px;font-weight:700;font-size:22px;}","p.jsx-567973405{margin:20px;text-transform:uppercase;font-size:14px;font-weight:500;-webkit-letter-spacing:var(--letter-spacing-md);-moz-letter-spacing:var(--letter-spacing-md);-ms-letter-spacing:var(--letter-spacing-md);letter-spacing:var(--letter-spacing-md);}"];v.__scopedHash="567973405";var m=v;var b=r(11);var g=r(36);var y=r(37);var w=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function _(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var j=function(e){_(t,e);function t(){x(this,t);return k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}w(t,[{key:"createTitle",value:function e(){var t=this.props,r=t.prefix,a=t.title;if("topics"===r)return"Quotes about "+a;if("authors"===r)return"Quotes by "+a;return a}},{key:"render",value:function e(){var t=this.props,r=t.link,a=t.as,n=t.imageUrl,o=t.imageSrcset,l=t.title,s=t.subtitle,c=t.body;return i.a.createElement(g["a"],{hasHover:true},i.a.createElement(d.a,{href:r,as:a,prefetch:true},i.a.createElement("a",{className:"jsx-"+m.__scopedHash},i.a.createElement(y["a"],{imgUrl:n,imgSrcset:o,alt:"Portrait of "+l,height:300}),i.a.createElement("div",{className:"jsx-"+m.__scopedHash+" overlay"},i.a.createElement("div",{className:"jsx-"+m.__scopedHash+" content"},i.a.createElement("h4",{className:"jsx-"+m.__scopedHash},l),i.a.createElement("div",{className:"jsx-"+m.__scopedHash+" divide"}),i.a.createElement("p",{className:"jsx-"+m.__scopedHash},s))))),i.a.createElement(b["a"],{buttons:["info","share"],title:this.createTitle(),desc:c,link:a.slice(1),imageUrl:n,info:c,useTitle:true}),i.a.createElement(f.a,{styleId:m.__scopedHash,css:m.__scoped}))}}]);return t}(i.a.PureComponent);var E=j;var C=r(13);var O=r(55);var P=r(2);var T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};var H=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function z(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var M=function(e){z(t,e);function t(){var e;var r,a,i;S(this,t);for(var l=arguments.length,u=Array(l),p=0;p<l;p++)u[p]=arguments[p];return i=(r=(a=W(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a),a.state={cellCount:0},a.setColumnCount=function(e){a.columnCount=Math.floor(e/a.columnWidth)},a.setContainerWidth=function(){a.containerWidth=Math.floor(a.columnWidth-a.totalPadding)},a.throttledScrollHandler=n()(function(e){return a.handleScroll(e)},500),a.cache=new s["c"]({defaultHeight:400,defaultWidth:300,fixedWidth:true}),a.reset=function(){a.cache.clearAll();a.cellPositioner&&a.resetCellPositioner();a.masonry&&a.masonry.clearCellPositions()},a.handleResize=function(){a.calculateFetchThreshold();a.setTotalPadding();a.reset()},a.resetCellPositioner=function(){a.cellPositioner.reset({columnCount:a.columnCount,columnWidth:a.columnWidth,spacer:0})},a.handleScroll=function(e){var t=e.clientHeight,r=e.scrollHeight,n=e.scrollTop;var o=r-(n+t);o<a.threshold&&a.props.loadMoreData()},a.cellRenderer=function(e){var t=e.index,r=e.key,n=e.parent,i=e.style;var l=a.props,u=l.data,p=l.prefix;var f=u[t],h=f.name,d=f.title,v=f.image,m=f.link,b=f.count,g=f.body;var y=v.url,w=v.srcset;var x=h||d;var k=Object(P["E"])(g);var _=T({},i,{width:a.columnWidth,padding:P["B"]+"vw"});var j=void 0;if(Object(c["i"])(t)){var C=2===t?"1498713185":"4230131383";j=o["createElement"](O["a"],{size:"xxl",containerWidth:a.containerWidth,adSlotId:C})}else j=o["createElement"](E,{title:x,imageUrl:y,imageSrcset:w,subtitle:b+" Quotes",as:"/"+p+"/"+m,link:"/"+p.slice(0,-1)+"?id="+m,body:k,prefix:p});return o["createElement"](s["b"],{cache:a.cache,index:t,key:r,parent:n},o["createElement"]("div",{style:_},j))},r),W(a,i)}H(t,[{key:"componentDidMount",value:function e(){this.setCellCount();this.calculateFetchThreshold();this.setTotalPadding()}},{key:"componentDidUpdate",value:function e(t){var r=t.selectionsQuery,a=t.data;if(r!==this.props.selectionsQuery){this.props.loadMoreData(true);this.reset()}a.length!==this.props.data.length&&this.setCellCount()}},{key:"setColumnWidth",value:function e(t){this.columnWidth=t<738?t:t<1088?.5*t:t<1493?.3333*t:.25*t}},{key:"setCellCount",value:function e(){var t=0;this.setState({cellCount:t+this.props.data.length})}},{key:"setTotalPadding",value:function e(){this.totalPadding=window.innerWidth*(P["C"]/100)}},{key:"setCellPositioner",value:function e(t){var r=t!==this.width;this.width=t;"undefined"===typeof this.cellPositioner?this.cellPositioner=Object(s["f"])({cellMeasurerCache:this.cache,columnCount:this.columnCount,columnWidth:this.columnWidth,spacer:0}):r&&this.resetCellPositioner()}},{key:"calculateFetchThreshold",value:function e(){this.threshold=10*window.innerHeight}},{key:"renderSpinner",value:function e(){return this.props.hasMoreData?o["createElement"](C["a"],{isDark:true}):null}},{key:"render",value:function e(){var t=this;if(!this.props.data.length)return null;return o["createElement"](s["e"],{serverHeight:1},function(e){var r=e.height,a=e.scrollTop;return o["createElement"](s["a"],{style:{width:"auto"},disableHeight:true,height:r,onResize:t.handleResize,scrollTop:a},function(e){var n=e.width;t.setColumnWidth(n);t.setColumnCount(n);t.setContainerWidth();t.setCellPositioner(n);return o["createElement"](o["Fragment"],null,o["createElement"](s["d"],{ref:function e(r){return t.masonry=r},cellCount:t.state.cellCount,cellMeasurerCache:t.cache,cellPositioner:t.cellPositioner,cellRenderer:t.cellRenderer,autoHeight:true,scrollTop:a,height:r,width:n,onScroll:t.throttledScrollHandler,role:null}),t.renderSpinner())})})}}]);return t}(o["Component"]);var R=function e(t){return{selectionsQuery:Object(u["c"])(t)}};var D=t["a"]=Object(l["connect"])(R)(M)}},[488]);return{page:e.default}});