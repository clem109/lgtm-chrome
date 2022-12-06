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
  "This pull request is like a fine wine - it only gets better with age. Approved!",
  "I don't always approve of pull requests, but when I do, it's because they're as perfect as this one. Approved!",
  "I'm not a pull request approval expert, but I know a good one when I see it. This is a good one. Approved!",
  "If a pull request were a sandwich, this would be a five-star gourmet masterpiece. Approved!",
  "I'm no fortune teller, but I foresee great things for this pull request. Approved!",
  "I was going to reject this pull request, but then I realized I don't make the rules around here. Approved!",
  "I may not be a pull request approval expert, but I am a fan of good code. This is good code. Approved!",
  "I don't know about you, but I think this pull request is pure gold. Approved!",
  "If I were a pull request, I would want to be this pull request. Approved!",
  "I've seen some impressive pull requests in my time, but this one takes the cake. Or should I say, takes the merge? Approved!",
];

const PULL_REQUEST_REVIEW_BODY = "#pull_request_review_body";

// Get the target element
function getTargetElement() {
  return document.querySelector(PULL_REQUEST_REVIEW_BODY);
}

// Create the custom element
function createCustomElement(element) {
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
  closeButton.innerHTML = "X";
  closeButton.classList.add("tooltip-close-button");

  // Add an event listener to hide the tooltip when the close button is clicked
  closeButton.addEventListener("click", () => {
    wrapper.style.display = "none";
  });

  // Add the close button as a child of the tooltip
  wrapper.appendChild(closeButton);

  const optionsParent = document.createElement("div");
  optionsParent.classList.add("tooltip-options-list");
  // Add the alternative suggestions to the element
  shuffleArray(alternatives).forEach((alternative) => {
    const option = document.createElement("div");
    option.classList.add("tooltip-option");
    option.textContent = alternative;
    // Add an event listener to replace the text "LGTM" with the selected option
    option.addEventListener("click", () => {
      element.value = `${alternative} :partying_face:`;
      wrapper.style.display = "none";
    });

    optionsParent.appendChild(option);
  });

  wrapper.appendChild(optionsParent);

  // Add the custom element to the page
  document.body.appendChild(wrapper);
}

// Add the event listeners
function addEventListeners(element) {
  // Add an event listener for the "input" event
  element.addEventListener("input", (event) => {
    // Get the new text content of the element
    const text = event.target.value;

    // Check if the text content equals "LGTM"
    if (text === "LGTM") {
      // Get the tooltip element
      const tooltip = document.querySelector(".tooltip");

      // Check if the tooltip element exists
      if (tooltip) {
        // Show the tooltip
        tooltip.style.display = "block";
        return;
      }

      // Create the custom element
      createCustomElement(element);
    }
  });
}

const shuffleArray = (arr) => {
  // Loop through the array and swap each element with a random element from the array
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
};

// Main function
function main() {
  // Get the target element
  const element = getTargetElement();

  // Check if the element was found
  if (element) {
    // Add the event listeners
    addEventListeners(element);
  }
}

// Call the main function
main();
