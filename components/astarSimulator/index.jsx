import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const AstarSimulator = () => {
  const uri = 'http://static.devnology.co.kr/apps/astar/index.html';
  // const uri = 'https://s3.ap-northeast-2.amazonaws.com/static.devnology.com/apps/astar/index.html';

  return (<View style={styles.container}>
    <WebView source={{ uri: uri }} style={styles.webview} />
    {/* <Text>Astar Simulator 2222dsddfjdsfjkdlasjfkasdjf;jasdfk;jasdkfjasdk;j;fjksdla</Text>
    <WebView source={{ uri: uri }} style={styles.container} /> */}
  </View>);
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  webview: {}
});

export default AstarSimulator;
