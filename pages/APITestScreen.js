import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
import JSONTree from 'react-native-json-tree'
import colors from '../common/colors'

const SandboxUrl = 'https://api.devcom.dsp4f.net/ebb1179jpibmcom-dev/dsp-openapi';
const SandboxClientId = '6e9980da-2fad-49ac-a3f1-e0f3a6007cb3';
const SandboxClientSecret = 'L0pF8nF2wE6pY5yP1iD5hN4hM5uH4xI1pD2oN8eP4aX5sY7oC4';

const APITestScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setResp] = useState('');

    const testAPI = () => {
      setIsLoading(true);
      fetch(SandboxUrl + '/ordinarydeposit/v1.2.0/ordinaryDeposit/accounts/balance/inquiry', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-IBM-Client-Id': SandboxClientId,
            'X-IBM-Client-Secret': SandboxClientSecret,
        },
        body: JSON.stringify({
            "commonRequestHeader": {
                "bankCode": "0000",
            },
            "inquireAccount": [
                {
                    "branchNumber": "0000",
                    "accountType": "000",
                    "accountNumber": "1234567"
                }
            ]
        })
      })
      .then((response) => response.json())
      .then((json) => {
        setResp(json);
        setIsLoading(false);
        return true;
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        return false;
      });
    }

    return (
        <React.Fragment>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => testAPI()}>
                  <Text style={styles.textSign}>テスト</Text>
              </TouchableOpacity>
            </View>
            <View>{isLoading ? <ActivityIndicator /> : <JSONTree data={apiResponse} />}</View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
  signIn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.Theme.softBlue,
    alignItems: 'center',
  },
  textSign: {
    color: colors.Theme.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default APITestScreen;