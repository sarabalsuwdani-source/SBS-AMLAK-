'use client'

import Shell from '@/components/Shell'
import { useState } from 'react'

export default function Properties() {
  const [buildings, setBuildings] = useState<any[]>([])
  const [buildingName, setBuildingName] = useState('')
  const [buildingColor, setBuildingColor] = useState('#d4af37')

  const addBuilding = () => {
    if (!buildingName) {
      alert('اكتب اسم العمارة')
      return
    }

    const newBuilding = {
      id: Date.now(),
      name: buildingName,
      color: buildingColor,
      units: []
    }

    setBuildings([...buildings, newBuilding])
    setBuildingName('')
    alert('تم إضافة العمارة بنجاح')
  }

  const deleteBuilding = (id:number) => {
    setBuildings(buildings.filter((b)=> b.id !== id))
  }

  return (
    <Shell>
      <div className="top">
        <div>
          <h1>إدارة العقارات</h1>
          <div className="sub">
            إضافة عمائر ووحدات مع ألوان مخصصة
          </div>
        </div>
      </div>

      <div className="card">
        <h2>إضافة عمارة جديدة</h2>

        <div className="field">
          <label>اسم العمارة</label>
          <input
            value={buildingName}
            onChange={(e)=>setBuildingName(e.target.value)}
            placeholder="مثال: عمارة السلام"
          />
        </div>

        <div className="field">
          <label>لون العمارة</label>
          <input
            type="color"
            value={buildingColor}
            onChange={(e)=>setBuildingColor(e.target.value)}
          />
        </div>

        <button className="btn" onClick={addBuilding}>
          حفظ العمارة
        </button>
      </div>

      <div className="card">
        <h2>العقارات الحالية</h2>

        {buildings.length === 0 ? (
          <p>لا توجد عقارات مضافة</p>
        ) : (
          buildings.map((building) => (
            <div
              key={building.id}
              style={{
                borderRight: `8px solid ${building.color}`,
                padding: 20,
                marginBottom: 15,
                borderRadius: 15,
                background:'#111'
              }}
            >
              <h3>{building.name}</h3>

              <div
                style={{
                  width:40,
                  height:40,
                  borderRadius:'50%',
                  background:building.color
                }}
              />

              <button
                className="btn"
                onClick={()=>deleteBuilding(building.id)}
              >
                حذف العمارة
              </button>
            </div>
          ))
        )}
      </div>
    </Shell>
  )
}
