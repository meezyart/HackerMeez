
export const mapComment = commentLen => {
  if (commentLen > 2) {
    return `${commentLen} comments`;
  } else if (commentLen === 1) {
    return `${commentLen} comment`;
  } else {
    return `discuss`;
  }
};

export function getSourceUrl(url) {
  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/;
  let match = regex.exec(url);

  if (!match) return "";

  let sourceUrl = match[1] ? match[1] : "#";

  return sourceUrl;
}

export const mapToTime = timestamp => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} months`;
  }
  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} days`;
  }
  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} hours`;
  }
  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
};
