import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import NewsListComponent from '../news/NewsList';

const AppRouter = () => {
    return(
        <div style={style}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path = "/" element = {<NewsListComponent/>}/>
                        <Route path = "/home" element = {<NewsListComponent/>}/>
                    </Routes>
                </BrowserRouter>
        </div>
    )
}
const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;