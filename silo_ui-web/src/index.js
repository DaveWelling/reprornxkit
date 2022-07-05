import { createElement as rc, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { App } from 'lib_ui-components-new';

async function startup() {
    ReactDOM.render(rc(App), document.getElementById('root'));
}

startup();
