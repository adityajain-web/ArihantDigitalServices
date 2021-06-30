import { HomeRounded, InfoRounded, BookRounded, LocalOfferRounded, PhoneRounded } from "@material-ui/icons";

export const NavbarMenu = [
    {
        navLink_text: "Home",
        navLink_icon: <HomeRounded />,
        navLink_path: "#home"
    },
    {
        navLink_text: "About",
        navLink_icon: <InfoRounded />,
        navLink_path: "#about"
    }, {
        navLink_text: "Services",
        navLink_icon: <BookRounded />,
        navLink_path: "#services"
    }, {
        navLink_text: "Pricing",
        navLink_icon: <LocalOfferRounded />,
        navLink_path: "#pricing"
    }, {
        navLink_text: "Contact",
        navLink_icon: <PhoneRounded />,
        navLink_path: "#contact"
    }];
