const K='easyoffer_v22';
const SUPABASE_URL='https://nrdnczhoxeslzkamrbur.supabase.co';
const SUPABASE_PUBLIC_KEY='sb_publishable_abe9f9G6d4NSxyro9A0AIw_F7iziS_4';
let cloud={client:null,user:null,workspace:null,ready:false,syncTimer:0,status:'saved',inviteLink:'',onboarding:false};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const eur=n=>new Intl.NumberFormat(db?.settings?.language==='en'?'en-US':'de-DE',{style:'currency',currency:db?.settings?.currency||'EUR'}).format(Number(n)||0);
const uid=()=>crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2);
const COLORS={green:'#16a36a',blue:'#2563eb',violet:'#7c3aed',orange:'#ea580c',graphite:'#334155'};
const EN={
  'Angebot':'Offer','Datum:':'Date:','Ihre Anfrage:':'Your request:','Einzelpreis netto':'Unit price net','Gesamt netto':'Total net','Dieses Angebot ist':'This offer is valid for','Tage gültig.':'days.','Steuernummer:':'Tax number:','USt-IdNr.:':'VAT ID:',
  'Umsatzentwicklung':'Revenue development','Letzte 6 Monate':'Last 6 months','Angebotsvolumen':'Offer volume','Gesamter Nettowert aller Angebote.':'Total net value of all offers.','Abschlussquote':'Win rate','Von allen Angeboten angenommen.':'Accepted out of all offers.','Pipeline':'Pipeline','Wert nach Angebotsstatus.':'Value by offer status.','Noch keine Daten für das Diagramm.':'No data for the chart yet.','Dieses Monats':'This month','Durchschnitt':'Average','Aufträge gewonnen':'Orders won',
  'Angebot bearbeiten':'Edit offer','Katalog importieren':'Import catalog','Katalog exportieren':'Export catalog','CSV oder JSON importieren':'Import CSV or JSON','Artikel wurden importiert bzw. aktualisiert.':'Items were imported or updated.','Keine gültigen Artikel gefunden.':'No valid items found.','Die Datei konnte nicht gelesen werden.':'The file could not be read.','Katalog exportiert':'Catalog exported','Bestehenden Kunden auswählen':'Select existing customer','Neuer Kunde':'New customer','Bitte Preis prüfen':'Please check price','Status ändern':'Change status','Duplizieren':'Duplicate','Kopie':'Copy','Angebot dupliziert':'Offer duplicated','Status gespeichert':'Status saved','Kunden- / Anfragenummer':'Customer / request reference','Referenz:':'Reference:',
  'Angebote & Kalkulation':'Offers & calculations','Übersicht':'Overview','Neues Angebot':'New offer','Angebote':'Offers','Kunden':'Customers','Preiskatalog':'Price catalog','Statistik':'Analytics','Einstellungen':'Settings','Vom Kundenkontakt zum Angebot.':'From customer request to offer.',
  'Deine Angebote.':'Your offers.','Schneller fertig.':'Done faster.','Kundenanfrage rein. Leistungen prüfen. Angebot raus.':'Customer request in. Review services. Send offer.','Neues Angebot':'New offer','Von der Anfrage zur sauberen Kalkulation.':'From request to reliable calculation.','EasyOffer schlägt Leistungen aus deiner eigenen Preisliste vor. Du prüfst, änderst und versendest.':'EasyOffer suggests services from your own price list. You review, edit and send.','Angebot starten →':'Start offer →','Kunde':'Customer','Anfrage':'Request','Analyse':'Analysis','Positionen':'Line items','Fertig':'Done','Letzte Angebote':'Recent offers','Schnell wieder öffnen.':'Open again quickly.','Alle →':'All →','Noch kein Angebot':'No offers yet','Starte mit einer Kundenanfrage.':'Start with a customer request.','Erstes Angebot erstellen':'Create first offer',
  'Entwurf':'Draft','Offen':'Open','Angenommen':'Accepted','Abgelehnt':'Rejected','Abgelaufen':'Expired','Unbenannter Kunde':'Unnamed customer','Für wen ist das Angebot?':'Who is this offer for?','Was möchte der Kunde?':'What does the customer need?','EasyOffer analysiert.':'EasyOffer is analyzing.','Prüfen & kalkulieren.':'Review & calculate.','Fertig.':'Done.','Kundendaten eingeben.':'Enter customer details.','Anfrage so einfügen, wie sie eingegangen ist.':'Paste the request as it was received.','Vorschläge aus deinem Katalog prüfen.':'Review suggestions from your catalog.','Preise, Mengen und Marge kontrollieren.':'Check prices, quantities and margin.','Alles prüfen und als PDF ausgeben.':'Review everything and export as PDF.','← Übersicht':'← Overview','Speichern':'Save','ANGEBOT ERSTELLEN':'CREATE OFFER','Kundenname *':'Customer name *','E-Mail':'Email','Telefon':'Phone','Adresse':'Address','Weiter →':'Continue →','← Zurück':'← Back','Anfrage analysieren ✦':'Analyze request ✦','Baustellenfotos':'Site photos','Fotos können später von der echten KI analysiert werden.':'Photos can be analyzed by real AI later.','Analyse bereit':'Analysis ready','passende Positionen aus deinem Katalog wurden vorgeschlagen.':'matching line items from your catalog were suggested.','Dies ist aktuell eine lokale Demo-Analyse. Vor Versand technische Details prüfen.':'This is currently a local demo analysis. Review technical details before sending.','Vorgeschlagene Positionen':'Suggested line items','Vorschläge prüfen →':'Review suggestions →','Position hinzufügen':'Add line item','Neue Position':'New line item','Netto':'Net','MwSt.':'VAT','Gesamt':'Total','Deckungsbeitrag':'Gross profit','Marge:':'Margin:','Angebot erstellen →':'Create offer →','ANGEBOT':'OFFER','An:':'To:','Sieht gut aus.':'Looks good.','Prüfe alles noch einmal. Danach kannst du das Angebot als PDF ausgeben.':'Review everything once more. Then export the offer as a PDF.','GEWINN':'PROFIT','PDF / Drucken':'PDF / Print','Als offen speichern':'Save as open','Zu meinen Angeboten':'My offers',
  'VERWALTUNG':'MANAGEMENT','Alle Angebote zentral verwalten.':'Manage all offers in one place.','⌕ Kunde oder Nummer suchen':'⌕ Search customer or number','Alle Status':'All statuses','Entwürfe':'Drafts','Keine Angebote gefunden':'No offers found','Erstelle dein erstes Angebot.':'Create your first offer.','Deine Kunden.':'Your customers.','Kunden aus deinen Angeboten.':'Customers from your offers.','Neuer Kunde':'New customer','Keine E-Mail':'No email','Keine Telefonnummer':'No phone number','Noch keine Kunden':'No customers yet','Deine Kunden werden automatisch aus Angeboten übernommen.':'Customers are automatically created from offers.','Deine Preise.':'Your prices.','Eigene Leistungen und Verkaufspreise verwalten.':'Manage your services and sales prices.','Artikel':'Item','Bezeichnung':'Description','Einheit':'Unit','VK netto':'Sales price net','Auswertung':'Analytics','Deine Zahlen.':'Your figures.','Ein schneller Überblick über deine Angebote.':'A quick overview of your offers.','Daten exportieren':'Export data','VOLUMEN':'VOLUME','Aufträge':'Orders','Ø ANGEBOT':'AVG. OFFER','Gesamt':'Total','Status':'Status',
  'EasyOffer anpassen.':'Customize EasyOffer.','Deine Daten, Preise und Vorlagen.':'Your details, prices and templates.','Unternehmen':'Company','Design':'Design','E-Mail':'Email','KI':'AI','Benachrichtigungen':'Notifications','Firmenname':'Company name','Inhaber / Ansprechpartner':'Owner / contact person','Website':'Website','Steuernummer':'Tax number','Bankverbindung':'Bank details','Logo URL':'Logo URL','Theme':'Theme','Hell':'Light','Dunkel':'Dark','System (automatisch)':'System (automatic)','Akzentfarbe':'Accent color','Farbvorlage':'Color preset','Eigene Farbe':'Custom color','Grün':'Green','Blau':'Blue','Violett':'Violet','Orange':'Orange','Graphit':'Graphite','Dichte':'Density','Normal':'Normal','Kompakt':'Compact','Sprache':'Language','Angebotsnummer Präfix':'Offer number prefix','Nächste Angebotsnummer':'Next offer number','Gültigkeit (Tage)':'Validity (days)','Zahlungsziel (Tage)':'Payment term (days)','Bedingungen':'Terms','Betreff':'Subject','E-Mail Text':'Email text','Signatur':'Signature','KI-Vorschläge aktivieren':'Enable AI suggestions','Aktueller KI-Modus':'Current AI mode','EasyOffer nutzt momentan eine lokale Erkennung für typische Anfragen. Eine echte API-Anbindung kann später ergänzt werden.':'EasyOffer currently uses local recognition for typical requests. A real API connection can be added later.','Benachrichtigungen aktivieren':'Enable notifications','Automatische Follow-ups vorbereiten':'Prepare automatic follow-ups',
  'Einstellungen gespeichert':'Settings saved','Gespeichert':'Saved','Kundenname fehlt':'Customer name is missing','Bitte Anfrage eingeben':'Please enter a request','Angebot gespeichert':'Offer saved','Backup exportiert':'Backup exported','Backup importiert':'Backup imported','Datei ist ungültig':'File is invalid','Popup blockiert – bitte Popups erlauben':'Popup blocked – please allow popups'
};
const tr=text=>db?.settings?.language==='en'?Object.entries(EN).sort((a,b)=>b[0].length-a[0].length).reduce((result,[de,en])=>result.split(de).join(en),String(text)):String(text);
const defaults=[
 ['SHK-001','Gas-Brennwerttherme','Stk.',4800,3200],['SHK-002','Wärmepumpe','Stk.',8200,5600],['SHK-003','Heizkörper','Stk.',390,210],['SHK-004','Waschtisch','Stk.',690,390],['SHK-005','Toilette','Stk.',620,330],['SHK-006','Montage / Arbeitszeit','Std.',78,42],['SHK-007','Demontage','Stk.',250,120],['SHK-008','Anfahrt','pa.',85,20]
];
function normalize(x){const d={offers:[],settings:{company:'Dein Betrieb',owner:'',address:'',email:'',phone:'',website:'',taxNo:'',vatId:'',bank:'',logo:'',language:'de',theme:'system',accent:'#16a36a',colorPreset:'green',density:'normal',currency:'EUR',vat:19,offerValidity:14,paymentTerm:14,offerPrefix:'ANG-',offerNext:1001,offerFooter:'Vielen Dank für Ihre Anfrage.',offerTerms:'',emailSubject:'Ihr Angebot von {firma} – #{nummer}',emailText:'Guten Tag {kunde},\n\nhier erhalten Sie unser Angebot #{nummer}.\n\nViele Grüße\n{firma}',emailSignature:'',autoFollowups:true,notifications:true,aiSuggestions:true,next:1001},catalog:defaults.map(a=>({id:uid(),article:a[0],name:a[1],unit:a[2],price:a[3],cost:a[4]}))}; if(!x)return d; x.settings={...d.settings,...(x.settings||{})}; if(x.settings.company==='Dein SHK-Betrieb')x.settings.company='Dein Betrieb'; x.settings.colorPreset=x.settings.colorPreset||Object.keys(COLORS).find(k=>COLORS[k]===x.settings.accent)||'custom'; x.settings.next=Number(x.settings.next)||1001; x.settings.offerNext=Number(x.settings.offerNext)||x.settings.next; x.catalog=(x.catalog||d.catalog).map(a=>({...a,id:a.id||uid(),article:a.article||'',unit:a.unit||'Stk.',price:+a.price||0,cost:+a.cost||0})); x.offers=(x.offers||[]).map(o=>({...o,id:o.id||uid(),no:o.no||x.settings.next++,customer:{name:'',email:'',phone:'',address:'',...(o.customer||{})},items:(o.items||[]).map(i=>({...i,qty:+i.qty||1,price:+i.price||0,cost:+i.cost||0})),status:o.status||'entwurf',vat:+o.vat||19,created:o.created||new Date().toISOString(),followUp:o.followUp||'',notes:o.notes||'',request:o.request||'',title:o.title||'Angebot'})); x.settings.next=Math.max(x.settings.next||1001,...x.offers.map(o=>(+o.no||0)+1)); return x;}
let db=normalize(JSON.parse(localStorage.getItem(K)||localStorage.getItem('easyoffer_v21')||'null')); db.appointments=Array.isArray(db.appointments)?db.appointments:[]; localStorage.setItem(K,JSON.stringify(db));
let st={page:'home',step:1,o:null,photos:[],settingsTab:'company',catalogSearch:'',catalogCategory:'alle',calendarMonth:new Date().getMonth(),calendarYear:new Date().getFullYear(),onboardingStep:1};
function updateCloudStatus(){const el=document.getElementById('cloudStatus');if(el)el.textContent=cloud.status==='saving'?'Speichert …':cloud.status==='error'?'Speichern fehlgeschlagen':'Cloud gespeichert ✓'}
function save(){localStorage.setItem(K,JSON.stringify(db));if(cloud.ready&&cloud.client&&cloud.user){cloud.status='saving';updateCloudStatus();clearTimeout(cloud.syncTimer);cloud.syncTimer=setTimeout(syncCloud,450)}}
const net=o=>(o.items||[]).reduce((a,x)=>a+(+x.qty||0)*(+x.price||0),0);
const cost=o=>(o.items||[]).reduce((a,x)=>a+(+x.qty||0)*(+x.cost||0),0);
const gross=o=>net(o)*(1+(+o.vat||0)/100); const profit=o=>net(o)-cost(o);
function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.append(d);setTimeout(()=>d.remove(),1800)}
async function syncCloud(){if(!cloud.ready||!cloud.client||!cloud.user||!cloud.workspace)return;const {error}=await cloud.client.from('easyoffer_data').upsert({user_id:cloud.user.id,workspace_id:cloud.workspace.id,data:db,updated_at:new Date().toISOString()},{onConflict:'workspace_id'});cloud.status=error?'error':'saved';updateCloudStatus();if(error)console.warn('Cloud-Speicherung fehlgeschlagen',error.message)}
function authScreen(mode='login',message=''){document.getElementById('app').innerHTML=`<main class="authPage"><section class="authCard"><div class="authLogo">E</div><span class="eyebrow">EASYOFFER CLOUD</span><h1>${mode==='signup'?'Konto erstellen.':'Willkommen zurück.'}</h1><p class="lead">${mode==='signup'?'Speichere Angebote, Kunden und Kalender sicher in deiner Cloud.':'Melde dich an, um mit deinen eigenen Betriebsdaten weiterzuarbeiten.'}</p>${message?`<div class="authMessage">${esc(message)}</div>`:''}<label class="field"><span>E-Mail</span><input id="authEmail" type="email" autocomplete="email" placeholder="name@betrieb.de"></label><label class="field"><span>Passwort</span><input id="authPassword" type="password" autocomplete="${mode==='signup'?'new-password':'current-password'}" placeholder="Mindestens 6 Zeichen"></label><button class="primary authSubmit" onclick="submitAuth('${mode}')">${mode==='signup'?'Konto erstellen':'Anmelden'}</button>${mode==='login'?`<button class="textButton authSwitch" onclick="resetScreen()">Passwort vergessen?</button><button class="textButton authSwitch" onclick="authScreen('signup')">Noch kein Konto? Jetzt kostenlos erstellen</button>`:`<button class="textButton authSwitch" onclick="authScreen('login')">Bereits ein Konto? Anmelden</button>`}</section></main>`}
function resetScreen(message=''){document.getElementById('app').innerHTML=`<main class="authPage"><section class="authCard"><div class="authLogo">E</div><span class="eyebrow">PASSWORT ZURÜCKSETZEN</span><h1>Neues Passwort anfordern.</h1><p class="lead">Wir senden dir einen sicheren Link an deine E-Mail-Adresse.</p>${message?`<div class="authMessage">${esc(message)}</div>`:''}<label class="field"><span>E-Mail</span><input id="resetEmail" type="email" autocomplete="email" placeholder="name@betrieb.de"></label><button class="primary authSubmit" onclick="sendReset()">Link senden</button><button class="textButton authSwitch" onclick="authScreen('login')">← Zurück zur Anmeldung</button></section></main>`}
async function sendReset(){const email=$('#resetEmail')?.value.trim();if(!email)return resetScreen('Bitte E-Mail-Adresse eingeben.');const {error}=await cloud.client.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname});if(error)return resetScreen(error.message);authScreen('login','Der Link zum Zurücksetzen wurde an deine E-Mail-Adresse gesendet.')}
function passwordUpdateScreen(message=''){document.getElementById('app').innerHTML=`<main class="authPage"><section class="authCard"><div class="authLogo">E</div><span class="eyebrow">NEUES PASSWORT</span><h1>Passwort festlegen.</h1><p class="lead">Wähle ein neues, sicheres Passwort für dein EasyOffer-Konto.</p>${message?`<div class="authMessage">${esc(message)}</div>`:''}<label class="field"><span>Neues Passwort</span><input id="newPassword" type="password" autocomplete="new-password" placeholder="Mindestens 6 Zeichen"></label><button class="primary authSubmit" onclick="updatePassword()">Passwort speichern</button></section></main>`}
async function updatePassword(){const password=$('#newPassword')?.value||'';if(password.length<6)return passwordUpdateScreen('Das Passwort muss mindestens 6 Zeichen haben.');const {error}=await cloud.client.auth.updateUser({password});if(error)return passwordUpdateScreen(error.message);authScreen('login','Passwort gespeichert. Du kannst dich jetzt anmelden.')}
async function acceptInvite(token){const {error}=await cloud.client.rpc('accept_workspace_invite',{invite_token:token});if(error)throw error;history.replaceState({},'',location.pathname);toast('Du bist dem Betrieb beigetreten.')}
async function createInvite(){if(cloud.workspace?.role!=='owner')return toast('Nur der Inhaber kann Mitarbeiter einladen.');const email=$('#inviteEmail')?.value.trim().toLowerCase();if(!email)return toast('Bitte E-Mail-Adresse eingeben.');const {data,error}=await cloud.client.from('workspace_invites').upsert({workspace_id:cloud.workspace.id,email,role:'member'},{onConflict:'workspace_id,email'}).select('token').single();if(error)return toast('Einladung konnte nicht erstellt werden.');cloud.inviteLink=`${location.origin}${location.pathname}?invite=${data.token}`;toast('Einladungslink erstellt');render()}
async function copyInvite(){if(!cloud.inviteLink)return;try{await navigator.clipboard.writeText(cloud.inviteLink);toast('Link kopiert')}catch(error){toast('Link markieren und manuell kopieren')}}
async function submitAuth(mode){const email=$('#authEmail')?.value.trim(),password=$('#authPassword')?.value;if(!email||!password)return authScreen(mode,'Bitte E-Mail und Passwort eingeben.');if(password.length<6)return authScreen(mode,'Das Passwort muss mindestens 6 Zeichen haben.');const result=mode==='signup'?await cloud.client.auth.signUp({email,password}):await cloud.client.auth.signInWithPassword({email,password});if(result.error)return authScreen(mode,result.error.message);if(!result.data.session)return authScreen('login','Bitte bestätige zuerst die E-Mail von Supabase. Danach kannst du dich anmelden.');await loadCloud(result.data.session.user)}
async function ensureWorkspace(user){const {data:members,error}=await cloud.client.from('workspace_members').select('workspace_id,role,workspaces(id,name,owner_id)').eq('user_id',user.id).limit(1);if(error)throw error;if(members?.[0]){const m=members[0];cloud.workspace={id:m.workspace_id,name:m.workspaces?.name||'Mein Betrieb',role:m.role,ownerId:m.workspaces?.owner_id};return}const id=uid(),name=(db.settings.company&&db.settings.company!=='Dein Betrieb')?db.settings.company:'Mein Betrieb';const created=await cloud.client.from('workspaces').insert({id,name,owner_id:user.id});if(created.error)throw created.error;const joined=await cloud.client.from('workspace_members').insert({workspace_id:id,user_id:user.id,role:'owner'});if(joined.error)throw joined.error;cloud.workspace={id,name,role:'owner',ownerId:user.id}}
async function loadCloud(user){cloud.user=user;try{const invite=new URLSearchParams(location.search).get('invite');if(invite)await acceptInvite(invite);await ensureWorkspace(user);const {data:remote,error}=await cloud.client.from('easyoffer_data').select('data').eq('workspace_id',cloud.workspace.id).maybeSingle();if(error)throw error;if(remote?.data){db=normalize(remote.data);db.appointments=Array.isArray(db.appointments)?db.appointments:[]}cloud.ready=true;cloud.status='saved';cloud.onboarding=!remote&&!db.settings.onboardingDone;if(!remote)await syncCloud();render()}catch(error){authScreen('login','Die Cloud-Daten konnten nicht geladen werden: '+error.message)}}
async function bootApp(){if(!window.supabase){render();return}cloud.client=window.supabase.createClient(SUPABASE_URL,SUPABASE_PUBLIC_KEY);cloud.client.auth.onAuthStateChange((event)=>{if(event==='PASSWORD_RECOVERY')passwordUpdateScreen()});const {data:{session}}=await cloud.client.auth.getSession();if(session)await loadCloud(session.user);else authScreen()}
async function signOut(){if(cloud.client)await cloud.client.auth.signOut();cloud.user=null;cloud.ready=false;authScreen()}
function nav(){return `<aside class="side"><div class="brand"><div class="logo">E</div><div><b>easyoffer</b><small>Angebote & Kalkulation</small></div></div><nav>${[['home','⌂','Übersicht'],['new','＋','Neues Angebot'],['offers','▤','Angebote'],['calendar','◷','Kalender'],['customers','♙','Kunden'],['catalog','◫','Preiskatalog'],['stats','◈','Statistik'],['settings','⚙','Einstellungen']].map(([p,i,t])=>`<button class="nav ${st.page===p?'active':''}" onclick="${p==='new'?'newOffer()':`go('${p}')`}">${i} <span>${t}</span></button>`).join('')}</nav><div class="sideBottom"><div class="trial"><b>${cloud.workspace?esc(cloud.workspace.name):'Cloud aktiv'}</b><span>${cloud.user?esc(cloud.user.email):'Vom Kundenkontakt zum Angebot.'}</span>${cloud.user?'<small id="cloudStatus" class="cloudStatus">Cloud gespeichert ✓</small><button class="signOut" onclick="signOut()">Abmelden</button>':''}</div></div></aside>`}
function onboardingPage(){const s=db.settings,step=st.onboardingStep;const steps=['Betrieb','Angebote','Preiskatalog'];let content='';if(step===1)content=`<div class="card formgrid"><div class="wide"><span class="eyebrow">SCHRITT 1 VON 3</span><h1>Dein Betrieb.</h1><p class="lead">Diese Angaben erscheinen später auf Angeboten und im PDF.</p></div>${field('Firmenname *','onCompany',s.company==='Dein Betrieb'?'':s.company,'Musterbetrieb GmbH')}${field('Ansprechpartner','onOwner',s.owner,'Max Mustermann')}${field('E-Mail','onEmail',s.email,'info@betrieb.de')}${field('Telefon','onPhone',s.phone,'01234 56789')}${field('Adresse','onAddress',s.address,'Straße, PLZ Ort')}</div>`;if(step===2)content=`<div class="card formgrid"><div class="wide"><span class="eyebrow">SCHRITT 2 VON 3</span><h1>Deine Angebotsregeln.</h1><p class="lead">Du kannst alles später unter Einstellungen ändern.</p></div><label class="field"><span>MwSt. (%)</span><input id="onVat" type="number" value="${s.vat||19}"></label>${field('Angebotsnummer-Präfix','onPrefix',s.offerPrefix||'ANG-','ANG-')}<label class="field"><span>Gültigkeit (Tage)</span><input id="onValidity" type="number" value="${s.offerValidity||14}"></label><label class="field"><span>Zahlungsziel (Tage)</span><input id="onPayment" type="number" value="${s.paymentTerm||14}"></label></div>`;if(step===3)content=`<div class="card onboardingCatalog"><span class="eyebrow">SCHRITT 3 VON 3</span><h1>Preiskatalog starten.</h1><p class="lead">Du kannst deine bestehende CSV-Preisliste später direkt im Preiskatalog importieren.</p><label class="onboardingChoice"><input type="radio" name="catalogStart" value="starter" checked><span><b>Mit Beispielpositionen starten</b><small>Du bekommst einige Musterartikel und kannst sie direkt anpassen.</small></span></label><label class="onboardingChoice"><input type="radio" name="catalogStart" value="empty"><span><b>Ohne Artikel starten</b><small>Du legst eigene Positionen an oder importierst deine Preisliste.</small></span></label></div>`;return `<div class="onboarding"><div class="onboardingProgress">${steps.map((x,i)=>`<span class="${i+1===step?'current':i+1<step?'done':''}"><i>${i+1<step?'✓':i+1}</i>${x}</span>`).join('')}</div>${content}<div class="actions"><button class="ghost" ${step===1?'disabled':''} onclick="onboardingBack()">← Zurück</button><button class="primary" onclick="onboardingNext()">${step===3?'Einrichtung abschließen':'Weiter →'}</button></div></div>`}
function onboardingBack(){if(st.onboardingStep>1){st.onboardingStep--;render()}}
function onboardingNext(){const s=db.settings;if(st.onboardingStep===1){s.company=$('#onCompany').value.trim();s.owner=$('#onOwner').value.trim();s.email=$('#onEmail').value.trim();s.phone=$('#onPhone').value.trim();s.address=$('#onAddress').value.trim();if(!s.company)return toast('Bitte Firmenname eingeben');st.onboardingStep=2;render();return}if(st.onboardingStep===2){s.vat=Number($('#onVat').value)||19;s.offerPrefix=$('#onPrefix').value.trim()||'ANG-';s.offerValidity=Number($('#onValidity').value)||14;s.paymentTerm=Number($('#onPayment').value)||14;st.onboardingStep=3;render();return}if(document.querySelector('input[name="catalogStart"]:checked')?.value==='empty')db.catalog=[];s.onboardingDone=true;cloud.onboarding=false;save();render();toast('Einrichtung abgeschlossen')}
function layout(c){$('#app').innerHTML=`<div class="app">${nav()}<main>${c}</main></div>`}
function go(p){st.page=p;render()}
function home(){const won=db.offers.filter(o=>o.status==='angenommen');return `<div class="top"><div><span class="eyebrow">EASYOFFER FÜR HANDWERK & SERVICE</span><h1>Deine Angebote.<br><em>Schneller fertig.</em></h1><p class="lead">Kundenanfrage rein. Leistungen prüfen. Angebot raus.</p></div><button class="primary big" onclick="newOffer()">＋ Neues Angebot</button></div><div class="hero"><div class="heroCard"><div class="spark">✦ DIGITALER ANGEBOTSASSISTENT</div><h2>Von der Anfrage zur sauberen Kalkulation.</h2><p>EasyOffer schlägt Leistungen aus deiner eigenen Preisliste vor. Du prüfst, änderst und versendest.</p><button class="primary" onclick="newOffer()">Angebot starten →</button><div class="flow"><span>01 Kunde</span><span>02 Anfrage</span><span>03 Analyse</span><span>04 Kalkulation</span><span>05 Angebot</span></div></div><div class="stats"><div class="stat"><small>ANGEBOTE</small><strong>${db.offers.length}</strong><span>gesamt</span></div><div class="stat"><small>GEWONNEN</small><strong>${eur(won.reduce((a,o)=>a+net(o),0))}</strong><span>Auftragswert netto</span></div><div class="stat"><small>ARTIKEL</small><strong>${db.catalog.length}</strong><span>im Katalog</span></div></div></div><section class="section"><div class="sectionHead"><div><h2>Letzte Angebote</h2><p class="lead">Schnell wieder öffnen.</p></div><button class="ghost" onclick="go('offers')">Alle →</button></div><div class="card rows">${db.offers.length?db.offers.slice(-6).reverse().map(row).join(''):`<div class="empty"><h3>Noch kein Angebot</h3><p>Starte mit einer Kundenanfrage.</p><button class="primary" onclick="newOffer()">Erstes Angebot erstellen</button></div>`}</div></section>`}
function statusLabel(s){return ({entwurf:'Entwurf',offen:'Offen',angenommen:'Angenommen',abgelehnt:'Abgelehnt',abgelaufen:'Abgelaufen'})[s]||s}
function row(o){return `<div class="row" onclick="openOffer('${o.id}')"><b>#${o.no}</b><div><b>${esc(o.customer.name||'Unbenannter Kunde')}</b><br><span>${esc(o.title)}${o.reference?` · Ref. ${esc(o.reference)}`:''}</span></div><span class="badge ${o.status==='angenommen'?'open':''}">${statusLabel(o.status)}</span><strong>${eur(net(o))}</strong><b>›</b></div>`}
function newOffer(){st.o={id:uid(),no:db.settings.next++,reference:'',customer:{name:'',email:'',phone:'',address:''},request:'',title:db.settings.offerTitle||'Angebot',items:[],notes:'',status:'entwurf',vat:db.settings.vat||19,validity:db.settings.offerValidity||14,followUp:''};st.photos=[];st.page='new';st.step=1;save();render()}
function progress(){return `<div class="progress">${['Kunde','Anfrage','Analyse','Positionen','Fertig'].map((x,i)=>`<div class="pstep ${i+1===st.step?'current':''} ${i+1<st.step?'done':''}"><i>${i+1<st.step?'✓':i+1}</i><span>${x}</span></div>`).join('')}</div>`}
function wizard(){const o=st.o;const bodies=[customer,request,analysis,items,finish];return `<div class="wizardTop"><button class="back" onclick="go('home')">← Übersicht</button><b>Angebot #${o.no}</b><button class="ghost" onclick="persist();toast('Gespeichert')">Speichern</button></div><div class="wizard"><div class="wizardIntro"><span class="eyebrow">ANGEBOT ERSTELLEN</span><h1>${['Für wen ist das Angebot?','Was möchte der Kunde?','EasyOffer analysiert.','Prüfen & kalkulieren.','Fertig.'][st.step-1]}</h1><p class="lead">${['Kundendaten eingeben.','Anfrage so einfügen, wie sie eingegangen ist.','Vorschläge aus deinem Katalog prüfen.','Preise, Mengen und Marge kontrollieren.','Alles prüfen und als PDF ausgeben.'][st.step-1]}</p></div>${progress()}${bodies[st.step-1](o)}</div>`}
function field(l,id,v,p){return `<label class="field"><span>${l}</span><input id="${id}" value="${esc(v)}" placeholder="${p||''}"></label>`}
function customer(o){
  const customers=[...new Map(db.offers.filter(x=>x.customer?.name).map(x=>[`${x.customer.email||''}|${x.customer.name}`,x.customer])).values()];
  const picker=customers.length?`<div class="card" style="margin-bottom:16px"><label class="field"><span>Bestehenden Kunden auswählen</span><select onchange="selectExistingCustomer(this.value)"><option value="">Neuer Kunde</option>${customers.map((c,i)=>`<option value="${i}">${esc(c.name)}${c.email?` (${esc(c.email)})`:''}</option>`).join('')}</select></label><input id="existingCustomers" type="hidden" value="${esc(JSON.stringify(customers))}"></div>`:'';
  return `${picker}<div class="card formgrid">${field('Kundenname *','name',o.customer.name,'Familie Müller')}${field('Kunden- / Anfragenummer','reference',o.reference||'','z. B. K-2026-184')}${field('E-Mail','email',o.customer.email,'kunde@email.de')}${field('Telefon','phone',o.customer.phone,'0561 ...')}${field('Adresse','address',o.customer.address,'Straße, PLZ Ort')}</div><div class="actions"><span></span><button class="primary" onclick="saveCustomer()">Weiter →</button></div>`
}
function selectExistingCustomer(index){
  if(index==='')return;
  try{const customers=JSON.parse($('#existingCustomers').value);st.o.customer={...st.o.customer,...customers[Number(index)]};render()}catch(e){toast('Kunde konnte nicht geladen werden')}
}
function request(o){return `<div class="card"><textarea id="req" class="request" placeholder="z. B. Kunde benötigt eine Reparatur, Montage oder neue Ausstattung.">${esc(o.request)}</textarea><div class="upload"><b>📸 Baustellenfotos</b><br><small>Fotos können später von der echten KI analysiert werden.</small><br><input type="file" accept="image/*" multiple onchange="photos(event)"><div class="photos">${st.photos.map(x=>`<img src="${x}">`).join('')}</div></div></div><div class="actions"><button class="ghost" onclick="back()">← Zurück</button><button class="primary" onclick="analyze()">Anfrage analysieren ✦</button></div>`}
function photos(e){[...e.target.files].slice(0,5).forEach(f=>{const r=new FileReader();r.onload=()=>{st.photos.push(r.result);render()};r.readAsDataURL(f)})}
function analysis(o){return `<div class="card"><div class="aiBox"><b>✦ Analyse bereit</b><p><strong>${esc(o.title)}</strong></p><p>${o.items.length} passende Positionen aus deinem Katalog wurden vorgeschlagen.</p><small>Preise stammen ausschließlich aus deinem eigenen Katalog.</small></div>${o.missingCatalogItems?.length?`<div class="aiBox" style="background:#fff7e6;border-color:#f3d39b"><b>Bitte Preis prüfen</b><p>Kein passender Katalogartikel gefunden: ${o.missingCatalogItems.map(esc).join(', ')}.</p><small>Füge den Artikel zuerst im Preiskatalog hinzu oder ergänze ihn später manuell.</small></div>`:''}<div class="card" style="margin-top:12px"><b>Vorgeschlagene Positionen</b>${o.items.map(x=>`<div class="row" style="cursor:default"><span>${x.qty} ${esc(x.unit)}</span><div>${esc(x.name)}<br><small>${eur(x.price)} netto</small></div></div>`).join('')||'<p class="lead">Keine Katalogposition erkannt.</p>'}</div><div class="actions"><button class="ghost" onclick="back()">← Anfrage</button><button class="primary" onclick="st.step=4;render()">Vorschläge prüfen →</button></div></div>`}
function find(n){return db.catalog.find(x=>x.name.trim().toLowerCase()===String(n).trim().toLowerCase())||null}
function detectedQuantity(text,terms){
  const words=terms.map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
  const match=text.match(new RegExp(`(?:^|\\s)(\\d+)\\s*(?:x|stück|stk\\.?)?\\s*(?:${words})`,'i'))||text.match(new RegExp(`(?:${words})[^0-9]{0,18}(\\d+)\\s*(?:x|stück|stk\\.?)`,'i'));
  return match?Math.max(1,Number(match[1])||1):1
}
function parse(t){
  const a=[],missing=[],add=(n,terms=[n])=>{if(!a.some(x=>x.name===n)){const f=find(n);if(f)a.push({...f,qty:detectedQuantity(t,terms)});else missing.push(n)}};
  if(/wärmepumpe/i.test(t)){
    add('Demontage');add('Entsorgung Altgerät');add('Wärmepumpe',['wärmepumpe','wp','luftwärmepumpe']);add('Montage Heizungsanlage');add('Hydraulischer Abgleich');add('Inbetriebnahme')
  }else if(/gastherme|heizung|heizungsanlage/i.test(t)){
    add('Demontage');add('Entsorgung Altgerät');add('Heizungsanlage');add('Montage Heizungsanlage');add('Inbetriebnahme')
  }
  if(/wartung/i.test(t))add('Wartung Heizungsanlage');
  if(/heizkörper|radiator/i.test(t))add('Heizkörper',['heizkörper','radiator']);
  if(/störung|kaputt|fehler|problem/i.test(t)){add('Anfahrt');add('Fehlerdiagnose')}
  if(/waschbecken|waschtisch/i.test(t))add('Waschtisch');
  if(/wc|toilette/i.test(t))add('Toilette');
  if(/armatur/i.test(t))add('Armatur');
  if(/klima/i.test(t)){add('Klimagerät Split');add('Montage Klimagerät')}
  if(/rohr|leitung/i.test(t))add('Rohrleitung');
  if(!a.length)add('Montage / Arbeitszeit',['montage','arbeitszeit','einbau']);
  return {items:a,missing:[...new Set(missing)]}
}
function analyze(){
  const o=st.o;
  o.request=$('#req').value.trim();
  if(!o.request)return toast('Bitte Anfrage eingeben');
  o.title=/wärmepumpe/i.test(o.request)
    ?'Heizungsmodernisierung – Wärmepumpe'
    :/klima/i.test(o.request)
    ?'Klimaanlage'
    :/wc|waschbecken|waschtisch|armatur/i.test(o.request)
    ?'Sanitärarbeiten'
    :/wartung/i.test(o.request)
    ?'Wartung Heizungsanlage'
    :'Dienstleistungen';
  const result=parse(o.request);
  o.items=result.items;
  o.missingCatalogItems=result.missing;
  st.step=3;
  render()
}
function items(o){
  return `<div class="card">
    <div class="items">
      ${o.items.map((x,i)=>`
        <div class="item">
          <input value="${esc(x.name)}" onchange="chg(${i},'name',this.value)">
          <input type="number" min="0" step="0.1" value="${x.qty}" onchange="chg(${i},'qty',this.value)">
          <input value="${esc(x.unit)}" onchange="chg(${i},'unit',this.value)">
          <input type="number" min="0" step="0.01" value="${x.price}" onchange="chg(${i},'price',this.value)">
          <input type="number" min="0" step="0.01" value="${x.cost||0}" onchange="chg(${i},'cost',this.value)">
          <button class="ghost" onclick="del(${i})">×</button>
        </div>`).join('')}
    </div>
    <button class="ghost" style="margin-top:14px" onclick="addItem()">＋ Position hinzufügen</button>
    <div class="totals">
      <div class="totalLine"><span>Netto</span><b>${eur(net(o))}</b></div>
      <div class="totalLine"><span>MwSt. ${o.vat}%</span><b>${eur(net(o)*o.vat/100)}</b></div>
      <div class="totalLine grand"><span>Gesamt</span><b>${eur(gross(o))}</b></div>
    </div>
    <div class="marginBox">
      <span>Deckungsbeitrag</span>
      <strong>${eur(profit(o))}</strong>
      <small>Marge: ${net(o)?Math.round(profit(o)/net(o)*100):0}%</small>
    </div>
  </div>
  <div class="actions">
    <button class="ghost" onclick="st.step=2;render()">← Zurück</button>
    <button class="primary" onclick="st.step=5;render()">Angebot erstellen →</button>
  </div>`
}
function chg(i,k,v){
  st.o.items[i][k]=['qty','price','cost'].includes(k)?Number(v):v;
  render()
}
function addItem(){
  st.o.items.push({name:'Neue Position',qty:1,unit:'Stk.',price:0,cost:0});
  render()
}
function del(i){
  st.o.items.splice(i,1);
  render()
}
function finish(o){
  const n=net(o),g=gross(o),p=profit(o),saved=db.offers.some(x=>x.id===o.id);
  return `<div class="preview">
    <div class="paper">
      <div class="paperHead">
        <div>
          ${db.settings.logo?`<img class="offerLogo" src="${db.settings.logo}">`:''}
          <b>${esc(db.settings.company)}</b><br>
          <small>${esc(db.settings.address)}<br>${esc(db.settings.email)} · ${esc(db.settings.phone)}</small>
        </div>
        <b>ANGEBOT #${o.no}</b>
      </div>
      <h2>${esc(o.title||'Angebot')}</h2>
      <p><b>An:</b><br>${esc(o.customer.name)}<br>${esc(o.customer.address)}</p>
      <p><b>Anfrage:</b><br>${esc(o.request)}</p>
      <table>
        <tr>
          <th>Position</th>
          <th>Menge</th>
          <th>Einzelpreis</th>
          <th class="right">Gesamt</th>
        </tr>
        ${o.items.map(x=>`
          <tr>
            <td>${esc(x.name)}</td>
            <td>${x.qty} ${esc(x.unit)}</td>
            <td>${eur(x.price)}</td>
            <td class="right">${eur(x.qty*x.price)}</td>
          </tr>`).join('')}
      </table>
      <div class="totals">
        <div class="totalLine"><span>Netto</span><b>${eur(n)}</b></div>
        <div class="totalLine"><span>MwSt. ${o.vat}%</span><b>${eur(n*o.vat/100)}</b></div>
        <div class="totalLine grand"><span>Gesamt</span><b>${eur(g)}</b></div>
      </div>
      <div class="offerMeta">
        Angebot gültig ${o.validity} Tage.<br>
        ${esc(db.settings.offerFooter)}
      </div>
      ${db.settings.offerTerms?`<div class="terms"><b>Hinweise & Bedingungen</b><br>${esc(db.settings.offerTerms)}</div>`:''}
    </div>
    <div>
      <div class="card">
        <span class="eyebrow">BEREIT</span>
        <h2>Sieht gut aus.</h2>
        <p class="lead">Prüfe alles noch einmal. Danach kannst du das Angebot als PDF ausgeben.</p>
        <div class="miniStats">
          <div><small>NETTO</small><b>${eur(n)}</b></div>
          <div><small>GEWINN</small><b>${eur(p)}</b></div>
          <div><small>MARGE</small><b>${n?Math.round(p/n*100):0}%</b></div>
        </div>
        ${saved?`<label class="field" style="margin:12px 0"><span>Status ändern</span><select onchange="setOfferStatus(this.value)">${['entwurf','offen','angenommen','abgelehnt'].map(status=>`<option value="${status}" ${o.status===status?'selected':''}>${statusLabel(status)}</option>`).join('')}</select></label><div class="followUpBox"><b>◷ Angebotsnachverfolgung</b><span>Erstellt automatisch einen orangefarbenen Eintrag im Kalender.</span><input id="followUpDate" type="date" value="${esc(o.followUp||'')}"><button class="ghost" onclick="planFollowUp()">Nachfassen planen</button>${o.followUp?`<button class="textButton" onclick="clearFollowUp()">Nachverfolgung entfernen</button>`:''}</div>`:''}
        <button class="primary" onclick="persist();printOffer()">▣ PDF / Drucken</button>
        <button class="ghost" style="width:100%;margin-top:10px" onclick="st.step=4;render()">Angebot bearbeiten</button>
        ${saved?`<button class="ghost" style="width:100%;margin-top:10px" onclick="duplicateCurrentOffer()">Duplizieren</button>`:''}
        <button class="ghost" style="width:100%;margin-top:10px" onclick="markOpen()">Als offen speichern</button>
        <button class="ghost" style="width:100%;margin-top:10px" onclick="go('offers')">Zu meinen Angeboten</button>
      </div>
    </div>
  </div>`
}
function saveCustomer(){
  const o=st.o;
  o.customer.name=$('#name').value.trim();
  o.customer.email=$('#email').value.trim();
  o.customer.phone=$('#phone').value.trim();
  o.customer.address=$('#address').value.trim();
  o.reference=$('#reference').value.trim();
  if(!o.customer.name)return toast('Kundenname fehlt');
  st.step=2;
  render()
}
function persist(){
  const i=db.offers.findIndex(x=>x.id===st.o.id);
  if(i<0)db.offers.push(JSON.parse(JSON.stringify(st.o)));
  else db.offers[i]=JSON.parse(JSON.stringify(st.o));
  save()
}
function markOpen(){
  st.o.status='offen';
  persist();
  toast('Angebot gespeichert');
  go('offers')
}
function setOfferStatus(status){
  st.o.status=status;
  if(['angenommen','abgelehnt'].includes(status)){st.o.followUp='';db.appointments=(db.appointments||[]).filter(a=>!(a.offerId===st.o.id&&a.kind==='followup'))}
  persist();
  toast('Status gespeichert');
  render()
}
function planFollowUp(){const date=$('#followUpDate')?.value;if(!date)return toast('Bitte ein Datum auswählen');st.o.followUp=date;persist();db.appointments=(db.appointments||[]).filter(a=>!(a.offerId===st.o.id&&a.kind==='followup'));db.appointments.push({id:uid(),date,title:`Nachfassen: ${(db.settings.offerPrefix||'ANG-')+st.o.no}`,note:`${st.o.customer.name||'Kunde'} · ${st.o.title||'Angebot'}`,color:'orange',offerId:st.o.id,kind:'followup'});save();toast('Nachverfolgung im Kalender geplant');render()}
function clearFollowUp(){st.o.followUp='';db.appointments=(db.appointments||[]).filter(a=>!(a.offerId===st.o.id&&a.kind==='followup'));persist();save();toast('Nachverfolgung entfernt');render()}
function duplicateCurrentOffer(){
  st.o={...JSON.parse(JSON.stringify(st.o)),id:uid(),no:db.settings.next++,status:'entwurf',created:new Date().toISOString(),title:`${st.o.title||'Angebot'} – Kopie`};
  st.step=4;
  save();
  toast('Angebot dupliziert');
  render()
}
function openOffer(i){
  const x=db.offers.find(x=>x.id===i);
  if(!x)return;
  st.o=JSON.parse(JSON.stringify(x));
  st.page='new';
  st.step=5;
  st.photos=[];
  render()
}
function back(){
  if(st.step>1){st.step--;render()}
  else go('home')
}function offers(){
  return `<div class="top">
    <div>
      <span class="eyebrow">VERWALTUNG</span>
      <h1>Deine Angebote.</h1>
      <p class="lead">Alle Angebote zentral verwalten.</p>
    </div>
    <button class="primary" onclick="newOffer()">＋ Neues Angebot</button>
  </div>
  <div class="toolbar">
    <input id="q" placeholder="⌕ Kunde oder Nummer suchen" oninput="filterOffers()">
    <select id="f" onchange="filterOffers()">
      <option value="all">Alle Status</option>
      <option value="entwurf">Entwürfe</option>
      <option value="offen">Offen</option>
      <option value="angenommen">Angenommen</option>
      <option value="abgelehnt">Abgelehnt</option>
    </select>
  </div>
  <div id="offerRows" class="card rows">${offerRows(db.offers)}</div>`
}
function offerRows(arr){
  if(!arr.length)return `<div class="empty"><h3>Keine Angebote gefunden</h3><p>Erstelle dein erstes Angebot.</p></div>`;
  return arr.slice().reverse().map(row).join('')
}
function filterOffers(){
  const q=($('#q')?.value||'').toLowerCase();
  const f=$('#f')?.value||'all';
  const a=db.offers.filter(o=>{
    const text=`${o.no} ${o.reference||''} ${o.customer.name} ${o.customer.email} ${o.title}`.toLowerCase();
    return (!q||text.includes(q))&&(f==='all'||o.status===f)
  });
  $('#offerRows').innerHTML=offerRows(a)
}
function isoDate(year,month,day){return `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`}
function calendarPage(){
  const year=st.calendarYear,month=st.calendarMonth,first=new Date(year,month,1),last=new Date(year,month+1,0),offset=(first.getDay()+6)%7;
  const names=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  const colors=[['green','Grün'],['blue','Blau'],['orange','Orange'],['violet','Violett'],['red','Rot']];
  const days=Array.from({length:42},(_,i)=>i-offset+1);
  const activeOffers=db.offers.filter(o=>!['angenommen','abgelehnt'].includes(o.status));
  return `<div class="top"><div><span class="eyebrow">PLANUNG</span><h1>Dein Kalender.</h1><p class="lead">Notizen, Termine und Angebotsnachverfolgung auf einen Blick.</p></div><button class="primary" onclick="document.getElementById('calendarTitle').focus()">＋ Eintrag hinzufügen</button></div>
  <div class="calendarLayout"><section class="card calendarCard"><div class="calendarHead"><button class="ghost" onclick="moveCalendar(-1)">←</button><h2>${names[month]} ${year}</h2><button class="ghost" onclick="moveCalendar(1)">→</button></div><div class="calendarWeek">${['Mo','Di','Mi','Do','Fr','Sa','So'].map(d=>`<span>${d}</span>`).join('')}</div><div class="calendarGrid">${days.map(day=>{if(day<1||day>last.getDate())return '<div class="calendarDay mutedDay"></div>';const date=isoDate(year,month,day),items=db.appointments.filter(a=>a.date===date);return `<div class="calendarDay ${date===new Date().toISOString().slice(0,10)?'today':''}"><b>${day}</b><div class="calendarItems">${items.slice(0,3).map(a=>`<button class="calendarItem ${esc(a.color||'green')}" title="${esc(a.note||a.title)}" onclick="removeAppointment('${a.id}')">${esc(a.title)}</button>`).join('')}${items.length>3?`<span class="moreItems">+${items.length-3} weitere</span>`:''}</div></div>`}).join('')}</div></section>
  <aside class="card calendarForm"><h2>Neuer Kalendereintrag</h2><p class="lead smallLead">Klick auf einen farbigen Eintrag, um ihn zu löschen.</p><label class="field"><span>Datum</span><input id="calendarDate" type="date" value="${isoDate(year,month,new Date().getMonth()===month&&new Date().getFullYear()===year?new Date().getDate():1)}"></label><label class="field"><span>Titel *</span><input id="calendarTitle" placeholder="z. B. Kunde zurückrufen"></label><label class="field"><span>Farbe</span><select id="calendarColor">${colors.map(([v,l])=>`<option value="${v}">${l}</option>`).join('')}</select></label><label class="field"><span>Angebot verknüpfen (optional)</span><select id="calendarOffer"><option value="">Kein Angebot</option>${activeOffers.map(o=>`<option value="${o.id}">${esc((db.settings.offerPrefix||'ANG-')+o.no)} · ${esc(o.customer.name||'Unbenannt')}</option>`).join('')}</select></label><label class="field"><span>Notiz</span><textarea id="calendarNote" placeholder="z. B. Rückfrage zu Material und Montagetermin"></textarea></label><button class="primary" onclick="addAppointment()">Eintrag speichern</button></aside></div>`
}
function moveCalendar(delta){const d=new Date(st.calendarYear,st.calendarMonth+delta,1);st.calendarYear=d.getFullYear();st.calendarMonth=d.getMonth();render()}
function addAppointment(){const date=$('#calendarDate').value,title=$('#calendarTitle').value.trim();if(!date||!title)return toast('Datum und Titel fehlen');db.appointments.push({id:uid(),date,title,note:$('#calendarNote').value.trim(),color:$('#calendarColor').value,offerId:$('#calendarOffer').value});save();toast('Kalendereintrag gespeichert');render()}
function removeAppointment(id){if(!confirm('Kalendereintrag wirklich löschen?'))return;db.appointments=db.appointments.filter(a=>a.id!==id);save();render();toast('Kalendereintrag gelöscht')}
function customers(){
  const map={};
  db.offers.forEach(o=>{
    const k=o.customer.email||o.customer.name||'Unbekannt';
    if(!map[k])map[k]={...o.customer,count:0,value:0};
    map[k].count++;
    map[k].value+=net(o)
  });
  const a=Object.values(map);
  return `<div class="top">
    <div>
      <span class="eyebrow">KUNDEN</span>
      <h1>Deine Kunden.</h1>
      <p class="lead">Kunden aus deinen Angeboten.</p>
    </div>
    <button class="primary" onclick="newOffer()">＋ Neuer Kunde</button>
  </div>
  <div class="card rows">${a.length?a.map(c=>`
    <div class="row" style="cursor:default">
      <div>
        <b>${esc(c.name||'Unbenannt')}</b><br>
        <span>${esc(c.email||'Keine E-Mail')} · ${esc(c.phone||'Keine Telefonnummer')}</span>
      </div>
      <span class="badge">${c.count} Angebot${c.count===1?'':'e'}</span>
      <strong>${eur(c.value)}</strong>
    </div>`).join(''):`<div class="empty"><h3>Noch keine Kunden</h3><p>Deine Kunden werden automatisch aus Angeboten übernommen.</p></div>`}</div>`
}
function catalogPage(){
  const categories=['alle',...new Set(db.catalog.map(x=>x.category||'Allgemein').filter(Boolean).sort((a,b)=>a.localeCompare(b,'de')))];
  const query=st.catalogSearch.trim().toLowerCase();
  const visible=db.catalog.map((x,i)=>({...x,_i:i})).filter(x=>(st.catalogCategory==='alle'||(x.category||'Allgemein')===st.catalogCategory)&&(!query||[x.article,x.name,x.category,x.unit].join(' ').toLowerCase().includes(query)));
  return `<div class="top">
    <div>
      <span class="eyebrow">PREISKATALOG</span>
      <h1>Deine Preise.</h1>
      <p class="lead">Eigene Leistungen und Verkaufspreise verwalten.</p>
    </div>
    <div class="toolbar"><button class="ghost" onclick="importCatalog()">⇧ Katalog importieren</button><button class="ghost" onclick="exportCatalog()">⇩ Katalog exportieren</button><button class="primary" onclick="addCatalog()">＋ Position</button></div>
  </div>
  <div class="card catalogTools"><div class="catalogSearch"><input value="${esc(st.catalogSearch)}" oninput="filterCatalog(this.value,st.catalogCategory,true)" placeholder="⌕ Artikel, Nummer oder Kategorie suchen"></div><select onchange="filterCatalog(st.catalogSearch,this.value)">${categories.map(c=>`<option value="${esc(c)}" ${st.catalogCategory===c?'selected':''}>${c==='alle'?'Alle Kategorien':esc(c)}</option>`).join('')}</select><span class="catalogCount">${visible.length} von ${db.catalog.length} Positionen</span></div>
  <div class="card">
    <div class="catalogHead">
      <span>Artikel</span><span>Bezeichnung</span><span>Kategorie</span><span>Einheit</span><span>VK netto</span><span>EK</span><span>Marge</span><span></span>
    </div>
    <div class="catalogRows">
      ${visible.map(x=>`
        <div class="catalogRow">
          <input value="${esc(x.article)}" onchange="catalogChange(${x._i},'article',this.value)">
          <input value="${esc(x.name)}" onchange="catalogChange(${x._i},'name',this.value)">
          <input value="${esc(x.category||'Allgemein')}" onchange="catalogChange(${x._i},'category',this.value)" placeholder="z. B. Material">
          <input value="${esc(x.unit)}" onchange="catalogChange(${x._i},'unit',this.value)">
          <input type="number" min="0" step="0.01" value="${x.price}" onchange="catalogChange(${x._i},'price',this.value)">
          <input type="number" min="0" step="0.01" value="${x.cost}" onchange="catalogChange(${x._i},'cost',this.value)">
          <span class="catalogMargin">${x.price?Math.round((x.price-x.cost)/x.price*100):0}%</span>
          <button class="ghost deleteCatalog" title="Position löschen" onclick="removeCatalog(${x._i})">×</button>
        </div>`).join('')||`<div class="empty compactEmpty"><h3>Keine Positionen gefunden</h3><p>Ändere die Suche oder lege eine neue Position an.</p></div>`}
    </div>
  </div>`
}
function filterCatalog(search,category,keepFocus=false){st.catalogSearch=search;st.catalogCategory=category;render();if(keepFocus)setTimeout(()=>{const input=document.querySelector('.catalogTools input');if(input){input.focus();input.setSelectionRange(search.length,search.length)}},0)}
function catalogChange(i,k,v){
  db.catalog[i][k]=['price','cost'].includes(k)?Number(v):v;
  save()
}
function addCatalog(){
  db.catalog.push({id:uid(),article:'',name:'Neue Leistung',category:'Allgemein',unit:'Stk.',price:0,cost:0});
  save();
  render()
}
function removeCatalog(i){
  if(!confirm('Position wirklich löschen?'))return;
  db.catalog.splice(i,1);
  save();
  render()
}
function csvCell(value){return `"${String(value??'').replace(/"/g,'""')}"`}
function exportCatalog(){
  const rows=[['Artikel','Bezeichnung','Kategorie','Einheit','VK netto','EK'],...db.catalog.map(x=>[x.article,x.name,x.category||'Allgemein',x.unit,x.price,x.cost])];
  const blob=new Blob([rows.map(row=>row.map(csvCell).join(';')).join('\n')],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download='easyoffer-preiskatalog.csv';a.click();URL.revokeObjectURL(url);toast('Katalog exportiert')
}
function splitCatalogLine(line,delimiter){
  const cells=[];let value='',quoted=false;
  for(let i=0;i<line.length;i++){const c=line[i];if(c==='"'){if(quoted&&line[i+1]==='"'){value+='"';i++}else quoted=!quoted}else if(c===delimiter&&!quoted){cells.push(value.trim());value=''}else value+=c}
  cells.push(value.trim());return cells
}
function catalogNumber(value){
  let n=String(value??'').replace(/[^0-9,.-]/g,'');
  if(n.includes(',')&&n.includes('.'))n=n.lastIndexOf(',')>n.lastIndexOf('.')?n.replace(/\./g,'').replace(',','.'):n.replace(/,/g,'');
  else if(n.includes(','))n=n.replace(',','.');
  return Number(n)||0
}
function importCatalog(){
  const input=document.createElement('input');input.type='file';input.accept='.csv,.txt,.json,text/csv,application/json';
  input.onchange=()=>{const file=input.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{
    try{
      let entries=[];
      if(file.name.toLowerCase().endsWith('.json')){const raw=JSON.parse(reader.result);entries=Array.isArray(raw)?raw:(raw.catalog||[])}
      else{const lines=String(reader.result).replace(/^\uFEFF/,'').split(/\r?\n/).filter(Boolean);if(lines.length<2)throw Error('empty');const delimiter=lines[0].includes(';')?';':lines[0].includes('\t')?'\t':',';const head=splitCatalogLine(lines[0],delimiter).map(x=>x.toLowerCase().replace(/[^a-z0-9äöüß]/g,''));const col=(...names)=>head.findIndex(x=>names.includes(x));const article=col('artikel','artikelnr','artikelnummer','articleno','sku'),name=col('bezeichnung','name','artikelbezeichnung','description'),category=col('kategorie','category','gruppe'),unit=col('einheit','unit'),price=col('vknetto','verkaufspreis','preis','price'),cost=col('ek','einkaufspreis','cost');entries=lines.slice(1).map(line=>{const cells=splitCatalogLine(line,delimiter);return {article:cells[article<0?0:article],name:cells[name<0?1:name],category:cells[category],unit:cells[unit<0?2:unit],price:cells[price<0?3:price],cost:cells[cost<0?4:cost]}})}
      const items=entries.map(x=>({id:uid(),article:x.article||x.articleNo||'',name:x.name||x.bezeichnung||'',category:x.category||x.kategorie||'Allgemein',unit:x.unit||x.einheit||'Stk.',price:catalogNumber(x.price??x.vk),cost:catalogNumber(x.cost??x.ek)})).filter(x=>x.name);
      if(!items.length)throw Error('no items');items.forEach(item=>{const old=item.article&&db.catalog.find(x=>x.article===item.article);old?Object.assign(old,item,{id:old.id}):db.catalog.push(item)});save();render();toast(`${items.length} Artikel wurden importiert bzw. aktualisiert.`)
    }catch(error){toast('Die Datei konnte nicht gelesen werden.')}
  };reader.readAsText(file,'utf-8')};input.click()
}
function stats(){
  const total=db.offers.length;
  const accepted=db.offers.filter(o=>o.status==='angenommen');
  const volume=db.offers.reduce((a,o)=>a+net(o),0);
  const profitTotal=db.offers.reduce((a,o)=>a+profit(o),0);
  const avg=total?volume/total:0;
  const winRate=total?Math.round(accepted.length/total*100):0;
  const now=new Date();
  const months=Array.from({length:6},(_,i)=>{
    const d=new Date(now.getFullYear(),now.getMonth()-5+i,1);
    const month=d.toLocaleDateString(db.settings.language==='en'?'en-US':'de-DE',{month:'short'}).replace('.','');
    const value=db.offers.filter(o=>{const x=new Date(o.created);return x.getFullYear()===d.getFullYear()&&x.getMonth()===d.getMonth()}).reduce((sum,o)=>sum+net(o),0);
    return {month,value};
  });
  const maxMonth=Math.max(1,...months.map(m=>m.value));
  const pipeline=['entwurf','offen','angenommen','abgelehnt'].map(status=>{
    const offers=db.offers.filter(o=>o.status===status);
    return {status,count:offers.length,value:offers.reduce((sum,o)=>sum+net(o),0)};
  });
  const maxPipeline=Math.max(1,...pipeline.map(p=>p.value));
  return `<div class="top analyticsTop">
    <div><span class="eyebrow">AUSWERTUNG</span><h1>Deine Zahlen.</h1><p class="lead">Großer Überblick über Umsatz, Pipeline und Abschlussrate.</p></div>
    <button class="ghost" onclick="exportData()">Daten exportieren</button>
  </div>
  <section class="analyticsSummary">
    <div class="analysisHero card"><span class="eyebrow">ANGEBOTSVOLUMEN</span><strong>${eur(volume)}</strong><p>Gesamter Nettowert aller Angebote.</p><div class="analysisHeroMeta"><span>${total} Angebote</span><span>${eur(avg)} Durchschnitt</span></div></div>
    <div class="metric card"><small>ABSCHLUSSQUOTE</small><strong>${winRate}%</strong><span>Von allen Angeboten angenommen.</span></div>
    <div class="metric card"><small>AUFTRÄGE GEWONNEN</small><strong>${accepted.length}</strong><span>${eur(accepted.reduce((sum,o)=>sum+net(o),0))} netto</span></div>
    <div class="metric card"><small>DECKUNGSBEITRAG</small><strong>${eur(profitTotal)}</strong><span>Über alle Angebote</span></div>
  </section>
  <section class="analyticsGrid">
    <div class="card chartCard">
      <div class="chartHead"><div><span class="eyebrow">LETZTE 6 MONATE</span><h2>Umsatzentwicklung</h2></div><b>${eur(volume)}</b></div>
      ${volume?`<div class="revenueChart">${months.map(m=>`<div class="chartColumn"><div class="chartValue">${m.value?eur(m.value):''}</div><i style="height:${Math.max(7,Math.round(m.value/maxMonth*100))}%"></i><span>${m.month}</span></div>`).join('')}</div>`:`<div class="chartEmpty">Noch keine Daten für das Diagramm.</div>`}
    </div>
    <div class="card pipelineCard">
      <div class="chartHead"><div><span class="eyebrow">VERTRIEB</span><h2>Pipeline</h2></div><b>${total}</b></div>
      <p class="lead smallLead">Wert nach Angebotsstatus.</p>
      <div class="pipelineRows">${pipeline.map(p=>`<div class="pipelineRow"><div><b>${statusLabel(p.status)}</b><small>${p.count} Angebot${p.count===1?'':'e'}</small></div><div class="pipelineTrack"><i class="${p.status}" style="width:${Math.round(p.value/maxPipeline*100)}%"></i></div><strong>${eur(p.value)}</strong></div>`).join('')}</div>
    </div>
  </section>`
}
function settings(){
  const s=db.settings;
  const tabs=[['company','Unternehmen'],['team','Team'],['design','Design'],['offers','Angebote'],['email','E-Mail'],['ai','KI'],['notifications','Benachrichtigungen'],['data','Daten & Sicherheit']];
  return `<div class="top">
    <div>
      <span class="eyebrow">EINSTELLUNGEN</span>
      <h1>EasyOffer anpassen.</h1>
      <p class="lead">Deine Daten, Preise und Vorlagen.</p>
    </div>
    <button class="primary" onclick="saveSettings()">Speichern</button>
  </div>
  <div class="settingsTabs">${tabs.map(t=>`<button class="${st.settingsTab===t[0]?'active':''}" onclick="settingsTab('${t[0]}')">${t[1]}</button>`).join('')}</div>
  <div class="settingsBody">${settingsContent()}</div>`
}
function settingsTab(t){
  st.settingsTab=t;
  render()
}
function settingsContent(){
  const s=db.settings;
  if(st.settingsTab==='company')return `<div class="card formgrid">
    ${field('Firmenname','company',s.company,'Musterbetrieb GmbH')}
    ${field('Inhaber / Ansprechpartner','owner',s.owner,'Max Mustermann')}
    ${field('Adresse','address',s.address,'Musterstraße 1, 12345 Musterstadt')}
    ${field('E-Mail','email',s.email,'info@firma.de')}
    ${field('Telefon','phone',s.phone,'01234 56789')}
    ${field('Website','website',s.website,'www.firma.de')}
    ${field('Steuernummer','taxNo',s.taxNo,'123/456/78901')}
    ${field('USt-IdNr.','vatId',s.vatId,'DE123456789')}
    ${field('Bankverbindung','bank',s.bank,'IBAN ...')}
    ${field('Logo URL','logo',s.logo,'https://...')}
  </div>`;
  if(st.settingsTab==='team')return `<div class="card teamCard"><span class="eyebrow">BETRIEB & MITARBEITER</span><h2>${esc(cloud.workspace?.name||s.company||'Mein Betrieb')}</h2><p class="lead">${cloud.workspace?.role==='owner'?'Du bist Inhaber. Erstelle einen sicheren Einladungslink für Mitarbeiter.':'Du arbeitest als Mitarbeiter in diesem Betrieb.'}</p>${cloud.workspace?.role==='owner'?`<div class="inviteForm"><label class="field"><span>E-Mail des Mitarbeiters</span><input id="inviteEmail" type="email" placeholder="mitarbeiter@betrieb.de"></label><button class="primary" onclick="createInvite()">Einladung erstellen</button></div>${cloud.inviteLink?`<div class="inviteLink"><b>Einladungslink bereit</b><input readonly value="${esc(cloud.inviteLink)}"><button class="ghost" onclick="copyInvite()">Link kopieren</button><small>Sende diesen Link an den Mitarbeiter. Der Link ist nur für diese E-Mail gültig.</small></div>`:''}`:`<div class="aiBox"><b>Gemeinsame Betriebsdaten</b><p>Angebote, Kunden, Katalog und Kalender werden mit deinem Betrieb geteilt.</p></div>`}</div>`;
  if(st.settingsTab==='design')return `<div class="card formgrid">
    <label class="field"><span>Theme</span><select id="theme"><option value="system" ${s.theme==='system'?'selected':''}>System (automatisch)</option><option value="light" ${s.theme==='light'?'selected':''}>Hell</option><option value="dark" ${s.theme==='dark'?'selected':''}>Dunkel</option></select></label>
    <label class="field"><span>Farbvorlage</span><select id="colorPreset" onchange="applyColorPreset(this.value)">${[['green','Grün'],['blue','Blau'],['violet','Violett'],['orange','Orange'],['graphite','Graphit'],['custom','Eigene Farbe']].map(([v,l])=>`<option value="${v}" ${s.colorPreset===v?'selected':''}>${l}</option>`).join('')}</select></label>
    <label class="field"><span>Akzentfarbe</span><input id="accent" type="color" value="${s.accent}" oninput="applyColorPreset('custom',this.value)"></label>
    <label class="field"><span>Dichte</span><select id="density"><option value="normal" ${s.density==='normal'?'selected':''}>Normal</option><option value="compact" ${s.density==='compact'?'selected':''}>Kompakt</option></select></label>
    <label class="field"><span>Sprache</span><select id="language"><option value="de" ${s.language==='de'?'selected':''}>Deutsch</option><option value="en" ${s.language==='en'?'selected':''}>English</option></select></label>
  </div>`;
  if(st.settingsTab==='offers')return `<div class="card formgrid">
    ${field('Standard-Titel für Angebote','offerTitle',s.offerTitle||'Angebot','z. B. Angebot – Modernisierung')}
    <label class="field"><span>MwSt. (%)</span><input id="vat" type="number" value="${s.vat}"></label>
    <label class="field"><span>Angebotsnummer Präfix</span><input id="offerPrefix" value="${esc(s.offerPrefix)}"></label>
    <label class="field"><span>Nächste Angebotsnummer</span><input id="offerNext" type="number" value="${s.offerNext}"></label>
    <label class="field"><span>Gültigkeit (Tage)</span><input id="offerValidity" type="number" value="${s.offerValidity}"></label>
    <label class="field"><span>Zahlungsziel (Tage)</span><input id="paymentTerm" type="number" value="${s.paymentTerm}"></label>
    ${textareaField('Einleitung im PDF','offerIntro',s.offerIntro||'Vielen Dank für Ihre Anfrage. Gern unterbreiten wir Ihnen folgendes Angebot.')}
    ${textareaField('Footer','offerFooter',s.offerFooter)}
    ${textareaField('Bedingungen','offerTerms',s.offerTerms)}
  </div>`;
  if(st.settingsTab==='email')return `<div class="card">
    ${field('Betreff','emailSubject',s.emailSubject,'Ihr Angebot von {firma}')}
    ${textareaField('E-Mail Text','emailText',s.emailText)}
    ${textareaField('Signatur','emailSignature',s.emailSignature)}
  </div>`;
  if(st.settingsTab==='ai')return `<div class="card">
    <label class="toggle"><input id="aiSuggestions" type="checkbox" ${s.aiSuggestions?'checked':''}><span>KI-Vorschläge aktivieren</span></label>
    <div class="aiBox"><b>✦ Aktueller KI-Modus</b><p>EasyOffer nutzt momentan eine lokale Erkennung für typische Kundenanfragen. Eine echte API-Anbindung kann später ergänzt werden.</p></div>
  </div>`;
  if(st.settingsTab==='data')return `<div class="card dataSettings"><h2>Deine Daten sichern</h2><p class="lead">Aktuell liegen deine Daten nur in diesem Browser. Speichere regelmäßig ein Backup, bevor wir später die Cloud-Anmeldung ergänzen.</p><div class="toolbar"><button class="primary" onclick="exportData()">⇩ Backup herunterladen</button><button class="ghost" onclick="importData()">⇧ Backup wiederherstellen</button></div><div class="aiBox"><b>Datenschutz-Hinweis</b><p>Die aktuelle MVP-Version sendet keine Angebots- oder Kundendaten an einen Server. Für die spätere Verkaufsversion ergänzen wir Login, Cloud-Speicher und ein DSGVO-Konzept.</p></div></div>`;
  return `<div class="card">
    <label class="toggle"><input id="notifications" type="checkbox" ${s.notifications?'checked':''}><span>Benachrichtigungen aktivieren</span></label>
    <label class="toggle"><input id="autoFollowups" type="checkbox" ${s.autoFollowups?'checked':''}><span>Automatische Follow-ups vorbereiten</span></label>
  </div>`
}
function textareaField(label,id,value){
  return `<label class="field full"><span>${label}</span><textarea id="${id}">${esc(value||'')}</textarea></label>`
}function saveSettings(){
  const s=db.settings;
  ['company','owner','address','email','phone','website','taxNo','vatId','bank','logo','offerPrefix','offerTitle','offerIntro','offerFooter','offerTerms','emailSubject','emailText','emailSignature'].forEach(k=>{
    const el=document.getElementById(k);
    if(el)s[k]=el.value;
  });
  ['vat','offerNext','offerValidity','paymentTerm'].forEach(k=>{
    const el=document.getElementById(k);
    if(el)s[k]=Number(el.value);
  });
  ['theme','accent','density','language','colorPreset'].forEach(k=>{
    const el=document.getElementById(k);
    if(el)s[k]=el.value;
  });
  ['aiSuggestions','notifications','autoFollowups'].forEach(k=>{
    const el=document.getElementById(k);
    if(el)s[k]=!!el.checked;
  });
  s.next=s.offerNext;
  save();
  applyAppearance();
  toast('Einstellungen gespeichert');
  render()
}
function exportData(){
  const blob=new Blob([JSON.stringify(db,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download='easyoffer-backup.json';
  a.click();
  URL.revokeObjectURL(url);
  toast('Backup exportiert')
}
function importData(){
  const input=document.createElement('input');
  input.type='file';
  input.accept='.json,application/json';
  input.onchange=()=>{
    const f=input.files[0];
    if(!f)return;
    const r=new FileReader();
    r.onload=()=>{
      try{
        db=normalize(JSON.parse(r.result));
        save();
        render();
        toast('Backup importiert')
      }catch(e){
        toast('Datei ist ungültig')
      }
    };
    r.readAsText(f)
  };
  input.click()
}
function printOffer(){
  const o=st.o,s=db.settings,n=net(o),g=gross(o),offerNo=`${s.offerPrefix||'ANG-'}${o.no}`;
  const issued=new Date(o.created||Date.now()),validUntil=new Date(issued);validUntil.setDate(validUntil.getDate()+Number(o.validity||s.offerValidity||14));
  const dateFormat={day:'2-digit',month:'2-digit',year:'numeric'};
  const w=window.open('','_blank');
  if(!w){toast('Popup blockiert – bitte Popups erlauben');return}
  w.document.write(`<!doctype html>
<html lang="${esc(s.language||'de')}"><head><meta charset="utf-8"><title>Angebot ${esc(offerNo)} – ${esc(s.company)}</title>
<style>
@page{size:A4;margin:15mm}*{box-sizing:border-box}body{font:13px/1.55 Arial,Helvetica,sans-serif;color:#172033;margin:0;background:#fff}.page{max-width:800px;margin:0 auto}.header{display:flex;justify-content:space-between;gap:35px;border-bottom:3px solid #172033;padding-bottom:24px}.logo{display:block;max-width:185px;max-height:68px;object-fit:contain;margin-bottom:12px}.company{font-weight:800;font-size:18px}.muted{color:#637083}.offerBox{text-align:right;min-width:185px}.offerBox strong{display:block;font-size:26px;letter-spacing:.06em}.offerNo{font-size:16px;font-weight:800;margin:4px 0 12px}.addressRow{display:flex;justify-content:space-between;gap:30px;margin:32px 0 25px}.recipient{min-width:255px}.label{display:block;text-transform:uppercase;letter-spacing:.08em;font-size:10px;font-weight:800;color:#637083;margin-bottom:6px}.title{font-size:25px;line-height:1.2;margin:22px 0 10px}.intro{margin:0 0 25px;color:#334155}.request{background:#f5f7fa;border-left:3px solid #172033;padding:11px 14px;margin:20px 0 24px;color:#334155}table{width:100%;border-collapse:collapse;margin-top:18px}th{padding:10px 8px;text-align:left;background:#172033;color:#fff;font-size:11px;letter-spacing:.04em}td{padding:12px 8px;border-bottom:1px solid #dde3eb;vertical-align:top}.right{text-align:right}.summary{width:320px;margin:26px 0 0 auto}.summary div{display:flex;justify-content:space-between;padding:7px 0}.summary .grand{border-top:2px solid #172033;margin-top:4px;padding-top:12px;font-size:18px;font-weight:800}.conditions{margin-top:38px;border-top:1px solid #dde3eb;padding-top:18px}.conditions p{margin:7px 0}.footer{display:flex;justify-content:space-between;gap:24px;margin-top:38px;padding-top:14px;border-top:1px solid #dde3eb;font-size:10px;color:#637083}.footer div:last-child{text-align:right}@media print{body{font-size:12px}.page{max-width:none}.header{break-inside:avoid}tr{break-inside:avoid}}
</style></head><body><main class="page">
<header class="header"><div>${s.logo?`<img class="logo" src="${esc(s.logo)}">`:''}<div class="company">${esc(s.company)}</div><div class="muted">${esc(s.address).replace(/\n/g,'<br>')}<br>${esc(s.email)}${s.phone?` · ${esc(s.phone)}`:''}${s.website?`<br>${esc(s.website)}`:''}</div></div><div class="offerBox"><strong>ANGEBOT</strong><div class="offerNo">${esc(offerNo)}</div><div><span class="muted">Datum</span><br>${issued.toLocaleDateString(s.language==='en'?'en-GB':'de-DE',dateFormat)}</div></div></header>
<section class="addressRow"><div class="recipient"><span class="label">An</span><b>${esc(o.customer.name)}</b><br>${esc(o.customer.address).replace(/\n/g,'<br>')}<br>${esc(o.customer.email)}${o.customer.phone?`<br>${esc(o.customer.phone)}`:''}</div><div><span class="label">Angebotsdetails</span>${o.reference?`Ihre Referenz: ${esc(o.reference)}<br>`:''}Gültig bis: ${validUntil.toLocaleDateString(s.language==='en'?'en-GB':'de-DE',dateFormat)}<br>Zahlungsziel: ${Number(s.paymentTerm||14)} Tage</div></section>
<h1 class="title">${esc(o.title||s.offerTitle||'Angebot')}</h1><p class="intro">${esc(s.offerIntro||'Vielen Dank für Ihre Anfrage. Gern unterbreiten wir Ihnen folgendes Angebot.').replace(/\n/g,'<br>')}</p>${o.request?`<div class="request"><b>Ihre Anfrage</b><br>${esc(o.request).replace(/\n/g,'<br>')}</div>`:''}
<table><thead><tr><th>Position</th><th>Menge</th><th class="right">Einzelpreis netto</th><th class="right">Gesamt netto</th></tr></thead><tbody>${o.items.map((x,i)=>`<tr><td><span class="muted">${String(i+1).padStart(2,'0')}</span> &nbsp;${esc(x.name)}</td><td>${x.qty} ${esc(x.unit)}</td><td class="right">${eur(x.price)}</td><td class="right">${eur(x.qty*x.price)}</td></tr>`).join('')}</tbody></table>
<section class="summary"><div><span>Netto</span><b>${eur(n)}</b></div><div><span>MwSt. ${o.vat}%</span><b>${eur(n*o.vat/100)}</b></div><div class="grand"><span>Gesamtbetrag</span><b>${eur(g)}</b></div></section>
<section class="conditions"><p>Dieses Angebot ist ${Number(o.validity||s.offerValidity||14)} Tage gültig.</p><p>${esc(s.offerFooter||'').replace(/\n/g,'<br>')}</p>${s.offerTerms?`<p><b>Hinweise & Bedingungen</b><br>${esc(s.offerTerms).replace(/\n/g,'<br>')}</p>`:''}</section>
<footer class="footer"><div>${esc(s.company)}${s.taxNo?` · Steuernummer: ${esc(s.taxNo)}`:''}${s.vatId?` · USt-IdNr.: ${esc(s.vatId)}`:''}</div><div>${s.bank?esc(s.bank).replace(/\n/g,' · '):''}</div></footer>
</main><script>window.onload=()=>setTimeout(()=>window.print(),500);<\/script></body></html>`);
  w.document.close()
}
function applyColorPreset(preset,color){
  const accent=color||COLORS[preset]||db.settings.accent;
  db.settings.colorPreset=preset;
  db.settings.accent=accent;
  const input=document.getElementById('accent');
  if(input)input.value=accent;
  document.documentElement.style.setProperty('--accent',accent);
}
function applyAppearance(){
  const s=db.settings;
  const mode=s.theme||'system';
  const theme=mode==='system'&&(window.matchMedia?.('(prefers-color-scheme: dark)').matches)?'dark':mode==='system'?'light':mode;
  document.documentElement.dataset.theme=theme;
  document.documentElement.dataset.themeMode=mode;
  document.documentElement.dataset.density=s.density||'normal';
  document.documentElement.style.setProperty('--accent',s.accent||'#16a36a')
}
function localize(){
  document.documentElement.lang=db.settings.language||'de';
  if(db.settings.language!=='en')return;
  const walk=document.createTreeWalker(document.getElementById('app'),NodeFilter.SHOW_TEXT);
  const nodes=[];while(walk.nextNode())nodes.push(walk.currentNode);
  nodes.forEach(node=>node.nodeValue=tr(node.nodeValue));
  document.querySelectorAll('#app [placeholder]').forEach(el=>el.placeholder=tr(el.placeholder));
}
function render(){
  applyAppearance();
  if(cloud.onboarding){layout(onboardingPage());return}
  let c='';
  if(st.page==='home')c=home();
  else if(st.page==='new')c=wizard();
  else if(st.page==='offers')c=offers();
  else if(st.page==='calendar')c=calendarPage();
  else if(st.page==='customers')c=customers();
  else if(st.page==='catalog')c=catalogPage();
  else if(st.page==='stats')c=stats();
  else if(st.page==='settings')c=settings();
  else c=home();
  layout(c);
  localize()
}
window.addEventListener('beforeunload',()=>{
  if(st.o&&st.page==='new')persist()
});
Object.assign(window,{
  go,newOffer,saveCustomer,selectExistingCustomer,analyze,photos,back,
  chg,addItem,del,openOffer,filterOffers,setOfferStatus,duplicateCurrentOffer,planFollowUp,clearFollowUp,
  moveCalendar,addAppointment,removeAppointment,
  catalogChange,addCatalog,removeCatalog,importCatalog,exportCatalog,filterCatalog,
  settingsTab,saveSettings,applyColorPreset,exportData,importData,
  printOffer,markOpen,persist,authScreen,submitAuth,signOut,resetScreen,sendReset,passwordUpdateScreen,updatePassword,createInvite,copyInvite,onboardingBack,onboardingNext
});
bootApp();
