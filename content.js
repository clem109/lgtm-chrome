const element = document.querySelector("#new_comment_field");

// Check if the element was found
if (element) {
  // Add an event listener for the "input" event
  element.addEventListener("input", (event) => {
    // Get the new text content of the element
    const text = event.target.value;

    // Check if the text content equals "LGTM"
    if (text === "LGTM") {
      const tooltip = document.querySelector(".tooltip");
      if (tooltip) {
        tooltip.style.display = "block";
        return;
      }
      // Create the custom element
      const wrapper = document.createElement("div");
      wrapper.classList.add("tooltip");

      // Create a new "strong" element for the title
      const title = document.createElement("strong");
      // Set the text content of the title
      title.innerHTML = "Alternative Suggestions:";
      title.classList.add("tooltip-title");

      // Add the title as a child of the tooltip
      wrapper.appendChild(title);

      // Create a new "button" element for the close button
      const closeButton = document.createElement("button");
      // Set the text content of the close button
      closeButton.innerHTML = "Close";
      closeButton.classList.add("tooltip-close-button");

      // Add an event listener to hide the tooltip when the close button is clicked
      closeButton.addEventListener("click", () => {
        wrapper.style.display = "none";
      });

      // Add the close button as a child of the tooltip
      wrapper.appendChild(closeButton);

      // Add the alternative suggestions to the element
      alternatives.forEach((alternative) => {
        const option = document.createElement("div");
        option.classList.add("tooltip-option");
        option.textContent = alternative;

        // Add an event listener to replace the text "LGTM" with the selected option
        option.addEventListener("click", () => {
          element.value = alternative;
        });

        wrapper.appendChild(option);
      });

      // Add the custom element to the page
      document.body.appendChild(wrapper);
    }
  });
}

const alternatives = [
  "This pull request is so good, I'm tempted to start dancing like the 80's guy from the Thriller music video",
  "I may not be a professional code reviewer, but I know a great pull request when I see one",
  "I'm not one to gush, but this pull request is so good, it's almost sickening",
  "I don't have much experience with code, but even I can tell that this pull request is top-notch",
  "I don't know what the LGTM stands for, but I'm going to go ahead and assume it means 'This pull request is a game changer'",
  "I'm not a pro at code reviewing, but I'm pretty sure this pull request is going to make the project a whole lot better",
  "This pull request is like a breath of fresh air - it's so well-written and easy to understand",
  "I don't know about you, but I'm ready to give this pull request a standing ovation",
  "I'm not the best at reviewing code, but even I can tell that this pull request is a work of art",
  "I don't have much experience with code, but I know a great pull request when I see one - and this one is definitely great",
];

// Inject the styles into the page
chrome.tabs.insertCSS({
  file: "style.css",
});
