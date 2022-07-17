import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';
import forbes from '../../data/forbes.json';

export const ForbesList = () => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {forbes.map(forbsItem => (
          <ForbesListItem key={forbsItem.id} list={forbsItem} />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
