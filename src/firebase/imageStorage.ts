import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {app} from "./config"

const {v4: uuidv4} = require('uuid');

const storage=getStorage(app)

export const uploadFile = async (file: any) => {
	const storageRef = ref(storage, uuidv4());
	await uploadBytes(storageRef, file);
	const url = await getDownloadURL(storageRef);
	return url;
};