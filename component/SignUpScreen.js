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
import * as yup from "yup";
import { Formik } from "formik";

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

const SignUpScreen = ({ navigation }) => {
	const formSchema = yup.object().shape({
		userName: yup.string().required("Please fill this field"),
		email: yup.string().email().required("Please fill this field"),
		password: yup.string().required("Please fill this field"),
		confirm: yup
			.string()
			.oneOf([yup.ref("password"), null], "password doesn't match"),
	});
	return (
		<Formik
			initialValues={{ email: "", userName: "", password: "" }}
			validationSchema={formSchema}
			onSubmit={(data) => {
				console.log(data);
			}}
		>
			{({ errors, handleBlur, handleChange, handleSubmit, values }) => (
				<View style={styles.container}>
					<Image source={pix} style={styles.firstImage} />

					<View style={styles.box}>
						<Image style={styles.secondImage} />
						<TouchableOpacity style={styles.imageUpload}>
							<Text style={styles.imageText}>Upload your Image</Text>
						</TouchableOpacity>

						<View style={styles.textHolder}>
							<Text style={styles.text}>User Name</Text>
							{errors.userName && (
								<Text style={styles.errorText}>{errors.userName}</Text>
							)}
							<TextInput
								placeholder="User Name"
								style={styles.input}
								value={values.userName}
								onChangeText={handleChange("userName")}
								onBlur={handleBlur("userName")}
							/>
						</View>

						<View style={styles.textHolder}>
							<Text style={styles.text}>Email</Text>
							{errors.email && (
								<Text style={styles.errorText}>{errors.email}</Text>
							)}
							<TextInput
								placeholder="Email"
								style={styles.input}
								value={values.email}
								onChangeText={handleChange("email")}
								onBlur={handleBlur("email")}
							/>
						</View>

						<View style={styles.textHolder}>
							<Text style={styles.text}>Password</Text>
							{errors.password && (
								<Text style={styles.errorText}>{errors.password}</Text>
							)}
							<TextInput
								placeholder="Password"
								style={styles.input}
								value={values.password}
								onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
							/>
						</View>

						<View style={styles.textHolder}>
							<Text style={styles.text}>Confirm Password</Text>
							{errors.confirm && (
								<Text style={styles.errorText}>{errors.confirm}</Text>
							)}
							<TextInput
								placeholder="Confirm Password"
								style={styles.input}
								value={values.confirm}
								onChangeText={handleChange("confirm")}
								onBlur={handleBlur("confirm")}
							/>
						</View>

						<TouchableOpacity style={styles.button} onPress={handleSubmit}>
							<Text style={styles.imageText}>Register</Text>
						</TouchableOpacity>

						<View style={styles.view}>
							<Text style={styles.lastText}>Already have an Account </Text>
							<TouchableOpacity
								onPress={() => {
									navigation.push("signIn");
								}}
							>
								<Text style={styles.lastText2}>Sign In</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			)}
		</Formik>
	);
};

export default SignUpScreen;
