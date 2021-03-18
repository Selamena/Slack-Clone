import React from 'react'
// import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const Header = () => {
    return (
		<HeaderContainer>
                <HeaderLeft>
					<HeaderAvatar
						//onClick
					/>
					<AccessTimeIcon/>
                </HeaderLeft>

				{/*Header Search*/}

				{/*Header Right*/}
		</HeaderContainer>
		);
}

export default Header

const HeaderContainer = styled.h1`
	color: red;
`;
const HeaderLeft = styled.div`display:flex`;

const HeaderAvatar = styled(Avatar)``;