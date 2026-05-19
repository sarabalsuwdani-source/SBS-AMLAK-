# SBS AMLAK
نظام إدارة أملاك شركة اس بي اس هورايزونز.

## التشغيل المحلي
```bash
npm install
cp .env.example .env
# عدل DATABASE_URL لقاعدة PostgreSQL
npm run db:push
npm run db:seed
npm run dev
```

افتح: http://localhost:3000

## الحساب الرئيسي المؤقت
- Username: `sbshorizons`
- Password: `Sos112233@@`

> يجب تغيير كلمة المرور بعد أول دخول.

## النشر على amlak.sbshorizons.com
1. ارفع المشروع على GitHub.
2. اربطه مع Vercel أو DigitalOcean App Platform.
3. أنشئ PostgreSQL Database.
4. ضع متغيرات البيئة من `.env.example`.
5. شغّل `npm run db:push` و `npm run db:seed`.
6. اربط الدومين `amlak.sbshorizons.com` من لوحة الاستضافة.

## المزايا في V1
- واجهة عربية RTL
- Dark Luxury Mode
- Dashboard
- العقارات والوحدات
- المستأجرين
- العقود وأنواع الدفعات
- الدفعات وحالات السداد
- التقارير الأساسية
- إعدادات الواتساب
- Prisma schema جاهز لـ PostgreSQL
