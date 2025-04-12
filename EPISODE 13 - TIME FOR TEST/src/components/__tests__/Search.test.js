import { render, screen,fireEvent } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../../__mocks__/mockResList.json";
import { BrowserRouter } from "react-router";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import { waitFor } from "@testing-library/react";
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);

describe("Body Component Integration Tests", () => {
    beforeEach(async () => {
        await waitFor(() =>
            render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            </Provider>
            )
        );
    });
    
        it("should render Body component with search", async() => {
            const searchInput = await screen.findByTestId("search-input"); 
            expect(searchInput).toBeInTheDocument();
        
            const cards = await screen.findAllByTestId("rescard");
            expect(cards.length).toBeGreaterThanOrEqual(20);
        });
    
        it("should update input and filter cards after search", async () => {
            let cards = await screen.findAllByTestId("rescard");
            expect(cards.length).toBe(20);
            const searchInput = await screen.findByTestId("search-input")
            fireEvent.change(searchInput, { target: { value: "Pizza" } });
            const searchButton = screen.getAllByRole("button")[0];
            fireEvent.click(searchButton);
            cards = screen.getAllByTestId("rescard");
            expect(cards.length).toBe(4);
    });
});
