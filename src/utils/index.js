
export function getSourceUrl(url) {
  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/;
  let match = regex.exec(url);
  /*  match returns a Array
   * sample: ["https://twitter.com", "twitter.com"]
   * supplies a # if no url is present
   */
  let sourceUrl = match[1] ? match[1] : "#";

  return sourceUrl;
}

export const mapToTime = timestamp => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  // for the magic number explanation
  // https://esqsoft.com/javascript_examples/date-to-epoch.htm
  // https://www.textmagic.com/free-tools/timestamp-converter
  // https://gist.github.com/mcraz/11349449

  // One year = 31,536,000 in UNIX time
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  // 2,592,000 for 30-day months in UNIX time
  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} months`;
  }
  // 86400 for 1 day in UNIX time
  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} days`;
  }
  // 3600 for 1 hour in UNIX time
  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} hours`;
  }
  // 60 for 1 minute in UNIX time
  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
};
