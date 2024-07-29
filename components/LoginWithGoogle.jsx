import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

// https://console.cloud.google.com/
const webClientId =
  "497032363414-vbhi46ci0no7t565sgjs79ddoiu3n0pl.apps.googleusercontent.com";
const androidClientId =
  "497032363414-pgn9tlqgasr7vgl0enu20sg6httrfv1r.apps.googleusercontent.com";
const iosClientId =
  "497032363414-ai9ftljom9g4aeicem758gp3mj56bcov.apps.googleusercontent.com";

WebBrowser.maybeCompleteAuthSession();

const LoginWithGoogle = () => {
  const config = {
    webClientId,
    iosClientId,
    androidClientId,
  };

  const [request, response, promptAsync] = Google.useAuthRequest(config);

  const handleToken = () => {
    if (response?.type === "success") {
      const { authentication } = response;
      const token = authentication?.accessToken;
      console.log("access token: ", token);
    }
  };

  useEffect(() => {
   handleToken();
  }, [response]);

  return (
    <View>
      <TouchableOpacity onPress={() => promptAsync()}>
        <Text>Login With Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginWithGoogle;
