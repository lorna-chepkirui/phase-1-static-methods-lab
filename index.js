class Formatter {
  //add static methods here
  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^'-\w\s]/gi, "");
  }
  static titleize(string) {
    let nonTitlelized = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];

    let words = string.split(" ");
    let firstWord = string.slice(0, 1)[0].toUpperCase() + words[0].slice(1);

    words = [firstWord, ...words.slice(1)];
    return words
      .map((word) =>
        nonTitlelized.includes(word)
          ? word
          : word[0].toUpperCase() + word.slice(1)
      )
      .join(" ");
  }
}
