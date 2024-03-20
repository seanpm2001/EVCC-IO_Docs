"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[9106],{56203:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>t});var s=r(85893),i=r(11151);const d={sidebar_position:5},c="meters",a={id:"reference/configuration/meters",title:"meters",description:"Meters (current measurement devices) is a list of devices in the house that can measure power and energy consumption, PV generation, or house battery usage. A meter defines a point of energy measurement and can be a physical device (e.g., a meter at the grid connection point), a PV inverter (AC or DC in the case of hybrid inverters), or a battery inverter.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/meters.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/meters",permalink:"/en/docs/reference/configuration/meters",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/meters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"chargers",permalink:"/en/docs/reference/configuration/chargers"},next:{title:"vehicles",permalink:"/en/docs/reference/configuration/vehicles"}},l={},t=[{value:"Required Parameters",id:"required-parameters",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"Supported Types",id:"supported-types",level:2},{value:"<code>movingaverage</code>",id:"movingaverage",level:3},{value:"<code>modbus</code>",id:"modbus",level:3},{value:"Required Parameters",id:"required-parameters-1",level:4},{value:"<code>power</code>",id:"power",level:5},{value:"<code>energy</code>",id:"energy",level:5},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"<code>soc</code>",id:"soc",level:5},{value:"<code>lgess</code>",id:"lgess",level:3},{value:"Required Parameters",id:"required-parameters-2",level:4},{value:"<code>usage</code>",id:"usage",level:5},{value:"<code>uri</code>",id:"uri",level:5},{value:"<code>password</code>",id:"password",level:5},{value:"<code>openwb</code>",id:"openwb",level:3},{value:"Required Parameters",id:"required-parameters-3",level:4},{value:"<code>usage</code>",id:"usage-1",level:5},{value:"<code>broker</code>",id:"broker",level:5},{value:"<code>sma</code>",id:"sma",level:3},{value:"Required Parameters",id:"required-parameters-4",level:4},{value:"<code>uri</code>",id:"uri-1",level:5},{value:"<code>serial</code>",id:"serial",level:5},{value:"Optional Parameters",id:"optional-parameters-1",level:4},{value:"<code>interface</code>",id:"interface",level:5},{value:"<code>tesla</code>",id:"tesla",level:3},{value:"Required Parameters",id:"required-parameters-5",level:4},{value:"<code>usage</code>",id:"usage-2",level:5},{value:"<code>uri</code>",id:"uri-2",level:5},{value:"<code>password</code>",id:"password-1",level:5},{value:"<code>custom</code>",id:"custom",level:3},{value:"Required Parameters",id:"required-parameters-6",level:4},{value:"<code>power</code>",id:"power-1",level:5},{value:"Optional Parameters",id:"optional-parameters-2",level:4},{value:"<code>energy</code>",id:"energy-1",level:5},{value:"<code>soc</code>",id:"soc-1",level:4},{value:"<code>capacity</code>",id:"capacity",level:4},{value:"<code>currents</code>",id:"currents",level:4}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"meters",children:(0,s.jsx)(n.code,{children:"meters"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Meters"})," (current measurement devices) is a list of devices in the house that can measure power and energy consumption, PV generation, or house battery usage. A ",(0,s.jsx)(n.code,{children:"meter"})," defines a point of energy measurement and can be a physical device (e.g., a meter at the grid connection point), a PV inverter (AC or DC in the case of hybrid inverters), or a battery inverter."]}),"\n",(0,s.jsxs)(n.p,{children:["Chargers may have an integrated meter or it can be externally connected. If a charger has an internal current measurement device, no entry for it needs to be created in ",(0,s.jsx)(n.code,{children:"meters"}),". If the charger doesn't have such a meter, evcc will use the meter configured here and assigned to the charger under ",(0,s.jsx)(n.a,{href:"loadpoints#meter",children:(0,s.jsx)(n.code,{children:"meters"})})," in the charging point configuration, or assume that the charging power set is actually being used."]}),"\n",(0,s.jsx)(n.p,{children:"evcc uses positive (+) values for incoming currents (grid consumption, PV generation, house battery discharge) and negative (-) values for outgoing currents (grid feed-in, PV inverter standby consumption, or house battery charging). Any other current consumption, including from the charger, is always a positive (+) value."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"meters"})," configuration is a list of different available devices."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"meters:\n  - name: grid\n    type: ...\n  - name: pv\n    type: ...\n  - name: battery\n    type: ...\n  - name: charge\n    type: ...\n  - name: aux\n    type: ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Configurations for known devices can be found under ",(0,s.jsx)(n.a,{href:"/docs/devices/meters",children:"Devices - House Installation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Below, the various parameters are explained."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsxs)(n.p,{children:["A short designation of the meter. The value is used when referencing the device in the configuration of the ",(0,s.jsx)(n.a,{href:"site",children:"site"})," or the ",(0,s.jsx)(n.a,{href:"loadpoints#meter",children:"charger"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"name: charger1\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"type",children:(0,s.jsx)(n.code,{children:"type"})}),"\n",(0,s.jsxs)(n.p,{children:["This is the evcc-specific meter type that allows communication with the device. The appropriate type for known devices can be found under ",(0,s.jsx)(n.a,{href:"/docs/devices/meters",children:"Devices - House Installation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"type: modbus\n"})}),"\n",(0,s.jsx)(n.p,{children:"The various possible types and their additional parameters are documented below:"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"supported-types",children:"Supported Types"}),"\n",(0,s.jsx)(n.h3,{id:"movingaverage",children:(0,s.jsx)(n.code,{children:"movingaverage"})}),"\n",(0,s.jsxs)(n.p,{children:["This meter type can smooth fluctuating meter values. It can be used in all meter applications (",(0,s.jsx)(n.code,{children:"usage"}),"). The ",(0,s.jsx)(n.code,{children:"decay"})," parameter indicates the percentage of the new value to be included in the calculation."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"meters:\n- name: grid\n  type: movingaverage\n  decay: 0.1\n  meter:\n    type: template\n    template: solarlog\n    usage: grid\n    host: 192.0.2.2\n    ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, 10% of the new value is included. After 10 cycles, the oldest value is removed from the calculation. The duration of this process depends on the ",(0,s.jsx)(n.code,{children:"interval"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"modbus",children:(0,s.jsx)(n.code,{children:"modbus"})}),"\n",(0,s.jsxs)(n.p,{children:["Devices connected via the ModBus interface and supported by the ",(0,s.jsx)(n.a,{href:"https://github.com/volkszaehler/mbmd#supported-devices",children:"MBMD (ModBus Measurement Daemon)"})," project."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  type: modbus\n  power: Power\n  energy: Sum\n  soc: ChargeState\n  ...\n"})}),"\n",(0,s.jsx)(n.h4,{id:"required-parameters-1",children:"Required Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the parameters defined here, additional parameters are necessary. These are listed in the ",(0,s.jsx)(n.a,{href:"/docs/reference/modbus",children:"Modbus"})," documentation."]}),"\n",(0,s.jsx)(n.h5,{id:"power",children:(0,s.jsx)(n.code,{children:"power"})}),"\n",(0,s.jsxs)(n.p,{children:["Defines the MBMD measurement value that returns the power, typically ",(0,s.jsx)(n.code,{children:"Power"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"power: Power\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h5,{id:"energy",children:(0,s.jsx)(n.code,{children:"energy"})}),"\n",(0,s.jsxs)(n.p,{children:["Defines the method of measurement that MBMD returns for energy, typically ",(0,s.jsx)(n.code,{children:"Sum"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"energy: Sum\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,s.jsx)(n.h5,{id:"soc",children:(0,s.jsx)(n.code,{children:"soc"})}),"\n",(0,s.jsxs)(n.p,{children:["Defines the method of measurement that MBMD returns for battery state of charge (SoC), typically ",(0,s.jsx)(n.code,{children:"ChargeState"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"soc: ChargeState\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"lgess",children:(0,s.jsx)(n.code,{children:"lgess"})}),"\n",(0,s.jsx)(n.p,{children:"LG ESS Home 8/10 devices."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'type: lgess\nusage: grid\nuri: https://192.0.2.2/\npassword: "DE200..."\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"uri"})," and ",(0,s.jsx)(n.code,{children:"password"})," parameters are only required for a ",(0,s.jsx)(n.code,{children:"meter"})," device if multiple devices are configured."]})}),"\n",(0,s.jsx)(n.h4,{id:"required-parameters-2",children:"Required Parameters"}),"\n",(0,s.jsx)(n.h5,{id:"usage",children:(0,s.jsx)(n.code,{children:"usage"})}),"\n",(0,s.jsx)(n.p,{children:"Defines which measurements are needed here."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Possible Values"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"grid"})}),": For measurements at the grid connection point"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pv"})}),": For measurements of PV generation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"battery"})}),": For measurements of the house battery"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h5,{id:"uri",children:(0,s.jsx)(n.code,{children:"uri"})}),"\n",(0,s.jsx)(n.p,{children:"Defines the URL within the home network of the LG ESS device."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"uri: https://192.0.2.2/\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h5,{id:"password",children:(0,s.jsx)(n.code,{children:"password"})}),"\n",(0,s.jsx)(n.p,{children:"The registration number of the LG ESS HOME inverter must be entered here."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'password: "DE200..."\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"openwb",children:(0,s.jsx)(n.code,{children:"openwb"})}),"\n",(0,s.jsx)(n.p,{children:"Using measurements from an OpenWB charger"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"type: openwb\nusage: grid\nbroker: 192.0.2.2\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"uri"})," and ",(0,s.jsx)(n.code,{children:"password"})," parameters are only required for a ",(0,s.jsx)(n.code,{children:"meter"})," device if multiple devices are configured."]})}),"\n",(0,s.jsx)(n.h4,{id:"required-parameters-3",children:"Required Parameters"}),"\n",(0,s.jsx)(n.h5,{id:"usage-1",children:(0,s.jsx)(n.code,{children:"usage"})}),"\n",(0,s.jsx)(n.p,{children:"Defines which measurements are needed here."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Possible Values"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"grid"})}),": For measurements at the grid connection point"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pv"})}),": For measurements of PV generation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"battery"})}),": For measurements of the house battery"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h5,{id:"broker",children:(0,s.jsx)(n.code,{children:"broker"})}),"\n",(0,s.jsx)(n.p,{children:"Defines the hostname or IP address and port address within the home network of the OpenWB."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"broker: 192.0.2.2:1883\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"sma",children:(0,s.jsx)(n.code,{children:"sma"})}),"\n",(0,s.jsx)(n.p,{children:"For using the SMA Home Manager 2.0, SMA Energy Meter, or an SMA inverter. Devices must support the Speedwire protocol."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"type: sma\nuri: 192.0.2.2\nserial: 12345678\ninterface: eth0\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"required-parameters-4",children:"Required Parameters"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["It is sufficient to define either ",(0,s.jsx)(n.code,{children:"uri"})," or ",(0,s.jsx)(n.code,{children:"serial"}),"."]})}),"\n",(0,s.jsx)(n.h5,{id:"uri-1",children:(0,s.jsx)(n.code,{children:"uri"})}),"\n",(0,s.jsx)(n.p,{children:"Defines the hostname or IP address within the home network of the device."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"uri: 192.0.2.2\n"})}),"\n",(0,s.jsx)(n.h5,{id:"serial",children:(0,s.jsx)(n.code,{children:"serial"})}),"\n",(0,s.jsx)(n.p,{children:"Defines the serial number of the device from which measurements should be received."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"serial: 12345678\n"})}),"\n",(0,s.jsx)(n.h4,{id:"optional-parameters-1",children:"Optional Parameters"}),"\n",(0,s.jsx)(n.h5,{id:"interface",children:(0,s.jsx)(n.code,{children:"interface"})}),"\n",(0,s.jsx)(n.p,{children:"Multicast messages can only be received on a specific network interface. Usually, this is the first interface on the system. If it is not the interface connected to the meter, the interface needs to be explicitly specified."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"interface: eth0\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tesla",children:(0,s.jsx)(n.code,{children:"tesla"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"tesla"})}),": For using measurements from a Tesla Powerwall."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'type: tesla\nusage: grid\nuri: https://192.0.2.2/\npassword: "***"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"required-parameters-5",children:"Required Parameters"}),"\n",(0,s.jsx)(n.h5,{id:"usage-2",children:(0,s.jsx)(n.code,{children:"usage"})}),"\n",(0,s.jsx)(n.p,{children:"Defines which measurements are needed here."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Possible Values"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"grid"})}),": For measurements at the grid connection point"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pv"})}),": For measurements of PV generation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"battery"})}),": For measurements of the house battery"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h5,{id:"uri-2",children:(0,s.jsx)(n.code,{children:"uri"})}),"\n",(0,s.jsx)(n.p,{children:"Defines the hostname or IP address within the home network of the device."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"uri: 192.0.2.2\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h5,{id:"password-1",children:(0,s.jsx)(n.code,{children:"password"})}),"\n",(0,s.jsxs)(n.p,{children:["The password for the ",(0,s.jsx)(n.em,{children:"customer"})," user must be entered here."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'password: "ThePassword"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"custom",children:(0,s.jsx)(n.code,{children:"custom"})}),"\n",(0,s.jsxs)(n.p,{children:["Standard implementation, in which individual values are defined via ",(0,s.jsx)(n.a,{href:"/docs/reference/plugins",children:"plugins"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  type: custom\n  power: # Power (W)\n    source: # Plugin Type\n    ...\n  energy: # Energy (kWh)\n    source: # Plugin Type\n    ...\n  soc: # Battery SOC (%)\n    source: # Plugin Type\n    ...\n  capacity: # Optional Battery Capacity (kWh)\n  currents: # Current (A) per phase\n    - source: # Phase 1 Plugin Type\n      ...\n    - source: # Phase 2 Plugin Type\n      ...\n    - source: # Phase 3 Plugin Type\n      ...\n  ...\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"required-parameters-6",children:"Required Parameters"}),"\n",(0,s.jsx)(n.h5,{id:"power-1",children:(0,s.jsx)(n.code,{children:"power"})}),"\n",(0,s.jsx)(n.p,{children:"Plugin definition to return power in watts (W)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  power: ... # Power (W)\n    source: # Plugin Type\n    ...\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"optional-parameters-2",children:"Optional Parameters"}),"\n",(0,s.jsx)(n.h5,{id:"energy-1",children:(0,s.jsx)(n.code,{children:"energy"})}),"\n",(0,s.jsx)(n.p,{children:"Plugin definition to return consumed energy in kilowatt-hours (kWh)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  energy: ... # Energy (kWh)\n    source: # Plugin Type\n    ...\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"soc-1",children:(0,s.jsx)(n.code,{children:"soc"})}),"\n",(0,s.jsx)(n.p,{children:"Plugin definition to return battery state of charge (SoC) in percentage (%)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  soc: ... # Battery SOC (%)\n    source: # Plugin Type\n    ...\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"capacity",children:(0,s.jsx)(n.code,{children:"capacity"})}),"\n",(0,s.jsx)(n.p,{children:"Indication of battery capacity. Only useful when multiple batteries are present. Used to determine the overall SoC."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"currents",children:(0,s.jsx)(n.code,{children:"currents"})}),"\n",(0,s.jsx)(n.p,{children:"A list of plugin definitions to return current in amperes (A) per phase."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  currents: # Current (A) per phase\n    - source: # Phase 1 Plugin Type\n      ...\n    - source: # Phase 2 Plugin Type\n      ...\n    - source: # Phase 3 Plugin Type\n      ...\n  ...\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var s=r(67294);const i={},d=s.createContext(i);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);