const PUBLIC_IMAGES_FOLDER = "/images/";

export default function cardSuitToImagePath(cardSuit: string): string {
  if (!cardSuit) throw new Error("No suit was passed!");
  switch(cardSuit) {
    case "HEARTS":
    case "DIAMONDS":
    case "CLUBS":
    case "SPADES": return PUBLIC_IMAGES_FOLDER + cardSuit.toLowerCase() + ".svg";
    default: throw new Error("Unknown suit was passed!");
  }
}