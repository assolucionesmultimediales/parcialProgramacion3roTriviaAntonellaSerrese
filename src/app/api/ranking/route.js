import { NextResponse } from 'next/server';
import dbConnect from '@/app/database/dbConnect';
import Ranking from '@/app/models/Ranking';

export async function GET() {
  await dbConnect();
  try {
    const ranking = await Ranking.find().sort({ score: 'desc' });
    console.log(ranking);
    return NextResponse.json({
      message: 'Ok',
      ranking: JSON.parse(JSON.stringify(ranking)),
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error });
  }
}
