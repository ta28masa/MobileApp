import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../common/colors'

const LogoutScreen = ({navigation}) => {
    const execLogout = () => {
        navigation.navigate('Login');
    }

    return (
        <React.Fragment>
            <View style={styles.parentContainer}>
                <Animatable.View
                  style={styles.bottomContent}
                  animation="fadeInUpBig">
                    <Text style={styles.text}>ログアウトします。よろしいですか？</Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                          style={styles.signIn}
                          onPress={() => execLogout()}>
                            <Text style={styles.textSign}>ログアウト</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                          style={styles.signIn}
                          onPress={() => navigation.goBack()}>
                            <Text style={styles.textSign}>戻る</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
    },
    bottomContent: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginTop: '50%',
    },
    scrollView: {
    },
    text: {
      color: colors.Theme.black,
      paddingLeft: 15,
      fontSize: 16,
      marginTop: 20,
    },
    button: {
      backgroundColor: colors.Theme.softBlue,
      alignItems: 'center',
      marginTop: 25,
    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    textSign: {
      color: colors.Theme.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
});

export default LogoutScreen;