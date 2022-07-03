import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
  ForbesListYovbak
  
} from 'components';
import forbes from 'data/forbes.json';

import article from 'data/article.json';
import {BlogCardVas} from '../../components/BlogCardVas/BlogCardVas';
import { BlogCardTsapkov } from 'components/BlogCard/BlogCardTsapkov';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCardVas 
        poster={article.poster} 
        tag={article.tag} 
        title={article.title}
        description={article.description}
        name={article.name}
        avatar={article.avatar}
        postedAt={article.postedAt}
        />
        <BlogCard />
        <BlogCardTsapkov
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          userName={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics/>

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
