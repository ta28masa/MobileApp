import React from 'react';
import {View} from 'react-native';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerScreen = ({navigation}, props) => {
  return(
    <View style={styles.parentView}>
    <DrawerContentScrollView {...this.props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={styles.profileImageView}>
            <View style={styles.profileTextView}>
              <Title style={styles.title}>
                {this.props.customerFName}{' '}
                {this.props.customerLName}
              </Title>
              <Caption style={styles.caption}>
                {this.props.customerId}
              </Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )}
            label="ホーム"
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="account" color={color} size={size} />
            )}
            label="お客様情報"
            onPress={() => {
              this.props.navigation.closeDrawer();
              this.props.navigation.navigate('Profile');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="cog" color={color} size={size} />
            )}
            label="設定"
            onPress={() => {
              this.props.navigation.closeDrawer();
              this.props.navigation.navigate('Settings');
            }}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
    <Drawer.Section style={styles.bottomDrawerSection}>
      <DrawerItem
        icon={({color, size}) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        label="ログアウト"
        onPress={() => {
          this.signOut();
        }}
      />
    </Drawer.Section>
  </View>
  );
}