var CONTEXT=function(){var a={},b={},c=function(b,c){if(c==null)throw"variable "+b+" can not be null";a[b]=c},d=function(b){return a[b]},e=function(a,c){if(c==null)throw"element "+a+" can not be null";b[a]=c},f=function(a){return b[a]},g={};return g.setVar=c,g.getVar=d,g.setElement=e,g.getElement=f,g}()