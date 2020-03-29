import React from 'react';
import { ArticleList, ProfileCard } from '../../components';
import './style.css';
import { useQuery } from '../../core/useFetch';
import { useRouteMatch } from 'react-router-dom';


export const Category = () => {
    const match = useRouteMatch();
    
    const { id, type = 'recommend' } = match.params;
    const basePath = `/category/${id}`

    const baseApiPath = `/api/categories/${id}`
    const [data, query] = useQuery(`${baseApiPath}/${type}`, []);
    const buttons = [
        {
            to: `${basePath}/recommend`,
            title: '推荐',
            onClick: () => query(`${baseApiPath}/recommend`)
        },
        {
            to: `${basePath}/latest`,
            title: '最新',
            onClick: () => query(`${baseApiPath}/latest`)
        },
        {
            to: `${basePath}/hot`,
            title: '热门',
            onClick: () => query(`${baseApiPath}/hot`)
        }
    ];

    return (<React.Fragment>
        <div className='Category-info'>
            <ProfileCard tag='Category' name='Programming' description='React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.' />
        </div>
        <ArticleList navButtons={buttons} items={data.data} />
    </React.Fragment >)
}
