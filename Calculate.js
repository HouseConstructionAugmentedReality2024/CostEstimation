import { StyleSheet, Text, View , TextInput, Button} from 'react-native'
import React, {useState} from 'react'

const Calculate = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [estimatedCost, setEstimatedCost] = useState(null);

    const calculateCost = () => {
        // Dummy calculation for demonstration purposes
        const area = parseFloat(length) * parseFloat(width);
        const volume = area * parseFloat(height);
        const materialCostPerCubicMeter = 100; // Replace with actual material cost
        const laborCostPerCubicMeter = 50; // Replace with actual labor cost
        const totalCost = volume * (materialCostPerCubicMeter + laborCostPerCubicMeter);
        setEstimatedCost(totalCost);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Length (m):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={length}
                onChangeText={text => setLength(text)}
            />
            <Text style={styles.label}>Width (m):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={width}
                onChangeText={text => setWidth(text)}
            />
            <Text style={styles.label}>Height (m):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={height}
                onChangeText={text => setHeight(text)}
            />
            <Button title="Calculate" onPress={calculateCost} />
            {estimatedCost !== null && (
                <Text style={styles.result}>Estimated Cost: ${estimatedCost.toFixed(2)}</Text>
            )}
        </View>
    )
}

export default Calculate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    result: {
        fontSize: 18,
        marginTop: 20,
    },
})