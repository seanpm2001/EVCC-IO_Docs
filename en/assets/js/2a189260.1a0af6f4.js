"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[9493],{37391:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>t});var r=s(85893),c=s(11151);const o={sidebar_position:10},i="log, levels",l={id:"reference/configuration/log",title:"log, levels",description:"log",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/log.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/log",permalink:"/en/docs/reference/configuration/log",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/log.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"interval",permalink:"/en/docs/reference/configuration/interval"},next:{title:"tariffs",permalink:"/en/docs/reference/configuration/tariffs"}},d={},t=[{value:"<code>log</code>",id:"log",level:2},{value:"<code>levels</code>",id:"levels",level:2}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"log-levels",children:(0,r.jsx)(n.code,{children:"log, levels"})}),"\n",(0,r.jsx)(n.h2,{id:"log",children:(0,r.jsx)(n.code,{children:"log"})}),"\n",(0,r.jsx)(n.p,{children:"Defines the level of detail for logging information to the console."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Possible values"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fatal"}),": Only messages of the ",(0,r.jsx)(n.code,{children:"fatal"})," category will be displayed. These are errors that prevent the system from functioning."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"error"}),": Only messages of the ",(0,r.jsx)(n.code,{children:"error"})," category will be displayed. There are very few of this type of message."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"warn"}),": Includes ",(0,r.jsx)(n.code,{children:"error"}),", additionally shows messages of the ",(0,r.jsx)(n.code,{children:"warn"})," category."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"info"}),": Includes ",(0,r.jsx)(n.code,{children:"warn"}),", additionally shows messages of the ",(0,r.jsx)(n.code,{children:"info"})," category."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"debug"}),": Includes ",(0,r.jsx)(n.code,{children:"info"}),", additionally shows messages of the ",(0,r.jsx)(n.code,{children:"debug"})," category. This is necessary for error analysis."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"trace"}),": Includes ",(0,r.jsx)(n.code,{children:"debug"}),", additionally shows messages of the ",(0,r.jsx)(n.code,{children:"trace"})," category. This is the most detailed category and can result in very large log data. In general, this is not usually needed!"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When running evcc in the console, the ",(0,r.jsx)(n.code,{children:"log"})," messages are simply directed to the standard output.",(0,r.jsx)(n.br,{}),"\n","If evcc is run as a Linux systemd service, messages can be tracked using ",(0,r.jsx)(n.code,{children:"sudo journalctl -fau evcc"}),", see ",(0,r.jsx)(n.a,{href:"/docs/faq#debugging",children:"Logfile zur Fehleranalyse"}),".",(0,r.jsx)(n.br,{}),"\n","In the case of a Docker installation, you can view the messages using ",(0,r.jsx)(n.code,{children:"docker logs"}),", see ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/config/containers/logging/",children:"Docker Documentation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"log: error\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"levels",children:(0,r.jsx)(n.code,{children:"levels"})}),"\n",(0,r.jsx)(n.p,{children:"Allows configuring different logging levels for various components of evcc."}),"\n",(0,r.jsx)(n.p,{children:"Defines the level of detail for logging for different evcc components."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Possible components"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"site"}),": The central evcc component (control, calculations, ...)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lp-X"}),": The respective charging point, where ",(0,r.jsx)(n.code,{children:"X"})," is numbered according to the order of ",(0,r.jsx)(n.a,{href:"loadpoints",children:(0,r.jsx)(n.code,{children:"loadpoints"})})," configuration (charging points), starting at ",(0,r.jsx)(n.code,{children:"1"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sma"}),": The SMA HEMS component if SMA Sunny Home Manager 2.0 is integrated using ",(0,r.jsx)(n.a,{href:"hems",children:(0,r.jsx)(n.code,{children:"hems"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"vehicle"})}),": Each ",(0,r.jsx)(n.a,{href:"vehicles",children:(0,r.jsx)(n.code,{children:"vehicle"})})," (vehicle), where you must specify the corresponding value of the ",(0,r.jsx)(n.a,{href:"vehicles#type",children:(0,r.jsx)(n.code,{children:"type"})})," parameter (or template)."]}),"\n",(0,r.jsxs)(n.li,{children:["Additionally, depending on the use case, additional components can be specified (e.g. ",(0,r.jsx)(n.code,{children:"cache"}),", ",(0,r.jsx)(n.code,{children:"db"}),", ",(0,r.jsx)(n.code,{children:"influx"}),", ",(0,r.jsx)(n.code,{children:"mqtt"}),", ...)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Possible values for each component"}),": Identical to the values of ",(0,r.jsx)(n.a,{href:"#log",children:(0,r.jsx)(n.code,{children:"log"})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"levels:\n  site: debug\n  lp-1: debug\n  lp-2: debug\n  tesla: trace\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var r=s(67294);const c={},o=r.createContext(c);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);