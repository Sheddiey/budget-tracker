import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase"

const createUserDocument = async (userId) => {
    try {
        await addDoc(collection(db, 'userData'), {
            userId: userId,
            name: '',
            income: 0,
            goals: '',
            expenses: [],
        });

        console.log('User document created succesfully');
    } catch (error) {
        console.error('Error creating userDocument: ', error)
    }
};

export {createUserDocument};