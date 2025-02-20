const submit = document.querySelector('button[type="submit"]');
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userReview = document.querySelector("#user-review");

submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(userName.value);
    console.log(userEmail.value);
    console.log(userReview.value);
    resetDisplay();
});

function resetDisplay() {
    userName.value = "";
    userEmail.value = "";
    userReview.value = "";
}
