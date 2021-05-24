import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, TextInput, Gap, Button, Select } from "../../components";
import useForm from "../../utils/useForm";

const SignUpAddress = ({ navigation }) => {
  const [form, setForm] = useForm({
    phoneNumber: "",
    address: "",
    houseNumber: "",
    city: 'Jakarta'
  });
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it’s valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput
          label="Phone Number"
          placeholder="Type your phone number"
          value={form.phoneNumber}
          onChangeText={value => setForm("phoneNumber", value)}
        />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" value={form.address}
          onChangeText={value => setForm("address", value)} />
        <Gap height={16} />
        <TextInput label="House No" placeholder="Type your house number" value={form.houseNumber}
          onChangeText={value => setForm("houseNumber", value)}/>
        <Gap height={16} />
        <Select label="City" value={form.city}
          onSelectChange={value => setForm("city", value)} />
        <Gap height={24} />
        <Button
          text="Sign Up Now"
          onPress={() => navigation.replace("SuccessSignUp")}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: { flex: 1 },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1
  }
});
