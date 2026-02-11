let noButton = document.getElementById("noButton");
let poza = document.getElementById("poza2");
noButton.addEventListener("mouseover", function() {
    noButton.innerHTML = "Yes";
});
noButton.addEventListener("mouseout", function() {
    noButton.innerHTML = "No";
});
let hideTimeout;
noButton.addEventListener("click", function() {
    poza.classList.add('show');
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(function() {
        poza.classList.remove('show');
    }, 3000);
});
let yesButton = document.getElementById("yesButton");
yesButton.addEventListener("click", function() {
    poza.classList.add('show');
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(function() {
        poza.classList.remove('show');
    }, 3000);
});