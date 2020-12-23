import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { MainMenu } from './components/main';
import { SwitchBox } from './components/SwitchBox';
import { Container } from 'semantic-ui-react';

const routes = 
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
</BrowserRouter>;

render(routes, document.getElementById('app'));