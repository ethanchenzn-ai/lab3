// Same three images
const images = ["beach.jpg", "rain.jpg", "sunset.jpg"];

// Two different sequences
const orders = [
  [0, 1, 2],
  [1, 2, 0]
];

const titles = [
  "An Unexpected Beach Day",
  "A Fresh Start"
];

const captions = [
  [
    "We arrived at the sunny beach, excited for our trip.",
    "Suddenly, rain interrupted our plans.",
    "The rain stopped, and a beautiful sunset saved the day."
  ],
  [
    "The rain kept us inside all day.",
    "At sunset, we decided to try again tomorrow.",
    "The next morning, we finally enjoyed the sunny beach."
  ]
];

const descriptions = ["Sunny beach", "Rainy weather", "Sunset"];
const steps = ["Beginning", "Middle", "End"];

let story = 0;
let position = 0;

// Update the image and text
function updateStory() {
  let imageNumber = orders[story][position];

  document.getElementById("photo").src = images[imageNumber];
  document.getElementById("photo").alt = descriptions[imageNumber];
  document.getElementById("title").textContent = titles[story];
  document.getElementById("step").textContent = steps[position];
  document.getElementById("text").textContent = captions[story][position];

  document.getElementById("previous").disabled = position === 0;
  document.getElementById("next").disabled = position === 2;
}

// Select Story 1
document.getElementById("story1").addEventListener("click", function() {
  story = 0;
  position = 0;
  updateStory();
});

// Select Story 2
document.getElementById("story2").addEventListener("click", function() {
  story = 1;
  position = 0;
  updateStory();
});

// Next image
document.getElementById("next").addEventListener("click", function() {
  if (position < 2) {
    position++;
    updateStory();
  }
});

// Previous image
document.getElementById("previous").addEventListener("click", function() {
  if (position > 0) {
    position--;
    updateStory();
  }
});

// Show the beginning when the page opens
updateStory();