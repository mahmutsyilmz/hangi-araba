# 🗺️ Mantıklı (Hangi Araba) - Detaylı Geliştirme Roadmap

> **Proje:** Araç karşılaştırma ve öneri uygulaması  
> **Teknoloji:** Next.js 16, TypeScript, TailwindCSS, React 19  
> **Durum:** Başlangıç aşaması (MVP geliştirme)

---

## 📋 İçindekiler

1. [Faz 0: Proje Kurulumu & Altyapı](#faz-0-proje-kurulumu--altyapı)
2. [Faz 1: Veri Katmanı & API Entegrasyonu](#faz-1-veri-katmanı--api-entegrasyonu)
3. [Faz 2: UI/UX Bileşenleri & Tasarım Sistemi](#faz-2-uiux-bileşenleri--tasarım-sistemi)
4. [Faz 3: Profil & Kullanıcı Girişi](#faz-3-profil--kullanıcı-girişi)
5. [Faz 4: Araç Seçimi & Katalog](#faz-4-araç-seçimi--katalog)
6. [Faz 5: Karşılaştırma Motoru & Skorlama](#faz-5-karşılaştırma-motoru--skorlama)
7. [Faz 6: Sonuç Ekranı & Öneri](#faz-6-sonuç-ekranı--öneri)
8. [Faz 7: Paylaşım & PDF](#faz-7-paylaşım--pdf)
9. [Faz 8: Test & Optimizasyon](#faz-8-test--optimizasyon)
10. [Faz 9: Deployment & Launch](#faz-9-deployment--launch)

---

## Faz 0: Proje Kurulumu & Altyapı

**Süre Tahmini:** 2-3 gün  
**Öncelik:** 🔴 Yüksek

### 0.1 Proje Yapısı Kurulumu
- [x] `src/features/` klasör yapısı oluştur
  - [x] `src/features/profile/` - Profil özellikleri
  - [x] `src/features/vehicle-selection/` - Araç seçimi
  - [x] `src/features/comparison/` - Karşılaştırma
  - [x] `src/features/results/` - Sonuç ekranı
  - [x] `src/features/sharing/` - Paylaşım
- [x] `src/components/` - Paylaşılan bileşenler
  - [x] `src/components/ui/` - UI primitives (Button, Input, Select, etc.)
  - [x] `src/components/layout/` - Layout bileşenleri
- [x] `src/lib/` - Yardımcı fonksiyonlar
  - [x] `src/lib/utils.ts` - Genel yardımcılar
  - [x] `src/lib/constants.ts` - Sabitler
- [x] `src/types/` - TypeScript tip tanımları
  - [x] `src/types/vehicle.ts` - Araç tipleri
  - [x] `src/types/profile.ts` - Profil tipleri
  - [x] `src/types/comparison.ts` - Karşılaştırma tipleri
- [x] `src/hooks/` - Custom React hooks
- [x] `src/store/` veya `src/context/` - State yönetimi (Context API veya Zustand)

### 0.2 Bağımlılıklar & Konfigürasyon
- [ ] `.env.example` dosyası oluştur
- [ ] CarQuery API anahtarı için env değişkeni ekle
- [ ] ESLint konfigürasyonunu projeye göre özelleştir
- [ ] Prettier konfigürasyonu ekle (opsiyonel)
- [ ] Git hooks (husky + lint-staged) kurulumu
- [ ] Path alias'ları test et (`@/` imports)

### 0.3 Tasarım Sistemi Temelleri
- [ ] TailwindCSS konfigürasyonunu özelleştir
- [ ] Renk paleti tanımla (primary, secondary, accent, etc.)
- [ ] Tipografi ayarları (font sizes, weights)
- [ ] Spacing scale tanımla
- [ ] Dark mode desteği hazırlığı (opsiyonel)

### 0.4 Dokümantasyon
- [ ] `CONTRIBUTING.md` oluştur
- [ ] `ARCHITECTURE.md` oluştur (klasör yapısı açıklaması)
- [ ] README.md'yi projeye göre güncelle

---

## Faz 1: Veri Katmanı & API Entegrasyonu

**Süre Tahmini:** 5-7 gün  
**Öncelik:** 🔴 Yüksek

### 1.1 CarQuery API Entegrasyonu
- [ ] CarQuery API client oluştur (`src/lib/api/carquery.ts`)
- [ ] API key yönetimi ve error handling
- [ ] Rate limiting ve caching stratejisi
- [ ] API response type tanımları
- [ ] Mock data fallback mekanizması

### 1.2 Veri Modelleri
- [ ] `Vehicle` type tanımı (tüm teknik özellikler)
  - [ ] Güç-aktarma özellikleri
  - [ ] Şanzıman & çekiş
  - [ ] Performans metrikleri
  - [ ] Ölçüler
  - [ ] Ağırlık/kapasiteler
  - [ ] Tüketim verileri
  - [ ] Gövde bilgileri
  - [ ] Güvenlik skorları (opsiyonel)
  - [ ] Donanım etiketleri
- [ ] `VehicleTrim` type tanımı
- [ ] `VehicleComparison` type tanımı
- [ ] Veri normalizasyon fonksiyonları

### 1.3 Veri Servisleri
- [ ] `src/services/vehicleService.ts` - Araç verisi çekme
  - [ ] Markaları getir
  - [ ] Modelleri getir (markaya göre)
  - [ ] Yılları getir (marka+modele göre)
  - [ ] Trim'leri getir (marka+model+yıla göre)
  - [ ] Trim detaylarını getir
- [ ] `src/services/comparisonService.ts` - Karşılaştırma işlemleri
- [ ] Error handling ve retry mekanizması
- [ ] Loading states yönetimi

### 1.4 Veri Cache Stratejisi
- [ ] React Query veya SWR kurulumu
- [ ] Cache invalidation stratejisi
- [ ] Static data caching (markalar, modeller)
- [ ] Dynamic data caching (trim detayları)

### 1.5 Fallback & Mock Data
- [ ] Mock vehicle data seti oluştur (en popüler 30 marka/model)
- [ ] CSV seed data hazırlığı (opsiyonel)
- [ ] "Veri bulunamadı" durumları için fallback UI

---

## Faz 2: UI/UX Bileşenleri & Tasarım Sistemi

**Süre Tahmini:** 7-10 gün  
**Öncelik:** 🟡 Orta-Yüksek

### 2.1 Temel UI Bileşenleri
- [ ] `Button` - Primary, secondary, outline varyantları
- [ ] `Input` - Text, number, textarea
- [ ] `Select` - Dropdown, searchable select
- [ ] `Card` - Container bileşeni
- [ ] `Badge` - Etiket gösterimi
- [ ] `Tooltip` - Bilgi tooltip'leri
- [ ] `Alert` - Uyarı mesajları
- [ ] `Loading` - Spinner, skeleton loader
- [ ] `EmptyState` - Boş durum gösterimi
- [ ] `ErrorBoundary` - Hata yakalama

### 2.2 Form Bileşenleri
- [ ] `FormField` - Label + Input + Error wrapper
- [ ] `FormSelect` - Label + Select + Error wrapper
- [ ] `FormRadio` - Radio button grubu
- [ ] `FormCheckbox` - Checkbox grubu
- [ ] Form validation helper'ları
- [ ] Form state yönetimi (React Hook Form veya native)

### 2.3 Özel Bileşenler
- [ ] `VehicleCard` - Araç kartı gösterimi
- [ ] `ComparisonTable` - Karşılaştırma tablosu
- [ ] `ScoreCard` - Skor kartı (TCO, Durum, Uygunluk)
- [ ] `FeatureList` - Özellik listesi
- [ ] `ProgressBar` - İlerleme göstergesi
- [ ] `ShareButton` - Paylaşım butonu

### 2.4 Layout Bileşenleri
- [ ] `Header` - Üst navigasyon
- [ ] `Footer` - Alt bilgi
- [ ] `Container` - İçerik wrapper
- [ ] `Section` - Bölüm wrapper
- [ ] `Grid` - Responsive grid sistemi

### 2.5 Responsive Tasarım
- [ ] Mobile-first yaklaşım
- [ ] Breakpoint'ler: sm, md, lg, xl
- [ ] Touch-friendly buton boyutları
- [ ] Mobile navigation (hamburger menu gerekirse)

### 2.6 Erişilebilirlik (A11y)
- [ ] ARIA label'ları
- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Screen reader desteği
- [ ] Color contrast kontrolü

---

## Faz 3: Profil & Kullanıcı Girişi

**Süre Tahmini:** 4-5 gün  
**Öncelik:** 🔴 Yüksek

### 3.1 Profil Formu
- [ ] `ProfileForm` bileşeni oluştur
- [ ] Yıllık km input (number, min/max validation)
- [ ] Kullanım tipi seçimi (şehir içi/dışı oranı)
  - [ ] Slider veya input ile oran girişi
  - [ ] Örnek: %70 şehir içi, %30 şehir dışı
- [ ] "Olmazsa olmaz" tercihleri
  - [ ] Yakıt türü (benzin, dizel, hibrit, elektrik)
  - [ ] Şanzıman (manuel, otomatik, CVT, DSG)
  - [ ] Gövde tipi (sedan, hatchback, SUV, vb.)
- [ ] Form validation
- [ ] Form state yönetimi (Context veya state management)

### 3.2 Profil State Yönetimi
- [ ] Profile context veya store oluştur
- [ ] Profile verilerini localStorage'a kaydet (anonim kullanım)
- [ ] Profile verilerini URL query params'a ekle (paylaşım için)
- [ ] Profile reset fonksiyonu

### 3.3 Profil Ekranı UI
- [ ] Açıklayıcı başlık ve alt başlık
- [ ] Form alanları düzeni
- [ ] Info tooltip'leri (varsayımlar için)
- [ ] "Devam Et" butonu (validation kontrolü ile)
- [ ] Progress indicator (1/4 adım)

### 3.4 Varsayımlar & Uyarılar
- [ ] Varsayılan yakıt fiyatları (benzin, dizel, LPG)
- [ ] "Gerçek kullanım sapması" bilgilendirmesi
- [ ] Info icon'ları ve tooltip içerikleri
- [ ] Şeffaf varsayım gösterimi

---

## Faz 4: Araç Seçimi & Katalog

**Süre Tahmini:** 8-10 gün  
**Öncelik:** 🔴 Yüksek

### 4.1 Kademeli Dropdown Sistemi
- [ ] `VehicleSelector` bileşeni
- [ ] Marka seçimi dropdown
  - [ ] API'den markaları çek
  - [ ] Searchable dropdown (opsiyonel)
  - [ ] Loading state
  - [ ] Error state
- [ ] Model seçimi dropdown
  - [ ] Marka seçilince aktif olur
  - [ ] Seçilen markaya göre modelleri çek
  - [ ] Dependent dropdown mantığı
- [ ] Yıl seçimi dropdown
  - [ ] Marka+model seçilince aktif olur
  - [ ] Yılları çek ve sırala
- [ ] Trim seçimi dropdown
  - [ ] Marka+model+yıl seçilince aktif olur
  - [ ] Trim'leri çek ve göster
  - [ ] Trim detaylarını önizle

### 4.2 Araç Seçim Formu
- [ ] `VehicleSelectionForm` bileşeni
- [ ] İki araç için ayrı form (Araç A, Araç B)
- [ ] Opsiyonel alanlar:
  - [ ] Kilometre (km) input
  - [ ] Fiyat (₺) input
- [ ] Seçilen araç özeti gösterimi
- [ ] "Araç Değiştir" butonu
- [ ] Form validation

### 4.3 Araç Önizleme
- [ ] Seçilen trim'in temel bilgilerini göster
- [ ] "Veri yok" durumları için placeholder
- [ ] Loading skeleton
- [ ] Hata durumu gösterimi

### 4.4 State Yönetimi
- [ ] Vehicle selection state (Context/Store)
- [ ] Seçilen araçları localStorage'a kaydet
- [ ] URL query params ile paylaşım desteği
- [ ] Form reset fonksiyonu

### 4.5 Kullanıcı Deneyimi İyileştirmeleri
- [ ] Arama fonksiyonu (marka/model/trim)
- [ ] Son seçilen araçları hatırla
- [ ] "Popüler araçlar" önerisi
- [ ] Keyboard navigation
- [ ] Auto-focus yönetimi

### 4.6 Hata Yönetimi
- [ ] "Veri bulunamadı" mesajları
- [ ] API hata durumları
- [ ] Network timeout handling
- [ ] Retry mekanizması

---

## Faz 5: Karşılaştırma Motoru & Skorlama

**Süre Tahmini:** 10-12 gün  
**Öncelik:** 🔴 Yüksek

### 5.1 Skorlama Algoritması Tasarımı
- [ ] Skorlama formülü tasarımı
- [ ] Ağırlık katsayıları belirleme
- [ ] Test senaryoları hazırlama
- [ ] Algoritma dokümantasyonu

### 5.2 TCO (Total Cost of Ownership) Hesaplama
- [ ] `calculateTCO()` fonksiyonu
- [ ] Yakıt maliyeti hesaplama
  - [ ] Yıllık km × tüketim (L/100km) × yakıt fiyatı
  - [ ] Şehir içi/dışı oranına göre karma tüketim
  - [ ] WLTP verisi varsa kullan, yoksa katalog verisi
- [ ] Varsayılan yakıt fiyatları (ayarlanabilir)
- [ ] Yıllık ve aylık maliyet hesaplama
- [ ] Karşılaştırmalı TCO skoru (0-100)

### 5.3 Durum (Condition) Skoru
- [ ] `calculateConditionScore()` fonksiyonu
- [ ] Araç yaşı hesaplama (seçilen yıl → bugün)
- [ ] Beklenen km hesaplama (yaş × ortalama yıllık km)
- [ ] Gerçek km ile beklenen km karşılaştırması
- [ ] Km/yaş dengesi skoru
- [ ] Bilgi yoksa nötr skor

### 5.4 Uygunluk (Compatibility) Skoru
- [ ] `calculateCompatibilityScore()` fonksiyonu
- [ ] "Olmazsa olmaz" kontrolü
  - [ ] Yakıt türü eşleşmesi
  - [ ] Şanzıman eşleşmesi
  - [ ] Gövde tipi eşleşmesi
  - [ ] Eşleşmiyorsa diskalifiye (0 skor)
- [ ] "Güzel olur" tercihleri için bonus puan
- [ ] Uygunluk skoru hesaplama (0-100)

### 5.5 Toplam Mantıklılık Skoru
- [ ] `calculateTotalScore()` fonksiyonu
- [ ] TCO, Durum, Uygunluk skorlarını birleştir
- [ ] Ağırlıklandırılmış ortalama
- [ ] Final skor hesaplama (0-100)
- [ ] "A mı B mi?" kararı (hangi araç daha mantıklı)

### 5.6 Gerekçe Üretimi
- [ ] `generateReasons()` fonksiyonu
- [ ] Her skor bileşeni için gerekçe üret
- [ ] Kısa, net cümleler
- [ ] Pozitif ton
- [ ] En az 2 gerekçe garantisi
- [ ] Türkçe metin üretimi

### 5.7 Karşılaştırma Servisi
- [ ] `src/services/comparisonService.ts` genişlet
- [ ] `compareVehicles()` ana fonksiyon
- [ ] Tüm skorları hesapla
- [ ] Gerekçeleri üret
- [ ] Sonucu formatla
- [ ] Error handling

### 5.8 Test & Validasyon
- [ ] Skorlama algoritması unit testleri
- [ ] Edge case'ler (eksik veri, eşit skorlar, vb.)
- [ ] Performans testi (hesaplama hızı)
- [ ] Sonuç doğrulama (manuel test senaryoları)

---

## Faz 6: Sonuç Ekranı & Öneri

**Süre Tahmini:** 7-9 gün  
**Öncelik:** 🔴 Yüksek

### 6.1 Sonuç Ekranı Layout
- [ ] `ResultsPage` bileşeni
- [ ] Üst kısım: Tek cümle karar
  - [ ] "B daha mantıklı" gibi net ifade
  - [ ] Yüzde/skor gösterimi
  - [ ] Görsel vurgu (renk, ikon)
- [ ] Orta kısım: Alt skorlar
  - [ ] TCO kartı
  - [ ] Durum kartı
  - [ ] Uygunluk kartı
- [ ] Alt kısım: Detay tablosu

### 6.2 Karar Gösterimi
- [ ] `DecisionBanner` bileşeni
- [ ] Kazanan aracı vurgula
- [ ] Skor farkını göster
- [ ] Görsel tasarım (card, badge, vb.)

### 6.3 Skor Kartları
- [ ] `ScoreCard` bileşeni (TCO, Durum, Uygunluk için)
- [ ] Skor gösterimi (sayı + yüzde)
- [ ] Kısa açıklama
- [ ] Kullanılan varsayımlar (info tooltip)
- [ ] Görsel gösterim (progress bar, renk kodlama)

### 6.4 Gerekçe Gösterimi
- [ ] `ReasonsList` bileşeni
- [ ] Her gerekçe için bullet point
- [ ] Kısa, net cümleler
- [ ] İkon desteği (opsiyonel)

### 6.5 Detay Karşılaştırma Tablosu
- [ ] `ComparisonTable` bileşeni
- [ ] İki sütun (Araç A, Araç B)
- [ ] Kategori başlıkları:
  - [ ] Güç-aktarma
  - [ ] Şanzıman & çekiş
  - [ ] Performans
  - [ ] Ölçüler
  - [ ] Ağırlık/kapasiteler
  - [ ] Tüketim
  - [ ] Gövde/yaşam alanı
  - [ ] Güvenlik (opsiyonel)
  - [ ] Donanım etiketleri
- [ ] Katlanabilir kategoriler (accordion)
- [ ] Farklılıkları vurgula (renk kodlama)
- [ ] "Belirtilmemiş" gösterimi (—)

### 6.6 Uyarı Şeridi
- [ ] `WarningBanner` bileşeni
- [ ] "Katalog verileri gerçek kullanımda farklılık gösterebilir" mesajı
- [ ] Varsayımlar hakkında bilgi
- [ ] Sorumluluk reddi metni

### 6.7 Eksik Veri Yönetimi
- [ ] Eksik veri gösterimi (— veya "belirtilmemiş")
- [ ] Eksik veri uyarıları
- [ ] Manuel veri girişi önerisi (opsiyonel)

### 6.8 Responsive Tasarım
- [ ] Mobile'da tablo scroll
- [ ] Kartlar dikey sıralama
- [ ] Touch-friendly butonlar

---

## Faz 7: Paylaşım & PDF

**Süre Tahmini:** 5-7 gün  
**Öncelik:** 🟡 Orta

### 7.1 Paylaşım URL Sistemi
- [ ] URL query params ile state encoding
- [ ] `shareComparison()` fonksiyonu
- [ ] Paylaşım URL'i oluşturma
- [ ] URL'den state decode etme
- [ ] Salt-okunur sayfa (`/compare/[id]` veya query params)

### 7.2 Paylaşım Sayfası
- [ ] `SharedComparisonPage` bileşeni
- [ ] URL'den karşılaştırma verilerini çek
- [ ] Sonuç ekranını göster (salt-okunur)
- [ ] "Yeni karşılaştırma yap" butonu
- [ ] Error handling (geçersiz URL)

### 7.3 Paylaşım Butonları
- [ ] `ShareButton` bileşeni
- [ ] URL kopyalama (clipboard API)
- [ ] Sosyal medya paylaşımı (opsiyonel)
- [ ] "Link kopyalandı" feedback

### 7.4 PDF Export
- [ ] PDF kütüphanesi seçimi (react-pdf, jsPDF, vb.)
- [ ] `generatePDF()` fonksiyonu
- [ ] PDF template tasarımı
  - [ ] Başlık ve tarih
  - [ ] Karar cümlesi
  - [ ] Alt skorlar
  - [ ] Detay tablosu
  - [ ] Uyarı metni
- [ ] PDF indirme butonu
- [ ] PDF önizleme (opsiyonel)

### 7.5 Paylaşım Optimizasyonları
- [ ] URL kısaltma (opsiyonel)
- [ ] SEO meta tags (paylaşım sayfası için)
- [ ] Open Graph tags
- [ ] Twitter Card tags

---

## Faz 8: Test & Optimizasyon

**Süre Tahmini:** 5-7 gün  
**Öncelik:** 🟡 Orta

### 8.1 Unit Testler
- [ ] Skorlama algoritması testleri
- [ ] Utility fonksiyon testleri
- [ ] Form validation testleri
- [ ] API service testleri (mock)
- [ ] Jest veya Vitest kurulumu

### 8.2 Integration Testler
- [ ] Kullanıcı akışı testleri
- [ ] Form submission testleri
- [ ] API entegrasyon testleri
- [ ] State management testleri

### 8.3 E2E Testler (Opsiyonel)
- [ ] Playwright veya Cypress kurulumu
- [ ] Temel kullanıcı senaryoları
- [ ] CI/CD entegrasyonu

### 8.4 Performans Optimizasyonu
- [ ] Code splitting (route-based)
- [ ] Lazy loading (bileşenler)
- [ ] Image optimization
- [ ] Bundle size analizi
- [ ] Lighthouse audit
- [ ] Core Web Vitals optimizasyonu

### 8.5 SEO Optimizasyonu
- [ ] Meta tags (title, description)
- [ ] Structured data (JSON-LD)
- [ ] Sitemap oluşturma
- [ ] robots.txt

### 8.6 Error Tracking
- [ ] Error boundary'ler
- [ ] Error logging (Sentry veya benzeri, opsiyonel)
- [ ] User feedback mekanizması

### 8.7 Analytics (Opsiyonel)
- [ ] Google Analytics veya benzeri
- [ ] Event tracking (karşılaştırma tamamlama, paylaşım, vb.)
- [ ] Conversion tracking

---

## Faz 9: Deployment & Launch

**Süre Tahmini:** 3-5 gün  
**Öncelik:** 🔴 Yüksek

### 9.1 Production Build
- [ ] Production build testi
- [ ] Environment variables ayarlama
- [ ] Build optimizasyonları
- [ ] Static asset optimization

### 9.2 Hosting & Deployment
- [ ] Vercel/Netlify kurulumu (veya tercih edilen platform)
- [ ] Domain ayarları
- [ ] SSL sertifikası
- [ ] CDN konfigürasyonu
- [ ] Environment variables (production)

### 9.3 Monitoring & Logging
- [ ] Uptime monitoring
- [ ] Error monitoring
- [ ] Performance monitoring
- [ ] Log aggregation (opsiyonel)

### 9.4 Pre-Launch Checklist
- [ ] Tüm özellikler test edildi
- [ ] Mobile responsive test
- [ ] Cross-browser test (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit
- [ ] Performance audit
- [ ] Security audit
- [ ] Legal metinler (KVKK, sorumluluk reddi)
- [ ] Privacy policy
- [ ] Terms of service

### 9.5 Launch
- [ ] Beta test (sınırlı kullanıcı)
- [ ] Feedback toplama
- [ ] Hızlı bug fix'ler
- [ ] Public launch
- [ ] Marketing materyalleri (opsiyonel)

### 9.6 Post-Launch
- [ ] Kullanıcı feedback'i toplama
- [ ] Analytics verilerini inceleme
- [ ] Başarı ölçütlerini kontrol et
  - [ ] ≥ 50 tamamlanmış karşılaştırma (ilk hafta)
  - [ ] ≥ %75 karar üretme oranı
  - [ ] ≤ 2 dakika tamamlama süresi
  - [ ] ≥ %20 paylaş butonu tıklanma oranı
- [ ] İyileştirme planı

---

## 📊 Genel İlerleme Takibi

### Öncelik Sıralaması
1. **Faz 0-1:** Altyapı ve veri katmanı (kritik)
2. **Faz 2-3:** UI ve profil (kritik)
3. **Faz 4-5:** Araç seçimi ve skorlama (kritik)
4. **Faz 6:** Sonuç ekranı (kritik)
5. **Faz 7:** Paylaşım (önemli)
6. **Faz 8-9:** Test ve deployment (önemli)

### Tahmini Toplam Süre
- **MVP için:** 50-70 iş günü (~10-14 hafta)
- **Hızlandırılmış:** 35-50 iş günü (ekip ile)

### Bağımlılıklar
- Faz 1 → Faz 4 (veri katmanı olmadan araç seçimi yapılamaz)
- Faz 3 → Faz 5 (profil olmadan skorlama yapılamaz)
- Faz 4-5 → Faz 6 (araç seçimi ve skorlama olmadan sonuç gösterilemez)
- Faz 6 → Faz 7 (sonuç olmadan paylaşım yapılamaz)

---

## 🔄 Sürekli İyileştirme (Post-MVP)

### Kısa Vadeli (1-2 ay)
- [ ] Kullanıcı feedback'lerine göre UI/UX iyileştirmeleri
- [ ] Performans optimizasyonları
- [ ] Daha fazla marka/model desteği
- [ ] Donanım etiketlerini zenginleştirme

### Orta Vadeli (3-6 ay)
- [ ] 3+ araç karşılaştırması
- [ ] Favoriler ve geçmiş
- [ ] Basit hesap sistemi (oturum)
- [ ] Notlar ve işaretlemeler
- [ ] Gerçek dünya tüketim verileri entegrasyonu

### Uzun Vadeli (6+ ay)
- [ ] Vergi/kasko hesaplamaları
- [ ] TRAMER/ekspertiz entegrasyonu
- [ ] Canlı piyasa fiyatı
- [ ] Mobil uygulama (React Native)
- [ ] AI-powered öneriler

---

## 📝 Notlar

- **Veri Kaynağı:** CarQuery API veya CSV seed data (scraping yok)
- **Kullanıcı:** Anonim (MVP'de hesap sistemi yok)
- **Dil:** Türkçe (UI ve içerik)
- **Kod:** İngilizce (değişken isimleri, yorumlar)
- **Tasarım:** Modern, minimal, kullanıcı dostu
- **Performans:** Hızlı yükleme, smooth interactions

---

**Son Güncelleme:** 2024  
**Versiyon:** 1.0  
**Durum:** Planlama aşaması

