const submit = document.querySelector('button[type="submit"]');
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userReview = document.querySelector("#user-review");
const reviewCards = document.querySelector(".review-cards");
const ratingInput = document.querySelectorAll(".rating input");
// const ratingStar = document.querySelectorAll(".rating label");
let ratingValue = null;

getRatingValue();

submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (
        !formValidation(
            userName.value.trim(),
            userEmail.value.trim(),
            userReview.value.trim()
        )
    ) {
        return;
    } else {
        const card = makeCard(
            userName.value.trim(),
            userEmail.value.trim(),
            userReview.value.trim(),
            ratingValue
        );
        reviewCards.appendChild(card);
        resetDisplay();
    }
});

function getRatingValue() {
    ratingInput.forEach((input) => {
        input.addEventListener("click", function () {
            ratingValue = this.value;
        });
    });
    return ratingValue;
}

function formValidation(userName, userEmail, userReview) {
    if (userName === "" || userEmail === "" || userReview === "") {
        alert("Kindly enter your details before submitting");
        return false;
    } else if (ratingValue === null) {
        alert(`kindly enter a rating before submitting.`);
    } else {
        return true;
    }
}

function resetDisplay() {
    userName.value = "";
    userEmail.value = "";
    userReview.value = "";
}

function makeCard(userName, userEmail, userReview, ratingValue) {
    const article = document.createElement("article");
    article.classList.add("card");
    const h4 = makeCardHeading(userName, userEmail, ratingValue);
    article.appendChild(h4);
    const p = makeCardPara(userReview);
    article.appendChild(p);
    return article;
}

function makeCardHeading(userName, userEmail, ratingValue) {
    const h4 = document.createElement("h4");
    h4.textContent = `${userName} (${userEmail}) ${"⭐".repeat(ratingValue)}`;
    return h4;
}

function makeCardPara(userReview) {
    const p = document.createElement("p");
    p.textContent = `${userReview}`;
    return p;
}
