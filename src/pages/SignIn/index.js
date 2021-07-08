
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { Button, Gap, Header, TextInput } from "../../components";
import { setLoading, signUpAction } from "../../redux/action";
import { useForm } from "../../utils";

const SignIn = ({ navigation }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [form, setForm]= useForm({
    email: '',
    password: ''
  })

const dispatch =useDispatch();
  const onSubmit= ()=>{
   dispatch(signUpAction(form , navigation))
  }
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your the best meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={(value)=>setForm('email',value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setForm('password',value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={()=>navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
