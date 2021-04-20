import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import util from '../common/util';
import apicall from '../common/apicall';
import colors from '../common/colors';

const HomeScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [accountNumber, setAccountNumber] = useState('');
    const [accountType, setAccountType] = useState('');
    const [balance, setBalance] = useState('');
    const [branchName, setBranchName] = useState('');
    const [recordTime, setRecordTime] = useState('');
    useEffect(() => {
      setIsLoading(true);
      setBranchName('');
      setAccountType('');
      setAccountNumber('');
      setRecordTime('');
      setBalance('');
      apicall.callApiOrdinaryBalance('0000','000','1234567').then(bal => {
        setBranchName(bal.branchKanjiName);
        setAccountType(util.getAccountType(bal.accountType));
        setAccountNumber(bal.accountNumber);
        setRecordTime(bal.recordTime);
        setBalance(bal.availableAmount);
        setIsLoading(false);
      });
    },[]);

    return (
        <React.Fragment>
            <View style={styles.parentContainer}>
                <StatusBar backgroundColor="#1E2171" barStyle="light-content" />
                <SafeAreaView>
                    <ScrollView
                      contentInsetAdjustmentBehavior="automatic"
                      style={styles.scrollView}>
                        <View style={styles.balanceContainer}>
                            <View style={styles.balanceInfo}>
                              <Text style={styles.cardTextBig}>
                                  {isLoading ? <ActivityIndicator /> : branchName }
                              </Text>
                              <Text style={styles.cardTextBig}>
                                {isLoading ? <ActivityIndicator /> : (accountType + ' - ' + accountNumber) }
                              </Text>
                            </View>
                            <View style={styles.amountContainer}>
                                <Text style={styles.amount}>{isLoading ? <ActivityIndicator /> : balance }</Text>
                                <Text style={styles.ccyUnitText}> 円</Text>
                            </View>
                            <View style={styles.balanceInfo}>
                              <Text style={styles.cardTextBig}>
                                {isLoading ? <ActivityIndicator /> : '(' + recordTime + ' 現在)' }
                              </Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
      </React.Fragment>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
      backgroundColor: colors.Theme.white,
    },
    balanceContainer: {
      marginTop: 50,
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    balanceInfo: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTextBig: {
      color: colors.Theme.darkGray,
      fontSize: 16,
      marginBottom: 5
    },
    cardTextSmall: {
      color: '#4E4E4E',
      fontSize: 15,
    },
    scrollView: {
      marginBottom: 70,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      textAlign: 'center',
    },
    smallText: {
      fontSize: 16,
      marginTop: 20,
      marginBottom: 10,
    },
    ccyUnitText: {
      fontSize: 14,
    },
    amount: {
      fontSize: 48,
      fontWeight: 'bold',
    },
    amountContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
});

export default HomeScreen;