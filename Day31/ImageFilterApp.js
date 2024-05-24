import { useState } from 'react';
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ImageDataType = {
  birds: string[];
  animals: string[];
  nature: string[];
  all?: string[];
};

type Category = 'birds' | 'animals' | 'nature' | 'all';


const App = () => {

  const [selectedCategory, setSelectedCategory] = useState<Category>('birds');


  const imageData: ImageDataType = {
    birds: [
      'https://cdn.pixabay.com/photo/2023/03/07/03/27/bird-7834912_1280.jpg',
      'https://cdn.pixabay.com/photo/2024/01/22/17/00/mandarin-ducks-8525827_1280.jpg',
      'https://cdn.pixabay.com/photo/2022/02/16/14/47/bird-7016926_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/06/05/11/11/blue-tit-8041988_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/07/12/12/03/bird-8122381_1280.png'
    ],
    animals: [
      'https://media.istockphoto.com/id/505221662/photo/elephants-in-river.jpg?s=2048x2048&w=is&k=20&c=9XtMtP8uXN7h6QGKEOaLI1szq-kuyqxgpjeRAS-Y80I=',
      'https://cdn.pixabay.com/photo/2024/05/12/09/28/brown-bear-8756478_1280.png',
      'https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588_1280.jpg',
      'https://media.istockphoto.com/id/1173399967/photo/a-finnish-fox.jpg?s=2048x2048&w=is&k=20&c=y8x53usth9nLSNDraM3twOYBLrND3MQ1yOfOOa8U8tI=',
      'https://media.istockphoto.com/id/970067024/photo/ezo-red-fox-child.jpg?s=2048x2048&w=is&k=20&c=QAI76ndg4AnfJfGqn0FIBEsIzDzfSkdw_t86cOhgPDo='

    ],
    nature: [
      'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
      'https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',
    ]
  }
  imageData.all = [
    ...imageData.birds,
    ...imageData.animals,
    ...imageData.nature
  ];

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    )
  }

  const filterImageByCategory = (category: Category) => {
    setSelectedCategory(category);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => filterImageByCategory('all')} >
          <Text>All</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => filterImageByCategory('animals')} >
          <Text>Animal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => filterImageByCategory('birds')} >
          <Text>Bird</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => filterImageByCategory('nature')} >
          <Text>Nature</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={imageData[selectedCategory]}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 0,
      },
      android: {
      }
    })
  },
  button: {
    height: 50,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: "#ccc",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.6,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      }
    })
  },
  imageContainer: {
    width: '45%',
    height: 150,
    margin: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    margin: 5,
    height: '100%',
    resizeMode: 'contain',
  }
});

export default App;
