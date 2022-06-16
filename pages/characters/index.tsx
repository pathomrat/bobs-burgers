import { CircularProgress } from "@mui/material";
import { Box, styled } from "@mui/system";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import { Character } from "../../types/characters";

const Background = styled(Box)(({ theme }) => ({
  minHeight: `100vh`,
  height: `100%`,
  width: `100%`,
  padding: `50px 0`,
  backgroundColor: theme.palette.primary.main,
  display: `grid`,
  justifyContent: `center`,
  alignItems: `center`,
  gridTemplateColumns: `23% 23% 23% 23%`,
  gridGap: `20px`,
}));

const Characters: NextPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(
        `https://bobsburgers-api.herokuapp.com/characters/`
      );
      setCharacters(res.data.slice(0, 9));
      setLoading(false);
    };
    getCharacters();
  }, []);

  const handelClick = (id: number) => {
    router.push(`/characters/${id}`);
  };

  return (
    <Background>
      {characters.length > 0 && !loading ? (
        characters.map((c) => (
          <CharacterCard
            id={c.id}
            handleClick={handelClick}
            key={c.id}
            name={c.name}
            image={c.image}
          />
        ))
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Background>
  );
};

export default Characters;
