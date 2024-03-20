"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[10],{55727:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=i(85893),c=i(11151);const t={sidebar_position:13},s="eebus",d={id:"reference/configuration/eebus",title:"eebus",description:"EEBUS Unterst\xfctzung ist noch im experimentellen Stadium. Es wird hier sicher zu dem einen oder anderen Problem kommen!",source:"@site/docs/reference/configuration/eebus.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/eebus",permalink:"/docs/reference/configuration/eebus",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/eebus.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"messaging",permalink:"/docs/reference/configuration/messaging"},next:{title:"mqtt",permalink:"/docs/reference/configuration/mqtt"}},a={},l=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",level:2},{value:"<code>certificate</code>",id:"certificate",level:3},{value:"<code>certificate.public</code>",id:"certificatepublic",level:3},{value:"<code>certificate.private</code>",id:"certificateprivate",level:3},{value:"Optionale Parameter",id:"optionale-parameter",level:2},{value:"<code>interfaces</code>",id:"interfaces",level:3},{value:"<code>shipid</code>",id:"shipid",level:3}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"eebus",children:(0,r.jsx)(n.code,{children:"eebus"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"EEBUS Unterst\xfctzung ist noch im experimentellen Stadium. Es wird hier sicher zu dem einen oder anderen Problem kommen!"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"eebus:\n  shipid: EVCC-1234567890abcdef\n  interfaces:\n    - eth0\n  certificate:\n    public: |\n      -----BEGIN CERTIFICATE-----\n      1234567890abcdef==\n      -----END CERTIFICATE-----\n    private: |\n      -----BEGIN EC PRIVATE KEY-----\n      1234567890abcdef\n      -----END EC PRIVATE KEY-----\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"erforderliche-parameter",children:"Erforderliche Parameter"}),"\n",(0,r.jsx)(n.h3,{id:"certificate",children:(0,r.jsx)(n.code,{children:"certificate"})}),"\n",(0,r.jsx)(n.p,{children:"Definiert das zu verwendende Zertifikat und dessen privaten Schl\xfcssel f\xfcr die vorgeschriebene HTTPS Verbindung."}),"\n",(0,r.jsxs)(n.p,{children:["Dieses kann \xfcber ",(0,r.jsx)(n.code,{children:"evcc eebus-cert"})," erstellt werden."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"certificate:\n  public: |\n    -----BEGIN CERTIFICATE-----\n    1234567890abcdef==\n    -----END CERTIFICATE-----\n  private: |\n    -----BEGIN EC PRIVATE KEY-----\n    1234567890abcdef\n    -----END EC PRIVATE KEY-----\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"certificatepublic",children:(0,r.jsx)(n.code,{children:"certificate.public"})}),"\n",(0,r.jsx)(n.p,{children:"Das \xf6ffentliche Zertifikat"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"public: |\n  -----BEGIN CERTIFICATE-----\n  1234567890abcdef==\n  -----END CERTIFICATE-----\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"certificateprivate",children:(0,r.jsx)(n.code,{children:"certificate.private"})}),"\n",(0,r.jsx)(n.p,{children:"Der private Schl\xfcssel des Zertifikats"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"private: |\n  -----BEGIN EC PRIVATE KEY-----\n  1234567890abcdef\n  -----END EC PRIVATE KEY-----\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"optionale-parameter",children:"Optionale Parameter"}),"\n",(0,r.jsx)(n.h3,{id:"interfaces",children:(0,r.jsx)(n.code,{children:"interfaces"})}),"\n",(0,r.jsx)(n.p,{children:"Definiert eine Liste von Netzwerkschnittstellen, \xfcber welche EEBUS kommunizieren soll. Standardm\xe4\xdfig werden alle Schnittstellen verwendet, dies kann jedoch zu Kommunikationsproblemen f\xfchren."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"interfaces:\n  - eth0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"shipid",children:(0,r.jsx)(n.code,{children:"shipid"})}),"\n",(0,r.jsx)(n.p,{children:"Hiermit kann die zu verwendende Ger\xe4te-ID (SKI) definiert werden."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"shipid: EVCC-1234567890abcdef\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>s});var r=i(67294);const c={},t=r.createContext(c);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);