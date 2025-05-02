import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.error("Error getting item from storage:", error);
            return [];
        }
    }

    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key); 

            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            console.error("Error saving item to storage:", error);
        }
    }

    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key); 

            let myPasswords = passwords.filter((password)=> {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));

            return myPasswords;
            } catch (error) {
            console.error("Error removing item from storage:", error);
        }
    }

    return {
        getItem, 
        saveItem,
        removeItem
    }
}

export default useStorage;