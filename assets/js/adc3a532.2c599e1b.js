"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[6487],{78493:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>v,contentTitle:()=>k,default:()=>Z,frontMatter:()=>x,metadata:()=>j,toc:()=>w});var s=i(85893),r=i(11151),t=i(38464),a=i(24054),d=i(55155),l=i(58628),c=i(70028),u=i(13138),h=i(34852),o=i(42951),g=i(6738),b=i(33485),m=i(74694),p=i(30729),f=i(66436);const x={title:"Feature Highlights 10/2023",authors:["naltatis"],tags:["release"],hide_table_of_contents:!1},k=void 0,j={permalink:"/blog/2023/10/05/feature-highlights-10-2023",editUrl:"https://github.com/evcc-io/docs/tree/main/blog/2023-10-05/feature-highlights-10-2023.mdx",source:"@site/blog/2023-10-05/feature-highlights-10-2023.mdx",title:"Feature Highlights 10/2023",description:"Seit dem letzten Blog-Artikel hat sich einiges getan. Wir haben viele neue Funktionen hinzugef\xfcgt und einige Fehler behoben. In diesem Artikel werden wir ein paar der neuen Funktionen hervorheben.",date:"2023-10-05T00:00:00.000Z",formattedDate:"5. Oktober 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:5.47,hasTruncateMarker:!1,authors:[{name:"Michael Geers",title:"Core-Team, UI",url:"https://github.com/naltatis",imageURL:"https://github.com/naltatis.png",key:"naltatis"}],frontMatter:{title:"Feature Highlights 10/2023",authors:["naltatis"],tags:["release"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"v0.124 - Neue Tesla Integration",permalink:"/blog/2024/02/01/v0.124-new-tesla-api"},nextItem:{title:"evcc auf dem 19. Linux Infotag",permalink:"/blog/2023/05/17/linux-infotag-talk"}},v={authorsImageUrls:[void 0]},w=[{value:"Visualisierung Ladeplanung",id:"visualisierung-ladeplanung",level:2},{value:"Mindestladung \xfcber UI einstellbar",id:"mindestladung-\xfcber-ui-einstellbar",level:2},{value:"Smartes Netzladen",id:"smartes-netzladen",level:2},{value:"Batterieeinstellungen",id:"batterieeinstellungen",level:2},{value:"% Sonne, Preis, CO\u2082 pro Ladevorgang",id:"-sonne-preis-co-pro-ladevorgang",level:2},{value:"Neue Berechnung Sonnenanteil",id:"neue-berechnung-sonnenanteil",level:2},{value:"\xdcbersicht Ladevorg\xe4nge",id:"\xfcbersicht-ladevorg\xe4nge",level:2},{value:"Priorisierung von Ladepunkten und Fahrzeugen",id:"priorisierung-von-ladepunkten-und-fahrzeugen",level:2},{value:"Ausblick",id:"ausblick",level:2},{value:"Weitere neue Funktionen",id:"weitere-neue-funktionen",level:2}];function z(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Seit dem letzten Blog-Artikel hat sich einiges getan. Wir haben viele neue Funktionen hinzugef\xfcgt und einige Fehler behoben. In diesem Artikel werden wir ein paar der neuen Funktionen hervorheben."}),"\n",(0,s.jsx)(n.h2,{id:"visualisierung-ladeplanung",children:"Visualisierung Ladeplanung"}),"\n",(0,s.jsx)(n.p,{children:"Die Ladeplanung gibt es bei evcc ja schon etwas l\xe4nger.\nDu gibst an, wann dein Fahrzeug wie voll sein soll und evcc sucht die besten Zeitr\xe4ume zum Laden.\nSeit einigen Releases ist der Algorithmus keine Blackbox, da wir das Planungsergebnis grafisch darstellen."}),"\n",(0,s.jsx)(t.Z,{src:l.Z,poster:c.Z}),"\n",(0,s.jsx)(n.p,{children:"Zur Funktionsweise des Algorithmus:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\xdcbersch\xfcssige Sonnenenergie wird priorisiert"}),"\n",(0,s.jsxs)(n.li,{children:["Zeiten mit g\xfcnstigem Netzstrom (wenn ",(0,s.jsx)(n.a,{href:"/docs/reference/configuration/tariffs/#type-awattar",children:"dynamischer Stromtarif"})," existiert)"]}),"\n",(0,s.jsxs)(n.li,{children:["Zeiten mit sauberem Netzstrom (wenn ",(0,s.jsx)(n.a,{href:"/docs/reference/configuration/tariffs/#co2",children:"CO\u2082-Schnittstelle"})," konfiguriert ist)"]}),"\n",(0,s.jsx)(n.li,{children:"Zeitfenster kurz vor Abfahrt"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Ausblick:"})," Aktuell experimentieren wir mit PV-Prognosedaten von ",(0,s.jsx)(n.a,{href:"https://solcast.com/",children:"Solcast"}),".\nDadurch kann der Algorithmus noch bessere Entscheidungen treffen.\nLiegt das Ladeziel bspw. am Tag, kann es sinnvoll sein, das Fahrzeug nicht komplett mit g\xfcnstigem Nachstrom zu laden, sondern Platz f\xfcr \xdcberschussenergie am Tag zu lassen."]}),"\n",(0,s.jsx)(n.h2,{id:"mindestladung-\xfcber-ui-einstellbar",children:"Mindestladung \xfcber UI einstellbar"}),"\n",(0,s.jsx)(n.p,{children:"Die Mindestladung-Funktion existiert bei evcc schon seit Ewigkeiten.\nSie ist hilfreich, wenn du mal mit wenigen Prozenten nach Hause kommst und sichergehen willst, dass du immer genug Reichweite f\xfcr bspw. ein unerwartetes Ereignis hast."}),"\n",(0,s.jsxs)(n.p,{children:["Bislang konnte sie aber nur \xfcber die Konfigurationsdatei oder per API eingestellt werden.\nInzwischen geht das auch \xfcber die UI unter ",(0,s.jsx)(n.strong,{children:"Plan"})," > ",(0,s.jsx)(n.strong,{children:"Ankunft"})," > ",(0,s.jsx)(n.strong,{children:"Min. Ladung %"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Die Einstellungen werden pro Fahrzeug gespeichert und bleiben auch nach einem Neustart oder Update erhalten."}),"\n",(0,s.jsx)(t.Z,{src:b.Z,poster:m.Z}),"\n",(0,s.jsx)(n.h2,{id:"smartes-netzladen",children:"Smartes Netzladen"}),"\n",(0,s.jsxs)(n.p,{children:["Reicht der eigene PV-\xdcberschuss mal nicht aus, kannst du auch Netzstrom nutzen, wenn er besonders g\xfcnstig oder sauber ist.\nKlickst du im Energieflussdiagramm auf den Netzstrompreis bzw. die CO\u2082-Emissionen, \xf6ffnet sich der Dialog ",(0,s.jsx)(n.strong,{children:"Smartes Netzladen"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Dort kannst du einen Schwellwert f\xfcr den Preis bzw. die CO\u2082-Emissionen einstellen.\nWird dieser Wert unterschritten, wechselt evcc bei allen Ladepunkten im PV-Modus zeitweise auf schnelles Laden."}),"\n",(0,s.jsx)(t.Z,{src:o.Z,poster:g.Z}),"\n",(0,s.jsx)(n.p,{children:"Voraussetzung f\xfcr diese Funktion ist nat\xfcrlich, dass du entweder einen dynamischen Strompreis oder eine CO\u2082-Schnittstelle konfiguriert hast."}),"\n",(0,s.jsxs)(n.p,{children:["Eine weitere kleine Neuerung ist auch, dass du bei den meisten dynamischen Strompreisen nun auch die M\xf6glichkeit hast auf die Preiswerte der API um Angaben um ",(0,s.jsx)(n.strong,{children:"prozentuale bzw. feste Abgaben"})," zu korrigieren (",(0,s.jsx)(n.code,{children:"charges"})," / ",(0,s.jsx)(n.code,{children:"tax"}),").\nTibber und Octopus Energy (UK) liefern bereits Werte inkl. Abgaben.\nBei Awattar, Nordpool Estonia und Energinet kann man diese nun erg\xe4nzen."]}),"\n",(0,s.jsx)(n.p,{children:"\xdcbrigens: Falls du einen dynamischen Stromtarif hast, der noch nicht unterst\xfctzt ist, aber eine Schnittstelle bietet, dann mach gerne einen GitHub Issue dazu auf."}),"\n",(0,s.jsx)(n.h2,{id:"batterieeinstellungen",children:"Batterieeinstellungen"}),"\n",(0,s.jsxs)(n.p,{children:["Ein gro\xdfer Vorteil den evcc gegen\xfcber anderen \xdcberschussladeregelungen hat, ist die Ber\xfccksichtigung des Hausakkus.\n\xdcber den Konfigurationswert ",(0,s.jsx)(n.a,{href:"/docs/reference/configuration/site/#prioritysoc",children:(0,s.jsx)(n.code,{children:"prioritySoc"})})," kann geregelt werden, ob \xfcbersch\xfcssige Sonnenenergie ",(0,s.jsx)(n.strong,{children:"zuerst in den Hausakku oder das Fahrzeug"})," geladen werden soll."]}),"\n",(0,s.jsxs)(n.p,{children:["Generell versucht evcc im PV-Modus das Umlanden von Hausakku in Fahrzeugakku zu verhindern, um unn\xf6tige Wechselverluste zu vermeiden.\nMit dem Wert ",(0,s.jsx)(n.a,{href:"/docs/reference/configuration/site/#buffersoc",children:(0,s.jsx)(n.code,{children:"bufferSoc"})})," kannst du jedoch bewusst ",(0,s.jsx)(n.strong,{children:"einen Anteil des Hausakkus zur Ladeunterst\xfctzung"})," freigeben."]}),"\n",(0,s.jsxs)(n.p,{children:["Zudem kannst du festlegen, dass der Ladevorgang ",(0,s.jsx)(n.strong,{children:"automatisch startet"}),", sobald der Akku einen bestimmten Ladestand \xfcberschritten wurde (",(0,s.jsx)(n.a,{href:"/docs/reference/configuration/site/#bufferstartsoc",children:(0,s.jsx)(n.code,{children:"bufferStartSoc"})}),").\nDie Autoladung startet dann, auch wenn die Sonne nicht scheint."]}),"\n",(0,s.jsx)(t.Z,{src:a.Z,poster:d.Z}),"\n",(0,s.jsx)(n.h2,{id:"-sonne-preis-co-pro-ladevorgang",children:"% Sonne, Preis, CO\u2082 pro Ladevorgang"}),"\n",(0,s.jsx)(n.p,{children:"Auf f\xfcr die Freunde der Datenanalyse gibt es eine neue Funktion.\nWir erfassen nun den Anteil an eigener Sonnenenergie (in %), den Preis (gesamt und pro kWh), die Ladedauer und die durchschnittlichen CO\u2082-Emissionen pro Ladevorgang.\nZwischen diesen Werten kannst du direkt am Ladevorgang wechseln."}),"\n",(0,s.jsx)(t.Z,{src:p.Z,poster:f.Z}),"\n",(0,s.jsx)(n.h2,{id:"neue-berechnung-sonnenanteil",children:"Neue Berechnung Sonnenanteil"}),"\n",(0,s.jsx)(n.p,{children:"Falls ihr festgestellt habt, dass der Anteil an Sonnenenergie seit einer der letzten Versionen leicht gesunken ist, dann liegt das an unserer neuen Berechnung.\nBislang hat evcc das Verh\xe4ltnis von Netz- und Eigenenergie immer gleichm\xe4\xdfig auf Hausverbrauch und die Ladevorg\xe4nge aufgeteilt."}),"\n",(0,s.jsxs)(n.p,{children:["Wir haben jetzt auf ein neues Modell umgestellt, bei dem der Hausverbrauch zuerst den gr\xfcnen Strom bekommt und der verbleibende Mix an die Ladevorg\xe4nge geht.\nDanke an ",(0,s.jsx)(n.a,{href:"https://github.com/MarkusGH",children:"@MarkusGH"})," f\xfcr die Umsetzung.\nMehr Details zu dem Modell findet ihr ",(0,s.jsx)(n.a,{href:"/docs/faq#ersparnisberechnung",children:"in der Dokumentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Neue Berechnung",src:i(62432).Z+"",width:"1928",height:"868"})}),"\n",(0,s.jsx)(n.h2,{id:"\xfcbersicht-ladevorg\xe4nge",children:"\xdcbersicht Ladevorg\xe4nge"}),"\n",(0,s.jsxs)(n.p,{children:["Die neuen Werte haben nat\xfcrlich auch Einzug in die \xdcbersicht der Ladevorg\xe4nge gehalten.\nJe nach Konfiguration sind hier jetzt auch Preise und CO\u2082-Emissionen zu sehen.\nZudem haben wir die Darstellung deutlich \xfcberarbeitet und eine ",(0,s.jsx)(n.strong,{children:"kompakte Tabellendarstellung auf Monatsbasis"})," gew\xe4hlt.\nEs kann ",(0,s.jsx)(n.strong,{children:"nach Ladepunkt und Fahrzeug gefiltert"})," werden."]}),"\n",(0,s.jsx)(n.p,{children:"Wer hier noch mehr Flexibilit\xe4t braucht, kann nat\xfcrlich auch auf den CSV-Export zur\xfcckgreifen oder sich die Rohdaten gleich per InfluxDB oder MQTT abholen."}),"\n",(0,s.jsx)(t.Z,{src:u.Z,poster:h.Z}),"\n",(0,s.jsx)(n.h2,{id:"priorisierung-von-ladepunkten-und-fahrzeugen",children:"Priorisierung von Ladepunkten und Fahrzeugen"}),"\n",(0,s.jsxs)(n.p,{children:["Hast du mehrere Ladepunkte kannst du mit der ",(0,s.jsx)(n.a,{href:"/docs/reference/configuration/loadpoints/#priority",children:(0,s.jsx)(n.code,{children:"priority"})})," Einstellung festlegen, welcher bevorzugt werden soll.\nDie Priorisierung kannst du auch vom erkannten Fahrzeug abh\xe4ngig machen oder per API steuern.\nEine Konfiguration \xfcber die UI gibt es aktuell noch nicht."]}),"\n",(0,s.jsxs)(n.p,{children:["Die Priorisierungsfunktion ist auch hilfreich, wenn du evcc bspw. zum Steuern weiterer Verbraucher nutzt.\nSo kannst du bspw. einen ",(0,s.jsx)(n.a,{href:"https://github.com/evcc-io/evcc/pull/9393",children:"\xfcber die Plugin-Schnittstelle angebundenen Heizstab oder eine W\xe4rmepumpe"})," so steuern, dass sie nur l\xe4uft, wenn das Auto gerade nicht (genug) l\xe4dt."]}),"\n",(0,s.jsx)(n.h2,{id:"ausblick",children:"Ausblick"}),"\n",(0,s.jsxs)(n.p,{children:["Unser ",(0,s.jsx)(n.a,{href:"https://github.com/evcc-io/evcc/issues?q=is%3Aopen+is%3Aissue+label%3Abacklog",children:"Backlog"})," ist gut gef\xfcllt.\nDies sind die n\xe4chsten gro\xdfen Themen, die wir angehen wollen:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Config UI:"})," Hier sind inzwischen alle Vorbedingungen erf\xfcllt.\nAktuell k\xf6nnen im \ud83e\uddea Experimental Modus schon Fahrzeuge angelegt werden und der Sprung zur Netz-, PV- oder Batteriekonfiguration ist nicht mehr weit.\nHier ist immer noch viel zu tun, aber das Licht am Ende des Tunnels ist sichtbar."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Bessere Planung:"})," Wie oben schon erw\xe4hnt arbeiten wir daran gute ",(0,s.jsx)(n.strong,{children:"PV-Prognosen"})," in den Planungsalgorithmus und die UI zu integrieren.\nAu\xdferdem haben wir inzwischen ein Konzept f\xfcr die Unterst\xfctzung ",(0,s.jsx)(n.strong,{children:"mehrere Ladepl\xe4ne"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Modus-\xdcberarbeitung:"})," evcc ist als Anwendung zur PV-\xdcberschussladung gestartet.\nInzwischen spielt auch das Zusammenspiel mit dem Hausakku eine gro\xdfe Rolle.\nAuch das Thema ",(0,s.jsx)(n.strong,{children:"netzdienliches Laden"})," auf Basis von dynamischen Stromtarifen oder CO\u2082-Emissionen nimmt immer mehr Fahrt auf.\nDaher werden wir unsere Lademodi (aktuell PV und Min+PV) \xfcberarbeiten und hier mehr Flexibilit\xe4t schaffen."]}),"\n",(0,s.jsx)(n.h2,{id:"weitere-neue-funktionen",children:"Weitere neue Funktionen"}),"\n",(0,s.jsx)(n.p,{children:"Das war ein Durchflug auf hoher Ebene und aus Endnutzersicht.\nUnter der Haube wird nat\xfcrlich auch flei\xdfig gewerkelt."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud83d\udd0c Unterst\xfctzung weiterer Wallboxen von 22 neuen Herstellern"}),"\n",(0,s.jsx)(n.li,{children:"\ud83c\udf1e\ud83d\udd0b\ud83d\udcdf Unterst\xfctzung von Z\xe4hler-, PV- und Batteriesystemen von 36 neuen Herstellern"}),"\n",(0,s.jsxs)(n.li,{children:["\ud83c\uddec\ud83c\udde7 Webseite und Dokumentation in englischer Sprache. Thanks ",(0,s.jsx)(n.a,{href:"https://github.com/duckfullstop",children:"duckfullstop"})," & ",(0,s.jsx)(n.a,{href:"https://github.com/carygravel",children:"carygravel"})," \ud83d\udc9a"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["F\xfcr noch mehr Details k\xf6nnt ihr auch gerne die ",(0,s.jsx)(n.a,{href:"https://github.com/evcc-io/evcc/releases",children:"Release Notes"})," der letzten 49(!) Releases seit Jahresbeginn durchgehen."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Danke f\xfcr eure Unterst\xfctzung!"}),(0,s.jsx)("br",{}),"\nevcc Core Team",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/andig",children:"@andig"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/premultiply",children:"@premultiply"})," und ",(0,s.jsx)(n.a,{href:"https://github.com/naltatis",children:"@naltatis"})]})]})}function Z(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(z,{...e})}):z(e)}},38464:(e,n,i)=>{i.d(n,{Z:()=>r});i(67294);var s=i(85893);const r=e=>{let{src:n,poster:i}=e;return(0,s.jsxs)("video",{loop:!0,muted:!0,controls:!0,style:{maxWidth:"100%",height:"auto",marginBottom:"var(--ifm-leading)"},poster:i,children:[(0,s.jsx)("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}},55155:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/batterysettings-df62866c226b380cb997036afde2fb68.webp"},70028:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/chargingplan-f3ab421cc5a737dfdcc6aea877c5e8bc.webp"},34852:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/chargingsessions-d2b069b8980b2fd51f678eda71709d85.webp"},6738:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dynamicprices-9b8ba0fd09a732c824bb19a1a5b6f236.webp"},74694:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/minsoc-84be2cc96df686eda02acd5c5abfe5cb.webp"},66436:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/sessionvalues-717da050469e26e58a4e252d704dd491.webp"},24054:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/medias/batterysettings-b06e36ec0fb00a0e7b08dfcad3480e7b.mp4"},58628:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/medias/chargingplan-d4ac0eac55f273fc1b8c349828b975b4.mp4"},13138:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/medias/chargingsessions-6bda70e3caf07ca0c2912d386671b3b3.mp4"},42951:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/medias/dynamicprices-17a8ec10c6f9ee0ffa661810d640ac24.mp4"},33485:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/medias/minsoc-d9cd5ec6484eee073f9653bac91c45e1.mp4"},30729:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/medias/sessionvalues-b2762aa6b2596ab3820d6d2f8cd9c343.mp4"},62432:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/calculation-cab859f24eb74a08e4f6c05e37dba652.webp"},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>a});var s=i(67294);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);