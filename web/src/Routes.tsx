import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { MainMenu } from './components/MainMenu';
import SwitchBox from './components/SwitchBox';
import { Container } from 'semantic-ui-react';

import * as Context from './Context';

const routes = 
<Context.UserContextProvider>
    <Context.NoticeContextProvider>
        <Context.ScheduleContextProvider>
            <Context.WeatherContextProvider>
                <BrowserRouter>
                    <div id = 'wrapper'>
                        <MainMenu />
                        <main style = {
                            {
                                margin: '1rem 0 1rem 16rem'
                            }
                        }>
                            <SwitchBox />
                        </main>
                    </div>
                </BrowserRouter>
            </Context.WeatherContextProvider>
        </Context.ScheduleContextProvider>
    </Context.NoticeContextProvider>
</Context.UserContextProvider>;

render(routes, document.getElementById('app'));