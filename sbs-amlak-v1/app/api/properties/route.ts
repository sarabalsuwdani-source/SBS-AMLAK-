import { NextResponse } from 'next/server'
import { prisma } from '../../../../prisma/lib/prisma'

export async function GET() {
  try {
    const properties = await prisma.property.findMany()

    return NextResponse.json(properties)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const property = await prisma.property.create({
      data: {
        name: body.name || 'عقار جديد',
        code: body.code || Date.now().toString(),
        type: 'BUILDING'
      }
    })

    return NextResponse.json(property)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create property' },
      { status: 500 }
    )
  }
}
