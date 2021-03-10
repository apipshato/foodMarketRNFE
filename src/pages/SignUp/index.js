import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';

const SignUp = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" subTitle="Register and Eat" onBack={() => {}} />
      <View style={styles.container}>
      {/* viewpertama buat lingkaran putus2 */}
      <View>
      {/* lingkaran yang grey view kedua */}
          <View>
                <Text>
                    Add Photo
                </Text>
          </View>
      </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
