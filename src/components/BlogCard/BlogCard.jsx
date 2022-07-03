import React from "react";
import { Card, UserName, Date, CardFooter, CardHeader,CardPoster,CardBody,CardTitle,CardText,Tag,UserBox,Avatar,UserInfo } from "./BlogCard.styled";
import PropTypes from 'prop-types'

export const BlogCardYurDov = ({poster,tag,title,description,name,avatar,postedAt}) => {
  return <div>
    <Card>
  <CardHeader>
    <CardPoster
      src={poster}
      alt="card__image"
    />
  </CardHeader>
  <CardBody>
        <Tag>{ tag}</Tag>
        <CardTitle>{ title }</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
          <Avatar src={ avatar } alt="Jane Doe" />
      <UserInfo>
        <UserName>{name}</UserName>
        <Date>{postedAt}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>
  </div>;
};

BlogCardYurDov.propTypes = {
  poster: PropTypes.string,
  tag:PropTypes.string,
  title:PropTypes.string,
  description:PropTypes.string,
  userName:PropTypes.string,
  avatar:PropTypes.string,
  postedAt:PropTypes.string,
}