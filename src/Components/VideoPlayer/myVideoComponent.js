import { useRef } from "react";
import styles from "../../screens/MainScreen/style";
import Video, { VideoRef } from 'react-native-video';

export const MyVideoComponent = ({ videoUrl }) => {
    const videoRef = useRef(null);

    const onBuffer = (buffer) => {
      console.log('Buffering...', buffer);
    };

    const onError = (error) => {
      console.error('Video Error:', error);
    };

    return (
      <Video
        source={videoUrl}
        ref={videoRef}
        style={styles.video}
        controls={true}
        paused={false}
        repeat={true}
        onBuffer={onBuffer}
        onError={onError}
      />
    );
  };