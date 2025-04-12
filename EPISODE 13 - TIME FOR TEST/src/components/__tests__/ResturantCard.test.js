import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../../__mocks__/resCardMock.json";
import { BrowserRouter} from "react-router"; 
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
test("should render RestaurantCard component with props", () => {
    render(
        <Provider store={appStore}>
        <BrowserRouter>
            <ResturantCard {...MOCK_DATA}/>
        </BrowserRouter>
        </Provider>
    )
    const resName = screen.getByText(MOCK_DATA.name);
    expect(resName).toBeInTheDocument();
});