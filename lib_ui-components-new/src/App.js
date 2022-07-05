import { createElement as rc } from 'react';
import View from './View';
import Text from './Text';
export default function Application() {
    // prettier-ignore
    return rc(View, null,
        rc(Text, null, 'Hello lib')
    );
}
