import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native'
import React from 'react'

const ListProduct = ({navigation}) => {
    const [data, setData] = React.useState([
        {key:"1", type: "Mountain", name: "Pinarello", price: 1800, image: require('../assets/bifour_-removebg-preview.png')},
        {key:"2", type: "Mountain", name: "Pina Mountai", price: 1700, image: require('../assets/bione-removebg-preview.png')},
        {key:"3", type: "Roadbike", name: "Pina Bike", price: 1500, image: require('../assets/bithree_removebg-preview.png')},
        {key:"4", type: "Roadbike", name: "Pinarello", price: 1900, image: require('../assets/bitwo-removebg-preview.png')},
        {key:"5", type: "Roadbike", name: "Pinarello", price: 2700, image: require('../assets/bithree_removebg-preview.png')},
        {key:"6", type: "Mountain", name: "Pinarello", price: 1350, image: require('../assets/bitwo-removebg-preview.png')},
    ]);
    const [type, setType] = React.useState("All");
    const [colorText1, setColorText1] = React.useState("#E9414187");
    const [colorText2, setColorText2] = React.useState("#E9414187");
    const [colorText3, setColorText3] = React.useState("#E9414187");
    
  return (
    <View style={styles.container}>
        <View style={styles.style1}>
            <Text style={styles.title}>The world’s Best Bike</Text>
        </View>
        <View style={styles.style2}>
            <View style={{flexDirection: "row", justifyContent: 'space-between', width: '100%'}}>
                <TouchableOpacity onPress={()=>{
                    setType("All")
                    setColorText1("red")
                    setColorText2("#E9414187")
                    setColorText3("#E9414187")
                }}>
                    <View style={styles.btn}>
                        <Text style={[styles.textbtn, {color: colorText1}]}>All</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        setType("Roadbike")
                        setColorText2("red")
                        setColorText1("#F7BA8326")
                        setColorText3("#F7BA8326")
                    }}
                >
                    <View style={styles.btn}>
                        <Text style={[styles.textbtn, {color: colorText2}]}>Roadbike</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        setType("Mountain")
                        setColorText3("red")
                        setColorText1("#E9414187")
                        setColorText2("#E9414187")
                    }}
                >
                    <View style={styles.btn}>
                        <Text style={[styles.textbtn, {color: colorText3}]}>Mountain</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.style3}>
            <FlatList
                data={data.filter((item) => type === "All" || item.type === type)}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>{navigation.navigate({
                        name: "ProductDetail",
                        params: {
                            name: item.name,
                            price: item.price,
                            image: item.image,
                        }
                    
                    })}}>
                        <View style={styles.item}>
                        <View style={{flexDirection: "row", justifyContent: 'center'}}>
                            <Image source={require('../assets/heart.png')}
                            style={{width: 25, height: 25,}}
                            resizeMode='contain'
                            />
                        <Image source={item.image} 
                            style={{width: 135, height: 127}}
                            resizeMode='contain'
                        />
                        </View>
                        
                        <Text style={styles.itemname}>{item.name}</Text>
                        <Text style={{fontSize: "20px", fontFamily: "Voltaire"}}>
                            <Text style={{color: "rgba(247, 186, 131, 1)",}}>$ </Text>
                            <Text>{item.price}</Text>
                        </Text>
                    </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.key}
                numColumns={2}
            />
        </View>

    </View>
  )
}

export default ListProduct

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: '15px',
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    style1:{
        flex: 1,
        justifyContent: 'center',
    },
    style2:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    style3:{
        flex: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: "#E94141",
        fontSize: "25px",
        fontFamily: "Ubuntu",
        fontWeight: "700",
    },
    btn:{
        width: "99px",
        height: "32px",
        borderWidth: "1px",
        borderColor: "rgba(233, 65, 65, 0.53)",
        borderRadius: "5px",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbtn:{
        fontFamily: "Voltaire",
        fontSize: "20px",
        fontWeight: "400",
    },
    item:{
        width: "167px", 
        height: "200px", 
        backgroundColor: "#F7BA8326", 
        borderRadius: "10px", 
        justifyContent: 'center', 
        alignItems: 'center',
        marginHorizontal: "10px",
        marginVertical: "10px",
    },
    itemname:{
        fontFamily: "Voltaire",
        fontSize: "20px",
        fontWeight: "400",

    },
})