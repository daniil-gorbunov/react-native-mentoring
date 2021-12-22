import React, {useCallback, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Indicator} from 'components/gallery/Indicator';

interface GalleryProps {
  images: ImageSourcePropType[];
}

export const Gallery: React.FC<GalleryProps> = ({images = []}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const selectImage = useCallback((index: number) => {
    setActiveImageIdx(index);
  }, []);

  const showPrevImage = useCallback(() => {
    selectImage(activeImageIdx === 0 ? images.length - 1 : activeImageIdx - 1);
  }, [activeImageIdx, images.length, selectImage]);

  const showNextImage = useCallback(() => {
    selectImage(activeImageIdx === images.length - 1 ? 0 : activeImageIdx + 1);
  }, [activeImageIdx, images.length, selectImage]);

  return images.length > 0 ? (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.navButton} onPress={showPrevImage}>
          <Icon name={'navigate-before'} color={'#c3c3c3'} size={30} />
        </TouchableOpacity>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={images[activeImageIdx]}
        />
        <TouchableOpacity style={styles.navButton} onPress={showNextImage}>
          <Icon name={'navigate-next'} color={'#c3c3c3'} size={30} />
        </TouchableOpacity>
      </View>
      <Indicator
        totalNumber={images.length}
        activeIdx={activeImageIdx}
        onDotPress={selectImage}
      />
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 250,
  },
  image: {
    width: '70%',
    maxHeight: 250,
  },
  navButton: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
