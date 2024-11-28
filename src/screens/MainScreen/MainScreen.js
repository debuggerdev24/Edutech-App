import React, {useRef, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import mockData from '../../constance/constance';
import styles from './style';
import Video, { VideoRef } from 'react-native-video';
import { MyVideoComponent } from '../../Components/VideoPlayer/myVideoComponent';

const MainScreen = () => {
  const [teachers, setTeachers] = useState(mockData);
  const swiperRef = useRef(null);

//   const MyVideoComponent = ({ videoUrl }) => {
//     const videoRef = useRef(null);

//     const onBuffer = (buffer) => {
//       console.log('Buffering...', buffer);
//     };

//     const onError = (error) => {
//       console.error('Video Error:', error);
//     };

//     return (
//       <Video
//         source={videoUrl}
//         ref={videoRef}
//         style={styles.video}
//         controls={true}
//         paused={false}
//         repeat={true}
//         onBuffer={onBuffer}
//         onError={onError}
//       />
//     );
//   };

  const handleSwipe = (index, action) => {
    const teacher = teachers[index];
    console.log(`${action} - ${teacher.name}`);
  };

  const swipeLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  const swipeRight = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  return (
    <View style={styles.containerView}>
      <Swiper
        ref={swiperRef}
        cards={teachers}
        renderCard={card => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: card?.backgroundColor || 'white',
              },
            ]}>
            <Text style={styles.name}>{card.name}</Text>
            <Text style={styles.info}>Expertise: {card.expertise}</Text>
            <Text style={styles.info}>Experience: {card.experience}</Text>
            <View style={styles.videoView}>
              <MyVideoComponent videoUrl={require('../../assets/videos/demo.mov')} />
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={swipeLeft}>
                <Image
                  style={styles.crossImg}
                  source={require('../../assets/images/cross.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={swipeRight}>
                <Image
                  style={styles.rightImg}
                  source={require('../../assets/images/right.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        onSwipedRight={index => handleSwipe(index, 'Accept')}
        onSwipedLeft={index => handleSwipe(index, 'Reject')}
        stackSize={3}
        backgroundColor="transparent"
        cardHorizontalMargin={0}
        animateCardOpacity={true}
      />
    </View>
  );
};

export default MainScreen;