import React, {useEffect, Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {useStoreState, useStoreActions} from 'easy-peasy';

import {Spinner, MainHeader} from './components/shared';
import Home from './routes/Home'

const Categories = lazy(() => import('./routes/Categories'));
const Article = lazy(() => import('./routes/Article'));
const Recipe = lazy(() => import('./routes/Recipe'));


function App() {
    const fetchCategories = useStoreActions(state => state.categories.fetchCategories);
    const categories = useStoreState(state => state.categories.list)

    useEffect(() => {
        fetchCategories();
    }, [])

    if (!categories) return <Spinner />
    return (
        <div>
            <Router>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/categories" component={Categories} />
                        <Route path="/articles/:id" component={Article} />
                        <Route path="/recipes/:id" component={Recipe} />
                        <Redirect from="/*" to="/" />
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
