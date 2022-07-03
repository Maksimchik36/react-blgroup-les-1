import { StatisticItemAnna } from 'components/StatisticItemAnna/StatisticItemAnna';
import { StatisticsList, StatisticTitle } from './StatisticsAnna.styled';
// import { FaRegThumbsUp } from 'react-icons/fa';
// import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
// import { GiTreeDoor } from 'react-icons/gi';

export const StatisticsAnna = ({ title, data }) => {
	return (
		<>
			{title && <StatisticTitle>{title}</StatisticTitle>}

			<StatisticsList>
				{data.map(dataEl => (
					<StatisticItemAnna
						key={dataEl.id}
						title={dataEl.title}
						total={dataEl.total}
					/>
				))}
			</StatisticsList>
		</>
	);
};
