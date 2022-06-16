import { Box, styled } from "@mui/system";
import Image from "next/image";

interface ICardProps {
  id: number;
  name: string;
  image: string;
  handleClick: (id: number) => void;
}

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  position: `relative`,
  height: `300px`,
  borderRadius: `16px`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  boxShadow: `0px 3px 5px ${theme.palette.secondary.dark};`,
}));

const ProfileImage = styled(Image)({
  borderRadius: `16px`,
});

const CharacterCard: React.FC<ICardProps> = (props) => {
  return (
    <Card onClick={() => props.handleClick(props.id)}>
      <ProfileImage
        src={props.image}
        width={150}
        height={150}
        alt={props.name}
      />
      {props.name}
    </Card>
  );
};

export default CharacterCard;
