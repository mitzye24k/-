// កូដសម្រាប់មុខងារបង្ហាញព័ត៌មានលម្អិត (Toggle Detail)
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const detailElement = document.getElementById(targetId);

      // ប្តូរ Class ដើម្បីបង្ហាញ/លាក់ detail
      detailElement.classList.toggle("show");

      // ប្តូរអត្ថបទប៊ូតុង
      if (detailElement.classList.contains("show")) {
        this.textContent = "លាក់ព័ត៌មាន...";
      } else {
        this.textContent = "ព័ត៌មានលម្អិត...";
      }
    });
  });
});

// កូដសម្រាប់មុខងារចុចលើរូបភាព (Image Modal)
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const images = document.querySelectorAll(".menu-item img");

// ១. រង្វិលជុំដើម្បីភ្ជាប់ event listener ទៅកាន់រូបភាពនីមួយៗ
images.forEach((img) => {
  img.onclick = function () {
    // បើក Modal
    modal.style.display = "block";

    // បញ្ចូលរូបភាពធំ
    modalImg.src = this.src;

    // ទទួលបាន Item Name ធ្វើជាចំណងជើង (Caption)
    const itemName =
      this.closest(".menu-item").querySelector(".item-name").textContent;
    captionText.innerHTML = itemName;
  };
});

// ២. មុខងារបិទ Modal
// នៅពេលអ្នកប្រើចុចលើប៊ូតុង X
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// នៅពេលអ្នកប្រើចុចនៅខាងក្រៅ Modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
