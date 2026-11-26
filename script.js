const chapters=[...document.querySelectorAll('.chapter')];
const dots=[...document.querySelectorAll('.progress-dots i')];
const chapterCount=document.getElementById('chapterCount');
function goToChapter(number){chapters.forEach((c,i)=>c.classList.toggle('active',i===number-1));dots.forEach((d,i)=>d.classList.toggle('on',i===number-1));chapterCount.textContent=`${String(number).padStart(2,'0')} / 05`;window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-next]').forEach(button=>button.addEventListener('click',()=>goToChapter(Number(button.dataset.next))));
// Flower messages
const flowerMessage=document.getElementById('flowerMessage');document.querySelectorAll('.flower').forEach(f=>f.addEventListener('click',()=>{flowerMessage.textContent=f.dataset.message;flowerMessage.classList.remove('pop');void flowerMessage.offsetWidth;flowerMessage.classList.add('pop')}));
// Photo captions
const memoryMessage=document.getElementById('memoryMessage');document.querySelectorAll('.polaroid').forEach(p=>p.addEventListener('click',()=>memoryMessage.textContent=p.dataset.caption));
// Letter
const letterOpen=document.getElementById('letterOpen'),letterContent=document.getElementById('letterContent');letterOpen.addEventListener('click',()=>{letterContent.classList.toggle('open');letterOpen.style.display=letterContent.classList.contains('open')?'none':'flex'});
// Music button: add your own music.mp3 file beside these files
const music=document.getElementById('bgMusic'),musicToggle=document.getElementById('musicToggle'),musicLabel=document.getElementById('musicLabel');musicToggle.addEventListener('click',async()=>{if(music.paused){try{await music.play();musicToggle.classList.add('playing');musicLabel.textContent='Pause our song'}catch(e){musicLabel.textContent='Add music.mp3 first'}}else{music.pause();musicToggle.classList.remove('playing');musicLabel.textContent='Play our song'}});
// Wish + confetti
const wishButton=document.getElementById('wishButton'),finalMessage=document.getElementById('finalMessage'),confetti=document.getElementById('confetti'),restart=document.getElementById('restart');wishButton.addEventListener('click',()=>{finalMessage.classList.add('show');restart.classList.add('show');wishButton.textContent='Wish sent into the universe ✨';wishButton.disabled=true;for(let i=0;i<65;i++){const piece=document.createElement('span');piece.style.left=Math.random()*100+'vw';piece.style.background=['#e8a8b8','#f4d58b','#b9d1b2','#c9b4df','#f4bca5'][Math.floor(Math.random()*5)];piece.style.animationDelay=Math.random()*1.2+'s';piece.style.animationDuration=2.5+Math.random()*2+'s';confetti.appendChild(piece);setTimeout(()=>piece.remove(),5000)}});
restart.addEventListener('click',()=>{goToChapter(1);finalMessage.classList.remove('show');restart.classList.remove('show');wishButton.disabled=false;wishButton.textContent='I made a wish ✨';confetti.innerHTML='';letterContent.classList.remove('open');letterOpen.style.display='flex';flowerMessage.textContent='Choose a flower to uncover its note ✨';memoryMessage.textContent='Tap a photo for its little story ✨'});
