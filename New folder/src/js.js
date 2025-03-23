// لیست المان‌ها
const elements = [
    { el: document.querySelector('#q'), trigger: document.querySelector('#z') },
    { el: document.querySelector('#w'), trigger: document.querySelector('#x') },
    { el: document.querySelector('#e'), trigger: document.querySelector('#c') },
    { el: document.querySelector('#r'), trigger: document.querySelector('#v') },
    { el: document.querySelector('#t'), trigger: document.querySelector('#b') },
    { el: document.querySelector('#y'), trigger: document.querySelector('#n') }
];
const uu = document.querySelector('#uu')
const mm = document.querySelector('#mm')
// تنظیمات ابتدایی برای هر المان
elements.forEach(item => {
    item.el.style.transition = 'background 0.4s';
});

window.addEventListener('scroll', () => {
    elements.forEach(item => {
        const rect = item.trigger.getBoundingClientRect();

        // بررسی موقعیت برای تغییرات
        if (rect.top <= 300) {
            item.el.style.background = '#ceb19c';
            item.el.style.padding = '4px';
            item.el.style.color = 'black';
            item.el.style.borderRadius = '10px';
        } else {
            item.el.style.background = '';
            item.el.style.color = '';
            item.el.style.borderRadius = '';
        }

        // بررسی اگر به پایین رسید
        if (rect.bottom <= 100) {
            item.el.style.background = '';
            item.el.style.color = '';
            item.el.style.borderRadius = '';
        }
    });
});

uu.style.transition = 'opacity 0.4s, transform 0.4s';
mm.style.transition = 'opacity 0.4s, transform 0.4s';

mm.addEventListener('click', () => {
    
    if (uu.style.opacity === '1') {
        uu.style.opacity = '0'; // پنهان کردن عنصر با تغییر opacity
        uu.style.transform = 'rotate(0deg)';
        mm.style.transform = 'rotate(0deg)';
    } else {
        uu.style.opacity = '1'; // نمایش دادن عنصر
        uu.style.display = 'flex';  // نمایش دادن عنصر به صورت flex
        uu.style.flexWrap = 'wrap';  // اضافه کردن flex-wrap
        uu.style.transform = 'rotate(360deg)';
        uu.style.background = 'white'; 
        uu.style.textAlign = 'center';
        mm.style.transform = 'rotate(360deg)';        

        // تنظیم موقعیت absolute
        uu.style.position = 'fixed';  // تغییر به absolute
        uu.style.top = '80px';              // تنظیم top به 0 (به بالای صفحه می‌آید)
        uu.style.left = '0';             // تنظیم left به 0 (چپ صفحه)
        uu.style.width = '100%';         // عرض 100% برای عنصر
    }
});




