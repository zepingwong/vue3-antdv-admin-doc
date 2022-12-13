(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{489:function(t,s,e){},541:function(t,s,e){"use strict";e(489)},561:function(t,s,e){"use strict";e.r(s);e(18);var i=e(448),a=e.n(i),n={name:"GridOne",data:()=>({colors:["#9fe8fa","#26baee","#73d2f3","#fff4e0","#4a9ff5","#5ff4ee","#c2fcf6"],gridTemplateColumns:[{value:"1",unit:"fr"},{value:"1",unit:"fr"},{value:"1",unit:"fr"}],gridTemplateRows:[{value:"40",unit:"px"},{value:"40",unit:"px"},{value:"40",unit:"px"}],gridcolumnGaps:1,gridrowGaps:1,justifyItem:"start",alignItems:"start",gridItem:[{index:1,gridColumnStart:1,gridColumnEnd:2,gridRowStart:1,gridRowEnd:2,backgroundColor:"#9fe8fa"}],choosenGridItem:null}),computed:{gridTemplateColumnsCss(){return this.gridTemplateColumns.map(t=>t.value?`${t.value}${t.unit}`:"").join(" ")},gridTemplateRowsCss(){return this.gridTemplateRows.map(t=>t.value?`${t.value}${t.unit}`:"").join(" ")},gridGapCss(){return this.gridcolumnGaps===this.gridrowGaps?this.gridcolumnGaps+"px":`${this.gridcolumnGaps}px ${this.gridrowGaps}px`},itemColumn(){return this.choosenGridItem?`${this.choosenGridItem.gridColumnStart} / ${this.choosenGridItem.gridColumnEnd}`:""},itemRow(){return this.choosenGridItem?`${this.choosenGridItem.gridRowStart} / ${this.choosenGridItem.gridRowEnd}`:""}},watch:{gridTemplateColumnsCss(t){this.updateColumnsCss()},gridTemplateRowsCss(t){this.updateRowsCss()},gridGapCss(){this.updateGaps()},itemColumn(){this.updateItemColumn()},itemRow(){this.updateItemRow()}},methods:{choosenGridItemChange(){this.choosenGridItem.gridColumnStart>=this.choosenGridItem.gridColumnEnd&&(this.choosenGridItem.gridColumnStart=this.choosenGridItem.gridColumnEnd-1)},addGridItem(){const t=this.gridItem.length>=this.colors.length?this.colors[this.gridItem.length%this.colors.length]:this.colors[this.gridItem.length];this.gridItem.push({index:this.gridItem.length+1,gridColumnStart:1,gridColumnEnd:2,gridRowStart:1,gridRowEnd:2,backgroundColor:t})},gridItemClick(t){this.choosenGridItem=this.gridItem[t]},addColum(){this.gridTemplateColumns.push(this.gridTemplateColumns[this.gridTemplateColumns.length-1])},addRow(){this.gridTemplateRows.push(this.gridTemplateRows[this.gridTemplateRows.length-1])},delColum(t){this.gridTemplateColumns.splice(t,1)},delRow(t){this.gridTemplateRows.splice(t,1)},setRepeat(t){const s=[];return t.forEach((t,e)=>{0===e?s.push([t]):s[s.length-1][0]===t?s[s.length-1].push(t):s.push([t])}),s.map(t=>1===t.length?t[0]:`repeat(${t.length}, ${t[0]})`).join(" ")},updateColumnsCss(){this.$refs.gridTemplateColumns.innerHTML=a.a.highlight(`grid-template-columns: ${this.setRepeat(this.gridTemplateColumnsCss.split(" "))};`,a.a.languages.css)},updateRowsCss(){this.$refs.gridTemplateRows.innerHTML=a.a.highlight(`grid-template-rows: ${this.setRepeat(this.gridTemplateRowsCss.split(" "))};`,a.a.languages.css)},updateGaps(){this.$refs.gridcolumnGaps.innerHTML=a.a.highlight(`grid-gap: ${this.gridGapCss};`,a.a.languages.css)},updateItemColumn(){setTimeout(()=>{this.$refs.itemColumn.innerHTML=a.a.highlight(`grid-column: ${this.itemColumn};`,a.a.languages.css)})},updateItemRow(){setTimeout(()=>{this.$refs.itemRow.innerHTML=a.a.highlight(`grid-row: ${this.itemRow};`,a.a.languages.css)})},updateCss(){this.updateColumnsCss(),this.updateRowsCss(),this.updateGaps()}},mounted(){this.updateCss()}},l=(e(541),e(2)),r=Object(l.a)(n,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"grid-container"},[s("section",{staticClass:"property-value"},[s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"gridTemplateColumns"})])]),t._v(" "),s("div",{staticClass:"value-set"},[t._l(t.gridTemplateColumns,(function(e,i){return s("div",{key:i,staticClass:"value-item"},[s("el-input",{attrs:{size:"mini"},model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"item.value"}}),t._v(" "),s("el-radio",{attrs:{label:"fr"},model:{value:e.unit,callback:function(s){t.$set(e,"unit",s)},expression:"item.unit"}}),t._v(" "),s("el-radio",{attrs:{label:"px"},model:{value:e.unit,callback:function(s){t.$set(e,"unit",s)},expression:"item.unit"}}),t._v(" "),1!==t.gridTemplateColumns.length?s("el-button",{staticClass:"btn",attrs:{plain:"",size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(s){return t.delColum(i)}}}):t._e()],1)})),t._v(" "),s("el-button",{staticClass:"btn add-btn",attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus",circle:""},on:{click:t.addColum}})],2)]),t._v(" "),s("section",{staticClass:"property-value"},[s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"gridTemplateRows"})])]),t._v(" "),s("div",{staticClass:"value-set"},[t._l(t.gridTemplateRows,(function(e,i){return s("div",{key:i,staticClass:"value-item"},[s("el-input",{attrs:{size:"mini"},model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"item.value"}}),t._v(" "),s("el-radio",{attrs:{label:"fr"},model:{value:e.unit,callback:function(s){t.$set(e,"unit",s)},expression:"item.unit"}}),t._v(" "),s("el-radio",{attrs:{label:"px"},model:{value:e.unit,callback:function(s){t.$set(e,"unit",s)},expression:"item.unit"}}),t._v(" "),1!==t.gridTemplateRows.length?s("el-button",{staticClass:"btn",attrs:{plain:"",size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(s){return t.delRow(i)}}}):t._e()],1)})),t._v(" "),s("el-button",{staticClass:"btn add-btn",attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus",circle:""},on:{click:t.addRow}})],2)]),t._v(" "),s("section",{staticClass:"property-value"},[s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"gridcolumnGaps"})])]),t._v(" "),s("div",{staticClass:"value-set"},[s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-column-gap:  ")]),t._v(" "),s("el-input-number",{attrs:{min:0,max:30,size:"mini"},model:{value:t.gridcolumnGaps,callback:function(s){t.gridcolumnGaps=s},expression:"gridcolumnGaps"}}),t._v(" "),s("span",{staticClass:"unit"},[t._v("px")])],1),t._v(" "),s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-row-gap:  ")]),t._v(" "),s("el-input-number",{attrs:{min:0,max:30,size:"mini"},model:{value:t.gridrowGaps,callback:function(s){t.gridrowGaps=s},expression:"gridrowGaps"}}),t._v(" "),s("span",{staticClass:"unit"},[t._v("px")])],1)])]),t._v(" "),s("div",{staticClass:"btn-container"},[s("span",{staticClass:"tip"},[t._v(t._s("点击 grid-item 以改变其属性"))]),t._v(" "),s("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:t.addGridItem}},[t._v(t._s("增加")+" grid-item")])],1),t._v(" "),s("div",{staticClass:"grid-wrapper",style:{gridTemplateColumns:t.gridTemplateColumnsCss,gridTemplateRows:t.gridTemplateRowsCss,gridGap:t.gridGapCss}},t._l(t.gridItem,(function(e,i){return s("div",{key:i,staticClass:"grid-item",class:"grid-item"+i,style:{gridColumnStart:e.gridColumnStart,gridColumnEnd:e.gridColumnEnd,gridRowStart:e.gridRowStart,gridRowEnd:e.gridRowEnd,backgroundColor:e.backgroundColor},on:{click:function(s){return t.gridItemClick(i)}}},[t._v("\n      grid-item-"+t._s(e.index)+"\n    ")])})),0),t._v(" "),t.choosenGridItem?s("section",{staticClass:"property-value"},[s("h4",[t._v("grid-item-"+t._s(t.choosenGridItem.index))]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"itemColumn"})])]),t._v(" "),s("div",{staticClass:"value-set"},[s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-column-start:  ")]),t._v(" "),s("el-input-number",{attrs:{min:1,max:t.choosenGridItem.gridColumnEnd-1,size:"mini"},model:{value:t.choosenGridItem.gridColumnStart,callback:function(s){t.$set(t.choosenGridItem,"gridColumnStart",s)},expression:"choosenGridItem.gridColumnStart"}})],1),t._v(" "),s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-column-end:  ")]),t._v(" "),s("el-input-number",{attrs:{min:t.choosenGridItem.gridColumnStart+1,max:t.gridTemplateColumns.length+1,size:"mini"},model:{value:t.choosenGridItem.gridColumnEnd,callback:function(s){t.$set(t.choosenGridItem,"gridColumnEnd",s)},expression:"choosenGridItem.gridColumnEnd"}})],1)]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"itemRow"})])]),t._v(" "),s("div",{staticClass:"value-set"},[s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-row-start:  ")]),t._v(" "),s("el-input-number",{attrs:{min:1,max:t.choosenGridItem.gridRowEnd-1,size:"mini"},model:{value:t.choosenGridItem.gridRowStart,callback:function(s){t.$set(t.choosenGridItem,"gridRowStart",s)},expression:"choosenGridItem.gridRowStart"}})],1),t._v(" "),s("div",{staticClass:"key-value w-50"},[s("span",{staticClass:"key"},[t._v("grid-row-end:  ")]),t._v(" "),s("el-input-number",{attrs:{min:t.choosenGridItem.gridRowStart+1,max:t.gridTemplateRows.length+1,size:"mini"},model:{value:t.choosenGridItem.gridRowEnd,callback:function(s){t.$set(t.choosenGridItem,"gridRowEnd",s)},expression:"choosenGridItem.gridRowEnd"}})],1)])]):t._e()])}),[],!1,null,null,null);s.default=r.exports}}]);