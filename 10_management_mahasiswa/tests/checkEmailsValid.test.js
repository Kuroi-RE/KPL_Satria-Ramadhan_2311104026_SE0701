import { checkEmailIsValid, sum } from "../utils/checkEmailsValid.js";

describe("Email Valider", () => {
  test("Test email is true", () => {
    expect(checkEmailIsValid("rvnkrwn@hotmail.com")).toBe(true);
  });
});
