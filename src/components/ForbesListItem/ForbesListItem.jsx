import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';

import { theme } from 'styles/theme';

export const ForbesListItem = ({ list }) => {
  return (
    <ForbesItem>
      <Avatar src={list.avatar} alt="{list.name}" />
      <Name>{list.name}</Name>
      <Capital>
        {list.capital} <BiDollarCircle color={theme.colors.accent} size={22} />
        {list.isIncrease === true ? FcBullish : FcBearish}
      </Capital>
    </ForbesItem>
  );
};
