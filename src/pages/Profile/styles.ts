import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const HeaderButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 180px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 180px;
`;

export const UserAvatarButton = styled(RectButton)``;

export const UserAvatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 98px;
  align-self: center;
`;
