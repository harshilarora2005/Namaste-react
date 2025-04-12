import { render, screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../../__mocks__/resMenMock.json";
import { waitFor } from "@testing-library/react";
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);
describe("Cart Component Integration Tests", () => {
    beforeEach(async () => {
        await waitFor(() =>
            render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <RestaurantMenu />
                </BrowserRouter>
            </Provider>
            )
        );
    });
    it("should render Accordian component", async() => {
        const cart = await screen.findByText("Pot Rice (3)");
        expect(cart).toBeInTheDocument();
    });
});