/*
This analyzes the http status code and throws a corresponding readable error
*/

import {
  DEFAULT_ERROR,
  FOUR04_ERROR,
  SERVER_ERROR,
  UNATHOURIZED_ERROR,
  UNEXPECTED_ERROR,
} from "./constants";

export const analyzeStatusCode = (response: Response): void | Error => {
  if (!response.ok) {
    let errorMessage = "Error: ";

    switch (response.status) {
      case 400:
        errorMessage += DEFAULT_ERROR;
        console.warn("An error occurred:", `status code${response.status}`);
        break;
      case 401:
        errorMessage += UNATHOURIZED_ERROR;
        console.warn("An error occurred:", `status code${response.status}`);
        break;
      case 403:
        errorMessage += DEFAULT_ERROR;
        console.warn("An error occurred:", `status code${response.status}`);
        break;
      case 404:
        errorMessage += FOUR04_ERROR;
        console.warn("An error occurred:", `status code${response.status}`);
        break;
      case 500:
        errorMessage += SERVER_ERROR;
        console.warn("An error occurred:", `status code${response.status}`);
        break;
      default:
        errorMessage += UNEXPECTED_ERROR;
        console.warn("An error occurred:", `status code${response.status}`);
        break;
    }

    throw new Error(errorMessage);
  }
};
