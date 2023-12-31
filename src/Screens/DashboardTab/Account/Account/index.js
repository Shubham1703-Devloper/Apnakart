import {PropTypes} from 'prop-types';
import React, {PureComponent, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import Button from '../../../../Components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddlistItems,
  RemoveItemtoKart,
} from '../../../../Redux/Actions/Actions';
import {ListReducers} from '../../../../Redux/reducer/Reducers';
import CustomTopBar from '../../../../Components/CustomTopBar';
import {Menu, Provider, Switch} from 'react-native-paper';
import styles from './styles';
import { useDashboardContext } from '../../../../Context/DashboardContext';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Account = props => {
  const {
    closeMenu,
    showmenu,
    datacount,
    visible,
    onToggleSwitch,
    isSwitchOn, setIsSwitchOn,loginstart
  } = useDashboardContext();


  const [loginuser, setloginuser] = useState({});

  useEffect(()=>{
    startlogin()
  },[])
  
  useEffect(()=>{
    loginstart()
  },[isSwitchOn])
  
  const startlogin = async () => {
    var loginmember;
    loginmember = JSON.parse(await AsyncStorage.getItem('loginmember'));
    setloginuser(loginmember);
    console.log('loginuser====',loginmember);
  };



  return (
    <View style={styles.container}>
      <Provider>
        {console.log(isSwitchOn)}
        <CustomTopBar
          title={'ApnaKart'}
          onDismiss={closeMenu}
          showmenu={showmenu}
          datacount={datacount}
          visible={visible}
          RighticonPress={() => props.navigation.navigate('Addkart')}
          LeftIconPress={() => props.navigation.openDrawer()}
          searchIconPress={() => {}}
          LeftIcon={'menu'}
          MenuItem={
            <>
              <Menu.Item onPress={() => {}} title="Setting" />
              <Menu.Item onPress={() => {}} title="Search" />
              <Menu.Item onPress={() => {}} title="Filter" />
              <Menu.Item onPress={() => {}} title="Help" />
              <Menu.Item onPress={() => {}} title="FeedBack" />
              <Menu.Item onPress={() => {}} title="Log Out" />
            </>
          }
        />

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
          }}>
          <Text style={styles.SimilarType}>Smart Login Enable</Text>
          <TouchableOpacity>
            <Switch
              value={isSwitchOn}
              onChange={() => onToggleSwitch() }
            />
          </TouchableOpacity>
        </View>
      </Provider>
    </View>
  );
};

export default Account;

{
  /* <Button onPress={() => props.navigation.openDrawer()} title="Press" /> */
}
{
  /* <View style={{marginTop: 40}}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={60}
          showRating={true}
          minValue={0}
          maxValue={5}
          startingValue={0}
          fractions={1.5}
          jumpValue={0.5}
          onFinishRating={rating => console.log(rating)}
        />
      </View> */
}
