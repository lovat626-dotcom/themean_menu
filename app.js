const dialog=document.querySelector('#order-dialog');
const context=MenuOrdering.resolve(location.search);
function bilingual(element,zh,en){
  element.replaceChildren(document.createTextNode(zh));
  const translation=document.createElement('span');
  translation.className='en';translation.lang='en';translation.textContent=en;
  element.append(translation);
}
const caption=document.querySelector('.order-caption');
const orderLink=document.querySelector('#order-link');
const orderTitle=document.querySelector('#order-title');
const orderText=document.querySelector('#order-explanation');
const orderEnglish=document.querySelector('#order-explanation-en');
const status=document.querySelector('#order-context');
if(context.kind==='table'){
  status.hidden=false;
  document.querySelectorAll('[data-order]').forEach(button=>bilingual(button,'前往點餐 ↗','Order Now'));
  bilingual(caption,`目前桌號：${context.table}`,`Table ${context.table}`);
  bilingual(status,`內用桌號 ${context.table}`,`Dining at table ${context.table}`);
  bilingual(orderTitle,`${context.table} 桌內用點餐`,`Dine-in · Table ${context.table}`);
  orderText.textContent=`你即將前往 ${context.table} 桌的 iCHEF 點餐頁。請確認與桌上號碼一致；若不一致，請重新掃描自己桌上的 QR code。`;
  orderEnglish.textContent=`You are ordering for table ${context.table}. Please check that this matches your table. If not, scan your own table’s QR code.`;
  bilingual(orderLink,`前往 ${context.table} 桌點餐 ↗`,`Order for Table ${context.table}`);
}else if(context.kind==='invalid'){
  status.hidden=false;
  document.querySelectorAll('[data-order]').forEach(button=>bilingual(button,'查看點餐提示','Ordering Information'));
  bilingual(caption,'桌號無法辨識，請重掃桌上 QR code','Unrecognized table. Scan your table’s QR code.');
  bilingual(status,'桌號無法辨識','Unrecognized table');
  bilingual(orderTitle,'請重新掃描桌牌','Please Scan Your Table’s QR Code');
  orderText.textContent='這個網址的桌號無法辨識。請掃描自己桌上的 QR code，或請店員協助。';
  orderEnglish.textContent='This link has an unrecognized table number. Please scan your table’s QR code or ask our staff for help.';
  orderLink.hidden=true;
}else{
  document.querySelectorAll('[data-order]').forEach(button=>bilingual(button,'前往點餐 ↗','Order Now'));
  bilingual(caption,'內用請掃描桌上 QR code','For dine-in, scan your table’s QR code.');
  status.hidden=true;
}
if(context.url){orderLink.href=context.url;orderLink.hidden=false;}
document.querySelectorAll('[data-order]').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
const links=[...document.querySelectorAll('.category-nav a[href^="#"]')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}},{rootMargin:'-65px 0px -55% 0px',threshold:0});
document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
