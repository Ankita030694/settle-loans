import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        const dbData = {
            "Accomodation Status": "",
            "City": formData.state || "",
            "Email": formData.email || "",
            "Employment status": "",
            "Language": "",
            "Married": "",
            "Mobile Number": formData.phone || "",
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

        // Use the collection name the user specified in their recent edit
        const collectionName = formData.collectionName || 'ContactPageForm';

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
