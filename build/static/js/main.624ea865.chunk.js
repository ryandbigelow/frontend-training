(this["webpackJsonpom1-frontend-training"]=this["webpackJsonpom1-frontend-training"]||[]).push([[0],{28:function(e,r,n){e.exports=n(57)},57:function(e,r,n){"use strict";n.r(r);var t=n(0),l=n.n(t),a=n(21),o=n.n(a),u=n(9),i=n(22),p=n(5),c=n(6);function F(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return F=function(){return e},e}var E=c.a.div(F()),d=function(e){var r=e.children;return l.a.createElement(E,null,r)};function x(){var e=Object(p.a)(["\n  height: 2px;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  background: ",";\n  border-radius: 0px 0px 3px 3px;\n"]);return x=function(){return e},e}function b(){var e=Object(p.a)(["\n  position: relative;\n  background: ",";\n  border-radius: 3px;\n  padding: 9px 12px;\n  font-weight: ",";\n  letter-spacing: 0.24px;\n  font-size: 14px;\n  line-height: 24px;\n  color: ",";\n"]);return b=function(){return e},e}var m=c.a.div(b(),(function(e){return e.active?e.theme.colors.blue200:""}),(function(e){return e.theme.fonts.weight.semibold}),(function(e){return e.active?e.theme.colors.blue700:e.theme.colors.neutral900})),D=c.a.div(x(),(function(e){return e.theme.colors.blue700})),s=function(e){var r=e.active,n=e.children;return l.a.createElement(m,{active:r},n,r&&l.a.createElement(D,null))},B=n(27),g=function(e){var r=e.value;return l.a.createElement(l.a.Fragment,null,JSON.stringify(r.name))},C=function(e){var r=Object(B.a)({url:"https://api.thecatapi.com/v1/breeds",method:"GET",headers:{"x-api-key":"2606fdf1-086c-48db-a667-a4c1047d3433"}}),n=Object(u.a)(r,1)[0],t=n.data,a=n.loading,o=n.error;if(a)return l.a.createElement("p",null,"Loading...");if(o)return l.a.createElement("p",null,"Error!");var i=t;return l.a.createElement("ul",null,i.map((function(e){return l.a.createElement("li",null,l.a.createElement(g,{value:e}))})))},f={colors:{white:"#FFFFFF",black:"#000000",teal:"#3598DB",teal900:"#22618C",teal800:"#2C7DB4",teal700:"#3598DB",teal600:"#47A1DE",teal500:"#6CB4E4",teal400:"#90C6EB",teal300:"#B5D9F1",teal200:"#DAECF8",teal100:"#ECF5FB",teal50:"#F1F7FB",purple:"#6F73D2",purple900:"#474A86",purple800:"#5B5FAC",purple700:"#6F73D2",purple600:"#7C7FD6",purple500:"#9699DE",purple400:"#B0B2E6",purple300:"#CACCEE",purple200:"#E4E5F6",purple100:"#F1F2FA",purple50:"#F6F7FC",yellow:"#EDBF0E",yellow900:"#9B7C09",yellow800:"#C79F0C",yellow700:"#EDBF0E",yellow600:"#F0C936",yellow500:"#F7D451",yellow400:"#F7DD7B",yellow300:"#FAE8A7",yellow200:"#FBEFC3",yellow100:"#FAF4DE",yellow50:"#FDFAEF",green:"#00A878",green900:"#006B4D",green800:"#008A63",green700:"#00A878",green600:"#17AF84",green500:"#45BF9C",green400:"#73CFB5",green300:"#A2DFCD",green200:"#D0EFE6",green100:"#E7F7F2",green50:"#F4FDFB",blue:"#3B70D4",blue900:"#264887",blue800:"#315CAE",blue700:"#3B70D4",blue600:"#4C7DD7",blue500:"#7097DF",blue400:"#94B1E7",blue300:"#B7CBEF",blue200:"#DBE5F7",blue100:"#EDF2FB",blue50:"#F7F9FC",red:"D32D27",red900:"#871D19",red800:"#AD2520",red700:"#D32D27",red600:"#D7403A",red500:"#DF6661",red400:"#E78C89",red300:"#EFB2B0",red200:"#F7D8D7",red100:"#FBEBEB",red50:"#FCF6F6",neutral:"#FFFFFF",neutral900:"#1D3049",neutral800:"#2C405A",neutral700:"#41536B",neutral600:"#56667B",neutral500:"#808C9C",neutral400:"#ABB3BD",neutral300:"#C0C6CE",neutral200:"#D5D9DE",neutral100:"#E7EAEF",neutral50:"#F8F8FA"},elevations:{elevation0:"none",elevation100:"0px 1px 2px rgba(29, 48, 73, 0.04), 0px 2px 2px rgba(29, 48, 73, 0.04), 0px 0px 2px rgba(29, 48, 73, 0.16)",elevation200:"0px 4px 8px rgba(29, 48, 73, 0.04), 0px 2px 4px rgba(29, 48, 73, 0.08), 0px 2px 4px rgba(29, 48, 73, 0.08)",elevation300:"0px 8px 16px rgba(29, 48, 73, 0.08), 0px 2px 4px rgba(29, 48, 73, 0.08), 0px 4px 8px rgba(29, 48, 73, 0.16)"},fonts:{primary:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',weight:{regular:400,semibold:600,bold:700}},radius:{pixel4:"4px",pixel8:"8px",pixel16:"16px",full:"1000px"},animations:{drawerAnimationTime:300}};var v=function(){var e=Object(t.useState)("HelloWorld"),r=Object(u.a)(e,2),n=r[0],a=r[1];return l.a.createElement(i.a,{theme:f},l.a.createElement(d,null,l.a.createElement("div",{role:"button",onClick:function(){a("HelloWorld")}},l.a.createElement(s,{active:"HelloWorld"===n},"Hello World")),l.a.createElement("div",{role:"button",onClick:function(){a("CatBreeds")}},l.a.createElement(s,{active:"CatBreeds"===n},"Cat Breeds"))),"HelloWorld"===n&&l.a.createElement(l.a.Fragment,null,"Hello World"),"CatBreeds"===n&&l.a.createElement(C,null))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.624ea865.chunk.js.map