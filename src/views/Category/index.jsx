import React from 'react';
import { ArticleList, ProfileCard } from '../../components';
import './style.css';
import { useParams } from 'react-router-dom';
import { useCategoriesByType, useCategory } from '../../api/CategoryAPI';


function DetailsList({ id, type }) {
    const cats = useCategoriesByType(id, type);
    
    const basePath = `/category/${id}`;
    return (<ArticleList
        items={cats.data}
        navButtons={[
        { to: `${basePath}/recommend`, title: '推荐' },
        { to: `${basePath}/latest`, title: '最新', },
        { to: `${basePath}/hot`, title: '热门', }
    ]}/>);
}

export const Category = () => {
    const { id, type = 'recommend' } = useParams();
    const category = useCategory(id);
    
    return (<React.Fragment>
        <div className='Category-info'>
            <ProfileCard tag='Category' {...category.data} />
        </div>
        <DetailsList id={id} type={type} />
    </React.Fragment >);
}
