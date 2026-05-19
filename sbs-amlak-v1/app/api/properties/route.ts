import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return NextResponse.json(properties)
}

export async function POST(req: Request) {
  const body = await req.json()

  const property = await prisma.property.create({
    data: {
      name: body.name,
      code: body.code,
      type: body.type || 'BUILDING',
      owner: body.owner || '',
      location: body.location || '',
      status: 'نشط'
    }
  })

  return NextResponse.json(property)
}
