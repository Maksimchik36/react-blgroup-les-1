import { ForbesListItemYovbak } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesListYovbak.styled';

export const ForbesListYovbak = () => {
  return (
    <LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes Yovbak</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

      <LeaderBoardProfiles>
        <ForbesListItemYovbak />
        
        
    {/* Довільна кіл-сть FriendListItem */}
  </LeaderBoardProfiles>
</LeaderBoard>
  )
};
