import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case",()=>{
    test("Should load the contact us component",()=>{
        render(<ContactUs/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load the button inside contact us component",()=>{
        render(<ContactUs/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    it("Should load the input name inside contact us component",()=>{
        render(<ContactUs/>);
        const inputName = screen.getByPlaceholderText("Enter your name");
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load the 3 input boxes inside contact us component",()=>{
        render(<ContactUs/>);
        const inputFields = screen.getAllByRole("textbox");
        expect(inputFields.length).toBe(3);
    });
})
