import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';

import { theme } from 'styles/theme';

export const ForbesListItem = () => {
  return (
    <div>
      <ForbesItem>
        <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Mark Zuckerberg"
        />
        <Name>Mark Zuckerberg</Name>
        <Capital>
          35.7 <BiDollarCircle color={theme.colors.accent} size={22} />
          {/* Тут має бути необхідна іконка зміни статку */}
        </Capital>
      </ForbesItem>
    </div>
  );
};
