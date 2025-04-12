import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter, useNavigate } from "react-router"; 
import "@testing-library/jest-dom";
import UserContext from "../../utils/UserContext";

jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useNavigate: jest.fn(),
}));

const renderHeader = (contextValue) => {
    return render(
        <BrowserRouter>
        <Provider store={appStore}>
            <UserContext.Provider value={contextValue}>
            <Header />
            </UserContext.Provider>
        </Provider>
        </BrowserRouter>
    );
};

describe.skip("Header Component", () => {
    const mockNavigate = jest.fn();
    
    const defaultContext = {
        isLoggedIn: false,
        setIsLoggedIn: jest.fn(),
        loggedInUser: "Guest",
        setUserName: jest.fn(),
    };

    beforeEach(() => {
        // Reset all mocks before each test
        jest.clearAllMocks();
        useNavigate.mockReturnValue(mockNavigate);
    });

    it("should render logo image", () => {
        renderHeader(defaultContext);
        const logo = screen.getByAltText("Logo");
        expect(logo).toBeInTheDocument();
    });

    it("should display user's initial and name", () => {
        renderHeader({ ...defaultContext, loggedInUser: "Haru" });
        expect(screen.getByText("Hi,")).toBeInTheDocument();
        expect(screen.getByText("Haru")).toBeInTheDocument();
    });

    it("should display login button when user is not logged in", () => {
        renderHeader(defaultContext);
        expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    });

    it("should display logout button when user is logged in", () => {
        renderHeader({ ...defaultContext, isLoggedIn: true });
        expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
    });

    it("should call setIsLoggedIn and setUserName when logout is clicked", () => {
        const mockSetIsLoggedIn = jest.fn();
        const mockSetUserName = jest.fn();
        renderHeader({
        ...defaultContext,
        isLoggedIn: true,
        setIsLoggedIn: mockSetIsLoggedIn,
        setUserName: mockSetUserName,
        });

        const logoutButton = screen.getByRole("button", { name: "Logout" });
        fireEvent.click(logoutButton);

        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(false);
        expect(mockSetUserName).toHaveBeenCalledWith("Guest");
    });

    it("should navigate to /login when login is clicked", () => {
        renderHeader(defaultContext);
        const loginButton = screen.getByRole("button", { name: "Login" });
        fireEvent.click(loginButton);
        expect(mockNavigate).toHaveBeenCalledWith("/login");
    });

    it("should show correct cart count", () => {
        renderHeader(defaultContext);
        const badge = screen.getByText("0");
        expect(badge).toBeInTheDocument(); 
    });

    it("should display online status correctly", () => {
        renderHeader(defaultContext);
        const statusDot = screen.getByRole("status-dot");
        expect(statusDot).toBeInTheDocument();
        
    });
});