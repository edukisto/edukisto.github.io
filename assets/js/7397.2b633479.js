"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[7397],{7397:function(t,e,r){r.d(e,{diagram:function(){return D}});var i=r(7160),n=r(7352),a=(r(2264),r(6208),r(4300),function(){var t=function(t,e,r,i){for(r=r||{},i=t.length;i--;r[t[i]]=e);return r},e=[1,3],r=[1,6],i=[1,4],n=[1,5],a=[2,5],c=[1,12],s=[5,7,13,19,21,23,24,26,28,31,37,40,47],o=[7,13,19,21,23,24,26,28,31,37,40],l=[7,12,13,19,21,23,24,26,28,31,37,40],h=[7,13,47],m=[1,42],u=[1,41],y=[7,13,29,32,35,38,47],p=[1,55],b=[1,56],g=[1,57],d=[7,13,32,35,42,47],f={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,PARENT_COMMIT:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,ID:46,";":47,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"PARENT_COMMIT",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",46:"ID",47:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,7],[18,7],[18,5],[18,5],[18,5],[18,7],[18,7],[18,7],[18,7],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[41,0],[41,1],[39,1],[39,1],[39,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(t,e,r,i,n,a,c){var s=a.length-1;switch(n){case 2:return a[s];case 3:return a[s-1];case 4:return i.setDirection(a[s-3]),a[s-1];case 6:i.setOptions(a[s-1]),this.$=a[s];break;case 7:a[s-1]+=a[s],this.$=a[s-1];break;case 9:this.$=[];break;case 10:a[s-1].push(a[s]),this.$=a[s-1];break;case 11:this.$=a[s-1];break;case 16:this.$=a[s].trim(),i.setAccTitle(this.$);break;case 17:case 18:this.$=a[s].trim(),i.setAccDescription(this.$);break;case 19:i.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 21:i.checkout(a[s]);break;case 22:i.branch(a[s]);break;case 23:i.branch(a[s-2],a[s]);break;case 24:i.cherryPick(a[s],"",void 0);break;case 25:i.cherryPick(a[s-2],"",void 0,a[s]);break;case 26:i.cherryPick(a[s-2],"",a[s]);break;case 27:i.cherryPick(a[s-4],"",a[s],a[s-2]);break;case 28:i.cherryPick(a[s-4],"",a[s-2],a[s]);break;case 29:i.cherryPick(a[s],"",a[s-2]);break;case 30:i.cherryPick(a[s],"","");break;case 31:i.cherryPick(a[s-2],"","");break;case 32:i.cherryPick(a[s-4],"","",a[s-2]);break;case 33:i.cherryPick(a[s-4],"","",a[s]);break;case 34:i.cherryPick(a[s-2],"",a[s-4],a[s]);break;case 35:i.cherryPick(a[s-2],"","",a[s]);break;case 36:i.merge(a[s],"","","");break;case 37:i.merge(a[s-2],a[s],"","");break;case 38:i.merge(a[s-2],"",a[s],"");break;case 39:i.merge(a[s-2],"","",a[s]);break;case 40:i.merge(a[s-4],a[s],"",a[s-2]);break;case 41:i.merge(a[s-4],"",a[s],a[s-2]);break;case 42:i.merge(a[s-4],"",a[s-2],a[s]);break;case 43:i.merge(a[s-4],a[s-2],a[s],"");break;case 44:i.merge(a[s-4],a[s-2],"",a[s]);break;case 45:i.merge(a[s-4],a[s],a[s-2],"");break;case 46:i.merge(a[s-6],a[s-4],a[s-2],a[s]);break;case 47:i.merge(a[s-6],a[s],a[s-4],a[s-2]);break;case 48:i.merge(a[s-6],a[s-4],a[s],a[s-2]);break;case 49:i.merge(a[s-6],a[s-2],a[s-4],a[s]);break;case 50:i.merge(a[s-6],a[s],a[s-2],a[s-4]);break;case 51:i.merge(a[s-6],a[s-2],a[s],a[s-4]);break;case 52:i.commit(a[s]);break;case 53:i.commit("","",i.commitType.NORMAL,a[s]);break;case 54:i.commit("","",a[s],"");break;case 55:i.commit("","",a[s],a[s-2]);break;case 56:i.commit("","",a[s-2],a[s]);break;case 57:i.commit("",a[s],i.commitType.NORMAL,"");break;case 58:i.commit("",a[s-2],i.commitType.NORMAL,a[s]);break;case 59:i.commit("",a[s],i.commitType.NORMAL,a[s-2]);break;case 60:i.commit("",a[s-2],a[s],"");break;case 61:i.commit("",a[s],a[s-2],"");break;case 62:i.commit("",a[s-4],a[s-2],a[s]);break;case 63:i.commit("",a[s-4],a[s],a[s-2]);break;case 64:i.commit("",a[s-2],a[s-4],a[s]);break;case 65:i.commit("",a[s],a[s-4],a[s-2]);break;case 66:i.commit("",a[s],a[s-2],a[s-4]);break;case 67:i.commit("",a[s-2],a[s],a[s-4]);break;case 68:i.commit(a[s],"",i.commitType.NORMAL,"");break;case 69:i.commit(a[s],"",i.commitType.NORMAL,a[s-2]);break;case 70:i.commit(a[s-2],"",i.commitType.NORMAL,a[s]);break;case 71:i.commit(a[s-2],"",a[s],"");break;case 72:i.commit(a[s],"",a[s-2],"");break;case 73:i.commit(a[s],a[s-2],i.commitType.NORMAL,"");break;case 74:i.commit(a[s-2],a[s],i.commitType.NORMAL,"");break;case 75:i.commit(a[s-4],"",a[s-2],a[s]);break;case 76:i.commit(a[s-4],"",a[s],a[s-2]);break;case 77:i.commit(a[s-2],"",a[s-4],a[s]);break;case 78:i.commit(a[s],"",a[s-4],a[s-2]);break;case 79:i.commit(a[s],"",a[s-2],a[s-4]);break;case 80:i.commit(a[s-2],"",a[s],a[s-4]);break;case 81:i.commit(a[s-4],a[s],a[s-2],"");break;case 82:i.commit(a[s-4],a[s-2],a[s],"");break;case 83:i.commit(a[s-2],a[s],a[s-4],"");break;case 84:i.commit(a[s],a[s-2],a[s-4],"");break;case 85:i.commit(a[s],a[s-4],a[s-2],"");break;case 86:i.commit(a[s-2],a[s-4],a[s],"");break;case 87:i.commit(a[s-4],a[s],i.commitType.NORMAL,a[s-2]);break;case 88:i.commit(a[s-4],a[s-2],i.commitType.NORMAL,a[s]);break;case 89:i.commit(a[s-2],a[s],i.commitType.NORMAL,a[s-4]);break;case 90:i.commit(a[s],a[s-2],i.commitType.NORMAL,a[s-4]);break;case 91:i.commit(a[s],a[s-4],i.commitType.NORMAL,a[s-2]);break;case 92:i.commit(a[s-2],a[s-4],i.commitType.NORMAL,a[s]);break;case 93:i.commit(a[s-6],a[s-4],a[s-2],a[s]);break;case 94:i.commit(a[s-6],a[s-4],a[s],a[s-2]);break;case 95:i.commit(a[s-6],a[s-2],a[s-4],a[s]);break;case 96:i.commit(a[s-6],a[s],a[s-4],a[s-2]);break;case 97:i.commit(a[s-6],a[s-2],a[s],a[s-4]);break;case 98:i.commit(a[s-6],a[s],a[s-2],a[s-4]);break;case 99:i.commit(a[s-4],a[s-6],a[s-2],a[s]);break;case 100:i.commit(a[s-4],a[s-6],a[s],a[s-2]);break;case 101:i.commit(a[s-2],a[s-6],a[s-4],a[s]);break;case 102:i.commit(a[s],a[s-6],a[s-4],a[s-2]);break;case 103:i.commit(a[s-2],a[s-6],a[s],a[s-4]);break;case 104:i.commit(a[s],a[s-6],a[s-2],a[s-4]);break;case 105:i.commit(a[s],a[s-4],a[s-2],a[s-6]);break;case 106:i.commit(a[s-2],a[s-4],a[s],a[s-6]);break;case 107:i.commit(a[s],a[s-2],a[s-4],a[s-6]);break;case 108:i.commit(a[s-2],a[s],a[s-4],a[s-6]);break;case 109:i.commit(a[s-4],a[s-2],a[s],a[s-6]);break;case 110:i.commit(a[s-4],a[s],a[s-2],a[s-6]);break;case 111:i.commit(a[s-2],a[s-4],a[s-6],a[s]);break;case 112:i.commit(a[s],a[s-4],a[s-6],a[s-2]);break;case 113:i.commit(a[s-2],a[s],a[s-6],a[s-4]);break;case 114:i.commit(a[s],a[s-2],a[s-6],a[s-4]);break;case 115:i.commit(a[s-4],a[s-2],a[s-6],a[s]);break;case 116:i.commit(a[s-4],a[s],a[s-6],a[s-2]);break;case 117:this.$="";break;case 118:this.$=a[s];break;case 119:this.$=i.commitType.NORMAL;break;case 120:this.$=i.commitType.REVERSE;break;case 121:this.$=i.commitType.HIGHLIGHT}},table:[{3:1,4:2,5:e,7:r,13:i,47:n},{1:[3]},{3:7,4:2,5:e,7:r,13:i,47:n},{6:8,7:a,8:[1,9],9:[1,10],10:11,13:c},t(s,[2,124]),t(s,[2,125]),t(s,[2,126]),{1:[2,1]},{7:[1,13]},{6:14,7:a,10:11,13:c},{8:[1,15]},t(o,[2,9],{11:16,12:[1,17]}),t(l,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:a,10:11,13:c},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],37:[1,33],40:[1,32]},t(l,[2,7]),{1:[2,3]},{7:[1,36]},t(o,[2,10]),{4:37,7:r,13:i,47:n},t(o,[2,12]),t(h,[2,13]),t(h,[2,14]),t(h,[2,15]),{20:[1,38]},{22:[1,39]},t(h,[2,18]),t(h,[2,19]),t(h,[2,20]),{27:40,33:m,46:u},t(h,[2,117],{41:43,32:[1,46],33:[1,48],35:[1,44],38:[1,45],42:[1,47]}),{27:49,33:m,46:u},{32:[1,50],35:[1,51]},{27:52,33:m,46:u},{1:[2,4]},t(o,[2,11]),t(h,[2,16]),t(h,[2,17]),t(h,[2,21]),t(y,[2,122]),t(y,[2,123]),t(h,[2,52]),{33:[1,53]},{39:54,43:p,44:b,45:g},{33:[1,58]},{33:[1,59]},t(h,[2,118]),t(h,[2,36],{32:[1,60],35:[1,62],38:[1,61]}),{33:[1,63]},{33:[1,64],36:[1,65]},t(h,[2,22],{29:[1,66]}),t(h,[2,53],{32:[1,68],38:[1,67],42:[1,69]}),t(h,[2,54],{32:[1,71],35:[1,70],42:[1,72]}),t(d,[2,119]),t(d,[2,120]),t(d,[2,121]),t(h,[2,57],{35:[1,73],38:[1,74],42:[1,75]}),t(h,[2,68],{32:[1,78],35:[1,76],38:[1,77]}),{33:[1,79]},{39:80,43:p,44:b,45:g},{33:[1,81]},t(h,[2,24],{34:[1,82],35:[1,83]}),{32:[1,84]},{32:[1,85]},{30:[1,86]},{39:87,43:p,44:b,45:g},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{33:[1,93]},{39:94,43:p,44:b,45:g},{33:[1,95]},{33:[1,96]},{39:97,43:p,44:b,45:g},{33:[1,98]},t(h,[2,37],{35:[1,100],38:[1,99]}),t(h,[2,38],{32:[1,102],35:[1,101]}),t(h,[2,39],{32:[1,103],38:[1,104]}),{33:[1,105]},{33:[1,106],36:[1,107]},{33:[1,108]},{33:[1,109]},t(h,[2,23]),t(h,[2,55],{32:[1,110],42:[1,111]}),t(h,[2,59],{38:[1,112],42:[1,113]}),t(h,[2,69],{32:[1,115],38:[1,114]}),t(h,[2,56],{32:[1,116],42:[1,117]}),t(h,[2,61],{35:[1,118],42:[1,119]}),t(h,[2,72],{32:[1,121],35:[1,120]}),t(h,[2,58],{38:[1,122],42:[1,123]}),t(h,[2,60],{35:[1,124],42:[1,125]}),t(h,[2,73],{35:[1,127],38:[1,126]}),t(h,[2,70],{32:[1,129],38:[1,128]}),t(h,[2,71],{32:[1,131],35:[1,130]}),t(h,[2,74],{35:[1,133],38:[1,132]}),{39:134,43:p,44:b,45:g},{33:[1,135]},{33:[1,136]},{33:[1,137]},{33:[1,138]},{39:139,43:p,44:b,45:g},t(h,[2,25],{35:[1,140]}),t(h,[2,26],{34:[1,141]}),t(h,[2,31],{34:[1,142]}),t(h,[2,29],{34:[1,143]}),t(h,[2,30],{34:[1,144]}),{33:[1,145]},{33:[1,146]},{39:147,43:p,44:b,45:g},{33:[1,148]},{39:149,43:p,44:b,45:g},{33:[1,150]},{33:[1,151]},{33:[1,152]},{33:[1,153]},{33:[1,154]},{33:[1,155]},{33:[1,156]},{39:157,43:p,44:b,45:g},{33:[1,158]},{33:[1,159]},{33:[1,160]},{39:161,43:p,44:b,45:g},{33:[1,162]},{39:163,43:p,44:b,45:g},{33:[1,164]},{33:[1,165]},{33:[1,166]},{39:167,43:p,44:b,45:g},{33:[1,168]},t(h,[2,43],{35:[1,169]}),t(h,[2,44],{38:[1,170]}),t(h,[2,42],{32:[1,171]}),t(h,[2,45],{35:[1,172]}),t(h,[2,40],{38:[1,173]}),t(h,[2,41],{32:[1,174]}),{33:[1,175],36:[1,176]},{33:[1,177]},{33:[1,178]},{33:[1,179]},{33:[1,180]},t(h,[2,66],{42:[1,181]}),t(h,[2,79],{32:[1,182]}),t(h,[2,67],{42:[1,183]}),t(h,[2,90],{38:[1,184]}),t(h,[2,80],{32:[1,185]}),t(h,[2,89],{38:[1,186]}),t(h,[2,65],{42:[1,187]}),t(h,[2,78],{32:[1,188]}),t(h,[2,64],{42:[1,189]}),t(h,[2,84],{35:[1,190]}),t(h,[2,77],{32:[1,191]}),t(h,[2,83],{35:[1,192]}),t(h,[2,63],{42:[1,193]}),t(h,[2,91],{38:[1,194]}),t(h,[2,62],{42:[1,195]}),t(h,[2,85],{35:[1,196]}),t(h,[2,86],{35:[1,197]}),t(h,[2,92],{38:[1,198]}),t(h,[2,76],{32:[1,199]}),t(h,[2,87],{38:[1,200]}),t(h,[2,75],{32:[1,201]}),t(h,[2,81],{35:[1,202]}),t(h,[2,82],{35:[1,203]}),t(h,[2,88],{38:[1,204]}),{33:[1,205]},{39:206,43:p,44:b,45:g},{33:[1,207]},{33:[1,208]},{39:209,43:p,44:b,45:g},{33:[1,210]},t(h,[2,27]),t(h,[2,32]),t(h,[2,28]),t(h,[2,33]),t(h,[2,34]),t(h,[2,35]),{33:[1,211]},{33:[1,212]},{33:[1,213]},{39:214,43:p,44:b,45:g},{33:[1,215]},{39:216,43:p,44:b,45:g},{33:[1,217]},{33:[1,218]},{33:[1,219]},{33:[1,220]},{33:[1,221]},{33:[1,222]},{33:[1,223]},{39:224,43:p,44:b,45:g},{33:[1,225]},{33:[1,226]},{33:[1,227]},{39:228,43:p,44:b,45:g},{33:[1,229]},{39:230,43:p,44:b,45:g},{33:[1,231]},{33:[1,232]},{33:[1,233]},{39:234,43:p,44:b,45:g},t(h,[2,46]),t(h,[2,48]),t(h,[2,47]),t(h,[2,49]),t(h,[2,51]),t(h,[2,50]),t(h,[2,107]),t(h,[2,108]),t(h,[2,105]),t(h,[2,106]),t(h,[2,110]),t(h,[2,109]),t(h,[2,114]),t(h,[2,113]),t(h,[2,112]),t(h,[2,111]),t(h,[2,116]),t(h,[2,115]),t(h,[2,104]),t(h,[2,103]),t(h,[2,102]),t(h,[2,101]),t(h,[2,99]),t(h,[2,100]),t(h,[2,98]),t(h,[2,97]),t(h,[2,96]),t(h,[2,95]),t(h,[2,93]),t(h,[2,94])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(t,e){if(!e.recoverable){var r=new Error(t);throw r.hash=e,r}this.trace(t)},parse:function(t){var e=this,r=[0],i=[],n=[null],a=[],c=this.table,s="",o=0,l=0,h=a.slice.call(arguments,1),m=Object.create(this.lexer),u={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(u.yy[y]=this.yy[y]);m.setInput(t,u.yy),u.yy.lexer=m,u.yy.parser=this,void 0===m.yylloc&&(m.yylloc={});var p=m.yylloc;a.push(p);var b=m.options&&m.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,d,f,k,$,x,_,T,w,E={};;){if(d=r[r.length-1],this.defaultActions[d]?f=this.defaultActions[d]:(null==g&&(w=void 0,"number"!=typeof(w=i.pop()||m.lex()||1)&&(w instanceof Array&&(w=(i=w).pop()),w=e.symbols_[w]||w),g=w),f=c[d]&&c[d][g]),void 0===f||!f.length||!f[0]){var L="";for($ in T=[],c[d])this.terminals_[$]&&$>2&&T.push("'"+this.terminals_[$]+"'");L=m.showPosition?"Parse error on line "+(o+1)+":\n"+m.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(L,{text:m.match,token:this.terminals_[g]||g,line:m.yylineno,loc:p,expected:T})}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+d+", token: "+g);switch(f[0]){case 1:r.push(g),n.push(m.yytext),a.push(m.yylloc),r.push(f[1]),g=null,l=m.yyleng,s=m.yytext,o=m.yylineno,p=m.yylloc;break;case 2:if(x=this.productions_[f[1]][1],E.$=n[n.length-x],E._$={first_line:a[a.length-(x||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(x||1)].first_column,last_column:a[a.length-1].last_column},b&&(E._$.range=[a[a.length-(x||1)].range[0],a[a.length-1].range[1]]),void 0!==(k=this.performAction.apply(E,[s,l,o,u.yy,f[1],n,a].concat(h))))return k;x&&(r=r.slice(0,-1*x*2),n=n.slice(0,-1*x),a=a.slice(0,-1*x)),r.push(this.productions_[f[1]][0]),n.push(E.$),a.push(E._$),_=c[r[r.length-2]][r[r.length-1]],r.push(_);break;case 3:return!0}}return!0}},k={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===i.length?this.yylloc.first_column:0)+i[i.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,i,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var a in n)this[a]=n[a];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),a=0;a<n.length;a++)if((r=this._input.match(this.rules[n[a]]))&&(!e||r[0].length>e[0].length)){if(e=r,i=a,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,n[a])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,r,i){switch(r){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:case 30:case 34:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:case 9:break;case 10:return 5;case 11:return 40;case 12:return 32;case 13:return 38;case 14:return 42;case 15:return 43;case 16:return 44;case 17:return 45;case 18:return 35;case 19:return 28;case 20:return 29;case 21:return 37;case 22:return 31;case 23:return 34;case 24:return 26;case 25:case 26:return 9;case 27:return 8;case 28:return"CARET";case 29:this.begin("options");break;case 31:return 12;case 32:return 36;case 33:this.begin("string");break;case 35:return 33;case 36:return 30;case 37:return 46;case 38:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:parent:)/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[30,31],inclusive:!1},string:{rules:[34,35],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32,33,36,37,38,39],inclusive:!0}}};function $(){this.yy={}}return f.lexer=k,$.prototype=f,f.Parser=$,new $}());a.parser=a;const c=a;let s=(0,i.c)().gitGraph.mainBranchName,o=(0,i.c)().gitGraph.mainBranchOrder,l={},h=null,m={};m[s]={name:s,order:o};let u={};u[s]=h;let y=s,p="LR",b=0;function g(){return(0,i.x)({length:7})}let d={};const f=function(t){if(t=i.e.sanitizeText(t,(0,i.c)()),void 0===u[t]){let e=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}{y=t;const e=u[y];h=l[e]}};function k(t,e,r){const i=t.indexOf(e);-1===i?t.push(r):t.splice(i,1,r)}function $(t){const e=t.reduce(((t,e)=>t.seq>e.seq?t:e),t[0]);let r="";t.forEach((function(t){r+=t===e?"\t*":"\t|"}));const n=[r,e.id,e.seq];for(let i in u)u[i]===e.id&&n.push(i);if(i.l.debug(n.join(" ")),e.parents&&2==e.parents.length){const r=l[e.parents[0]];k(t,e,r),t.push(l[e.parents[1]])}else{if(0==e.parents.length)return;{const r=l[e.parents];k(t,e,r)}}$(t=function(t,e){const r=Object.create(null);return t.reduce(((t,i)=>{const n=e(i);return r[n]||(r[n]=!0,t.push(i)),t}),[])}(t,(t=>t.id)))}const x=function(){const t=Object.keys(l).map((function(t){return l[t]}));return t.forEach((function(t){i.l.debug(t.id)})),t.sort(((t,e)=>t.seq-e.seq)),t},_={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},T={getConfig:()=>(0,i.c)().gitGraph,setDirection:function(t){p=t},setOptions:function(t){i.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{d=JSON.parse(t)}catch(e){i.l.error("error while parsing gitGraph options",e.message)}},getOptions:function(){return d},commit:function(t,e,r,n){i.l.debug("Entering commit:",t,e,r,n),e=i.e.sanitizeText(e,(0,i.c)()),t=i.e.sanitizeText(t,(0,i.c)()),n=i.e.sanitizeText(n,(0,i.c)());const a={id:e||b+"-"+g(),message:t,seq:b++,type:r||_.NORMAL,tag:n||"",parents:null==h?[]:[h.id],branch:y};h=a,l[a.id]=a,u[y]=a.id,i.l.debug("in pushCommit "+a.id)},branch:function(t,e){if(t=i.e.sanitizeText(t,(0,i.c)()),void 0!==u[t]){let e=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw e.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},e}u[t]=null!=h?h.id:null,m[t]={name:t,order:e?parseInt(e,10):null},f(t),i.l.debug("in createBranch")},merge:function(t,e,r,n){t=i.e.sanitizeText(t,(0,i.c)()),e=i.e.sanitizeText(e,(0,i.c)());const a=l[u[y]],c=l[u[t]];if(y===t){let e=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(void 0===a||!a){let e=new Error('Incorrect usage of "merge". Current branch ('+y+")has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},e}if(void 0===u[t]){let e=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},e}if(void 0===c||!c){let e=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},e}if(a===c){let e=new Error('Incorrect usage of "merge". Both branches have same head');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(e&&void 0!==l[e]){let i=new Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw i.hash={text:"merge "+t+e+r+n,token:"merge "+t+e+r+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+r+" "+n]},i}const s={id:e||b+"-"+g(),message:"merged branch "+t+" into "+y,seq:b++,parents:[null==h?null:h.id,u[t]],branch:y,type:_.MERGE,customType:r,customId:!!e,tag:n||""};h=s,l[s.id]=s,u[y]=s.id,i.l.debug(u),i.l.debug("in mergeBranch")},cherryPick:function(t,e,r,n){if(i.l.debug("Entering cherryPick:",t,e,r),t=i.e.sanitizeText(t,(0,i.c)()),e=i.e.sanitizeText(e,(0,i.c)()),r=i.e.sanitizeText(r,(0,i.c)()),n=i.e.sanitizeText(n,(0,i.c)()),!t||void 0===l[t]){let r=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}let a=l[t],c=a.branch;if(n&&(!Array.isArray(a.parents)||!a.parents.includes(n))){throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.")}if(a.type===_.MERGE&&!n){throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.")}if(!e||void 0===l[e]){if(c===y){let r=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}const s=l[u[y]];if(void 0===s||!s){let r=new Error('Incorrect usage of "cherry-pick". Current branch ('+y+")has no commits");throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}const o={id:b+"-"+g(),message:"cherry-picked "+a+" into "+y,seq:b++,parents:[null==h?null:h.id,a.id],branch:y,type:_.CHERRY_PICK,tag:r??`cherry-pick:${a.id}${a.type===_.MERGE?`|parent:${n}`:""}`};h=o,l[o.id]=o,u[y]=o.id,i.l.debug(u),i.l.debug("in cherryPick")}},checkout:f,prettyPrint:function(){i.l.debug(l);$([x()[0]])},clear:function(){l={},h=null;let t=(0,i.c)().gitGraph.mainBranchName,e=(0,i.c)().gitGraph.mainBranchOrder;u={},u[t]=null,m={},m[t]={name:t,order:e},y=t,b=0,(0,i.t)()},getBranchesAsObjArray:function(){return Object.values(m).map(((t,e)=>null!==t.order?t:{...t,order:parseFloat(`0.${e}`,10)})).sort(((t,e)=>t.order-e.order)).map((({name:t})=>({name:t})))},getBranches:function(){return u},getCommits:function(){return l},getCommitsArray:x,getCurrentBranch:function(){return y},getDirection:function(){return p},getHead:function(){return h},setAccTitle:i.s,getAccTitle:i.g,getAccDescription:i.a,setAccDescription:i.b,setDiagramTitle:i.q,getDiagramTitle:i.r,commitType:_};let w={};const E=0,L=1,M=2,v=3,A=4;let I={},R={},O=[],C=0,S="LR";const P=t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","text");let r=[];r="string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[];for(const i of r){const t=document.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","0"),t.setAttribute("class","row"),t.textContent=i.trim(),e.appendChild(t)}return e},B=(t,e,r)=>{const n=(0,i.c)().gitGraph,a=t.append("g").attr("class","commit-bullets"),c=t.append("g").attr("class","commit-labels");let s=0;"TB"===S&&(s=30);const o=Object.keys(e).sort(((t,r)=>e[t].seq-e[r].seq)),l=n.parallelCommits,h=10;o.forEach((t=>{const i=e[t];if(l)if(i.parents.length){const t=(t=>{let e="",r=0;return t.forEach((t=>{const i="TB"===S?R[t].y:R[t].x;i>=r&&(e=t,r=i)})),e||void 0})(i.parents);s="TB"===S?R[t].y+40:R[t].x+40}else s=0,"TB"===S&&(s=30);const o=s+h,m="TB"===S?o:I[i.branch].pos,u="TB"===S?I[i.branch].pos:o;if(r){let t,e=void 0!==i.customType&&""!==i.customType?i.customType:i.type;switch(e){case E:t="commit-normal";break;case L:t="commit-reverse";break;case M:t="commit-highlight";break;case v:t="commit-merge";break;case A:t="commit-cherry-pick";break;default:t="commit-normal"}if(e===M){const e=a.append("rect");e.attr("x",u-10),e.attr("y",m-10),e.attr("height",20),e.attr("width",20),e.attr("class",`commit ${i.id} commit-highlight${I[i.branch].index%8} ${t}-outer`),a.append("rect").attr("x",u-6).attr("y",m-6).attr("height",12).attr("width",12).attr("class",`commit ${i.id} commit${I[i.branch].index%8} ${t}-inner`)}else if(e===A)a.append("circle").attr("cx",u).attr("cy",m).attr("r",10).attr("class",`commit ${i.id} ${t}`),a.append("circle").attr("cx",u-3).attr("cy",m+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${t}`),a.append("circle").attr("cx",u+3).attr("cy",m+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${t}`),a.append("line").attr("x1",u+3).attr("y1",m+1).attr("x2",u).attr("y2",m-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${t}`),a.append("line").attr("x1",u-3).attr("y1",m+1).attr("x2",u).attr("y2",m-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${t}`);else{const r=a.append("circle");if(r.attr("cx",u),r.attr("cy",m),r.attr("r",i.type===v?9:10),r.attr("class",`commit ${i.id} commit${I[i.branch].index%8}`),e===v){const e=a.append("circle");e.attr("cx",u),e.attr("cy",m),e.attr("r",6),e.attr("class",`commit ${t} ${i.id} commit${I[i.branch].index%8}`)}if(e===L){a.append("path").attr("d",`M ${u-5},${m-5}L${u+5},${m+5}M${u-5},${m+5}L${u+5},${m-5}`).attr("class",`commit ${t} ${i.id} commit${I[i.branch].index%8}`)}}}if(R[i.id]="TB"===S?{x:u,y:o}:{x:o,y:m},r){const t=4,e=2;if(i.type!==A&&(i.customId&&i.type===v||i.type!==v)&&n.showCommitLabel){const r=c.append("g"),a=r.insert("rect").attr("class","commit-label-bkg"),l=r.append("text").attr("x",s).attr("y",m+25).attr("class","commit-label").text(i.id);let h=l.node().getBBox();if(a.attr("x",o-h.width/2-e).attr("y",m+13.5).attr("width",h.width+2*e).attr("height",h.height+2*e),"TB"===S&&(a.attr("x",u-(h.width+4*t+5)).attr("y",m-12),l.attr("x",u-(h.width+4*t)).attr("y",m+h.height-12)),"TB"!==S&&l.attr("x",o-h.width/2),n.rotateCommitLabel)if("TB"===S)l.attr("transform","rotate(-45, "+u+", "+m+")"),a.attr("transform","rotate(-45, "+u+", "+m+")");else{let t=-7.5-(h.width+10)/25*9.5,e=10+h.width/25*8.5;r.attr("transform","translate("+t+", "+e+") rotate(-45, "+s+", "+m+")")}}if(i.tag){const r=c.insert("polygon"),n=c.append("circle"),a=c.append("text").attr("y",m-16).attr("class","tag-label").text(i.tag);let l=a.node().getBBox();a.attr("x",o-l.width/2);const y=l.height/2,p=m-19.2;r.attr("class","tag-label-bkg").attr("points",`\n          ${s-l.width/2-t/2},${p+e}\n          ${s-l.width/2-t/2},${p-e}\n          ${o-l.width/2-t},${p-y-e}\n          ${o+l.width/2+t},${p-y-e}\n          ${o+l.width/2+t},${p+y+e}\n          ${o-l.width/2-t},${p+y+e}`),n.attr("cx",s-l.width/2+t/2).attr("cy",p).attr("r",1.5).attr("class","tag-hole"),"TB"===S&&(r.attr("class","tag-label-bkg").attr("points",`\n            ${u},${s+e}\n            ${u},${s-e}\n            ${u+h},${s-y-e}\n            ${u+h+l.width+t},${s-y-e}\n            ${u+h+l.width+t},${s+y+e}\n            ${u+h},${s+y+e}`).attr("transform","translate(12,12) rotate(45, "+u+","+s+")"),n.attr("cx",u+t/2).attr("cy",s).attr("transform","translate(12,12) rotate(45, "+u+","+s+")"),a.attr("x",u+5).attr("y",s+3).attr("transform","translate(14,14) rotate(45, "+u+","+s+")"))}}s+=50,s>C&&(C=s)}))},N=(t,e,r,i,n)=>{const a=("TB"===S?r.x<i.x:r.y<i.y)?e.branch:t.branch;return Object.values(n).some((r=>{return(i=r).seq>t.seq&&i.seq<e.seq&&(t=>t.branch===a)(r);var i}))},G=(t,e,r=0)=>{const i=t+Math.abs(t-e)/2;if(r>5)return i;if(O.every((t=>Math.abs(t-i)>=10)))return O.push(i),i;const n=Math.abs(t-e);return G(t,e-n/5,r+1)},H=(t,e)=>{const r=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach((t=>{const i=e[t];i.parents&&i.parents.length>0&&i.parents.forEach((t=>{((t,e,r,i)=>{const n=R[e.id],a=R[r.id],c=N(e,r,n,a,i);let s,o="",l="",h=0,m=0,u=I[r.branch].index;if(c){o="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10;const t=n.y<a.y?G(n.y,a.y):G(a.y,n.y),i=n.x<a.x?G(n.x,a.x):G(a.x,n.x);"TB"===S?n.x<a.x?(u=I[r.branch].index,s=`M ${n.x} ${n.y} L ${i-h} ${n.y} ${l} ${i} ${n.y+m} L ${i} ${a.y-h} ${o} ${i+m} ${a.y} L ${a.x} ${a.y}`):(u=I[e.branch].index,s=`M ${n.x} ${n.y} L ${i+h} ${n.y} ${o} ${i} ${n.y+m} L ${i} ${a.y-h} ${l} ${i-m} ${a.y} L ${a.x} ${a.y}`):n.y<a.y?(u=I[r.branch].index,s=`M ${n.x} ${n.y} L ${n.x} ${t-h} ${o} ${n.x+m} ${t} L ${a.x-h} ${t} ${l} ${a.x} ${t+m} L ${a.x} ${a.y}`):(u=I[e.branch].index,s=`M ${n.x} ${n.y} L ${n.x} ${t+h} ${l} ${n.x+m} ${t} L ${a.x-h} ${t} ${o} ${a.x} ${t-m} L ${a.x} ${a.y}`)}else"TB"===S?(n.x<a.x&&(o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,u=I[r.branch].index,s=`M ${n.x} ${n.y} L ${a.x-h} ${n.y} ${l} ${a.x} ${n.y+m} L ${a.x} ${a.y}`),n.x>a.x&&(o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,u=I[e.branch].index,s=`M ${n.x} ${n.y} L ${n.x} ${a.y-h} ${l} ${n.x-m} ${a.y} L ${a.x} ${a.y}`),n.x===a.x&&(u=I[e.branch].index,s=`M ${n.x} ${n.y} L ${n.x+h} ${n.y} ${o} ${n.x+m} ${a.y+h} L ${a.x} ${a.y}`)):(n.y<a.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=I[r.branch].index,s=`M ${n.x} ${n.y} L ${n.x} ${a.y-h} ${o} ${n.x+m} ${a.y} L ${a.x} ${a.y}`),n.y>a.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=I[e.branch].index,s=`M ${n.x} ${n.y} L ${a.x-h} ${n.y} ${o} ${a.x} ${n.y-m} L ${a.x} ${a.y}`),n.y===a.y&&(u=I[e.branch].index,s=`M ${n.x} ${n.y} L ${n.x} ${a.y-h} ${o} ${n.x+m} ${a.y} L ${a.x} ${a.y}`));t.append("path").attr("d",s).attr("class","arrow arrow"+u%8)})(r,e[t],i,e)}))}))},D={parser:c,db:T,renderer:{draw:function(t,e,r,a){I={},R={},w={},C=0,O=[],S="LR";const c=(0,i.c)(),s=c.gitGraph;i.l.debug("in gitgraph renderer",t+"\n","id:",e,r),w=a.db.getCommits();const o=a.db.getBranchesAsObjArray();S=a.db.getDirection();const l=(0,n.MlD)(`[id="${e}"]`);let h=0;o.forEach(((t,e)=>{const r=P(t.name),i=l.append("g"),n=i.insert("g").attr("class","branchLabel"),a=n.insert("g").attr("class","label branch-label");a.node().appendChild(r);let c=r.getBBox();I[t.name]={pos:h,index:e},h+=50+(s.rotateCommitLabel?40:0)+("TB"===S?c.width/2:0),a.remove(),n.remove(),i.remove()})),B(l,w,!1),s.showBranches&&((t,e)=>{const r=(0,i.c)().gitGraph,n=t.append("g");e.forEach(((t,e)=>{const i=e%8,a=I[t.name].pos,c=n.append("line");c.attr("x1",0),c.attr("y1",a),c.attr("x2",C),c.attr("y2",a),c.attr("class","branch branch"+i),"TB"===S&&(c.attr("y1",30),c.attr("x1",a),c.attr("y2",C),c.attr("x2",a)),O.push(a);let s=t.name;const o=P(s),l=n.insert("rect"),h=n.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+i);h.node().appendChild(o);let m=o.getBBox();l.attr("class","branchLabelBkg label"+i).attr("rx",4).attr("ry",4).attr("x",-m.width-4-(!0===r.rotateCommitLabel?30:0)).attr("y",-m.height/2+8).attr("width",m.width+18).attr("height",m.height+4),h.attr("transform","translate("+(-m.width-14-(!0===r.rotateCommitLabel?30:0))+", "+(a-m.height/2-1)+")"),"TB"===S&&(l.attr("x",a-m.width/2-10).attr("y",0),h.attr("transform","translate("+(a-m.width/2-5)+", 0)")),"TB"!==S&&l.attr("transform","translate(-19, "+(a-m.height/2)+")")}))})(l,o),H(l,w),B(l,w,!0),i.u.insertTitle(l,"gitTitleText",s.titleTopMargin,a.db.getDiagramTitle()),(0,i.y)(void 0,l,s.diagramPadding,s.useMaxWidth??c.useMaxWidth)}},styles:t=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[0,1,2,3,4,5,6,7].map((e=>`\n        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }\n        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }\n        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }\n        .label${e}  { fill: ${t["git"+e]}; }\n        .arrow${e} { stroke: ${t["git"+e]}; }\n        `)).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${t.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}\n  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}\n  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }\n  .tag-hole { fill: ${t.textColor}; }\n\n  .commit-merge {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }\n`}}}]);