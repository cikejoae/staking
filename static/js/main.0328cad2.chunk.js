(this.webpackJsonpmbgsdapp=this.webpackJsonpmbgsdapp||[]).push([[0],{1029:function(e,t){},1037:function(e,t,n){"use strict";n.r(t);var a=n(18),s=n.n(a),r=n(490),i=n.n(r),c=(n(525),n(308)),o=n(1),l=n(9),p=n(5),u=n(6),d=n(13),y=n(14),f=(n(314),n(1044)),m=(n(244),n(315),n(187)),b=n.n(m),j=n(492),x=n(231),h=(n(493),n(243)),O="0xA690c89558a39709e1F0DdE0f8825a83d438fcE4",v="0xF8A04657471eB376738a2ffFE7dd739670ee138D",w="https://deep-index.moralis.io/api/v2",k="https://ipfs.io/ipfs/QmZnG7o3UTe35xq3ffJMtApKXnY2d2Ccxwjxny3HPvop1S/",T=(Object(h.a)("https://polygon-mainnet.g.alchemy.com/v2/es1OESDzahjFzl7I2jMj9F24Ea3vMo3u"),n(235)),g=n.n(T),N=n(242),F=n(236),M=n.n(F),S=n(164),I=n.n(S),C=n(2),A=null,B=null,P=null,E=Object(h.a)("https://eth-mainnet.g.alchemy.com/v2/W3CAcUSVv-z7zxqoiF3coq_6wUAXcsl8"),W={binancechainwallet:{package:!0},walletconnect:{package:N.a,options:{infuraId:"e3596064a2434b66b3497af106f27886"}},walletlink:{package:M.a,options:{appName:"MBG Staking dAPP",infuraId:"e3596064a2434b66b3497af106f27886",rpc:"",chainId:4,appLogoUrl:null,darkMode:!0}}},G=new g.a({network:"mainnet",theme:"dark",cacheProvider:!1,providerOptions:W}),R=function(e){Object(d.a)(n,e);var t=Object(y.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={balance:[],rawearn:[]},e}return Object(u.a)(n,[{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"handleNFT",value:function(e){this.setState({outvalue:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,n=this;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.polygonscan.com/api"+"?module=stats&action=tokensupply&contractaddress=".concat(O,"&apikey=").concat("JAR6HQQDTVZ3UQIHCUFHJ7MV2M5E6V2FFE")).then((function(e){n.setState({balance:e.data}),console.log(e.data)}));case 2:return t={"X-API-Key":"2VBV4vaCLiuGu6Vu7epXKlFItGe3jSPON8WV4CrXKYaNBEazEUrf1xwHxbrIo1oM",accept:"application/json"},e.next=5,b.a.get(w+"/nft/".concat(O,"/owners?chain=polygon&format=decimal"),{headers:t}).then((function(e){var t=e.data.result;n.setState({nftdata:t}),console.log(e.data)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.balance,this.state.outvalue;function e(){return t.apply(this,arguments)}function t(){return t=Object(l.a)(Object(o.a)().mark((function e(){var t,n,a,s,r,i,p,u,d,y,f,m;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=function(){return m=Object(l.a)(Object(o.a)().mark((function e(t){var n,a,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(c.a)(t),e.prev=1,n.s();case 3:if((a=n.n()).done){e.next=9;break}return s=a.value,e.next=7,d(s);case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n.e(e.t0);case 14:return e.prev=14,n.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])}))),m.apply(this,arguments)},f=function(e){return m.apply(this,arguments)},y=function(){return(y=Object(l.a)(Object(o.a)().mark((function e(t){var n,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:n=t.reduce((function(e,t){return e+t}),0),a=Number(n).toFixed(2),document.getElementById("earned").textContent=a;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},d=function(e){return y.apply(this,arguments)},u=function(){return new Promise((function(e){return setTimeout(e,300)}))},e.next=7,G.connect();case 7:return t=e.sent,P=new I.a(t),e.next=11,t.request({method:"eth_accounts"});case 11:return e.next=13,P.eth.getAccounts();case 13:return n=e.sent,A=n[0],document.getElementById("wallet-address").textContent=A,new P.eth.Contract(j,O),B=new P.eth.Contract(x,v),e.next=20,B.methods.tokensOfOwner(A).call();case 20:return a=e.sent,document.getElementById("yournfts").textContent=a,e.t0=Number,e.next=25,B.methods.balanceOf(A).call();case 25:return e.t1=e.sent,s=(0,e.t0)(e.t1),document.getElementById("stakedbalance").textContent=s,r=Array.from(a.map(Number)),i=r.filter(Number),p=[],i.forEach(function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.methods.earningInfo(A,[t]).call();case 2:n=e.sent,a=Array.from(n.map(Number)),console.log(a),a.forEach(function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n,a,s,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=String(t).split(",")[0],a=I.a.utils.fromWei(n),s=Number(a).toFixed(2),r=Number(s),console.log(r),p.push(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",f([p]));case 33:case"end":return e.stop()}}),e)}))),t.apply(this,arguments)}function n(){return(n=Object(l.a)(Object(o.a)().mark((function e(){var t,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.methods.tokensOfOwner(A).call();case 2:return t=e.sent,document.getElementById("yournfts").textContent=t,e.t0=Number,e.next=7,B.methods.balanceOf(A).call();case 7:e.t1=e.sent,n=(0,e.t0)(e.t1),document.getElementById("stakedbalance").textContent=n;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return a=Object(l.a)(Object(o.a)().mark((function e(){var t,n,a,s,r,i,p,u,d;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=function(){return d=Object(l.a)(Object(o.a)().mark((function e(t){var n,a,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(c.a)(t),e.prev=1,n.s();case 3:if((a=n.n()).done){e.next=9;break}return s=a.value,e.next=7,i(s);case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n.e(e.t0);case 14:return e.prev=14,n.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])}))),d.apply(this,arguments)},u=function(e){return d.apply(this,arguments)},p=function(){return(p=Object(l.a)(Object(o.a)().mark((function e(t){var n,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:n=t.reduce((function(e,t){return e+t}),0),a=Number(n).toFixed(2),document.getElementById("earned").textContent=a;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},i=function(e){return p.apply(this,arguments)},r=function(){return new Promise((function(e){return setTimeout(e,300)}))},e.next=7,B.methods.tokensOfOwner(A).call();case 7:return t=e.sent,n=Array.from(t.map(Number)),a=n.filter(Number),s=[],a.forEach(function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.methods.earningInfo(A,[t]).call();case 2:n=e.sent,Array.from(n.map(Number)).forEach(function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n,a,r,i;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=String(t).split(",")[0],a=I.a.utils.fromWei(n),r=Number(a).toFixed(2),i=Number(r),s.push(i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",u([s]));case 13:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function s(){return s=Object(l.a)(Object(o.a)().mark((function e(){var t,n,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.methods.tokensOfOwner(A).call();case 2:return t=e.sent,n=Array.from(t.map(Number)),a=n.filter(Number),e.next=7,E.eth.getMaxPriorityFeePerGas().then((function(e){E.eth.getBlock("pending").then((function(t){var n=Number(t.baseFeePerGas),s=Number(e),r=s+n;a.forEach(function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.methods.claim([t]).send({from:A,maxFeePerGas:r,maxPriorityFeePerGas:s});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}));case 7:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function r(){return r=Object(l.a)(Object(o.a)().mark((function e(){var t,n,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.methods.tokensOfOwner(A).call();case 2:return t=e.sent,n=Array.from(t.map(Number)),a=n.filter(Number),e.next=7,E.eth.getMaxPriorityFeePerGas().then((function(e){E.eth.getBlock("pending").then((function(t){var n=Number(t.baseFeePerGas),s=Number(e),r=s+n;a.forEach(function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.methods.unstake([t]).send({from:A,maxFeePerGas:r,maxPriorityFeePerGas:s});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}));case 7:case"end":return e.stop()}}),e)}))),r.apply(this,arguments)}return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsxs)("body",{children:[Object(C.jsx)("nav",{class:"py-2 bg-black border-bottom navbarglow",children:Object(C.jsxs)("div",{class:"container d-flex align-content-center flex-wrap",children:[" ",Object(C.jsx)("img",{src:"apotheosis.png",width:"7%"}),Object(C.jsxs)("ul",{class:"nav me-auto",children:[Object(C.jsx)("li",{class:"nav-item d-flex align-content-center flex-wrap",children:Object(C.jsx)("a",{href:"#",class:"nav-link link-light px-2 active","aria-current":"page",children:"Dashboard"})}),Object(C.jsx)("li",{class:"nav-item d-flex align-content-center flex-wrap",children:Object(C.jsx)("a",{href:"#",class:"nav-link link-light px-2",children:"List"})}),Object(C.jsx)("li",{class:"nav-item d-flex align-content-center flex-wrap",children:Object(C.jsx)("a",{href:"#",class:"nav-link link-light px-2",children:"NFTs"})}),Object(C.jsx)("li",{class:"nav-item d-flex align-content-center flex-wrap",children:Object(C.jsx)("a",{href:"https://osis.world",target:"_blank",rel:"noreferrer",class:"nav-link link-light px-2",children:"OSIS"})})]}),Object(C.jsxs)("ul",{class:"nav",children:[Object(C.jsx)("li",{class:"nav-item d-flex align-content-center flex-wrap",children:Object(C.jsx)("a",{href:"https://osis.world/login",target:"_blank",rel:"noreferrer",class:"nav-link link-light px-3",children:"GET OSIS"})}),Object(C.jsx)("input",{id:"connectbtn",type:"button",className:"connectbutton",onClick:e,style:{},value:"Connect Your Wallet"})]})]})}),Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"col, py-4",children:Object(C.jsx)("body",{className:"nftminter",children:Object(C.jsxs)("form",{children:[Object(C.jsxs)("div",{className:"row pt-1",children:[Object(C.jsx)("div",{children:Object(C.jsx)("h1",{className:"pt-1",style:{fontWeight:"30",color:"#ffffff",fontFamily:"Avenir LT Std"},children:"MetaBadge Staking Platform"})}),Object(C.jsx)("h6",{style:{fontWeight:"300",color:"#ffffff",fontFamily:"Avenir LT Std"},children:"Your Wallet Address"}),Object(C.jsx)("div",{className:"pb-1",id:"wallet-address",style:{color:"#4ac0e7",fontWeight:"600",textShadow:"1px 1px 1px black"},children:Object(C.jsx)("label",{htmlFor:"floatingInput",children:"Please Connect Your Wallet"})})]}),Object(C.jsx)("div",{})]})})})}),Object(C.jsx)("div",{className:"col",children:Object(C.jsx)("body",{className:"nftstaker border-1",children:Object(C.jsxs)("form",{style:{fontFamily:"Avenir LT Std"},children:[Object(C.jsx)("h2",{className:"pt-2",style:{fontFamily:"Avenir LT Std",borderRadius:"14px",fontWeight:"400",color:"#ffffff",fontSize:"25px"},children:"MBG Staking Vault "}),Object(C.jsx)("h6",{style:{fontWeight:"300",color:"#ffffff",fontFamily:"Avenir LT Std"},children:"First time staking?"}),Object(C.jsx)(f.a,{className:"btn",onClick:e,style:{backgroundColor:"#ffffff10",boxShadow:"1px 1px 5px #4ac0e7"},children:"Authorize Your Wallet"}),Object(C.jsxs)("div",{className:"row px-3 pt-1",children:[Object(C.jsx)("div",{className:"col-sm-4 col-center-block",children:Object(C.jsxs)("form",{class:"stakingrewards",style:{borderRadius:"25px",boxShadow:"1px 1px 15px #4ac0e7"},children:[Object(C.jsx)("h5",{style:{color:"#FFFFFF",fontWeight:"300"},children:"Your Vault Activity"}),Object(C.jsx)("h6",{style:{color:"#FFFFFF"},children:"Verify Staked Amount"}),Object(C.jsx)(f.a,{onClick:function(){return n.apply(this,arguments)},style:{backgroundColor:"#ffffff10",boxShadow:"1px 1px 5px #4ac0e7"},children:"Verify"}),Object(C.jsxs)("table",{className:"table mt-3 mb-5 px-3 table-dark",children:[Object(C.jsx)("tr",{children:Object(C.jsxs)("td",{style:{fontSize:"19px"},children:["Your Staked NFTs:",Object(C.jsx)("span",{style:{backgroundColor:"#ffffff00",fontSize:"21px",color:"#39FF14",fontWeight:"500",textShadow:"1px 1px 2px #000000"},id:"yournfts"})]})}),Object(C.jsx)("tr",{children:Object(C.jsxs)("td",{style:{fontSize:"19px"},children:["Total Staked NFTs:",Object(C.jsx)("span",{style:{backgroundColor:"#ffffff00",fontSize:"21px",color:"#39FF14",fontWeight:"500",textShadow:"1px 1px 2px #000000"},id:"stakedbalance"})]})}),Object(C.jsx)("tr",{children:Object(C.jsxs)("td",{style:{fontSize:"19px"},children:["Unstake All Staked NFTs ",Object(C.jsx)("br",{}),Object(C.jsx)(f.a,{onClick:function(){return r.apply(this,arguments)},style:{backgroundColor:"#ffffff10",boxShadow:"1px 1px 5px #4ac0e7"},className:"mb-3",children:"Unstake All"})]})})]})]})}),Object(C.jsx)("img",{className:"col-sm-3 col-center-block mb-5 mb-1 pb-1",src:"metabadges.png"}),Object(C.jsx)("div",{className:"col-sm-4 col-center-block",children:Object(C.jsxs)("form",{className:"stakingrewards",style:{borderRadius:"25px",boxShadow:"1px 1px 15px #4ac0e7",fontFamily:"Avenir LT Std"},children:[Object(C.jsx)("h5",{className:"pt-3",style:{color:"#FFFFFF",fontWeight:"300"},children:" Staking Rewards"}),Object(C.jsx)("div",{children:Object(C.jsx)("h1",{className:"pt-2",style:{fontWeight:"30",color:"#ffffff",fontFamily:"Avenir LT Std"},children:" "})}),Object(C.jsx)(f.a,{onClick:function(){return a.apply(this,arguments)},style:{backgroundColor:"#ffffff10",boxShadow:"1px 1px 5px #4ac0e7"},children:"Earned MBG Rewards"}),Object(C.jsx)("div",{children:Object(C.jsx)("h1",{className:"pt-2",style:{fontWeight:"30",color:"#ffffff",fontFamily:"Avenir LT Std"},children:" "})}),Object(C.jsx)("div",{id:"earned",style:{color:"#39FF14",marginTop:"5px",fontSize:"25px",fontWeight:"500",textShadow:"1px 1px 2px #000000"},children:Object(C.jsx)("p",{style:{fontSize:"20px"},children:"Earned Tokens"})}),Object(C.jsxs)("div",{className:"col12 mt-2",children:[Object(C.jsx)("div",{className:"pt-2",style:{color:"white"},children:"Claim Rewards"}),Object(C.jsx)("div",{children:Object(C.jsx)("h1",{className:"pt-2",style:{fontWeight:"30",color:"#ffffff",fontFamily:"Avenir LT Std"},children:" "})}),Object(C.jsx)(f.a,{onClick:function(){return s.apply(this,arguments)},style:{backgroundColor:"#ffffff10",boxShadow:"1px 1px 5px #4ac0e7"},className:"mb-4",children:"Claim"})]})]})})]}),Object(C.jsx)("div",{className:"row px-4 pt-2",children:Object(C.jsxs)("div",{class:"header",children:[Object(C.jsx)("div",{style:{fontSize:"25px",borderRadius:"14px",color:"#ffffff",fontWeight:"300"},children:"MBG NFT Staking Pool Active Rewards"}),Object(C.jsx)("h1",{}),Object(C.jsxs)("table",{style:{boxShadow:"1px 1px 15px #4ac0e7"},className:"table px-3 table-bordered table-dark",children:[Object(C.jsx)("thead",{className:"thead-light",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",children:"Collection"}),Object(C.jsx)("th",{scope:"col",children:"Rewards Per Day"}),Object(C.jsx)("th",{scope:"col",children:"Exchangeable Items"})]})}),Object(C.jsxs)("tbody",{children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Standard MetaBadge"}),Object(C.jsxs)("td",{class:"amount","data-test-id":"rewards-summary-ads",children:[Object(C.jsx)("span",{class:"amount",children:"2000"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"MBG"})]}),Object(C.jsxs)("td",{class:"exchange",children:[Object(C.jsx)("span",{class:"amount",children:"2"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"TBD"})]})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Rare MetaBadge"}),Object(C.jsxs)("td",{class:"amount","data-test-id":"rewards-summary-ac",children:[Object(C.jsx)("span",{class:"amount",children:"4000"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"MBG"})]}),Object(C.jsxs)("td",{class:"exchange",children:[Object(C.jsx)("span",{class:"amount",children:"10"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"TBD"})]})]}),Object(C.jsxs)("tr",{className:"stakegoldeffect",children:[Object(C.jsx)("td",{children:"Super Rare MetaBadge"}),Object(C.jsxs)("td",{class:"amount","data-test-id":"rewards-summary-one-time",children:[Object(C.jsx)("span",{class:"amount",children:"4000"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"MBG"})]}),Object(C.jsxs)("td",{class:"exchange",children:[Object(C.jsx)("span",{class:"amount",children:"TBD or "}),Object(C.jsx)("span",{class:"currency",children:"TBD"})]})]})]})]}),Object(C.jsxs)("div",{class:"header",children:[Object(C.jsx)("div",{style:{fontSize:"25px",borderRadius:"14px",color:"#ffffff",fontWeight:"300"},children:"MBG Token Stake Farms"}),Object(C.jsx)("h1",{}),Object(C.jsxs)("table",{className:"table table-bordered table-dark",style:{borderRadius:"14px",boxShadow:"1px 1px 15px #4ac0e7"},children:[Object(C.jsx)("thead",{className:"thead-light",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",children:"Farm Pools"}),Object(C.jsx)("th",{scope:"col",children:"Harvest Daily Earnings"})]})}),Object(C.jsx)("tbody",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Stake MBG to Earn MBG"}),Object(C.jsxs)("td",{class:"amount","data-test-id":"rewards-summary-ads",children:[Object(C.jsx)("span",{class:"amount",children:"0.01"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"Per MBG"})]})]})})]})]})]})})]})})})]}),Object(C.jsxs)("div",{className:"row nftportal mt-3",children:[Object(C.jsx)("div",{className:"col mt-4 ml-3",children:Object(C.jsx)("img",{src:"polygon.png",width:"60%"})}),Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)("h1",{className:"n2dtitlestyle mt-3",children:"Your NFT Portal"}),Object(C.jsx)(f.a,{onClick:function(){window.location.reload()},style:{backgroundColor:"#000000",boxShadow:"1px 1px 15px #4ac0e7"},children:"Refresh NFT Portal"})]}),Object(C.jsx)("div",{className:"col mt-3 mr-5",children:Object(C.jsx)("img",{src:"./ethereum.png",width:"60%"})})]})]})}}]),n}(a.Component),z=R,L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1046)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))},V=n(1045),D=n(76),U=null,Y=null,J=null,_="JwcyI3kFcZIx9M9Psom0b0d2ahdb9VxmSs80MnYU43bbwX803Jufh0XzqYKbXzyg",X={binancechainwallet:{package:!0},walletconnect:{package:N.a,options:{infuraId:"e3596064a2434b66b3497af106f27886"}},walletlink:{package:M.a,options:{appName:"MBG Staking dAPP",infuraId:"e3596064a2434b66b3497af106f27886",rpc:"",chainId:4,appLogoUrl:null,darkMode:!0}}},q=new g.a({network:"mainnet",theme:"dark",cacheProvider:!1,providerOptions:X});function H(){var e=Object(a.useState)([]),t=Object(D.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),i=Object(D.a)(r,2),c=i[0],p=i[1],u=Object(a.useState)("not-loaded"),d=Object(D.a)(u,2),y=d[0],m=d[1];function j(){return j=Object(l.a)(Object(o.a)().mark((function e(){var t,n,a,r,i,c,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.connect();case 2:return t=e.sent,J=new I.a(t),e.next=6,t.send("eth_requestAccounts");case 6:return e.next=8,J.eth.getAccounts();case 8:return n=e.sent,U=n[0],Y=new J.eth.Contract(x,v),a={"X-API-Key":_,accept:"application/json"},e.next=14,b.a.get(w+"/nft/".concat(O,"/owners?chain=polygon&format=decimal"),{headers:a}).then((function(e){return e.data.result}));case 14:return r=e.sent,e.next=17,Promise.all(r.map(function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={tokenId:t.token_id,holder:t.owner_of,wallet:U},e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 17:return i=e.sent,e.next=20,Y.methods.tokensOfOwner(U).call().then((function(e){return e}));case 20:return c=e.sent,e.next=23,Promise.all(c.map(function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={tokenId:t},e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 23:u=e.sent,s(i),p(u),console.log(i),m("loaded");case 28:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}return Object(a.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),"loaded"!==y||n.length?Object(C.jsx)("div",{className:"nftportal mb-4",children:Object(C.jsx)("div",{className:"container col-lg-11",children:Object(C.jsx)("div",{className:"row items px-3 pt-3",children:Object(C.jsxs)("div",{className:"ml-3 mr-3",style:{display:"inline-grid",gridTemplateColumns:"repeat(4, 5fr)",columnGap:"20px"},children:[n.map((function(e,t){if(-1!==e.wallet.toLowerCase().indexOf(e.holder)){var n=function(){var t=Object(l.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y.methods.stake([e.tokenId]).send({from:U});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:"card nft-card mt-3 mb-3",children:[Object(C.jsx)("div",{className:"image-over",children:Object(C.jsx)("img",{className:"card-img-top",src:k+e.tokenId+".png",alt:""})}),Object(C.jsx)("div",{className:"card-caption col-12 p-0",children:Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsxs)("h5",{className:"mb-0",children:["MetaBadge Collection NFT #",e.tokenId]}),Object(C.jsxs)("h5",{className:"mb-0 mt-2",children:["Status",Object(C.jsx)("p",{style:{color:"#39FF14",fontWeight:"bold",textShadow:"1px 1px 2px #000000"},children:"Ready to Stake"})]}),Object(C.jsxs)("div",{className:"card-bottom d-flex justify-content-between",children:[Object(C.jsx)("input",{type:"hidden",id:"stakeid",value:e.tokenId},t),Object(C.jsx)(f.a,{style:{marginLeft:"2px",backgroundColor:"#ffffff10"},onClick:n,children:"Stake it"})]})]})})]},t)}})),c.map((function(e,t){function n(){return(n=Object(l.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y.methods.unstake([e.tokenId]).send({from:U});case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"card stakedcard mt-3 mb-3",children:[Object(C.jsxs)("div",{className:"image-over",children:[Object(C.jsx)("img",{style:{position:"absolute",top:"0.05rem",width:"90px"},src:"stakeicon.png"}),Object(C.jsx)("img",{className:"card-img-top",src:k+e.tokenId+".png",alt:""})]}),Object(C.jsx)("div",{className:"card-caption col-12 p-0",children:Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsxs)("h5",{className:"mb-0",children:["MetaBadge Collection NFT #",e.tokenId]}),Object(C.jsxs)("h5",{className:"mb-0 mt-2",children:["Status",Object(C.jsx)("p",{style:{color:"#15F4EE",fontWeight:"bold",textShadow:"1px 1px 2px #000000"},children:"Currently Staked"})]}),Object(C.jsxs)("div",{className:"card-bottom d-flex justify-content-between",children:[Object(C.jsx)("input",{type:"hidden",id:"stakeid",value:e.tokenId},t),Object(C.jsx)(f.a,{style:{marginLeft:"2px",backgroundColor:"#ffffff10"},onClick:function(){return n.apply(this,arguments)},children:"Unstake it"})]})]})})]},t)})}))]})})})}):Object(C.jsx)("h1",{className:"text-3xl",children:"Wallet Not Connected"})}V.b,V.a,i.a.createRoot(document.getElementById("root")).render(Object(C.jsxs)(s.a.StrictMode,{children:[Object(C.jsx)(z,{}),Object(C.jsx)(H,{})]})),L()},231:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claimForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract MetaBadge","name":"_nft","type":"address"},{"internalType":"contract MetaBadgeCoins","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTUnstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"earningInfo","outputs":[{"internalType":"uint256[2]","name":"info","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vault","outputs":[{"internalType":"uint24","name":"tokenId","type":"uint24"},{"internalType":"uint48","name":"timestamp","type":"uint48"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"}]')},314:function(e,t,n){},492:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"operator","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},493:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"addController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"removeController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},525:function(e,t,n){},553:function(e,t){},555:function(e,t){},557:function(e,t){},561:function(e,t){},562:function(e,t){},585:function(e,t){},587:function(e,t){},601:function(e,t){},603:function(e,t){},630:function(e,t){},632:function(e,t){},649:function(e,t){},650:function(e,t){},717:function(e,t){},723:function(e,t){},724:function(e,t){},748:function(e,t){},755:function(e,t){},947:function(e,t){},991:function(e,t){},998:function(e,t){}},[[1037,1,2]]]);
//# sourceMappingURL=main.0328cad2.chunk.js.map