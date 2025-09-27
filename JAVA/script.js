// التحقق من كلمة السر بدون مسافات 
if (document.body.classList.contains("login-page")) {
    const loginForm = document.querySelector("form");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", (e) => {
        if (/\s/.test(passwordInput.value)) {
            e.preventDefault();
            alert("Password must not contain spaces!");
        }
    });
}

// رسالة ترحيبية عند الدخول لصفحة home
if (document.body.classList.contains("home-page")) {
    window.addEventListener("DOMContentLoaded", () => {
        alert("Welcome to Fast Food Store! 🍔🍟");
    });
}

//تغيير لون خلفية login تلقائيًا 
if (document.body.classList.contains("login-page")) {
    let colors = ["#fff8f0", "#ffe0b2", "#ffd180", "#ffcc80"];
    let index = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 1500); // تغيير كل 1.5 ثانية
}
// =====  رسالة عند الضغط على الزر (login و signup) =====
if (document.body.classList.contains("login-page") || document.body.classList.contains("signup-page")) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("تم الضغط على الزر ✅");
        });
    });
 }
// داله تبحث عن العناصر اللي نشتيها داخل الحاصرتين  
// document.querySelectorAll("button");