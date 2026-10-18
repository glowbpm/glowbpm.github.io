(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Jn={photo:{webp:"/img/glow-foto.webp",fallback:"/img/glow-foto.jpg"},bio:["Soy Glow, artista y compositor de Cádiz. Hago música para contar lo que vivo: lo que siento, lo que me pasa y lo que me cuesta decir de otra forma. Mis letras son mi manera de expresarme, y lo que busco es que quien me escuche se sienta identificado.","No me gusta encerrarme en un solo estilo. Me muevo entre el R&B, el R&B de los 2000, el reggaetón, el trap y el Jersey Club, pero siempre con mi forma de escribir: hablo de amor, de desamor y de salir adelante. Mi mayor referente es Milo J, y también me han inspirado mucho artistas como Trueno.","Para mí esto va en serio. Le pongo sensibilidad, ambición y mucha constancia, y trabajo cada día para construir algo propio, que se reconozca dentro de la escena urbana. Cuido cada detalle: el sonido, la imagen y cómo llego a la gente. Lo que quiero es ser auténtico y conectar de verdad con quien me escucha."],facts:[{value:"Cádiz",label:"Ciudad"},{value:"Música urbana",label:"Género"}],redes:{spotify:"https://open.spotify.com/intl-es/artist/47XTD1K1s0C5YBKNRhgwRH",appleMusic:"https://music.apple.com/es/artist/glow/1806934395",instagram:"https://www.instagram.com/glow.bpm/",tiktok:"https://www.tiktok.com/@glow.bpm",youtube:"https://openinyoutube.com/@ESGLOWBABY"},email:"glowbpm.business@gmail.com"},Wc=[{type:"image",src:Jn.photo.webp,fallback:Jn.photo.fallback,alt:"Glow en concierto"},{type:"video",src:"/galeria/concierto.mp4",poster:"/galeria/concierto-poster.jpg",alt:"Glow actuando en directo"},{type:"image",src:"/galeria/directo.jpg",alt:"Glow en directo"},{type:"image",src:"/galeria/noche-1.jpg",alt:"Glow de noche"},{type:"image",src:"/galeria/noche-2.jpg",alt:"Glow de noche"},{type:"image",src:"/galeria/colgante.jpg",alt:"Colgante de Glow"},{type:"image",src:"/galeria/skate.jpg",alt:"Glow patinando"},{type:"image",src:"/galeria/karting.jpg",alt:"Glow en los karts"}],Xc={titulo:"FLK",artistas:"Glow & ARDZ",fecha:"18 de septiembre de 2026",banner:"/img/banner-lanzamiento.jpg",bannerWebp:"/img/banner-lanzamiento.webp",audio:"/audio/flk-preview.mp3",spotify:"https://open.spotify.com/intl-es/track/0AQzkl1PWH6Wo9Aj6V1c4d",youtube:"https://openinyoutube.com/watch?v=CAb08cfc46Q"},jc=[{titulo:"FLK",artistas:"Glow & ARDZ",anio:"2026",portada:"/img/flk-portada.jpg",audio:"/audio/flk-preview.mp3",spotify:"https://open.spotify.com/intl-es/track/0AQzkl1PWH6Wo9Aj6V1c4d",youtube:"https://openinyoutube.com/watch?v=CAb08cfc46Q"},{titulo:"Calling",artistas:"Glow & Er Romeroo",anio:"2026",portada:"/img/calling-portada.jpg",audio:"/audio/calling-preview.mp3",spotify:"https://open.spotify.com/intl-es/track/0DfgE3sZ9eV01Wivc8HBgi",youtube:"https://openinyoutube.com/watch?v=Tli8DIrrzqY"},{titulo:"Exotic",artistas:"Glow",anio:"2026",portada:"/img/exotic-portada.jpg",audio:"/audio/exotic-preview.mp3",spotify:"https://open.spotify.com/intl-es/track/1e81ioPYlabQYB0S0j9zeJ",youtube:"https://openinyoutube.com/watch?v=UteJF-vVXBQ"},{titulo:"3 AM",artistas:"Glow (Prod. JNULL)",portada:"/img/3am-portada.jpg",audio:"/audio/3am-preview.mp3",spotify:"PEGA AQUÍ EL ENLACE DE SPOTIFY DE 3 AM",youtube:"https://openinyoutube.com/watch?v=-sy6ILUBsi0"},{titulo:"Feel You",artistas:"Glow",anio:"2025",portada:"/img/feel-you-portada.jpg",audio:"/audio/feel-you-preview.mp3",spotify:"https://open.spotify.com/intl-es/track/5p4VrgKABost82fNVwuMI6",youtube:"https://openinyoutube.com/watch?v=b7kB1pY_bmY"},{titulo:"Privacity",artistas:"Glow",anio:"2024",portada:"/img/privacity-portada.jpg",audio:"/audio/privacity-preview.mp3",spotify:"https://open.spotify.com/intl-es/track/6ZyxvTkJsMsb8wdJiS32Jc",youtube:"https://openinyoutube.com/watch?v=sL0Ip2ut68I"}];const Qa="180",Jc=0,So=1,qc=2,Fl=1,Yc=2,gn=3,Rn=0,Rt=1,nn=2,xn=0,Ai=1,ls=2,Mo=3,yo=4,Zc=5,Gn=100,Qc=101,Kc=102,$c=103,eu=104,tu=200,nu=201,iu=202,ru=203,ia=204,ra=205,su=206,au=207,ou=208,lu=209,cu=210,uu=211,hu=212,fu=213,du=214,sa=0,aa=1,oa=2,bi=3,la=4,ca=5,ua=6,ha=7,zl=0,pu=1,mu=2,Pn=0,Bl=1,Hl=2,kl=3,Ka=4,Gl=5,Vl=6,Wl=7,Xl=300,wi=301,Pi=302,fa=303,da=304,gs=306,cs=1e3,Wn=1001,pa=1002,Ut=1003,gu=1004,Ar=1005,sn=1006,Ms=1007,Xn=1008,cn=1009,jl=1010,Jl=1011,ur=1012,$a=1013,qn=1014,an=1015,_n=1016,eo=1017,to=1018,hr=1020,ql=35902,Yl=35899,Zl=1021,Ql=1022,Qt=1023,fr=1026,dr=1027,no=1028,io=1029,Kl=1030,ro=1031,so=1033,ns=33776,is=33777,rs=33778,ss=33779,ma=35840,ga=35841,va=35842,xa=35843,_a=36196,Sa=37492,Ma=37496,ya=37808,Ea=37809,Aa=37810,Ta=37811,ba=37812,wa=37813,Pa=37814,Ra=37815,Ca=37816,Ia=37817,La=37818,Da=37819,Na=37820,Ua=37821,Oa=36492,Fa=36494,za=36495,Ba=36283,Ha=36284,ka=36285,Ga=36286,vu=3200,xu=3201,$l=0,_u=1,rn="",wt="srgb",Ri="srgb-linear",us="linear",tt="srgb",ei=7680,Eo=519,Su=512,Mu=513,yu=514,ec=515,Eu=516,Au=517,Tu=518,bu=519,Va=35044,Ao="300 es",on=2e3,hs=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let To=1234567;const sr=Math.PI/180,Ci=180/Math.PI;function ln(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function ao(i,e){return(i%e+e)%e}function wu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Pu(i,e,t){return i!==e?(t-i)/(e-i):0}function ar(i,e,t){return(1-t)*i+t*e}function Ru(i,e,t,n){return ar(i,e,1-Math.exp(-t*n))}function Cu(i,e=1){return e-Math.abs(ao(i,e*2)-e)}function Iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Du(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nu(i,e){return i+Math.random()*(e-i)}function Uu(i){return i*(.5-Math.random())}function Ou(i){i!==void 0&&(To=i);let e=To+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fu(i){return i*sr}function zu(i){return i*Ci}function Bu(i){return(i&i-1)===0&&i!==0}function Hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ti={DEG2RAD:sr,RAD2DEG:Ci,generateUUID:ln,clamp:qe,euclideanModulo:ao,mapLinear:wu,inverseLerp:Pu,lerp:ar,damp:Ru,pingpong:Cu,smoothstep:Iu,smootherstep:Lu,randInt:Du,randFloat:Nu,randFloatSpread:Uu,seededRandom:Ou,degToRad:Fu,radToDeg:zu,isPowerOfTwo:Bu,ceilPowerOfTwo:Hu,floorPowerOfTwo:ku,setQuaternionFromProperEuler:Gu,normalize:nt,denormalize:Zt};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*x,b=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const I=Math.sqrt(y),w=Math.atan2(I,d*b);m=Math.sin(m*w)/I,o=Math.sin(o*w)/I}const S=o*b;if(l=l*m+f*S,c=c*m+p*S,u=u*m+g*S,h=h*m+x*S,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ys.copy(this).projectOnVector(e),this.sub(ys)}reflect(e){return this.sub(ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ys=new L,bo=new Oi;class Xe{constructor(e,t,n,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=r[0],m=r[3],d=r[6],b=r[1],y=r[4],S=r[7],I=r[2],w=r[5],P=r[8];return s[0]=a*x+o*b+l*I,s[3]=a*m+o*y+l*w,s[6]=a*d+o*S+l*P,s[1]=c*x+u*b+h*I,s[4]=c*m+u*y+h*w,s[7]=c*d+u*S+h*P,s[2]=f*x+p*b+g*I,s[5]=f*m+p*y+g*w,s[8]=f*d+p*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Xe;function tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vu(){const i=pr("canvas");return i.style.display="block",i}const wo={};function mr(i){i in wo||(wo[i]=!0,console.warn(i))}function Wu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Po=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ro=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xu(){const i={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Sn(r.r),r.g=Sn(r.g),r.b=Sn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rn?us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ri]:{primaries:e,whitePoint:n,transfer:us,toXYZ:Po,fromXYZ:Ro,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Po,fromXYZ:Ro,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),i}const Qe=Xu();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class ju{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=pr("canvas")),ni.width=e.width,ni.height=e.height;const r=ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Sn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ju=0;class oo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(As(r[a].image)):s.push(As(r[a]))}else s=As(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function As(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ju.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qu=0;const Ts=new L;class gt extends Ui{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Wn,r=Wn,s=sn,a=Xn,o=Qt,l=cn,c=gt.DEFAULT_ANISOTROPY,u=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=ln(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ts).x}get height(){return this.source.getSize(Ts).y}get depth(){return this.source.getSize(Ts).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Xl;gt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(p+1)/2,I=(d+1)/2,w=(u+f)/4,P=(h+x)/4,U=(g+m)/4;return y>S&&y>I?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=P/n):S>I?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=w/r,s=U/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=P/s,r=U/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new gt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new oo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kt extends Yu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class nc extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zu extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(s,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),br.subVectors(this.max,ji),ii.subVectors(e.a,ji),ri.subVectors(e.b,ji),si.subVectors(e.c,ji),yn.subVectors(ri,ii),En.subVectors(si,ri),Dn.subVectors(ii,si);let t=[0,-yn.z,yn.y,0,-En.z,En.y,0,-Dn.z,Dn.y,yn.z,0,-yn.x,En.z,0,-En.x,Dn.z,0,-Dn.x,-yn.y,yn.x,0,-En.y,En.x,0,-Dn.y,Dn.x,0];return!bs(t,ii,ri,si,br)||(t=[1,0,0,0,1,0,0,0,1],!bs(t,ii,ri,si,br))?!1:(wr.crossVectors(yn,En),t=[wr.x,wr.y,wr.z],bs(t,ii,ri,si,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hn=[new L,new L,new L,new L,new L,new L,new L,new L],Jt=new L,Tr=new Zn,ii=new L,ri=new L,si=new L,yn=new L,En=new L,Dn=new L,ji=new L,br=new L,wr=new L,Nn=new L;function bs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Nn.fromArray(i,s);const o=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Qu=new Zn,Ji=new L,ws=new L;class Sr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ji,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(ws)),this.expandByPoint(Ji.copy(e.center).sub(ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fn=new L,Ps=new L,Pr=new L,An=new L,Rs=new L,Rr=new L,Cs=new L;class Ku{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ps.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Ps);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=An.dot(this.direction),l=-An.dot(Pr),c=An.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ps).addScaledVector(Pr,f),p}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),r=fn.dot(fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,r,s){Rs.subVectors(t,e),Rr.subVectors(n,e),Cs.crossVectors(Rs,Rr);let a=this.direction.dot(Cs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(Rr.crossVectors(An,Rr));if(l<0)return null;const c=o*this.direction.dot(Rs.cross(An));if(c<0||l+c>a)return null;const u=-o*An.dot(Cs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,a,o,l,c,u,h,f,p,g,x,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,p,g,x,m)}set(e,t,n,r,s,a,o,l,c,u,h,f,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ai.setFromMatrixColumn(e,0).length(),s=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f-x*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($u,e,eh)}lookAt(e,t,n){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Tn.crossVectors(n,Lt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Tn.crossVectors(n,Lt)),Tn.normalize(),Cr.crossVectors(Lt,Tn),r[0]=Tn.x,r[4]=Cr.x,r[8]=Lt.x,r[1]=Tn.y,r[5]=Cr.y,r[9]=Lt.y,r[2]=Tn.z,r[6]=Cr.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],b=n[3],y=n[7],S=n[11],I=n[15],w=r[0],P=r[4],U=r[8],E=r[12],M=r[1],C=r[5],z=r[9],X=r[13],te=r[2],V=r[6],q=r[10],$=r[14],k=r[3],he=r[7],_e=r[11],ve=r[15];return s[0]=a*w+o*M+l*te+c*k,s[4]=a*P+o*C+l*V+c*he,s[8]=a*U+o*z+l*q+c*_e,s[12]=a*E+o*X+l*$+c*ve,s[1]=u*w+h*M+f*te+p*k,s[5]=u*P+h*C+f*V+p*he,s[9]=u*U+h*z+f*q+p*_e,s[13]=u*E+h*X+f*$+p*ve,s[2]=g*w+x*M+m*te+d*k,s[6]=g*P+x*C+m*V+d*he,s[10]=g*U+x*z+m*q+d*_e,s[14]=g*E+x*X+m*$+d*ve,s[3]=b*w+y*M+S*te+I*k,s[7]=b*P+y*C+S*V+I*he,s[11]=b*U+y*z+S*q+I*_e,s[15]=b*E+y*X+S*$+I*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*p-n*l*p)+x*(+t*l*p-t*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+d*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],b=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,y=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,S=u*x*c-g*h*c+g*o*p-a*x*p-u*o*d+a*h*d,I=g*h*l-u*x*l-g*o*f+a*x*f+u*o*m-a*h*m,w=t*b+n*y+r*S+s*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=b*P,e[1]=(x*f*s-h*m*s-x*r*p+n*m*p+h*r*d-n*f*d)*P,e[2]=(o*m*s-x*l*s+x*r*c-n*m*c-o*r*d+n*l*d)*P,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*p-n*l*p)*P,e[4]=y*P,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*P,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*d-t*l*d)*P,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*p+t*l*p)*P,e[8]=S*P,e[9]=(g*h*s-u*x*s-g*n*p+t*x*p+u*n*d-t*h*d)*P,e[10]=(a*x*s-g*o*s+g*n*c-t*x*c-a*n*d+t*o*d)*P,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*P,e[12]=I*P,e[13]=(u*x*r-g*h*r+g*n*f-t*x*f-u*n*m+t*h*m)*P,e[14]=(g*o*r-a*x*r-g*n*l+t*x*l+a*n*m-t*o*m)*P,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,x=a*u,m=a*h,d=o*h,b=l*c,y=l*u,S=l*h,I=n.x,w=n.y,P=n.z;return r[0]=(1-(x+d))*I,r[1]=(p+S)*I,r[2]=(g-y)*I,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+d))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(g+y)*P,r[9]=(m-b)*P,r[10]=(1-(f+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ai.set(r[0],r[1],r[2]).length();const a=ai.set(r[4],r[5],r[6]).length(),o=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/a,h=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=on,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===on)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===hs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=on,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===on)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===hs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new L,qt=new it,$u=new L(0,0,0),eh=new L(1,1,1),Tn=new L,Cr=new L,Lt=new L,Co=new it,Io=new Oi;class $t{constructor(e=0,t=0,n=0,r=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Co,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Io.setFromEuler(this),this.setFromQuaternion(Io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let th=0;const Lo=new L,oi=new Oi,dn=new it,Ir=new L,qi=new L,nh=new L,ih=new Oi,Do=new L(1,0,0),No=new L(0,1,0),Uo=new L(0,0,1),Oo={type:"added"},rh={type:"removed"},li={type:"childadded",child:null},Is={type:"childremoved",child:null};class vt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new L,t=new $t,n=new Oi,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Xe}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Do,e)}rotateY(e){return this.rotateOnAxis(No,e)}rotateZ(e){return this.rotateOnAxis(Uo,e)}translateOnAxis(e,t){return Lo.copy(e).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Do,e)}translateY(e){return this.translateOnAxis(No,e)}translateZ(e){return this.translateOnAxis(Uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(qi,Ir,this.up):dn.lookAt(Ir,qi,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(dn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oo),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rh),Is.child=e,this.dispatchEvent(Is),Is.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oo),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,nh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,ih,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vt.DEFAULT_UP=new L(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new L,pn=new L,Ls=new L,mn=new L,ci=new L,ui=new L,Fo=new L,Ds=new L,Ns=new L,Us=new L,Os=new ut,Fs=new ut,zs=new ut;class kt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),pn.subVectors(n,t),Ls.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(pn),l=Yt.dot(Ls),c=pn.dot(pn),u=pn.dot(Ls),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Os.setScalar(0),Fs.setScalar(0),zs.setScalar(0),Os.fromBufferAttribute(e,t),Fs.fromBufferAttribute(e,n),zs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Os,s.x),a.addScaledVector(Fs,s.y),a.addScaledVector(zs,s.z),a}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),pn.subVectors(e,t),Yt.cross(pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Yt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ci.subVectors(r,n),ui.subVectors(s,n),Ds.subVectors(e,n);const l=ci.dot(Ds),c=ui.dot(Ds);if(l<=0&&c<=0)return t.copy(n);Ns.subVectors(e,r);const u=ci.dot(Ns),h=ui.dot(Ns);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ci,a);Us.subVectors(e,s);const p=ci.dot(Us),g=ui.dot(Us);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ui,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Fo.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Fo,o);const d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(ci,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Bs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=ao(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bs(a,s,e+1/3),this.g=Bs(a,s,e),this.b=Bs(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=rc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Qe.workingToColorSpace(St.copy(this),e),Math.round(qe(St.r*255,0,255))*65536+Math.round(qe(St.g*255,0,255))*256+Math.round(qe(St.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(St.copy(this),t);const n=St.r,r=St.g,s=St.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=wt){Qe.workingToColorSpace(St.copy(this),e);const t=St.r,n=St.g,r=St.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Lr);const n=ar(bn.h,Lr.h,t),r=ar(bn.s,Lr.s,t),s=ar(bn.l,Lr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ve;Ve.NAMES=rc;let sh=0;class Fi extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=Ai,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=ra,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vs extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new L,Dr=new oe;let ah=0;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ah++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}}class sc extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ac extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let oh=0;const Ht=new it,Hs=new vt,hi=new L,Dt=new Zn,Yi=new Zn,mt=new L;class Vt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tc(e)?ac:sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Hs.lookAt(e),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Dt.min,Yi.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,Yi.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(Yi.min),Dt.expandByPoint(Yi.max))}Dt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),mt.add(hi)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new L,l[U]=new L;const c=new L,u=new L,h=new L,f=new oe,p=new oe,g=new oe,x=new L,m=new L;function d(U,E,M){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[U].add(x),o[E].add(x),o[M].add(x),l[U].add(m),l[E].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,E=b.length;U<E;++U){const M=b[U],C=M.start,z=M.count;for(let X=C,te=C+z;X<te;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new L,S=new L,I=new L,w=new L;function P(U){I.fromBufferAttribute(r,U),w.copy(I);const E=o[U];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),S.crossVectors(w,E);const C=S.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,C)}for(let U=0,E=b.length;U<E;++U){const M=b[U],C=M.start,z=M.count;for(let X=C,te=C+z;X<te;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Gt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new it,Un=new Ku,Nr=new Sr,Bo=new L,Ur=new L,Or=new L,Fr=new L,ks=new L,zr=new L,Ho=new L,Br=new L;class ft extends vt{constructor(e=new Vt,t=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ks.fromBufferAttribute(h,e),a?zr.addScaledVector(ks,u):zr.addScaledVector(ks.sub(t),u))}t.add(zr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(Nr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(Nr,Bo)===null||Un.origin.distanceToSquared(Bo)>(e.far-e.near)**2))&&(zo.copy(s).invert(),Un.copy(e.ray).applyMatrix4(zo),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,I=y;S<I;S+=3){const w=o.getX(S),P=o.getX(S+1),U=o.getX(S+2);r=Hr(this,d,e,n,c,u,h,w,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);r=Hr(this,a,e,n,c,u,h,b,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,I=y;S<I;S+=3){const w=S,P=S+1,U=S+2;r=Hr(this,d,e,n,c,u,h,w,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=m,y=m+1,S=m+2;r=Hr(this,a,e,n,c,u,h,b,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function lh(i,e,t,n,r,s,a,o){let l;if(e.side===Rt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Rn,o),l===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:i}}function Hr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ur),i.getVertexPosition(l,Or),i.getVertexPosition(c,Fr);const u=lh(i,e,t,n,Ur,Or,Fr,Ho);if(u){const h=new L;kt.getBarycoord(Ho,Ur,Or,Fr,h),r&&(u.uv=kt.getInterpolatedAttribute(r,o,l,c,h,new oe)),s&&(u.uv1=kt.getInterpolatedAttribute(s,o,l,c,h,new oe)),a&&(u.normal=kt.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};kt.getNormal(Ur,Or,Fr,f.normal),u.face=f,u.barycoord=h}return u}class Mr extends Vt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function g(x,m,d,b,y,S,I,w,P,U,E){const M=S/P,C=I/U,z=S/2,X=I/2,te=w/2,V=P+1,q=U+1;let $=0,k=0;const he=new L;for(let _e=0;_e<q;_e++){const ve=_e*C-X;for(let Be=0;Be<V;Be++){const je=Be*M-z;he[x]=je*b,he[m]=ve*y,he[d]=te,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[d]=w>0?1:-1,u.push(he.x,he.y,he.z),h.push(Be/P),h.push(1-_e/U),$+=1}}for(let _e=0;_e<U;_e++)for(let ve=0;ve<P;ve++){const Be=f+ve+V*_e,je=f+ve+V*(_e+1),Ze=f+(ve+1)+V*(_e+1),We=f+(ve+1)+V*_e;l.push(Be,je,We),l.push(je,Ze,We),k+=6}o.addGroup(p,k,E),p+=k,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const r in n)e[r]=n[r]}return e}function ch(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function oc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const gr={clone:Ii,merge:Et};var uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new L,ko=new oe,Go=new oe;class Nt extends lc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ci*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ci*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,ko,Go),t.subVectors(Go,ko)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,di=1;class fh extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(fi,di,e,t);r.layers=this.layers,this.add(r);const s=new Nt(fi,di,e,t);s.layers=this.layers,this.add(s);const a=new Nt(fi,di,e,t);a.layers=this.layers,this.add(a);const o=new Nt(fi,di,e,t);o.layers=this.layers,this.add(o);const l=new Nt(fi,di,e,t);l.layers=this.layers,this.add(l);const c=new Nt(fi,di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cc extends gt{constructor(e=[],t=wi,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dh extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new cc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mr(5,5,5),s=new At({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:xn});s.uniforms.tEquirect.value=t;const a=new ft(r,s),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=sn),new fh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class jn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ph={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ph)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class uc extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yt=new L;class fs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hc extends Fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pi;const Zi=new L,mi=new L,gi=new L,vi=new oe,Qi=new oe,fc=new it,kr=new L,Ki=new L,Gr=new L,Vo=new oe,Vs=new oe,Wo=new oe;class gh extends vt{constructor(e=new hc){if(super(),this.isSprite=!0,this.type="Sprite",pi===void 0){pi=new Vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mh(t,5);pi.setIndex([0,1,2,0,2,3]),pi.setAttribute("position",new fs(n,3,0,!1)),pi.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=pi,this.material=e,this.center=new oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mi.setFromMatrixScale(this.matrixWorld),fc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mi.multiplyScalar(-gi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Vr(kr.set(-.5,-.5,0),gi,a,mi,r,s),Vr(Ki.set(.5,-.5,0),gi,a,mi,r,s),Vr(Gr.set(.5,.5,0),gi,a,mi,r,s),Vo.set(0,0),Vs.set(1,0),Wo.set(1,1);let o=e.ray.intersectTriangle(kr,Ki,Gr,!1,Zi);if(o===null&&(Vr(Ki.set(-.5,.5,0),gi,a,mi,r,s),Vs.set(0,1),o=e.ray.intersectTriangle(kr,Gr,Ki,!1,Zi),o===null))return;const l=e.ray.origin.distanceTo(Zi);l<e.near||l>e.far||t.push({distance:l,point:Zi.clone(),uv:kt.getInterpolation(Zi,kr,Ki,Gr,Vo,Vs,Wo,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vr(i,e,t,n,r,s){vi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Qi.x=s*vi.x-r*vi.y,Qi.y=r*vi.x+s*vi.y):Qi.copy(vi),i.copy(e),i.x+=Qi.x,i.y+=Qi.y,i.applyMatrix4(fc)}class vh extends gt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Ut,u=Ut,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo extends Gt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new it,jo=new it,Wr=[],Jo=new Zn,xh=new it,$i=new ft,er=new Sr;class _h extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,xh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Jo.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(Jo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),er.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xi),jo.multiplyMatrices(n,xi),$i.matrixWorld=jo,$i.raycast(e,Wr);for(let a=0,o=Wr.length;a<o;a++){const l=Wr[a];l.instanceId=s,l.object=this,t.push(l)}Wr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new vh(new Float32Array(r*this.count),r,this.count,no,an));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ws=new L,Sh=new L,Mh=new Xe;class Hn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ws.subVectors(n,t).cross(Sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ws),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mh.getNormalMatrix(e),r=this.coplanarPoint(Ws).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Sr,yh=new oe(.5,.5),Xr=new L;class lo{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],d=s[11],b=s[12],y=s[13],S=s[14],I=s[15];if(r[0].setComponents(c-a,p-u,d-g,I-b).normalize(),r[1].setComponents(c+a,p+u,d+g,I+b).normalize(),r[2].setComponents(c+o,p+h,d+x,I+y).normalize(),r[3].setComponents(c-o,p-h,d-x,I-y).normalize(),n)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(c-l,p-f,d-m,I-S).normalize();else if(r[4].setComponents(c-l,p-f,d-m,I-S).normalize(),t===on)r[5].setComponents(c+l,p+f,d+m,I+S).normalize();else if(t===hs)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){On.center.set(0,0,0);const t=yh.distanceTo(e.center);return On.radius=.7071067811865476+t,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xr.x=r.normal.x>0?e.max.x:e.min.x,Xr.y=r.normal.y>0?e.max.y:e.min.y,Xr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wa extends gt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dc extends gt{constructor(e,t,n=qn,r,s,a,o=Ut,l=Ut,c,u=fr,h=1){if(u!==fr&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pc extends gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class en{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(a-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new oe:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,r=[],s=[],a=[],o=new L,l=new it;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(qe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class co extends en{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Eh extends co{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function uo(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,p*=u,r(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const jr=new L,Xs=new uo,js=new uo,Js=new uo;class Ah extends en{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(jr.subVectors(r[0],r[1]).add(r[0]),c=jr);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(jr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Xs.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),js.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),Js.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Xs.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),js.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Js.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Xs.calc(l),js.calc(l),Js.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qo(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Th(i,e){const t=1-i;return t*t*e}function bh(i,e){return 2*(1-i)*i*e}function wh(i,e){return i*i*e}function or(i,e,t,n){return Th(i,e)+bh(i,t)+wh(i,n)}function Ph(i,e){const t=1-i;return t*t*t*e}function Rh(i,e){const t=1-i;return 3*t*t*i*e}function Ch(i,e){return 3*(1-i)*i*i*e}function Ih(i,e){return i*i*i*e}function lr(i,e,t,n,r){return Ph(i,e)+Rh(i,t)+Ch(i,n)+Ih(i,r)}class mc extends en{constructor(e=new oe,t=new oe,n=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new oe){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,r.x,s.x,a.x,o.x),lr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gc extends en{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,r.x,s.x,a.x,o.x),lr(e,r.y,s.y,a.y,o.y),lr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vc extends en{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lh extends en{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xc extends en{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(or(e,r.x,s.x,a.x),or(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _c extends en{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(or(e,r.x,s.x,a.x),or(e,r.y,s.y,a.y),or(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sc extends en{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(qo(o,l.x,c.x,u.x,h.x),qo(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new oe().fromArray(r))}return this}}var ds=Object.freeze({__proto__:null,ArcCurve:Eh,CatmullRomCurve3:Ah,CubicBezierCurve:mc,CubicBezierCurve3:gc,EllipseCurve:co,LineCurve:vc,LineCurve3:Lh,QuadraticBezierCurve:xc,QuadraticBezierCurve3:_c,SplineCurve:Sc});class Dh extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ds[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new ds[r.type]().fromJSON(r))}return this}}class Yo extends Dh{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vc(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new xc(this.currentPoint.clone(),new oe(e,t),new oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new mc(this.currentPoint.clone(),new oe(e,t),new oe(n,r),new oe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Sc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new co(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mc extends Yo{constructor(e){super(e),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Yo().fromJSON(r))}return this}}function Nh(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=yc(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Bh(i,e,s,t)),i.length>80*t){o=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<r;f+=t){const p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>h&&(h=g)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return vr(s,a,t,o,l,c,0),a}function yc(i,e,t,n,r){let s;if(r===Zh(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Zo(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Zo(a/n|0,i[a],i[a+1],s);return s&&Li(s,s.next)&&(_r(s),s=s.next),s}function Yn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Li(t,t.next)||lt(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Wh(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?Oh(i,n,r,s):Uh(i)){e.push(l.i,i.i,c.i),_r(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Fh(Yn(i),e),vr(i,e,t,n,r,s,2)):a===2&&zh(i,e,t,n,r,s):vr(Yn(i),e,t,n,r,s,1);break}}}function Uh(i){const e=i.prev,t=i,n=i.next;if(lt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(r,s,a),h=Math.min(o,l,c),f=Math.max(r,s,a),p=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&nr(r,o,s,l,a,c,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Oh(i,e,t,n){const r=i.prev,s=i,a=i.next;if(lt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,p=Math.min(o,l,c),g=Math.min(u,h,f),x=Math.max(o,l,c),m=Math.max(u,h,f),d=Xa(p,g,e,t,n),b=Xa(x,m,e,t,n);let y=i.prevZ,S=i.nextZ;for(;y&&y.z>=d&&S&&S.z<=b;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&nr(o,u,l,h,c,f,y.x,y.y)&&lt(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&nr(o,u,l,h,c,f,S.x,S.y)&&lt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&nr(o,u,l,h,c,f,y.x,y.y)&&lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=b;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&nr(o,u,l,h,c,f,S.x,S.y)&&lt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Fh(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Li(n,r)&&Ac(n,t,t.next,r)&&xr(n,r)&&xr(r,n)&&(e.push(n.i,t.i,r.i),_r(t),_r(t.next),t=i=r),t=t.next}while(t!==i);return Yn(t)}function zh(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jh(a,o)){let l=Tc(a,o);a=Yn(a,a.next),l=Yn(l,l.next),vr(a,e,t,n,r,s,0),vr(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Bh(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=yc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(jh(c))}r.sort(Hh);for(let s=0;s<r.length;s++)t=kh(r[s],t);return t}function Hh(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function kh(i,e){const t=Gh(i,e);if(!t)return e;const n=Tc(t,i);return Yn(n,n.next),Yn(t,t.next)}function Gh(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(Li(i,t))return t;do{if(Li(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ec(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);xr(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Vh(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Vh(i,e){return lt(i.prev,i,e.prev)<0&&lt(e.next,i,i.next)<0}function Wh(i,e,t,n){let r=i;do r.z===0&&(r.z=Xa(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Xh(r)}function Xh(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function Xa(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ec(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function nr(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Ec(i,e,t,n,r,s,a,o)}function Jh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!qh(i,e)&&(xr(i,e)&&xr(e,i)&&Yh(i,e)&&(lt(i.prev,i,e.prev)||lt(i,e.prev,e))||Li(i,e)&&lt(i.prev,i,i.next)>0&&lt(e.prev,e,e.next)>0)}function lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Li(i,e){return i.x===e.x&&i.y===e.y}function Ac(i,e,t,n){const r=qr(lt(i,e,t)),s=qr(lt(i,e,n)),a=qr(lt(t,n,i)),o=qr(lt(t,n,e));return!!(r!==s&&a!==o||r===0&&Jr(i,t,e)||s===0&&Jr(i,n,e)||a===0&&Jr(t,i,n)||o===0&&Jr(t,e,n))}function Jr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qr(i){return i>0?1:i<0?-1:0}function qh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ac(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xr(i,e){return lt(i.prev,i,i.next)<0?lt(i,e,i.next)>=0&&lt(i,i.prev,e)>=0:lt(i,e,i.prev)<0||lt(i,i.next,e)<0}function Yh(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Tc(i,e){const t=ja(i.i,i.x,i.y),n=ja(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Zo(i,e,t,n){const r=ja(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ja(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zh(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Qh{static triangulate(e,t,n=2){return Nh(e,t,n)}}class Mi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Mi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Qo(e),Ko(n,e);let a=e.length;t.forEach(Qo);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Ko(n,t[l]);const o=Qh.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Qo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ko(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ps extends Vt{constructor(e=new Mc([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new xt(r,3)),this.setAttribute("uv",new xt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Kh;let y,S=!1,I,w,P,U;d&&(y=d.getSpacedPoints(u),S=!0,f=!1,I=d.computeFrenetFrames(u,!1),w=new L,P=new L,U=new L),f||(m=0,p=0,g=0,x=0);const E=o.extractPoints(c);let M=E.shape;const C=E.holes;if(!Mi.isClockWise(M)){M=M.reverse();for(let K=0,Y=C.length;K<Y;K++){const J=C[K];Mi.isClockWise(J)&&(C[K]=J.reverse())}}function X(K){const J=10000000000000001e-36;let j=K[0];for(let ce=1;ce<=K.length;ce++){const re=ce%K.length,de=K[re],De=de.x-j.x,Ue=de.y-j.y,A=De*De+Ue*Ue,v=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(j.x),Math.abs(j.y)),F=J*v*v;if(A<=F){K.splice(re,1),ce--;continue}j=de}}X(M),C.forEach(X);const te=C.length,V=M;for(let K=0;K<te;K++){const Y=C[K];M=M.concat(Y)}function q(K,Y,J){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(Y,J)}const $=M.length;function k(K,Y,J){let j,ce,re;const de=K.x-Y.x,De=K.y-Y.y,Ue=J.x-K.x,A=J.y-K.y,v=de*de+De*De,F=de*A-De*Ue;if(Math.abs(F)>Number.EPSILON){const G=Math.sqrt(v),ne=Math.sqrt(Ue*Ue+A*A),W=Y.x-De/G,Ce=Y.y+de/G,fe=J.x-A/ne,Ie=J.y+Ue/ne,Pe=((fe-W)*A-(Ie-Ce)*Ue)/(de*A-De*Ue);j=W+de*Pe-K.x,ce=Ce+De*Pe-K.y;const se=j*j+ce*ce;if(se<=2)return new oe(j,ce);re=Math.sqrt(se/2)}else{let G=!1;de>Number.EPSILON?Ue>Number.EPSILON&&(G=!0):de<-Number.EPSILON?Ue<-Number.EPSILON&&(G=!0):Math.sign(De)===Math.sign(A)&&(G=!0),G?(j=-De,ce=de,re=Math.sqrt(v)):(j=de,ce=De,re=Math.sqrt(v/2))}return new oe(j/re,ce/re)}const he=[];for(let K=0,Y=V.length,J=Y-1,j=K+1;K<Y;K++,J++,j++)J===Y&&(J=0),j===Y&&(j=0),he[K]=k(V[K],V[J],V[j]);const _e=[];let ve,Be=he.concat();for(let K=0,Y=te;K<Y;K++){const J=C[K];ve=[];for(let j=0,ce=J.length,re=ce-1,de=j+1;j<ce;j++,re++,de++)re===ce&&(re=0),de===ce&&(de=0),ve[j]=k(J[j],J[re],J[de]);_e.push(ve),Be=Be.concat(ve)}let je;if(m===0)je=Mi.triangulateShape(V,C);else{const K=[],Y=[];for(let J=0;J<m;J++){const j=J/m,ce=p*Math.cos(j*Math.PI/2),re=g*Math.sin(j*Math.PI/2)+x;for(let de=0,De=V.length;de<De;de++){const Ue=q(V[de],he[de],re);be(Ue.x,Ue.y,-ce),j===0&&K.push(Ue)}for(let de=0,De=te;de<De;de++){const Ue=C[de];ve=_e[de];const A=[];for(let v=0,F=Ue.length;v<F;v++){const G=q(Ue[v],ve[v],re);be(G.x,G.y,-ce),j===0&&A.push(G)}j===0&&Y.push(A)}}je=Mi.triangulateShape(K,Y)}const Ze=je.length,We=g+x;for(let K=0;K<$;K++){const Y=f?q(M[K],Be[K],We):M[K];S?(P.copy(I.normals[0]).multiplyScalar(Y.x),w.copy(I.binormals[0]).multiplyScalar(Y.y),U.copy(y[0]).add(P).add(w),be(U.x,U.y,U.z)):be(Y.x,Y.y,0)}for(let K=1;K<=u;K++)for(let Y=0;Y<$;Y++){const J=f?q(M[Y],Be[Y],We):M[Y];S?(P.copy(I.normals[K]).multiplyScalar(J.x),w.copy(I.binormals[K]).multiplyScalar(J.y),U.copy(y[K]).add(P).add(w),be(U.x,U.y,U.z)):be(J.x,J.y,h/u*K)}for(let K=m-1;K>=0;K--){const Y=K/m,J=p*Math.cos(Y*Math.PI/2),j=g*Math.sin(Y*Math.PI/2)+x;for(let ce=0,re=V.length;ce<re;ce++){const de=q(V[ce],he[ce],j);be(de.x,de.y,h+J)}for(let ce=0,re=C.length;ce<re;ce++){const de=C[ce];ve=_e[ce];for(let De=0,Ue=de.length;De<Ue;De++){const A=q(de[De],ve[De],j);S?be(A.x,A.y+y[u-1].y,y[u-1].x+J):be(A.x,A.y,h+J)}}}Z(),R();function Z(){const K=r.length/3;if(f){let Y=0,J=$*Y;for(let j=0;j<Ze;j++){const ce=je[j];Q(ce[2]+J,ce[1]+J,ce[0]+J)}Y=u+m*2,J=$*Y;for(let j=0;j<Ze;j++){const ce=je[j];Q(ce[0]+J,ce[1]+J,ce[2]+J)}}else{for(let Y=0;Y<Ze;Y++){const J=je[Y];Q(J[2],J[1],J[0])}for(let Y=0;Y<Ze;Y++){const J=je[Y];Q(J[0]+$*u,J[1]+$*u,J[2]+$*u)}}n.addGroup(K,r.length/3-K,0)}function R(){const K=r.length/3;let Y=0;le(V,Y),Y+=V.length;for(let J=0,j=C.length;J<j;J++){const ce=C[J];le(ce,Y),Y+=ce.length}n.addGroup(K,r.length/3-K,1)}function le(K,Y){let J=K.length;for(;--J>=0;){const j=J;let ce=J-1;ce<0&&(ce=K.length-1);for(let re=0,de=u+m*2;re<de;re++){const De=$*re,Ue=$*(re+1),A=Y+j+De,v=Y+ce+De,F=Y+ce+Ue,G=Y+j+Ue;ye(A,v,F,G)}}}function be(K,Y,J){l.push(K),l.push(Y),l.push(J)}function Q(K,Y,J){ze(K),ze(Y),ze(J);const j=r.length/3,ce=b.generateTopUV(n,r,j-3,j-2,j-1);T(ce[0]),T(ce[1]),T(ce[2])}function ye(K,Y,J,j){ze(K),ze(Y),ze(j),ze(Y),ze(J),ze(j);const ce=r.length/3,re=b.generateSideWallUV(n,r,ce-6,ce-3,ce-2,ce-1);T(re[0]),T(re[1]),T(re[3]),T(re[1]),T(re[2]),T(re[3])}function ze(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function T(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $h(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ds[r.type]().fromJSON(r)),new ps(n,e.options)}}const Kh={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new oe(s,a),new oe(o,l),new oe(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-h),new oe(f,1-g),new oe(x,1-d)]:[new oe(o,1-l),new oe(u,1-h),new oe(p,1-g),new oe(m,1-d)]}};function $h(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zi extends Vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const b=d*f-a;for(let y=0;y<c;y++){const S=y*h-s;g.push(S,-b,0),x.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const y=b+c*d,S=b+c*(d+1),I=b+1+c*(d+1),w=b+1+c*d;p.push(y,S,w),p.push(S,I,w)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class xs extends Vt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new L,h=new L,f=new L;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,b=(r+1)*p+g;a.push(x,m,b),a.push(m,d,b)}this.setIndex(a),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ho extends Vt{constructor(e=new _c(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,l=new L,c=new oe;let u=new L;const h=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function x(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),b(),d()}function m(y){u=e.getPointAt(y/t,u);const S=a.normals[y],I=a.binormals[y];for(let w=0;w<=r;w++){const P=w/r*Math.PI*2,U=Math.sin(P),E=-Math.cos(P);l.x=E*S.x+U*I.x,l.y=E*S.y+U*I.y,l.z=E*S.z+U*I.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function d(){for(let y=1;y<=t;y++)for(let S=1;S<=r;S++){const I=(r+1)*(y-1)+(S-1),w=(r+1)*y+(S-1),P=(r+1)*y+S,U=(r+1)*(y-1)+S;g.push(I,w,U),g.push(w,P,U)}}function b(){for(let y=0;y<=t;y++)for(let S=0;S<=r;S++)c.x=y/t,c.y=S/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ho(new ds[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ef extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tf extends Fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bc extends tf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nf extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rf extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sf{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const af=new sf;class fo{constructor(e){this.manager=e!==void 0?e:af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i=new WeakMap;class of extends fo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=_i.get(a);h===void 0&&(h=[],_i.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=pr("img");function l(){u(),t&&t(this);const h=_i.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}_i.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),qs.remove(`image:${e}`);const f=_i.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(h)}_i.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),qs.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class lf extends fo{constructor(e){super(e)}load(e,t,n,r){const s=new gt,a=new of(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class wc extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ys=new it,$o=new L,el=new L;class cf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$o.setFromMatrixPosition(e.matrixWorld),t.position.copy($o),el.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(el),t.updateMatrixWorld(),Ys.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ys,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uf extends cf{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ci*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hf extends wc{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new uf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pc extends lc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ff extends wc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class df extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tl(i,e,t,n){const r=pf(n);switch(t){case Zl:return i*e;case no:return i*e/r.components*r.byteLength;case io:return i*e/r.components*r.byteLength;case Kl:return i*e*2/r.components*r.byteLength;case ro:return i*e*2/r.components*r.byteLength;case Ql:return i*e*3/r.components*r.byteLength;case Qt:return i*e*4/r.components*r.byteLength;case so:return i*e*4/r.components*r.byteLength;case ns:case is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:case xa:return Math.max(i,16)*Math.max(e,8)/4;case ma:case va:return Math.max(i,8)*Math.max(e,8)/2;case _a:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oa:case Fa:case za:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ba:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ka:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pf(i){switch(i){case cn:case jl:return{byteLength:1,components:1};case ur:case Jl:case _n:return{byteLength:2,components:1};case eo:case to:return{byteLength:2,components:4};case qn:case $a:case an:return{byteLength:4,components:1};case ql:case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);function Cc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function mf(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,md=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,up=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ep=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Np=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:gf,alphahash_pars_fragment:vf,alphamap_fragment:xf,alphamap_pars_fragment:_f,alphatest_fragment:Sf,alphatest_pars_fragment:Mf,aomap_fragment:yf,aomap_pars_fragment:Ef,batching_pars_vertex:Af,batching_vertex:Tf,begin_vertex:bf,beginnormal_vertex:wf,bsdfs:Pf,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Nf,color_fragment:Uf,color_pars_fragment:Of,color_pars_vertex:Ff,color_vertex:zf,common:Bf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Vf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:jf,colorspace_pars_fragment:Jf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:Zf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:ld,envmap_vertex:Kf,fog_vertex:$f,fog_pars_vertex:ed,fog_fragment:td,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:rd,lights_lambert_fragment:sd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:ud,lights_phong_fragment:hd,lights_phong_pars_fragment:fd,lights_physical_fragment:dd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:vd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:Sd,logdepthbuf_vertex:Md,map_fragment:yd,map_pars_fragment:Ed,map_particle_fragment:Ad,map_particle_pars_fragment:Td,metalnessmap_fragment:bd,metalnessmap_pars_fragment:wd,morphinstance_vertex:Pd,morphcolor_vertex:Rd,morphnormal_vertex:Cd,morphtarget_pars_vertex:Id,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Nd,normal_pars_fragment:Ud,normal_pars_vertex:Od,normal_vertex:Fd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:Hd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Gd,opaque_fragment:Vd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:jd,dithering_fragment:Jd,dithering_pars_fragment:qd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:Kd,shadowmap_vertex:$d,shadowmask_pars_fragment:ep,skinbase_vertex:tp,skinning_pars_vertex:np,skinning_vertex:ip,skinnormal_vertex:rp,specularmap_fragment:sp,specularmap_pars_fragment:ap,tonemapping_fragment:op,tonemapping_pars_fragment:lp,transmission_fragment:cp,transmission_pars_fragment:up,uv_pars_fragment:hp,uv_pars_vertex:fp,uv_vertex:dp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:vp,backgroundCube_frag:xp,cube_vert:_p,cube_frag:Sp,depth_vert:Mp,depth_frag:yp,distanceRGBA_vert:Ep,distanceRGBA_frag:Ap,equirect_vert:Tp,equirect_frag:bp,linedashed_vert:wp,linedashed_frag:Pp,meshbasic_vert:Rp,meshbasic_frag:Cp,meshlambert_vert:Ip,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Np,meshnormal_vert:Up,meshnormal_frag:Op,meshphong_vert:Fp,meshphong_frag:zp,meshphysical_vert:Bp,meshphysical_frag:Hp,meshtoon_vert:kp,meshtoon_frag:Gp,points_vert:Vp,points_frag:Wp,shadow_vert:Xp,shadow_frag:jp,sprite_vert:Jp,sprite_frag:qp},Me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},tn={basic:{uniforms:Et([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Et([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Et([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Et([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Et([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Et([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Et([Me.points,Me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Et([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Et([Me.common,Me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Et([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Et([Me.sprite,Me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Et([Me.common,Me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Et([Me.lights,Me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};tn.physical={uniforms:Et([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Yr={r:0,b:0,g:0},Fn=new $t,Yp=new it;function Zp(i,e,t,n,r,s,a){const o=new Ve(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function x(y){let S=!1;const I=g(y);I===null?d(o,l):I&&I.isColor&&(d(I,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const I=g(S);I&&(I.isCubeTexture||I.mapping===gs)?(u===void 0&&(u=new ft(new Mr(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Ii(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fn.copy(S.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(Fn)),u.material.toneMapped=Qe.getTransfer(I.colorSpace)!==tt,(h!==I||f!==I.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,f=I.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ft(new zi(2,2),new At({name:"BackgroundMaterial",uniforms:Ii(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(I.colorSpace)!==tt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=I,f=I.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,S){y.getRGB(Yr,oc(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,S,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:x,addToRenderList:m,dispose:b}}function Qp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,C,z,X,te){let V=!1;const q=h(X,z,C);s!==q&&(s=q,c(s.object)),V=p(M,X,z,te),V&&g(M,X,z,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(M,C,z,X),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,C,z){const X=z.wireframe===!0;let te=n[M.id];te===void 0&&(te={},n[M.id]=te);let V=te[C.id];V===void 0&&(V={},te[C.id]=V);let q=V[X];return q===void 0&&(q=f(l()),V[X]=q),q}function f(M){const C=[],z=[],X=[];for(let te=0;te<t;te++)C[te]=0,z[te]=0,X[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:X,object:M,attributes:{},index:null}}function p(M,C,z,X){const te=s.attributes,V=C.attributes;let q=0;const $=z.getAttributes();for(const k in $)if($[k].location>=0){const _e=te[k];let ve=V[k];if(ve===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),_e===void 0||_e.attribute!==ve||ve&&_e.data!==ve.data)return!0;q++}return s.attributesNum!==q||s.index!==X}function g(M,C,z,X){const te={},V=C.attributes;let q=0;const $=z.getAttributes();for(const k in $)if($[k].location>=0){let _e=V[k];_e===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const ve={};ve.attribute=_e,_e&&_e.data&&(ve.data=_e.data),te[k]=ve,q++}s.attributes=te,s.attributesNum=q,s.index=X}function x(){const M=s.newAttributes;for(let C=0,z=M.length;C<z;C++)M[C]=0}function m(M){d(M,0)}function d(M,C){const z=s.newAttributes,X=s.enabledAttributes,te=s.attributeDivisors;z[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),te[M]!==C&&(i.vertexAttribDivisor(M,C),te[M]=C)}function b(){const M=s.newAttributes,C=s.enabledAttributes;for(let z=0,X=C.length;z<X;z++)C[z]!==M[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function y(M,C,z,X,te,V,q){q===!0?i.vertexAttribIPointer(M,C,z,te,V):i.vertexAttribPointer(M,C,z,X,te,V)}function S(M,C,z,X){x();const te=X.attributes,V=z.getAttributes(),q=C.defaultAttributeValues;for(const $ in V){const k=V[$];if(k.location>=0){let he=te[$];if(he===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const _e=he.normalized,ve=he.itemSize,Be=e.get(he);if(Be===void 0)continue;const je=Be.buffer,Ze=Be.type,We=Be.bytesPerElement,Z=Ze===i.INT||Ze===i.UNSIGNED_INT||he.gpuType===$a;if(he.isInterleavedBufferAttribute){const R=he.data,le=R.stride,be=he.offset;if(R.isInstancedInterleavedBuffer){for(let Q=0;Q<k.locationSize;Q++)d(k.location+Q,R.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Q=0;Q<k.locationSize;Q++)y(k.location+Q,ve/k.locationSize,Ze,_e,le*We,(be+ve/k.locationSize*Q)*We,Z)}else{if(he.isInstancedBufferAttribute){for(let R=0;R<k.locationSize;R++)d(k.location+R,he.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let R=0;R<k.locationSize;R++)m(k.location+R);i.bindBuffer(i.ARRAY_BUFFER,je);for(let R=0;R<k.locationSize;R++)y(k.location+R,ve/k.locationSize,Ze,_e,ve*We,ve/k.locationSize*R*We,Z)}}else if(q!==void 0){const _e=q[$];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(k.location,_e);break;case 3:i.vertexAttrib3fv(k.location,_e);break;case 4:i.vertexAttrib4fv(k.location,_e);break;default:i.vertexAttrib1fv(k.location,_e)}}}}b()}function I(){U();for(const M in n){const C=n[M];for(const z in C){const X=C[z];for(const te in X)u(X[te].object),delete X[te];delete C[z]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const z in C){const X=C[z];for(const te in X)u(X[te].object),delete X[te];delete C[z]}delete n[M.id]}function P(M){for(const C in n){const z=n[C];if(z[M.id]===void 0)continue;const X=z[M.id];for(const te in X)u(X[te].object),delete X[te];delete z[M.id]}}function U(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Kp(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $p(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Qt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==cn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==an&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:I,maxSamples:w}}function em(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Hn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,y=b*4;let S=d.clippingState||null;l.value=S,S=u(g,f,y,p);for(let I=0;I!==y;++I)S[I]=t[I];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,S=p;y!==x;++y,S+=4)a.copy(h[y]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function tm(i){let e=new WeakMap;function t(a,o){return o===fa?a.mapping=wi:o===da&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fa||o===da)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const yi=4,nl=[.125,.215,.35,.446,.526,.582],Vn=20,Zs=new Pc,il=new Ve;let Qs=null,Ks=0,$s=0,ea=!1;const kn=(1+Math.sqrt(5))/2,Si=1/kn,rl=[new L(-kn,Si,0),new L(kn,Si,0),new L(-Si,0,kn),new L(Si,0,kn),new L(0,kn,-Si),new L(0,kn,Si),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],nm=new L;class Ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=nm}=s;Qs=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qs,Ks,$s),this._renderer.xr.enabled=ea,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qs=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:_n,format:Qt,colorSpace:Ri,depthBuffer:!1},r=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(s)),this._blurMaterial=rm(s,e,t)}return r}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,n,r,s){const l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(il),h.toneMapping=Pn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new vs({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),m=new ft(new Mr,x);let d=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,d=!0):(x.color.copy(il),d=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const I=this._cubeSize;Zr(r,S*I,y>2?I:0,I,I),h.setRenderTarget(r),d&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===wi||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rl[(r-s-1)%rl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ft(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Vn;m>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const d=[];let b=0;for(let P=0;P<Vn;++P){const U=P/x,E=Math.exp(-U*U/2);d.push(E),P===0?b+=E:P<m&&(b+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const S=this._sizeLods[r],I=3*S*(r>y-yi?r-y+yi:0),w=4*(this._cubeSize-S);Zr(t,I,w,3*S,2*S),l.setRenderTarget(t),l.render(h,Zs)}}function im(i){const e=[],t=[],n=[];let r=i;const s=i-yi+1+nl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-yi?l=nl[a-i+yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,b=new Float32Array(x*g*p),y=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,U=w>2?0:-1,E=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];b.set(E,x*g*w),y.set(f,m*g*w);const M=[w,w,w,w,w,w];S.set(M,d*g*w)}const I=new Vt;I.setAttribute("position",new Gt(b,x)),I.setAttribute("uv",new Gt(y,m)),I.setAttribute("faceIndex",new Gt(S,d)),e.push(I),r>yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(i,e,t){const n=new Kt(i,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function rm(i,e,t){const n=new Float32Array(Vn),r=new L(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function al(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ol(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fa||l===da,u=l===wi||l===Pi;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ja(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Ja(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function am(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function om(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let y=0,S=b.length;y<S;y+=3){const I=b[y+0],w=b[y+1],P=b[y+2];f.push(I,w,w,P,P,I)}}else if(g!==void 0){const b=g.array;x=g.version;for(let y=0,S=b.length/3-1;y<S;y+=3){const I=y+0,w=y+1,P=y+2;f.push(I,w,w,P,P,I)}}else return;const m=new(tc(f)?ac:sc)(f,1);m.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function lm(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,x,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*x[b];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function um(i,e,t){const n=new WeakMap,r=new ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let I=o.attributes.position.count*S,w=1;I>e.maxTextureSize&&(w=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*w*4*h),U=new nc(P,I,w,h);U.type=an,U.needsUpdate=!0;const E=S*4;for(let C=0;C<h;C++){const z=d[C],X=b[C],te=y[C],V=I*w*4*C;for(let q=0;q<z.count;q++){const $=q*E;g===!0&&(r.fromBufferAttribute(z,q),P[V+$+0]=r.x,P[V+$+1]=r.y,P[V+$+2]=r.z,P[V+$+3]=0),x===!0&&(r.fromBufferAttribute(X,q),P[V+$+4]=r.x,P[V+$+5]=r.y,P[V+$+6]=r.z,P[V+$+7]=0),m===!0&&(r.fromBufferAttribute(te,q),P[V+$+8]=r.x,P[V+$+9]=r.y,P[V+$+10]=r.z,P[V+$+11]=te.itemSize===4?r.w:1)}}f={count:h,texture:U,size:new oe(I,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function hm(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ic=new gt,ll=new dc(1,1),Lc=new nc,Dc=new Zu,Nc=new cc,cl=[],ul=[],hl=new Float32Array(16),fl=new Float32Array(9),dl=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=cl[r];if(s===void 0&&(s=new Float32Array(r),cl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _s(i,e){let t=ul[e];t===void 0&&(t=new Int32Array(e),ul[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;dl.set(n),i.uniformMatrix2fv(this.addr,!1,dl),pt(t,n)}}function vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;fl.set(n),i.uniformMatrix3fv(this.addr,!1,fl),pt(t,n)}}function xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;hl.set(n),i.uniformMatrix4fv(this.addr,!1,hl),pt(t,n)}}function _m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function wm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ll.compareFunction=ec,s=ll):s=Ic,t.setTexture2D(e||s,r)}function Pm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dc,r)}function Rm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Nc,r)}function Cm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Lc,r)}function Im(i){switch(i){case 5126:return fm;case 35664:return dm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return vm;case 35676:return xm;case 5124:case 35670:return _m;case 35667:case 35671:return Sm;case 35668:case 35672:return Mm;case 35669:case 35673:return ym;case 5125:return Em;case 36294:return Am;case 36295:return Tm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Lm(i,e){i.uniform1fv(this.addr,e)}function Dm(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function Nm(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function Um(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function Om(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fm(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zm(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bm(i,e){i.uniform1iv(this.addr,e)}function Hm(i,e){i.uniform2iv(this.addr,e)}function km(i,e){i.uniform3iv(this.addr,e)}function Gm(i,e){i.uniform4iv(this.addr,e)}function Vm(i,e){i.uniform1uiv(this.addr,e)}function Wm(i,e){i.uniform2uiv(this.addr,e)}function Xm(i,e){i.uniform3uiv(this.addr,e)}function jm(i,e){i.uniform4uiv(this.addr,e)}function Jm(i,e,t){const n=this.cache,r=e.length,s=_s(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ic,s[a])}function qm(i,e,t){const n=this.cache,r=e.length,s=_s(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Dc,s[a])}function Ym(i,e,t){const n=this.cache,r=e.length,s=_s(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Nc,s[a])}function Zm(i,e,t){const n=this.cache,r=e.length,s=_s(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Lc,s[a])}function Qm(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Nm;case 35666:return Um;case 35674:return Om;case 35675:return Fm;case 35676:return zm;case 5124:case 35670:return Bm;case 35667:case 35671:return Hm;case 35668:case 35672:return km;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return Zm}}class Km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}}class $m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qm(t.type)}}class eg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function pl(i,e){i.seq.push(e),i.map[e.id]=e}function tg(i,e,t){const n=i.name,r=n.length;for(ta.lastIndex=0;;){const s=ta.exec(n),a=ta.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){pl(t,c===void 0?new Km(o,i,e):new $m(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new eg(o),pl(t,h)),t=h}}}class as{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);tg(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ml(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ng=37297;let ig=0;function rg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gl=new Xe;function sg(i){Qe._getMatrix(gl,Qe.workingColorSpace,i);const e=`mat3( ${gl.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case us:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+rg(i.getShaderSource(e),o)}else return s}function ag(i,e){const t=sg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function og(i,e){let t;switch(e){case Bl:t="Linear";break;case Hl:t="Reinhard";break;case kl:t="Cineon";break;case Ka:t="ACESFilmic";break;case Vl:t="AgX";break;case Wl:t="Neutral";break;case Gl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new L;function lg(){Qe.getLuminanceCoefficients(Qr);const i=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function ug(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ir(i){return i!==""}function xl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(i){return i.replace(fg,pg)}const dg=new Map;function pg(i,e){let t=Je[e];if(t===void 0){const n=dg.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qa(t)}const mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(i){return i.replace(mg,gg)}function gg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ml(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function xg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case Pi:e="ENVMAP_TYPE_CUBE";break;case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _g(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Pi&&(e="ENVMAP_MODE_REFRACTION"),e}function Sg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zl:e="ENVMAP_BLENDING_MULTIPLY";break;case pu:e="ENVMAP_BLENDING_MIX";break;case mu:e="ENVMAP_BLENDING_ADD";break}return e}function Mg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vg(t),c=xg(t),u=_g(t),h=Sg(t),f=Mg(t),p=cg(t),g=ug(s),x=r.createProgram();let m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),d.length>0&&(d+=`
`)):(m=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),d=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Pn?og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ag("linearToOutputTexel",t.outputColorSpace),lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=qa(a),a=xl(a,t),a=_l(a,t),o=qa(o),o=xl(o,t),o=_l(o,t),a=Sl(a),o=Sl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=b+m+a,S=b+d+o,I=ml(r,r.VERTEX_SHADER,y),w=ml(r,r.FRAGMENT_SHADER,S);r.attachShader(x,I),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(C){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(x)||"",X=r.getShaderInfoLog(I)||"",te=r.getShaderInfoLog(w)||"",V=z.trim(),q=X.trim(),$=te.trim();let k=!0,he=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,I,w);else{const _e=vl(r,I,"vertex"),ve=vl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+_e+`
`+ve)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(q===""||$==="")&&(he=!1);he&&(C.diagnostics={runnable:k,programLog:V,vertexShader:{log:q,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(I),r.deleteShader(w),U=new as(r,x),E=hg(r,x)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,ng)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ig++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=w,this}let Eg=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tg(e),t.set(e,n)),n}}class Tg{constructor(e){this.id=Eg++,this.code=e,this.usedTimes=0}}function bg(i,e,t,n,r,s,a){const o=new ic,l=new Ag,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,z,X){const te=z.fog,V=X.geometry,q=E.isMeshStandardMaterial?z.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),k=$&&$.mapping===gs?$.image.height:null,he=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const _e=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=_e!==void 0?_e.length:0;let Be=0;V.morphAttributes.position!==void 0&&(Be=1),V.morphAttributes.normal!==void 0&&(Be=2),V.morphAttributes.color!==void 0&&(Be=3);let je,Ze,We,Z;if(he){const Ke=tn[he];je=Ke.vertexShader,Ze=Ke.fragmentShader}else je=E.vertexShader,Ze=E.fragmentShader,l.update(E),We=l.getVertexShaderID(E),Z=l.getFragmentShaderID(E);const R=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),be=X.isInstancedMesh===!0,Q=X.isBatchedMesh===!0,ye=!!E.map,ze=!!E.matcap,T=!!$,K=!!E.aoMap,Y=!!E.lightMap,J=!!E.bumpMap,j=!!E.normalMap,ce=!!E.displacementMap,re=!!E.emissiveMap,de=!!E.metalnessMap,De=!!E.roughnessMap,Ue=E.anisotropy>0,A=E.clearcoat>0,v=E.dispersion>0,F=E.iridescence>0,G=E.sheen>0,ne=E.transmission>0,W=Ue&&!!E.anisotropyMap,Ce=A&&!!E.clearcoatMap,fe=A&&!!E.clearcoatNormalMap,Ie=A&&!!E.clearcoatRoughnessMap,Pe=F&&!!E.iridescenceMap,se=F&&!!E.iridescenceThicknessMap,me=G&&!!E.sheenColorMap,Ne=G&&!!E.sheenRoughnessMap,we=!!E.specularMap,xe=!!E.specularColorMap,ke=!!E.specularIntensityMap,N=ne&&!!E.transmissionMap,ue=ne&&!!E.thicknessMap,pe=!!E.gradientMap,Ae=!!E.alphaMap,ae=E.alphaTest>0,ee=!!E.alphaHash,Re=!!E.extensions;let He=Pn;E.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(He=i.toneMapping);const et={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:Ze,defines:E.defines,customVertexShaderID:We,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Q,batchingColor:Q&&X._colorsTexture!==null,instancing:be,instancingColor:be&&X.instanceColor!==null,instancingMorph:be&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:R===null?i.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ri,alphaToCoverage:!!E.alphaToCoverage,map:ye,matcap:ze,envMap:T,envMapMode:T&&$.mapping,envMapCubeUVHeight:k,aoMap:K,lightMap:Y,bumpMap:J,normalMap:j,displacementMap:f&&ce,emissiveMap:re,normalMapObjectSpace:j&&E.normalMapType===_u,normalMapTangentSpace:j&&E.normalMapType===$l,metalnessMap:de,roughnessMap:De,anisotropy:Ue,anisotropyMap:W,clearcoat:A,clearcoatMap:Ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ie,dispersion:v,iridescence:F,iridescenceMap:Pe,iridescenceThicknessMap:se,sheen:G,sheenColorMap:me,sheenRoughnessMap:Ne,specularMap:we,specularColorMap:xe,specularIntensityMap:ke,transmission:ne,transmissionMap:N,thicknessMap:ue,gradientMap:pe,opaque:E.transparent===!1&&E.blending===Ai&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ae,alphaHash:ee,combine:E.combine,mapUv:ye&&x(E.map.channel),aoMapUv:K&&x(E.aoMap.channel),lightMapUv:Y&&x(E.lightMap.channel),bumpMapUv:J&&x(E.bumpMap.channel),normalMapUv:j&&x(E.normalMap.channel),displacementMapUv:ce&&x(E.displacementMap.channel),emissiveMapUv:re&&x(E.emissiveMap.channel),metalnessMapUv:de&&x(E.metalnessMap.channel),roughnessMapUv:De&&x(E.roughnessMap.channel),anisotropyMapUv:W&&x(E.anisotropyMap.channel),clearcoatMapUv:Ce&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(E.sheenRoughnessMap.channel),specularMapUv:we&&x(E.specularMap.channel),specularColorMapUv:xe&&x(E.specularColorMap.channel),specularIntensityMapUv:ke&&x(E.specularIntensityMap.channel),transmissionMapUv:N&&x(E.transmissionMap.channel),thicknessMapUv:ue&&x(E.thicknessMap.channel),alphaMapUv:Ae&&x(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(j||Ue),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(ye||Ae),fog:!!te,useFog:E.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===tt,decodeVideoTextureEmissive:re&&E.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(E.emissiveMap.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===nn,flipSided:E.side===Rt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Re&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&E.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(b(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const M=g[E.type];let C;if(M){const z=tn[M];C=gr.clone(z.uniforms)}else C=E.uniforms;return C}function I(E,M){let C;for(let z=0,X=u.length;z<X;z++){const te=u[z];if(te.cacheKey===M){C=te,++C.usedTimes;break}}return C===void 0&&(C=new yg(i,M,E,s),u.push(C)),C}function w(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:I,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:U}}function wg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Pg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function El(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Pg),n.length>1&&n.sort(f||yl),r.length>1&&r.sort(f||yl)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Rg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new El,i.set(n,[a])):r>=s.length?(a=new El,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ve};break;case"SpotLight":t={position:new L,direction:new L,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Lg=0;function Dg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ng(i){const e=new Cg,t=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new it,a=new it;function o(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,b=0,y=0,S=0,I=0,w=0,P=0;c.sort(Dg);for(let E=0,M=c.length;E<M;E++){const C=c[E],z=C.color,X=C.intensity,te=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*X,h+=z.g*X,f+=z.b*X;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],X);P++}else if(C.isDirectionalLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,k=t.get(C);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=C.shadow.matrix,b++}n.directional[p]=q,p++}else if(C.isSpotLight){const q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(z).multiplyScalar(X),q.distance=te,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[x]=q;const $=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,$.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=$.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=V,S++}x++}else if(C.isRectAreaLight){const q=e.get(C);q.color.copy(z).multiplyScalar(X),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=q,m++}else if(C.isPointLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const $=C.shadow,k=t.get(C);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=q,g++}else if(C.isHemisphereLight){const q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(X),q.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[d]=q,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==b||U.numPointShadows!==y||U.numSpotShadows!==S||U.numSpotMaps!==I||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=b,U.numPointShadows=y,U.numSpotShadows=S,U.numSpotMaps=I,U.numLightProbes=P,n.version=Lg++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const y=c[d];if(y.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(y.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Al(i){const e=new Ng(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ug(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Al(i),e.set(r,[o])):s>=a.length?(o=new Al(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zg(i,e,t){let n=new lo;const r=new oe,s=new oe,a=new ut,o=new nf({depthPacking:xu}),l=new rf,c={},u=t.maxTextureSize,h={[Rn]:Rt,[Rt]:Rn,[nn]:nn},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Og,fragmentShader:Fg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let d=this.type;this.render=function(w,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(xn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=d!==gn&&this.type===gn,te=d===gn&&this.type!==gn;for(let V=0,q=w.length;V<q;V++){const $=w[V],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const he=k.getFrameExtents();if(r.multiply(he),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,k.mapSize.y=s.y)),k.map===null||X===!0||te===!0){const ve=this.type!==gn?{minFilter:Ut,magFilter:Ut}:{};k.map!==null&&k.map.dispose(),k.map=new Kt(r.x,r.y,ve),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const _e=k.getViewportCount();for(let ve=0;ve<_e;ve++){const Be=k.getViewport(ve);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),z.viewport(a),k.updateMatrices($,ve),n=k.getFrustum(),S(P,U,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===gn&&b(k,U),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,C)};function b(w,P){const U=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Kt(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,U,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,U,p,x,null)}function y(w,P,U,E){let M=null;const C=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=M.uuid,X=P.uuid;let te=c[z];te===void 0&&(te={},c[z]=te);let V=te[X];V===void 0&&(V=M.clone(),te[X]=V,P.addEventListener("dispose",I)),M=V}if(M.visible=P.visible,M.wireframe=P.wireframe,E===gn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=U}return M}function S(w,P,U,E,M){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const X=e.update(w),te=w.material;if(Array.isArray(te)){const V=X.groups;for(let q=0,$=V.length;q<$;q++){const k=V[q],he=te[k.materialIndex];if(he&&he.visible){const _e=y(w,he,E,M);w.onBeforeShadow(i,w,P,U,X,_e,k),i.renderBufferDirect(U,null,X,_e,w,k),w.onAfterShadow(i,w,P,U,X,_e,k)}}}else if(te.visible){const V=y(w,te,E,M);w.onBeforeShadow(i,w,P,U,X,V,null),i.renderBufferDirect(U,null,X,V,w,null),w.onAfterShadow(i,w,P,U,X,V,null)}}const z=w.children;for(let X=0,te=z.length;X<te;X++)S(z[X],P,U,E,M)}function I(w){w.target.removeEventListener("dispose",I);for(const U in c){const E=c[U],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Bg={[sa]:aa,[oa]:ua,[la]:ha,[bi]:ca,[aa]:sa,[ua]:oa,[ha]:la,[ca]:bi};function Hg(i,e){function t(){let N=!1;const ue=new ut;let pe=null;const Ae=new ut(0,0,0,0);return{setMask:function(ae){pe!==ae&&!N&&(i.colorMask(ae,ae,ae,ae),pe=ae)},setLocked:function(ae){N=ae},setClear:function(ae,ee,Re,He,et){et===!0&&(ae*=He,ee*=He,Re*=He),ue.set(ae,ee,Re,He),Ae.equals(ue)===!1&&(i.clearColor(ae,ee,Re,He),Ae.copy(ue))},reset:function(){N=!1,pe=null,Ae.set(-1,0,0,0)}}}function n(){let N=!1,ue=!1,pe=null,Ae=null,ae=null;return{setReversed:function(ee){if(ue!==ee){const Re=e.get("EXT_clip_control");ee?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ue=ee;const He=ae;ae=null,this.setClear(He)}},getReversed:function(){return ue},setTest:function(ee){ee?R(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(ee){pe!==ee&&!N&&(i.depthMask(ee),pe=ee)},setFunc:function(ee){if(ue&&(ee=Bg[ee]),Ae!==ee){switch(ee){case sa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ee}},setLocked:function(ee){N=ee},setClear:function(ee){ae!==ee&&(ue&&(ee=1-ee),i.clearDepth(ee),ae=ee)},reset:function(){N=!1,pe=null,Ae=null,ae=null,ue=!1}}}function r(){let N=!1,ue=null,pe=null,Ae=null,ae=null,ee=null,Re=null,He=null,et=null;return{setTest:function(Ke){N||(Ke?R(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(Ke){ue!==Ke&&!N&&(i.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,Ot,Tt){(pe!==Ke||Ae!==Ot||ae!==Tt)&&(i.stencilFunc(Ke,Ot,Tt),pe=Ke,Ae=Ot,ae=Tt)},setOp:function(Ke,Ot,Tt){(ee!==Ke||Re!==Ot||He!==Tt)&&(i.stencilOp(Ke,Ot,Tt),ee=Ke,Re=Ot,He=Tt)},setLocked:function(Ke){N=Ke},setClear:function(Ke){et!==Ke&&(i.clearStencil(Ke),et=Ke)},reset:function(){N=!1,ue=null,pe=null,Ae=null,ae=null,ee=null,Re=null,He=null,et=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,y=null,S=null,I=null,w=null,P=new Ve(0,0,0),U=0,E=!1,M=null,C=null,z=null,X=null,te=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,$=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=$>=2);let he=null,_e={};const ve=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),je=new ut().fromArray(ve),Ze=new ut().fromArray(Be);function We(N,ue,pe,Ae){const ae=new Uint8Array(4),ee=i.createTexture();i.bindTexture(N,ee),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<pe;Re++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ue+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ee}const Z={};Z[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),R(i.DEPTH_TEST),a.setFunc(bi),J(!1),j(So),R(i.CULL_FACE),K(xn);function R(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function le(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function be(N,ue){return h[N]!==ue?(i.bindFramebuffer(N,ue),h[N]=ue,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ue),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Q(N,ue){let pe=p,Ae=!1;if(N){pe=f.get(ue),pe===void 0&&(pe=[],f.set(ue,pe));const ae=N.textures;if(pe.length!==ae.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Re=ae.length;ee<Re;ee++)pe[ee]=i.COLOR_ATTACHMENT0+ee;pe.length=ae.length,Ae=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(pe)}function ye(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const ze={[Gn]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[Kc]:i.FUNC_REVERSE_SUBTRACT};ze[$c]=i.MIN,ze[eu]=i.MAX;const T={[tu]:i.ZERO,[nu]:i.ONE,[iu]:i.SRC_COLOR,[ia]:i.SRC_ALPHA,[cu]:i.SRC_ALPHA_SATURATE,[ou]:i.DST_COLOR,[su]:i.DST_ALPHA,[ru]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[lu]:i.ONE_MINUS_DST_COLOR,[au]:i.ONE_MINUS_DST_ALPHA,[uu]:i.CONSTANT_COLOR,[hu]:i.ONE_MINUS_CONSTANT_COLOR,[fu]:i.CONSTANT_ALPHA,[du]:i.ONE_MINUS_CONSTANT_ALPHA};function K(N,ue,pe,Ae,ae,ee,Re,He,et,Ke){if(N===xn){x===!0&&(le(i.BLEND),x=!1);return}if(x===!1&&(R(i.BLEND),x=!0),N!==Zc){if(N!==m||Ke!==E){if((d!==Gn||S!==Gn)&&(i.blendEquation(i.FUNC_ADD),d=Gn,S=Gn),Ke)switch(N){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFunc(i.ONE,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,y=null,I=null,w=null,P.set(0,0,0),U=0,m=N,E=Ke}return}ae=ae||ue,ee=ee||pe,Re=Re||Ae,(ue!==d||ae!==S)&&(i.blendEquationSeparate(ze[ue],ze[ae]),d=ue,S=ae),(pe!==b||Ae!==y||ee!==I||Re!==w)&&(i.blendFuncSeparate(T[pe],T[Ae],T[ee],T[Re]),b=pe,y=Ae,I=ee,w=Re),(He.equals(P)===!1||et!==U)&&(i.blendColor(He.r,He.g,He.b,et),P.copy(He),U=et),m=N,E=!1}function Y(N,ue){N.side===nn?le(i.CULL_FACE):R(i.CULL_FACE);let pe=N.side===Rt;ue&&(pe=!pe),J(pe),N.blending===Ai&&N.transparent===!1?K(xn):K(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ae=N.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),re(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?R(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function j(N){N!==Jc?(R(i.CULL_FACE),N!==C&&(N===So?i.cullFace(i.BACK):N===qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),C=N}function ce(N){N!==z&&(q&&i.lineWidth(N),z=N)}function re(N,ue,pe){N?(R(i.POLYGON_OFFSET_FILL),(X!==ue||te!==pe)&&(i.polygonOffset(ue,pe),X=ue,te=pe)):le(i.POLYGON_OFFSET_FILL)}function de(N){N?R(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function De(N){N===void 0&&(N=i.TEXTURE0+V-1),he!==N&&(i.activeTexture(N),he=N)}function Ue(N,ue,pe){pe===void 0&&(he===null?pe=i.TEXTURE0+V-1:pe=he);let Ae=_e[pe];Ae===void 0&&(Ae={type:void 0,texture:void 0},_e[pe]=Ae),(Ae.type!==N||Ae.texture!==ue)&&(he!==pe&&(i.activeTexture(pe),he=pe),i.bindTexture(N,ue||Z[N]),Ae.type=N,Ae.texture=ue)}function A(){const N=_e[he];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(N){je.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function Ne(N){Ze.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ze.copy(N))}function we(N,ue){let pe=c.get(ue);pe===void 0&&(pe=new WeakMap,c.set(ue,pe));let Ae=pe.get(N);Ae===void 0&&(Ae=i.getUniformBlockIndex(ue,N.name),pe.set(N,Ae))}function xe(N,ue){const Ae=c.get(ue).get(N);l.get(ue)!==Ae&&(i.uniformBlockBinding(ue,Ae,N.__bindingPointIndex),l.set(ue,Ae))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,_e={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,y=null,S=null,I=null,w=null,P=new Ve(0,0,0),U=0,E=!1,M=null,C=null,z=null,X=null,te=null,je.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:R,disable:le,bindFramebuffer:be,drawBuffers:Q,useProgram:ye,setBlending:K,setMaterial:Y,setFlipSided:J,setCullFace:j,setLineWidth:ce,setPolygonOffset:re,setScissorTest:de,activeTexture:De,bindTexture:Ue,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Pe,texImage3D:se,updateUBOMapping:we,uniformBlockBinding:xe,texStorage2D:fe,texStorage3D:Ie,texSubImage2D:G,texSubImage3D:ne,compressedTexSubImage2D:W,compressedTexSubImage3D:Ce,scissor:me,viewport:Ne,reset:ke}}function kg(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):pr("canvas")}function x(A,v,F){let G=1;const ne=Ue(A);if((ne.width>F||ne.height>F)&&(G=F/Math.max(ne.width,ne.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(G*ne.width),Ce=Math.floor(G*ne.height);h===void 0&&(h=g(W,Ce));const fe=v?g(W,Ce):h;return fe.width=W,fe.height=Ce,fe.getContext("2d").drawImage(A,0,0,W,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+W+"x"+Ce+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,v,F,G,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=v;if(v===i.RED&&(F===i.FLOAT&&(W=i.R32F),F===i.HALF_FLOAT&&(W=i.R16F),F===i.UNSIGNED_BYTE&&(W=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.R8UI),F===i.UNSIGNED_SHORT&&(W=i.R16UI),F===i.UNSIGNED_INT&&(W=i.R32UI),F===i.BYTE&&(W=i.R8I),F===i.SHORT&&(W=i.R16I),F===i.INT&&(W=i.R32I)),v===i.RG&&(F===i.FLOAT&&(W=i.RG32F),F===i.HALF_FLOAT&&(W=i.RG16F),F===i.UNSIGNED_BYTE&&(W=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RG8UI),F===i.UNSIGNED_SHORT&&(W=i.RG16UI),F===i.UNSIGNED_INT&&(W=i.RG32UI),F===i.BYTE&&(W=i.RG8I),F===i.SHORT&&(W=i.RG16I),F===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGB8UI),F===i.UNSIGNED_SHORT&&(W=i.RGB16UI),F===i.UNSIGNED_INT&&(W=i.RGB32UI),F===i.BYTE&&(W=i.RGB8I),F===i.SHORT&&(W=i.RGB16I),F===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),F===i.UNSIGNED_INT&&(W=i.RGBA32UI),F===i.BYTE&&(W=i.RGBA8I),F===i.SHORT&&(W=i.RGBA16I),F===i.INT&&(W=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),v===i.RGBA){const Ce=ne?us:Qe.getTransfer(G);F===i.FLOAT&&(W=i.RGBA32F),F===i.HALF_FLOAT&&(W=i.RGBA16F),F===i.UNSIGNED_BYTE&&(W=Ce===tt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(A,v){let F;return A?v===null||v===qn||v===hr?F=i.DEPTH24_STENCIL8:v===an?F=i.DEPTH32F_STENCIL8:v===ur&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qn||v===hr?F=i.DEPTH_COMPONENT24:v===an?F=i.DEPTH_COMPONENT32F:v===ur&&(F=i.DEPTH_COMPONENT16),F}function I(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function w(A){const v=A.target;v.removeEventListener("dispose",w),U(v),v.isVideoTexture&&u.delete(v)}function P(A){const v=A.target;v.removeEventListener("dispose",P),M(v)}function U(A){const v=n.get(A);if(v.__webglInit===void 0)return;const F=A.source,G=f.get(F);if(G){const ne=G[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(A),Object.keys(G).length===0&&f.delete(F)}n.remove(A)}function E(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const F=A.source,G=f.get(F);delete G[v.__cacheKey],a.memory.textures--}function M(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let ne=0;ne<v.__webglFramebuffer[G].length;ne++)i.deleteFramebuffer(v.__webglFramebuffer[G][ne]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=A.textures;for(let G=0,ne=F.length;G<ne;G++){const W=n.get(F[G]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(F[G])}n.remove(A)}let C=0;function z(){C=0}function X(){const A=C;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),C+=1,A}function te(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function V(A,v){const F=n.get(A);if(A.isVideoTexture&&de(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const G=A.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,A,v);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function q(A,v){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Z(F,A,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function $(A,v){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Z(F,A,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function k(A,v){const F=n.get(A);if(A.version>0&&F.__version!==A.version){R(F,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const he={[cs]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},_e={[Ut]:i.NEAREST,[gu]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Ms]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},ve={[Su]:i.NEVER,[bu]:i.ALWAYS,[Mu]:i.LESS,[ec]:i.LEQUAL,[yu]:i.EQUAL,[Tu]:i.GEQUAL,[Eu]:i.GREATER,[Au]:i.NOTEQUAL};function Be(A,v){if(v.type===an&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===Ms||v.magFilter===Ar||v.magFilter===Xn||v.minFilter===sn||v.minFilter===Ms||v.minFilter===Ar||v.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,_e[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ut||v.minFilter!==Ar&&v.minFilter!==Xn||v.type===an&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function je(A,v){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",w));const G=v.source;let ne=f.get(G);ne===void 0&&(ne={},f.set(G,ne));const W=te(v);if(W!==A.__cacheKey){ne[W]===void 0&&(ne[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ne[W].usedTimes++;const Ce=ne[A.__cacheKey];Ce!==void 0&&(ne[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(v)),A.__cacheKey=W,A.__webglTexture=ne[W].texture}return F}function Ze(A,v,F){return Math.floor(Math.floor(A/F)/v)}function We(A,v,F,G){const W=A.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,G,v.data);else{W.sort((se,me)=>se.start-me.start);let Ce=0;for(let se=1;se<W.length;se++){const me=W[Ce],Ne=W[se],we=me.start+me.count,xe=Ze(Ne.start,v.width,4),ke=Ze(me.start,v.width,4);Ne.start<=we+1&&xe===ke&&Ze(Ne.start+Ne.count-1,v.width,4)===xe?me.count=Math.max(me.count,Ne.start+Ne.count-me.start):(++Ce,W[Ce]=Ne)}W.length=Ce+1;const fe=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let se=0,me=W.length;se<me;se++){const Ne=W[se],we=Math.floor(Ne.start/4),xe=Math.ceil(Ne.count/4),ke=we%v.width,N=Math.floor(we/v.width),ue=xe,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,ke,N,ue,pe,F,G,v.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function Z(A,v,F){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);const ne=je(A,v),W=v.source;t.bindTexture(G,A.__webglTexture,i.TEXTURE0+F);const Ce=n.get(W);if(W.version!==Ce.__version||ne===!0){t.activeTexture(i.TEXTURE0+F);const fe=Qe.getPrimaries(Qe.workingColorSpace),Ie=v.colorSpace===rn?null:Qe.getPrimaries(v.colorSpace),Pe=v.colorSpace===rn||fe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let se=x(v.image,!1,r.maxTextureSize);se=De(v,se);const me=s.convert(v.format,v.colorSpace),Ne=s.convert(v.type);let we=y(v.internalFormat,me,Ne,v.colorSpace,v.isVideoTexture);Be(G,v);let xe;const ke=v.mipmaps,N=v.isVideoTexture!==!0,ue=Ce.__version===void 0||ne===!0,pe=W.dataReady,Ae=I(v,se);if(v.isDepthTexture)we=S(v.format===dr,v.type),ue&&(N?t.texStorage2D(i.TEXTURE_2D,1,we,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,we,se.width,se.height,0,me,Ne,null));else if(v.isDataTexture)if(ke.length>0){N&&ue&&t.texStorage2D(i.TEXTURE_2D,Ae,we,ke[0].width,ke[0].height);for(let ae=0,ee=ke.length;ae<ee;ae++)xe=ke[ae],N?pe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,xe.width,xe.height,me,Ne,xe.data):t.texImage2D(i.TEXTURE_2D,ae,we,xe.width,xe.height,0,me,Ne,xe.data);v.generateMipmaps=!1}else N?(ue&&t.texStorage2D(i.TEXTURE_2D,Ae,we,se.width,se.height),pe&&We(v,se,me,Ne)):t.texImage2D(i.TEXTURE_2D,0,we,se.width,se.height,0,me,Ne,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,we,ke[0].width,ke[0].height,se.depth);for(let ae=0,ee=ke.length;ae<ee;ae++)if(xe=ke[ae],v.format!==Qt)if(me!==null)if(N){if(pe)if(v.layerUpdates.size>0){const Re=tl(xe.width,xe.height,v.format,v.type);for(const He of v.layerUpdates){const et=xe.data.subarray(He*Re/xe.data.BYTES_PER_ELEMENT,(He+1)*Re/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,He,xe.width,xe.height,1,me,et)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,se.depth,me,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,we,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,se.depth,me,Ne,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,we,xe.width,xe.height,se.depth,0,me,Ne,xe.data)}else{N&&ue&&t.texStorage2D(i.TEXTURE_2D,Ae,we,ke[0].width,ke[0].height);for(let ae=0,ee=ke.length;ae<ee;ae++)xe=ke[ae],v.format!==Qt?me!==null?N?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,xe.width,xe.height,me,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,we,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?pe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,xe.width,xe.height,me,Ne,xe.data):t.texImage2D(i.TEXTURE_2D,ae,we,xe.width,xe.height,0,me,Ne,xe.data)}else if(v.isDataArrayTexture)if(N){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,we,se.width,se.height,se.depth),pe)if(v.layerUpdates.size>0){const ae=tl(se.width,se.height,v.format,v.type);for(const ee of v.layerUpdates){const Re=se.data.subarray(ee*ae/se.data.BYTES_PER_ELEMENT,(ee+1)*ae/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,me,Ne,Re)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Ne,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,se.width,se.height,se.depth,0,me,Ne,se.data);else if(v.isData3DTexture)N?(ue&&t.texStorage3D(i.TEXTURE_3D,Ae,we,se.width,se.height,se.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Ne,se.data)):t.texImage3D(i.TEXTURE_3D,0,we,se.width,se.height,se.depth,0,me,Ne,se.data);else if(v.isFramebufferTexture){if(ue)if(N)t.texStorage2D(i.TEXTURE_2D,Ae,we,se.width,se.height);else{let ae=se.width,ee=se.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(i.TEXTURE_2D,Re,we,ae,ee,0,me,Ne,null),ae>>=1,ee>>=1}}else if(ke.length>0){if(N&&ue){const ae=Ue(ke[0]);t.texStorage2D(i.TEXTURE_2D,Ae,we,ae.width,ae.height)}for(let ae=0,ee=ke.length;ae<ee;ae++)xe=ke[ae],N?pe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,me,Ne,xe):t.texImage2D(i.TEXTURE_2D,ae,we,me,Ne,xe);v.generateMipmaps=!1}else if(N){if(ue){const ae=Ue(se);t.texStorage2D(i.TEXTURE_2D,Ae,we,ae.width,ae.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ne,se)}else t.texImage2D(i.TEXTURE_2D,0,we,me,Ne,se);m(v)&&d(G),Ce.__version=W.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function R(A,v,F){if(v.image.length!==6)return;const G=je(A,v),ne=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const W=n.get(ne);if(ne.version!==W.__version||G===!0){t.activeTexture(i.TEXTURE0+F);const Ce=Qe.getPrimaries(Qe.workingColorSpace),fe=v.colorSpace===rn?null:Qe.getPrimaries(v.colorSpace),Ie=v.colorSpace===rn||Ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,me=[];for(let ee=0;ee<6;ee++)!Pe&&!se?me[ee]=x(v.image[ee],!0,r.maxCubemapSize):me[ee]=se?v.image[ee].image:v.image[ee],me[ee]=De(v,me[ee]);const Ne=me[0],we=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),ke=y(v.internalFormat,we,xe,v.colorSpace),N=v.isVideoTexture!==!0,ue=W.__version===void 0||G===!0,pe=ne.dataReady;let Ae=I(v,Ne);Be(i.TEXTURE_CUBE_MAP,v);let ae;if(Pe){N&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ke,Ne.width,Ne.height);for(let ee=0;ee<6;ee++){ae=me[ee].mipmaps;for(let Re=0;Re<ae.length;Re++){const He=ae[Re];v.format!==Qt?we!==null?N?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,He.width,He.height,we,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,ke,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,He.width,He.height,we,xe,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,ke,He.width,He.height,0,we,xe,He.data)}}}else{if(ae=v.mipmaps,N&&ue){ae.length>0&&Ae++;const ee=Ue(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,me[ee].width,me[ee].height,we,xe,me[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ke,me[ee].width,me[ee].height,0,we,xe,me[ee].data);for(let Re=0;Re<ae.length;Re++){const et=ae[Re].image[ee].image;N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,et.width,et.height,we,xe,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,ke,et.width,et.height,0,we,xe,et.data)}}else{N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,we,xe,me[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ke,we,xe,me[ee]);for(let Re=0;Re<ae.length;Re++){const He=ae[Re];N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,we,xe,He.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,ke,we,xe,He.image[ee])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),W.__version=ne.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function le(A,v,F,G,ne,W){const Ce=s.convert(F.format,F.colorSpace),fe=s.convert(F.type),Ie=y(F.internalFormat,Ce,fe,F.colorSpace),Pe=n.get(v),se=n.get(F);if(se.__renderTarget=v,!Pe.__hasExternalTextures){const me=Math.max(1,v.width>>W),Ne=Math.max(1,v.height>>W);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,W,Ie,me,Ne,v.depth,0,Ce,fe,null):t.texImage2D(ne,W,Ie,me,Ne,0,Ce,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,ne,se.__webglTexture,0,ce(v)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,ne,se.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(A,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const G=v.depthTexture,ne=G&&G.isDepthTexture?G.type:null,W=S(v.stencilBuffer,ne),Ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=ce(v);re(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,W,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,W,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,W,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,A)}else{const G=v.textures;for(let ne=0;ne<G.length;ne++){const W=G[ne],Ce=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),Ie=y(W.internalFormat,Ce,fe,W.colorSpace),Pe=ce(v);F&&re(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Ie,v.width,v.height):re(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const ne=G.__webglTexture,W=ce(v);if(v.depthTexture.format===fr)re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(v.depthTexture.format===dr)re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ye(A){const v=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const ne=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",ne)};G.addEventListener("dispose",ne),v.__depthDisposeCallback=ne}v.__boundDepthTexture=G}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const G=A.texture.mipmaps;G&&G.length>0?Q(v.__webglFramebuffer[0],A):Q(v.__webglFramebuffer,A)}else if(F){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),be(v.__webglDepthbuffer[G],A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,W)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),be(v.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(A,v,F){const G=n.get(A);v!==void 0&&le(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ye(A)}function T(A){const v=A.texture,F=n.get(A),G=n.get(v);A.addEventListener("dispose",P);const ne=A.textures,W=A.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,a.memory.textures++),W){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let Ie=0;Ie<v.mipmaps.length;Ie++)F.__webglFramebuffer[fe][Ie]=i.createFramebuffer()}else F.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)F.__webglFramebuffer[fe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let fe=0,Ie=ne.length;fe<Ie;fe++){const Pe=n.get(ne[fe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&re(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const Ie=ne[fe];F.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Pe=s.convert(Ie.format,Ie.colorSpace),se=s.convert(Ie.type),me=y(Ie.internalFormat,Pe,se,Ie.colorSpace,A.isXRRenderTarget===!0),Ne=ce(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),be(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Be(i.TEXTURE_CUBE_MAP,v);for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)le(F.__webglFramebuffer[fe][Ie],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie);else le(F.__webglFramebuffer[fe],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(v)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Ie=ne.length;fe<Ie;fe++){const Pe=ne[fe],se=n.get(Pe);let me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),Be(me,Pe),le(F.__webglFramebuffer,A,Pe,i.COLOR_ATTACHMENT0+fe,me,0),m(Pe)&&d(me)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,G.__webglTexture),Be(fe,v),v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)le(F.__webglFramebuffer[Ie],A,v,i.COLOR_ATTACHMENT0,fe,Ie);else le(F.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,fe,0);m(v)&&d(fe),t.unbindTexture()}A.depthBuffer&&ye(A)}function K(A){const v=A.textures;for(let F=0,G=v.length;F<G;F++){const ne=v[F];if(m(ne)){const W=b(A),Ce=n.get(ne).__webglTexture;t.bindTexture(W,Ce),d(W),t.unbindTexture()}}}const Y=[],J=[];function j(A){if(A.samples>0){if(re(A)===!1){const v=A.textures,F=A.width,G=A.height;let ne=i.COLOR_BUFFER_BIT;const W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(A),fe=v.length>1;if(fe)for(let Pe=0;Pe<v.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ie=A.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Pe=0;Pe<v.length;Pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const se=n.get(v[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,ne,i.NEAREST),l===!0&&(Y.length=0,J.length=0,Y.push(i.COLOR_ATTACHMENT0+Pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Y.push(W),J.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Pe=0;Pe<v.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const se=n.get(v[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ce(A){return Math.min(r.maxSamples,A.samples)}function re(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function de(A){const v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function De(A,v){const F=A.colorSpace,G=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Ri&&F!==rn&&(Qe.getTransfer(F)===tt?(G!==Qt||ne!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=ze,this.setupRenderTarget=T,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=re}function Gg(i,e){function t(n,r=rn){let s;const a=Qe.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===to)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jl)return i.BYTE;if(n===Jl)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===$a)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===Qt)return i.RGBA;if(n===fr)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===no)return i.RED;if(n===io)return i.RED_INTEGER;if(n===Kl)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===so)return i.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===va||n===xa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ma)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===Sa||n===Ma)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_a||n===Sa)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ea||n===Aa||n===Ta||n===ba||n===wa||n===Pa||n===Ra||n===Ca||n===Ia||n===La||n===Da||n===Na||n===Ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ya)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Fa||n===za)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Oa)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ba||n===Ha||n===ka||n===Ga)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new pc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:Vg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jg extends Ui{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Xg,d={},b=t.getContextAttributes();let y=null,S=null;const I=[],w=[],P=new oe;let U=null;const E=new Nt;E.viewport=new ut;const M=new Nt;M.viewport=new ut;const C=[E,M],z=new df;let X=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let R=I[Z];return R===void 0&&(R=new Gs,I[Z]=R),R.getTargetRaySpace()},this.getControllerGrip=function(Z){let R=I[Z];return R===void 0&&(R=new Gs,I[Z]=R),R.getGripSpace()},this.getHand=function(Z){let R=I[Z];return R===void 0&&(R=new Gs,I[Z]=R),R.getHandSpace()};function V(Z){const R=w.indexOf(Z.inputSource);if(R===-1)return;const le=I[R];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||a),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let Z=0;Z<I.length;Z++){const R=w[Z];R!==null&&(w[Z]=null,I[Z].disconnect(R))}X=null,te=null,m.reset();for(const Z in d)delete d[Z];e.setRenderTarget(y),p=null,f=null,h=null,r=null,S=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,be=null,Q=null;b.depth&&(Q=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=b.stencil?dr:fr,be=b.stencil?hr:qn);const ye={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Kt(f.textureWidth,f.textureHeight,{format:Qt,type:cn,depthTexture:new dc(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Kt(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Z){for(let R=0;R<Z.removed.length;R++){const le=Z.removed[R],be=w.indexOf(le);be>=0&&(w[be]=null,I[be].disconnect(le))}for(let R=0;R<Z.added.length;R++){const le=Z.added[R];let be=w.indexOf(le);if(be===-1){for(let ye=0;ye<I.length;ye++)if(ye>=w.length){w.push(le),be=ye;break}else if(w[ye]===null){w[ye]=le,be=ye;break}if(be===-1)break}const Q=I[be];Q&&Q.connect(le)}}const k=new L,he=new L;function _e(Z,R,le){k.setFromMatrixPosition(R.matrixWorld),he.setFromMatrixPosition(le.matrixWorld);const be=k.distanceTo(he),Q=R.projectionMatrix.elements,ye=le.projectionMatrix.elements,ze=Q[14]/(Q[10]-1),T=Q[14]/(Q[10]+1),K=(Q[9]+1)/Q[5],Y=(Q[9]-1)/Q[5],J=(Q[8]-1)/Q[0],j=(ye[8]+1)/ye[0],ce=ze*J,re=ze*j,de=be/(-J+j),De=de*-J;if(R.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(De),Z.translateZ(de),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Q[10]===-1)Z.projectionMatrix.copy(R.projectionMatrix),Z.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const Ue=ze+de,A=T+de,v=ce-De,F=re+(be-De),G=K*T/A*Ue,ne=Y*T/A*Ue;Z.projectionMatrix.makePerspective(v,F,G,ne,Ue,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,R){R===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(R.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let R=Z.near,le=Z.far;m.texture!==null&&(m.depthNear>0&&(R=m.depthNear),m.depthFar>0&&(le=m.depthFar)),z.near=M.near=E.near=R,z.far=M.far=E.far=le,(X!==z.near||te!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),X=z.near,te=z.far),z.layers.mask=Z.layers.mask|6,E.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const be=Z.parent,Q=z.cameras;ve(z,be);for(let ye=0;ye<Q.length;ye++)ve(Q[ye],be);Q.length===2?_e(z,E,M):z.projectionMatrix.copy(E.projectionMatrix),Be(Z,z,be)};function Be(Z,R,le){le===null?Z.matrix.copy(R.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(R.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(R.projectionMatrix),Z.projectionMatrixInverse.copy(R.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ci*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return d[Z]};let je=null;function Ze(Z,R){if(u=R.getViewerPose(c||a),g=R,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let be=!1;le.length!==z.cameras.length&&(z.cameras.length=0,be=!0);for(let T=0;T<le.length;T++){const K=le[T];let Y=null;if(p!==null)Y=p.getViewport(K);else{const j=h.getViewSubImage(f,K);Y=j.viewport,T===0&&(e.setRenderTargetTextures(S,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(S))}let J=C[T];J===void 0&&(J=new Nt,J.layers.enable(T),J.viewport=new ut,C[T]=J),J.matrix.fromArray(K.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(K.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Y.x,Y.y,Y.width,Y.height),T===0&&(z.matrix.copy(J.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),be===!0&&z.cameras.push(J)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const T=h.getDepthInformation(le[0]);T&&T.isValid&&T.texture&&m.init(T,r.renderState)}if(Q&&Q.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let T=0;T<le.length;T++){const K=le[T].camera;if(K){let Y=d[K];Y||(Y=new pc,d[K]=Y);const J=h.getCameraImage(K);Y.sourceTexture=J}}}}for(let le=0;le<I.length;le++){const be=w[le],Q=I[le];be!==null&&Q!==void 0&&Q.update(be,R,c||a)}je&&je(Z,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),g=null}const We=new Cc;We.setAnimationLoop(Ze),this.setAnimationLoop=function(Z){je=Z},this.dispose=function(){}}}const zn=new $t,Jg=new it;function qg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,oc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,y,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d),y=b.envMap,S=b.envMapRotation;y&&(m.envMap.value=y,zn.copy(S),zn.x*=-1,zn.y*=-1,zn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(zn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Yg(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const S=y.program;n.uniformBlockBinding(b,S)}function c(b,y){let S=r[b.id];S===void 0&&(g(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(b,I);const w=e.render.frame;s[b.id]!==w&&(f(b),s[b.id]=w)}function u(b){const y=h();b.__bindingPointIndex=y;const S=i.createBuffer(),I=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=r[b.id],S=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,P=S.length;w<P;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,M=U.length;E<M;E++){const C=U[E];if(p(C,w,E,I)===!0){const z=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let te=0;for(let V=0;V<X.length;V++){const q=X[V],$=x(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,z+te,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,te),te+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,S,I){const w=b.value,P=y+"_"+S;if(I[P]===void 0)return typeof w=="number"||typeof w=="boolean"?I[P]=w:I[P]=w.clone(),!0;{const U=I[P];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return I[P]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(b){const y=b.uniforms;let S=0;const I=16;for(let P=0,U=y.length;P<U;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,C=E.length;M<C;M++){const z=E[M],X=Array.isArray(z.value)?z.value:[z.value];for(let te=0,V=X.length;te<V;te++){const q=X[te],$=x(q),k=S%I,he=k%$.boundary,_e=k+he;S+=he,_e!==0&&I-_e<$.storage&&(S+=I-_e),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=$.storage}}}const w=S%I;return w>0&&(S+=I-w),b.__size=S,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Zg{constructor(e={}){const{canvas:t=Vu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=wt;let w=0,P=0,U=null,E=-1,M=null;const C=new ut,z=new ut;let X=null;const te=new Ve(0);let V=0,q=t.width,$=t.height,k=1,he=null,_e=null;const ve=new ut(0,0,q,$),Be=new ut(0,0,q,$);let je=!1;const Ze=new lo;let We=!1,Z=!1;const R=new it,le=new L,be=new ut,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function ze(){return U===null?k:1}let T=n;function K(_,O){return t.getContext(_,O)}try{const _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ae,!1),T===null){const O="webgl2";if(T=K(O,_),T===null)throw K(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Y,J,j,ce,re,de,De,Ue,A,v,F,G,ne,W,Ce,fe,Ie,Pe,se,me,Ne,we,xe,ke;function N(){Y=new am(T),Y.init(),we=new Gg(T,Y),J=new $p(T,Y,e,we),j=new Hg(T,Y),J.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),ce=new cm(T),re=new wg,de=new kg(T,Y,j,re,J,we,ce),De=new tm(S),Ue=new sm(S),A=new mf(T),xe=new Qp(T,A),v=new om(T,A,ce,xe),F=new hm(T,v,A,ce),se=new um(T,J,de),fe=new em(re),G=new bg(S,De,Ue,Y,J,xe,fe),ne=new qg(S,re),W=new Rg,Ce=new Ug(Y),Pe=new Zp(S,De,Ue,j,F,p,l),Ie=new zg(S,F,J),ke=new Yg(T,ce,J,j),me=new Kp(T,Y,ce),Ne=new lm(T,Y,ce),ce.programs=G.programs,S.capabilities=J,S.extensions=Y,S.properties=re,S.renderLists=W,S.shadowMap=Ie,S.state=j,S.info=ce}N();const ue=new jg(S,T);this.xr=ue,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const _=Y.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Y.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(_){_!==void 0&&(k=_,this.setSize(q,$,!1))},this.getSize=function(_){return _.set(q,$)},this.setSize=function(_,O,B=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=_,$=O,t.width=Math.floor(_*k),t.height=Math.floor(O*k),B===!0&&(t.style.width=_+"px",t.style.height=O+"px"),this.setViewport(0,0,_,O)},this.getDrawingBufferSize=function(_){return _.set(q*k,$*k).floor()},this.setDrawingBufferSize=function(_,O,B){q=_,$=O,k=B,t.width=Math.floor(_*B),t.height=Math.floor(O*B),this.setViewport(0,0,_,O)},this.getCurrentViewport=function(_){return _.copy(C)},this.getViewport=function(_){return _.copy(ve)},this.setViewport=function(_,O,B,H){_.isVector4?ve.set(_.x,_.y,_.z,_.w):ve.set(_,O,B,H),j.viewport(C.copy(ve).multiplyScalar(k).round())},this.getScissor=function(_){return _.copy(Be)},this.setScissor=function(_,O,B,H){_.isVector4?Be.set(_.x,_.y,_.z,_.w):Be.set(_,O,B,H),j.scissor(z.copy(Be).multiplyScalar(k).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(_){j.setScissorTest(je=_)},this.setOpaqueSort=function(_){he=_},this.setTransparentSort=function(_){_e=_},this.getClearColor=function(_){return _.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(_=!0,O=!0,B=!0){let H=0;if(_){let D=!1;if(U!==null){const ie=U.texture.format;D=ie===so||ie===ro||ie===io}if(D){const ie=U.texture.type,ge=ie===cn||ie===qn||ie===ur||ie===hr||ie===eo||ie===to,Ee=Pe.getClearColor(),Se=Pe.getClearAlpha(),Te=Ee.r,Oe=Ee.g,Le=Ee.b;ge?(g[0]=Te,g[1]=Oe,g[2]=Le,g[3]=Se,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=Te,x[1]=Oe,x[2]=Le,x[3]=Se,T.clearBufferiv(T.COLOR,0,x))}else H|=T.COLOR_BUFFER_BIT}O&&(H|=T.DEPTH_BUFFER_BIT),B&&(H|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Pe.dispose(),W.dispose(),Ce.dispose(),re.dispose(),De.dispose(),Ue.dispose(),F.dispose(),xe.dispose(),ke.dispose(),G.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Tt),ue.removeEventListener("sessionend",Mn),Wt.stop()};function pe(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const _=ce.autoReset,O=Ie.enabled,B=Ie.autoUpdate,H=Ie.needsUpdate,D=Ie.type;N(),ce.autoReset=_,Ie.enabled=O,Ie.autoUpdate=B,Ie.needsUpdate=H,Ie.type=D}function ae(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ee(_){const O=_.target;O.removeEventListener("dispose",ee),Re(O)}function Re(_){He(_),re.remove(_)}function He(_){const O=re.get(_).programs;O!==void 0&&(O.forEach(function(B){G.releaseProgram(B)}),_.isShaderMaterial&&G.releaseShaderCache(_))}this.renderBufferDirect=function(_,O,B,H,D,ie){O===null&&(O=Q);const ge=D.isMesh&&D.matrixWorld.determinant()<0,Ee=yr(_,O,B,H,D);j.setMaterial(H,ge);let Se=B.index,Te=1;if(H.wireframe===!0){if(Se=v.getWireframeAttribute(B),Se===void 0)return;Te=2}const Oe=B.drawRange,Le=B.attributes.position;let Ge=Oe.start*Te,Ye=(Oe.start+Oe.count)*Te;ie!==null&&(Ge=Math.max(Ge,ie.start*Te),Ye=Math.min(Ye,(ie.start+ie.count)*Te)),Se!==null?(Ge=Math.max(Ge,0),Ye=Math.min(Ye,Se.count)):Le!=null&&(Ge=Math.max(Ge,0),Ye=Math.min(Ye,Le.count));const ct=Ye-Ge;if(ct<0||ct===1/0)return;xe.setup(D,H,Ee,B,Se);let st,rt=me;if(Se!==null&&(st=A.get(Se),rt=Ne,rt.setIndex(st)),D.isMesh)H.wireframe===!0?(j.setLineWidth(H.wireframeLinewidth*ze()),rt.setMode(T.LINES)):rt.setMode(T.TRIANGLES);else if(D.isLine){let Fe=H.linewidth;Fe===void 0&&(Fe=1),j.setLineWidth(Fe*ze()),D.isLineSegments?rt.setMode(T.LINES):D.isLineLoop?rt.setMode(T.LINE_LOOP):rt.setMode(T.LINE_STRIP)}else D.isPoints?rt.setMode(T.POINTS):D.isSprite&&rt.setMode(T.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))rt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Fe=D._multiDrawStarts,at=D._multiDrawCounts,$e=D._multiDrawCount,Ct=Se?A.get(Se).bytesPerElement:1,$n=re.get(H).currentProgram.getUniforms();for(let It=0;It<$e;It++)$n.setValue(T,"_gl_DrawID",It),rt.render(Fe[It]/Ct,at[It])}else if(D.isInstancedMesh)rt.renderInstances(Ge,ct,D.count);else if(B.isInstancedBufferGeometry){const Fe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,at=Math.min(B.instanceCount,Fe);rt.renderInstances(Ge,ct,at)}else rt.render(Ge,ct)};function et(_,O,B){_.transparent===!0&&_.side===nn&&_.forceSinglePass===!1?(_.side=Rt,_.needsUpdate=!0,Xt(_,O,B),_.side=Rn,_.needsUpdate=!0,Xt(_,O,B),_.side=nn):Xt(_,O,B)}this.compile=function(_,O,B=null){B===null&&(B=_),d=Ce.get(B),d.init(O),y.push(d),B.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),_!==B&&_.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights();const H=new Set;return _.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ie=D.material;if(ie)if(Array.isArray(ie))for(let ge=0;ge<ie.length;ge++){const Ee=ie[ge];et(Ee,B,D),H.add(Ee)}else et(ie,B,D),H.add(ie)}),d=y.pop(),H},this.compileAsync=function(_,O,B=null){const H=this.compile(_,O,B);return new Promise(D=>{function ie(){if(H.forEach(function(ge){re.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){D(_);return}setTimeout(ie,10)}Y.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ke=null;function Ot(_){Ke&&Ke(_)}function Tt(){Wt.stop()}function Mn(){Wt.start()}const Wt=new Cc;Wt.setAnimationLoop(Ot),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(_){Ke=_,ue.setAnimationLoop(_),_===null?Wt.stop():Wt.start()},ue.addEventListener("sessionstart",Tt),ue.addEventListener("sessionend",Mn),this.render=function(_,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,O,U),d=Ce.get(_,y.length),d.init(O),y.push(d),R.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ze.setFromProjectionMatrix(R,on,O.reversedDepth),Z=this.localClippingEnabled,We=fe.init(this.clippingPlanes,Z),m=W.get(_,b.length),m.init(),b.push(m),ue.enabled===!0&&ue.isPresenting===!0){const ie=S.xr.getDepthSensingMesh();ie!==null&&Ft(ie,O,-1/0,S.sortObjects)}Ft(_,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(he,_e),ye=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ye&&Pe.addToRenderList(m,_),this.info.render.frame++,We===!0&&fe.beginShadows();const B=d.state.shadowsArray;Ie.render(B,_,O),We===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,D=m.transmissive;if(d.setupLights(),O.isArrayCamera){const ie=O.cameras;if(D.length>0)for(let ge=0,Ee=ie.length;ge<Ee;ge++){const Se=ie[ge];Qn(H,D,_,Se)}ye&&Pe.render(_);for(let ge=0,Ee=ie.length;ge<Ee;ge++){const Se=ie[ge];un(m,_,Se,Se.viewport)}}else D.length>0&&Qn(H,D,_,O),ye&&Pe.render(_),un(m,_,O);U!==null&&P===0&&(de.updateMultisampleRenderTarget(U),de.updateRenderTargetMipmap(U)),_.isScene===!0&&_.onAfterRender(S,_,O),xe.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],We===!0&&fe.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ft(_,O,B,H){if(_.visible===!1)return;if(_.layers.test(O.layers)){if(_.isGroup)B=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(O);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Ze.intersectsSprite(_)){H&&be.setFromMatrixPosition(_.matrixWorld).applyMatrix4(R);const ge=F.update(_),Ee=_.material;Ee.visible&&m.push(_,ge,Ee,B,be.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Ze.intersectsObject(_))){const ge=F.update(_),Ee=_.material;if(H&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),be.copy(_.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),be.copy(ge.boundingSphere.center)),be.applyMatrix4(_.matrixWorld).applyMatrix4(R)),Array.isArray(Ee)){const Se=ge.groups;for(let Te=0,Oe=Se.length;Te<Oe;Te++){const Le=Se[Te],Ge=Ee[Le.materialIndex];Ge&&Ge.visible&&m.push(_,ge,Ge,B,be.z,Le)}}else Ee.visible&&m.push(_,ge,Ee,B,be.z,null)}}const ie=_.children;for(let ge=0,Ee=ie.length;ge<Ee;ge++)Ft(ie[ge],O,B,H)}function un(_,O,B,H){const D=_.opaque,ie=_.transmissive,ge=_.transparent;d.setupLightsView(B),We===!0&&fe.setGlobalState(S.clippingPlanes,B),H&&j.viewport(C.copy(H)),D.length>0&&Cn(D,O,B),ie.length>0&&Cn(ie,O,B),ge.length>0&&Cn(ge,O,B),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Qn(_,O,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Kt(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?_n:cn,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=d.state.transmissionRenderTarget[H.id],ge=H.viewport||C;ie.setSize(ge.z*S.transmissionResolutionScale,ge.w*S.transmissionResolutionScale);const Ee=S.getRenderTarget(),Se=S.getActiveCubeFace(),Te=S.getActiveMipmapLevel();S.setRenderTarget(ie),S.getClearColor(te),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),ye&&Pe.render(B);const Oe=S.toneMapping;S.toneMapping=Pn;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),We===!0&&fe.setGlobalState(S.clippingPlanes,H),Cn(_,B,H),de.updateMultisampleRenderTarget(ie),de.updateRenderTargetMipmap(ie),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ye=0,ct=O.length;Ye<ct;Ye++){const st=O[Ye],rt=st.object,Fe=st.geometry,at=st.material,$e=st.group;if(at.side===nn&&rt.layers.test(H.layers)){const Ct=at.side;at.side=Rt,at.needsUpdate=!0,ki(rt,B,H,Fe,at,$e),at.side=Ct,at.needsUpdate=!0,Ge=!0}}Ge===!0&&(de.updateMultisampleRenderTarget(ie),de.updateRenderTargetMipmap(ie))}S.setRenderTarget(Ee,Se,Te),S.setClearColor(te,V),Le!==void 0&&(H.viewport=Le),S.toneMapping=Oe}function Cn(_,O,B){const H=O.isScene===!0?O.overrideMaterial:null;for(let D=0,ie=_.length;D<ie;D++){const ge=_[D],Ee=ge.object,Se=ge.geometry,Te=ge.group;let Oe=ge.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),Ee.layers.test(B.layers)&&ki(Ee,O,B,Se,Oe,Te)}}function ki(_,O,B,H,D,ie){_.onBeforeRender(S,O,B,H,D,ie),_.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.onBeforeRender(S,O,B,H,_,ie),D.transparent===!0&&D.side===nn&&D.forceSinglePass===!1?(D.side=Rt,D.needsUpdate=!0,S.renderBufferDirect(B,O,H,D,_,ie),D.side=Rn,D.needsUpdate=!0,S.renderBufferDirect(B,O,H,D,_,ie),D.side=nn):S.renderBufferDirect(B,O,H,D,_,ie),_.onAfterRender(S,O,B,H,D,ie)}function Xt(_,O,B){O.isScene!==!0&&(O=Q);const H=re.get(_),D=d.state.lights,ie=d.state.shadowsArray,ge=D.state.version,Ee=G.getParameters(_,D.state,ie,O,B),Se=G.getProgramCacheKey(Ee);let Te=H.programs;H.environment=_.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(_.isMeshStandardMaterial?Ue:De).get(_.envMap||H.environment),H.envMapRotation=H.environment!==null&&_.envMap===null?O.environmentRotation:_.envMapRotation,Te===void 0&&(_.addEventListener("dispose",ee),Te=new Map,H.programs=Te);let Oe=Te.get(Se);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===ge)return Gi(_,Ee),Oe}else Ee.uniforms=G.getUniforms(_),_.onBeforeCompile(Ee,S),Oe=G.acquireProgram(Ee,Se),Te.set(Se,Oe),H.uniforms=Ee.uniforms;const Le=H.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Le.clippingPlanes=fe.uniform),Gi(_,Ee),H.needsLights=Vi(_),H.lightsStateVersion=ge,H.needsLights&&(Le.ambientLightColor.value=D.state.ambient,Le.lightProbe.value=D.state.probe,Le.directionalLights.value=D.state.directional,Le.directionalLightShadows.value=D.state.directionalShadow,Le.spotLights.value=D.state.spot,Le.spotLightShadows.value=D.state.spotShadow,Le.rectAreaLights.value=D.state.rectArea,Le.ltc_1.value=D.state.rectAreaLTC1,Le.ltc_2.value=D.state.rectAreaLTC2,Le.pointLights.value=D.state.point,Le.pointLightShadows.value=D.state.pointShadow,Le.hemisphereLights.value=D.state.hemi,Le.directionalShadowMap.value=D.state.directionalShadowMap,Le.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Le.spotShadowMap.value=D.state.spotShadowMap,Le.spotLightMatrix.value=D.state.spotLightMatrix,Le.spotLightMap.value=D.state.spotLightMap,Le.pointShadowMap.value=D.state.pointShadowMap,Le.pointShadowMatrix.value=D.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function jt(_){if(_.uniformsList===null){const O=_.currentProgram.getUniforms();_.uniformsList=as.seqWithValue(O.seq,_.uniforms)}return _.uniformsList}function Gi(_,O){const B=re.get(_);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function yr(_,O,B,H,D){O.isScene!==!0&&(O=Q),de.resetTextureUnits();const ie=O.fog,ge=H.isMeshStandardMaterial?O.environment:null,Ee=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ri,Se=(H.isMeshStandardMaterial?Ue:De).get(H.envMap||ge),Te=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,Ye=!!B.morphAttributes.color;let ct=Pn;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ct=S.toneMapping);const st=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=st!==void 0?st.length:0,Fe=re.get(H),at=d.state.lights;if(We===!0&&(Z===!0||_!==M)){const Mt=_===M&&H.id===E;fe.setState(H,_,Mt)}let $e=!1;H.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==at.state.version||Fe.outputColorSpace!==Ee||D.isBatchedMesh&&Fe.batching===!1||!D.isBatchedMesh&&Fe.batching===!0||D.isBatchedMesh&&Fe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Fe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Fe.instancing===!1||!D.isInstancedMesh&&Fe.instancing===!0||D.isSkinnedMesh&&Fe.skinning===!1||!D.isSkinnedMesh&&Fe.skinning===!0||D.isInstancedMesh&&Fe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Fe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Fe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Fe.instancingMorph===!1&&D.morphTexture!==null||Fe.envMap!==Se||H.fog===!0&&Fe.fog!==ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==Te||Fe.vertexTangents!==Oe||Fe.morphTargets!==Le||Fe.morphNormals!==Ge||Fe.morphColors!==Ye||Fe.toneMapping!==ct||Fe.morphTargetsCount!==rt)&&($e=!0):($e=!0,Fe.__version=H.version);let Ct=Fe.currentProgram;$e===!0&&(Ct=Xt(H,O,D));let $n=!1,It=!1,Xi=!1;const ot=Ct.getUniforms(),zt=Fe.uniforms;if(j.useProgram(Ct.program)&&($n=!0,It=!0,Xi=!0),H.id!==E&&(E=H.id,It=!0),$n||M!==_){j.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ot.setValue(T,"projectionMatrix",_.projectionMatrix),ot.setValue(T,"viewMatrix",_.matrixWorldInverse);const bt=ot.map.cameraPosition;bt!==void 0&&bt.setValue(T,le.setFromMatrixPosition(_.matrixWorld)),J.logarithmicDepthBuffer&&ot.setValue(T,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(T,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,It=!0,Xi=!0)}if(D.isSkinnedMesh){ot.setOptional(T,D,"bindMatrix"),ot.setOptional(T,D,"bindMatrixInverse");const Mt=D.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),ot.setValue(T,"boneTexture",Mt.boneTexture,de))}D.isBatchedMesh&&(ot.setOptional(T,D,"batchingTexture"),ot.setValue(T,"batchingTexture",D._matricesTexture,de),ot.setOptional(T,D,"batchingIdTexture"),ot.setValue(T,"batchingIdTexture",D._indirectTexture,de),ot.setOptional(T,D,"batchingColorTexture"),D._colorsTexture!==null&&ot.setValue(T,"batchingColorTexture",D._colorsTexture,de));const Bt=B.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&se.update(D,B,Ct),(It||Fe.receiveShadow!==D.receiveShadow)&&(Fe.receiveShadow=D.receiveShadow,ot.setValue(T,"receiveShadow",D.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zt.envMap.value=Se,zt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(zt.envMapIntensity.value=O.environmentIntensity),It&&(ot.setValue(T,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&Kn(zt,Xi),ie&&H.fog===!0&&ne.refreshFogUniforms(zt,ie),ne.refreshMaterialUniforms(zt,H,k,$,d.state.transmissionRenderTarget[_.id]),as.upload(T,jt(Fe),zt,de)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(as.upload(T,jt(Fe),zt,de),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(T,"center",D.center),ot.setValue(T,"modelViewMatrix",D.modelViewMatrix),ot.setValue(T,"normalMatrix",D.normalMatrix),ot.setValue(T,"modelMatrix",D.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Mt=H.uniformsGroups;for(let bt=0,Ss=Mt.length;bt<Ss;bt++){const Ln=Mt[bt];ke.update(Ln,Ct),ke.bind(Ln,Ct)}}return Ct}function Kn(_,O){_.ambientLightColor.needsUpdate=O,_.lightProbe.needsUpdate=O,_.directionalLights.needsUpdate=O,_.directionalLightShadows.needsUpdate=O,_.pointLights.needsUpdate=O,_.pointLightShadows.needsUpdate=O,_.spotLights.needsUpdate=O,_.spotLightShadows.needsUpdate=O,_.rectAreaLights.needsUpdate=O,_.hemisphereLights.needsUpdate=O}function Vi(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(_,O,B){const H=re.get(_);H.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),re.get(_.texture).__webglTexture=O,re.get(_.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,O){const B=re.get(_);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0};const Er=T.createFramebuffer();this.setRenderTarget=function(_,O=0,B=0){U=_,w=O,P=B;let H=!0,D=null,ie=!1,ge=!1;if(_){const Se=re.get(_);if(Se.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(T.FRAMEBUFFER,null),H=!1;else if(Se.__webglFramebuffer===void 0)de.setupRenderTarget(_);else if(Se.__hasExternalTextures)de.rebindTextures(_,re.get(_.texture).__webglTexture,re.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Le=_.depthTexture;if(Se.__boundDepthTexture!==Le){if(Le!==null&&re.has(Le)&&(_.width!==Le.image.width||_.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(_)}}const Te=_.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);const Oe=re.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?D=Oe[O][B]:D=Oe[O],ie=!0):_.samples>0&&de.useMultisampledRTT(_)===!1?D=re.get(_).__webglMultisampledFramebuffer:Array.isArray(Oe)?D=Oe[B]:D=Oe,C.copy(_.viewport),z.copy(_.scissor),X=_.scissorTest}else C.copy(ve).multiplyScalar(k).floor(),z.copy(Be).multiplyScalar(k).floor(),X=je;if(B!==0&&(D=Er),j.bindFramebuffer(T.FRAMEBUFFER,D)&&H&&j.drawBuffers(_,D),j.viewport(C),j.scissor(z),j.setScissorTest(X),ie){const Se=re.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,B)}else if(ge){const Se=O;for(let Te=0;Te<_.textures.length;Te++){const Oe=re.get(_.textures[Te]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Te,Oe.__webglTexture,B,Se)}}else if(_!==null&&B!==0){const Se=re.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Se.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(_,O,B,H,D,ie,ge,Ee=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=re.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){j.bindFramebuffer(T.FRAMEBUFFER,Se);try{const Te=_.textures[Ee],Oe=Te.format,Le=Te.type;if(!J.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=_.width-H&&B>=0&&B<=_.height-D&&(_.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ee),T.readPixels(O,B,H,D,we.convert(Oe),we.convert(Le),ie))}finally{const Te=U!==null?re.get(U).__webglFramebuffer:null;j.bindFramebuffer(T.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(_,O,B,H,D,ie,ge,Ee=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=re.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se)if(O>=0&&O<=_.width-H&&B>=0&&B<=_.height-D){j.bindFramebuffer(T.FRAMEBUFFER,Se);const Te=_.textures[Ee],Oe=Te.format,Le=Te.type;if(!J.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ge),T.bufferData(T.PIXEL_PACK_BUFFER,ie.byteLength,T.STREAM_READ),_.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ee),T.readPixels(O,B,H,D,we.convert(Oe),we.convert(Le),0);const Ye=U!==null?re.get(U).__webglFramebuffer:null;j.bindFramebuffer(T.FRAMEBUFFER,Ye);const ct=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Wu(T,ct,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ge),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ie),T.deleteBuffer(Ge),T.deleteSync(ct),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,O=null,B=0){const H=Math.pow(2,-B),D=Math.floor(_.image.width*H),ie=Math.floor(_.image.height*H),ge=O!==null?O.x:0,Ee=O!==null?O.y:0;de.setTexture2D(_,0),T.copyTexSubImage2D(T.TEXTURE_2D,B,0,0,ge,Ee,D,ie),j.unbindTexture()};const Wi=T.createFramebuffer(),In=T.createFramebuffer();this.copyTextureToTexture=function(_,O,B=null,H=null,D=0,ie=null){ie===null&&(D!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=D,D=0):ie=0);let ge,Ee,Se,Te,Oe,Le,Ge,Ye,ct;const st=_.isCompressedTexture?_.mipmaps[ie]:_.image;if(B!==null)ge=B.max.x-B.min.x,Ee=B.max.y-B.min.y,Se=B.isBox3?B.max.z-B.min.z:1,Te=B.min.x,Oe=B.min.y,Le=B.isBox3?B.min.z:0;else{const Bt=Math.pow(2,-D);ge=Math.floor(st.width*Bt),Ee=Math.floor(st.height*Bt),_.isDataArrayTexture?Se=st.depth:_.isData3DTexture?Se=Math.floor(st.depth*Bt):Se=1,Te=0,Oe=0,Le=0}H!==null?(Ge=H.x,Ye=H.y,ct=H.z):(Ge=0,Ye=0,ct=0);const rt=we.convert(O.format),Fe=we.convert(O.type);let at;O.isData3DTexture?(de.setTexture3D(O,0),at=T.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(de.setTexture2DArray(O,0),at=T.TEXTURE_2D_ARRAY):(de.setTexture2D(O,0),at=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const $e=T.getParameter(T.UNPACK_ROW_LENGTH),Ct=T.getParameter(T.UNPACK_IMAGE_HEIGHT),$n=T.getParameter(T.UNPACK_SKIP_PIXELS),It=T.getParameter(T.UNPACK_SKIP_ROWS),Xi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,st.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,st.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Te),T.pixelStorei(T.UNPACK_SKIP_ROWS,Oe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Le);const ot=_.isDataArrayTexture||_.isData3DTexture,zt=O.isDataArrayTexture||O.isData3DTexture;if(_.isDepthTexture){const Bt=re.get(_),Mt=re.get(O),bt=re.get(Bt.__renderTarget),Ss=re.get(Mt.__renderTarget);j.bindFramebuffer(T.READ_FRAMEBUFFER,bt.__webglFramebuffer),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let Ln=0;Ln<Se;Ln++)ot&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,re.get(_).__webglTexture,D,Le+Ln),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,re.get(O).__webglTexture,ie,ct+Ln)),T.blitFramebuffer(Te,Oe,ge,Ee,Ge,Ye,ge,Ee,T.DEPTH_BUFFER_BIT,T.NEAREST);j.bindFramebuffer(T.READ_FRAMEBUFFER,null),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(D!==0||_.isRenderTargetTexture||re.has(_)){const Bt=re.get(_),Mt=re.get(O);j.bindFramebuffer(T.READ_FRAMEBUFFER,Wi),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,In);for(let bt=0;bt<Se;bt++)ot?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Bt.__webglTexture,D,Le+bt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Bt.__webglTexture,D),zt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Mt.__webglTexture,ie,ct+bt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Mt.__webglTexture,ie),D!==0?T.blitFramebuffer(Te,Oe,ge,Ee,Ge,Ye,ge,Ee,T.COLOR_BUFFER_BIT,T.NEAREST):zt?T.copyTexSubImage3D(at,ie,Ge,Ye,ct+bt,Te,Oe,ge,Ee):T.copyTexSubImage2D(at,ie,Ge,Ye,Te,Oe,ge,Ee);j.bindFramebuffer(T.READ_FRAMEBUFFER,null),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else zt?_.isDataTexture||_.isData3DTexture?T.texSubImage3D(at,ie,Ge,Ye,ct,ge,Ee,Se,rt,Fe,st.data):O.isCompressedArrayTexture?T.compressedTexSubImage3D(at,ie,Ge,Ye,ct,ge,Ee,Se,rt,st.data):T.texSubImage3D(at,ie,Ge,Ye,ct,ge,Ee,Se,rt,Fe,st):_.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ie,Ge,Ye,ge,Ee,rt,Fe,st.data):_.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ie,Ge,Ye,st.width,st.height,rt,st.data):T.texSubImage2D(T.TEXTURE_2D,ie,Ge,Ye,ge,Ee,rt,Fe,st);T.pixelStorei(T.UNPACK_ROW_LENGTH,$e),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ct),T.pixelStorei(T.UNPACK_SKIP_PIXELS,$n),T.pixelStorei(T.UNPACK_SKIP_ROWS,It),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xi),ie===0&&O.generateMipmaps&&T.generateMipmap(at),j.unbindTexture()},this.initRenderTarget=function(_){re.get(_).__webglFramebuffer===void 0&&de.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?de.setTextureCube(_,0):_.isData3DTexture?de.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?de.setTexture2DArray(_,0):de.setTexture2D(_,0),j.unbindTexture()},this.resetState=function(){w=0,P=0,U=null,j.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const os={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Hi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Qg=new Pc(-1,1,1,-1,0,1);class Kg extends Vt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}}const $g=new Kg;class mo{constructor(e){this._mesh=new ft($g,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ev extends Hi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gr.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new mo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Tl extends Hi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class tv extends Hi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ev(os),this.copyPass.material.blending=xn,this.clock=new Rc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Tl!==void 0&&(a instanceof Tl?n=!0:a instanceof tv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class iv extends Hi{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const rv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Di extends Hi{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(s,a,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Kt(s,a,{type:_n});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Kt(s,a,{type:_n});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=rv;this.highPassUniforms=gr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new oe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gr.clone(os.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:os.vertexShader,fragmentShader:os.fragmentShader,blending:ls,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new vs,this._fsQuad=new mo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new oe(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Di.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Di.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Di.BlurDirectionX=new oe(1,0);Di.BlurDirectionY=new oe(0,1);const Kr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class sv extends Hi{constructor(){super(),this.uniforms=gr.clone(Kr.uniforms),this.material=new ef({name:Kr.name,uniforms:this.uniforms,vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader}),this._fsQuad=new mo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Gl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const bl="/img/logo.png",av=.16,ov=.035,lv=20,cv=3,uv=5,hv=760,wl=.024,fv=.014,dv=.008,Uc=2,Pl=1.15,Rl=.13,Ya=1.1,na=.7,pv="#D9DCE1",mv=.16,Oc=.9,Cl="#1E6BFF",gv="#00B4FF",vv=18,xv=.95,_v="#1E6BFF",Sv=.35,Mv=.12,yv=2.2;function tr(i,e,t,n){if(n<1)return i;const r=new Float32Array(e*t),s=new Float32Array(e*t),a=1/(2*n+1);for(let o=0;o<t;o++){let l=0;const c=o*e;for(let u=-n;u<=n;u++)l+=i[c+Math.min(e-1,Math.max(0,u))];for(let u=0;u<e;u++)r[c+u]=l*a,l+=i[c+Math.min(e-1,u+n+1)]-i[c+Math.max(0,u-n)]}for(let o=0;o<e;o++){let l=0;for(let c=-n;c<=n;c++)l+=r[Math.min(t-1,Math.max(0,c))*e+o];for(let c=0;c<t;c++)s[c*e+o]=l*a,l+=r[Math.min(t-1,c+n+1)*e+o]-r[Math.max(0,c-n)*e+o]}return s}function $r(i,e,t,n){const r=new Uint8Array(e*t),s=new Int32Array(e*t),a=[];for(let o=0;o<e*t;o++){if(r[o]||i[o]!==n)continue;const l=[];let c=0,u=e,h=0,f=t,p=0,g=!1;for(s[c++]=o,r[o]=1;c;){const x=s[--c];l.push(x);const m=x%e,d=x/e|0;m<u&&(u=m),m>h&&(h=m),d<f&&(f=d),d>p&&(p=d),(m===0||d===0||m===e-1||d===t-1)&&(g=!0),m>0&&!r[x-1]&&i[x-1]===n&&(r[x-1]=1,s[c++]=x-1),m<e-1&&!r[x+1]&&i[x+1]===n&&(r[x+1]=1,s[c++]=x+1),d>0&&!r[x-e]&&i[x-e]===n&&(r[x-e]=1,s[c++]=x-e),d<t-1&&!r[x+e]&&i[x+e]===n&&(r[x+e]=1,s[c++]=x+e)}a.push({pixels:l,area:l.length,minX:u,maxX:h,minY:f,maxY:p,touchesBorder:g})}return a}function ms(i,e,t){const r=new Float64Array(e*t);for(let h=0;h<e*t;h++)r[h]=i[h]?1e20:0;const s=Math.max(e,t),a=new Float64Array(s),o=new Float64Array(s),l=new Int32Array(s),c=new Float64Array(s+1),u=h=>{let f=0;l[0]=0,c[0]=-1e20,c[1]=1e20;for(let p=1;p<h;p++){let g=(a[p]+p*p-(a[l[f]]+l[f]*l[f]))/(2*p-2*l[f]);for(;g<=c[f];)f--,g=(a[p]+p*p-(a[l[f]]+l[f]*l[f]))/(2*p-2*l[f]);f++,l[f]=p,c[f]=g,c[f+1]=1e20}f=0;for(let p=0;p<h;p++){for(;c[f+1]<p;)f++;o[p]=(p-l[f])*(p-l[f])+a[l[f]]}};for(let h=0;h<e;h++){for(let f=0;f<t;f++)a[f]=r[f*e+h];u(t);for(let f=0;f<t;f++)r[f*e+h]=o[f]}for(let h=0;h<t;h++){for(let f=0;f<e;f++)a[f]=r[h*e+f];u(e);for(let f=0;f<e;f++)r[h*e+f]=Math.sqrt(o[f])}return r}function Ev(i,e,t,n){const r=ms(i,e,t),s=new Uint8Array(e*t);for(let a=0;a<e*t;a++)s[a]=r[a]>n?1:0;return s}function Av(i,e,t,n){const r=new Uint8Array(e*t);for(let o=0;o<e*t;o++)r[o]=i[o]?0:1;const s=ms(r,e,t),a=new Uint8Array(e*t);for(let o=0;o<e*t;o++)a[o]=s[o]>n?0:1;return a}function Tv(i,e={}){const t=e.width??2e3,n=(e.threshold??lv)/255,r=e.smoothness??cv,s=t/1254,a=Math.round(t*i.height/i.width),o=document.createElement("canvas");o.width=t,o.height=a;const l=o.getContext("2d",{willReadFrequently:!0});l.drawImage(i,0,0,t,a);const c=l.getImageData(0,0,t,a).data;let u=new Float32Array(t*a);for(let R=0;R<t*a;R++)u[R]=Math.max(c[R*4],c[R*4+1],c[R*4+2])/255;const h=u;u=tr(u,t,a,1);const f=new Uint8Array(t*a);for(let R=0;R<f.length;R++)f[R]=u[R]>n?1:0;const p=$r(f,t,a,1),g=p.reduce((R,le)=>le.maxX-le.minX>R.maxX-R.minX?le:R),x=g.maxX-g.minX+1,m=g.maxY-g.minY+1;let d=new Uint8Array(t*a);for(const R of p){if(R===g||R.area<x*m*.006||R.maxX-R.minX>x*.6)continue;const le=R.minX-1,be=R.minY-1,Q=R.maxX-R.minX+3,ye=R.maxY-R.minY+3,ze=new Uint8Array(Q*ye);for(const T of R.pixels)ze[((T/t|0)-be)*Q+T%t-le]=1;for(const T of $r(ze,Q,ye,0)){if(T.touchesBorder)continue;let K=0;for(const J of T.pixels)K+=h[((J/Q|0)+be)*t+J%Q+le];if(!(K/T.area<2.5/255&&T.area>800*s*s))for(const J of T.pixels)ze[J]=1}for(let T=0;T<ye;T++)for(let K=0;K<Q;K++)ze[T*Q+K]&&(d[(T+be)*t+K+le]=1)}const b=Math.max(1,Math.round(2*s));d=Ev(Av(d,t,a,b),t,a,b);let y=new Float32Array(t*a);for(let R=0;R<y.length;R++)y[R]=d[R];for(let R=0;R<2;R++)y=tr(y,t,a,r);for(let R=0;R<y.length;R++)d[R]=y[R]>.5?1:0;const S=g.minX,I=g.minY,w=x,P=m,U=new Uint8Array(w*P);for(let R=0;R<P;R++)for(let le=0;le<w;le++)U[R*w+le]=d[(R+I)*t+le+S];const E=ms(U,w,P),M=new Uint8Array(w*P);for(let R=0;R<w*P;R++)M[R]=U[R]?0:1;const C=ms(M,w,P);let z=new Float32Array(w*P);for(let R=0;R<w*P;R++)z[R]=U[R]?E[R]-.5:.5-C[R];const X=Math.max(1,Math.round(uv*s));for(let R=0;R<4;R++)z=tr(z,w,P,X);const te=Math.max(2,(e.rounding??ov)*w);let V=new Float32Array(w*P);for(let R=0;R<w*P;R++){if(z[R]<=0)continue;const le=Math.min(z[R],te)/te;V[R]=Math.sqrt(1-(1-le)*(1-le))}for(let R=0;R<3;R++)V=tr(V,w,P,X);for(let R=0;R<w*P;R++)U[R]=z[R]>0?1:0;for(let R=0;R<w*P;R++)U[R]||(V[R]=0);let q=new Float32Array(w*P);for(let R=0;R<w*P;R++)q[R]=U[R];q=tr(q,w,P,1);const $=document.createElement("canvas");$.width=w,$.height=P;const k=$.getContext("2d"),he=k.createImageData(w,P);for(let R=0;R<w*P;R++){const le=Math.round(q[R]*255);he.data[R*4]=he.data[R*4+1]=he.data[R*4+2]=le,he.data[R*4+3]=255}k.putImageData(he,0,0);const _e=$r(U,w,P,1).filter(R=>R.area>w*P*.01);let ve=null,Be=0,je=0;for(const R of _e){const le=R.maxX-R.minX+3,be=R.maxY-R.minY+3,Q=new Uint8Array(le*be);for(const ye of R.pixels)Q[((ye/w|0)-R.minY+1)*le+ye%w-R.minX+1]=1;for(const ye of $r(Q,le,be,0))!ye.touchesBorder&&ye.area>Be&&(Be=ye.area,ve=R,je=ye.maxY+R.minY-1)}ve||(ve=_e.sort((R,le)=>R.minX-le.minX)[Math.min(2,_e.length-1)]);let Ze=0,We=0;for(const R of ve.pixels)(R/w|0)>=ve.maxY-2&&(Ze+=R%w,We++);const Z={u:(We?Ze/We:(ve.minX+ve.maxX)/2)/w,v:ve.maxY/P,vHole:(je||ve.maxY-(ve.maxY-ve.minY)*.18)/P};return{maskCanvas:$,height:V,w,h:P,aspect:w/P,anchorO:Z}}function bv(i,e,t){const n=e/i.aspect,r=window.matchMedia("(max-width: 768px)").matches,s=Math.round(hv*(r?.6:1)),a=Math.round(s/i.aspect),o=new zi(e,n,s,a),l=o.attributes.position,c=o.attributes.uv,{w:u,h}=i,f=(p,g)=>{const x=p*(u-1),m=(1-g)*(h-1),d=Math.floor(x),b=Math.floor(m),y=Math.min(u-1,d+1),S=Math.min(h-1,b+1),I=x-d,w=m-b,P=i.height;return P[b*u+d]*(1-I)*(1-w)+P[b*u+y]*I*(1-w)+P[S*u+d]*(1-I)*w+P[S*u+y]*I*w};for(let p=0;p<l.count;p++)l.setZ(p,f(c.getX(p),c.getY(p))*t);return o.computeVertexNormals(),o}class wv extends en{constructor(e,t){super(),this.a=e,this.b=t}getPoint(e,t=new L){const n=e*Math.PI*2;return t.set(this.a*Math.cos(n),this.b*Math.sin(n),0)}}function Il(i,e,t,n,r){const s=new wv(i-t,e-t),a=new ho(s,512,n/2,32,!0),o=new ft(a,r);return o.scale.z=Uc,o}const Pv=[[98,240],[276,193],[263,251],[256,260],[191,275],[188,251],[178,245],[166,250],[160,262],[144,315],[138,343],[162,345],[184,289],[254,273],[204,452],[152,406],[154,372],[53,396]],Rv=[[104,92],[156,92],[142,214],[120,214]],go=84,Cv=452,vo=131,Fc=360,zc=540,Iv="data:image/jpeg;base64,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";function Ll(i,e){const t=i.attributes.position,n=i.attributes.uv;for(let r=0;r<t.count;r++){const s=t.getX(r)/e+vo,a=-t.getY(r)/e+go;n.setXY(r,s/Fc,1-a/zc)}n.needsUpdate=!0}function Lv(){const n=document.createElement("canvas");n.width=n.height=256;const r=n.getContext("2d"),s=r.createImageData(256,256);for(let o=0;o<256;o++)for(let l=0;l<256;l++){const u=Math.floor(o/32)%2*32/2;let h=(l+u)%32/32-.5,f=o%32/32-.5;const p=Math.hypot(h,f);let g=0,x=0,m=1;if(p<.42){const y=Math.round(Math.atan2(f,h)/(Math.PI/4))*(Math.PI/4),S=p<.15?0:.55;g=Math.cos(y)*S,x=Math.sin(y)*S,m=1}else p<.5&&(g=h*1.5,x=f*1.5,m=.6);const d=Math.hypot(g,x,m),b=(o*256+l)*4;s.data[b]=(g/d*.5+.5)*255,s.data[b+1]=(-x/d*.5+.5)*255,s.data[b+2]=(m/d*.5+.5)*255,s.data[b+3]=255}r.putImageData(s,0,0);const a=new Wa(n);return a.colorSpace=rn,a.wrapS=a.wrapT=cs,a}function Dl(i,e){const t=new Mc;return i.forEach(([n,r],s)=>{const a=(n-vo)*e,o=-(r-go)*e;s===0?t.moveTo(a,o):t.lineTo(a,o)}),t.closePath(),t}function Dv(i){const e=Ya/(Cv-go),t=new jn,n=Lv();n.repeat.set(Fc/9,zc/9);const r=new lf().load(Iv);r.colorSpace=wt,r.anisotropy=8;const s=new bc({color:"#ffffff",map:r,emissive:"#ffffff",emissiveMap:r,emissiveIntensity:.28,metalness:.55,roughness:.22,normalMap:n,normalScale:new oe(.25,.25),clearcoat:.6,clearcoatRoughness:.05,envMapIntensity:Oc*1.2}),a=Ya*.06,o={depth:a,bevelEnabled:!0,bevelThickness:a*.35,bevelSize:a*.3,bevelSegments:4,curveSegments:4},l=new ps(Dl(Pv,e),o);l.translate(0,0,-a/2),Ll(l,e),t.add(new ft(l,s));const c=new ps(Dl(Rv,e),{...o,depth:a*1.6});c.translate(0,0,-a*.8),Ll(c,e),t.add(new ft(c,s));const u=new ft(new xs(10*e,2.2*e,12,24),i);return u.position.set((131-vo)*e,-132*e,0),u.rotation.y=Math.PI/2,t.add(u),t}function Nv(i){const e=new uc;e.background=new Ve("#05070c");const t=(s,a,o,l,c)=>{const u=new ft(new zi(o,l),new vs({color:new Ve(s).multiplyScalar(a),side:nn}));u.position.set(...c),u.lookAt(0,0,0),e.add(u)};t("#ffffff",2.2,6,1.2,[0,6,2]),t("#ffffff",.8,2.5,6,[-6,.5,3]),t(Cl,2.5,3,7,[6,0,2]),t(gv,2,7,1.5,[0,-5,3]),t(Cl,1.6,4,4,[-4,1,-5]),t("#ffffff",.6,4,2,[3,2,-6]),t("#cfd6e6",.55,10,6,[0,0,9]),t("#cfd6e6",.55,10,6,[0,0,-9]);const n=new Ja(i),r=n.fromScene(e,.02).texture;return n.dispose(),r}function Uv(i,{onProgress:e,onLoaded:t}={}){const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=new Zg({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),r.setSize(i.clientWidth,i.clientHeight),r.outputColorSpace=wt,r.toneMapping=Ka,r.toneMappingExposure=0,i.appendChild(r.domElement);const s=r.domElement;s.style.touchAction="pan-y",s.style.cursor="grab";const a=new uc;a.environment=Nv(r);const o=new Nt(35,i.clientWidth/i.clientHeight,.1,100);o.position.set(0,.35,8),o.lookAt(0,0,0);const l=new hf("#dfe8ff",vv,30,Math.PI/5,.8,1.5);l.position.set(0,7,5),a.add(l,l.target),a.add(new ff("#ffffff",.08));const c=new nv(r);c.addPass(new iv(a,o));const u=new Di(new oe(i.clientWidth,i.clientHeight),0,.7,.82);c.addPass(u),c.addPass(new sv);const h=(()=>{const Q=document.createElement("canvas");Q.width=Q.height=256;const ye=Q.getContext("2d"),ze=ye.createRadialGradient(128,128,0,128,128,128);return ze.addColorStop(0,"rgba(255,255,255,0.55)"),ze.addColorStop(.5,"rgba(255,255,255,0.15)"),ze.addColorStop(1,"rgba(255,255,255,0)"),ye.fillStyle=ze,ye.fillRect(0,0,256,256),new Wa(Q)})(),f=new gh(new hc({map:h,color:_v,transparent:!0,opacity:0,depthWrite:!1,blending:ls}));f.scale.set(9,7,1),f.position.z=-1.5,a.add(f);const p=new jn;a.add(p);const g=new jn;p.add(g);const x=4,m=new bc({color:pv,metalness:1,roughness:mv,clearcoat:.3,clearcoatRoughness:.1,envMapIntensity:Oc,alphaTest:.5});let d=!1,b=null,y={w:x,h:x/1.6};const S=new Image;S.onload=()=>{e?.(.5),setTimeout(()=>{const Q=Tv(S),ye=new Wa(Q.maskCanvas);ye.colorSpace=rn,ye.anisotropy=r.capabilities.getMaxAnisotropy(),m.alphaMap=ye,m.needsUpdate=!0;const ze=av*x/4,T=bv(Q,x,ze),K=new ft(T,m),Y=new ft(T,m);Y.scale.z=-1,g.add(K,Y);const J=x/2,j=x/Q.aspect/2,ce=wl*x,re=fv*x,de=dv*x,De=m.clone();De.alphaMap=null,De.alphaTest=0,g.add(Il(J,j,ce/2,ce,De),Il(J,j,ce+de+re/2,re,De));let Ue=-j;if(Q.anchorO){const A=(.5-Q.anchorO.v)*j*2;Ue=Math.min(Ue,A-Pl*.9-Ya)}y={w:x,h:j-Ue},g.position.y=-(j+Ue)/2,p.updateMatrixWorld(!0),Q.anchorO&&(b=I({data:Q,depth:ze,halfW:J,halfH:j,ringInner:ce+de+re,ringMaterial:De,pendantMaterial:m})),$(),d=!0,e?.(1),t?.(),ve=performance.now()},30)},S.onerror=()=>console.warn(`[logo3d] No se encontró ${bl}. Pon tu logo en public/img/logo.png`),S.src=bl;function I({data:Q,depth:ye,halfW:ze,halfH:T,ringInner:K,ringMaterial:Y,pendantMaterial:J}){const j=T*2,ce=(Q.anchorO.u-.5)*x,re=(.5-Q.anchorO.v)*j,de=(.5-Q.anchorO.vHole)*j,De=Rl*.22,Ue=(re+de)/2,A=(de-re)/2+De*1.2,v=ye+De*1.4,F=-.85,G=Math.PI+.85,ne=18,W=[];for(let D=0;D<=ne;D++){const ie=G+(F-G)*(D/ne);W.push(new L(ce,Ue+A*Math.sin(ie),v*Math.cos(ie)))}const Ce=W[0],fe=W[ne],Ie=new L(ce,(fe.y+Ce.y)/2,0),Pe=Pl*.92,se=x*wl*.5*Uc+De*2.2;let me=0,Ne=0,we=0,xe=0;const ke=.12+.25*Math.min(1,na),N=.08+.12*Math.min(1,na);let ue=0,pe=0,Ae=0;function ae(D,ie,ge){const Ee=(ie-ue)/D,Se=(ge-pe)/D;ue=ie,pe=ge,Ae+=D;const Te=na,Oe=-.14*Te*ie+Math.sin(Ae*1.3)*.08*Te,Le=-.1*Te*ge+Math.sin(Ae*.9+1)*.025*Te,Ge=2.6,Ye=.3*Te;Ne+=(-14*(me-Oe)-Ge*Ne-Ye*Ee)*D,xe+=(-14*(we-Le)-Ge*xe-Ye*Se)*D,me+=Ne*D,we+=xe*D,Math.abs(me)>ke&&(me=Math.sign(me)*ke,Ne*=-.3),Math.abs(we)>N&&(we=Math.sign(we)*N,xe*=-.3)}const ee=Rl,Re=ee*.95,He=ee*.22,et=ee-He*2.5,Ke=new xs(1,He/(Re/2),14,30),Ot=Y.clone();Ot.color=new Ve("#E6E9EE");const Tt=160,Mn=new _h(Ke,Ot,Tt);Mn.frustumCulled=!1,g.add(Mn);const Wt=Dv(J);g.add(Wt);const Ft=26,un=[];for(let D=0;D<Ft*2+ne+2;D++)un.push(new L);const Qn=new it,Cn=new it,ki=new it,Xt=new L,jt=new L,Gi=new L,yr=new L,Kn=new L,Vi=new L,Er=new L,Wi=new L,In=new gc,_=new $t,O=new Oi;function B(D,ie,ge,Ee){Er.set(D.x,D.y-Pe*.3,ie*Math.max(se,Math.abs(D.z))),Wi.copy(Kn).addScaledVector(Vi,-Pe*.35),Wi.z+=ie*se*.6,In.v0.copy(D),In.v1.copy(Er),In.v2.copy(Wi),In.v3.copy(Kn);for(let Se=0;Se<Ft;Se++){const Te=Ee?1-Se/(Ft-1):Se/(Ft-1);In.getPoint(Te,ge[Se])}}function H(){_.set(we,0,me),O.setFromEuler(_),Vi.set(0,-1,0).applyQuaternion(O),Kn.copy(Ie).addScaledVector(Vi,Pe);let D=0;const ie=un.slice(0,Ft);B(Ce,-1,ie,!0),D+=Ft;for(let Te=1;Te<ne;Te++)un[D++].copy(W[Te]);const ge=un.slice(D,D+Ft);B(fe,1,ge,!1),D+=Ft;let Ee=0,Se=et*.5;for(let Te=0;Te<D-1&&Ee<Tt;Te++){const Oe=un[Te],Le=un[Te+1];jt.subVectors(Le,Oe);const Ge=jt.length();if(Ge<1e-6)continue;jt.divideScalar(Ge),Xt.set(1,0,0).addScaledVector(jt,-jt.x),Xt.lengthSq()<1e-6&&Xt.set(0,0,1),Xt.normalize(),Gi.crossVectors(Xt,jt);let Ye=Se;for(;Ye<=Ge&&Ee<Tt;)yr.copy(Oe).addScaledVector(jt,Ye),Qn.makeBasis(Xt,jt,Gi),Cn.makeRotationY(Ee%2?.38:-.38),ki.makeScale(Re/2,ee/2,Re/2*.45),Qn.multiply(Cn).multiply(ki).setPosition(yr),Mn.setMatrixAt(Ee++,Qn),Ye+=et;Se=Ye-Ge}Mn.count=Ee,Mn.instanceMatrix.needsUpdate=!0,Wt.position.copy(Kn),_.set(we,me*.8,me),Wt.quaternion.setFromEuler(_)}return H(),{step:ae,render:H}}const w=(n?.4:yv)*(2*Math.PI/60),P=2.2;let U=0,E=w,M=0,C=!1,z=0,X=0,te=0,V=!1;s.addEventListener("pointerdown",Q=>{C=!0,z=Q.clientX,X=Q.clientY,te=performance.now(),s.setPointerCapture(Q.pointerId),s.style.cursor="grabbing"}),s.addEventListener("pointermove",Q=>{if(!C)return;const ye=performance.now(),ze=Math.max(1,ye-te)/1e3,T=Q.clientX-z,K=Q.clientY-X;U+=ti.clamp(T*.009,-.25,.25),E=ti.clamp(E*.5+T*.009/ze*.5,-P,P),M=ti.clamp(M+K*.004,-.35,.35),z=Q.clientX,X=Q.clientY,te=ye});const q=()=>{C=!1,s.style.cursor="grab"};s.addEventListener("pointerup",q),s.addEventListener("pointercancel",q);function $(){const Q=i.clientWidth,ye=i.clientHeight;o.aspect=Q/ye;const ze=ti.degToRad(o.fov),T=y.h*1.38/(2*Math.tan(ze/2)),K=y.w*1.35/(2*Math.tan(ze/2)*o.aspect),Y=Math.max(T,K);o.position.set(0,Y*.045,Y),o.lookAt(0,0,0),o.updateProjectionMatrix()}function k(){const Q=i.clientWidth,ye=i.clientHeight;r.setSize(Q,ye),c.setSize(Q,ye),u.resolution.set(Q,ye),$()}window.addEventListener("resize",k);let he=!0;const _e=new IntersectionObserver(([Q])=>{he=Q.isIntersecting});_e.observe(i);let ve=0;const Be=n?300:1800;let je;const Ze=new Rc,We=1/120;let Z=0,R=w,le=0;function be(){je=requestAnimationFrame(be);const Q=Math.min(Ze.getDelta(),.05);if(!he)return;if(d){const K=Math.min(1,(performance.now()-ve)/Be),Y=1-Math.pow(1-K,3);r.toneMappingExposure=xv*Y,u.strength=Sv*Y,f.material.opacity=Mv*Y}C||(V?E*=Math.max(0,1-Q*3):E+=(w-E)*Math.min(1,Q*1.2),M*=Math.max(0,1-Q*1.5));const ye=p.rotation.y,ze=C?U:U+=E*Q,T=p.rotation.x;if(p.rotation.set(M,ze,0),p.updateMatrixWorld(!0),b){const K=ti.clamp(Q>0?(ze-ye)/Q:0,-P*1.5,P*1.5),Y=ti.clamp(Q>0?(M-T)/Q:0,-3,3);R+=(K-R)*Math.min(1,Q*12),le+=(Y-le)*Math.min(1,Q*12);const J=R,j=le;Z+=Q;let ce=0;for(;Z>=We&&ce<8;)b.step(We,J,j),Z-=We,ce++;ce===8&&(Z=0),b.render()}c.render()}return be(),{camera:o,logo:g,spin:p,setRotation(Q,ye=!0){U=Q,V=ye,E=ye?0:E},dispose(){cancelAnimationFrame(je),_e.disconnect(),window.removeEventListener("resize",k),r.dispose(),s.remove()}}}const Ei=30;let Pt=null,Ni=null,Bn=null,vn=null;const Nl=new WeakMap;let Bc=0,xo=0,cr=Ei*1e3,_o=0,es=null;const Ul={spotify:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#1ED760"/><path d="M6.4 9.2c3.7-1.1 8.3-.6 11.5 1.3M7.2 12.2c3.1-.9 6.9-.4 9.6 1.1M8 15c2.5-.7 5.5-.3 7.7.9" fill="none" stroke="#050505" stroke-width="1.5" stroke-linecap="round"/></svg>',youtube:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0033"/><path d="m10 8.5 6 3.5-6 3.5z" fill="#fff"/></svg>'};function Ov(i){const e=i.spotify&&!i.spotify.includes("PEGA AQUÍ")?i.spotify:"",t=i.youtube&&!i.youtube.includes("PEGA AQUÍ")?i.youtube:"",n=[e&&`<a class="chrome-button track-card__platform-link" href="${e}" target="_blank" rel="noopener noreferrer">${Ul.spotify}<span>Escuchar en Spotify</span><span aria-hidden="true">↗</span></a>`,t&&`<a class="chrome-button track-card__platform-link" href="${t}" target="_blank" rel="noopener noreferrer">${Ul.youtube}<span>Ver en YouTube</span><span aria-hidden="true">↗</span></a>`].filter(Boolean).join("");return`
    <div class="track-card__overlay" aria-hidden="true" inert>
      <div class="track-card__link-panel" role="dialog" aria-modal="true" aria-label="Enlaces para ${i.titulo}" tabindex="-1">
        <button class="track-card__close" type="button" aria-label="Cerrar enlaces">×</button>
        <div class="track-card__platform-links">${n}</div>
      </div>
    </div>
  `}function Fv(i){const e=i.querySelector(".track-card__artwork-trigger"),t=i.querySelector(".track-card__overlay"),n=i.querySelector(".track-card__link-panel"),r=i.querySelector(".track-card__close"),s=()=>{t.classList.contains("is-open")&&(t.classList.remove("is-open"),t.setAttribute("aria-hidden","true"),t.inert=!0,e.setAttribute("aria-expanded","false"),document.removeEventListener("keydown",a),es?.overlay===t&&(es=null),e.focus({preventScroll:!0}))},a=o=>{if(o.key==="Escape"){o.preventDefault(),s();return}if(o.key!=="Tab")return;const l=[...n.querySelectorAll("button:not([disabled]), a[href]")];if(!l.length){o.preventDefault(),n.focus();return}const c=l[0],u=l[l.length-1];o.shiftKey&&document.activeElement===c?(o.preventDefault(),u.focus()):!o.shiftKey&&document.activeElement===u&&(o.preventDefault(),c.focus())};e.addEventListener("click",()=>{es?.close(),t.inert=!1,t.setAttribute("aria-hidden","false"),t.classList.add("is-open"),e.setAttribute("aria-expanded","true"),document.addEventListener("keydown",a),es={overlay:t,close:s},r.focus()}),r.addEventListener("click",s),t.addEventListener("click",o=>{o.target===t&&s()})}function zv(i){if(!Number.isFinite(i))return"0:00";const e=Math.floor(i);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Hc(){if(!Ni)return;const i=Ni.querySelector(".player__visualizer");if(!i)return;const e=i.getContext("2d"),t=i.width,n=i.height;e.clearRect(0,0,t,n);const r=28,s=new Uint8Array(vn?vn.frequencyBinCount:r);vn&&Pt&&!Pt.paused&&vn.getByteFrequencyData(s);for(let a=0;a<r;a+=1){const o=vn?s[Math.floor(a*s.length/r)]/255:0,l=Pt&&!Pt.paused?.12+Math.abs(Math.sin(performance.now()/210+a*.7))*.18:.06,c=Math.max(3,(o*.72+l)*n),u=3,h=(t-(r-1)*u)/r;e.fillStyle="rgba(30, 107, 255, 0.9)",e.fillRect(a*(h+u),(n-c)/2,h,c)}Bc=window.requestAnimationFrame(Hc)}function Za(i){if(!i)return;const e=i.querySelector(".player__toggle");e?.classList.remove("is-playing"),e?.setAttribute("aria-label","Reproducir preview");const t=i.querySelector(".player__progress");t&&(t.value="0");const n=i.querySelector(".player__current");n&&(n.textContent="0:00")}function rr(){window.clearTimeout(xo),window.cancelAnimationFrame(Bc),Pt&&(Pt.pause(),Pt.currentTime=0),Za(Ni),Pt=null,Ni=null,cr=Ei*1e3,_o=0}async function Bv(i){if(!(i instanceof HTMLAudioElement))throw new TypeError("El visualizador solo se puede conectar a los reproductores de canciones.");const e=window.AudioContext||window.webkitAudioContext;if(e){if(Bn||(Bn=new e,vn=Bn.createAnalyser(),vn.fftSize=128),!Nl.has(i)){const t=Bn.createMediaElementSource(i);t.connect(vn),vn.connect(Bn.destination),Nl.set(i,t)}Bn.state==="suspended"&&await Bn.resume()}}function Hv(){_o=performance.now(),xo=window.setTimeout(()=>rr(),cr)}function kc(i,e){const t=i.querySelector(".player__toggle"),n=new Audio;n.preload="none",n.src=e.audio;const r=i.querySelector(".player__progress"),s=i.querySelector(".player__current"),a=i.querySelector(".player__status");t.addEventListener("click",async()=>{if(Pt===n){if(!n.paused){n.pause(),window.clearTimeout(xo),cr=Math.max(0,cr-(performance.now()-_o)),Za(i);return}}else rr(),Pt=n,Ni=i,cr=Ei*1e3;a.textContent="";try{await Bv(n),await n.play(),t.classList.add("is-playing"),t.setAttribute("aria-label","Pausar preview"),Hv(),Hc()}catch(o){a.textContent="No se pudo reproducir el audio. Comprueba que el archivo esté disponible.",Za(i),Pt=null,Ni=null,console.error("Error al reproducir el preview de audio.",o)}}),n.addEventListener("timeupdate",()=>{s.textContent=zv(n.currentTime),r.value=String(Math.min(n.currentTime,Ei)),n.currentTime>=Ei&&Pt===n&&rr()}),n.addEventListener("ended",()=>rr()),n.addEventListener("error",()=>{Pt===n&&(a.textContent="No se pudo cargar este audio. Añade el archivo indicado en src/config.js.",rr())}),r.addEventListener("input",()=>{Pt===n&&Number.isFinite(n.duration)&&(n.currentTime=Math.min(Number(r.value),Ei,n.duration))})}function Gc(i,e){return`
    <canvas class="player__visualizer" width="360" height="42" aria-hidden="true"></canvas>
    <div class="player">
      <button class="player__toggle" type="button" aria-label="Reproducir preview" data-audio="${e}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.8v12.4L18 12 8 5.8Z" fill="currentColor"/></svg>
      </button>
      <div class="player__timeline">
        <div class="player__times"><span class="player__current">0:00</span><span>0:30</span></div>
        <input class="player__progress" type="range" min="0" max="30" value="0" aria-label="Progreso de ${i}" />
      </div>
    </div>
    <p class="player__status" aria-live="polite"></p>
  `}function kv(i,e){i.innerHTML=`
    <div class="release-preview">
      <picture class="release-preview__artwork">
        <source srcset="${e.bannerWebp}" type="image/webp" />
        <img src="${e.banner}" alt="Portada del lanzamiento ${e.titulo} de ${e.artistas}" loading="lazy" decoding="async" />
      </picture>
      <div class="release-preview__shade" aria-hidden="true"></div>
      <div class="release-preview__player">${Gc(e.titulo,e.audio)}</div>
    </div>
  `,kc(i.querySelector(".release-preview"),e)}function Gv(i,e){i.innerHTML=e.map((t,n)=>`
    <article class="track-card reveal" data-track-index="${n}">
      <div class="track-card__artwork">
        <img src="${t.portada}" alt="" loading="lazy" decoding="async" />
        <span class="track-card__index" aria-hidden="true">0${n+1}</span>
        <button class="track-card__artwork-trigger" type="button" aria-label="Ver enlaces de ${t.titulo}" aria-haspopup="dialog" aria-expanded="false">
          <svg class="track-card__link-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6m-.5-5.5-8 8M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        ${Ov(t)}
      </div>
      <div class="track-card__body">
        <div class="track-card__heading">
          <h3 class="chrome-text">${t.titulo}</h3>
          ${t.anio?`<span class="track-card__year">${t.anio}</span>`:""}
        </div>
        <p class="track-card__artists">${t.artistas}</p>
        ${Gc(t.titulo,t.audio)}
      </div>
    </article>
  `).join(""),i.querySelectorAll(".track-card").forEach((t,n)=>{Fv(t),kc(t,e[n])})}const Vv='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',Wv='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';function Xv(i,e){const t=new Set([(e-1+i.length)%i.length,(e+1)%i.length]);t.delete(e),t.forEach(n=>{const r=i[n];if(r.type!=="image")return;const s=new Image;s.src=r.src})}function jv(i,e){i.innerHTML=`
    <div class="portrait-frame">
      <div class="portrait-frame__viewport" role="region" aria-label="Galería de fotos y vídeo de Glow" tabindex="0">
        <div class="portrait-frame__media-wrap"></div>
        <button class="gallery-arrow gallery-arrow--previous" type="button" aria-label="Foto anterior">${Vv}</button>
        <button class="gallery-arrow gallery-arrow--next" type="button" aria-label="Foto siguiente">${Wv}</button>
      </div>
    </div>
    <div class="gallery-dots" role="group" aria-label="Elegir foto"></div>
  `;const t=i.querySelector(".portrait-frame__viewport"),n=i.querySelector(".portrait-frame__media-wrap"),r=i.querySelector(".gallery-dots"),s=i.querySelector(".gallery-arrow--previous"),a=i.querySelector(".gallery-arrow--next");let o=0,l=null,c=null;r.innerHTML=e.map((g,x)=>`
    <button class="gallery-dot" type="button" aria-label="Ir a la foto ${x+1}: ${g.alt}" aria-current="false"></button>
  `).join("");const u=[...r.querySelectorAll(".gallery-dot")];function h(){l&&(l.pause(),l.removeAttribute("src"),l.load(),l=null)}function f(g){if(!e.length)return;const x=(g+e.length)%e.length;h(),o=x;const m=e[o],d=m.type==="video"?document.createElement("video"):document.createElement("img");if(d.className=`portrait-frame__media${m.type==="video"?" portrait-frame__video":""}`,d.alt=m.alt,d.setAttribute("aria-label",m.alt),m.type==="video"){const b=document.createElement("p");b.className="gallery-status",b.setAttribute("aria-live","polite"),b.hidden=!0,d.autoplay=!0,d.defaultMuted=!0,d.muted=!0,d.loop=!0,d.playsInline=!0,d.preload="none",d.poster=m.poster,d.addEventListener("error",()=>{b.textContent="No se pudo cargar el vídeo.",b.hidden=!1}),d.addEventListener("playing",()=>{b.hidden=!0}),l=d,n.replaceChildren(d,b),d.src=m.src,d.play().catch(y=>{y.name!=="AbortError"&&(b.textContent="No se pudo reproducir el vídeo.",b.hidden=!1)})}else if(d.loading="lazy",d.decoding="async",d.src=m.src,m.fallback){const b=document.createElement("picture"),y=document.createElement("source");y.srcset=m.src,y.type="image/webp",b.append(y,d),n.replaceChildren(b)}else n.replaceChildren(d);u.forEach((b,y)=>{b.setAttribute("aria-current",String(y===o))}),requestAnimationFrame(()=>d.classList.add("is-visible")),Xv(e,o)}s.addEventListener("click",()=>f(o-1)),a.addEventListener("click",()=>f(o+1)),u.forEach((g,x)=>{g.addEventListener("click",()=>f(x))}),t.addEventListener("keydown",g=>{(g.key==="ArrowLeft"||g.key==="ArrowRight")&&(g.preventDefault(),f(o+(g.key==="ArrowRight"?1:-1)))}),t.addEventListener("pointerdown",g=>{g.target.closest("button")||(c={x:g.clientX,y:g.clientY,currentX:g.clientX,currentY:g.clientY,id:g.pointerId},t.setPointerCapture(g.pointerId))}),t.addEventListener("pointermove",g=>{!c||c.id!==g.pointerId||(c.currentX=g.clientX,c.currentY=g.clientY)});const p=g=>{if(!c||c.id!==g.pointerId)return;const x=(g.type==="pointerup"?g.clientX:c.currentX)-c.x,m=(g.type==="pointerup"?g.clientY:c.currentY)-c.y;Math.abs(x)>15&&Math.abs(x)>Math.abs(m)&&f(o+(x<0?1:-1)),c=null};t.addEventListener("pointerup",p),t.addEventListener("pointercancel",p),f(0)}const Jv={spotify:'<circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M7.2 10.1c3.4-1 7.2-.6 10 1" fill="none" stroke="#050505" stroke-width="1.4" stroke-linecap="round"/><path d="M7.8 12.6c2.9-.7 5.9-.3 8.2.9M8.5 15c2.1-.4 4.2-.1 5.9.8" fill="none" stroke="#050505" stroke-width="1.2" stroke-linecap="round"/>',appleMusic:'<path d="M16.2 4.1v11.4a2.5 2.5 0 1 1-1.5-2.3V7.1l-5.4 1.3v8.5a2.5 2.5 0 1 1-1.5-2.3V6.3l8.4-2.2Z" fill="currentColor"/>',instagram:'<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3.7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.8" r="1" fill="currentColor"/>',tiktok:'<path d="M14 4v10.1a3.3 3.3 0 1 1-2.7-3.3v2.8a.8.8 0 1 0 .8.8V4h2.7c.3 2 1.4 3.2 3.3 3.5v2.7A7 7 0 0 1 14 8.5" fill="currentColor"/>',youtube:'<path d="M21 8.1a2.5 2.5 0 0 0-1.8-1.8C17.6 5.9 12 5.9 12 5.9s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 8.1 26 26 0 0 0 2.6 12a26 26 0 0 0 .4 3.9 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.2.4 7.2.4s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-3.9 26 26 0 0 0-.4-3.9ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" fill="currentColor"/>'},ts={spotify:"Spotify",appleMusic:"Apple Music",instagram:"Instagram",tiktok:"TikTok",youtube:"YouTube"};function Ol(i,e=""){return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true">${Jv[i]}</svg>`}function qv(){const i=document.querySelector("#social-grid"),e=document.querySelector("#footer-social"),t=Object.keys(ts);i.innerHTML=t.map(n=>`
    <a class="social-card reveal" href="${Jn.redes[n]}" target="_blank" rel="noopener noreferrer" aria-label="Visitar ${ts[n]} de Glow">
      ${Ol(n)}
      <span>${ts[n]}</span>
      <span class="social-card__arrow" aria-hidden="true">↗</span>
    </a>
  `).join(""),e.innerHTML=t.map(n=>`
    <a href="${Jn.redes[n]}" target="_blank" rel="noopener noreferrer" aria-label="${ts[n]} de Glow">${Ol(n)}</a>
  `).join("")}function Yv(){jv(document.querySelector("#artist-gallery"),Wc),document.querySelector("#artist-bio").innerHTML=Jn.bio.map((i,e)=>`
    <p class="${e===0?"about__lead":"about__detail"}">${i}</p>
  `).join(""),document.querySelector("#artist-facts").innerHTML=Jn.facts.map(i=>`
    <div class="fact-card"><strong>${i.value}</strong><span>${i.label}</span></div>
  `).join("")}function Zv(){const i=Xc;document.querySelector("#release-banner-webp").srcset=i.bannerWebp;const e=document.querySelector("#release-banner-image");e.src=i.banner,e.alt=`Banner del lanzamiento ${i.titulo} de ${i.artistas}`,document.querySelector("#release-title").textContent=i.titulo,document.querySelector("#release-artists").textContent=i.artistas;const t=document.querySelector("#release-date");t.textContent=i.fecha,t.dateTime="2026-09-18",document.querySelector("#release-spotify").href=i.spotify,document.querySelector("#release-youtube").href=i.youtube;const n=document.querySelector("#release-preview");kv(n,i)}function Qv(){const i=document.querySelector("#site-header"),e=document.querySelector("#menu-toggle"),t=document.querySelector("#site-nav"),n=()=>i.classList.toggle("is-scrolled",window.scrollY>28);window.addEventListener("scroll",n,{passive:!0}),n();const r=()=>{t.classList.remove("is-open"),e.classList.remove("is-open"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Abrir menú"),document.body.classList.remove("menu-open")};e.addEventListener("click",()=>{const s=e.getAttribute("aria-expanded")!=="true";e.setAttribute("aria-expanded",String(s)),e.setAttribute("aria-label",s?"Cerrar menú":"Abrir menú"),e.classList.toggle("is-open",s),t.classList.toggle("is-open",s),document.body.classList.toggle("menu-open",s)}),t.querySelectorAll("a").forEach(s=>s.addEventListener("click",r)),window.addEventListener("resize",()=>{window.innerWidth>760&&r()})}function Kv(){const i=document.querySelectorAll(".reveal");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){i.forEach(t=>t.classList.add("is-visible"));return}const e=new IntersectionObserver((t,n)=>{t.forEach(r=>{r.isIntersecting&&(r.target.classList.add("is-visible"),n.unobserve(r.target))})},{threshold:.12});i.forEach(t=>e.observe(t))}function $v(){const i=document.querySelector("#loader"),e=document.querySelector("#loader-progress"),t=document.querySelector("#loader-caption");let n=!1;const r=window.setTimeout(()=>s(new Error("La escena 3D tardó demasiado en iniciar.")),9e3);function s(o){n||(n=!0,window.clearTimeout(r),e.style.width="100%",o&&(t.textContent="La experiencia continúa en modo ligero",console.error("No se pudo iniciar la escena 3D.",o)),window.setTimeout(()=>{i.classList.add("is-hidden"),window.setTimeout(()=>i.remove(),900)},240))}const a=document.querySelector("#logo-canvas-wrap");try{Uv(a,{onProgress:o=>{const l=Math.min(Math.max(o,0),1);e.style.width=`${l*100}%`},onLoaded:()=>s()})}catch(o){s(o)}}Yv();Gv(document.querySelector("#music-grid"),jc);Zv();qv();const Vc=document.querySelector("#contact-link");Vc.href=`mailto:${Jn.email}`;Vc.innerHTML='<span>Escríbeme por correo</span><span aria-hidden="true">↗</span>';Qv();Kv();$v();
