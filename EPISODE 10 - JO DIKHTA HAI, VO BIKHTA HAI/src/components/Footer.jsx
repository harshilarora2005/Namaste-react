const Footer = () => {
    return (
        <footer className="w-full text-center px-2.5 border-t-[1px] border-solid border-gray-300 text-3.5 text-[#666] bg-gray-100">
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </footer>
    );
};

export default Footer;
