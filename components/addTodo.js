import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={changeHandler}
                placeholder='Add todo...'
            />
            <Button
                title='Add'
                color='coral'
                onPress={() => submitHandler(text)} />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomColor: '#ddd'
    }
})