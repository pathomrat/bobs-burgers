import type { NextPage } from "next";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

interface LinkProps {
  title: string;
  link: string;
}

const BackgroundImg = styled(Box)({
  height: `100vh`,
  width: `100vw`,
  backgroundImage: `url("./images/background-image.jpeg")`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  backgroundPositionX: `center`,
  backgroundPositionY: `100%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
});

const Menu = styled(Box)(({ theme }) => ({
  padding: `48px 72px`,
  borderRadius: `24px`,
  backgroundColor: theme.palette.primary.main,
  boxShadow: `0px 5px 10px ${theme.palette.black};`,
}));

const MenuItem = styled("li")(({ theme }) => ({
  width: `80%`,
  padding: `16px 0`,
  backgroundColor: theme.palette.secondary.main,
  textAlign: `center`,
  listStyleType: `none`,
  borderRadius: `16px`,
  margin: `16px auto`,
  boxShadow: `0px 2px 4px ${theme.palette.secondary.dark};`,
  cursor: `pointer`,
  transition: `all .3s`,

  "&:hover": {
    transform: `translateY(-3px)`,
    boxShadow: `0px 4px 10px ${theme.palette.secondary.dark};`,
  },

  "&:active": {
    transform: `translateY(-2px)`,
    boxShadow: `0px 3px 6px ${theme.palette.secondary.dark};`,
  },
}));

const links: LinkProps[] = [{ link: "characters", title: "Characters" }];

const TitleText = styled(Typography)({});

const Home: NextPage = () => {
  const router = useRouter();

  const handleClickLink = (link: string) => {
    router.push(link);
  };

  return (
    <BackgroundImg>
      <Menu>
        <TitleText variant="h1">Bob's Burgers</TitleText>
        <ul>
          {links.map((link) => (
            <MenuItem>
              <Typography
                variant="h4"
                onClick={() => handleClickLink(link.link)}
              >
                {link.title}
              </Typography>
            </MenuItem>
          ))}
        </ul>
      </Menu>
    </BackgroundImg>
  );
};

export default Home;
