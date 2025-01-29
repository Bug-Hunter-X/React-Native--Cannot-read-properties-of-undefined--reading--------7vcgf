// bug.js
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const DataFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setData({ name: 'John Doe', age: 30 });
    };
    fetchData();
  }, []);

  return (
    <View>
      {/* Error prone code, accessing data.name directly */}
      <Text>Name: {data?.name}</Text> 
      <Text>Age: {data?.age ?? 'N/A'}</Text> {/*Safe access with optional chaining and nullish coalescing */}
    </View>
  );
};
export default DataFetch;

//bugSolution.js
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const DataFetchSolution = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setData({ name: 'John Doe', age: 30 });
    };
    fetchData();
  }, []);

  return (
    <View>
      {/* Safe access using optional chaining and nullish coalescing */}
      <Text>Name: {data?.name ?? 'Unknown'}</Text>
      <Text>Age: {data?.age ?? 'N/A'}</Text>
    </View>
  );
};
export default DataFetchSolution;