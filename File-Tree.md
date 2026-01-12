medical-center/
│
├─ public/
│   ├─ images/
│   ├─ icons/
│   └─ favicon.ico
│
├─ src/
│   ├─ app/                     # App Router
│   │   ├─ layout.tsx           # Layout عام (Header + Footer)
│   │   ├─ page.tsx             # Home
│   │   ├─ about/page.tsx
│   │   ├─ contact-us/page.tsx
│   │   ├─ careers/page.tsx
│   │
│   │   ├─ blog/
│   │   │   ├─ page.tsx         # Blog list
│   │   │   └─ [slug]/page.tsx  # Blog details
│   │   │
│   │   ├─ services/
│   │   │   ├─ page.tsx
│   │   │   └─ [slug]/page.tsx  # Service details
│   │   │
│   │   ├─ doctors/
│   │   │   ├─ page.tsx
│   │   │   └─ [slug]/page.tsx  # Doctor details
│   │   │
│   │   ├─ departments/
│   │   │   ├─ page.tsx
│   │   │   └─ [slug]/page.tsx  # Department details
│   │   │
│   │   ├─ branches/
│   │   │   ├─ page.tsx
│   │   │   └─ [slug]/page.tsx  # Branch details
│   │   │
│   │   ├─ offers/
│   │   │   ├─ page.tsx
│   │   │   └─ [slug]/page.tsx  # Offer details
│   │   │
│   │   └─ news/
│   │       ├─ page.tsx
│   │       └─ [slug]/page.tsx  # News details
│   │
│   ├─ components/              # Reusable components
│   │   ├─ Navbar.tsx
│   │   ├─ Footer.tsx
│   │   ├─ Button.tsx
│   │   └─ Card.tsx
│   │
│   ├─ features/                # Feature-specific UI
│   │   ├─ DoctorsCard.tsx
│   │   ├─ DepartmentsCard.tsx
│   │   └─ ServicesCard.tsx
│   │
│   ├─ hooks/
│   │   └─ useFetch.ts
│   │
│   ├─ services/                # API وهمي
│   │   └─ api/                 # كل API route كملف route.ts
│   │       ├─ blog/route.ts
│   │       ├─ services/route.ts
│   │       ├─ doctors/route.ts
│   │       ├─ departments/route.ts
│   │       ├─ branches/route.ts
│   │       ├─ offers/route.ts
│   │       └─ news/route.ts
│   │
│   ├─ styles/
│   │   └─ globals.css
│   │
│   └─ utils/ 
│       └─ formatDate.ts
│
├─ tsconfig.json
├─ package.json
├─ tailwind.config.js  (اختياري لو تستخدم Tailwind)
└─ next.config.js








features/
├─ blog/
│  ├─ BlogList.tsx
│  ├─ BlogCard.tsx
│  └─ BlogDetails.tsx
│
├─ services/
│  ├─ ServicesList.tsx
│  ├─ ServiceCard.tsx
│  └─ ServiceDetails.tsx
│
├─ doctors/
│  ├─ DoctorsList.tsx
│  ├─ DoctorCard.tsx
│  └─ DoctorDetails.tsx
│
├─ departments/
│  ├─ DepartmentsList.tsx
│  ├─ DepartmentCard.tsx
│  └─ DepartmentDetails.tsx
│
├─ branches/
│  ├─ BranchesList.tsx
│  └─ BranchDetails.tsx
│
├─ offers/
│  ├─ OffersList.tsx
│  └─ OfferDetails.tsx
│
└─ news/
   ├─ NewsList.tsx
   └─ NewsDetails.tsx
