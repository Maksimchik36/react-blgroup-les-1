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


export const BlogCard = (props) => {
  const {poster, tag, title, description, userName, avatar, postedAt} = props;
  return (<Card className='Card'>
    <CardHeader className='CardHeader'>
      <CardPoster className='CardPoster'
        src={poster}
        alt={title}
      />
    </CardHeader>
    <CardBody className='CardBody'>
      <Tag className='Tag'>{tag}</Tag>
      <CardTitle className='CardTitle'>{title}</CardTitle>
      <CardText className='CardText'>{description}</CardText>
    </CardBody>
    <CardFooter className='CardFooter'>
      <UserBox className='UserBox'>
        <Avatar className='Avatar' src={avatar} alt={userName} />
        <UserInfo className='UserInfo'>
          <UserName className='UserName'>{userName}</UserName>
          <Date className='Date'>{postedAt}</Date>
        </UserInfo>
      </UserBox>
    </CardFooter>
  </Card>)
}

BlogCard.propTypes = {
  poster: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  userName: PropTypes.string,
  avatar: PropTypes.string,
  postedAt: PropTypes.string,
}