import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Character } from "../../types/characters";

const Characters: NextPage = () => {
  const [characters, setCharacters] = useState<Character[]>();

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(
        `https://bobsburgers-api.herokuapp.com/characters/`
      );
      setCharacters(res.data);
    };
    getCharacters();
  }, []);

  return (
    <div>
      <ul>
        {characters?.map((c) => (
          <li key={c.id}>{c.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
