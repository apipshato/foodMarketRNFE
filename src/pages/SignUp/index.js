import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { Header, TextInput, Gap, Button } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import useForm from "../../utils/useForm";
import ImagePicker from "react-native-image-picker";
import { showMessage } from "react-native-flash-message";
import { useState } from "react";

const SignUp = ({ navigation }) => {
  const [form, setForm] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log("form: ", form);
    dispatch({ type: "SET_REGISTER", value: form });
    navigation.navigate("SignUpAddress");
  };

  const addPhoto = () => {
    ImagePicker.launchImageLibrary({}, response => {
      console.log("Response=", response);

      if (response.didCancel || response.error) {
        showMessage("Anda tidak memilih Photo");
      } else {
        const source = { uri: response.uri };
        const dataImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName
        };
        setPhoto(source)
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.page}>
        <Header title="Sign Up" subTitle="Register and Eat" onBack={() => {}} />
        <View style={styles.container}>
          <View style={styles.photo}>
            {/* viewpertama buat lingkaran putus2 */}

            {/* lingkaran yang grey view kedua */}
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                    <Image source={photo}  style={styles.photoContainer}/>
                 ) : ( 
                    <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                    </View>
                 )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={value => setForm("name", value)}
          />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={value => setForm("email", value)}
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            value={form.password}
            onChangeText={value => setForm("password", value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: { flex: 1 },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: "#F0F0F0",
    justifyContent: 'center',
    alignItems:'center'
  },
  photo: { alignItems: "center", marginTop: 26, marginBottom: 16 },
  borderPhoto: {
    borderWidth: 1,
    borderColor: "#8D92A3",
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: "dashed",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
  },
  addPhoto: { fontSize: 14, fontFamily: "Poppins-Light", color: "#8D92A3" }
});
