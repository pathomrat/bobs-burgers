import { Box, styled } from "@mui/system";
import axios from "axios";
import { NextPage } from "next";
import { Character } from "../../types/characters";

interface ICharacterDetailProps {
  character: Character | undefined;
}

const Background = styled(Box)(({ theme }) => ({
  minHeight: `100vh`,
  height: `100%`,
  width: `100%`,
  padding: `50px 0`,
  backgroundColor: theme.palette.primary.main,
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
}));

const CharacterDetail: NextPage<ICharacterDetailProps> = ({ character }) => {
  return (
    <Background>
      <ul>
        <li>{character?.name}</li>
        <li>{character?.gender}</li>
        <li>{character?.hairColor}</li>
        <li>{character?.occupation}</li>
        <li>{character?.voicedBy}</li>
        <li>{character?.firstEpisode}</li>
        <li>{character?.wikiUrl}</li>
      </ul>
    </Background>
  );
};

CharacterDetail.getInitialProps = async ({ query }) => {
  let character: Character | undefined = undefined;
  try {
    const res = await axios.get(
      `https://bobsburgers-api.herokuapp.com/characters/${query.id}`
    );
    character = res.data;
  } catch (err) {
    console.error(err);
  }

  return { character: character };
};

export default CharacterDetail;
