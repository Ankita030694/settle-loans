import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        // Validate phone number
        const phone = formData.phone || formData.mobile || "";
        const cleanPhone = phone.toString().replace(/\D/g, '');
        if (cleanPhone.length !== 10) {
            return NextResponse.json(
                { success: false, error: 'A valid 10-digit phone number is required.' },
                { status: 400 }
            );
        }

        const dbData = {
            "Accomodation Status": "",
            "City": formData.state || "",
            "Email": formData.email || "",
            "Employment status": "",
            "Language": "",
            "Married": "",
            "Mobile Number": cleanPhone,
            "Monthly income": formData.monthlyIncome || "",
            "Name": formData.fullName || "",
            "Past Settlement": "",
            "Payment to start settlement": formData.setupFee === 'yes' ? 'Yes I can arrange' : 'No I need more time',
            "Queries": formData.queries || "",
            "Total credit card dues": formData.totalCreditCardDues || "",
            "Total personal loan amount": formData.totalPersonalLoanDues || "",
            "created": Date.now(),
            "question11": formData.recoveryPressure === 'yes' ? 'Facing some harassment' : 'No pressure',
            "Legal Notice": formData.legalNotice || ""
        };

        // All submissions should go to 'ContactPageForm' collection only
        const collectionName = 'ContactPageForm';

        // Check for existing submission in the last 24 hours in the ContactPageForm collection
        const twentyFourHoursAgo = Date.now() - (24 * 60 * 60 * 1000);

        const existingSubmissions = await adminDb.collection(collectionName)
            .where('Mobile Number', '==', cleanPhone)
            .where('created', '>', twentyFourHoursAgo)
            .limit(1)
            .get();

        if (!existingSubmissions.empty) {
            return NextResponse.json(
                { success: false, error: 'You have already submitted a request today. Please try again after 24 hours.' },
                { status: 429 }
            );
        }

        await adminDb.collection(collectionName).add(dbData);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
