import {
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
} from "react-native";
import React from "react";
import pix from "./cool.jpeg";

const { width, height } = Dimensions.get("window");
const W_SIZE = width * 0.8;
const H_SIZE = height * 0.25;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: width,
	},
	firstImage: {
		height: H_SIZE,
		resizeMode: "cover",
		backgroundColor: "orange",
		width: width,
		elevation: 3,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.3,
	},
	box: {
		width,
		minHeight: 512,
		backgroundColor: "lightgray",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		position: "absolute",
		top: 160,
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: 30,
	},

	secondImage: {
		marginTop: 10,
		marginBottom: 10,
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: "orange",
		borderWidth: 2,
		borderColor: "black",
	},
	imageUpload: {
		padding: 10,
		marginBottom: 10,
		backgroundColor: "#004080",
		borderRadius: 5,
	},
	button: {
		padding: 10,
		marginTop: 20,
		backgroundColor: "#004080",
		borderRadius: 5,
		width: W_SIZE,
		justifyContent: "center",
		alignItems: "center",
	},
	imageText: {
		color: "white",
		fontFamily: "Poppins",
		fontWeight: "bold",
	},
	textHolder: {
		width: W_SIZE,
		marginTop: 10,
	},
	text: {
		color: "black",
		fontFamily: "Poppins",
		fontWeight: "bold",
		fontSize: 15,
	},
	errorText: {
		color: "red",
		fontFamily: "Poppins",
		fontWeight: "bold",
		fontSize: 10,
	},
	input: {
		width: W_SIZE,
		height: 40,
		borderColor: "silver",
		borderWidth: 1,
		borderRadius: 2,
		paddingLeft: 10,
	},
	view: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
	},
	lastText: {
		color: "black",
		fontFamily: "Poppins",
		fontWeight: "bold",
		fontSize: 10,
	},
	lastText2: {
		color: "black",
		fontFamily: "Poppins",
		fontWeight: "bold",
		fontSize: 12,
	},
});

const SignInScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image source={pix} style={styles.firstImage} />

			<View style={styles.box}>
				<View style={styles.textHolder}>
					<Text style={styles.text}>Email</Text>
					<Text style={styles.errorText}>error</Text>
					<TextInput placeholder="Email" style={styles.input} />
				</View>

				<View style={styles.textHolder}>
					<Text style={styles.text}>Password</Text>
					<Text style={styles.errorText}>error</Text>
					<TextInput placeholder="Password" style={styles.input} />
				</View>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.imageText}>SignIn</Text>
				</TouchableOpacity>

				<View style={styles.view}>
					<Text style={styles.lastText}>Don't have an Account </Text>
					<TouchableOpacity
						onPress={() => {
							navigation.push("signUp");
						}}
					>
						<Text style={styles.lastText2}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default SignInScreen;
