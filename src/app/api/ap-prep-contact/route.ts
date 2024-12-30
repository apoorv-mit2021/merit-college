import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import ApContact from '@/models/ap-prep-contact';

interface ContactData {
    name: string;
    email: string;
    phone: string;
    location: string;
    message?: string;
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        await dbConnect();

        const data: ContactData = await request.json();
        console.log(data);
        const contact = await ApContact.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            location:data.location,
            message: data.message || "no message provided",
        });

        console.log(contact);

        return NextResponse.json(
            { message: 'Application submitted successfully' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error:', error);

        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        );
    }
}
export async function GET(): Promise<NextResponse> {
    try {
        await dbConnect();

        const contacts = await ApContact.find({});
        console.log('Retrieved contacts:', contacts);

        return NextResponse.json(contacts, { status: 200 });

    } catch (error) {
        console.error('Error:', error);

        return NextResponse.json(
            { error: 'Failed to fetch contacts' },
            { status: 500 }
        );
    }
}
 