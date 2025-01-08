import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us test cases", () => {
  // beforeAll(()=>{
  //   console.log("Before All");
  // })

  // beforeEach(()=>{
  //   console.log("Before Each"); 
  // })
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside component", () => {
    render(<Contact />);

    const heading = screen.getByText("Submit");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load input name inside Contact component", () => {
    render(<Contact />);

    const heading = screen.getByPlaceholderText("name");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
