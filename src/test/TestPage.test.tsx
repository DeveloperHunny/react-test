import {fireEvent, render, screen} from "@testing-library/react";
import TestPage from "../pages/TestPage";
import "@testing-library/jest-dom"

test("Add li element when submit is pressed", ()=> {
    render(<TestPage/>);

    const inputElement = screen.getByTestId("input");
    const submitBtnElement = screen.getByTestId("submit-btn");
    const listElement = screen.getByTestId("list");

    fireEvent.change(inputElement, {target: {value: 'ADD DATA TO LIST'}});
    fireEvent.click(submitBtnElement);

    expect(listElement).toContainHTML("<li>ADD DATA TO LIST</li>");

});
