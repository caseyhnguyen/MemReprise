const formatPlayedAt = (played_at) => {
  // Attempt to parse the played_at string into a Date object
  const playedDate = new Date(played_at);

  // Check if the parsed date is valid
  if (isNaN(playedDate.getTime())) {
    // Invalid date/time, return an empty string
    return "";
  }

  // Format the date and time in a readable way
  const formattedDate = playedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = playedDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Combine formatted date and time and return as a single string
  return `${formattedDate} - ${formattedTime}`;
};

export default formatPlayedAt;
