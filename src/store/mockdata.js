const categorires = [{
    id: 0,
    title: 'GitHub',
    articleCount: 996
},
{
    id: 1,
    title: 'React',
    articleCount: 12
}, {
    id: 2,
    title: 'Redux',
    articleCount: 3
}, {
    id: 3,
    title: 'Scala',
    articleCount: 654
}, {
    id: 4,
    title: 'Docker',
    articleCount: 233333
}];

const articles = [{
    id: 0,
    createdOn: new Date().getTime(),
    category: categorires[0],
    title: '1# Thinking in React',
    author: { id: 0, name: 'Reactjs' },
    excerpt: 'One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.'
}, {
    id: 1,
    createdOn: new Date().getTime(),
    category: categorires[1],
    title: '2# Thinking in React',
    author: { id: 0, name: 'Reactjs' },
    excerpt: 'One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.'
}, {
    id: 2,
    createdOn: new Date().getTime(),
    category: categorires[2],
    title: '3# Thinking in React',
    author: { id: 0, name: 'Reactjs' },
    excerpt: 'One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.'
}];

const cats = new Map();
cats.set(0, { recommend: articles, latest: articles, hot: articles });
cats.set(1, { recommend: articles, latest: articles, hot: articles });
cats.set(2, { recommend: articles, latest: articles, hot: articles });

export default {
    category: {
        recommend: categorires
    },
    article: {
        items: articles,
        latest: articles
        , cats: cats
    }
};