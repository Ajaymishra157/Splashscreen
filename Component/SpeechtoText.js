import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Voice from '@react-native-voice/voice';

const SpeechtoText = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Initialize voice listeners
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    setIsListening(true);
    try {
        await Voice.start('en-IN');  
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    setIsListening(false);
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const onSpeechResults = (e) => {
    if (e.value && e.value.length > 0) {
      setText(e.value[0]);  // Set the speech result to the TextInput
    }
  };

  const onSpeechError = (e) => {
    console.error('Error:', e);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Voice to Text</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          marginBottom: 20,
          paddingLeft: 10,
        }}
        value={text}
        placeholder="Type or speak"
        onChangeText={setText}
      />
      <Button
        title={isListening ? 'Stop Listening' : 'Start Listening'}
        onPress={() => {
          if (isListening) {
            stopListening();
          } else {
            startListening();
          }
        }}
      />
    </View>
  );
};

export default SpeechtoText;

