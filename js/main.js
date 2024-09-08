document.addEventListener("DOMContentLoaded", () => {
  const contactInfoButton = document.querySelector("p");
  const dropdownContent = document.querySelector(".dropdown-content");

  console.log(contactInfoButton);
  console.log(dropdownContent);

  contactInfoButton.addEventListener("click", () => {
    // dropdownContent.toggleClass("active");
    dropdownContent.classList.toggle("active");
  });
});
