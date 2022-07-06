import { createElement as rc } from 'react';
import View from './View';
import Text from './Text';
export default function Application() {
    const someThing = __IS_A_VALUE__;
    // prettier-ignore
    return rc(View, null,
        rc(Text, null, 'Hello lib | '),
        rc(Text, null, someThing)
    );
}
