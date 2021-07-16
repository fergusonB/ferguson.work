import{S as a,i as r,s,e as t,k as e,j as o,I as c,c as i,d as l,n as h,m as n,b as f,D as d,f as u,o as v,v as E,r as p,w as m,t as g,a as T,g as b,E as y}from"../../chunks/vendor-66e0e850.js";import{R as L}from"../../chunks/rear-white-panel-e24a3396.js";function x(a){let r,s,o,c,n,v,E,p,m,L,x,w,H,k,P,R,A,C,S,$,B,U,O,_,j,F,N,M,q,G,K,V,W,Y,J,z,Q,X,Z,aa,ra,sa,ta,ea,oa,ca,ia,la,ha,na,fa,da,ua,va,Ea,pa,ma,ga,Ta,ba,ya,La,xa,wa,Ia,Ha,Da,ka,Pa,Ra,Aa,Ca,Sa,$a,Ba,Ua,Oa,_a,ja,Fa,Na,Ma,qa,Ga,Ka,Va,Wa,Ya,Ja,za,Qa,Xa,Za,ar,rr,sr,tr,er,or,cr,ir,lr,hr,nr,fr,dr,ur,vr,Er,pr,mr,gr,Tr,br,yr,Lr,xr,wr,Ir,Hr,Dr,kr,Pr,Rr,Ar,Cr,Sr,$r,Br,Ur,Or,_r,jr,Fr,Nr,Mr,qr,Gr,Kr,Vr,Wr,Yr,Jr,zr,Qr,Xr,Zr,as,rs,ss,ts,es,os,cs,is,ls,hs,ns,fs,ds,us,vs,Es,ps,ms,gs,Ts,bs,ys,Ls,xs,ws,Is,Hs,Ds,ks,Ps,Rs,As,Cs,Ss,$s,Bs,Us,Os,_s,js,Fs,Ns,Ms,qs,Gs,Ks,Vs,Ws,Ys,Js,zs,Qs,Xs,Zs,at,rt,st,tt,et,ot,ct,it,lt,ht,nt,ft,dt,ut,vt,Et,pt,mt,gt,Tt,bt,yt,Lt,xt,wt,It,Ht,Dt,kt,Pt;return{c(){r=t("article"),s=t("h1"),o=g(I),c=e(),n=t("p"),v=g(D),E=e(),p=t("h2"),m=g("Table of Contents"),L=e(),x=t("ol"),w=t("li"),H=t("a"),k=g("Basic Security"),P=e(),R=t("li"),A=t("a"),C=g("Useful Commands"),S=e(),$=t("li"),B=t("a"),U=g("Tools I Like"),O=e(),_=t("h2"),j=g("Basic Security"),F=e(),N=t("h3"),M=g("Automatic Updates"),q=e(),G=t("ul"),K=t("li"),V=g("apt install unattended-upgrades"),W=e(),Y=t("li"),J=g("dpkg-reconfigure --priority=low unattended-upgrades"),z=e(),Q=t("h3"),X=g("Non-root user"),Z=e(),aa=t("ul"),ra=t("li"),sa=g("adduser [user]"),ta=e(),ea=t("li"),oa=g("usermod -aG sudo [user]"),ca=e(),ia=t("h3"),la=g("Keys"),ha=e(),na=t("ul"),fa=t("li"),da=g("mkdir ~/.ssh"),ua=e(),va=t("li"),Ea=g("chmod 700 ~/.ssh"),pa=e(),ma=t("li"),ga=g("ssh-keygen -b [4096]"),Ta=e(),ba=t("li"),ya=g("ssh-copy-id [user]@[ip]"),La=e(),xa=t("h3"),wa=g("Harden SSH"),Ia=e(),Ha=t("ul"),Da=t("li"),ka=g("sudo nano /etc/ssh/sshd_config"),Pa=e(),Ra=t("li"),Aa=g("Port [22]"),Ca=e(),Sa=t("li"),$a=g("AddressFamily [inet]"),Ba=e(),Ua=t("li"),Oa=g("PermitRootLogin [no]"),_a=e(),ja=t("li"),Fa=g("PasswordAuthentication [no]"),Na=e(),Ma=t("h3"),qa=g("Firewall"),Ga=e(),Ka=t("ul"),Va=t("li"),Wa=g("sudo apt install ufw"),Ya=e(),Ja=t("li"),za=g("sudo ufw allow [port]"),Qa=e(),Xa=t("li"),Za=g("sudo ufw enable"),ar=e(),rr=t("li"),sr=g("sudo ufw status"),tr=e(),er=t("li"),or=g("netstat -rn show networks accessible via the vpn"),cr=e(),ir=t("li"),lr=g("sudo nano /etc/ufw/before.rules"),hr=e(),nr=t("li"),fr=g("-A ufw-before-input -p icmp --icmp-type echo-request -j DROP"),dr=e(),ur=t("li"),vr=g("reboot"),Er=e(),pr=t("h2"),mr=g("Useful Commands"),gr=e(),Tr=t("h3"),br=g("Service Scanning"),yr=e(),Lr=t("table"),xr=t("thead"),wr=t("tr"),Ir=t("th"),Hr=g("Command"),Dr=e(),kr=t("th"),Pr=g("Description"),Rr=e(),Ar=t("tbody"),Cr=t("tr"),Sr=t("td"),$r=g("nmap [ip]"),Br=e(),Ur=t("td"),Or=g("run nmap"),_r=e(),jr=t("tr"),Fr=t("td"),Nr=g("netcat [ip] [port]"),Mr=e(),qr=t("td"),Gr=g("get banner of open port"),Kr=e(),Vr=t("tr"),Wr=t("td"),Yr=g("nmap -sV -sC -p- [ip]"),Jr=e(),zr=t("td"),Qr=g("run full port, service, version scan"),Xr=e(),Zr=t("tr"),as=t("td"),rs=g("smbclient -N -L \\\\\\\\"),ss=t("ip"),ts=e(),es=t("td"),os=g("List SMB Shares"),cs=e(),is=t("h3"),ls=g("Web Enumeration (parrot)"),hs=e(),ns=t("table"),fs=t("thead"),ds=t("tr"),us=t("th"),vs=g("Command"),Es=e(),ps=t("th"),ms=g("Description"),gs=e(),Ts=t("tbody"),bs=t("tr"),ys=t("td"),Ls=g("gobuster dir -u [ip] -w [list]"),xs=e(),ws=t("td"),Is=g("directory scan"),Hs=e(),Ds=t("tr"),ks=t("td"),Ps=g("gobuster dns -d [address]-w [list]"),Rs=e(),As=t("td"),Cs=g("subdomain scan"),Ss=e(),$s=t("tr"),Bs=t("td"),Us=g("curl -IL [ip]"),Os=e(),_s=t("td"),js=g("get website banner"),Fs=e(),Ns=t("tr"),Ms=t("td"),qs=g("curl [ip]/robots.txt"),Gs=e(),Ks=t("td"),Vs=g("potentially get some directories"),Ws=e(),Ys=t("h2"),Js=g("Tools I Like"),zs=e(),Qs=t("h3"),Xs=t("a"),Zs=g("HTTPie"),at=e(),rt=t("p"),st=g("HTTPie is a command line HTTP client, a user-friendly cURL replacement."),tt=e(),et=t("p"),ot=e(),ct=t("h3"),it=t("a"),lt=g("Ripgrep"),ht=e(),nt=t("p"),ft=g("Ripgrep is a fast, efficient, and accurate grep alternative."),dt=e(),ut=t("p"),vt=e(),Et=t("h3"),pt=t("a"),mt=g("Bat"),gt=e(),Tt=t("p"),bt=g("Cat clone with syntax highlighting"),yt=e(),Lt=t("h3"),xt=t("a"),wt=g("Cheat.sh"),It=e(),Ht=t("p"),Dt=t("code"),kt=g("curl cht.sh"),Pt=g(" for cheatsheets to almost anything in your terminal."),this.h()},l(a){r=i(a,"ARTICLE",{class:!0});var t=T(r);s=i(t,"H1",{class:!0});var e=T(s);o=b(e,I),e.forEach(l),c=h(t),n=i(t,"P",{class:!0});var f=T(n);v=b(f,D),f.forEach(l),E=h(t),p=i(t,"H2",{class:!0});var d=T(p);m=b(d,"Table of Contents"),d.forEach(l),L=h(t),x=i(t,"OL",{class:!0});var u=T(x);w=i(u,"LI",{});var g=T(w);H=i(g,"A",{href:!0});var y=T(H);k=b(y,"Basic Security"),y.forEach(l),g.forEach(l),P=h(u),R=i(u,"LI",{});var Rt=T(R);A=i(Rt,"A",{href:!0});var At=T(A);C=b(At,"Useful Commands"),At.forEach(l),Rt.forEach(l),S=h(u),$=i(u,"LI",{});var Ct=T($);B=i(Ct,"A",{href:!0});var St=T(B);U=b(St,"Tools I Like"),St.forEach(l),Ct.forEach(l),u.forEach(l),O=h(t),_=i(t,"H2",{id:!0,class:!0});var $t=T(_);j=b($t,"Basic Security"),$t.forEach(l),F=h(t),N=i(t,"H3",{class:!0});var Bt=T(N);M=b(Bt,"Automatic Updates"),Bt.forEach(l),q=h(t),G=i(t,"UL",{class:!0});var Ut=T(G);K=i(Ut,"LI",{});var Ot=T(K);V=b(Ot,"apt install unattended-upgrades"),Ot.forEach(l),W=h(Ut),Y=i(Ut,"LI",{});var _t=T(Y);J=b(_t,"dpkg-reconfigure --priority=low unattended-upgrades"),_t.forEach(l),Ut.forEach(l),z=h(t),Q=i(t,"H3",{class:!0});var jt=T(Q);X=b(jt,"Non-root user"),jt.forEach(l),Z=h(t),aa=i(t,"UL",{class:!0});var Ft=T(aa);ra=i(Ft,"LI",{});var Nt=T(ra);sa=b(Nt,"adduser [user]"),Nt.forEach(l),ta=h(Ft),ea=i(Ft,"LI",{});var Mt=T(ea);oa=b(Mt,"usermod -aG sudo [user]"),Mt.forEach(l),Ft.forEach(l),ca=h(t),ia=i(t,"H3",{class:!0});var qt=T(ia);la=b(qt,"Keys"),qt.forEach(l),ha=h(t),na=i(t,"UL",{class:!0});var Gt=T(na);fa=i(Gt,"LI",{});var Kt=T(fa);da=b(Kt,"mkdir ~/.ssh"),Kt.forEach(l),ua=h(Gt),va=i(Gt,"LI",{});var Vt=T(va);Ea=b(Vt,"chmod 700 ~/.ssh"),Vt.forEach(l),pa=h(Gt),ma=i(Gt,"LI",{});var Wt=T(ma);ga=b(Wt,"ssh-keygen -b [4096]"),Wt.forEach(l),Ta=h(Gt),ba=i(Gt,"LI",{});var Yt=T(ba);ya=b(Yt,"ssh-copy-id [user]@[ip]"),Yt.forEach(l),Gt.forEach(l),La=h(t),xa=i(t,"H3",{class:!0});var Jt=T(xa);wa=b(Jt,"Harden SSH"),Jt.forEach(l),Ia=h(t),Ha=i(t,"UL",{class:!0});var zt=T(Ha);Da=i(zt,"LI",{});var Qt=T(Da);ka=b(Qt,"sudo nano /etc/ssh/sshd_config"),Qt.forEach(l),Pa=h(zt),Ra=i(zt,"LI",{});var Xt=T(Ra);Aa=b(Xt,"Port [22]"),Xt.forEach(l),Ca=h(zt),Sa=i(zt,"LI",{});var Zt=T(Sa);$a=b(Zt,"AddressFamily [inet]"),Zt.forEach(l),Ba=h(zt),Ua=i(zt,"LI",{});var ae=T(Ua);Oa=b(ae,"PermitRootLogin [no]"),ae.forEach(l),_a=h(zt),ja=i(zt,"LI",{});var re=T(ja);Fa=b(re,"PasswordAuthentication [no]"),re.forEach(l),zt.forEach(l),Na=h(t),Ma=i(t,"H3",{class:!0});var se=T(Ma);qa=b(se,"Firewall"),se.forEach(l),Ga=h(t),Ka=i(t,"UL",{class:!0});var te=T(Ka);Va=i(te,"LI",{});var ee=T(Va);Wa=b(ee,"sudo apt install ufw"),ee.forEach(l),Ya=h(te),Ja=i(te,"LI",{});var oe=T(Ja);za=b(oe,"sudo ufw allow [port]"),oe.forEach(l),Qa=h(te),Xa=i(te,"LI",{});var ce=T(Xa);Za=b(ce,"sudo ufw enable"),ce.forEach(l),ar=h(te),rr=i(te,"LI",{});var ie=T(rr);sr=b(ie,"sudo ufw status"),ie.forEach(l),tr=h(te),er=i(te,"LI",{});var le=T(er);or=b(le,"netstat -rn show networks accessible via the vpn"),le.forEach(l),cr=h(te),ir=i(te,"LI",{});var he=T(ir);lr=b(he,"sudo nano /etc/ufw/before.rules"),he.forEach(l),hr=h(te),nr=i(te,"LI",{});var ne=T(nr);fr=b(ne,"-A ufw-before-input -p icmp --icmp-type echo-request -j DROP"),ne.forEach(l),dr=h(te),ur=i(te,"LI",{});var fe=T(ur);vr=b(fe,"reboot"),fe.forEach(l),te.forEach(l),Er=h(t),pr=i(t,"H2",{id:!0,class:!0});var de=T(pr);mr=b(de,"Useful Commands"),de.forEach(l),gr=h(t),Tr=i(t,"H3",{class:!0});var ue=T(Tr);br=b(ue,"Service Scanning"),ue.forEach(l),yr=h(t),Lr=i(t,"TABLE",{class:!0});var ve=T(Lr);xr=i(ve,"THEAD",{});var Ee=T(xr);wr=i(Ee,"TR",{});var pe=T(wr);Ir=i(pe,"TH",{});var me=T(Ir);Hr=b(me,"Command"),me.forEach(l),Dr=h(pe),kr=i(pe,"TH",{});var ge=T(kr);Pr=b(ge,"Description"),ge.forEach(l),pe.forEach(l),Ee.forEach(l),Rr=h(ve),Ar=i(ve,"TBODY",{});var Te=T(Ar);Cr=i(Te,"TR",{});var be=T(Cr);Sr=i(be,"TD",{});var ye=T(Sr);$r=b(ye,"nmap [ip]"),ye.forEach(l),Br=h(be),Ur=i(be,"TD",{});var Le=T(Ur);Or=b(Le,"run nmap"),Le.forEach(l),be.forEach(l),_r=h(Te),jr=i(Te,"TR",{});var xe=T(jr);Fr=i(xe,"TD",{});var we=T(Fr);Nr=b(we,"netcat [ip] [port]"),we.forEach(l),Mr=h(xe),qr=i(xe,"TD",{});var Ie=T(qr);Gr=b(Ie,"get banner of open port"),Ie.forEach(l),xe.forEach(l),Kr=h(Te),Vr=i(Te,"TR",{});var He=T(Vr);Wr=i(He,"TD",{});var De=T(Wr);Yr=b(De,"nmap -sV -sC -p- [ip]"),De.forEach(l),Jr=h(He),zr=i(He,"TD",{});var ke=T(zr);Qr=b(ke,"run full port, service, version scan"),ke.forEach(l),He.forEach(l),Xr=h(Te),Zr=i(Te,"TR",{});var Pe=T(Zr);as=i(Pe,"TD",{});var Re=T(as);rs=b(Re,"smbclient -N -L \\\\\\\\"),ss=i(Re,"IP",{}),T(ss).forEach(l),Re.forEach(l),ts=h(Pe),es=i(Pe,"TD",{});var Ae=T(es);os=b(Ae,"List SMB Shares"),Ae.forEach(l),Pe.forEach(l),Te.forEach(l),ve.forEach(l),cs=h(t),is=i(t,"H3",{class:!0});var Ce=T(is);ls=b(Ce,"Web Enumeration (parrot)"),Ce.forEach(l),hs=h(t),ns=i(t,"TABLE",{class:!0});var Se=T(ns);fs=i(Se,"THEAD",{});var $e=T(fs);ds=i($e,"TR",{});var Be=T(ds);us=i(Be,"TH",{});var Ue=T(us);vs=b(Ue,"Command"),Ue.forEach(l),Es=h(Be),ps=i(Be,"TH",{});var Oe=T(ps);ms=b(Oe,"Description"),Oe.forEach(l),Be.forEach(l),$e.forEach(l),gs=h(Se),Ts=i(Se,"TBODY",{});var _e=T(Ts);bs=i(_e,"TR",{});var je=T(bs);ys=i(je,"TD",{});var Fe=T(ys);Ls=b(Fe,"gobuster dir -u [ip] -w [list]"),Fe.forEach(l),xs=h(je),ws=i(je,"TD",{});var Ne=T(ws);Is=b(Ne,"directory scan"),Ne.forEach(l),je.forEach(l),Hs=h(_e),Ds=i(_e,"TR",{});var Me=T(Ds);ks=i(Me,"TD",{});var qe=T(ks);Ps=b(qe,"gobuster dns -d [address]-w [list]"),qe.forEach(l),Rs=h(Me),As=i(Me,"TD",{});var Ge=T(As);Cs=b(Ge,"subdomain scan"),Ge.forEach(l),Me.forEach(l),Ss=h(_e),$s=i(_e,"TR",{});var Ke=T($s);Bs=i(Ke,"TD",{});var Ve=T(Bs);Us=b(Ve,"curl -IL [ip]"),Ve.forEach(l),Os=h(Ke),_s=i(Ke,"TD",{});var We=T(_s);js=b(We,"get website banner"),We.forEach(l),Ke.forEach(l),Fs=h(_e),Ns=i(_e,"TR",{});var Ye=T(Ns);Ms=i(Ye,"TD",{});var Je=T(Ms);qs=b(Je,"curl [ip]/robots.txt"),Je.forEach(l),Gs=h(Ye),Ks=i(Ye,"TD",{});var ze=T(Ks);Vs=b(ze,"potentially get some directories"),ze.forEach(l),Ye.forEach(l),_e.forEach(l),Se.forEach(l),Ws=h(t),Ys=i(t,"H2",{id:!0,class:!0});var Qe=T(Ys);Js=b(Qe,"Tools I Like"),Qe.forEach(l),zs=h(t),Qs=i(t,"H3",{class:!0});var Xe=T(Qs);Xs=i(Xe,"A",{href:!0,target:!0,rel:!0});var Ze=T(Xs);Zs=b(Ze,"HTTPie"),Ze.forEach(l),Xe.forEach(l),at=h(t),rt=i(t,"P",{});var ao=T(rt);st=b(ao,"HTTPie is a command line HTTP client, a user-friendly cURL replacement."),ao.forEach(l),tt=h(t),et=i(t,"P",{}),T(et).forEach(l),ot=h(t),ct=i(t,"H3",{class:!0});var ro=T(ct);it=i(ro,"A",{href:!0,target:!0,rel:!0});var so=T(it);lt=b(so,"Ripgrep"),so.forEach(l),ro.forEach(l),ht=h(t),nt=i(t,"P",{});var to=T(nt);ft=b(to,"Ripgrep is a fast, efficient, and accurate grep alternative."),to.forEach(l),dt=h(t),ut=i(t,"P",{}),T(ut).forEach(l),vt=h(t),Et=i(t,"H3",{class:!0});var eo=T(Et);pt=i(eo,"A",{href:!0,target:!0,rel:!0});var oo=T(pt);mt=b(oo,"Bat"),oo.forEach(l),eo.forEach(l),gt=h(t),Tt=i(t,"P",{});var co=T(Tt);bt=b(co,"Cat clone with syntax highlighting"),co.forEach(l),yt=h(t),Lt=i(t,"H3",{class:!0});var io=T(Lt);xt=i(io,"A",{href:!0,target:!0,rel:!0});var lo=T(xt);wt=b(lo,"Cheat.sh"),lo.forEach(l),io.forEach(l),It=h(t),Ht=i(t,"P",{});var ho=T(Ht);Dt=i(ho,"CODE",{});var no=T(Dt);kt=b(no,"curl cht.sh"),no.forEach(l),Pt=b(ho," for cheatsheets to almost anything in your terminal."),ho.forEach(l),t.forEach(l),this.h()},h(){f(s,"class","text-4xl underline mb-5"),f(n,"class","text-sm text-gray-700"),f(p,"class","text-3xl my-2"),f(H,"href","#basic-security"),f(A,"href","#useful-commands"),f(B,"href","#tools-i-like"),f(x,"class","list-decimal ml-5 underline"),f(_,"id","basic-security"),f(_,"class","text-3xl my-2"),f(N,"class","text-xl my-2"),f(G,"class","list-disc list-inside ml-2"),f(Q,"class","text-xl my-2"),f(aa,"class","list-disc list-inside ml-2"),f(ia,"class","text-xl my-2"),f(na,"class","list-disc list-inside ml-2"),f(xa,"class","text-xl my-2"),f(Ha,"class","list-disc list-inside ml-2"),f(Ma,"class","text-xl my-2"),f(Ka,"class","list-disc list-inside ml-2"),f(pr,"id","useful-commands"),f(pr,"class","text-3xl"),f(Tr,"class","text-xl my-2"),f(Lr,"class","table-auto "),f(is,"class","text-xl my-2"),f(ns,"class","table-auto"),f(Ys,"id","tools-i-like"),f(Ys,"class","text-3xl"),f(Xs,"href","http://httpie.org/"),f(Xs,"target","_blank"),f(Xs,"rel","nofollow"),f(Qs,"class","text-xl my-2"),f(it,"href","https://github.com/BurntSushi/ripgrep"),f(it,"target","_blank"),f(it,"rel","nofollow"),f(ct,"class","text-xl my-2"),f(pt,"href","https://github.com/sharkdp/bat"),f(pt,"target","_blank"),f(pt,"rel","nofollow"),f(Et,"class","text-xl my-2"),f(xt,"href","https://github.com/chubin/cheat.sh"),f(xt,"target","_blank"),f(xt,"rel","nofollow"),f(Lt,"class","text-xl my-2"),f(r,"class","ml-3")},m(a,t){u(a,r,t),d(r,s),d(s,o),d(r,c),d(r,n),d(n,v),d(r,E),d(r,p),d(p,m),d(r,L),d(r,x),d(x,w),d(w,H),d(H,k),d(x,P),d(x,R),d(R,A),d(A,C),d(x,S),d(x,$),d($,B),d(B,U),d(r,O),d(r,_),d(_,j),d(r,F),d(r,N),d(N,M),d(r,q),d(r,G),d(G,K),d(K,V),d(G,W),d(G,Y),d(Y,J),d(r,z),d(r,Q),d(Q,X),d(r,Z),d(r,aa),d(aa,ra),d(ra,sa),d(aa,ta),d(aa,ea),d(ea,oa),d(r,ca),d(r,ia),d(ia,la),d(r,ha),d(r,na),d(na,fa),d(fa,da),d(na,ua),d(na,va),d(va,Ea),d(na,pa),d(na,ma),d(ma,ga),d(na,Ta),d(na,ba),d(ba,ya),d(r,La),d(r,xa),d(xa,wa),d(r,Ia),d(r,Ha),d(Ha,Da),d(Da,ka),d(Ha,Pa),d(Ha,Ra),d(Ra,Aa),d(Ha,Ca),d(Ha,Sa),d(Sa,$a),d(Ha,Ba),d(Ha,Ua),d(Ua,Oa),d(Ha,_a),d(Ha,ja),d(ja,Fa),d(r,Na),d(r,Ma),d(Ma,qa),d(r,Ga),d(r,Ka),d(Ka,Va),d(Va,Wa),d(Ka,Ya),d(Ka,Ja),d(Ja,za),d(Ka,Qa),d(Ka,Xa),d(Xa,Za),d(Ka,ar),d(Ka,rr),d(rr,sr),d(Ka,tr),d(Ka,er),d(er,or),d(Ka,cr),d(Ka,ir),d(ir,lr),d(Ka,hr),d(Ka,nr),d(nr,fr),d(Ka,dr),d(Ka,ur),d(ur,vr),d(r,Er),d(r,pr),d(pr,mr),d(r,gr),d(r,Tr),d(Tr,br),d(r,yr),d(r,Lr),d(Lr,xr),d(xr,wr),d(wr,Ir),d(Ir,Hr),d(wr,Dr),d(wr,kr),d(kr,Pr),d(Lr,Rr),d(Lr,Ar),d(Ar,Cr),d(Cr,Sr),d(Sr,$r),d(Cr,Br),d(Cr,Ur),d(Ur,Or),d(Ar,_r),d(Ar,jr),d(jr,Fr),d(Fr,Nr),d(jr,Mr),d(jr,qr),d(qr,Gr),d(Ar,Kr),d(Ar,Vr),d(Vr,Wr),d(Wr,Yr),d(Vr,Jr),d(Vr,zr),d(zr,Qr),d(Ar,Xr),d(Ar,Zr),d(Zr,as),d(as,rs),d(as,ss),d(Zr,ts),d(Zr,es),d(es,os),d(r,cs),d(r,is),d(is,ls),d(r,hs),d(r,ns),d(ns,fs),d(fs,ds),d(ds,us),d(us,vs),d(ds,Es),d(ds,ps),d(ps,ms),d(ns,gs),d(ns,Ts),d(Ts,bs),d(bs,ys),d(ys,Ls),d(bs,xs),d(bs,ws),d(ws,Is),d(Ts,Hs),d(Ts,Ds),d(Ds,ks),d(ks,Ps),d(Ds,Rs),d(Ds,As),d(As,Cs),d(Ts,Ss),d(Ts,$s),d($s,Bs),d(Bs,Us),d($s,Os),d($s,_s),d(_s,js),d(Ts,Fs),d(Ts,Ns),d(Ns,Ms),d(Ms,qs),d(Ns,Gs),d(Ns,Ks),d(Ks,Vs),d(r,Ws),d(r,Ys),d(Ys,Js),d(r,zs),d(r,Qs),d(Qs,Xs),d(Xs,Zs),d(r,at),d(r,rt),d(rt,st),d(r,tt),d(r,et),d(r,ot),d(r,ct),d(ct,it),d(it,lt),d(r,ht),d(r,nt),d(nt,ft),d(r,dt),d(r,ut),d(r,vt),d(r,Et),d(Et,pt),d(pt,mt),d(r,gt),d(r,Tt),d(Tt,bt),d(r,yt),d(r,Lt),d(Lt,xt),d(xt,wt),d(r,It),d(r,Ht),d(Ht,Dt),d(Dt,kt),d(Ht,Pt)},p:y,d(a){a&&l(r)}}}function w(a){let r,s,g,T,b;return document.title=r="\n\t\t"+I+"\n\t",T=new L({props:{$$slots:{default:[x]},$$scope:{ctx:a}}}),{c(){s=t("meta"),g=e(),o(T.$$.fragment),this.h()},l(a){const r=c('[data-svelte="svelte-x8hgsm"]',document.head);s=i(r,"META",{name:!0,content:!0}),r.forEach(l),g=h(a),n(T.$$.fragment,a),this.h()},h(){f(s,"name","description"),f(s,"content",H)},m(a,r){d(document.head,s),u(a,g,r),v(T,a,r),b=!0},p(a,[s]){(!b||0&s)&&r!==(r="\n\t\t"+I+"\n\t")&&(document.title=r);const t={};1&s&&(t.$$scope={dirty:s,ctx:a}),T.$set(t)},i(a){b||(E(T.$$.fragment,a),b=!0)},o(a){p(T.$$.fragment,a),b=!1},d(a){l(s),a&&l(g),m(T,a)}}}const I="Linux Cheatsheet",H="Personal linux cheatsheet, basic security, commands, tools I like.",D="July 16, 2021";export default class extends a{constructor(a){super(),r(this,a,null,w,s,{})}}