//*     Implement a function to highlight text if a searched term appears within it.

function highlightText(text, searchTerm, highlightClass = "") {
  if (!searchTerm.trim()) {
    return text;
  }

  const regex = new RegExp(searchTerm, "gi");
  const highlightedText = text.replace(
    regex,
    (match) => `<span class="${highlightClass}">${match}</span>`
  );

  return highlightedText;
}

// Example usage:
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const searchTerm = "ipsum";
const highlightedText = highlightText(text, searchTerm, "highlight");
console.log(highlightedText);
