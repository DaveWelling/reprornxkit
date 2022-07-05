import { createElement as rc } from 'react';
export default function View(props) {
    const { children, ...other } = props;
    return rc('div', other, children);
}
