import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("Title required.")
      .isLength({ min: 5 })
      .withMessage("The title needs to have at least 5 characters."),
    body("rating")
      .isNumeric()
      .withMessage("The movie rate needs to be a number.")
      .custom((value: number) => {
        if (value > 0 || value > 10) {
          throw new Error("The movie rating needs to be from 0 to 10.");
        }
        return true;
      }),
    body("description").isString().withMessage("Description required."),
    body("director").isString().withMessage("Director's name are required."),
    body("poster").isString().withMessage("The image needs to be a URL."),
  ];
};
