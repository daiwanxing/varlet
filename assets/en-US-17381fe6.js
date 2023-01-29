import{_ as e,p as c,f as o,h as d,M as t,q as l,S as n,P as s,aq as p}from"./vue-router.esm-bundler-de96f312.js";const r={components:{}},h={class:"varlet-site-doc"},i=t("h1",null,"Tooltip",-1),j=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Displays a tooltip when the element is clicked or hovered, and changes the display position of the tooltip by controlling the placement and offset.")],-1),g={class:"card"},m=t("h3",null,"Basic Usage",-1),u=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Basic Usage"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=t("h3",null,"Content Slot",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Content Slot"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},y=t("h3",null,"Placement",-1),T=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" placement = ref("),t("span",{class:"hljs-string"},"'top'"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` placementOptions = [
  `),t("span",{class:"hljs-string"},"'top'"),s(`,
  `),t("span",{class:"hljs-string"},"'top-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'top-end'"),s(`,
  `),t("span",{class:"hljs-string"},"'bottom'"),s(`,
  `),t("span",{class:"hljs-string"},"'bottom-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'bottom-end'"),s(`,
  `),t("span",{class:"hljs-string"},"'right'"),s(`,
  `),t("span",{class:"hljs-string"},"'right-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'right-end'"),s(`,
  `),t("span",{class:"hljs-string"},"'left'"),s(`,
  `),t("span",{class:"hljs-string"},"'left-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'left-end'"),s(`,
]
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(),t("span",{class:"hljs-attr"},":hint"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(` 
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"(item, index) in placementOptions"'),s(` 
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"index"'),s(`
      `),t("span",{class:"hljs-attr"},":label"),s("="),t("span",{class:"hljs-string"},'"item"'),s(` 
    />`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
  
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"placement-container"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},":placement"),s("="),t("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".placement-container"),s(` {
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"250px"),s(`;
  `),t("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),t("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),t("span",{class:"hljs-attribute"},"align-items"),s(`: center;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),w={class:"card"},x=t("h3",null,"Theme Color Tooltip",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"[54, 10]"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"default"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"default"'),s(">")]),s("Default"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Primary"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"info"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"info"'),s(">")]),s("Info"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(">")]),s("Success"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(">")]),s("Warning"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"danger"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"danger"'),s(">")]),s("Danger"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},C=t("h3",null,"Custom Color",-1),D=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"#d81b60"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Custom Color"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},V=t("h3",null,"Offset",-1),z=t("p",null,[s("The offset of the Tooltip can be set with "),t("code",null,"offset-x"),s(" and "),t("code",null,"offset-y"),s(".")],-1),B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},":offset-x"),s("="),t("span",{class:"hljs-string"},'"64"'),s(),t("span",{class:"hljs-attr"},":offset-y"),s("="),t("span",{class:"hljs-string"},'"-10"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Offset"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},N=t("h3",null,"Trigger",-1),O=t("p",null,[s("Use "),t("code",null,"trigger"),s(" to change the trigger method of tooltip display, the optional values are "),t("code",null,"click"),s(" and "),t("code",null,"hover"),s(".")],-1),U=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},"trigger"),s("="),t("span",{class:"hljs-string"},'"hover"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Trigger"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},$=t("h3",null,"Events",-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(`
    `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(`
    @`),t("span",{class:"hljs-attr"},"open"),s("="),t("span",{class:"hljs-string"},`"Snackbar.info('open')"`),s(`
    @`),t("span",{class:"hljs-attr"},"opened"),s("="),t("span",{class:"hljs-string"},`"Snackbar.success('opened')"`),s(`
    @`),t("span",{class:"hljs-attr"},"close"),s("="),t("span",{class:"hljs-string"},`"Snackbar.warning('close')"`),s(`
    @`),t("span",{class:"hljs-attr"},"closed"),s("="),t("span",{class:"hljs-string"},`"Snackbar.error('closed')"`),s(`
  >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Events"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M={class:"card"},q=t("h3",null,"Disabled",-1),H=t("p",null,[s("In the "),t("code",null,"disabled"),s(" state, the tooltip will not be opened.")],-1),R=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(">")]),s("Disabled"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),W=p('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>whether to show the tooltip</td><td><em>string</em></td><td><code>false</code></td></tr><tr><td><code>content</code></td><td>display content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Tooltip background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>Tooltip type, Can be set to <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>placement</code></td><td>Tooltip popup placement</td><td><em>Placement</em></td><td><code>top</code></td></tr><tr><td><code>offset-x</code></td><td>The x-axis offset, relative to the tooltip-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>The y-axis offset, relative to the tooltip-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>The location of the tooltip mount</td><td><em>TeleportProps[&#39;to&#39;]</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>whether to disable the tooltip</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>Tooltip trigger method, optional value is <code>click</code> <code>hover</code>, <code>click</code> is triggered when clicked, <code>hover</code> is triggered when hovered</td><td><em>string</em></td><td><code>hover</code></td></tr></tbody></table></div><div class="card"><h3>Placement</h3><table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>top</code></td><td>top center position</td></tr><tr><td><code>top-start</code></td><td>top left position</td></tr><tr><td><code>top-end</code></td><td>top right position</td></tr><tr><td><code>bottom</code></td><td>bottom center position</td></tr><tr><td><code>bottom-start</code></td><td>bottom left position</td></tr><tr><td><code>bottom-end</code></td><td>bottom right position</td></tr><tr><td><code>right</code></td><td>right center position</td></tr><tr><td><code>right-start</code></td><td>top right position</td></tr><tr><td><code>right-end</code></td><td>bottom right position</td></tr><tr><td><code>left</code></td><td>left center position</td></tr><tr><td><code>left-start</code></td><td>top left position</td></tr><tr><td><code>left-end</code></td><td>bottom left position</td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>open</code></td><td>Open <code>Tooltip</code></td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Close <code>Tooltip</code></td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>This method can be called to redraw when the default slot element of <code>Tooltip</code> changes its position and size</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the <code>Tooltip</code> is opened</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the open <code>Tooltip</code> animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the <code>Tooltip</code> is closed</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the closing <code>Tooltip</code> animation ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Tooltip trigger element</td><td><code>-</code></td></tr><tr><td><code>content</code></td><td>Tooltip content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tooltip-opacity</code></td><td><code>0.9</code></td></tr><tr><td><code>--tooltip-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--tooltip-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--tooltip-padding</code></td><td><code>8px 16px</code></td></tr><tr><td><code>--tooltip-default-color</code></td><td><code>#616161</code></td></tr><tr><td><code>--tooltip-offset</code></td><td><code>10px</code></td></tr><tr><td><code>--tooltip-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tooltip-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--tooltip-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--tooltip-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--tooltip-danger-color</code></td><td><code>var(--color-danger)</code></td></tr></tbody></table></div>',7);function F(G,J,K,L,Q,X){const a=c("var-site-code-example");return o(),d("div",h,[i,j,t("div",g,[m,l(a,null,{default:n(()=>[u]),_:1})]),t("div",v,[b,l(a,null,{default:n(()=>[_]),_:1})]),t("div",f,[y,l(a,null,{default:n(()=>[T]),_:1})]),t("div",w,[x,l(a,null,{default:n(()=>[k]),_:1})]),t("div",S,[C,l(a,null,{default:n(()=>[D]),_:1})]),t("div",P,[V,z,l(a,null,{default:n(()=>[B]),_:1})]),t("div",E,[N,O,l(a,null,{default:n(()=>[U]),_:1})]),t("div",I,[$,l(a,null,{default:n(()=>[A]),_:1})]),t("div",M,[q,H,l(a,null,{default:n(()=>[R]),_:1})]),W])}const Z=e(r,[["render",F]]);export{Z as default};
