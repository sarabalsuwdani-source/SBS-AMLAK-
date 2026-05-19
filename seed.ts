import { PrismaClient, Role, PropertyType } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
async function main(){
  const password = await bcrypt.hash('Sos112233@@', 10);
  await prisma.user.upsert({where:{username:'sbshorizons'},update:{},create:{username:'sbshorizons',email:'admin@sbshorizons.sa',password,role:Role.SUPER_ADMIN,mustChangePassword:true}});
  await prisma.property.upsert({where:{code:'A01'},update:{},create:{name:'عمارة الصفا',code:'A01',type:PropertyType.BUILDING,status:'نشط'}});
  await prisma.property.upsert({where:{code:'A02'},update:{},create:{name:'عمارة الصفا',code:'A02',type:PropertyType.BUILDING,status:'نشط'}});
  await prisma.property.upsert({where:{code:'WH'},update:{},create:{name:'المستودعات',code:'WH',type:PropertyType.WAREHOUSE,status:'نشط'}});
  await prisma.property.upsert({where:{code:'SM01'},update:{},create:{name:'الستريب مول',code:'SM01',type:PropertyType.STRIP_MALL,status:'نشط'}});
}
main().finally(()=>prisma.$disconnect());
