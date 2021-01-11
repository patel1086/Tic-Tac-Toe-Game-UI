(this["webpackJsonptic-tac-toe-game"]=this["webpackJsonptic-tac-toe-game"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),s=a(8),i=a.n(s),c=(a(14),a(3)),d=a(4),l=a(2),u=a(6),h=a(5),b=(a(15),{2:["marking","32"],0:["marking marking-x",9587],1:["marking marking-o",9711]}),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleNewMove=n.handleNewMove.bind(Object(l.a)(n)),n}return Object(d.a)(a,[{key:"handleNewMove",value:function(e){if(!this.props.active)return document.querySelector("#message1").style.display="none",document.querySelector("#message2").innerHTML="Game is already over! Reset if you want to play again.",document.querySelector("#message2").style.display="block",!1;2==this.props.marking&&this.props.onNewMove(parseInt(e.target.id))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"col",onClick:this.handleNewMove,children:Object(n.jsx)("div",{class:b[this.props.marking][0],id:this.props.id,children:String.fromCharCode(b[this.props.marking][1])})})}}]),a}(o.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<3;t++){var a=3*this.props.row+t,r=this.props.boardState[a];e.push(Object(n.jsx)(v,{id:a+"-"+r,marking:r,onNewMove:this.props.onNewMove,active:this.props.active},a+"-"+r))}return Object(n.jsx)("div",{className:"row",children:e})}}]),a}(o.a.Component),m=(a(16),{2:["marking","32"],0:["marking marking-x",9587],1:["marking marking-o",9711]}),j=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],g={2:1,0:2,1:0},p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={boardState:new Array(9).fill(2),turn:0,active:!0,mode:"AI"},n.handleNewMove=n.handleNewMove.bind(Object(l.a)(n)),n.handleReset=n.handleReset.bind(Object(l.a)(n)),n.handleModeChange=n.handleModeChange.bind(Object(l.a)(n)),n.processBoard=n.processBoard.bind(Object(l.a)(n)),n.makeAIMove=n.makeAIMove.bind(Object(l.a)(n)),n}return Object(d.a)(a,[{key:"processBoard",value:function(){var e=this,t=!1;j.forEach((function(a){var n=e.state.boardState[a[0]];if(2!=n){var r=e.state.boardState.filter((function(e,t){return a.includes(t)&&e==n}));3==r.length&&(document.querySelector("#message1").innerHTML=String.fromCharCode(m[r[0]][1])+" wins!",document.querySelector("#message1").style.display="block",a.forEach((function(e){var t=e+"-"+n;document.getElementById(t).parentNode.style.background="#d4edda"})),e.setState({active:!1}),t=!0)}})),this.state.boardState.includes(2)||t?"AI"!=this.state.mode||1!=this.state.turn||t||this.makeAIMove():(document.querySelector("#message2").innerHTML="Game Over - It's a draw",document.querySelector("#message2").style.display="block",this.setState({active:!1}))}},{key:"makeAIMove",value:function(){var e=this,t=[],a=[];this.state.boardState.forEach((function(e,a){2==e&&t.push(a)})),t.forEach((function(t){var n=0;j.forEach((function(a){if(a.includes(t)){var r=0,o=0;a.forEach((function(a){0==e.state.boardState[a]?r+=1:1==e.state.boardState[a]&&(o+=1),n+=a==t?0:g[e.state.boardState[a]]})),r>=2&&(n+=10),o>=2&&(n+=20)}})),a.push(n)}));var n=0;a.reduce((function(e,t,a){return t>=e?(n=a,t):e})),this.handleNewMove(t[n])}},{key:"handleReset",value:function(e){e&&e.preventDefault(),document.querySelectorAll(".alert").forEach((function(e){return e.style.display="none"})),this.setState({boardState:new Array(9).fill(2),turn:0,active:!0})}},{key:"handleNewMove",value:function(e){var t=this;this.setState((function(t){return{boardState:t.boardState.slice(0,e).concat(t.turn).concat(t.boardState.slice(e+1)),turn:(t.turn+1)%2}}),(function(){t.processBoard()}))}},{key:"handleModeChange",value:function(e){e.preventDefault(),e.target.getAttribute("href").includes("AI")?(e.target.style.background="#d4edda",document.querySelector("#twop").style.background="none",this.setState({mode:"AI"}),this.handleReset(null)):e.target.getAttribute("href").includes("2P")&&(e.target.style.background="#d4edda",document.querySelector("#ai").style.background="none",this.setState({mode:"2P"}),this.handleReset(null))}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++)e.push(Object(n.jsx)(f,{row:t,boardState:this.state.boardState,onNewMove:this.handleNewMove,active:this.state.active}));return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"container jumbotron",id:"container",children:[Object(n.jsx)("h3",{children:"TIC TAC TOE"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("a",{href:"./?AI",onClick:this.handleModeChange,id:"ai",children:"Versus AI"})," ","||",Object(n.jsxs)("a",{href:"./?2P",onClick:this.handleModeChange,id:"twop",children:[" ","2 Players"]})," ","||",Object(n.jsxs)("a",{href:"#",onClick:this.handleReset,children:[" ","Reset board"]})]}),Object(n.jsxs)("p",{children:[String.fromCharCode(m[this.state.turn][1]),"'s turn"]}),Object(n.jsx)("div",{className:"board",children:e}),Object(n.jsx)("p",{class:"alert alert-success",role:"alert",id:"message1"}),Object(n.jsx)("p",{class:"alert alert-info",role:"alert",id:"message2"})]})})}}]),a}(o.a.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),o(e),s(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),y()}},[[17,1,2]]]);
//# sourceMappingURL=main.850ce09c.chunk.js.map