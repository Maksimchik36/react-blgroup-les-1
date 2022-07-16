import {
  BlogCardYurDov,
  Container,
  Section,
  Heading,
  Statistics,
  StatisticsAnna,
  ForbesList,
  CryptoHistory,
  ForbesListYovbak 
} from 'components';
import article from 'data/article.json'

import data from 'data/data.json'
import forbes from 'data/forbes.json';
import {BlogCard} from '../BlogCard/BlogCard'
import {BlogCardVas} from '../../components/BlogCardVas/BlogCardVas';
import { BlogCardTsapkov } from 'components/BlogCard/BlogCardTsapkov';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>

        <BlogCardYurDov />
        
        <BlogCardVas 
        poster={article.poster} 
        tag={article.tag} 
        title={article.title}
        description={article.description}
        name={article.name}
        avatar={article.avatar}
        postedAt={article.postedAt}
        />
                
        <BlogCardTsapkov
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          name={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />
        
        <BlogCard poster={article.poster}
  tag={article.tag}
  title={article.title}
  description={article.description}
  userName={article.name}
  avatar={article.avatar}
  postedAt={article.postedAt}/>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>

        <Statistics />
        <StatisticsAnna title="Statistics Tsisar" data={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList />
       <ForbesListYovbak list={forbes} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory />
      </Container>
    </Section>
  );
};