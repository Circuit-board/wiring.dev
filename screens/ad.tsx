import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const ad = () => {
    return (
        <>
            <ScrollView

                contentContainerStyle={styles.container}>
                <LinearGradient style={{ width: "100%" }} colors={["#121212", "#1f1f1f"]}>
                    <View style={styles.page}>

                        <Text style={styles.title}>The place to have your code wired</Text>
                        <Text style={styles.text}>Get your own homepage quickly</Text>

                        <div style={{ marginBottom: 15 }} />

                        <Text style={styles.italic}>Starting at just $5!</Text>

                        <div style={{ marginBottom: 15 }} />

                        <Text style={styles.text}>Visit https://www.wiring.dev!</Text>

                        <div style={{ marginBottom: 15 }} />

                        <Image
                            source={{ uri: "https://wiring.dev/wires.png" }}
                            style={{ width: 64, height: 64, borderWidth: 5, borderColor: "#fff" }}
                        />
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
    },
    italic: {
        fontStyle: "italic",
        color: "#fff",
        fontSize: 20,
        fontFamily: "monospace",
        userSelect: "none"
    }
});

export default ad;