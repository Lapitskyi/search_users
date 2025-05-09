import {IUser} from "@/utils/types/user";
import Image from "next/image";

const UserCard = ({user}: { user: IUser }) => {
    return (
        <div className='border-2 border-gray-200 rounded-md p-4 shadow-md'>
            <div className='flex items-center gap-1'>
                <Image  width={100} height={100} src={user.avatar || '/images/defaultUser.svg'} alt={user.name}/>
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>

            </div>

            <div className='border-2 border-gray-200 rounded-md p-4 mt-4'>
                <strong>Company</strong>
                <p className='text-md'>{user.company.name}</p>
                <p className='text-md'>{user.company.bs}</p>
                <p className='text-md'>{user.company.catchPhrase}</p>
            </div>
            <div className='border-2 border-gray-200 rounded-md p-4 mt-4 flex gap-1'>

                <div>
                    <strong>Address</strong>
                    <p className='text-md'>City: {user.address.city}</p>
                    <p className='text-md'>Street: {user.address.street}</p>
                    <p className='text-md'>Suite: {user.address.suite}</p>
                    <p className='text-md'>Zipcode: {user.address.zipcode}</p>
                </div>
                <div>
                    <strong>Location</strong>
                    <p className='text-md'>lat: {user.address.geo.lat}</p>
                    <p className='text-md'>lng: {user.address.geo.lng}</p>
                </div>

            </div>


        </div>
    )
}
export default UserCard;