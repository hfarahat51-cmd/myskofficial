import { NextResponse } from "next/server";
export async function GET(){return NextResponse.json({stripe:true,paypal:true,cod:true,local:false});}
export async function PATCH(){return NextResponse.json({ok:true});}
