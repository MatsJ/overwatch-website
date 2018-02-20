import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Match, Miss } from 'react';

import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
        {/* when on homepage which component should be shown*/}
            <div>
                <Match exactly pattern="/" component={App}/>
                {/*<Match pattern="/store/:storeId" component={App}/>*/}
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
