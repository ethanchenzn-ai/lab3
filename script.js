// The same three images are used in both stories.
let images = ["images/boat.JPG", "images/evening.jpg", "images/sea.JPG"];

let descriptions = [
  "A sunny beach",
  "Dark storm clouds over a beach",
  "A person leaving the beach"
];

// Each story has a different image order.
let orders = [
  [0, 1, 2],
  [1, 2, 0]
];

let titles = [
  "A Trip Interrupted",
  "Leaving Too Soon"
];

let captions = [
  [
    "I arrived at the sunny beach, ready for a relaxing day.",
    "Suddenly, storm clouds appeared and it began to rain.",
    "I left the beach early. My trip was over."
  ],
  [
    "When I arrived at the beach, the weather was terrible.",
    "I decided to leave instead of waiting for the rain to stop.",
    "After I left, the sun came out. I had missed the best part."
  ]
];

let stages = ["Beginning", "Middle", "End"];

let currentStory = 0;
let currentStep = 0;

// Update the image and story text.
function showStory() {
  let imageNumber = orders[currentStory][currentStep];

  document.getElementById("picture").src = images[imageNumber];
  document.getElementById("picture").alt = descriptions[imageNumber];
  document.getElementById("title").textContent = titles[currentStory];
  document.getElementById("stage").textContent = stages[currentStep];
  document.getElementById("text").textContent =
    captions[currentStory][currentStep];

  document.getElementById("next").disabled = currentStep === 2;
}

// Switch to Story 1.
function storyOne() {
  currentStory = 0;
  currentStep = 0;
  showStory();
}

// Switch to Story 2.
function storyTwo() {
  currentStory = 1;
  currentStep = 0;
  showStory();
}

// Move to the next image.
function nextImage() {
  if (currentStep < 2) {
    currentStep = currentStep + 1;
    showStory();
  }
}

// Return to the beginning of the current story.
function restartStory() {
  currentStep = 0;
  showStory();
}

// Listen for button clicks.
document.getElementById("storyOne").addEventListener("click", storyOne);
document.getElementById("storyTwo").addEventListener("click", storyTwo);
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("restart").addEventListener("click", restartStory);

// Show the first story when the page loads.
showStory();