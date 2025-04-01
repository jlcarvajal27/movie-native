import { StatusBar } from "react-native";

import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6200EE"
        hidden={false}
        translucent={true}
        animated={true}
      />
    </QueryClientProvider>
  );
};

export default RootLayout;
