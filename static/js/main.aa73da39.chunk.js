(this["webpackJsonpfcc-markdown-preview"]=this["webpackJsonpfcc-markdown-preview"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),c=n(3),r=n.n(c),o=(n(13),n(4)),h=n(5),u=n(7),d=n(6),l=(n(14),n(15)),m="# this is an h1\n\n## and this is an h2\n\nwhile this is a [link]('#')\n\nand if this is some inline `<code>`\n```\n// then this is\n   multi\n   line\n   code\n```\n\n![images](https://#)\n\nbut **there is more**\n- a list item\n\n>a blockquote",j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).markIt=function(e){i.setState({output:e})},i.state={output:m},i}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{id:"containerHeading",children:"Welcome to my simple React Markdown Previewer App"}),Object(i.jsx)("h2",{className:"heading",children:"This is the editor"}),Object(i.jsx)("textarea",{id:"editor",className:"input",rows:"20",onChange:function(t){e.markIt(t.target.value)},children:m}),Object(i.jsx)("h2",{className:"heading",children:"This is the Markdown Previewer"}),Object(i.jsx)("div",{id:"preview",className:"output",dangerouslySetInnerHTML:{__html:l(this.state.output)}})]})}}]),n}(s.a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.aa73da39.chunk.js.map