montageDefine("6a22cd0","core/serialization/bindings",{dependencies:["frb","frb/parse","frb/stringify","frb/expand","frb/scope","../serialization"],factory:function(e){var t=e("frb"),n=(e("frb/parse"),e("frb/stringify")),r=e("frb/expand"),i=e("frb/scope"),a=e("../serialization").Serializer,o=e("../serialization").Deserializer;a.defineSerializationUnit("bindings",function(e,a){var o,s=t.getBindings(a),l={};for(var u in s){var c=s[u],d={};if(!("serializable"in c)||c.serializable){var h=c.sourcePath,p=c.sourceSyntax;if(c.source!==a){var f=e.getObjectLabel(c.source),v=new i({type:"component",label:f});v.components=e,p=r(p,v)}var v=new i;v.components=e,h=n(p,v),c.twoWay?d["<->"]=h:d["<-"]=h,c.converter?d.converter=c.converter:(d.convert=c.convert,d.revert=c.revert),c.trace&&(d.trace=!0),l[u]=d,o=!0}}return o?l:void 0}),o.defineDeserializationUnit("bindings",function(e,n,r){for(var i in r){var a=r[i];if("object"!=typeof a)throw Error("Binding descriptor must be an object, not "+typeof a);"boundObject"in a?(a.source=e.getObjectByLabel(a.boundObject),a.oneway?a["<-"]=a.boundPropertyPath:a["<->"]=a.boundPropertyPath,delete a.boundObject,delete a.boundObjectPropertyPath,delete a.oneway):a["<<->"]&&(console.warn("WARNING: <<-> in bindings is deprectated, use <-> only, please update now."),a["<->"]=a["<<->"],delete a["<<->"])}t.defineBindings(n,r,{components:e})})}});