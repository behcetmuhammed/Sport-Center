

// /* Menü açma ve kapama fonksiyonu*/
// const menuToggle = document.getElementById('menu-toggle');
// const menu = document.getElementById('menu');

// menuToggle.addEventListener('click', () => {
//   menu.classList.toggle('hidden'); // Menü gizliyse aç, açıksa kapat
// });

/* Menü açma ve kapama fonksiyonu*/
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show"); // Menü gizliyse aç, açıksa kapat
});



/* Scroll aşağıya indiği zaman Nav bar renk değiştirsin  */
window.addEventListener('scroll', function() {
    const container = document.getElementById('container');
    const scrollY = window.scrollY; // kaydırma miktarı
    const maxScroll = 300; // Rengin tam olarak değişeceği kaydırma miktarı..

    // Yüzdeyi hesaplama..
    let opacity = Math.min(scrollY / maxScroll, 1); // 0 ile 1 arasında kalacak şekilde

    // Arka plan rengini ayarlama #355592 
    container.style.backgroundColor = `rgba(53, 85, 146, ${opacity})`; // var(--primary-color)
  });


  /*! Yoga butonlarını aktif etme işlemi*/
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

//Tüm butonlara tıklama olayı ekle
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Tüm butonlardan 'active' sınıfını kaldırıyoruz..
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Tüm panellerden 'active' sınıfını kaldırıyoruz...
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Tıklanan butona 'active' sınıfı ekliyoruz...
    button.classList.add('active');

    // İlgili paneli/pencereyi göster.
    const targetPanel = document.getElementById(button.dataset.target);
    targetPanel.classList.add('active');
  });
});


/* BMI index hesaplama  */
// Input alanlarına değer girildiğinde hemen BMI hesaplama
document.querySelectorAll('#bmi-form input').forEach(input => {
    input.addEventListener('input', function() {
        const height = parseFloat(document.getElementById('height').value) / 100; // cm to m
        const weight = parseFloat(document.getElementById('weight').value);

        if (height > 0 && weight > 0) {
            const bmi = (weight / (height * height)).toFixed(2);
            let category = '';

            // Okları gizle
            document.querySelectorAll('.bmi-arrow').forEach(arrow => {
                arrow.style.display = 'none'; // Tüm okları gizle
            });

            // BMI kategorisini belirle ve okları göster
            if (bmi < 18.5) {
                category = 'Underweight';
                document.getElementById('underweight-arrow').style.display = 'block'; // Ok göster
            } else if (bmi >= 18.5 && bmi < 24.9) {
                category = 'Normal';
                document.getElementById('normal-arrow').style.display = 'block'; // Ok göster
            } else if (bmi >= 25 && bmi < 29.9) {
                category = 'Overweight';
                document.getElementById('overweight-arrow').style.display = 'block'; // Ok göster
            } else if (bmi >= 30 && bmi < 39.9) {
                category = 'Obese';
                document.getElementById('obese-arrow').style.display = 'block'; // Ok göster
            }else {
                category = 'Extremelyobese';
                document.getElementById('extremely-obese-arrow').style.display = 'block'; // Ok göster
            }

            // BMI sonucunu göster
            document.getElementById('bmi-result').innerText = `Your BMI is ${bmi}. Category: ${category}`;
        }
    });
});








  