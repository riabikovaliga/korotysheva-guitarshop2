import React from 'react';
import {AppRoute} from '../../const';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs';
import {CatalogBlock} from '../catalog-block/catalog-block';
import {Filters} from '../filters/filters';
import {Pagination} from '../pagination/pagination';

const MainCatalog = () => {
    const breadcrumbs = [{title: 'Каталог', url: AppRoute.CATALOG}];

    return (
        <main className="main wrapper">
            <h1 className="main__title">Каталог гитар</h1>
            <Breadcrumbs list={breadcrumbs} className="main__breadcrumbs"/>
            <div className="main__content">
                <Filters className="main__filters"/>
                <CatalogBlock className="main__catalog"/>
            </div>
            <Pagination className="main__pagination"/>
        </main>
    );
};

export {MainCatalog};
