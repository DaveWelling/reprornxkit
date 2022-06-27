import camelcase from 'lodash.camelcase';
import { createElement as rc } from 'react';
import { View, Text } from 'react-native';
export default function Application() {
    // prettier-ignore
    return rc(View, null,
        rc(Text, null, 'Hello lib')
    );
}
