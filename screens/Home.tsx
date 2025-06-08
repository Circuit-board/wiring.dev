import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Plan from "../Plan";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Home = ({ navigation }: any) => {
    return (
        <>
            <ScrollView

                contentContainerStyle={styles.container}>
                <LinearGradient style={{ width: "100%" }} colors={["#121212", "#1f1f1f"]}>
                    <View style={styles.page}>

                        <Text style={styles.title}>The place to have your code wired</Text>
                        <Text style={styles.text}>Get your own homepage quickly</Text>

                        <div style={{ marginBottom: 15 }} />

                        <Image
                            source={{ uri: "https://wiring.dev/wires.png" }}
                            style={{ width: 64, height: 64, borderWidth: 5, borderColor: "#fff" }}
                        />

                    </View>
                    <View style={styles.page}>
                        <Text style={styles.title}>Why me</Text>
                        <Text style={styles.text}>I have been coding for several years and</Text>
                        <Text style={styles.text}>I also have made many websites like this one.</Text>
                        <Text style={styles.text}>Buying any coding from me also helps me get better and supports me.</Text>
                    </View>
                    <View style={styles.page}>
                        <Text style={styles.title}>Choose your wires</Text>
                        <Text style={styles.text}>Find what's right for you</Text>
                        <Plan name="Home Page" description="Make a home page for your business or yourself $4.99"></Plan>
                    </View>
                </LinearGradient >
            </ScrollView >
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",

    },
    title: {
        color: "#fff",
        fontSize: 45,
        fontFamily: "monospace",
        userSelect: "none"
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "monospace",
        userSelect: "none"
    },
    page: {
        height: SCREEN_HEIGHT,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderStyle: "dashed",
        borderColor: "#fff",
    }
});

export default Home;