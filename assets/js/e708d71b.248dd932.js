"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[6479],{95350:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=i(85893),r=i(11151);const o={sidebar_position:15},s="influx",c={id:"reference/configuration/influx",title:"influx",description:"Definiert die Influx Konfiguration, um Daten in Influx zu schreiben.",source:"@site/docs/reference/configuration/influx.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/influx",permalink:"/docs/reference/configuration/influx",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/influx.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"mqtt",permalink:"/docs/reference/configuration/mqtt"},next:{title:"sponsortoken",permalink:"/docs/reference/configuration/sponsortoken"}},l={},u=[{value:"InfluxDB v1.8.x",id:"influxdb-v18x",level:2},{value:"InfluxDB v2.x",id:"influxdb-v2x",level:2}];function a(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"influx",children:(0,t.jsx)(e.code,{children:"influx"})}),"\n",(0,t.jsx)(e.p,{children:"Definiert die Influx Konfiguration, um Daten in Influx zu schreiben."}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"influxdb-v18x",children:"InfluxDB v1.8.x"}),"\n",(0,t.jsx)(e.admonition,{type:"important",children:(0,t.jsx)(e.p,{children:"Erfordert mindestens InfluxDB 1.8.3"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Beispiel Influx v1"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"influx:\n  url: http://localhost:8086\n  database: evcc\n  # user:\n  # password:\n"})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"influxdb-v2x",children:"InfluxDB v2.x"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Beispiel Influx v2"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"influx:\n  url: http://localhost:8086\n  database: evcc # InfluxDB v2.x uses term `bucket` but for compatibility still named `database` here\n  token: 1234567890abcdef\n  org: home\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>s});var t=i(67294);const r={},o=t.createContext(r);function s(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);