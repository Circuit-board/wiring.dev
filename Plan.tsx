import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
    name: string;
    description: string;
};

const Plan = (props: Props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.text}>{props.description}</Text>

            <Button
                title="Get it!"
                onPress={() => navigation.navigate("Information" as never)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: "#fff",
        fontFamily: "monospace"
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontFamily: "monospace"
    },
    card: {
        height: 300,
        width: 300,
        padding: 15,
        borderWidth: 5,
        borderStyle: "dashed",
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Plan;
