import { Account, Client, Databases, Storage } from 'appwrite';

export const appwriteConfig = {
    endpointUrl: import.meta.env.VITE_APPWRITE_ENDPOINT_URL || 'https://cloud.appwrite.io/v1',
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    apikey: import.meta.env.VITE_APPWRITE_API,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLL_ID,
    tripCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLL_ID

}

const client = new Client()
.setEndpoint(appwriteConfig.endpointUrl)
.setProject(appwriteConfig.projectId);

const account = new Account(client);
const database = new Databases(client)
const storage = new Storage(client);  

export { client, account, database, storage };
