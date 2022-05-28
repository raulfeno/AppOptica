import * as React from 'react';
import { StyleSheet,View,StatusBar } from 'react-native';

import Divisiones from './Divisiones'

const Home = () => {

    return (
        <View style={styles.layout}>
            <Divisiones />
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
});
export default Home;