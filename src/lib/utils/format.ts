export function formatCamelCaseToTitle(camelCase: string): string {
  // Add space before capital letters and convert to lowercase
  const withSpaces = camelCase.replace(/([A-Z])/g, " $1").toLowerCase();

  // Capitalize the first letter of each word
  return withSpaces
    .split(" ")
    .map((word) => word.trim())
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatNumberToCurrency(
  value: number,
  min?: number,
  max?: number
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: min || 0,
    maximumFractionDigits: max || 0,
  }).format(value);
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const capitalize = (str: string) => {
  return str
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b[a-zA-Z]/g, (char) => char.toUpperCase());
};

export const generateRandomString = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

export const formatUrlToID = (url: string): string => {
  const string = url
    .replaceAll(/-/g, " ")
    .replace("%26", "")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return string.charAt(0).toLowerCase() + string.slice(1).replace(/\s+/g, "");
};

export const formatIDToUrl = (id: string): string => {
  const string = id.replaceAll(" ", "-").replace("_", "-").toLowerCase();
  return string;
};