const resultsButton = document.querySelector(".arrow");

const dateLabel = document.querySelector("#day-label"),
  monthLabel = document.querySelector("#month-label"),
  yearLabel = document.querySelector("#year-label");

const dateInput = document.querySelector("#dt"),
  monthInput = document.querySelector("#mt"),
  yearInput = document.querySelector("#yr");

const resultDate = document.querySelector("#DD"),
  resultMonth = document.querySelector("#MM"),
  resultYear = document.querySelector("#YY");

//   Errors Fields

const invalidDate = document.querySelector("#invalid-date"),
  invalidMonth = document.querySelector("#invalid-month"),
  invalidYear = document.querySelector("#invalid-year");

const emptyDate = document.querySelector("#empty-date"),
  emptyMonth = document.querySelector("#empty-month"),
  emptyYear = document.querySelector("#empty-year");

// Get Dates

const date = new Date();

let currentDate = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

// Months Array

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Execution

resultsButton.addEventListener("click", function () {
  let userYear = yearInput.value;
  let userMonth = monthInput.value;
  let userDate = dateInput.value;

  dayDiff = currentDate - userDate;
  monthDiff = currentMonth - userMonth;
  yearDiff = currentYear - userYear;

  monthsIndex = months[userMonth - 1];

  leapyear(userYear);

  // Check Year

  function validateYear() {
    if (userYear == "") {
      emptyYear.style.display = "block";
      invalidYear.style.display = "none";
      yearInput.style.border = "1px solid var(--light-red)";
      yearLabel.style.color = "var(--light-red)";
      return false;
    } else if (userYear > currentYear) {
      invalidYear.style.display = "block";
      emptyYear.style.display = "none";
      yearInput.style.border = "1px solid var(--light-red)";
      yearLabel.style.color = "var(--light-red)";
      return false;
    } else {
      emptyYear.style.display = "none";
      invalidYear.style.display = "none";
      yearInput.style.border = "1px solid var(--light-grey)";
      yearLabel.style.color = "var(--smokey-grey)";
    }
  }

  // Check Month

  function validateMonth() {
    if (userMonth == "") {
      emptyMonth.style.display = "block";
      invalidMonth.style.display = "none";
      monthInput.style.border = "1px solid var(--light-red)";
      monthLabel.style.color = "var(--light-red)";
      return false;
    } else if (userMonth > 12 || userMonth < 1) {
      invalidMonth.style.display = "block";
      emptyMonth.style.display = "none";
      monthInput.style.border = "1px solid var(--light-red)";
      monthLabel.style.color = "var(--light-red)";
      return false;
    } else {
      emptyMonth.style.display = "none";
      invalidMonth.style.display = "none";
      monthInput.style.border = "1px solid var(--light-grey)";
      monthLabel.style.color = "var(--smokey-grey)";
    }
  }

  // Check Date

  function validateDate() {
    if (userDate == "") {
      emptyDate.style.display = "block";
      invalidDate.style.display = "none";
      dateInput.style.border = "1px solid var(--light-red)";
      dateLabel.style.color = "var(--light-red)";
      return false;
    } else if (userDate > monthsIndex || userDate < 1) {
      invalidDate.style.display = "block";
      emptyDate.style.display = "none";
      dateInput.style.border = "1px solid var(--light-red)";
      dateLabel.style.color = "var(--light-red)";
      return false;
    } else {
      emptyDate.style.display = "none";
      invalidDate.style.display = "none";
      dateInput.style.border = "1px solid var(--light-grey)";
      dateLabel.style.color = "var(--smokey-grey)";
    }
  }
  function empty() {
    if (
      userDate != "" &&
      userMonth != "" &&
      userYear != "" &&
      userDate <= monthsIndex &&
      userDate >= 1 &&
      (userMonth <= 12 || userMonth >= 1) &&
      userYear <= currentYear
    ) {
      calculate();
    } else {
      // alert("error");
    }
  }

  // Calculate Age

  function calculate() {
    if (currentYear >= userYear) {
      resultYear.innerHTML = yearDiff;
      resultMonth.innerHTML = monthDiff;
      resultDate.innerHTML = dayDiff;
    }
    if (currentMonth < userMonth) {
      yearDiff--;
      resultYear.innerHTML = yearDiff;
      resultMonth.innerHTML = monthDiff + 12;
    }

    if (currentDate < userDate) {
      monthDiff--;
      resultMonth.innerHTML = monthDiff;
      resultDate.innerHTML = dayDiff + monthsIndex;
      if (monthDiff < 0) {
        resultMonth.innerHTML = monthDiff + 12;
        // resultDate.innerHTML = dayDiff + monthsIndex;
      }
    }
  }
  function leapyear(currentYear) {
    if (
      (currentYear % 4 == 0 && currentYear % 100 != 0) ||
      currentYear % 400 == 0
    ) {
      months[1] = 29;
    } else {
      months[1] = 28;
    }
    console.log(currentYear, months[1]);
  }

  validateYear();
  validateMonth();
  validateDate();
  empty();
  // calculate();
});
