import {
  Card,
  CardHeader,
  CardPoster,
  CardBody,
  Tag,
  CardTitle,
  CardText,
  CardFooter,
  UserBox,
  Avatar,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';
import PropTypes from 'prop-types';

export const BlogCardTsapkov = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  posteAt,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt="card__image" />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt="Jane Doe" />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{posteAt}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};

BlogCardTsapkov.propTypes = {
  name: PropTypes.string.isRequired,
  posteAt: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
