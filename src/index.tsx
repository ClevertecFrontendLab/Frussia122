import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, history } from '@app/store/store';
import { HistoryRouter } from 'redux-first-history/rr6';
import 'antd/dist/antd.css';
import 'normalize.css';
import { publicRoutes } from '@app/routes/routes';


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
        <Provider store={store}>
            <HistoryRouter history={history}>
                {publicRoutes}
            </HistoryRouter>
        </Provider>
);
