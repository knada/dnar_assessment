import { FC } from "react";
import SearchIcon from "../SvgComponents/SearchIcon";
import {
    HeaderContainer,
    SearchBar,
    SearchBarContainer,
} from "./Header.styles";

const Header: FC = () => {
    return (
        <HeaderContainer>
            <SearchBarContainer>
                <SearchIcon />
                <SearchBar placeholder="search" />
            </SearchBarContainer>
        </HeaderContainer>
    );
};

export default Header;
