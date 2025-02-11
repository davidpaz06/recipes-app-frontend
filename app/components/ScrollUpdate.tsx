import React, { useRef, useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

interface ScrollUpdateProps {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
  onUpdate: () => Promise<void>;
}

const ScrollUpdate: React.FC<ScrollUpdateProps> = ({
  children,
  contentContainerStyle,
  onUpdate,
}) => {
  const scrollOffsetY = useRef(0);
  const [loading, setLoading] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const offsetDifference = scrollOffsetY.current - currentOffset;
    scrollOffsetY.current = currentOffset;

    if (currentOffset < -180 && !loading) {
      setLoading(true);
      onUpdate().finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    if (!loading) {
      scrollOffsetY.current = 0;
    }
  }, [loading]);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#353535" />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={[
            styles.scrollViewContent,
            contentContainerStyle,
          ]}
          horizontal={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {children}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {},
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export default ScrollUpdate;
