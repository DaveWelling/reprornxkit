import { createElement as rc } from 'react';
export default function Text(props) {
    const { children, ...other } = props;
    return rc('span', other, children);
}
