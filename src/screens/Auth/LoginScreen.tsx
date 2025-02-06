import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import { userValidationSchema } from '../../validations/userValidation';
import authService from '../../services/authService';
import useErrorStore from '../../store/errorStore';
import useUserStore from '../../store/userStore';

const LoginScreen = () => {
  const error = useErrorStore(state => state.error);
  const initialValues = useUserStore(state => state.initialValues);

  return (
    <View style={{ padding: 20 }}>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      <Formik
        initialValues={initialValues}
        validationSchema={userValidationSchema}
        onSubmit={async values => await authService.login(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              defaultValue={values.email}
              style={{
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                padding: 10,
              }}
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}

            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              defaultValue={values.password}
              style={{
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                padding: 10,
              }}
            />
            {errors.password && touched.password && (
              <Text>{errors.password}</Text>
            )}

            <Button onPress={() => handleSubmit()} title="Login" />
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
