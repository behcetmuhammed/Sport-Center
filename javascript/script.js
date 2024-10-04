

/* Menü açma ve kapama fonksiyonu*/
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden'); // Menü gizliyse aç, açıksa kapat
});


/* Scroll aşağıya indiği zaman Nav bar renk değiştirsin  */
window.addEventListener('scroll', function() {
    const container = document.getElementById('container');
    const scrollY = window.scrollY; // Kullanıcının kaydırma miktarı
    const maxScroll = 300; // Rengin tam olarak değişeceği kaydırma miktarı

    // Yüzdeyi hesapla
    let opacity = Math.min(scrollY / maxScroll, 1); // 0 ile 1 arasında kalacak şekilde

    // Arka plan rengini ayarla
    container.style.backgroundColor = `rgba(53, 85, 146, ${opacity})`; // var(--primary-color) yerinde kullanılacak arka plan rengi
  });


/* BMI index hesaplama  */
document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.getElementById('height').value) / 100; // cm to m
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        document.getElementById('bmi-result').innerText = `Your BMI is ${bmi}. Category: ${category}`;
    }
});



/*! Deneme*/
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Tüm butonlara tıklama olayı ekliyoruz
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Tüm butonlardan 'active' sınıfını kaldırıyoruz
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Tüm panellerden 'active' sınıfını kaldırıyoruz
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Tıklanan butona 'active' sınıfı ekliyoruz
    button.classList.add('active');

    // İlgili paneli gösteriyoruz
    const targetPanel = document.getElementById(button.dataset.target);
    targetPanel.classList.add('active');
  });
});



  