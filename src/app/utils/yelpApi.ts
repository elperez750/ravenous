const API_KEY = "sb1_VLooTWCowj5sK7ofr5J4_juybybUKVmsLsdvy_WuOtGsQZC9qyO6N8PfJ3wsDXUX3Z5j7lCBxndGA6gxMBgRPb39WL3NJTeGsnB4XKikRUYiVXBKNGIW9eCyZnYx";
const API_BASE_URL = 'https://api.yelp.com/v3/businesses/search';

export type fetchBusinessesProps = {
    term: string;
    location: string;
    sortBy: string;
};

const fetchBusinesses = async ({ term, location, sortBy }: fetchBusinessesProps): Promise<any> => {
    try{
    const response = await fetch(`${API_BASE_URL}?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
    });


    if (response.ok) {
        const data = await response.json();
        return data;
    }
    throw new Error("Failed to get response");
    }
    catch(error) {
        console.error(error);
    }


 
};


export default fetchBusinesses;
