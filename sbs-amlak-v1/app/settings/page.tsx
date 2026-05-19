'use client'

import Shell from '@/components/Shell'
import { useState } from 'react'

export default function Settings() {
  const [themeColor, setThemeColor] = useState('#D4AF37')
  const [sidebarColor, setSidebarColor] = useState('#111111')
  const [cardColor, setCardColor] = useState('#1a1a1a')

  const permissions = [
    'إضافة عقارات',
    'تعديل العقارات',
    'حذف العقارات',
    'إضافة وحدات',
    'تعديل الوحدات',
    'حذف الوحدات',
    'إضافة مستأجر',
    'تعديل المستأجر',
    'حذف المستأجر',
    'إضافة عقد',
    'تعديل عقد',
    'حذف عقد',
    'إضافة دفعات',
    'تعديل دفعات',
    'حذف دفعات',
    'إرسال رسائل للمستأجرين',
    'إدارة الموظفين والصلاحيات',
    'مشاهدة التقارير',
    'تعديل ألوان النظام'
  ]

  return (
    <Shell>
      <div className="top">
        <h1>إعدادات النظام</h1>
        <div className="sub">
          التحكم الكامل بالنظام والصلاحيات والألوان والرسائل
        </div>
      </div>

      {/* الألوان */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>ألوان النظام</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 20
          }}
        >
          <div>
            <label>لون النظام الأساسي</label>
            <input
              type="color"
              value={themeColor}
              onChange={(e) => setThemeColor(e.target.value)}
              style={{ width: '100%', height: 50 }}
            />
          </div>

          <div>
            <label>لون القائمة الجانبية</label>
            <input
              type="color"
              value={sidebarColor}
              onChange={(e) => setSidebarColor(e.target.value)}
              style={{ width: '100%', height: 50 }}
            />
          </div>

          <div>
            <label>لون البطاقات</label>
            <input
              type="color"
              value={cardColor}
              onChange={(e) => setCardColor(e.target.value)}
              style={{ width: '100%', height: 50 }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 10,
            marginTop: 20
          }}
        >
          <div
            style={{
              width: 80,
              height: 40,
              borderRadius: 10,
              background: themeColor
            }}
          />
          <div
            style={{
              width: 80,
              height: 40,
              borderRadius: 10,
              background: sidebarColor
            }}
          />
          <div
            style={{
              width: 80,
              height: 40,
              borderRadius: 10,
              background: cardColor
            }}
          />
        </div>
      </div>

      {/* الموظفين */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>إدارة الموظفين</h2>

        <div className="field">
          <label>اسم الموظف</label>
          <input placeholder="محمد أحمد" />
        </div>

        <div className="field">
          <label>اسم المستخدم</label>
          <input placeholder="employee01" />
        </div>

        <div className="field">
          <label>كلمة المرور</label>
          <input type="password" />
        </div>

        <h3 style={{ marginTop: 20 }}>
          الصلاحيات
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: 12
          }}
        >
          {permissions.map((item) => (
            <label key={item}>
              <input type="checkbox" /> {item}
            </label>
          ))}
        </div>

        <button
          className="btn"
          style={{ marginTop: 20 }}
        >
          إنشاء مستخدم
        </button>
      </div>

      {/* رسائل المستأجرين */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>رسائل المستأجرين</h2>

        <div className="field">
          <label>رسالة تذكير الدفعة</label>
          <textarea
            rows={4}
            defaultValue={`السلام عليكم {name}

نذكركم باستحقاق دفعة الإيجار للوحدة {unit}
بتاريخ {date}

المبلغ: {amount} ريال

SBS AMLAK`}
          />
        </div>

        <div className="field">
          <label>رسالة انتهاء العقد</label>
          <textarea
            rows={4}
            defaultValue={`السلام عليكم {name}

نحيطكم علمًا أن عقد الوحدة {unit}
سينتهي بتاريخ {endDate}

يرجى التواصل للتجديد.

SBS AMLAK`}
          />
        </div>

        <div className="field">
          <label>أيام التذكير قبل الاستحقاق</label>
          <select>
            <option>30 يوم</option>
            <option>14 يوم</option>
            <option>7 أيام</option>
            <option>3 أيام</option>
            <option>يوم واحد</option>
          </select>
        </div>

        <button className="btn">
          حفظ إعدادات الرسائل
        </button>
      </div>

      {/* تخصيص العقارات */}
      <div className="card">
        <h2>ألوان العقارات</h2>

        <div className="field">
          <label>اسم العمارة</label>
          <input placeholder="عمارة السلام" />
        </div>

        <div className="field">
          <label>لون العقار</label>
          <input type="color" />
        </div>

        <button className="btn">
          حفظ اللون
        </button>
      </div>
    </Shell>
  )
}
