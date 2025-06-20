// import { Account } from "appwrite"
import { ID, OAuthProvider, Query } from "appwrite"
import { account, appwriteConfig, database } from "./client"
import { redirect } from "react-router"
import { n } from "node_modules/react-router/dist/development/lib-CCSAGgcP.mjs"

export const loginWithGoogle = async () => {

    try {
        account.createOAuth2Session(OAuthProvider.Google) 
    } catch (error) {
        console.log({message : 'loginWithGoogle error', error})
    }
}
export const logoutUser = async () => {

    try {
        await account.deleteSession('current')
        // return redirect('/sign-in')
        return true
    } catch (error) {
        console.log(error)
    }
}
export const getUser = async () => {

    try {
        const user = await account.get()
        if(!user) {
            return redirect('/sign-in') 
        }

        const {documents} = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal('accountId', user.$id),
                Query.select(['name', 'email', 'imageUrl', 'joinedAt', 'accou ntId'   ])
            ]
        )
    } catch (error) {
        console.log(error)
    }
}
export const getGooglePicture = async () => {

    try {
        const session = await account.getSession('current')

        const oAuthToken = session.providerAccessToken;

        if (!oAuthToken) {
            console.log('No OAuth token found');
            return null;
        }
         const response = await fetch('https://people.googleapis.com/v1/people/me?personFields=photos', {
            headers: {
                Authorization: `Bearer ${oAuthToken}`,
            }
         })
         if (!response.ok) {
            console.log('Failed to fetch Google profile picture');
            return null;
         }
            const data = await response.json();
            const photoUrl = data.photos && data.photos.length > 0 ? data.photos[0].url : null;
            return photoUrl;
    } catch (error) {
        console.log(error)
    }
}
export const storeUserData= async () => {

    try {
        const user = await account.get()
        if(!user) {
            // return redirect('/sign-in') 
            return null
        }
        const {documents} = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal('accountId', user.$id),
               
            ]

        )
        if(documents.length > 0) {
            return documents[0]
        }
        const imageUrl = await getGooglePicture()
        const newUser = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                name: user?.name,
                email: user?.email,
                imageUrl: imageUrl,
                joinedAt: new Date().toISOString(),
                accountId: user?.$id,
            },
        )

        return newUser
    } catch (error) {
        console.log(error)
    } 
}
export const getExistingUser = async () => {

    try {
        const user = await account.get()
        if(!user) {
            return redirect('/sign-in') 
        }

        const {documents} = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal('accountId', user.$id),
                
            ]
        )

        if(documents.length === 0) {
            return null 
        }

        return documents[0]

    } catch (error) {
        console.log(error)
    }
}