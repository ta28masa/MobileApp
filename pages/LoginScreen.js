import React, {useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import * as Animatable from 'react-native-animatable';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import apicall from '../common/apicall';
import utils from '../common/util'
import colors from '../common/colors'

const LoginScreen = ({navigation}) => {
    const execLogin = () => {
      if (apicall.callApiLogin(userid,passwd)) {
        setUserid('');
        setPasswd('');
        setErrorMessage('');
        navigation.navigate('Home');
      } else {
        setErrorMessage('IDまたはパスワードに誤りがあります。');
      }
    }
    const [userid, setUserid] = useState('');
    const [passwd, setPasswd] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    return (
        <React.Fragment>
            <View style={styles.parentContainer}>
                <SafeAreaView>
                    <ScrollView
                      contentInsetAdjustmentBehavior="automatic"
                      style={styles.scrollView}>
                        <View style={styles.topContent}>
                            <Animatable.Image
                            animation="bounceIn"
                            duraton="1500"
                            source={require('../assets/logo.png')}
                            style={styles.logo}
                            />
                            <Text style={styles.title}>ログイン</Text>
                            <Text style={styles.text}>ユーザIDとパスワードを入力してください。</Text>
                            {errorMessage ? <Text style={styles.errtext}>{errorMessage}</Text> : null}
                         </View>
                        <Animatable.View
                            style={styles.bottomContent}
                            animation="fadeInUpBig">
                            <FloatingLabelInput style={styles.input}
                              label={'ユーザID'}
                              value={userid}
                              onChangeText={(v) => setUserid(v)}
                              autoCapitalize = 'none'
                            />
                            <Text></Text>
                            <FloatingLabelInput style={styles.input}
                              label={'パスワード'}
                              value={passwd}
                              onChangeText={(v) => setPasswd(v)}
                              autoCapitalize = 'none'
                              isPassword
                              togglePassword={false}
                              customShowPasswordComponent={<Feather name="eye-off" style={styles.passIcon} />}
                              customHidePasswordComponent={<Feather name="eye" style={styles.passIcon} />}
                            />
                            <View style={styles.button}>
                                <TouchableOpacity
                                  style={styles.signIn}
                                  onPress={() => execLogin()}>
                                    <Text style={styles.textSign}>ログイン</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bottomPannels}>
                                <TouchableOpacity
                                  onPress={() => navigation.navigate('API')}
                                  style={styles.bottomPannel}>
                                    <Entypo name="code" style={styles.bottomPanelIcon} />
                                    <Text>APIテスト</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomPannel}>
                                    <Entypo name="fingerprint" style={styles.bottomPanelIcon} />
                                    <Text>工事中</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomPannel}>
                                    <Feather name="message-square" style={styles.bottomPanelIcon} />
                                    <Text>工事中</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomPannel}>
                                    <Feather name="bell" style={styles.bottomPanelIcon} />
                                    <Text>工事中</Text>
                                </TouchableOpacity>
                            </View>
                        </Animatable.View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
      flex: 1
    },
    topContent: {
      flex: 1
    },
    bottomContent: {
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    scrollView: {
    },
    logo: {
      width: Dimensions.get('window').width,
      height: utils.calcHeight(require('../assets/logo.png')),
    },
    title: {
      paddingLeft: 15,
      fontSize: 34,
      fontWeight: 'bold',
      marginTop: 20,
    },
    text: {
      color: colors.Theme.black,
      paddingLeft: 15,
      fontSize: 16,
      marginTop: 20,
    },
    errtext: {
      color: colors.Theme.redSoft,
      paddingLeft: 15,
      fontSize: 16,
    },
    input: {
      padding: 50,      
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
    passIcon: {
      fontSize: 30,
    },
    spinnerContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    bottomPannels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: 100,
      marginTop: 25,
    },
    bottomPannel: {
      width: '20%',
      backgroundColor: colors.Theme.gray,
      color: colors.Theme.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomPanelIcon: {
      fontSize: 40,
    }
});

export default LoginScreen;