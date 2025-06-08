
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { RgbColorPicker } from "react-colorful";
import { Dimensions, ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity, Switch, SectionListComponent, Button, Linking, Alert } from "react-native";


type Btn = {
    label: string;
    description?: string;
}

type color = {
    r: number;
    g: number;
    b: number;
}

type Page = {
    gradientBg: boolean;
    color1?: color;
    color2?: color;
    bgColor?: color;
    buttons: Btn[];
    title: string;
    subtitle: string;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

async function submit(email: string, page: Page): Promise<boolean> {

    if (email == '' ||
        page.title == '' ||
        page.subtitle == '') {
        alert("Please fill out the fields!");
        return false;
    }

    fetch("https://wiring.dev/customers/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailadress: email,
            gradientBg: page.gradientBg,
            color1: page.color1,
            color2: page.color2,
            bgColor: page.bgColor,
            buttons: page.buttons,
            title: page.title,
            subtitle: page.subtitle,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Server response:", data);
        })
        .catch((err) => {
            console.error("Error submitting data:", err);
        });
    return true;
}

const Information = () => {

    const [buttons, setButtons] = useState<Btn[]>([]);

    const [currentButtonLabel, setCurrentButtonLabel] = useState('');

    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editingText, setEditingText] = useState("");

    const [email, setEmail] = useState('');
    const [valid, setValid] = useState(true);

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');

    const [gradientBg, setGradientBg] = useState(false);

    const [color1, setColor1] = useState({ r: 50, g: 100, b: 150 });
    const [color2, setColor2] = useState({ r: 50, g: 100, b: 150 });

    const [bgColor, setBgColor] = useState({ r: 50, g: 100, b: 150 });

    const handleChange = (text: string) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/i;
        setValid(emailRegex.test(text));
    };

    const handleTitleChange = (text: string) => {
        setTitle(text);
    };

    const handleSubTitleChange = (text: string) => {
        setSubTitle(text);
    };
    return (
        <>
            <ScrollView
                contentContainerStyle={styles.container}>
                <LinearGradient style={{ width: "100%" }} colors={["#121212", "#1f1f1f"]}>
                    <View style={styles.page}>
                        <div style={{ height: 10 }} />

                        <Text style={styles.text}>Page preferences</Text>

                        <Text style={styles.text}>* Means required</Text>

                        <div style={{ height: 10 }} />

                        <TextInput
                            placeholder="* Enter title"
                            onChangeText={handleTitleChange}
                            value={title}
                            style={{ borderColor: "#fff", borderWidth: 1, padding: 8, color: "#fff" }}
                        ></TextInput>

                        <TextInput
                            placeholder="* Enter subtitle"
                            onChangeText={handleSubTitleChange}
                            value={subTitle}
                            style={{ borderColor: "#fff", borderWidth: 1, padding: 8, color: "#fff" }}
                        ></TextInput>

                        <Text style={styles.text}>Gradient?</Text>
                        <input type="checkbox" onChange={(() => setGradientBg(!gradientBg))} style={styles.checkbox}></input>
                        {gradientBg ? (
                            <>
                                <Text style={styles.text}>Color 1</Text>
                                <RgbColorPicker onChange={setColor1}></RgbColorPicker>
                                <div style={{ height: 10 }} />
                                <Text style={styles.text}>Color 2</Text>
                                <RgbColorPicker onChange={setColor2}></RgbColorPicker>
                                <div style={{ height: 10 }} />
                            </>
                        ) : (
                            <>
                                <Text style={styles.text}>Background Color</Text>
                                <RgbColorPicker onChange={setBgColor}></RgbColorPicker>
                                <div style={{ height: 10 }} />
                            </>

                        )}

                        <TextInput onChangeText={(text) => {
                            setCurrentButtonLabel(text);
                        }} placeholder="Button text" style={styles.text}>

                        </TextInput>

                        <div style={{ height: 10 }} />

                        <Button
                            title="Create button for your page!"
                            color={"#121212"}
                            onPress={() => {
                                if (currentButtonLabel !== "") {
                                    setButtons([...buttons, { label: currentButtonLabel }]);
                                    setCurrentButtonLabel("");
                                }
                            }}
                        />

                        <div style={{ height: 10 }} />

                        <View>
                            {buttons.map((button, index) => (
                                <View key={index} style={{ borderColor: "#fff", borderWidth: 2, padding: 5, marginBottom: 5 }}>
                                    <Text style={{ color: "#fff", fontSize: 16 }}>{button.label}</Text>

                                    {editingIndex === index ? (
                                        <>
                                            <TextInput
                                                placeholder="Edit description"
                                                value={editingText}
                                                onChangeText={setEditingText}
                                                style={{ borderColor: 'gray', borderWidth: 1, color: "#fff", padding: 5, marginVertical: 5 }}
                                            />
                                            <Button
                                                title="✅ Save"
                                                onPress={() => {
                                                    const updated = [...buttons];
                                                    updated[index].description = editingText;
                                                    setButtons(updated);
                                                    setEditingIndex(null);
                                                    setEditingText("");
                                                }}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <Text style={{ color: "#aaa" }}>{button.description}</Text>
                                            <Button
                                                title="✏️"
                                                onPress={() => {
                                                    setEditingIndex(index);
                                                    setEditingText(button.description ? button.description : "");
                                                }}
                                            />
                                        </>
                                    )}
                                </View>
                            ))}
                        </View>

                        <div style={{ height: 10 }} />

                        <Text style={styles.text}>Ready to get it?</Text>

                        <div style={{ height: 50 }} />


                        <TextInput
                            placeholder="Enter email"
                            onChangeText={handleChange}
                            value={email}
                            style={{ borderColor: valid ? 'green' : 'red', borderWidth: 1, padding: 8, color: "#fff" }}
                        />
                        {!valid && <Text style={styles.red}>Invalid email format</Text>}

                        <div style={{ height: 10 }} />

                        <Button title="Pay now! ($5)" onPress={async () => {



                            const page: Page = {
                                gradientBg: gradientBg,
                                color1: color1,
                                color2: color2,
                                bgColor: bgColor,
                                buttons: buttons,
                                title: title,
                                subtitle: subTitle
                            };

                            if (!await submit(email, page))
                                return;
                            Linking.openURL("https://paypal.me/wiringdev");
                            submit(email, page);
                        }}></Button>
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
    page: {
        height: SCREEN_HEIGHT,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderStyle: "dashed",
        borderColor: "#fff",
    },
    red: {
        color: "#ff0000"
    },
    text: {
        color: "#fff",
        fontSize: 18
    },
    checkbox: {
        width: 50,
        height: 50
    },
});

export default Information;