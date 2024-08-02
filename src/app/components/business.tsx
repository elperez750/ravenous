import Image from "next/image";

export type BusinessComponentProps = {
    image: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: number;
    category: string;
    rating: number;
    reviewCount: number;
};

export const Business = ({
    image,
    name,
    address,
    city,
    state,
    zipcode,
    category,
    rating,
    reviewCount
}: BusinessComponentProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-light-gray m-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="w-full h-48 relative">
                <Image src={image} alt={name} layout="fill" objectFit="cover"/>
            </div>
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 text-deep-blue">{name}</h2>
                <p className="text-almost-black text-base">
                    {address}, {city}, {state}, {zipcode}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-sky-blue rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{category}</span>
                <span className="inline-block bg-coral-red rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Rating: {rating}</span>
                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-almost-black mb-2">Reviews: {reviewCount}</span>
            </div>
        </div>
    );
};
