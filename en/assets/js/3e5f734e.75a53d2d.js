"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[5875],{16908:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var s=n(85893),c=n(11151);const l={sidebar_position:5},d="API",r={id:"reference/api",title:"API",description:"evcc can interact with REST and MQTT APIs.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/api.md",sourceDirName:"reference",slug:"/reference/api",permalink:"/en/docs/reference/api",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Modbus",permalink:"/en/docs/reference/modbus"},next:{title:"Frequently Asked Questions",permalink:"/en/docs/faq"}},t={},o=[{value:"REST API",id:"rest-api",level:2},{value:"Vehicle",id:"vehicle",level:3},{value:"Loadpoint",id:"loadpoint",level:3},{value:"MQTT API",id:"mqtt-api",level:2}];function a(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"api",children:"API"}),"\n",(0,s.jsx)(i.p,{children:"evcc can interact with REST and MQTT APIs."}),"\n",(0,s.jsxs)(i.p,{children:["All API IDs (e.g., Loadpoint ID) start at ",(0,s.jsx)(i.code,{children:"1"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"rest-api",children:"REST API"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GET  /api/state"}),": evcc state (static configuration and dynamic state as JSON object)"]}),"\n",(0,s.jsxs)(i.li,{children:["(can also be used with filtering. e.g.: ",(0,s.jsx)(i.code,{children:'/api/state?jq=.statistics["30d"].avgPrice'}),")"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GET  /api/health"}),": evcc health check"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST /api/prioritysoc/<soc>"}),": battery priority soc in %"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST /api/buffersoc/<soc>"}),": battery buffer soc in %"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST /api/bufferstartsoc/<soc>"}),": battery buffer start soc in %"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST /api/residualpower/<power>"}),": grid residual power in W"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST /api/batterydischargecontrol/<status>"}),": enable/disable battery discharge control (true/false)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST /api/smartcostlimit/<cost>"}),': smart charging cost limit (previously known as "cheap" tariff)']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GET  /api/tariff/<type>"}),": list of prices (grid/feedin/planner)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GET  /api/sessions[?format=csv&lang=<lang>]"}),": charging sessions"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GET  /api/settings/telemetry"}),": telemetry enabled status"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST /api/settings/telemetry/<status>"}),": enable/disable telemetry (true/false)"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"vehicle",children:"Vehicle"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/vehicles/<name>/minsoc/<soc>"}),": minimum soc in %"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/vehicles/<name>/limitsoc/<soc>"}),": limit (target) soc in %"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/vehicles/<name>/plan/soc/<soc>/<time>"}),": soc in % / time in RFC3339 / ISO format **"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"DELETE /api/vehicles/<name>/plan/soc"}),": disable plan charging"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"loadpoint",children:"Loadpoint"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/mode/<mode>"}),": charge mode (off/pv/minpv/now)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/limitsoc/<soc>"}),": limit (target) soc in %"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/limitenergy/<energy>"}),": limit (target) energy in kWh"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/plan/energy/<energy>/<time>"}),": energy in kWh / target time in RFC3339 / ISO format **"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"DELETE /api/loadpoints/<id>/plan/energy"}),": disable plan charging"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GET    /api/loadpoints/<id>/plan"}),": charging plan details"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/phases/<phases>"}),": enabled phases (0=auto/1=1p/3=3p)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/mincurrent/<current>"}),": current minCurrent value in A"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/maxcurrent/<current>"}),": current maxCurrent value in A"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/enable/threshold/<threshold>"}),": threshold value in W"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/disable/threshold/<threshold>"}),": threshold value in W"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"POST   /api/loadpoints/<id>/vehicle/<name>"}),": set currently selected vehicle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"DELETE /api/loadpoints/<id>/vehicle"}),": remove vehicle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"PATCH  /api/loadpoints/<id>/vehicle"}),": start vehicle detection"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["Example: ",(0,s.jsx)(i.code,{children:"curl -X POST http://evcc:7070/api/loadpoints/1/mode/pv"})," to set the charging mode of the 1st Loadpoint to ",(0,s.jsx)(i.code,{children:"pv"}),"."]})}),"\n",(0,s.jsx)(i.h2,{id:"mqtt-api",children:"MQTT API"}),"\n",(0,s.jsx)(i.p,{children:"The MQTT API follows the REST API structure:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc"}),": root topic"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/status"}),": status (",(0,s.jsx)(i.code,{children:"online"}),"/",(0,s.jsx)(i.code,{children:"offline"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/updated"}),": timestamp of last update"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/site"}),": site dynamic state"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/site/prioritySoc"}),": battery priority SoC (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/site/bufferSoc"}),": battery buffer SoC (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/site/bufferStartSoc"}),": battery buffer start SoC (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/site/residualPower"}),": grid residual power (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/site/smartCostLimit"}),': smart charging cost limit (previously known as "cheap" tariff) (writable)']}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints"}),": number of available loadpoints"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>"}),": loadpoint dynamic state"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/mode"}),": loadpoint charge mode (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/minSoc"}),": loadpoint minimum SoC (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/targetSoc"}),": loadpoint target SoC in % (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/targetEnergy"}),": loadpoint target energy in kWh (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/targetTime"}),": loadpoint target time in RFC3339 / ISO format (writable) **"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/phases"}),": loadpoint enabled phases (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/minCurrent"}),": loadpoint current minCurrent value (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/maxCurrent"}),": loadpoint current maxCurrent value (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/enableThreshold"}),": loadpoint threshold value (writable)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"evcc/loadpoints/<id>/disableThreshold"}),": loadpoint threshold value (writable)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["To perform writable settings, add ",(0,s.jsx)(i.code,{children:"/set"})," at the end of the topic to which the new value will be sent.\nExample: ",(0,s.jsx)(i.code,{children:'mosquitto_pub -t "evcc/loadpoints/1/phases/set" -m "3"'})," to set the number of grid-side phases of the 1st Loadpoint to ",(0,s.jsx)(i.code,{children:"3"}),"."]})}),"\n",(0,s.jsxs)(i.admonition,{type:"info",children:[(0,s.jsxs)(i.p,{children:["** Time is in UTC in the format ",(0,s.jsx)(i.code,{children:"yyyy-mm-ddThh:mm:ssZ"})]}),(0,s.jsx)(i.p,{children:"Examples:"}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"2023-03-05T07:00:00Z"})," = 5th March 2023 at 7:00 AM UTC"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"2023-08-17T19:30:00Z"})," = 17th August 2023 at 7:30 PM UTC"]})]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{})})]})}function h(e={}){const{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>d});var s=n(67294);const c={},l=s.createContext(c);function d(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);