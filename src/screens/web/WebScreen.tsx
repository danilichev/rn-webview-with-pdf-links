import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useMemo } from "react";
import { WebView, WebViewMessageEvent } from "react-native-webview";

import { MainStackParamList, screenNames } from "src/navigation";

import { styles } from "./styles";

type Props = NativeStackScreenProps<
  MainStackParamList,
  typeof screenNames.WebScreen
>;

export const WebScreen = ({ navigation, route }: Props) => {
  const jsCode = useMemo(
    () => `
      (function(){
        try {
          const links = document.getElementsByTagName("a");
          for (let link of links) {
              const linkExt = link.href.split(".").pop().toLowerCase();
              if (linkExt === "pdf") {
                  link.onclick = () => {
                      window.ReactNativeWebView.postMessage(JSON.stringify({ pdfLink: link.href }));
                      return false;
                  };
              }
          }
        } catch (e) {
            window.ReactNativeWebView.postMessage(JSON.stringify({ error: e.message }));
            console.log(e);
        }
      })();
      `,
    [],
  );

  const onMessage = useCallback(
    (event: WebViewMessageEvent) => {
      const data = JSON.parse(event.nativeEvent.data);

      if (data.pdfLink) {
        navigation.navigate(screenNames.PdfScreen, {
          title: data.pdfLink.split("/").pop(),
          url: data.pdfLink,
        });
      }
    },
    [navigation],
  );

  return (
    <WebView
      injectedJavaScript={jsCode}
      javaScriptEnabled
      onMessage={onMessage}
      scalesPageToFit
      source={{ uri: route.params.url }}
      style={styles.container}
    />
  );
};
