import PropTypes from 'prop-types';

import {Card, CardHeader, CardPoster, CardBody, Tag, CardTitle, CardText, CardFooter, UserBox, Avatar, UserInfo, UserName, Date,   } from './BlogCard.styled';

export const BlogCardVas = ({poster, tag, title, description, name, avatar, postedAt}) => {
    return (
    <Card>
        <CardHeader>
            <CardPoster
            src={poster}
            alt="card__image"
            />
        </CardHeader>
        <CardBody>
            <Tag>{tag}</Tag>
            <CardTitle>{title}</CardTitle>
            <CardText>
            {description}
            </CardText>
        </CardBody>
        <CardFooter>
            <UserBox>
            <Avatar src={avatar} alt="Jane Doe" />
            <UserInfo>
                <UserName>{name}</UserName>
                <Date>{postedAt}</Date>
            </UserInfo>
            </UserBox>
        </CardFooter>
    </Card>
    );
};

BlogCardVas.propTypes = {
    poster: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
}
