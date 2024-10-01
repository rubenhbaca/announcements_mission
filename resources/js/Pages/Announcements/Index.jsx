import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Announcement from '@/Components/Announcement';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head, Link } from '@inertiajs/react';
 
export default function Index({ auth, announcements }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('announcements.store'), { onSuccess: () => reset() });
    };
 
    return (
        <AuthenticatedLayout>
            <Head title="Announcements" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What would you like to announce?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Announce</PrimaryButton>
                </form>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {announcements.data.map(announcement =>
                        <Announcement key={announcement.id} announcement={announcement} />
                    )}
                </div>
            </div>

            {announcements.data.length > 0 && <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 flex">
                <div className='text-center grow'>
                    {announcements.prev_page_url && <Link
                        disabled={announcements.prev_page_url}
                        href={announcements.prev_page_url}
                        className="grow rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Previous Page
                    </Link>}
                </div>

                <div className='text-center grow'>
                    page {announcements.current_page} of {announcements.last_page}
                </div>
                
                <div className='text-center grow'>
                    {announcements.next_page_url && <Link
                        disabled={announcements.next_page_url}
                        href={announcements.next_page_url}
                        className="grow rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Next Page
                    </Link>}
                </div>
            </div>}
        </AuthenticatedLayout>
    );
}