import{d as D,u as x,e as ee,s as le,g as O,M as te}from"./MainLayout.nJH3DFEU.js";import{_ as ae,m as ne,i as S,j as ie,k as W,n as c,q as oe,A as C,o as f,c as p,a as l,F as j,s as q,y as se,v as $,x as G,b as s,z as J,t as L,r as z,f as de,w as ue,B as y,C as h}from"./entry.b_v9oWdC.js";import{u as re,_ as ce}from"./Input.xe_VNll-.js";import"./nuxt-link.JccaVFwd.js";import"./Icon.1MzyJgvu.js";import"./index.0wqzsba0.js";const m=ne(S.ui.strategy,S.ui.select,le),ge=ie({components:{UIcon:D},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>m.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>m.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(m.size).includes(e)}},color:{type:String,default:()=>m.default.color,validator(e){return[...S.ui.colors,...Object.keys(m.color)].includes(e)}},variant:{type:String,default:()=>m.default.variant,validator(e){return[...Object.keys(m.variant),...Object.values(m.color).flatMap(g=>Object.keys(g))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:g,slots:b}){const{ui:t,attrs:I}=x("select",W(e,"ui"),m,W(e,"class")),{size:A,rounded:o}=ee({ui:t,props:e}),{emitFormChange:n,inputId:_,color:i,size:k,name:d}=re(e,m),u=c(()=>A.value||k.value),v=a=>{g("update:modelValue",a.target.value)},r=a=>{n(),g("change",a)},P=a=>O(a,e.valueAttribute,O(a,e.optionAttribute)),T=a=>O(a,e.optionAttribute,O(a,e.valueAttribute)),N=a=>["string","number","boolean"].includes(typeof a)?{[e.valueAttribute]:a,[e.optionAttribute]:a}:{...a,[e.valueAttribute]:P(a),[e.optionAttribute]:T(a)},w=c(()=>e.options.map(a=>N(a))),F=c(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...w.value]:w.value),E=c(()=>{const a=N(e.modelValue),V=F.value.find(U=>U[e.valueAttribute]===a[e.valueAttribute]);return V?V[e.valueAttribute]:""}),R=c(()=>{var V,U;const a=((U=(V=t.value.color)==null?void 0:V[i.value])==null?void 0:U[e.variant])||t.value.variant[e.variant];return oe(C(t.value.base,t.value.form,o.value,t.value.size[u.value],e.padded?t.value.padding[u.value]:"p-0",a==null?void 0:a.replaceAll("{color}",i.value),(B.value||b.leading)&&t.value.leading.padding[u.value],(M.value||b.trailing)&&t.value.trailing.padding[u.value]),e.placeholder&&!e.modelValue&&t.value.placeholder,e.selectClass)}),B=c(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),M=c(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),H=c(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),K=c(()=>e.loading&&!B.value?e.loadingIcon:e.trailingIcon||e.icon),Q=c(()=>C(t.value.icon.leading.wrapper,t.value.icon.leading.pointer,t.value.icon.leading.padding[u.value])),X=c(()=>C(t.value.icon.base,i.value&&S.ui.colors.includes(i.value)&&t.value.icon.color.replaceAll("{color}",i.value),t.value.icon.size[u.value],e.loading&&t.value.icon.loading)),Y=c(()=>C(t.value.icon.trailing.wrapper,t.value.icon.trailing.pointer,t.value.icon.trailing.padding[u.value])),Z=c(()=>C(t.value.icon.base,i.value&&S.ui.colors.includes(i.value)&&t.value.icon.color.replaceAll("{color}",i.value),t.value.icon.size[u.value],e.loading&&!B.value&&t.value.icon.loading));return{ui:t,attrs:I,name:d,inputId:_,normalizedOptionsWithPlaceholder:F,normalizedValue:E,isLeading:B,isTrailing:M,selectClass:R,leadingIconName:H,leadingIconClass:X,leadingWrapperIconClass:Q,trailingIconName:K,trailingIconClass:Z,trailingWrapperIconClass:Y,onInput:v,onChange:r}}}),ve=["id","name","value","required","disabled"],me=["value","label"],fe=["value","selected","disabled","textContent"],be=["value","selected","disabled","textContent"];function _e(e,g,b,t,I,A){const o=D;return f(),p("div",{class:$(e.ui.wrapper)},[l("select",se({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled,class:e.selectClass},e.attrs,{onInput:g[0]||(g[0]=(...n)=>e.onInput&&e.onInput(...n)),onChange:g[1]||(g[1]=(...n)=>e.onChange&&e.onChange(...n))}),[(f(!0),p(j,null,q(e.normalizedOptionsWithPlaceholder,(n,_)=>(f(),p(j,null,[n.children?(f(),p("optgroup",{key:`${n[e.valueAttribute]}-optgroup-${_}`,value:n[e.valueAttribute],label:n[e.optionAttribute]},[(f(!0),p(j,null,q(n.children,(i,k)=>(f(),p("option",{key:`${i[e.valueAttribute]}-${_}-${k}`,value:i[e.valueAttribute],selected:i[e.valueAttribute]===e.normalizedValue,disabled:i.disabled,textContent:L(i[e.optionAttribute])},null,8,fe))),128))],8,me)):(f(),p("option",{key:`${n[e.valueAttribute]}-${_}`,value:n[e.valueAttribute],selected:n[e.valueAttribute]===e.normalizedValue,disabled:n.disabled,textContent:L(n[e.optionAttribute])},null,8,be))],64))),256))],16,ve),e.isLeading&&e.leadingIconName||e.$slots.leading?(f(),p("span",{key:0,class:$(e.leadingWrapperIconClass)},[G(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[s(o,{name:e.leadingIconName,class:$(e.leadingIconClass)},null,8,["name","class"])],!0)],2)):J("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(f(),p("span",{key:1,class:$(e.trailingWrapperIconClass)},[G(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[s(o,{name:e.trailingIconName,class:$(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])],!0)],2)):J("",!0)],2)}const pe=ae(ge,[["render",_e],["__scopeId","data-v-42428879"]]),ye={class:"flex flex-col border border-gray-300 rounded-md mx-4 mt-4"},he=l("div",{class:"bg-[#F8F7FE] p-4"},[l("h1",{class:"text-3xl"},"খতিয়ানের আবেদন")],-1),Ie={class:"grid grid-cols-1 md:grid-cols-3 p-5 gap-4"},Ae={class:"flex flex-col gap-4"},Ve={class:"grid md:grid-cols-2 grid-cols-1"},Ce=l("p",null,"বিভাগ:",-1),$e={class:"grid md:grid-cols-2 grid-cols-1"},ze=l("p",null,"জেলা:",-1),Se={class:"grid md:grid-cols-2 grid-cols-1"},ke=l("p",null,"উপ‌জেলা:",-1),Be={class:"grid md:grid-cols-2 grid-cols-1"},Ue=l("p",null,"ইউনিয়ন:",-1),Oe={class:"flex flex-col gap-4"},je={class:"grid md:grid-cols-2 grid-cols-1"},Ne=l("p",{class:""},"আবেদনকারীর নাম:",-1),we={class:"grid md:grid-cols-2 grid-cols-1"},Fe=l("p",null,"পিতা নাম:",-1),Me={class:"grid md:grid-cols-2 grid-cols-1"},We=l("p",null,"মাতার নাম:",-1),qe={class:"grid md:md:grid-cols-2 grid-cols-1"},Ge=l("p",null,"জন্ম তা‌রিখ:",-1),Je={class:"grid md:md:grid-cols-2 grid-cols-1"},Le=l("p",null,null,-1),De={class:"grid md:md:grid-cols-2 grid-cols-1"},Pe=l("p",null,null,-1),Te={class:"grid md:grid-cols-2 grid-cols-1"},Ee=l("p",null,"মোবাইল নং:",-1),Re={class:"flex flex-col gap-4"},He={class:"grid md:grid-cols-2 grid-cols-1"},Ke=l("p",null,"ভোটার আইডি নং:",-1),Qe={class:"grid md:grid-cols-2 grid-cols-1"},Xe=l("p",null,"ইমেইল:",-1),Ye=l("div",{class:"grid md:grid-cols-2 grid-cols-1"},[l("p",null,"জরিপ:"),l("input",{type:"text",class:"w-full border border-gray-300 rounded-md"})],-1),Ze={class:"grid md:grid-cols-2 grid-cols-1"},xe=l("p",null,"বর্তমান পেশা:",-1),el={class:"grid md:grid-cols-2 grid-cols-1"},ll=l("p",null,"রেফারেন্স নং:",-1),tl=l("div",{class:"p-5 flex justify-end"},[l("a",{class:"bg-[#0069D9] text-white text-xl p-2 rounded-md",href:"#"},"ফলাফল দেখাও")],-1),ul={__name:"khatiyan_form",setup(e){const g=["United States","Canada","Mexico"],b=["select","ঢাকা","চট্টগ্রাম","সিলেট","রাজশাহী","খুলনা","বরিশাল"],t=["বছর","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],I=["মাস","January","February","March","April","May","June","July","August","September","October","November","December"],A=["দিন","1","2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];z(g[0]);const o=z(b[0]),n=z(I[0]),_=z(t[0]),i=z(A[0]);return(k,d)=>{const u=pe,v=ce;return f(),de(te,null,{default:ue(()=>[l("div",ye,[he,l("div",Ie,[l("div",Ae,[l("div",Ve,[Ce,s(u,{modelValue:y(o),"onUpdate:modelValue":d[0]||(d[0]=r=>h(o)?o.value=r:null),options:b},null,8,["modelValue"])]),l("div",$e,[ze,s(u,{modelValue:y(o),"onUpdate:modelValue":d[1]||(d[1]=r=>h(o)?o.value=r:null),options:b},null,8,["modelValue"])]),l("div",Se,[ke,s(u,{modelValue:y(o),"onUpdate:modelValue":d[2]||(d[2]=r=>h(o)?o.value=r:null),options:b},null,8,["modelValue"])]),l("div",Be,[Ue,s(u,{modelValue:y(o),"onUpdate:modelValue":d[3]||(d[3]=r=>h(o)?o.value=r:null),options:b},null,8,["modelValue"])])]),l("div",Oe,[l("div",je,[Ne,s(v)]),l("div",we,[Fe,s(v)]),l("div",Me,[We,s(v)]),l("div",qe,[Ge,s(u,{modelValue:y(_),"onUpdate:modelValue":d[4]||(d[4]=r=>h(_)?_.value=r:null),options:t},null,8,["modelValue"])]),l("div",Je,[Le,s(u,{modelValue:y(n),"onUpdate:modelValue":d[5]||(d[5]=r=>h(n)?n.value=r:null),options:I},null,8,["modelValue"])]),l("div",De,[Pe,s(u,{modelValue:y(i),"onUpdate:modelValue":d[6]||(d[6]=r=>h(i)?i.value=r:null),options:A},null,8,["modelValue"])]),l("div",Te,[Ee,s(v)])]),l("div",Re,[l("div",He,[Ke,s(v)]),l("div",Qe,[Xe,s(v)]),Ye,l("div",Ze,[xe,s(v)]),l("div",el,[ll,s(v)])])]),tl])]),_:1})}}};export{ul as default};
