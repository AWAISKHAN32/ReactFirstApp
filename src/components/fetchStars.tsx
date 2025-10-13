import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
type RatingStarsProps = {
  rating: number;
};

const RatingStars:React.FC<RatingStarsProps> = ({rating}) => {
  // Clamp rating between 0 and 5
  const normalized = Math.max(0, Math.min(5, rating));

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((index) => {
        let iconName: string = 'star'
        let iconColor: string = 'white'

        if (normalized >= index) {
          // full star
          iconName = 'star';
          iconColor = 'rgba(223, 177, 50, 1)';
        } else if (normalized >= index - 0.5) {
          // half star
          iconName = 'star-half-empty';
          iconColor = 'rgba(223, 177, 50, 1)';
        } else {
          iconName = 'star-o';
          iconColor='rgba(223, 177, 50, 1)'
        }

        return (
          <FontAwesome
            key={index.toString()}
            name={iconName}

            size={15}
            color={iconColor}
            style={styles.star}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginHorizontal: 2,
  },
});

export default RatingStars;
