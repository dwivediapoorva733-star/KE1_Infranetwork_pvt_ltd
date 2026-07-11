const bot=document.getElementById('chatbot');
document.getElementById('chat-toggle').onclick=()=>bot.style.display='block';
document.getElementById('close-chat').onclick=()=>bot.style.display='none';
setTimeout(()=>{bot.style.display='block';},3000);
function openEnquiry(){window.location.href='enquiry.html';}
function openWhatsApp(){window.open('https://wa.me/918433401835','_blank');}
