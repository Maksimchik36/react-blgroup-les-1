import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItemAnna.styled';

export const StatisticItemAnna = ({id, total, title }) => {
  return <StatisticBox key={id}>
    {/* Тут має бути іконка */}
    <StatisticCounter>{total}</StatisticCounter>
    <StatisticText>{title}</StatisticText>
  </StatisticBox>;
};
