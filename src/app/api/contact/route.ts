import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// This function handles POST requests to /api/contact
export async function POST(request: Request) {
    try {
        // 1. Parse the incoming request body to get the form data
        const body = await request.json();
        const { parentName, mobile, email, childAge, enquiry } = body;

        // 2. Validate the data
        if (!parentName || !mobile || !email || !childAge || !enquiry) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
        }

        // 3. Authenticate with Google Sheets
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // 4. Prepare the data to be appended in the correct order
        const newRow = [
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }), // Timestamp
            parentName,
            mobile,
            email,
            childAge,
            enquiry,
        ];

        // 5. Append the new row to your Google Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
            range: 'Sheet1!A:F', // IMPORTANT: Update range to include the new column F
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [newRow],
            },
        });

        // 6. Send back a success response
        return NextResponse.json({ success: true, message: 'Form submitted successfully!' });

    } catch (error) {
        console.error('Error processing form:', error);
        // 7. Send back an error response
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
    }
}
