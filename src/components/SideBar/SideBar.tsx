import { FC } from "react";
import { css } from "styled-components";
import ChartBarIcon from "../SvgComponents/ChartBarIcon";
import DashboardIcon from "../SvgComponents/DashboardIcon";
import MenuIcon from "../SvgComponents/MenuIcon";
import {
    SideBarBrand,
    SideBarContainer,
    SidebarHeader,
    SideBarMenu,
    SideBarMenuButton,
    SideBarMenuIcon,
    SideBarMenuItem,
    SideBarMenuLink,
    SideBarMenuText,
} from "./SideBar.styles";

const iconStyle = css`
    height: 100%;
    padding: 0;
`;

const SideBar: FC = () => {
    return (
        <SideBarContainer>
            <SidebarHeader>
                <SideBarMenuButton>
                    <MenuIcon iconStyle={iconStyle} />
                </SideBarMenuButton>
                <SideBarBrand>Logo</SideBarBrand>
            </SidebarHeader>
            <SideBarMenu>
                <SideBarMenuItem>
                    <SideBarMenuLink to="/">
                        <SideBarMenuIcon>
                            <DashboardIcon iconStyle={iconStyle} />
                        </SideBarMenuIcon>
                        <SideBarMenuText>Dashboard</SideBarMenuText>
                    </SideBarMenuLink>
                </SideBarMenuItem>
                <SideBarMenuItem>
                    <SideBarMenuLink to="/coins">
                        <SideBarMenuIcon>
                            <ChartBarIcon iconStyle={iconStyle} />
                        </SideBarMenuIcon>
                        <SideBarMenuText>Coin Details</SideBarMenuText>
                    </SideBarMenuLink>
                </SideBarMenuItem>
            </SideBarMenu>
        </SideBarContainer>
    );
};

export default SideBar;
