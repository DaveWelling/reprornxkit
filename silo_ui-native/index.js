// load polyfills just by importing
// eslint-disable-next-line no-unused-vars
import { AppRegistry, LogBox } from 'react-native';
import { createElement as rc } from 'react';
import { name as appName } from './app.json';
import { App } from 'lib_ui-components-new';

// eslint-disable-next-line no-console
LogBox.ignoreLogs([/Remote debugger is in a background/, /[SOCKETS]/]);

// Certain services (like RFID/BLE) which are specific to the device are easier to
// register from that context.
// TODO:  Think of a way to implement them using .native
// naming or similar.
const OuterEventBoundary = () => {
    // prettier-ignore
    return rc(NativeUi);
};
const NativeUi = () => {
    return rc(App, null);
};
AppRegistry.registerComponent(appName, () => OuterEventBoundary);
