const DEPO_ANAHTARI="pinboard_pinler";

function pinleriGetir() {
    const kayitli=localStorage.getItem(DEPO_ANAHTARI);
    if (!kayitli) {
        return [];
    }
    return JSON.parse(kayitli);
}
function pinleriKaydet(pinler) { 
    const yazi=JSON.stringify(pinler);
    localStorage.setItem(DEPO_ANAHTARI,yazi);
}
function pinEkle(baslik,pano,link) {
    const pinler=pinleriGetir();
    const yeniPin={
       id:Date.now(),
       balik:baslik.trim(),
       pano:pano.trim() || "Genel",
       gorsel:link.trim()
     };
    pinler.unshift(yeniPin);
    pinleriKaydet(pinler);
    };
function kartlariCiz(hedefId){
    const kapsayici=document.getElementById(hedefId);
    if (!kapsayici) return;
    const pinler=pinleriGetir();
    kapsayici.innerHTML="";
    pinler.forEach(function(pin){
    const kart=document.createElement("div");
    kart.className ="kart";
    kart.innerHTML = `
            <img src="${pin.gorsel}" alt="${pin.baslik}">
            <p class="kart-baslik">${pin.baslik}</p>
        `;
        kapsayici.appendChild(kart);
    });
    }


