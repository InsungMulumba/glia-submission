import { Accessibility, Price } from "./constants.js";

export const mapAccessibilityScoreToRating = (rating) => {
  switch (true) {
    case rating <= 0.25: {
      return Accessibility.HIGH;
    }
    case rating <= 0.75 && rating >= 0.25: {
      return Accessibility.MEDIUM;
    }
    case rating >= 0.75: {
      return Accessibility.LOW;
    }
  }
};

export const mapPriceScoreToRating = (initialPrice) => {
  switch (true) {
    case initialPrice === 0: {
      return Price.FREE;
    }
    case initialPrice <= 0.5: {
      return Price.LOW;
    }
    case initialPrice > 0.5: {
      return Price.HIGH;
    }
  }
};

export const mapPriceRatingToQueryParam = (priceRating) => {
  switch (true) {
    case priceRating === Price.FREE: {
      return "price=0.0";
    }
    case priceRating === Price.LOW: {
      return "maxprice=0.5";
    }
    case priceRating === Price.HIGH: {
      return "minprice=0.51";
    }
  }
};

export const mapAccessibilityRatingToQueryParam = (accessibilityRating) => {
  switch (true) {
    case accessibilityRating === Accessibility.LOW: {
      return "minaccessibility=0.76";
    }
    case accessibilityRating === Accessibility.MEDIUM: {
      return "minaccessibility=0.26&maxaccessibility=0.75";
    }
    case accessibilityRating === Accessibility.HIGH: {
      return "maxaccessibility=0.25";
    }
  }
};

export const capitalizeFirstLetter = ([firstLetter, ...restOfWord]) => {
  return `${firstLetter.toUpperCase()}${restOfWord.join("")}`;
};

export function checkUserProfile(user) {
  if (typeof user.name !== "string") {
    console.log("Invalid Name");
    return false;
  }
  if (!Object.values(Accessibility).includes(user.accessibility)) {
    console.log("Invalid Accessibility");

    return false;
  }
  if (!Object.values(Price).includes(user.price)) {
    console.log("Invalid Price");

    return false;
  }
  return true;
}
