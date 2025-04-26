// Sahte veriler
let bakiye = 25400;
let hesaplar = ["TL Hesabı", "Dolar Hesabı"];
let islemler = [];

function hesapGoruntule() {
  alert("Hesaplarınız: \n" + hesaplar.join("\n"));
}

function paraYatirma() {
  let tutar = Number(prompt("Yatırmak istediğiniz tutarı girin:"));
  if (isNaN(tutar) || tutar <= 0) {
    alert("Geçersiz tutar.");
    return;
  }
  bakiye += tutar;
  islemler.push(`+${tutar} TL yatırıldı`);
  alert(`${tutar} TL yatırıldı. Yeni bakiye: ${bakiye} TL`);
  guncelleBakiye();
}

function paraCekme() {
  let tutar = Number(prompt("Çekmek istediğiniz tutarı girin:"));
  if (isNaN(tutar) || tutar <= 0 || tutar > bakiye) {
    alert("Geçersiz veya yetersiz bakiye.");
    return;
  }
  bakiye -= tutar;
  islemler.push(`-${tutar} TL çekildi`);
  alert(`${tutar} TL çekildi. Yeni bakiye: ${bakiye} TL`);
  guncelleBakiye();
}

function havale() {
  let hesapNo = prompt("Havale yapılacak hesap numarasını girin:");
  let tutar = Number(prompt("Gönderilecek tutarı girin:"));
  if (isNaN(tutar) || tutar <= 0 || tutar > bakiye) {
    alert("Geçersiz işlem.");
    return;
  }
  bakiye -= tutar;
  islemler.push(`Havale: ${hesapNo} numaralı hesaba ${tutar} TL gönderildi`);
  alert(`Havale tamamlandı. Yeni bakiye: ${bakiye} TL`);
  guncelleBakiye();
}

function eft() {
  let iban = prompt("EFT yapılacak IBAN girin:");
  let tutar = Number(prompt("Gönderilecek tutarı girin:"));
  if (isNaN(tutar) || tutar <= 0 || tutar > bakiye) {
    alert("Geçersiz işlem.");
    return;
  }
  let eftUcreti = 10; // Sabit EFT ücreti
  bakiye -= tutar + eftUcreti;
  islemler.push(
    `EFT: ${iban} IBAN'a ${tutar} TL gönderildi (Ücret: ${eftUcreti} TL)`
  );
  alert(`EFT tamamlandı. Yeni bakiye: ${bakiye} TL`);
  guncelleBakiye();
}

function hesapListele() {
  alert("Mevcut Hesaplar:\n" + hesaplar.join("\n"));
}

function hesapEkle() {
  let yeniHesap = prompt("Yeni hesap türü girin (TL / USD / EUR):");
  if (yeniHesap) {
    hesaplar.push(yeniHesap + " Hesabı");
    alert(`${yeniHesap} hesabı eklendi.`);
  }
}

function hesapSil() {
  let silinecek = prompt("Silmek istediğiniz hesap adını girin:");
  const index = hesaplar.indexOf(silinecek);
  if (index !== -1) {
    hesaplar.splice(index, 1);
    alert(`${silinecek} hesabı silindi.`);
  } else {
    alert("Hesap bulunamadı.");
  }
}

function tlCevir() {
  let miktar = Number(prompt("Çevirmek istediğiniz döviz tutarını girin:"));
  let kur = 30; // Sabit döviz kuru örneği
  if (isNaN(miktar) || miktar <= 0) {
    alert("Geçersiz tutar.");
    return;
  }
  let tl = miktar * kur;
  alert(`${miktar} döviz, ${tl} TL'ye çevrildi.`);
}

function farkliSubeHesabi() {
  let subeAdi = prompt("Şube adını girin:");
  alert(`${subeAdi} şubesindeki hesaplar görüntüleniyor... (Sahte veri)`);
}

function islemGecmisiniGor() {
  if (islemler.length === 0) {
    alert("İşlem geçmişiniz boş.");
    return;
  }
  alert("İşlem Geçmişi:\n" + islemler.join("\n"));
}

function ucretSifirlama() {
  alert("İşlem ücretleri sıfırlandı. (Sadece frontend görüntüsü)");
}

function dinamikHesaplama() {
  let tutar = Number(prompt("İşlem tutarını girin:"));
  let ucret = tutar * 0.01; // %1 ücret
  alert(`İşlem ücreti: ${ucret.toFixed(2)} TL`);
}

function calisanEkle() {
  let ad = prompt("Yeni çalışanın adını girin:");
  alert(`${ad} adlı çalışan sisteme eklendi.`);
}

function calisanCikar() {
  let ad = prompt("Çıkarılacak çalışanın adını girin:");
  alert(`${ad} adlı çalışan sistemden çıkarıldı.`);
}

function cikisYap() {
  alert("Çıkış yapılıyor...");
  location.reload();
}

// Bakiye ekranda otomatik güncellenecek
function guncelleBakiye() {
  const bakiyeElem = document.querySelector(".balance-amount");
  if (bakiyeElem) {
    bakiyeElem.textContent = `${bakiye.toLocaleString()} ₺`;
  }
}
