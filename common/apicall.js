const SandboxUrl = 'https://api.devcom.dsp4f.net/ebb1179jpibmcom-dev/dsp-openapi';
const SandboxClientId = '6e9980da-2fad-49ac-a3f1-e0f3a6007cb3';
const SandboxClientSecret = 'L0pF8nF2wE6pY5yP1iD5hN4hM5uH4xI1pD2oN8eP4aX5sY7oC4';

const callApiLogin = (id,pw) => {
    const list = {
        'dojouser':'password',
        'suneo': 'password',
        'takeshi': 'password',
        'shizuka': 'password'
    }
    return (list[id] === pw);
}

const callApiToken = () => {

}

const callApiOrdinaryBalance = (branch,acctype,accnum) => {
    return fetch(SandboxUrl + '/ordinarydeposit/v1.2.0/ordinaryDeposit/accounts/balance/inquiry', {
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
                    "branchNumber": branch,
                    "accountType": acctype,
                    "accountNumber": accnum
                }
            ]
        })
    })
    .then(response => response.json()
    .then(json => {
        return json.inquireResult[0];
    })
    .catch((error) => {
        console.error(error);
        return '取得できませんでした'
    }));
}

const callApiOrdinaryStatement = (branch,acctype,accnum,params) => {

}

export default {
    callApiLogin,
    callApiOrdinaryBalance,
}