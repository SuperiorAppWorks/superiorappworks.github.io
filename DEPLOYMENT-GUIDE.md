# Superior App Works — GitHub Pages yayın rehberi

Bu paket `superiorappworks.com` için hazırlanmıştır.

## Hedef adresler
- Kurumsal ana sayfa: https://superiorappworks.com/
- Sikke: https://superiorappworks.com/sikke/
- Gizlilik: https://superiorappworks.com/sikke/privacy/
- Koşullar: https://superiorappworks.com/sikke/terms/
- Destek: https://superiorappworks.com/sikke/support/
- app-ads.txt: https://superiorappworks.com/app-ads.txt

## ÖNEMLİ — silinmemesi gereken mevcut kök dosyalar
Bu ZIP'e bilerek eklenmedi:
1. `app-ads.txt` — mevcut gerçek AdMob yayıncı satırın korunmalı.
2. Google Search Console doğrulama HTML dosyası — mevcutsa korunmalı.
3. GitHub'ın domain doğrulaması için DNS'e eklenen TXT kaydı DNS'te kalmalı.

## GitHub'a yükleme
1. `SuperiorAppWorks/superiorappworks.github.io` reposunu aç.
2. `Add file` → `Upload files`.
3. ZIP'i GitHub'a doğrudan yükleme. ZIP'i bilgisayarında aç.
4. Paket içindeki dosya ve klasörleri repo köküne aynı yapıyla yükle:
   - `index.html`
   - `404.html`
   - `CNAME`
   - `robots.txt`
   - `sitemap.xml`
   - `assets/`
   - `sikke/`
   - `sikke-legal/`
5. `app-ads.txt` ve mevcut Google doğrulama dosyasını silme.
6. Commit mesajı: `Launch Superior App Works site and Sikke pages`
7. Commit et.
8. Actions/Pages dağıtımının bitmesini bekle.

## Yayından sonra test
Tarayıcıda şu adresleri tek tek aç:
- https://superiorappworks.com/
- https://superiorappworks.com/sikke/
- https://superiorappworks.com/sikke/privacy/
- https://superiorappworks.com/sikke/terms/
- https://superiorappworks.com/sikke/support/
- https://superiorappworks.com/app-ads.txt

Eski adreslerin de yönlendiğini kontrol et:
- /sikke-legal/index.html → /sikke/
- /sikke-legal/privacy.html → /sikke/privacy/
- /sikke-legal/terms.html → /sikke/terms/

## Google tarafı
Site düzgün açıldıktan sonra:
1. Search Console'a `superiorappworks.com` Domain property ekle ve DNS TXT ile doğrula.
2. Google Auth Platform → Branding:
   - Homepage: https://superiorappworks.com/sikke/
   - Privacy policy: https://superiorappworks.com/sikke/privacy/
   - Terms of service: https://superiorappworks.com/sikke/terms/
   - Authorized domain: superiorappworks.com
3. Play Console:
   - Website: https://superiorappworks.com/sikke/
   - Privacy policy: https://superiorappworks.com/sikke/privacy/
4. AdMob Privacy & Messaging:
   - Privacy URL'yi https://superiorappworks.com/sikke/privacy/ olarak güncelle.
5. Google Trust & Safety'nin mevcut e-posta zincirine, domain taşınması ve sahiplik doğrulaması tamamlandıktan sonra yanıt ver.

## Son not
Yasal metinler mevcut Sikke teknik akışlarına göre güncellendi. Resmî hukuk danışmanlığı niteliğinde değildir; şirket statüsü, vergi/ünvan veya özel mevzuat ayrıntıları eklenecekse ayrıca hukuk danışmanıyla kontrol edilmesi uygundur.
